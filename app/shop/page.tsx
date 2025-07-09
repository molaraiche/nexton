"use client";

import React, { useState, useEffect } from "react";
import Categories from "../../components/Categories";
import PriceRange from "../../components/PriceRange";
import ProductCard from "../../components/shared/ProductCard";
import Sort from "../../components/Sort";
import Pagination from "@/components/Pagination";
import { supabase } from "@/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { productType } from "@/types";

const Shop = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";
  const itemsPerPage = 6;

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery] = useState(initialSearch);
  const [products, setProducts] = useState<productType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory) {
      params.set("category", selectedCategory);
    } else {
      params.delete("category");
    }

    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }

    router.push(`/shop?${params.toString()}`, { scroll: false });
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, router]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const from = (currentPage - 1) * itemsPerPage;
        const to = from + itemsPerPage - 1;

        let query = supabase
          .from("products")
          .select("*", { count: "exact" })
          .range(from, to);

        if (selectedCategory) {
          query = query.eq("category", selectedCategory);
        }

        if (searchQuery) {
          query = query.ilike("title", `%${searchQuery}%`);
        }

        const { data, error, count } = await query;

        if (error) {
          setError(error.message);
        } else {
          setProducts(data || []);
          setTotalPages(Math.ceil((count || 0) / itemsPerPage));
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err: unknown) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, searchQuery, currentPage]);

  return (
    <section className="flex mx-auto container mt-10 mb-20">
      <div className="w-[25%] flex flex-col justify-start ">
        <Categories
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
        <PriceRange />
        <Sort />
      </div>
      <div className="w-[75%] flex flex-col items-center gap-5">
        {loading && (
          <div className="h-[50vh] flex items-center justify-center">
            <span className="loader"></span>
          </div>
        )}
        {error && <div className="text-red-600">{error}</div>}

        {!loading && !error && (
          <div className="flex flex-wrap justify-center gap-5">
            {products.length === 0 ? (
              <div>No products found.</div>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            )}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default Shop;

// src/pages/ShopPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchProducts,
  setCategory,
  setSort,
  setFilter,
  // YENİ: Pagination import'ları
  setLimit,
  setOffset,
  setCurrentPage,
} from "../store/actions/productActions";
import ShopBanner from "../components/ShopBanner";
import ShopProductList from "../components/ShopProductList";
import ClientLogos from "../components/ClientLogos";

const ShopPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gender, categoryName, categoryId } = useParams();

  // YENİ: limit, offset, currentPage eklendi
  const { products, total, loading, sort, filter, limit, offset, currentPage } =
    useSelector((state) => state.product);

  // URL'den categoryId gelirse state güncelle ve ürünleri çek
  useEffect(() => {
    if (categoryId) {
      dispatch(setCategory(categoryId));
      dispatch(fetchProducts({ category: categoryId }));
    } else {
      dispatch(fetchProducts());
    }
  }, [categoryId, dispatch]);

  // Sort değişince
  const handleSortChange = (sortValue) => {
    dispatch(setSort(sortValue));
    dispatch(fetchProducts({ sort: sortValue }));
  };

  // Filter değişince
  const handleFilterChange = (filterValue) => {
    dispatch(setFilter(filterValue));
    dispatch(fetchProducts({ filter: filterValue }));
  };

  // YENİ: Sayfa değişince
  const handlePageChange = (page, newOffset) => {
    dispatch(setCurrentPage(page));
    dispatch(setOffset(newOffset));
    dispatch(fetchProducts({ offset: newOffset }));
  };

  // YENİ: Limit değişince
  const handleLimitChange = (newLimit) => {
    dispatch(setLimit(newLimit));
    dispatch(setOffset(0)); // Başa dön
    dispatch(setCurrentPage(1));
    dispatch(fetchProducts({ limit: newLimit, offset: 0 }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Shop Breadcrumb */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
            <nav className="flex items-center text-sm text-[#737373]">
              <span
                className="hover:text-[#252B42] cursor-pointer transition-colors duration-200"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <span className="mx-2 text-[#BDBDBD]">›</span>
              <span className="text-[#252B42] font-medium">Shop</span>
              {categoryName && (
                <>
                  <span className="mx-2 text-[#BDBDBD]">›</span>
                  <span className="text-[#252B42] font-medium capitalize">
                    {categoryName}
                  </span>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>

      <ShopBanner />

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
        </div>
      ) : (
        <ShopProductList
          products={products}
          total={total}
          sort={sort}
          filter={filter}
          // YENİ: Pagination prop'ları
          limit={limit}
          offset={offset}
          currentPage={currentPage}
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      )}

      <ClientLogos />
    </div>
  );
};

export default ShopPage;

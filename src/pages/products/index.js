import React from "react";

const Products = () => {
  return (
    <>
      <div className="w-full">
        <p className="text-2xl">Product Page</p>
        <div className="mt-10">
          <div className="w-full flex justify-end">
            <button className="px-7 py-2 bg-slate-500 cursor-pointer text-white hover:bg-slate-600 rounded-md">Add Product</button>
          </div>
          <div className="shadow-xl overflow-x-auto w-full px-3 py-3 mt-5">
            <table className="table table-auto w-full leading-normal">
              <thead className="uppercase text-gray-600 text-sm font-semibold bg-gray-200">
                <tr className="hidden md:table-row">
                  <th className="text-left p-3">
                    <p>Name</p>
                  </th>
                  <th className="text-left p-3">
                    <p>Status</p>
                  </th>
                  <th className="text-right p-3">
                    <p>Balance</p>
                  </th>
                  <th className="text-right p-3">
                    <p>Action</p>
                  </th>
                </tr>
              </thead>
              <tbody className="flex-1 text-gray-700 sm:flex-none">
                <tr className="border-t first:border-t-0 flex p-1 md:p-3 hover:bg-gray-100 md:table-row flex-col w-full flex-wrap">
                  <td className="p-1 md:p-3">
                    <p className="">person.name</p>
                  </td>
                  <td className="p-1 md:p-3">
                    <p className="">person.email</p>
                  </td>
                  <td className="p-1 md:p-3 md:text-right">
                    <p>$person.balance | currency</p>
                  </td>
                  <td className="text-right p-1 md:p-3">
                    <button type="button" className="inline-block text-gray-600 hover:text-gray-700">
                      <span className="text-blue-600 hover:text-blue-400 font-semibold">Edit</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

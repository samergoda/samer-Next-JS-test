"use server";
const APIURL = "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${APIURL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const payload: APIResponse<Product[]> = await res.json();

  if (!payload || payload.length === 0) {
    throw new Error("Product not found");
  }

  return payload;
}

export async function getProduct(id: string) {
  try {
    const res = await fetch(`${APIURL}/products/${id}`);

    if (!res.ok) {
      throw new Error("Product not found");
    }

    const payload: APIResponse<Product> = await res.json();

    if (!payload) {
      throw new Error("Product not found");
    }

    return payload;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Error fetching product:", error as Error);
  }
}

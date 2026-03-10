"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function AddProduct() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  // Replace this with your actual shop ID
  const shopId = "fc7fa9fe-eb76-438c-8161-9aa13a88e5ab"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!image) {
      alert("Please select an image")
      return
    }

    setLoading(true)

    try {
      // 1️⃣ Sanitize file name (Removes spaces/special chars that cause 400 errors)
      const fileExt = image.name.split('.').pop()
      const cleanFileName = `${Date.now()}.${fileExt}`

      // 2️⃣ Upload image to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(cleanFileName, image, { 
          cacheControl: "3600", 
          upsert: false 
        })

      if (uploadError) {
        // Log the full error to see the "message" (e.g., "Payload too large" or "Policy violation")
        console.error("Upload Error Details:", uploadError)
        alert(`Upload failed: ${uploadError.message}`)
        setLoading(false)
        return
      }

      // 3️⃣ Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("product-images")
        .getPublicUrl(cleanFileName)

      const imageUrl = publicUrlData.publicUrl

      // 4️⃣ Insert product into database
      const { error: dbError } = await supabase.from("products").insert({
        shop_id: shopId,
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        image_url: imageUrl
      })

      if (dbError) {
        console.error("Database Insert Error:", dbError)
        alert(`Database Error: ${dbError.message}`)
      } else {
        alert("Product added successfully!")
        // Reset form
        setName("")
        setDescription("")
        setPrice("")
        setStock("")
        setImage(null)
      }
    } catch (err) {
      console.error("Unexpected Error:", err)
      alert("An unexpected error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
        />

        <input
          placeholder="Price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          placeholder="Stock Quantity"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />

        <div style={{ border: "1px dashed #ccc", padding: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontSize: "12px" }}>Product Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            padding: "10px", 
            background: loading ? "#ccc" : "#0070f3", 
            color: "white", 
            border: "none", 
            cursor: "pointer",
            borderRadius: "4px"
          }}
        >
          {loading ? "Processing..." : "Publish Product"}
        </button>

      </form>
    </div>
  )
}
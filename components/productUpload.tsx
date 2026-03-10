"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function ProductUpload() {
  const [file, setFile] = useState<File | null>(null)

  async function uploadImage() {
    if (!file) return

    const fileName = `${Date.now()}-${file.name}`

    const { data, error } = await supabase.storage
      .from("product-images")
      .upload(fileName, file)

    if (error) {
      console.log(error)
      return
    }

    const { data: publicUrl } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName)

    console.log(publicUrl.publicUrl)
  }

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={uploadImage}>
        Upload
      </button>
    </div>
  )
}
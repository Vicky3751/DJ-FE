import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
const initialForm = {
  title: "",
  desc: "",
  link: ""
}
const AddCms = () => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  const [form, setForm] = useState(initialForm)
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    if (e.target.files.length > 3) {
      e.target.value = null;
      alert('Cannot select more than 3 images')
      return
    }
    if (images.length > 2) {
      e.target.value = null;
      alert('Maximum image count exceeded')
      return
    }
    setImages([...images, ...e.target.files]);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }
  const onChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className='container px-5 py-2'>
      <Navbar />
      <div className="mt-5">
        <div className="mt-5 add-collections">
          Add Collection
        </div>
        <>
          <input id="file-upload" type="file" multiple accept="image/*" onChange={onImageChange} className="invisible" />

        </>
        <div className="input-box mt-5">
          <label htmlFor="file-upload" className="custom-file-upload">
            + ADD IMAGES
          </label>
        </div>
        <div className="row mt-5">
          {imageURLS.map((imageSrc, index) => (
            <div className="col-md-3">
              <img key={index} src={imageSrc} alt="not fount" width={"100%"} height={'200'} />
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="container input-container">
          <div className="row">
            <label className="col-md-12" htmlFor="title">Title</label>
            <input className="col-md-4" type="text" id="title" name="title" value={form.title} onChange={(e) => onChange(e)} />
          </div>
          <div className="row">
            <label className="col-md-12" htmlFor="desc">Description</label>
            <input className="col-md-4" type="text" id="desc"  name="desc" value={form.desc} onChange={(e) => onChange(e)} />
          </div>
          <div className="row">
            <label className="col-md-12" htmlFor="link">Link</label>
            <input className="col-md-4" type="text" id="link" name="link" value={form.link} onChange={(e) => onChange(e)}/>
          </div>
          <button className="btn btn-primary">
            Add to Collections
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCms
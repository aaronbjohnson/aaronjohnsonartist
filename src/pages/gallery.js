import React from "react"
import Layout from '../components/layout'
// import ImageGallery from '../components/image-gallery'
import {Gallery} from "gatsby-theme-gallery"

const GalleryPage = () => {
   return (
       <Layout pageTitle="Gallery">
           <Gallery />
       </Layout>
   )
   }

export default GalleryPage
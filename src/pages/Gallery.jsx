import ImageGallery from 'react-image-gallery';
import React from 'react'


const images = [
  {
    id:1,
    original: 'https://i.ibb.co/ypHG7p8/pribncipalsirwithme2.jpg',
    thumbnail: 'https://i.ibb.co/ypHG7p8/pribncipalsirwithme2.jpg',
  },
  {
    id:2,
    original: 'https://i.ibb.co/GTpWvwh/teamphotoall.jpg',
    thumbnail: 'https://i.ibb.co/GTpWvwh/teamphotoall.jpg',
  },
  {
    id:3,
    original: 'https://i.ibb.co/gTjRkDx/publiclibrary21.jpg',
    thumbnail: 'https://i.ibb.co/gTjRkDx/publiclibrary21.jpg',
  },
  {
    id:4,
    original: 'https://i.ibb.co/PchDGbC/mirpurcadetprize1.jpg',
    thumbnail: 'https://i.ibb.co/PchDGbC/mirpurcadetprize1.jpg',
  },
  {
      id:5,
    original: 'https://i.ibb.co/jvYnGR6/motherlanguageinstitute.jpg',
    thumbnail: 'https://i.ibb.co/jvYnGR6/motherlanguageinstitute.jpg',
  },
  {
      id:6,
    original: 'https://i.ibb.co/mD0z1wh/martivhasains3.jpg',
    thumbnail: 'https://i.ibb.co/mD0z1wh/martivhasains3.jpg',
  },
  {
      id:7,
    original: 'https://i.ibb.co/FsZNxTW/IMG-20190423-185925.jpg',
    thumbnail: 'https://i.ibb.co/FsZNxTW/IMG-20190423-185925.jpg',
  },
  {
      id:8,
    original: 'https://i.ibb.co/jf4WX6R/IMG-20190422-104833.jpg',
    thumbnail: 'https://i.ibb.co/jf4WX6R/IMG-20190422-104833.jpg',
  },
  {
      id:9,
    original: 'https://i.ibb.co/7WQQ1Tk/iamwithprincipalsir.jpg',
    thumbnail: 'https://i.ibb.co/7WQQ1Tk/iamwithprincipalsir.jpg',
  },
  {
      id:10,
    original: 'https://i.ibb.co/j3sTpJ3/DSC01382.jpg',
    thumbnail: 'https://i.ibb.co/j3sTpJ3/DSC01382.jpg',
  },
  {
      id:11,
    original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
    thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
  },
    {
      id:12,
    original: 'https://i.ibb.co/7XdNGjM/DSC01072.jpg',
    thumbnail: 'https://i.ibb.co/7XdNGjM/DSC01072.jpg',
  },
    {
      id:13,
    original: 'https://i.ibb.co/HPSRwDH/DSC00775.jpg',
    thumbnail: 'https://i.ibb.co/HPSRwDH/DSC00775.jpg',
  },
    {
      id:14,
    original: 'https://i.ibb.co/xg8v41G/DSC00684.jpg',
    thumbnail: 'https://i.ibb.co/xg8v41G/DSC00684.jpg',
  },
    {
      id:15,
    original: 'https://i.ibb.co/FYN1yGX/DSC00673.jpg',
    thumbnail: 'https://i.ibb.co/FYN1yGX/DSC00673.jpg',
  },
    {
      id:16,
    original: 'https://i.ibb.co/R6V9JTm/DSC00391.jpg',
    thumbnail: 'https://i.ibb.co/R6V9JTm/DSC00391.jpg',
  },
    {
      id:17,
    original: 'https://i.ibb.co/vdQWMzs/DSC00283.jpg',
    thumbnail: 'https://i.ibb.co/vdQWMzs/DSC00283.jpg',
  },
    {
      id:18,
    original: 'https://i.ibb.co/r6x35Z7/DSC00024.jpg',
    thumbnail: 'https://i.ibb.co/r6x35Z7/DSC00024.jpg',
  },
    {
      id:19,
    original: 'https://i.ibb.co/4P1zwpD/dhakadcwithme.jpg',
    thumbnail: 'https://i.ibb.co/4P1zwpD/dhakadcwithme.jpg',
  },
    {
      id:20,
    original: 'https://i.ibb.co/6PVYBXn/ankara1.jpg',
    thumbnail: 'https://i.ibb.co/6PVYBXn/ankara1.jpg',
  },
    {
      id:21,
    original: 'https://i.ibb.co/tQgCL5c/anadoluhotemoutside.jpg',
    thumbnail: 'https://i.ibb.co/tQgCL5c/anadoluhotemoutside.jpg',
  },
    {
      id:22,
    original: 'https://i.ibb.co/5Bg7ZqM/turkeykabidprize.jpg',
    thumbnail: 'https://i.ibb.co/5Bg7ZqM/turkeykabidprize.jpg',
  },
    {
      id:23,
    original: 'https://i.ibb.co/X8pMqDq/certificates.jpg',
    thumbnail: 'https://i.ibb.co/X8pMqDq/certificates.jpg',
  },
    {
      id:24,
    original: 'https://i.ibb.co/0CCHjQ7/EMK-Certificate.jpg',
    thumbnail: 'https://i.ibb.co/0CCHjQ7/EMK-Certificate.jpg',
  },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
//     {
//       id:11,
//     original: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//     thumbnail: 'https://i.ibb.co/jk363k0/DSC01116.jpg',
//   },
];

function Gallery() {
    return (
        <>
            <section className="about_page d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="pt-5 about_page_heading">
                                <h1 className="text-center">Gallery</h1>
                                <span className="d-block text-center bottom_border"></span>
                            </div>

                            <div className="row my-5 d-flex justify-content-center flex-row">
                                <div className="col-12">
                                <ImageGallery items={images} />
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;




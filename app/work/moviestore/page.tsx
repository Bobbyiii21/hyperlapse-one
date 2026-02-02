"use client";
import React from "react";
import AccordionItem from "./Accordion";

let Demo_Video = 'https://firebasestorage.googleapis.com/v0/b/hyperlapseone.appspot.com/o/GT_Movie_Demo.mp4?alt=media&token=182c8d1a-e329-4d65-a9ce-5d74760ae469';

export default function MovieStore() {
  return (
    <div className="mt-5 flex-col items-center justify-center gap-4 px-5 py-10 md:py-10">
      <div className="lg:mx-52 justify-center text-center">
        <h1 className="text-[50px] md:text-[90px] tracking-tight inline font-semibold">
          GT Movies Store
        </h1>
        <div className="rounded-lg p-4">
          <h2 className="text-lg md:text-2xl leading-relaxed">
            GT Movies Store is a web application that allows users to access
            information about movies and place orders to purchase them. Users
            will also be able to list, create, edit, and delete movie reviews.
            The application features a user-friendly interface and provide
            useful information about each movie, such as its name, price,
            description, and an image.
          </h2>
        </div>

        <div style={{ height: "15px" }}></div>
        <h1 className="text-[35px] md:text-[50px] tracking-tight inline font-semibold">
          Project Development
        </h1>
        <div style={{ height: "15px" }}></div>

        <AccordionItem title="System Architecture" subtitle="Overview">
          <div className="flex justify-center">
            <img
              src="/moviestore_img/GT_moviestore_system_design.jpg"
              alt="Movie Store Architecture"
              className="w-3/6 h-3/4"
            />
          </div>

          <div style={{ height: "15px" }}></div>

          <div>
            <p>
              GT Movies Store is built on top of Django, a Python web framework.
              The application consists of four main components: home, movies,
              cart, and accounts. These components work together to provide a
              seamless user experience.
            </p>
            <p>
              The home component handles the main entry point of the website,
              while the movies component manages movie listings and details.
              This includes features such as filtering, sorting, and displaying
              movie information. The cart component allows users to add, remove,
              and update items in their shopping cart. Finally, the accounts
              component enables users to create an account, log in, and manage
              their profile.
            </p>
            <p>
              To store and retrieve data, Django uses a combination of models
              and databases. The models include Movie, Review, Order, and Item,
              which represent different entities within the application. Django
              follows the Model-View-Template (MVT) pattern, where models define
              the structure of the data, views handle user requests and interact
              with models, and templates render HTML responses.
            </p>
            <p>
              This architecture allows for developers to maintain a clean,
              modular codebase that is easy to extend and modify as needed. By
              leveraging Django's robust framework and adhering to best
              practices for organization and design, we can build a scalable and
              reliable e-commerce platform.
            </p>
          </div>
        </AccordionItem>

        <div style={{ height: "15px" }}></div>
        <AccordionItem
          title="User Experience"
          subtitle="Responses to User Stories"
        >
          <p className="mb-4">
            Screenshots below show key flows through the application.
          </p>

          <div className="mb-6">
            <div className="flex justify-center">
              <img
                src="/moviestore_img/About.jpeg"
                alt="About page"
                className="w-1/2 h-1/2"
              />
            </div>
            <p className="mt-2">The About page provides an overview of the application and its purpose.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-center">
              <img
                src="/moviestore_img/Signup.jpeg"
                alt="Sign up page"
                className="w-1/2 h-1/2"
              />
            </div>
            <p className="mt-2">The Sign up page lets users create an account. Registered users can view and modify their cart and reviews.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-center">
              <img
                src="/moviestore_img/Movies.jpeg"
                alt="Movies listing page"
                className="w-1/2 h-1/2"
              />
            </div>
            <p className="mt-2">The Movies page displays the catalog with filtering and sorting. Users can select a movie to view its details.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-center">
              <img
                src="/moviestore_img/Sinners.jpeg"
                alt="Movie details page - Sinners"
                className="w-1/2 h-1/2"
              />
            </div>
            <p className="mt-2">The movie details page shows full information, lets users read and add comments, and add the movie to their cart.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-center">
              <img
                src="/moviestore_img/Cart.jpeg"
                alt="Cart page"
                className="w-1/2 h-1/2"
              />
            </div>
            <p className="mt-2">The Cart page lets users view and remove items, then proceed to checkout.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-center">
              <img
                src="/moviestore_img/Orders.jpeg"
                alt="Orders page"
                className="w-1/2 h-1/2"
              />
            </div>
            <p className="mt-2">The Orders page shows a user&apos;s order history and order details.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-center">
              <img
                src="/moviestore_img/Admin.jpeg"
                alt="Admin dashboard"
                className="w-1/2 h-1/2"
              />
            </div>
            <p className="mt-2">The Admin dashboard lets administrators manage the database and users.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-center">
              <img
                src="/moviestore_img/Mobile.png"
                alt="Mobile view"
                className="w-1/6 h-auto"
              />
            </div>
            <p className="mt-2">The mobile view provides the same functionality as desktop on smaller screens.</p>
          </div>
        </AccordionItem>

        <div style={{ height: "15px" }}></div>
        <AccordionItem
          title="Process Description"
          subtitle="Development Process"
        >
          <div className="flex flex-col justify-center space-y-4">
            <p>
              I developed this application as a solo project over two days. The first day focused on setting up the Python environment, creating the Django project, and building the early user-facing pages. The second day was dedicated to adding authentication, reviews, cart functionality, and deploying to PythonAnywhere.
            </p>
            <p>
              When I ran into issues, I relied on online documentation and the class message board to troubleshoot. I found that classmates had already worked through similar problems, so I could move without getting stuck for too long.
            </p>
          </div>
        </AccordionItem>

        <div style={{ height: "15px" }}></div>
        <AccordionItem
          title="Demo Video"
          subtitle="Live Demo of the Application"
        >
          <div className="flex justify-center">
            <video src={Demo_Video} controls className="w-1/2 h-1/2" />
          </div>
        </AccordionItem>

        <div style={{ height: "15px" }}></div>
        
      </div>
    </div>
  );
}

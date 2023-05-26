import { useTitle } from '../../hooks/useTitle';
import BlogPDF from './BlogPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FaFilePdf, FaSpinner } from 'react-icons/fa';
// import ReactBanner from '../../assets/images/react-banner.png';
import BlogBanner from './BlogBanner';

const Blog = () => {

  useTitle("Blog");
  
  return (
    <div>

      {/* Blog Banner */}
      <BlogBanner></BlogBanner>

      <div className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4">
        {/* <header>
          <h2 className="content-title text-center">React Q&A Blog</h2>
          <h3 className='text-blue-700 text-xl font-bold text-center mb-1'>A. K. M. Shamiul Islam</h3>
          <p className='text-slate-700 font-medium text-center'>May 20, 2023</p>
        </header> */}

        <div className="text-center md:text-right mt-4">
          <PDFDownloadLink className='inline-flex items-center text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-all hover:duration-300 hover:from-blue-600 hover:to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center' document={<BlogPDF />} fileName="blog.pdf">
            {({ loading }) =>
              loading ? <><FaSpinner className='mr-2' /> Loading...</> : <><FaFilePdf className='mr-2' /> Download Blog (PDF)</>
            }
          </PDFDownloadLink>
        </div>

        <div className="p-4 lg:p-8 rounded-lg border-2 border-slate-200 mt-6">
          {/* React Banner */}
          {/* <div className="question-img">
            <img src={ReactBanner} alt="Q&amp;A Banner" />
          </div> */}

          <div>
            <header>
              <h2 className="content-title text-center">A. K. M. Shamiul Islam</h2>
            </header>
            <p className="content-description text-center mb-8">
              Published on May 20, 2023
            </p>
          </div>

          <div className="divider"></div>

          {/* Question-1 */}
          <div>
            <header className="question-text">
              <h3>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            </header>
            <div className="answer-container">
              <p className="answer text-xl mb-2">Answer:</p>
              <span className="font-bold"></span> An access token is like a pass that allows a user or application to access protected parts of a website or an API. It is given when someone logs in successfully. An access token is used to prove that the user is authorized to access certain resources. <br /><br />
              A refresh token is a special token that is given along with the access token. It is used to get a new access token when the current one expires. The refresh token helps avoid making the user log in again every time the access token expires. <br /><br />
              On the client-side, access tokens are usually stored in a safe place like cookies or the browser's local storage. These storage options make sure that the tokens are not easily accessible to others. It is important to store them securely to prevent unauthorized access.
            </div>
          </div>
          

          <div className="divider mt-8"></div>

          {/* Question-2 */}
          <div>
            <header className="question-text">
              <h3>2. Compare SQL and NoSQL databases.</h3>
            </header>
            <div className="answer-container">
              <p className="answer text-xl mb-2">Answer:</p>
              <span className="font-bold"></span> SQL databases are structured and use tables with predefined schemas, making them suitable for applications with complex relationships and structured data. They enforce data consistency and are commonly used for traditional, transactional systems. Examples include MySQL and PostgreSQL. <br /><br />
              NoSQL databases are non-relational and offer flexibility in data storage. They can handle unstructured, semi-structured, and varying data formats. NoSQL databases prioritize scalability and performance, making them suitable for modern applications with high scalability requirements and handling large volumes of data. Examples include MongoDB and Cassandra. <br /><br />
              In summary, SQL databases are structured and suitable for applications with complex relationships and structured data. They enforce data consistency and are often used for traditional, transactional systems. NoSQL databases, on the other hand, are flexible, scalable, and handle various types of data. They are commonly used in modern applications requiring high scalability, real-time analytics, and handling big data. The choice between SQL and NoSQL depends on the specific needs and requirements of the application.
            </div>
          </div>
          
          <div className="divider mt-8"></div>

          {/* Question-3 */}
          <div>
            <header className="question-text">
              <h3>3. What is express js? What is Nest JS?</h3>
            </header>
            <div className="answer-container">
              <p className="answer text-xl mb-2">Answer:</p>
              <span className="font-bold"></span>Express.js is a popular web application framework for Node.js. It provides a simple and minimalistic approach to building web applications and APIs. Express.js allows developers to handle routing, middleware, and HTTP requests easily. It is known for its flexibility, ease of use, and vast ecosystem of plugins and extensions. Express.js is widely used for creating server-side applications and APIs with JavaScript. <br /><br />
              Nest.js is a progressive and opinionated framework for building scalable and maintainable server-side applications. It is built with TypeScript and uses modern JavaScript features. Nest.js combines elements from different frameworks and design patterns to provide a robust and structured development experience. It utilizes decorators, dependency injection, and modules to help organize and manage application code. Nest.js is known for its support for building scalable and modular applications, making it suitable for enterprise-level projects. <br /><br />
              In summary, Express.js is a web application framework for Node.js that offers a simple and flexible way to build web applications and APIs. It focuses on ease of use and has a large ecosystem of plugins. Nest.js, on the other hand, is a TypeScript-based framework for creating scalable and maintainable server-side applications. It combines elements from different frameworks and provides a structured development experience, making it suitable for enterprise projects.
            </div>
          </div>
          
          <div className="divider mt-8"></div>

          {/* Question-4 */}
          <div>
            <header className="question-text">
              <h3>4. What is MongoDB aggregate and how does it work?</h3>
            </header>
            <div className="answer-container">
              <p className="answer text-xl mb-2">Answer:</p>
              <span className="font-bold"></span>MongoDB's aggregate feature allows advanced data analysis and manipulation by processing data in stages. Each stage performs specific operations on input documents and passes results to the next stage. The aggregate pipeline consists of multiple stages, enabling filtering, grouping, sorting, transforming, and calculating aggregate values to shape data as needed. <br /><br />
              This flexible feature facilitates complex data transformations and aggregations in an organized and efficient manner. It supports operations like grouping, aggregate functions, complex queries, and data joins. By leveraging MongoDB's querying and aggregation capabilities, you can perform these operations directly within the database, eliminating the need for extensive client-side processing. <br /><br />
              In simple words, aggregate provides a powerful and efficient solution for processing and analyzing data within MongoDB. Its ability to handle complex data manipulations and aggregations makes it a valuable tool for advanced data analysis tasks.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Blog;
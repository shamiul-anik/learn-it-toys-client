import { Document, Page, Text, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';

// Create styles
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

// https://react-pdf.org/styling
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  publishedDate: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    margin: 8,
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Times-Roman',
    textDecoration: 'underline',
  },
  titleAnswer: {
    marginLeft: 8,
    marginBottom: 4,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: 'green',
  },
  text: {
    margin: 8,
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 8,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document Component
const BlogPDF = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ React Questions & Answers by Shamiul ~
      </Text>
      <Text style={styles.title}>React Questions & Answers</Text>
      <Text style={styles.author}>A. K. M. Shamiul Islam</Text>
      <Text style={styles.publishedDate}>May 20, 2023</Text>

      {/* Have to Put the Images in Public Folder */}
      <Image style={styles.image} src="/images/react-banner.png" />

      <Text style={styles.subtitle}>
        Question-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?
      </Text>
      <Text style={styles.titleAnswer}>Answer:</Text>
      <Text style={styles.text}>
        An access token is like a pass that allows a user or application to access protected parts of a website or an API. It is given when someone logs in successfully. An access token is used to prove that the user is authorized to access certain resources.
      </Text>
      <Text style={styles.text}>
        A refresh token is a special token that is given along with the access token. It is used to get a new access token when the current one expires. The refresh token helps avoid making the user log in again every time the access token expires.
      </Text>
      <Text style={styles.text}>
        On the client-side, access tokens are usually stored in a safe place like cookies or the browser's local storage. These storage options make sure that the tokens are not easily accessible to others. It is important to store them securely to prevent unauthorized access.
      </Text>

      <Text style={styles.subtitle}>
        Question-2: Compare SQL and NoSQL databases.
      </Text>
      <Text style={styles.titleAnswer}>Answer:</Text>
      <Text style={styles.text}>
        SQL databases are structured and use tables with predefined schemas, making them suitable for applications with complex relationships and structured data. They enforce data consistency and are commonly used for traditional, transactional systems. Examples include MySQL and PostgreSQL.
      </Text>
      <Text style={styles.text}>
        NoSQL databases are non-relational and offer flexibility in data storage. They can handle unstructured, semi-structured, and varying data formats. NoSQL databases prioritize scalability and performance, making them suitable for modern applications with high scalability requirements and handling large volumes of data. Examples include MongoDB and Cassandra.
      </Text>
      <Text style={styles.text}>
        In summary, SQL databases are structured and suitable for applications with complex relationships and structured data. They enforce data consistency and are often used for traditional, transactional systems. NoSQL databases, on the other hand, are flexible, scalable, and handle various types of data. They are commonly used in modern applications requiring high scalability, real-time analytics, and handling big data. The choice between SQL and NoSQL depends on the specific needs and requirements of the application.
      </Text>

      <Text style={styles.subtitle}>
        Question-3: What is express js? What is Nest JS?
      </Text>
      <Text style={styles.titleAnswer}>Answer:</Text>
      <Text style={styles.text}>
        Express.js is a popular web application framework for Node.js. It provides a simple and minimalistic approach to building web applications and APIs. Express.js allows developers to handle routing, middleware, and HTTP requests easily. It is known for its flexibility, ease of use, and vast ecosystem of plugins and extensions. Express.js is widely used for creating server-side applications and APIs with JavaScript.
      </Text>
      <Text style={styles.text}>
        Nest.js is a progressive and opinionated framework for building scalable and maintainable server-side applications. It is built with TypeScript and uses modern JavaScript features. Nest.js combines elements from different frameworks and design patterns to provide a robust and structured development experience. It utilizes decorators, dependency injection, and modules to help organize and manage application code. Nest.js is known for its support for building scalable and modular applications, making it suitable for enterprise-level projects.
      </Text>
      <Text style={styles.text}>
        In summary, Express.js is a web application framework for Node.js that offers a simple and flexible way to build web applications and APIs. It focuses on ease of use and has a large ecosystem of plugins. Nest.js, on the other hand, is a TypeScript-based framework for creating scalable and maintainable server-side applications. It combines elements from different frameworks and provides a structured development experience, making it suitable for enterprise projects.
      </Text>

      <Text style={styles.subtitle}>
        Question-4: What is MongoDB aggregate and how does it work?
      </Text>
      <Text style={styles.titleAnswer}>Answer:</Text>
      <Text style={styles.text}>
        MongoDB's aggregate feature allows advanced data analysis and manipulation by processing data in stages. Each stage performs specific operations on input documents and passes results to the next stage. The aggregate pipeline consists of multiple stages, enabling filtering, grouping, sorting, transforming, and calculating aggregate values to shape data as needed.
      </Text>
      <Text style={styles.text}>
        This flexible feature facilitates complex data transformations and aggregations in an organized and efficient manner. It supports operations like grouping, aggregate functions, complex queries, and data joins. By leveraging MongoDB's querying and aggregation capabilities, you can perform these operations directly within the database, eliminating the need for extensive client-side processing.
      </Text>
      <Text style={styles.text}>
        In simple words, aggregate provides a powerful and efficient solution for processing and analyzing data within MongoDB. Its ability to handle complex data manipulations and aggregations makes it a valuable tool for advanced data analysis tasks.
      </Text>
      

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

export default BlogPDF;
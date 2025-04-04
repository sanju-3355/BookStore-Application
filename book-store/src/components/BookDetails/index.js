import React, {useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage'
import './index.css'
import Header from '../Header';
import { useCart } from '../../context/CartContext';

const sampleData = {
    "books": [
        {
            "id": 1,
            "title": "An Introduction to C & GUI Programming, 2nd Edition",
            "subtitle": "A beginner-friendly introduction to C and GUI development",
            "isbn13": "9781912047451",
            "price": "$12.94",
            "image": "https://itbook.store/img/books/9781912047451.png",
            "url": "https://itbook.store/books/9781912047451",
            "description": "This book provides a beginner-friendly introduction to C programming and GUI development. Covering the basics of C syntax, memory management, and graphical user interface creation, it is an essential guide for new programmers looking to build desktop applications. The second edition adds updated examples and modern best practices."
        },
        {
            "id": 2,
            "title": "Snowflake: The Definitive Guide",
            "subtitle": "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
            "isbn13": "9781098103828",
            "price": "$58.90",
            "image": "https://itbook.store/img/books/9781098103828.png",
            "url": "https://itbook.store/books/9781098103828",
            "description": "This comprehensive guide covers everything you need to know about the Snowflake data cloud platform. It explains best practices for designing, deploying, and optimizing data architectures on Snowflake, making it a must-read for data engineers and analysts."
        },
        {
            "id": 3,
            "title": "Python for Data Analysis, 3rd Edition",
            "subtitle": "Data Wrangling with pandas, NumPy, and Jupyter",
            "isbn13": "9781098104030",
            "price": "$34.96",
            "image": "https://itbook.store/img/books/9781098104030.png",
            "url": "https://itbook.store/books/9781098104030",
            "description": "A must-have book for data scientists and analysts, this edition covers the latest features of Python libraries such as pandas and NumPy. It provides hands-on examples of data cleaning, analysis, and visualization using Jupyter notebooks."
        },
        {
            "id": 4,
            "title": "Reliable Machine Learning",
            "subtitle": "Applying SRE Principles to ML in Production",
            "isbn13": "9781098106225",
            "price": "$43.99",
            "image": "https://itbook.store/img/books/9781098106225.png",
            "url": "https://itbook.store/books/9781098106225",
            "description": "This book bridges the gap between machine learning and site reliability engineering (SRE). It provides strategies to ensure ML models are reliable, scalable, and maintainable in production."
        },
        {
            "id": 5,
            "title": "Data Visualization with Python and JavaScript, 2nd Edition",
            "subtitle": "Scrape, Clean, Explore, and Transform Your Data",
            "isbn13": "9781098111878",
            "price": "$60.99",
            "image": "https://itbook.store/img/books/9781098111878.png",
            "url": "https://itbook.store/books/9781098111878",
            "description": "A hands-on guide for data scientists and developers who want to use Python and JavaScript for data visualization. Learn how to clean, analyze, and visualize data using powerful libraries and frameworks."
        },
        {
            "id": 6,
            "title": "Learning Microsoft Power BI",
            "subtitle": "Transforming Data into Insights",
            "isbn13": "9781098112844", "price": "$40.97",
            "image": "https://itbook.store/img/books/9781098112844.png",
            "url": "https://itbook.store/books/9781098112844",
            "description": "This book provides step-by-step instructions on leveraging Microsoft Power BI to analyze data, create compelling reports, and generate business insights."
        }, {
            "id": 7,
            "title": "C++ Software Design",
            "subtitle": "Design Principles and Patterns for High-Quality Software",
            "isbn13": "9781098113162", "price": "$48.99",
            "image": "https://itbook.store/img/books/9781098113162.png",
            "url": "https://itbook.store/books/9781098113162",
            "description": "Learn best practices for designing and structuring C++ applications using software engineering principles, design patterns, and modern development techniques."
        }, {
            "id": 8,
            "title": "Terraform: Up and Running, 3rd Edition",
            "subtitle": "Writing Infrastructure as Code",
            "isbn13": "9781098116743", "price": "$41.99",
            "image": "https://itbook.store/img/books/9781098116743.png",
            "url": "https://itbook.store/books/9781098116743",
            "description": " A detailed guide on using Terraform to manage infrastructure as code, automate cloud deployments, and improve DevOps workflows."
        }, {
            "id": 9,
            "title": "Flutter and Dart Cookbook",
            "subtitle": "Developing Full-Stack Applications for the Cloud",
            "isbn13": "9781098119515", "price": "$42.99",
            "image": "https://itbook.store/img/books/9781098119515.png",
            "url": "https://itbook.store/books/9781098119515",
            "description": "Explore practical recipes and expert techniques for developing cross-platform mobile and web applications using Flutter and Dart."
        }, {
            "id": 10,
            "title": "Python Data Science Handbook, 2nd Edition",
            "subtitle": "Essential Tools for Working with Data",
            "isbn13": "9781098121228", "price": "$56.99",
            "image": "https://itbook.store/img/books/9781098121228.png",
            "url": "https://itbook.store/books/9781098121228",
            "description": "A must-read for data scientists and analysts, covering key Python tools such as Jupyter, pandas, NumPy, Matplotlib, and scikit-learn for data analysis and machine learning."
        }, {
            "id": 11,
            "title": "Raspberry Pi Cookbook, 4th Edition",
            "subtitle": "Software and Hardware Problems and Solutions",
            "isbn13": "9781098130923", "price": "$14.99",
            "image": "https://itbook.store/img/books/9781098130923.png",
            "url": "https://itbook.store/books/9781098130923",
            "description": "A practical guide filled with step-by-step recipes for building projects with Raspberry Pi, covering programming, networking, sensors, and automation."
        }, {
            "id": 12,
            "title": "Azure Maps Using Blazor Succinctly",
            "subtitle": "Learn how to integrate Azure Maps with Blazor applications.", "isbn13": "9781642002263", "price": "$0.00",
            "image": "https://itbook.store/img/books/9781642002263.png",
            "url": "https://itbook.store/books/9781642002263",
            "description": "A concise guide to building interactive location-based applications using Azure Maps and the Blazor framework."
        }, {
            "id": 13,
            "title": "Full Stack Quarkus and React",
            "subtitle": "Hands-on full stack web development with Java, React, and Kubernetes",
            "isbn13": "9781800562738", "price": "$39.99",
            "image": "https://itbook.store/img/books/9781800562738.png",
            "url": "https://itbook.store/books/9781800562738",
            "description": "Learn how to build modern full-stack applications using Quarkus, React, and Kubernetes, focusing on high-performance development and deployment."
        }, 
        {
            "id": 14,
            "title": "Mathematics for Game Programming and Computer Graphics",
            "subtitle": "Explore the essential mathematics for creating, rendering, and manipulating 3D virtual environments", "isbn13": "9781801077330", "price": "$49.99",
            "image": "https://itbook.store/img/books/9781801077330.png",
            "url": "https://itbook.store/books/9781801077330",
            "description": "A deep dive into mathematical concepts essential for game development and computer graphics, including transformations, physics, and 3D rendering."
        }, {
            "id": 15,
            "title": "Architecting and Building High-Speed SoCs",
            "subtitle": "Design, develop, and debug complex FPGA-based systems-on-chip",
            "isbn13": "9781801810999", "price": "$35.99",
            "image": "https://itbook.store/img/books/9781801810999.png",
            "url": "https://itbook.store/books/9781801810999",
            "description": "A comprehensive guide to designing high-performance System-on-Chip (SoC) architectures using FPGA technologies and modern development techniques."
        }, {
            "id": 16,
            "title": "Web Development with Julia and Genie",
            "subtitle": "A hands-on guide to high-performance server-side web development with the Julia programming language", "isbn13": "9781801811132", "price": "$39.99", 
            "image": "https://itbook.store/img/books/9781801811132.png", 
            "url": "https://itbook.store/books/9781801811132",
            "description": "Learn how to build fast, scalable, and efficient web applications using the Julia programming language and the Genie web framework."
        }, {
            "id": 17,
            "title": "Java Memory Management",
            "subtitle": "A comprehensive guide to garbage collection and JVM tuning",
            "isbn13": "9781801812856", "price": "$34.99",
            "image": "https://itbook.store/img/books/9781801812856.png",
            "url": "https://itbook.store/books/9781801812856",
            "description": "An in-depth exploration of Java’s memory management system, covering garbage collection strategies, performance tuning, and debugging techniques."
        }, {
            "id": 18,
            "title": "Test-Driven Development with C++",
            "subtitle": "A simple guide to writing bug-free Agile code",
            "isbn13": "9781803242002", "price": "$44.99",
            "image": "https://itbook.store/img/books/9781803242002.png",
            "url": "https://itbook.store/books/9781803242002",
            "description": "A practical guide to implementing test-driven development (TDD) in C++, improving software quality and maintaining clean, reliable codebases."
        }, {
            "id": 19,
            "title": "Software Test Design",
            "subtitle": "Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps",
            "isbn13": "9781804612569", "price": "$44.99",
            "image": "https://itbook.store/img/books/9781804612569.png",
            "url": "https://itbook.store/books/9781804612569",
            "description": "A hands-on guide to designing and executing software tests, ensuring reliability and performance across different platforms."
        }, {
            "id": 20,
            "title": "Microservices with Go",
            "subtitle": "Building scalable and reliable microservices with Go",
            "isbn13": "9781804617007", "price": "$29.99",
            "image": "https://itbook.store/img/books/9781804617007.png",
            "url": "https://itbook.store/books/9781804617007",
            "description": "Learn how to design, build, and deploy microservices-based architectures using the Go programming language, focusing on scalability and reliability."
        }] 
}

const BookDetails = ({book}) => {
    const {addToCartItem} = useCart();
    const {id} = useParams();
    const navigate = useNavigate();
    const [booksData, setBooksData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const selectedBook = sampleData.books.find(each => each.id === parseInt(id));
        if (selectedBook) {
            setBooksData(selectedBook);
        } else {
            setError("Book not found");
        }
        setLoading(false);
    }, [id]);

    if (loading) {
       return <Loader />
    }

    if (error) {
        return <ErrorMessage />
     }

    const handleAddToCart = () => {
        if (!booksData || !booksData.id) {
            console.error("Invalid book data:", booksData);
            return;
        }
        addToCartItem(booksData);
    };

return (
    <div>
        <Header />
        <div className='container'>
        <div className="book-detail-container">
          <img src={booksData.image} alt={booksData.title} className="book-image" />
          <h2>{booksData.title}</h2>
          {booksData.subtitle && <h4>{booksData.subtitle}</h4>}
          <p className="book-price">{booksData.price}</p>
          <p className='book-description'>{booksData.description}</p>
          <div className='btn-container'>
             <Link to="/books" className='link-item'>
               <button className="back-button" type='button' onClick={() => navigate("/books")}>
                  Back
               </button>
             </Link>
             <Link to="/cart" className='link-item'>
               <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
             </Link>            
          </div>
       </div>
       </div>
    </div>
  );
}  

export default BookDetails

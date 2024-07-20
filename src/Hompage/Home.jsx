import React,{useEffect,useState,useRef, useCallback} from 'react'
import FirstHeadContact from '../components/FirstHeadContact'
import MainHeader from '../components/MainHeader'
import Collections from '../components/Collections'
import Features from '../components/Features'
import Trends from '../components/Trends'
import BlogsAndFaqs from '../components/BlogsAndFaqs'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

const Home = ({select}) => {
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const heroRef = useRef(null);
    const closeDivRef = useRef(null);
    const furniDiv = useRef(null)
    const [data, setData] = useState([]);
    let topDiv = false
    console.log(select)
    // 
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeroVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        const handleVisibilityToggle = () => {
            if (closeDivRef.current) {
                if (mediaQuery.matches) { // Only apply changes on large screens
                    if (isHeroVisible) {
                        closeDivRef.current.style.display = 'block';
                        closeDivRef.current.classList.remove('hidden');
                    } else {
                        closeDivRef.current.style.display = 'none';
                        closeDivRef.current.classList.add('hidden');
                        furniDiv.current.style.paddingTop = "15px"
                    }
                } else {
                    // Ensure the div is hidden on smaller screens
                    closeDivRef.current.style.display = 'none';
                    closeDivRef.current.classList.add('hidden');
                }
            }
        };

        handleVisibilityToggle();
        mediaQuery.addEventListener('change', handleVisibilityToggle); // Listen for screen size changes
        return () => {
            mediaQuery.removeEventListener('change', handleVisibilityToggle); // Cleanup on unmount
        };
    }, [isHeroVisible]);

    const fetchItems = useCallback(
        async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json()
                setData(data.products);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        }
    )

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className='w-full overflow-hidden'>
            <div className="hidden lg:block">
                <FirstHeadContact />
            </div>
            <div className="w-full pb-10 bg-top-bg">
                <div className="">
                    <Header select={select} closeDivRef={closeDivRef} topDiv={true} furniDiv={furniDiv} />
                </div>
                <div className="">
                    {<HeroSection topDiv={true} heroRef={heroRef}/>}
                </div>
            </div>
            <Collections />
            <Features />
            <Trends data={data} />
            <BlogsAndFaqs />

            <Footer />

        </div>
    )
}

export default Home
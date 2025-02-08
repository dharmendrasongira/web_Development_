import { useEffect, useState } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import image from '../assets/image.png'

const CricketScore = () => {
    const [data, setdata] = useState([]);  // Initialize with empty array instead of predefined data

    const getData = async () => {
        try {
            const response = await fetch("https://api.cricapi.com/v1/cricScore?apikey=7ec2d6b2-27b0-4589-92cb-29ef5267fab5");
            const result = await response.json();
            console.log(result);  // For Debugging Purposes
            setdata(result.data);  // Directly use result.data to set the matches
        } catch (error) {
            console.log("error", error);
        }
    };

    // Function to set search term
    const setSearch = (searchTerm) => {
        // Filter the matches based on search term and update the state
        const filteredMatches = data.filter(match => 
            match.t1.toLowerCase().includes(searchTerm.toLowerCase()) || 
            match.t2.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setdata(filteredMatches);  // Update state with filtered data
    };

    useEffect(() => {
        getData();  // Fetch data when component mounts
    }, []);

    return (
        <div className= "main_container static bg-cover bg-center mt-0  bg-repeat " /*"main_container static bg-repeat bg-fixed mt-0 " */ style={{ backgroundImage: `url(${image})` }} >
            <SearchBar setSearch={setSearch} />  {/* Pass the setSearch function to SearchBar */}
            <div className="relative z-10 container w-full flex flex-wrap justify-evenly mt-8">
                {data ? <Cards data={data} /> : <p>Loading or no matches available...</p>}
            </div>
        </div>
    );
};

export default CricketScore;

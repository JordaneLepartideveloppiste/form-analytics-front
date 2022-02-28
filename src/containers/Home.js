import axios from "axios";
import { useEffect, useState } from "react";
import Responses from "../components/Responses";
import Users from "../components/Users";
import "../assets/scss/Home.scss";

const Home = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            "http://localhost:5000/"
          );
          console.log(res.data);
          setData(res.data);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchData();
    }, []);

    
    

    

    return isLoading ? (
      <span>Chargement des données en cours...</span>
    ) : (
      <div className="home">
        <div className="home-content">
          <Responses
            data={data}
            
          />
          <Users
            data={data}
            
          />
        </div>
      </div>
    );
};

export default Home;

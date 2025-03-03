import ProfileCard from "./components/ProfileCard";
import InfoCard from "./components/InfoCard";
import { Container } from "react-bootstrap";

function Officers() {
    return (
        <div className="backgroundcolor">
            
            <Container fluid className='px-4 py-4 text-center'>
                <h1> Meet Your Officers!</h1>
			</Container>

            <Container className="py-4 d-flex flex-wrap gap-3 justify-content-center">
                <ProfileCard 
                    imgSrc="/AlexImg.jpg" 
                    title="President"
                    name="Alex Douk" 
                    linkedInUrl="https://www.linkedin.com/in/alex-douk1/"
                    githubUrl="https://github.com/adouk04"
                />
                <ProfileCard 
                    imgSrc="/YusufImg.jpeg"
                    title="Vice President" 
                    name="Yusuf Shakhpaz"
                    linkedInUrl="https://www.linkedin.com/in/yusufshakhpaz/"
                    githubUrl="https://github.com/Shakhpazy"
                />
                <ProfileCard 
                    imgSrc="/LwaziImg.jpg" 
                    title="Workshop Facilitator" 
                    name="Lwazi Mabota"
                    linkedInUrl="https://www.linkedin.com/in/lwazi-mabota1/"
                    githubUrl="a"
                />
                <ProfileCard 
                    imgSrc="/LwaziImg.jpg" 
                    title="Workshop Facilitator" 
                    name="Lwazi Mabota"
                    linkedInUrl="https://www.linkedin.com/in/lwazi-mabota1/"
                    githubUrl="a"
                />
                <ProfileCard 
                    imgSrc="/LwaziImg.jpg" 
                    title="Workshop Facilitator" 
                    name="Lwazi Mabota"
                    linkedInUrl="https://www.linkedin.com/in/lwazi-mabota1/"
                    githubUrl="a"
                />
                <ProfileCard 
                    imgSrc="/LwaziImg.jpg" 
                    title="Workshop Facilitator" 
                    name="Lwazi Mabota"
                    linkedInUrl="https://www.linkedin.com/in/lwazi-mabota1/"
                    githubUrl="a"
                />
                <ProfileCard 
                    imgSrc="/LwaziImg.jpg" 
                    title="Workshop Facilitator" 
                    name="Lwazi Mabota"
                    linkedInUrl="https://www.linkedin.com/in/lwazi-mabota1/"
                    githubUrl="a"
                />
                <ProfileCard 
                    imgSrc="/LwaziImg.jpg" 
                    title="Workshop Facilitator" 
                    name="Lwazi Mabota"
                    linkedInUrl="https://www.linkedin.com/in/lwazi-mabota1/"
                    githubUrl="a"
                />
            </Container>
        </div>
    );
}

export default Officers
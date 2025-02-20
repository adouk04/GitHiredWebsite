import ProfileCard from "./components/ProfileCard";
import InfoCard from "./components/InfoCard";
import { Container } from "react-bootstrap";

function Officers() {
    return (
        <div className="backgroundcolor">
            
            <Container class="px-4 py-5" id="hanging-icons">
				<h2 class="pb-2 border-bottom">Hanging icons</h2>
				<div class="row g-4 py-3 row-cols-1 row-cols-lg-3">
					<InfoCard
						title="Mock Interviews"
						imgSrc="/GitHired-Logo-Transparent.png"
						text="Prepare for real technical interviews with mock sessions that simulate the actual experience. Practice coding problems, behavioral questions, and gain feedback to improve your performance under pressure."
					/>
					<InfoCard
						title="Resume Reviews"
						imgSrc="/GitHired-Logo-Transparent.png"
						text="Enhance your resume with expert feedback to make it stand out. We'll help you optimize formatting, content, and structure, ensuring it effectively highlights your skills and experiences to attract employers."
					/>
					<InfoCard
						title="Technical Prep"
						imgSrc="/GitHired-Logo-Transparent.png"
						text="Master coding challenges and algorithms with targeted practice. Our resources guide you through essential concepts, offering curated exercises and solutions to prepare you for technical interviews."
					/>
				</div>
			</Container>

            <Container className="py-4 d-flex flex-wrap gap-3 justify-content-center">
                <ProfileCard imgSrc="/AlexImg.jpg" title="President" text="Leads the club, organizes events, and ensures smooth operations." />
                <ProfileCard imgSrc="/AlexImg.jpg" title="Vice President" text="Assists the President and helps coordinate club activities." />
                <ProfileCard imgSrc="/AlexImg.jpg" title="Workshop Facilitator" text="Conducts workshops and guides members through coding problems." />
                <ProfileCard imgSrc="/AlexImg.jpg" title="Interview Advisor" text="Provides mock interviews and strategies for technical interviews." />
                <ProfileCard imgSrc="/AlexImg.jpg" title="Officer" text="Manages club logistics and supports event planning." />
                <ProfileCard imgSrc="/AlexImg.jpg" title="Officer" text="Handles outreach and keeps members engaged." />
                <ProfileCard imgSrc="/AlexImg.jpg" title="Officer" text="Helps maintain club resources and assists with coordination." />
                <ProfileCard imgSrc="/AlexImg.jpg" title="Janitor" text="Keeps the club clean and ensures a tidy workspace." />
		    </Container>
        </div>
    );
}

export default Officers
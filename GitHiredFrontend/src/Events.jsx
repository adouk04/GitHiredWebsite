import EventTable from './components/Table';
import { Container } from 'react-bootstrap';

function Events() {
    return (
        <div className = "backgroundcolor">
            <Container fluid className='px-4 py-4 text-center'>
                <h1 class="display-5 fw-bold text-body-emphasis">
                    Meeting Times and Events
                </h1>
            </Container>
            <EventTable/>
        </div>
    );
}

export default Events;
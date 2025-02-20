import { Card } from "react-bootstrap"
function InfoCard({ title, imgSrc, text }) {
    return(
        <Card className="d-flex align-items-start backgroundcolor border-0">
            <div className="icon-square text-dark flex-shrink-0 me-2">
                <img src={imgSrc} width={"72px"} height={"72px"} fill={"currentColor"}/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
        </Card>
        
    )
}

export default InfoCard


{/* <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
</div> */}
import puzzlePicture from "./PuzzleViewer/puzzleHolder.png"

const PuzzleViewer = () => {
    return (
        <div className="puzzleViewer">
            <div className="back">Back</div>
            <img className="imageViewing" src={ puzzlePicture } />
            <h3>Part of Image being viewed</h3>
            <p>Description of what is being viewed</p>
        </div>
    );
}

export default PuzzleViewer;
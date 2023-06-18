import './Movie.css'
import { MovieProps } from "./Movie.types"

export const Movie = ({ Title, Type, Year, disabled, onClick }: MovieProps) => (
    <div className="movie-container">
        <div className="left-container">
            <div className="title">{Title}</div>
            <div className="info">{Year} . {Type}</div>
        </div>
        <div className="button-container">
            <button onClick={onClick} disabled={disabled} >Nominate</button>
        </div>
    </div>
)
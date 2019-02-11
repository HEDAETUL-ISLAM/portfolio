import React , {Component} from 'react';
import Chart from "react-google-charts";

const data = [
    ["Year", "Visitations", { role: "style" }],
    ["JAVA", 10, "color: gray"],
    ["C#", 14, "color: #76A7FA"],
    ["Python", 16, "strock-color: #117864"],
    ["Java Script", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
    ["MATH", 28, "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
    ]
];
class Skill extends Component{
    render(){
        return(
            <div className="skill">
                <div id="skill" className="skill-body">
                <h3 style={{textAlign:"center"}} >My Skills</h3>
                    <Chart chartType="BarChart" width="100%" height="400px" data={data} />
                </div>
            </div>
        )
    }
}
export default Skill;
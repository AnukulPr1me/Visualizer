import React, { Component } from 'react';
import './SortingVisualizer.css';
import Pile from '../array_Pillers/Piller'; // Corrected import path
import { selectionSort, bubbleSort, insertionSort, mergeSort, quickSort } from '../../algorithms/SortingAlgorithms';

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            piles: [],
            numPiles: 30,
            finished: false,
            maxPile: 80,
            changingPiles: [],
            pileDelayTimes: [30, 40, 40, 80, 80],
            DelayTimesSizeBased: { 'fast': [15, 20, 20, 40, 40], 'median': [30, 40, 40, 80, 80], 'slow': [60, 80, 80, 160, 160] },
            colorSetIndex: Math.floor(Math.random() * 4), // Changed to generate random index
            currentAlgorithm: -1,
            descriptions: ['Selection Sort: repeatedly find the minimum element from the unsorted part and append it to the sorted part.',
                'Bubble Sort: repeatedly swap the adjacent elements if they are in wrong order.',
                'Insertion Sort: repeatedly place value from the unsorted part at the correct position in the sorted part(by finding the closest left-side element that is smaller than it).',
                'Merge Sort: divide the array into two halves, sort them recursively using merge sort, and then merge the two halves.',
                'Quick Sort: choose an element as pivot, arrange the array such that the elements smaller than pivot are on its left and others are on its right, sort the two halves recursively.'],
            unsortedPiles: [],
            speed: "median",
            size: "median",
            algorithms: ['Selection Sort', 'Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort'],
            sortingAlgorithms: [selectionSort, bubbleSort, insertionSort, mergeSort, quickSort]
        };
        this.randomizePiles = this.randomizePiles.bind(this);
        this.visualizeSorting = this.visualizeSorting.bind(this);
        this.setAlgorithm = this.setAlgorithm.bind(this);
        this.props.getFunctions(this.visualizeSorting, this.randomizePiles, this.setAlgorithm, this.state.algorithms);
    }

    componentDidMount() {
        const piles = this.initializePiles();
        this.setState({
            piles: piles,
            unsortedPiles: piles.slice()
        });
    }

    setAlgorithm(algoId) {
        if (this.state.unsortedPiles.length !== 0) { // Corrected condition
            this.setState({ finished: false, changingPiles: [], piles: this.state.unsortedPiles });
        }
        this.setState({ currentAlgorithm: algoId });
    }

    initializePiles() {
        let piles = [];
        for (let i = 0; i < this.state.numPiles; i++) {
            piles.push(i + 5);
        }

        for (let i = 0; i < this.state.numPiles; i++) {
            let j = getRandomInt(0, i);
            let temp = piles[i];
            piles[i] = piles[j];
            piles[j] = temp;
        }
        piles.push(this.state.numPiles + 5);
        return piles;
    }

    visualizeSorting() {
        if (this.state.currentAlgorithm === -1 || this.state.finished || this.state.rendering) {
            return;
        }

        this.setState({ rendering: true });
        this.props.setVisualizerRendering(true);
        const piles = this.state.piles.slice();
        const statesInOrder = this.state.sortingAlgorithms[this.state.currentAlgorithm](piles);
        
        statesInOrder.forEach((state, i) => {
            setTimeout(() => {
                this.setState({ piles: state.piles, changingPiles: state.changing, pivot: state.pivot });
            }, this.state.pileDelayTimes[this.state.currentAlgorithm] * i);
        });

        setTimeout(() => {
            this.setState({ rendering: false, finished: true });
            this.props.setVisualizerRendering(false);
        }, this.state.pileDelayTimes[this.state.currentAlgorithm] * statesInOrder.length);
    }

    randomizePiles() {
        if (this.state.rendering) return;
        this.setState({ finished: false, changingPiles: [], colorSetIndex: getRandomInt(0, 4) }); // Corrected range
        const piles = this.initializePiles();
        this.setState({ piles: piles, unsortedPiles: piles.slice() });
    }

    setSpeed(speed) {
        this.setState({ speed: speed, pileDelayTimes: this.state.DelayTimesSizeBased[speed] });
    }

    setSize(size) {
        if (this.state.size === size) return;
        let sizes = { "small": 20, "median": 30, "large": 40 };
        this.setState({ size: size, numPiles: sizes[size] }, () => {
            const piles = this.initializePiles();
            this.setState({ finished: false, changingPiles: [], piles: piles, unsortedPiles: piles.slice() });
        });
    }

    render() {
        const piles = this.state.piles;
        let nSquare = <p>Time Complexity: θ(n&#178;)</p>;
        let nLogn = <p>Time Complexity: θ(n·log(n))</p>;

        return (
            <>
                <div className='piles container'>
                    {piles.map((pile, pileId) => (
                        <Pile
                            key={pileId}
                            index={pileId}
                            val={pile}
                            size={this.state.size}
                            isChanging={this.state.changingPiles.includes(pileId)} // Corrected condition
                            isPivot={this.state.pivot === pile}
                            colorSetIndex={this.state.colorSetIndex}
                            finished={this.state.finished}
                        />
                    ))}
                </div>

                <div className="d-flex" style={{ marginLeft: "37%", marginTop: "10px" }}>
                    <div className="dropdown 1">
                        <button className="btn btn-outline-dark dropdown-toggle" type="button" disabled={this.state.rendering} id="dropdownMenuSpeed" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginRight: "5px", height: "30px", width: "150px" }}>
                            Speed: {this.state.speed}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSpeed">
                            <button type="button" className="btn btn-light navbtn" style={{ height: "30px" }} onClick={() => this.setSpeed('slow')}>slow</button>
                            <button type="button" className="btn btn-light navbtn" style={{ height: "30px" }} onClick={() => this.setSpeed('median')}>median</button>
                            <button type="button" className="btn btn-light navbtn" style={{ height: "30px" }} onClick={() => this.setSpeed('fast')}>fast</button>
                        </div>
                    </div>
                    <div className="dropdown 1">
                        <button className="btn btn-outline-dark dropdown-toggle" type="button" disabled={this.state.rendering} id="dropdownMenuSize" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginLeft: "5px", height: "30px", width: "150px" }}>
                            Size: {this.state.size}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSize">
                            <button type="button" className="btn btn-light navbtn" style={{ height: "30px" }} onClick={() => this.setSize('small')}>small</button>
                            <button type="button" className="btn btn-light navbtn" style={{ height: "30px" }} onClick={() => this.setSize('median')}>median</button>
                            <button type="button" className="btn btn-light navbtn" style={{ height: "30px" }} onClick={() => this.setSize('large')}>large</button>
                        </div>
                    </div>
                </div>

                <h6 className='algoDescription'>{this.state.currentAlgorithm === -1 ? "Welcome to Sorting. Select an algorithm first." : this.state.descriptions[this.state.currentAlgorithm]}</h6>
                <h5 className='algoComplexity' style={{ marginTop: "-4.5%", color: "rgb(90,90,90)" }}>
                    {this.state.currentAlgorithm === -1 ? "" : this.state.currentAlgorithm < 3 ? nSquare : nLogn}
                </h5>
            </>
        );
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default SortingVisualizer;

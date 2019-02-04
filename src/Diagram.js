import React, { Component } from 'react'
import './App.css'
//import { scaleLinear } from 'd3-scale'
//import { max } from 'd3-array'
//import { select } from 'd3-selection'
import graphlib from 'graphlibrary'
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3-renderer';

class Diagram extends Component {

  constructor(props){
    super(props)
    this.createDiagram = this.createDiagram.bind(this)
  }

  componentDidMount() {
    this.createDiagram()
  }

  componentDidUpdate() {
    this.createDiagram()
  }

  enterAndExit() {
    /*
    select(this.node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');
    select(this.node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove();
      */
  }

  createDiagram() {
    const node = this.node;
    // Create a new directed graph 
    var g = new graphlib.Graph();

    // Set an object for the graph label
    g.setGraph({
      rankdir: 'LR',
    });

    // Default to assigning a new object as a label for each new edge.
    g.setDefaultEdgeLabel(function() { return {}; });

    // Add nodes to the graph. The first argument is the node id. The second is
    // metadata about the node. In this case we're going to add labels to each of
    // our nodes.
    g.setNode("kspacey",    { label: "Default Welcome",  width: 144, height: 100 });
    g.setNode("swilliams",  { label: "Saul Williams", width: 160, height: 100 });
    g.setNode("bpitt",      { label: "Brad Pitt",     width: 108, height: 100 });
    g.setNode("hford",      { label: "Harrison Ford", width: 168, height: 100 });
    g.setNode("lwilson",    { label: "Luke Wilson",   width: 144, height: 100 });
    g.setNode("kbacon",     { label: "Kevin Bacon",   width: 121, height: 100 });

    // Add edges to the graph.
    g.setEdge("kspacey",   "swilliams");
    g.setEdge("swilliams", "kbacon");
    g.setEdge("bpitt",     "kbacon");
    g.setEdge("hford",     "lwilson");
    g.setEdge("lwilson",   "kbacon");
    g.setEdge("kspacey",   "hford");


    const Render = dagreD3.render
    const render = new Render()
    d3.select(this.node).call(render, g);
    debugger;
    /*
    const dataMax = max(this.props.data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);
    this.enterAndExit();
    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25);
      */
  }

  render() {
    return <svg ref={node => this.node = node}
    width={1000} height={2000}>
      </svg>
  }

}

export default Diagram;

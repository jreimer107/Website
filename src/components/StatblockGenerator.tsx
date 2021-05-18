import React from "react";
import Papa from "papaparse";
import {FormControl, InputGroup, Table} from "react-bootstrap"

interface Stats {
    Name: string,
    Size: string,
    Type: string,
    Alignment: string,
    AC: string,
    HP: number,
    Speeds: string,
    STR: number,
    DEX: number,
    CON: number,
    INT: number,
    WIS: number,
    CHA: number,
    SavingThrows: string,
    Skills: string,
    WRI: string,
    Senses: string,
    Languages: string,
    CR: number,
    Additional: string,
    Font: string,
    AdditionalInfo: string,
    Author: string
}

export default class StatblockGenerator extends React.PureComponent<{}, {statblocks: Stats[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            statblocks: []
        };
    }

    async fetchCSV()  {
        const response = await fetch("data/monsterData.csv");
        const reader = response.body?.getReader();
        const result = await reader?.read();
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result?.value);
        return csv;
    }

    async getCsvData() {
        const data = Papa.parse<Stats>(await this.fetchCSV(), {header: true}).data;
        console.log(data[0]);
        this.setState({
            ...this.state,
            statblocks: data
        });
    }

    componentDidMount = () => {
        this.getCsvData();
    }

    public render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Monster name"
                        aria-label="Monster name"
                    />
                </InputGroup>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Alignment</th>
                            <th>CR</th>
                            <th>Source</th>
                        </tr>
                    </thead>
                    {this.state.statblocks.map(block => (
                        <tr key={block.Name}>
                            <td>{block.Name}</td>
                            <td>{block.Size}</td>
                            <td>{block.Alignment}</td>
                            <td>{block.CR}</td>
                            <td>{block.Font}</td>
                        </tr>
                    ))}
                </Table>
            </div>
        );
    }
}
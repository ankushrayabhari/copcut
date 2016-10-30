/**
 * Created by Victor on 10/23/2016.
 */
import React from 'react'
import Price from './Filters/Price'
import Search from './Filters/Search'
import Hairstyle from './Filters/Hairstyle'
import Sorting from './Filters/Sorting'
import BarberDisplay from './BarberDisplay/BarberDisplay'

class Barbers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterBarber: '',
            prices : [false, false, false],
            sorting: 0,
            hairstyle: "Select an option"
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleSorting = this.handleSorting.bind(this);
        this.handleHairstyle = this.handleHairstyle.bind(this);
    }

    handleSearch(filterBarber){
        this.setState({
            filterBarber: filterBarber
        });
        // every time there is a change, pass props to Barber.js
    }

    handlePrice(prices1, prices2, prices3){
        this.setState({
           prices : [prices1, price2, prices3]
        });
    }

    handleSorting(sorting){
        this.setState({
            sorting: sorting
        });
    }

    handleHairstyle(hairstyle){
        this.setState({
            hairstyle: hairstyle
        });
    }

    render() {
        return (
            <div>
                <h1>Victor</h1>
                <Search onSearchInput={this.handleSearch} filterBarber={this.state.filterBarber} />
                <Price onHandlePrice = {this.handlePrice} prices = {this.state.prices}/>
                <Sorting onHandleSorting = {this.handleSorting} sorting = {this.state.sorting}/>
                <Hairstyle onHandleHairstyle = {this.handleHairstyle} hairstylte = {this.state.hairstyle}/>

                <BarberDisplay
                   filterBarber = {this.state.filterBarber}
                   prices = {this.state.prices}
                   sorting = {this.state.sorting}
                   hairstyle = {this.state.hairstyle}
                   barbers = {this.props.profile}
                />
            </div>
        );
    }
}

export default Barbers;
//list all the barbers in a table
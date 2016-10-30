/**
 * Created by Victor on 10/28/2016.
 */
import React from 'react'
import IndividualBarber from './IndividualBarber'
import SortingAlgo from 'SortingAlgo'

class BarberDisplay extends React.Component {
    render(){
        var rows = [];
        var lastPointer = null;
        var prices = [];
        //set prices range
        this.props.prices.forEach((price) => {
            if(price){
                prices.push(price.index);
            }
        });

        this.props.barbers.forEach((barber) => {
            if(barber.firstname.concat(' ', barber.lastname).indexOf(this.props.filterBarber) === -1 ||
                barber.cuts.indexOf(this.props.hairstyle) < 0 ||
                prices.length == 0){
                return;
            }

            // include logic for cuts
            if(barber.cuts.indexOf(this.props.hairstyle) >= 0 ){
                var shortDescription = barber.description.substring(0,120);
                row.push(
                    <IndividualBarber
                        name = {barber.firstname.concat(' ', barber.lastname)} 
                        yoe = {barber.yearscut}
                        description = shortDescription
                        rate = {barber.rate}
                        review = {barber.ratings}
                        picture = {barber.profilepicture}
                    />
                );
            }
        });

        //include sorting by whatever on cuts.

        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Years of experience</th>
                    <th>Shortened Description</th>
                    <th>Rate</th>
                    <th>Review</th>
                    <th>Picture</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}
export default BarberDisplay;
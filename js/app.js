const app = angular.module('ActivitiesApp', []);

app.controller('MainController', ['$http', function($http){
    this.activities = [];
    this.holiday = "";

    this.chooseOneActivity = (activity) => {
        this.activity = activity;
        console.log(this.activity.title);
    }

    this.createActivity = () => {
        $http({
            method: 'POST',
            url: '/activities',
            data: this.createForm
        }).then( response => {
            console.log(response.data);
            this.createForm = {};
            this.activities.push(response.data)
        }, error => {
            console.error(error);
        }).catch(err => console.error('Catch: ', err));
    }

    this.getActivities = () => {
        $http({
            method: 'GET',
            url: '/activities'
        }).then( response => {
            this.activities = response.data
            this.activity = this.activities[0];
        }, error => {
            console.error(error)
        }).catch(err => console.error('Catch: ', err))
    }
    this.getActivities();

    this.deleteActivity = (id) => {
        $http({
            method: 'DELETE',
            url: '/activities/'+id
        }).then(response => {
            console.log(response.data);
            const removeByIndex = this.activities.findIndex( activity => activity._id === id);
            this.activities.splice(removeByIndex, 1);
        },error => {
            console.error(error);
        }).catch(err => console.error('Catch: ', err));
    }
}])

/**
 * Created by kolesnikov-a on 18/04/2016.
 */

myApp.service('configService', [function(){

    return {
        //serverUrl: 'https://terminales.puertobuenosaires.gob.ar:8086', //Servidor produccion
        //serverUrl: 'https://10.10.0.223:8086', //Servidor Diego
        serverUrl: 'https://10.1.0.55:8086', //Servidor Desarrollo
        //serverUrl: 'https://localhost:8086', //Local contra base en pc de diego
        statusContainers: {'0': {
            name: 'Habilitado',
            className: 'status-free'
        }, '3': {
            name: 'Facturado',
            className: 'status-retired'
        }, '5': {
            name:'Retirado',
            className: 'status-retired'
        }, '9': {
            name:'Anulado',
            className: 'status-canceled'
        }},
        statusContainersAsArray: function(){
            var result = [];
            var status = this.statusContainers;
            for (var key in status) {
                if (status.hasOwnProperty(key)) {
                    var newValue = {
                        id: parseInt(key),
                        formatted: `${key} - ${status[key].name}`,
                        className: status[key].className
                    };
                    result.push(newValue);
                }
            }
            return result;
        },
        terminalsArray: ['TRP', 'BACTSSA', 'TERMINAL4']
    }

}]);
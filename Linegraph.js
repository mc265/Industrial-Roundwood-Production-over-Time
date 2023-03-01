 document.addEventListener('DOMContentLoaded', () => {
Highcharts.chart('container', {
    chart:
    {
    type:'spline',
        zoomType:'xy'
    },
    credits: {
        //enabled:false
        text: 'FAOSTAT representations',
        href: 'https://www.fao.org/faostat/en/#data/FO',
        position: {
            align:'left',

        x:10
    },
    style:{
        Fontsize: '15px',
        color: 'blue',
    }
    },

title:{
    text: 'Forest Product Statistics demo'
},
tooltip:{
    animation: true,
backgroundColor: 'blue',
bordercolor: 'yellow',
followpointer: true,

style:{
    color: '#77777',
}
},
    yAxis:{
        title:{
        text: 'cubic meters'
    },
},

    xAxis:{
        title: {
            text: 'Years'
        },
        
        categories:['2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021',]
    },
       series:[
        { 
            name:'Fibreboard',
            data:[132865120,129393703,125637291,122645435,121102011,116426080,109289912,95597238,96093769,]

        },

        {
            name:'Graphic papers',
            data:[1839351118,1862018768,1853897832,1922731838,1951902608,2068330182,2018962613,1984534113,2018501709,]
        },  
            
          {  name: 'Industrial roundwood',
            data:[155290530,167501790,145957277,149549811,150272831,159894106,159987016,158758649,159358971,]
        },
        
            {  name: 'Other industrial roundwood',
            data:[215567045,226569194,231983026,236092050,242291242,240969892,242218805,248740142,264058429,]
        },

     
            {  name: 'Packaging paper and paperboard',
            data:[396872104,404092316,406930884,409283537,415196477,408439167,404191451,400377707,417301010,]
        },
        
           {  name: 'Pulp for paper',
            data:[648009021,642559092,654293018,685570284,692553135,729384871,712133456,688239250,700302646,]
        },

      {  name: 'Wood chips, particles and residues',
            data:[1897823383,1900374577,1901265439,1927783200,1931111419,1945449851,1942007516,1928001955,1948184684,]
        },


]

}); 


});
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  name = 'Angular';

  options: any;

  ngDoCheck(): void {
    console.log('doCheck');
  }

  getTooltipFormatter() {
    return (params) => {
          return '<div style="width:300px; height: 400px">working</div>'
        };
  }

  ngOnInit() {
    const xAxisData = [];
    const data1 = [
    {
      name: "Organisation",
       label: {
             position: 'left',
             formatter: '{b|{b}}',
             rich:{
               b:{
               color:'red'
               }
             }
       },
      children: [
        {
          name:"CHMC",
          value : "add",
           label: {
             formatter: '{b|{b}}\n {dep|{a}} {s|{c}}',
             rich:{
               dep:{
                 color:'black',
                 padding:[0, 14, 4, 0]
               },
               s: {
                        color: 'red',
                        backgroundColor: '#ffffff',
                        padding: [4, 4],
                        borderRadius: 5,
                        borderColor:'green',
                        borderWidth: 1,
                    }
             }
           },
          children: [{
            name: "SRGA",
          }, {
            name: "LBH"
          }, {
            name: "DRTX",
          },
          {
            name: "SCPA",
          }, {
            name: "RRAL"
          }, {
            name: "LHMI",
          },
          {
            name: "MRTX",
          }]
        }, {
          name: "SRGA",
        }, {
          name: "LBH"
        }, {
          name: "DRTX",
        },
        {
          name: "SCPA",
        }, {
          name: "RRAL"
        }, {
          name: "LHMI",
        },
        {
          name: "MRTX",
        },
        {
          name: "WAMC",
        }]
    }];
    this.options = {
      width :'75%',
      contentWidth:'75%',
      align:"center",
      title: {
        text: "site",
        left:'80%',
        top:'5%',
        textStyle: {
          fontSize: 10,
          color: "#BABABA",
          fontFamily: "rubikregular",
        },
      },
      series: [{
        name:'site',
        type: "tree",
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
        },
        label: {
          position: "right",
          color:"red",
          fontFamily: "rubikregular",
          fontWeight: 600,
          formatter: '{b|{b}}',
         rich: {
          b: {
              align: 'left',
              color:'green'
          },
          s:{
            color:'black'
          }
         }
        },
        data:data1,
        width: "75%",
        symbol: "circle",
        symbolSize: 10,
        symbolKeepAspect: false,
        edgeForkPosition: "36%",
        roam: "scale",
        itemStyle: {
          color: "rgba(255, 143, 0, 1)",
          borderColor: "rgba(252, 252, 252, 1)"
        },
        lineStyle: {
            color: "#FF8F00"
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },
         
          animationDuration: 550,
          animationDurationUpdate: 750,
      }]
    }
  }
}
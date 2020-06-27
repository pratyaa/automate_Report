import React, {Component} from 'react';

class Previewauto extends Component{

 constructor(props)
 {
 	super(props);
 	this.state=this.props.fields;
 }

 render()
 {  var linee=this.props.lines;

 	 var i;
	    var regex = /{{(.*?)}}/g;

		var matches, fields = [];
		while (matches = regex.exec(this.props.str)) {
		    fields.push(matches[1]);
		}
           console.log(fields[0]);
 	var j=0;
		for(i=0;i<linee.length;i++)
		{  
            var find="{{"+fields[j]+"}}";

            var replace= fields[j] ;

            while(linee[i].indexOf(find) > -1)
            {
            	linee[i]=linee[i].replace(find,replace);
            	console.log(linee[i]);
            	j++;
            	 var find="{{"+fields[j]+"}}";
            	
            }

          }

 	return(
 		<div>
 			{ (linee).map( (line)=><p>{line}</p>)}
 		</div>
 		)
 }

}

export default Previewauto;
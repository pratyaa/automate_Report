import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Previewauto from './previewauto.js';


class Create extends Component{

	

	constructor()
	{
      super();

	 
	}
    

	render()
	{ 
        var s=this.props.str.mystring;
	    var lines=s.match(/[^\r\n]+/g);

	    var i;
	    var regex = /{{(.*?)}}/g;

		var matches, fields = [];
		while (matches = regex.exec(s)) {
		    fields.push(matches[1]);
		}

		var fieldobject={};
		for(i=0;i<fields.length;i++)
		{
			fieldobject[fields[i]]=fields[i];
		}
		

      return(  
      	<div>
	      
	         {(fields).map((data) =>
	         	(
                      <TextField 
                                    
                       name={data}
                       type={data}
                       InputLabelProps={{ shrink: true }}
                       label={data}
                       variant="outlined"
                       style={{marginBottom:"1vw"}}
                      />

             ))}
             <Previewauto fields={fieldobject} lines={lines} str={s} />



       </div>
      	        
      	     );
	}
}
export default Create;
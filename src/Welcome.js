export function Avatar() {
    const avatar = "data:image/png;base64,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";
    const description = "female clothes";
  
    return (
      <div>
        <img className="Avatar" src={avatar} 
        alt={description} />
      </div>
    );
  }

export default function WelcomeMessage(){
return(
<div>
<h2 className="Main">Welcome to your best clothing plug
<p className="intro">Get your new and thrifted clothings at <i>affordable prices</i> </p>
</h2>
  </div>
  )}
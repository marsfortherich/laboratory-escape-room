(()=>{var yl="170";var Ou=0,uc=1,Bu=2;var yh=1,ku=2,Bn=3,ai=0,Wt=1,un=2,ri=0,Ji=1,Rr=2,dc=3,fc=4,zu=5,bi=100,Hu=101,Vu=102,Gu=103,Wu=104,$u=200,Xu=201,qu=202,Yu=203,ta=204,na=205,Zu=206,Ku=207,Ju=208,ju=209,Qu=210,ed=211,td=212,nd=213,id=214,ia=0,sa=1,ra=2,ts=3,oa=4,aa=5,la=6,ca=7,xh=0,sd=1,rd=2,oi=0,od=1,ad=2,ld=3,xl=4,cd=5,hd=6,ud=7;var bh=300,ns=301,is=302,ha=303,ua=304,Jr=306,ss=1e3,Ei=1001,da=1002,fn=1003,dd=1004;var Qs=1005;var xn=1006,Mo=1007;var Ti=1008;var Gn=1009,Mh=1010,Sh=1011,Ns=1012,bl=1013,wi=1014,zn=1015,ks=1016,Ml=1017,Sl=1018,rs=1020,Eh=35902,Th=1021,wh=1022,dn=1023,Ah=1024,Rh=1025,ji=1026,os=1027,Ch=1028,El=1029,Ih=1030,Tl=1031;var wl=1033,Sr=33776,Er=33777,Tr=33778,wr=33779,fa=35840,pa=35841,ma=35842,ga=35843,va=36196,_a=37492,ya=37496,xa=37808,ba=37809,Ma=37810,Sa=37811,Ea=37812,Ta=37813,wa=37814,Aa=37815,Ra=37816,Ca=37817,Ia=37818,Pa=37819,La=37820,Da=37821,Ar=36492,Na=36494,Ua=36495,Ph=36283,Fa=36284,Oa=36285,Ba=36286;var Cr=2300,ka=2301,So=2302,pc=2400,mc=2401,gc=2402;var fd=3200,pd=3201;var Lh=0,md=1,si="",Ft="srgb",ds="srgb-linear",jr="linear",lt="srgb";var Fi=7680;var vc=519,gd=512,vd=513,_d=514,Dh=515,yd=516,xd=517,bd=518,Md=519,_c=35044;var yc="300 es",Hn=2e3,Ir=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Eo=Math.PI/180,za=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function Sd(i,e){return(i%e+e)%e}function To(i,e,t){return(1-t)*i+t*e}function Es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ke=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],v=s[0],d=s[3],m=s[6],A=s[1],x=s[4],y=s[7],L=s[2],E=s[5],R=s[8];return r[0]=o*v+a*A+l*L,r[3]=o*d+a*x+l*E,r[6]=o*m+a*y+l*R,r[1]=c*v+h*A+f*L,r[4]=c*d+h*x+f*E,r[7]=c*m+h*y+f*R,r[2]=u*v+p*A+g*L,r[5]=u*d+p*x+g*E,r[8]=u*m+p*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*f+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wo=new Ge;function Nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){let i=Pr("canvas");return i.style.display="block",i}var xc={};function Ps(i){i in xc||(xc[i]=!0,console.warn(i))}function Td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function wd(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ad(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var je={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?jr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bc=[.64,.33,.3,.6,.15,.06],Mc=[.2126,.7152,.0722],Sc=[.3127,.329],Ec=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[ds]:{primaries:bc,whitePoint:Sc,transfer:jr,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:Mc,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:bc,whitePoint:Sc,transfer:lt,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:Mc,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});var Oi,Ha=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=Pr("canvas")),Oi.width=e.width,Oi.height=e.height;let n=Oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rd=0,Lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ao(s[o].image)):r.push(Ao(s[o]))}else r=Ao(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cd=0,Qt=class i extends li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ei,s=Ei,r=xn,o=Ti,a=dn,l=Gn,c=i.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=zs(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=bh;Qt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],v=l[2],d=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(p+1)/2,L=(m+1)/2,E=(h+u)/4,R=(f+v)/4,D=(g+d)/4;return x>y&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=R/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=D/r),this.set(n,s,r,t),this}let A=Math.sqrt((d-g)*(d-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(d-g)/A,this.y=(f-v)/A,this.z=(u-h)/A,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Va=class extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Va{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dr=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==u||c!==p||h!==g){let d=1-a,m=l*u+c*p+h*g+f*v,A=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let L=Math.sqrt(x),E=Math.atan2(L,m*A);d=Math.sin(d*E)/L,a=Math.sin(a*E)/L}let y=a*A;if(l=l*d+u*y,c=c*d+p*y,h=h*d+g*y,f=f*d+v*y,d===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=L,c*=L,h*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-a*p,e[t+2]=c*g+h*p+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ro=new O,wc=new ci,bn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),tr.subVectors(this.max,Ts),Bi.subVectors(e.a,Ts),ki.subVectors(e.b,Ts),zi.subVectors(e.c,Ts),jn.subVectors(ki,Bi),Qn.subVectors(zi,ki),pi.subVectors(Bi,zi);let t=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-pi.z,pi.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,pi.z,0,-pi.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-pi.y,pi.x,0];return!Co(t,Bi,ki,zi,tr)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,Bi,ki,zi,tr))?!1:(nr.crossVectors(jn,Qn),t=[nr.x,nr.y,nr.z],Co(t,Bi,ki,zi,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Dn=[new O,new O,new O,new O,new O,new O,new O,new O],ln=new O,er=new bn,Bi=new O,ki=new O,zi=new O,jn=new O,Qn=new O,pi=new O,Ts=new O,tr=new O,nr=new O,mi=new O;function Co(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Id=new bn,ws=new O,Io=new O,as=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Id.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);let t=ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Io)),this.expandByPoint(ws.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new O,Po=new O,ir=new O,ei=new O,Lo=new O,sr=new O,Do=new O,Us=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Po.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Po);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ir),a=ei.dot(this.direction),l=-ei.dot(ir),c=ei.lengthSq(),h=Math.abs(1-o*o),f,u,p,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Po).addScaledVector(ir,u),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){Lo.subVectors(t,e),sr.subVectors(n,e),Do.crossVectors(Lo,sr);let o=this.direction.dot(Do),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);let l=a*this.direction.dot(sr.crossVectors(ei,sr));if(l<0)return null;let c=a*this.direction.dot(Lo.cross(ei));if(c<0||l+c>o)return null;let h=-a*ei.dot(Do);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,s,r,o,a,l,c,h,f,u,p,g,v,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,u,p,g,v,d)}set(e,t,n,s,r,o,a,l,c,h,f,u,p,g,v,d){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=p,m[7]=g,m[11]=v,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Hi.setFromMatrixColumn(e,0).length(),r=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,g=c*h,v=c*f;t[0]=u+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,g=c*h,v=c*f;t[0]=u-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*f,g=a*h,v=a*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-v*f}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pd,e,Ld)}lookAt(e,t,n){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ti.crossVectors(n,Kt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ti.crossVectors(n,Kt)),ti.normalize(),rr.crossVectors(Kt,ti),s[0]=ti.x,s[4]=rr.x,s[8]=Kt.x,s[1]=ti.y,s[5]=rr.y,s[9]=Kt.y,s[2]=ti.z,s[6]=rr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],v=n[6],d=n[10],m=n[14],A=n[3],x=n[7],y=n[11],L=n[15],E=s[0],R=s[4],D=s[8],S=s[12],b=s[1],I=s[5],W=s[9],z=s[13],$=s[2],te=s[6],Y=s[10],se=s[14],q=s[3],he=s[7],_e=s[11],Ie=s[15];return r[0]=o*E+a*b+l*$+c*q,r[4]=o*R+a*I+l*te+c*he,r[8]=o*D+a*W+l*Y+c*_e,r[12]=o*S+a*z+l*se+c*Ie,r[1]=h*E+f*b+u*$+p*q,r[5]=h*R+f*I+u*te+p*he,r[9]=h*D+f*W+u*Y+p*_e,r[13]=h*S+f*z+u*se+p*Ie,r[2]=g*E+v*b+d*$+m*q,r[6]=g*R+v*I+d*te+m*he,r[10]=g*D+v*W+d*Y+m*_e,r[14]=g*S+v*z+d*se+m*Ie,r[3]=A*E+x*b+y*$+L*q,r[7]=A*R+x*I+y*te+L*he,r[11]=A*D+x*W+y*Y+L*_e,r[15]=A*S+x*z+y*se+L*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],v=e[7],d=e[11],m=e[15];return g*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*p-n*l*p)+v*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+d*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+m*(-s*a*h-t*l*f+t*a*u+s*o*f-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],v=e[13],d=e[14],m=e[15],A=f*d*c-v*u*c+v*l*p-a*d*p-f*l*m+a*u*m,x=g*u*c-h*d*c-g*l*p+o*d*p+h*l*m-o*u*m,y=h*v*c-g*f*c+g*a*p-o*v*p-h*a*m+o*f*m,L=g*f*l-h*v*l-g*a*u+o*v*u+h*a*d-o*f*d,E=t*A+n*x+s*y+r*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=A*R,e[1]=(v*u*r-f*d*r-v*s*p+n*d*p+f*s*m-n*u*m)*R,e[2]=(a*d*r-v*l*r+v*s*c-n*d*c-a*s*m+n*l*m)*R,e[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*p-n*l*p)*R,e[4]=x*R,e[5]=(h*d*r-g*u*r+g*s*p-t*d*p-h*s*m+t*u*m)*R,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*m-t*l*m)*R,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*R,e[8]=y*R,e[9]=(g*f*r-h*v*r-g*n*p+t*v*p+h*n*m-t*f*m)*R,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*m+t*a*m)*R,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*p-t*a*p)*R,e[12]=L*R,e[13]=(h*v*s-g*f*s+g*n*u-t*v*u-h*n*d+t*f*d)*R,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*d-t*a*d)*R,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*u+t*a*u)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,g=r*f,v=o*h,d=o*f,m=a*f,A=l*c,x=l*h,y=l*f,L=n.x,E=n.y,R=n.z;return s[0]=(1-(v+m))*L,s[1]=(p+y)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(u+m))*E,s[6]=(d+A)*E,s[7]=0,s[8]=(g+x)*R,s[9]=(d-A)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Hi.set(s[0],s[1],s[2]).length(),o=Hi.set(s[4],s[5],s[6]).length(),a=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);let c=1/r,h=1/o,f=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Hn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),p,g;if(a===Hn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ir)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Hn){let l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),u=(t+e)*c,p=(n+s)*h,g,v;if(a===Hn)g=(o+r)*f,v=-2*f;else if(a===Ir)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hi=new O,cn=new vt,Pd=new O(0,0,0),Ld=new O(1,1,1),ti=new O,rr=new O,Kt=new O,Ac=new vt,Rc=new ci,Mn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dd=0,Cc=new O,Vi=new ci,Un=new vt,or=new O,As=new O,Nd=new O,Ud=new ci,Ic=new O(1,0,0),Pc=new O(0,1,0),Lc=new O(0,0,1),Dc={type:"added"},Fd={type:"removed"},Gi={type:"childadded",child:null},No={type:"childremoved",child:null},$t=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Mn,n=new ci,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ge}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(As,or,this.up):Un.lookAt(or,As,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Un),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};$t.DEFAULT_UP=new O(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new O,Fn=new O,Uo=new O,On=new O,Wi=new O,$i=new O,Nc=new O,Fo=new O,Oo=new O,Bo=new O,ko=new ct,zo=new ct,Ho=new ct,Mi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Fn.subVectors(n,t),Uo.subVectors(e,t);let o=hn.dot(hn),a=hn.dot(Fn),l=hn.dot(Uo),c=Fn.dot(Fn),h=Fn.dot(Uo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ko.setScalar(0),zo.setScalar(0),Ho.setScalar(0),ko.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,n),Ho.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ko,r.x),o.addScaledVector(zo,r.y),o.addScaledVector(Ho,r.z),o}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Fn.subVectors(e,t),hn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Wi.subVectors(s,n),$i.subVectors(r,n),Fo.subVectors(e,n);let l=Wi.dot(Fo),c=$i.dot(Fo);if(l<=0&&c<=0)return t.copy(n);Oo.subVectors(e,s);let h=Wi.dot(Oo),f=$i.dot(Oo);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Wi,o);Bo.subVectors(e,r);let p=Wi.dot(Bo),g=$i.dot(Bo);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($i,a);let d=h*g-p*f;if(d<=0&&f-h>=0&&p-g>=0)return Nc.subVectors(r,s),a=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(Nc,a);let m=1/(d+v+u);return o=v*m,a=u*m,t.copy(n).addScaledVector(Wi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Sd(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vo(o,r,e+1/3),this.g=Vo(o,r,e),this.b=Vo(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return je.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Gt(Ut.r*255,0,255))*65536+Math.round(Gt(Ut.g*255,0,255))*256+Math.round(Gt(Ut.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Ut.copy(this),t);let n=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ft){je.fromWorkingColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,s=Ut.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(ar);let n=To(ni.h,ar.h,t),s=To(ni.s,ar.s,t),r=To(ni.l,ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new Xe;Xe.NAMES=Uh;var Od=0,hi=class extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=zs(),this.name="",this.blending=Ji,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Sn=class extends hi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new O,lr=new Ke,jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),e}};var Nr=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bt=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Bd=0,tn=new vt,Go=new $t,Xi=new O,Jt=new bn,Rs=new bn,Ct=new O,nn=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nh(e)?Ur:Nr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(Jt.min,Rs.min),Jt.expandByPoint(Ct),Ct.addVectors(Jt.max,Rs.max),Jt.expandByPoint(Ct)):(Jt.expandByPoint(Rs.min),Jt.expandByPoint(Rs.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ct.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),Ct.add(Xi)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new O,l[D]=new O;let c=new O,h=new O,f=new O,u=new Ke,p=new Ke,g=new Ke,v=new O,d=new O;function m(D,S,b){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,b),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),f.sub(c),p.sub(u),g.sub(u);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),d.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[D].add(v),a[S].add(v),a[b].add(v),l[D].add(d),l[S].add(d),l[b].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,S=A.length;D<S;++D){let b=A[D],I=b.start,W=b.count;for(let z=I,$=I+W;z<$;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let x=new O,y=new O,L=new O,E=new O;function R(D){L.fromBufferAttribute(s,D),E.copy(L);let S=a[D];x.copy(S),x.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(E,S);let I=y.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,I)}for(let D=0,S=A.length;D<S;++D){let b=A[D],I=b.start,W=b.count;for(let z=I,$=I+W;z<$;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),v=e.getX(u+1),d=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,d),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let v=0,d=l.length;v<d;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[p++]}return new jt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uc=new vt,gi=new Us,cr=new as,Fc=new O,hr=new O,ur=new O,dr=new O,Wo=new O,fr=new O,Oc=new O,pr=new O,gt=class extends $t{constructor(e=new nn,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Wo.fromBufferAttribute(f,e),o?fr.addScaledVector(Wo,h):fr.addScaledVector(Wo.sub(t),h))}t.add(fr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(cr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(cr,Fc)===null||gi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let d=u[g],m=o[d.materialIndex],A=Math.max(d.start,p.start),x=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let y=A,L=x;y<L;y+=3){let E=a.getX(y),R=a.getX(y+1),D=a.getX(y+2);s=mr(this,m,e,n,c,h,f,E,R,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let d=g,m=v;d<m;d+=3){let A=a.getX(d),x=a.getX(d+1),y=a.getX(d+2);s=mr(this,o,e,n,c,h,f,A,x,y),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let d=u[g],m=o[d.materialIndex],A=Math.max(d.start,p.start),x=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let y=A,L=x;y<L;y+=3){let E=y,R=y+1,D=y+2;s=mr(this,m,e,n,c,h,f,E,R,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let d=g,m=v;d<m;d+=3){let A=d,x=d+1,y=d+2;s=mr(this,o,e,n,c,h,f,A,x,y),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};function kd(i,e,t,n,s,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ai,a),l===null)return null;pr.copy(a),pr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(pr);return c<t.near||c>t.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,hr),i.getVertexPosition(l,ur),i.getVertexPosition(c,dr);let h=kd(i,e,t,n,hr,ur,dr,Oc);if(h){let f=new O;Mi.getBarycoord(Oc,hr,ur,dr,f),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,l,c,f,new Ke)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,f,new Ke)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Mi.getNormal(hr,ur,dr,u.normal),h.face=u,h.barycoord=f}return h}var Ai=class i extends nn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(f,2));function g(v,d,m,A,x,y,L,E,R,D,S){let b=y/R,I=L/D,W=y/2,z=L/2,$=E/2,te=R+1,Y=D+1,se=0,q=0,he=new O;for(let _e=0;_e<Y;_e++){let Ie=_e*I-z;for(let Ne=0;Ne<te;Ne++){let tt=Ne*b-W;he[v]=tt*A,he[d]=Ie*x,he[m]=$,c.push(he.x,he.y,he.z),he[v]=0,he[d]=0,he[m]=E>0?1:-1,h.push(he.x,he.y,he.z),f.push(Ne/R),f.push(1-_e/D),se+=1}}for(let _e=0;_e<D;_e++)for(let Ie=0;Ie<R;Ie++){let Ne=u+Ie+te*_e,tt=u+Ie+te*(_e+1),Z=u+(Ie+1)+te*(_e+1),re=u+(Ie+1)+te*_e;l.push(Ne,tt,re),l.push(tt,Z,re),q+=6}a.addGroup(p,q,S),p+=q,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){let e={};for(let t=0;t<i.length;t++){let n=ls(i[t]);for(let s in n)e[s]=n[s]}return e}function zd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Hd={clone:ls,merge:Bt},Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends hi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fr=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new O,Bc=new Ke,kc=new Ke,Ot=class extends Fr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,kc),t.subVectors(kc,Bc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qi=-90,Yi=1,Wa=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(qi,Yi,e,t);s.layers=this.layers,this.add(s);let r=new Ot(qi,Yi,e,t);r.layers=this.layers,this.add(r);let o=new Ot(qi,Yi,e,t);o.layers=this.layers,this.add(o);let a=new Ot(qi,Yi,e,t);a.layers=this.layers,this.add(a);let l=new Ot(qi,Yi,e,t);l.layers=this.layers,this.add(l);let c=new Ot(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Or=class extends Qt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ns,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$a=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ai(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:ri});r.uniforms.tEquirect.value=t;let o=new gt(s,r),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=xn),new Wa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},$o=new O,Wd=new O,$d=new Ge,kn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$o.subVectors(n,t).cross(Wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$d.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new as,gr=new O,Os=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],g=s[9],v=s[10],d=s[11],m=s[12],A=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,u-c,d-p,y-m).normalize(),n[1].setComponents(l+r,u+c,d+p,y+m).normalize(),n[2].setComponents(l+o,u+h,d+g,y+A).normalize(),n[3].setComponents(l-o,u-h,d-g,y-A).normalize(),n[4].setComponents(l-a,u-f,d-v,y-x).normalize(),t===Hn)n[5].setComponents(l+a,u+f,d+v,y+x).normalize();else if(t===Ir)n[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(gr.x=s.normal.x>0?e.max.x:e.min.x,gr.y=s.normal.y>0?e.max.y:e.min.y,gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Oh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xd(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){let g=f[u],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){let v=f[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ri=class i extends nn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,p=[],g=[],v=[],d=[];for(let m=0;m<h;m++){let A=m*u-o;for(let x=0;x<c;x++){let y=x*f-r;g.push(y,-A,0),v.push(0,0,1),d.push(x/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){let x=A+c*m,y=A+c*(m+1),L=A+1+c*(m+1),E=A+1+c*m;p.push(x,y,E),p.push(y,L,E)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,em=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:Zd,alphamap_pars_fragment:Kd,alphatest_fragment:Jd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:of,iridescence_fragment:af,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:vf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:yf,displacementmap_pars_vertex:xf,displacementmap_vertex:bf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:Ef,colorspace_pars_fragment:Tf,envmap_fragment:wf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:zf,envmap_vertex:If,fog_vertex:Pf,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:Nf,gradientmap_pars_fragment:Uf,lightmap_pars_fragment:Ff,lights_lambert_fragment:Of,lights_lambert_pars_fragment:Bf,lights_pars_begin:kf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:$f,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:Zf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:yp,iridescence_pars_fragment:xp,opaque_fragment:bp,packing:Mp,premultiplied_alpha_fragment:Sp,project_vertex:Ep,dithering_fragment:Tp,dithering_pars_fragment:wp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Pp,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:kp,tonemapping_pars_fragment:zp,transmission_fragment:Hp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:$p,worldpos_vertex:Xp,background_vert:qp,background_frag:Yp,backgroundCube_vert:Zp,backgroundCube_frag:Kp,cube_vert:Jp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distanceRGBA_vert:tm,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:vm,meshphysical_frag:_m,meshtoon_vert:ym,meshtoon_frag:xm,points_vert:bm,points_frag:Mm,shadow_vert:Sm,shadow_frag:Em,sprite_vert:Tm,sprite_frag:wm},fe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},yn={basic:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Bt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Bt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Bt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Bt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Bt([fe.points,fe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Bt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Bt([fe.common,fe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Bt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Bt([fe.sprite,fe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Bt([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Bt([fe.lights,fe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};yn.physical={uniforms:Bt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var vr={r:0,b:0,g:0},_i=new Mn,Am=new vt;function Rm(i,e,t,n,s,r,o){let a=new Xe(0),l=r===!0?0:1,c,h,f=null,u=0,p=null;function g(A){let x=A.isScene===!0?A.background:null;return x&&x.isTexture&&(x=(A.backgroundBlurriness>0?t:e).get(x)),x}function v(A){let x=!1,y=g(A);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(A,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===Jr)?(h===void 0&&(h=new gt(new Ai(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ls(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(_i)),h.material.toneMapped=je.getTransfer(y.colorSpace)!==lt,(f!==y||u!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new gt(new Ri(2,2),new En({name:"BackgroundMaterial",uniforms:ls(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,x){A.getRGB(vr,Fh(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(A,x=1){a.set(A),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:v,addToRenderList:d}}function Cm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(b,I,W,z,$){let te=!1,Y=f(z,W,I);r!==Y&&(r=Y,c(r.object)),te=p(b,z,W,$),te&&g(b,z,W,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(b,I,W,z),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,I,W){let z=W.wireframe===!0,$=n[b.id];$===void 0&&($={},n[b.id]=$);let te=$[I.id];te===void 0&&(te={},$[I.id]=te);let Y=te[z];return Y===void 0&&(Y=u(l()),te[z]=Y),Y}function u(b){let I=[],W=[],z=[];for(let $=0;$<t;$++)I[$]=0,W[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,I,W,z){let $=r.attributes,te=I.attributes,Y=0,se=W.getAttributes();for(let q in se)if(se[q].location>=0){let _e=$[q],Ie=te[q];if(Ie===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(Ie=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(Ie=b.instanceColor)),_e===void 0||_e.attribute!==Ie||Ie&&_e.data!==Ie.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(b,I,W,z){let $={},te=I.attributes,Y=0,se=W.getAttributes();for(let q in se)if(se[q].location>=0){let _e=te[q];_e===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(_e=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(_e=b.instanceColor));let Ie={};Ie.attribute=_e,_e&&_e.data&&(Ie.data=_e.data),$[q]=Ie,Y++}r.attributes=$,r.attributesNum=Y,r.index=z}function v(){let b=r.newAttributes;for(let I=0,W=b.length;I<W;I++)b[I]=0}function d(b){m(b,0)}function m(b,I){let W=r.newAttributes,z=r.enabledAttributes,$=r.attributeDivisors;W[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),$[b]!==I&&(i.vertexAttribDivisor(b,I),$[b]=I)}function A(){let b=r.newAttributes,I=r.enabledAttributes;for(let W=0,z=I.length;W<z;W++)I[W]!==b[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function x(b,I,W,z,$,te,Y){Y===!0?i.vertexAttribIPointer(b,I,W,$,te):i.vertexAttribPointer(b,I,W,z,$,te)}function y(b,I,W,z){v();let $=z.attributes,te=W.getAttributes(),Y=I.defaultAttributeValues;for(let se in te){let q=te[se];if(q.location>=0){let he=$[se];if(he===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){let _e=he.normalized,Ie=he.itemSize,Ne=e.get(he);if(Ne===void 0)continue;let tt=Ne.buffer,Z=Ne.type,re=Ne.bytesPerElement,be=Z===i.INT||Z===i.UNSIGNED_INT||he.gpuType===bl;if(he.isInterleavedBufferAttribute){let ae=he.data,De=ae.stride,Oe=he.offset;if(ae.isInstancedInterleavedBuffer){for(let ke=0;ke<q.locationSize;ke++)m(q.location+ke,ae.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ke=0;ke<q.locationSize;ke++)d(q.location+ke);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ke=0;ke<q.locationSize;ke++)x(q.location+ke,Ie/q.locationSize,Z,_e,De*re,(Oe+Ie/q.locationSize*ke)*re,be)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)m(q.location+ae,he.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<q.locationSize;ae++)d(q.location+ae);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ae=0;ae<q.locationSize;ae++)x(q.location+ae,Ie/q.locationSize,Z,_e,Ie*re,Ie/q.locationSize*ae*re,be)}}else if(Y!==void 0){let _e=Y[se];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(q.location,_e);break;case 3:i.vertexAttrib3fv(q.location,_e);break;case 4:i.vertexAttrib4fv(q.location,_e);break;default:i.vertexAttrib1fv(q.location,_e)}}}}A()}function L(){D();for(let b in n){let I=n[b];for(let W in I){let z=I[W];for(let $ in z)h(z[$].object),delete z[$];delete I[W]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let W in I){let z=I[W];for(let $ in z)h(z[$].object),delete z[$];delete I[W]}delete n[b.id]}function R(b){for(let I in n){let W=n[I];if(W[b.id]===void 0)continue;let z=W[b.id];for(let $ in z)h(z[$].object),delete z[$];delete W[b.id]}}function D(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:d,disableUnusedAttributes:A}}function Im(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,n,1)}function l(c,h,f,u){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let D=R===ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zn&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:A,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:L,maxSamples:E}}function Lm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new kn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let g=f.clippingPlanes,v=f.clipIntersection,d=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let A=r?0:n,x=A*4,y=m.clippingState||null;l.value=y,y=h(g,u,x,p);for(let L=0;L!==x;++L)y[L]=t[L];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,g){let v=f!==null?f.length:0,d=null;if(v!==0){if(d=l.value,g!==!0||d===null){let m=p+v*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<m)&&(d=new Float32Array(m));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(f[x]).applyMatrix4(A,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,d}}function Dm(i){let e=new WeakMap;function t(o,a){return a===ha?o.mapping=ns:a===ua&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ha||a===ua)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $a(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Xa=class extends Fr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ki=4,zc=[.125,.215,.35,.446,.526,.582],Si=20,Xo=new Xa,Hc=new Xe,qo=null,Yo=0,Zo=0,Ko=!1,xi=(1+Math.sqrt(5))/2,Zi=1/xi,Vc=[new O(-xi,Zi,0),new O(xi,Zi,0),new O(-Zi,0,xi),new O(Zi,0,xi),new O(0,xi,-Zi),new O(0,xi,Zi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Br=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,Yo,Zo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:ks,format:dn,colorSpace:ds,depthBuffer:!1},s=Gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nm(r)),this._blurMaterial=Um(r,e,t)}return s}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,s){let a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Hc),h.toneMapping=oi,h.autoClear=!1;let p=new Sn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new gt(new Ai,p),v=!1,d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,v=!0):(p.color.copy(Hc),v=!0);for(let m=0;m<6;m++){let A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;_r(s,A*x,m>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ns||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;_r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vc[(s-r-1)%Vc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new gt(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),v=r/g,d=isFinite(r)?1+Math.floor(h*v):Si;d>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Si}`);let m=[],A=0;for(let R=0;R<Si;++R){let D=R/v,S=Math.exp(-D*D/2);m.push(S),R===0?A+=S:R<d&&(A+=2*S)}for(let R=0;R<m.length;R++)m[R]=m[R]/A;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;let y=this._sizeLods[s],L=3*y*(s>x-Ki?s-x+Ki:0),E=4*(this._cubeSize-y);_r(t,L,E,3*y,2*y),l.setRenderTarget(t),l.render(f,Xo)}};function Nm(i){let e=[],t=[],n=[],s=i,r=i-Ki+1+zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ki?l=zc[o-i+Ki-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,d=2,m=1,A=new Float32Array(v*g*p),x=new Float32Array(d*g*p),y=new Float32Array(m*g*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,D=E>2?0:-1,S=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];A.set(S,v*g*E),x.set(u,d*g*E);let b=[E,E,E,E,E,E];y.set(b,m*g*E)}let L=new nn;L.setAttribute("position",new jt(A,v)),L.setAttribute("uv",new jt(x,d)),L.setAttribute("faceIndex",new jt(y,m)),e.push(L),s>Ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gc(i,e,t){let n=new Wn(i,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Um(i,e,t){let n=new Float32Array(Si),s=new O(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Wc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function $c(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ha||l===ua,h=l===ns||l===is;if(c||h){let f=e.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Br(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Br(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Om(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,e,t,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let d=0,m=v.length;d<m;d++)e.remove(v[d])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let v=p[g];for(let d=0,m=v.length;d<m;d++)e.update(v[d],i.ARRAY_BUFFER)}}function c(f){let u=[],p=f.index,g=f.attributes.position,v=0;if(p!==null){let A=p.array;v=p.version;for(let x=0,y=A.length;x<y;x+=3){let L=A[x+0],E=A[x+1],R=A[x+2];u.push(L,E,E,R,R,L)}}else if(g!==void 0){let A=g.array;v=g.version;for(let x=0,y=A.length/3-1;x<y;x+=3){let L=x+0,E=x+1,R=x+2;u.push(L,E,E,R,R,L)}}else return;let d=new(Nh(u)?Ur:Nr)(u,1);d.version=v;let m=r.get(f);m&&e.remove(m),r.set(f,d)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function km(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),t.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),t.update(p,n,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];t.update(d,n,1)}function f(u,p,g,v){if(g===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)c(u[m]/o,p[m],v[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,v,0,g);let m=0;for(let A=0;A<g;A++)m+=p[A]*v[A];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function zm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hm(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=a.attributes.position.count*x,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*L*4*f),R=new Dr(E,y,L,f);R.type=zn,R.needsUpdate=!0;let D=x*4;for(let b=0;b<f;b++){let I=d[b],W=m[b],z=A[b],$=y*L*4*b;for(let te=0;te<I.count;te++){let Y=te*D;p===!0&&(s.fromBufferAttribute(I,te),E[$+Y+0]=s.x,E[$+Y+1]=s.y,E[$+Y+2]=s.z,E[$+Y+3]=0),g===!0&&(s.fromBufferAttribute(W,te),E[$+Y+4]=s.x,E[$+Y+5]=s.y,E[$+Y+6]=s.z,E[$+Y+7]=0),v===!0&&(s.fromBufferAttribute(z,te),E[$+Y+8]=s.x,E[$+Y+9]=s.y,E[$+Y+10]=s.z,E[$+Y+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new Ke(y,L)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Vm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var kr=class extends Qt{constructor(e,t,n,s,r,o,a,l,c,h=ji){if(h!==ji&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=wi),n===void 0&&h===os&&(n=rs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bh=new Qt,Xc=new kr(1,1),kh=new Dr,zh=new Ga,Hh=new Or,qc=[],Yc=[],Zc=new Float32Array(16),Kc=new Float32Array(9),Jc=new Float32Array(4);function fs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qr(i,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),At(t,n)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),At(t,n)}}function Zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Zc.set(n),i.uniformMatrix4fv(this.addr,!1,Zc),At(t,n)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function e0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function n0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function i0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function s0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=Dh,r=Xc):r=Bh,t.setTexture2D(e||r,s)}function r0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zh,s)}function o0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hh,s)}function a0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kh,s)}function l0(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return $m;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return Km;case 35667:case 35671:return Jm;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}function c0(i,e){i.uniform1fv(this.addr,e)}function h0(i,e){let t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function u0(i,e){let t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function d0(i,e){let t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function f0(i,e){let t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p0(i,e){let t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m0(i,e){let t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g0(i,e){i.uniform1iv(this.addr,e)}function v0(i,e){i.uniform2iv(this.addr,e)}function _0(i,e){i.uniform3iv(this.addr,e)}function y0(i,e){i.uniform4iv(this.addr,e)}function x0(i,e){i.uniform1uiv(this.addr,e)}function b0(i,e){i.uniform2uiv(this.addr,e)}function M0(i,e){i.uniform3uiv(this.addr,e)}function S0(i,e){i.uniform4uiv(this.addr,e)}function E0(i,e,t){let n=this.cache,s=e.length,r=Qr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bh,r[o])}function T0(i,e,t){let n=this.cache,s=e.length,r=Qr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zh,r[o])}function w0(i,e,t){let n=this.cache,s=e.length,r=Qr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hh,r[o])}function A0(i,e,t){let n=this.cache,s=e.length,r=Qr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kh,r[o])}function R0(i){switch(i){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return v0;case 35668:case 35672:return _0;case 35669:case 35673:return y0;case 5125:return x0;case 36294:return b0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return A0}}var qa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l0(t.type)}},Ya=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R0(t.type)}},Za=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Jo=/(\w+)(\])?(\[|\.)?/g;function jc(i,e){i.seq.push(e),i.map[e.id]=e}function C0(i,e,t){let n=i.name,s=n.length;for(Jo.lastIndex=0;;){let r=Jo.exec(n),o=Jo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jc(t,c===void 0?new qa(a,i,e):new Ya(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Za(a),jc(t,f)),t=f}}}var es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);C0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Qc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var I0=37297,P0=0;function L0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var eh=new Ge;function D0(i){je._getMatrix(eh,je.workingColorSpace,i);let e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case jr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function th(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+L0(i.getShaderSource(e),o)}else return s}function N0(i,e){let t=D0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(i,e){let t;switch(e){case od:t="Linear";break;case ad:t="Reinhard";break;case ld:t="Cineon";break;case xl:t="ACESFilmic";break;case hd:t="AgX";break;case ud:t="Neutral";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yr=new O;function F0(){je.getLuminanceCoefficients(yr);let i=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function B0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ls(i){return i!==""}function nh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(z0,V0)}var H0=new Map;function V0(i,e){let t=$e[e];if(t===void 0){let n=H0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(G0,W0)}function W0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xh:e="ENVMAP_BLENDING_MULTIPLY";break;case sd:e="ENVMAP_BLENDING_MIX";break;case rd:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function K0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$0(t),c=X0(t),h=q0(t),f=Y0(t),u=Z0(t),p=O0(t),g=B0(r),v=s.createProgram(),d,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(d=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?$e.tonemapping_pars_fragment:"",t.toneMapping!==oi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Ka(o),o=nh(o,t),o=ih(o,t),a=Ka(a),a=nh(a,t),a=ih(a,t),o=sh(o),a=sh(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=A+d+o,y=A+m+a,L=Qc(s,s.VERTEX_SHADER,x),E=Qc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,L),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(L).trim(),$=s.getShaderInfoLog(E).trim(),te=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,E);else{let se=th(s,L,"vertex"),q=th(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+se+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||$==="")&&(Y=!1);Y&&(I.diagnostics={runnable:te,programLog:W,vertexShader:{log:z,prefix:d},fragmentShader:{log:$,prefix:m}})}s.deleteShader(L),s.deleteShader(E),D=new es(s,v),S=k0(s,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,I0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=E,this}var J0=0,Ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ja(e),t.set(e,n)),n}},ja=class{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}};function j0(i,e,t,n,s,r,o){let a=new Fs,l=new Ja,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,b,I,W,z){let $=W.fog,te=z.geometry,Y=S.isMeshStandardMaterial?W.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),q=se&&se.mapping===Jr?se.image.height:null,he=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let _e=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ie=_e!==void 0?_e.length:0,Ne=0;te.morphAttributes.position!==void 0&&(Ne=1),te.morphAttributes.normal!==void 0&&(Ne=2),te.morphAttributes.color!==void 0&&(Ne=3);let tt,Z,re,be;if(he){let st=yn[he];tt=st.vertexShader,Z=st.fragmentShader}else tt=S.vertexShader,Z=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);let ae=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Oe=z.isInstancedMesh===!0,ke=z.isBatchedMesh===!0,at=!!S.map,qe=!!S.matcap,_t=!!se,N=!!S.aoMap,It=!!S.lightMap,Ze=!!S.bumpMap,Ye=!!S.normalMap,Me=!!S.displacementMap,ht=!!S.emissiveMap,Pe=!!S.metalnessMap,w=!!S.roughnessMap,_=S.anisotropy>0,k=S.clearcoat>0,j=S.dispersion>0,Q=S.iridescence>0,K=S.sheen>0,Se=S.transmission>0,de=_&&!!S.anisotropyMap,pe=k&&!!S.clearcoatMap,ze=k&&!!S.clearcoatNormalMap,ie=k&&!!S.clearcoatRoughnessMap,ye=Q&&!!S.iridescenceMap,T=Q&&!!S.iridescenceThicknessMap,B=K&&!!S.sheenColorMap,X=K&&!!S.sheenRoughnessMap,ne=!!S.specularMap,ce=!!S.specularColorMap,Ae=!!S.specularIntensityMap,P=Se&&!!S.transmissionMap,le=Se&&!!S.thicknessMap,G=!!S.gradientMap,ee=!!S.alphaMap,ve=S.alphaTest>0,me=!!S.alphaHash,He=!!S.extensions,yt=oi;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(yt=i.toneMapping);let Dt={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:Z,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ke,batchingColor:ke&&z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,instancingMorph:Oe&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ds,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:qe,envMap:_t,envMapMode:_t&&se.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:It,bumpMap:Ze,normalMap:Ye,displacementMap:u&&Me,emissiveMap:ht,normalMapObjectSpace:Ye&&S.normalMapType===md,normalMapTangentSpace:Ye&&S.normalMapType===Lh,metalnessMap:Pe,roughnessMap:w,anisotropy:_,anisotropyMap:de,clearcoat:k,clearcoatMap:pe,clearcoatNormalMap:ze,clearcoatRoughnessMap:ie,dispersion:j,iridescence:Q,iridescenceMap:ye,iridescenceThicknessMap:T,sheen:K,sheenColorMap:B,sheenRoughnessMap:X,specularMap:ne,specularColorMap:ce,specularIntensityMap:Ae,transmission:Se,transmissionMap:P,thicknessMap:le,gradientMap:G,opaque:S.transparent===!1&&S.blending===Ji&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:ve,alphaHash:me,combine:S.combine,mapUv:at&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:It&&v(S.lightMap.channel),bumpMapUv:Ze&&v(S.bumpMap.channel),normalMapUv:Ye&&v(S.normalMap.channel),displacementMapUv:Me&&v(S.displacementMap.channel),emissiveMapUv:ht&&v(S.emissiveMap.channel),metalnessMapUv:Pe&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:de&&v(S.anisotropyMap.channel),clearcoatMapUv:pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ze&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:T&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:B&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:X&&v(S.sheenRoughnessMap.channel),specularMapUv:ne&&v(S.specularMap.channel),specularColorMapUv:ce&&v(S.specularColorMap.channel),specularIntensityMapUv:Ae&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:le&&v(S.thicknessMap.channel),alphaMapUv:ee&&v(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ye||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(at||ee),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:De,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(A(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function A(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=g[S.type],I;if(b){let W=yn[b];I=Hd.clone(W.uniforms)}else I=S.uniforms;return I}function L(S,b){let I;for(let W=0,z=h.length;W<z;W++){let $=h[W];if($.cacheKey===b){I=$,++I.usedTimes;break}}return I===void 0&&(I=new K0(i,b,S,r),h.push(I)),I}function E(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function D(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:y,acquireProgram:L,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:D}}function Q0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ah(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,u,p,g,v,d){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:d},i[e]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=d),e++,m}function a(f,u,p,g,v,d){let m=o(f,u,p,g,v,d);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(f,u,p,g,v,d){let m=o(f,u,p,g,v,d);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(f,u){t.length>1&&t.sort(f||eg),n.length>1&&n.sort(u||oh),s.length>1&&s.sort(u||oh)}function h(){for(let f=e,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function tg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ah,i.set(n,[o])):s>=r.length?(o=new ah,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ng(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Xe};break;case"SpotLight":t={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function ig(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var sg=0;function rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function og(i){let e=new ng,t=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new vt,o=new vt;function a(c){let h=0,f=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,d=0,m=0,A=0,x=0,y=0,L=0,E=0,R=0;c.sort(rg);for(let S=0,b=c.length;S<b;S++){let I=c[S],W=I.color,z=I.intensity,$=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=W.r*z,f+=W.g*z,u+=W.b*z;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],z);R++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let se=I.shadow,q=t.get(I);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=I.shadow.matrix,A++}n.directional[p]=Y,p++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(W).multiplyScalar(z),Y.distance=$,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[v]=Y;let se=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,se.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[v]=se.matrix,I.castShadow){let q=t.get(I);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=te,y++}v++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(W).multiplyScalar(z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[d]=Y,d++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let se=I.shadow,q=t.get(I);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,q.shadowCameraNear=se.camera.near,q.shadowCameraFar=se.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=Y,g++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(z),Y.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=Y,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==d||D.hemiLength!==m||D.numDirectionalShadows!==A||D.numPointShadows!==x||D.numSpotShadows!==y||D.numSpotMaps!==L||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=d,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=d,D.hemiLength=m,D.numDirectionalShadows=A,D.numPointShadows=x,D.numSpotShadows=y,D.numSpotMaps=L,D.numLightProbes=R,n.version=sg++)}function l(c,h){let f=0,u=0,p=0,g=0,v=0,d=h.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){let x=c[m];if(x.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(x.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),p++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),o.identity(),r.copy(x.matrixWorld),r.premultiply(d),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),u++}else if(x.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(d),v++}}}return{setup:a,setupView:l,state:n}}function lh(i){let e=new og(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ag(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new lh(i),e.set(s,[a])):r>=o.length?(a=new lh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qa=class extends hi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},el=class extends hi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hg(i,e,t){let n=new Os,s=new Ke,r=new Ke,o=new ct,a=new Qa({depthPacking:pd}),l=new el,c={},h=t.maxTextureSize,f={[ai]:Wt,[Wt]:ai,[un]:un},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new gt(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let m=this.type;this.render=function(E,R,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let z=m!==Bn&&this.type===Bn,$=m===Bn&&this.type!==Bn;for(let te=0,Y=E.length;te<Y;te++){let se=E[te],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let he=q.getFrameExtents();if(s.multiply(he),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,q.mapSize.y=r.y)),q.map===null||z===!0||$===!0){let Ie=this.type!==Bn?{minFilter:fn,magFilter:fn}:{};q.map!==null&&q.map.dispose(),q.map=new Wn(s.x,s.y,Ie),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let _e=q.getViewportCount();for(let Ie=0;Ie<_e;Ie++){let Ne=q.getViewport(Ie);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),W.viewport(o),q.updateMatrices(se,Ie),n=q.getFrustum(),y(R,D,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===Bn&&A(q,D),q.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(S,b,I)};function A(E,R){let D=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wn(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,D,u,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,D,p,v,null)}function x(E,R,D,S){let b=null,I=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=D.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=b.uuid,z=R.uuid,$=c[W];$===void 0&&($={},c[W]=$);let te=$[z];te===void 0&&(te=b.clone(),$[z]=te,R.addEventListener("dispose",L)),b=te}if(b.visible=R.visible,b.wireframe=R.wireframe,S===Bn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:f[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let W=i.properties.get(b);W.light=D}return b}function y(E,R,D,S,b){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let z=e.update(E),$=E.material;if(Array.isArray($)){let te=z.groups;for(let Y=0,se=te.length;Y<se;Y++){let q=te[Y],he=$[q.materialIndex];if(he&&he.visible){let _e=x(E,he,S,b);E.onBeforeShadow(i,E,R,D,z,_e,q),i.renderBufferDirect(D,null,z,_e,E,q),E.onAfterShadow(i,E,R,D,z,_e,q)}}}else if($.visible){let te=x(E,$,S,b);E.onBeforeShadow(i,E,R,D,z,te,null),i.renderBufferDirect(D,null,z,te,E,null),E.onAfterShadow(i,E,R,D,z,te,null)}}let W=E.children;for(let z=0,$=W.length;z<$;z++)y(W[z],R,D,S,b)}function L(E){E.target.removeEventListener("dispose",L);for(let D in c){let S=c[D],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var ug={[ia]:sa,[ra]:la,[oa]:ca,[ts]:aa,[sa]:ia,[la]:ra,[ca]:oa,[aa]:ts};function dg(i,e){function t(){let P=!1,le=new ct,G=null,ee=new ct(0,0,0,0);return{setMask:function(ve){G!==ve&&!P&&(i.colorMask(ve,ve,ve,ve),G=ve)},setLocked:function(ve){P=ve},setClear:function(ve,me,He,yt,Dt){Dt===!0&&(ve*=yt,me*=yt,He*=yt),le.set(ve,me,He,yt),ee.equals(le)===!1&&(i.clearColor(ve,me,He,yt),ee.copy(le))},reset:function(){P=!1,G=null,ee.set(-1,0,0,0)}}}function n(){let P=!1,le=!1,G=null,ee=null,ve=null;return{setReversed:function(me){if(le!==me){let He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);let yt=ve;ve=null,this.setClear(yt)}le=me},getReversed:function(){return le},setTest:function(me){me?ae(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(me){G!==me&&!P&&(i.depthMask(me),G=me)},setFunc:function(me){if(le&&(me=ug[me]),ee!==me){switch(me){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=me}},setLocked:function(me){P=me},setClear:function(me){ve!==me&&(le&&(me=1-me),i.clearDepth(me),ve=me)},reset:function(){P=!1,G=null,ee=null,ve=null,le=!1}}}function s(){let P=!1,le=null,G=null,ee=null,ve=null,me=null,He=null,yt=null,Dt=null;return{setTest:function(st){P||(st?ae(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(st){le!==st&&!P&&(i.stencilMask(st),le=st)},setFunc:function(st,on,Pn){(G!==st||ee!==on||ve!==Pn)&&(i.stencilFunc(st,on,Pn),G=st,ee=on,ve=Pn)},setOp:function(st,on,Pn){(me!==st||He!==on||yt!==Pn)&&(i.stencilOp(st,on,Pn),me=st,He=on,yt=Pn)},setLocked:function(st){P=st},setClear:function(st){Dt!==st&&(i.clearStencil(st),Dt=st)},reset:function(){P=!1,le=null,G=null,ee=null,ve=null,me=null,He=null,yt=null,Dt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,p=[],g=null,v=!1,d=null,m=null,A=null,x=null,y=null,L=null,E=null,R=new Xe(0,0,0),D=0,S=!1,b=null,I=null,W=null,z=null,$=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,se=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=se>=2);let he=null,_e={},Ie=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),tt=new ct().fromArray(Ie),Z=new ct().fromArray(Ne);function re(P,le,G,ee){let ve=new Uint8Array(4),me=i.createTexture();i.bindTexture(P,me),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<G;He++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(le+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return me}let be={};be[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(ts),Ze(!1),Ye(uc),ae(i.CULL_FACE),N(ri);function ae(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function De(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Oe(P,le){return f[P]!==le?(i.bindFramebuffer(P,le),f[P]=le,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=le),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ke(P,le){let G=p,ee=!1;if(P){G=u.get(le),G===void 0&&(G=[],u.set(le,G));let ve=P.textures;if(G.length!==ve.length||G[0]!==i.COLOR_ATTACHMENT0){for(let me=0,He=ve.length;me<He;me++)G[me]=i.COLOR_ATTACHMENT0+me;G.length=ve.length,ee=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,ee=!0);ee&&i.drawBuffers(G)}function at(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let qe={[bi]:i.FUNC_ADD,[Hu]:i.FUNC_SUBTRACT,[Vu]:i.FUNC_REVERSE_SUBTRACT};qe[Gu]=i.MIN,qe[Wu]=i.MAX;let _t={[$u]:i.ZERO,[Xu]:i.ONE,[qu]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[Qu]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[Zu]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[ju]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[ed]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function N(P,le,G,ee,ve,me,He,yt,Dt,st){if(P===ri){v===!0&&(De(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),P!==zu){if(P!==d||st!==S){if((m!==bi||y!==bi)&&(i.blendEquation(i.FUNC_ADD),m=bi,y=bi),st)switch(P){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rr:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,x=null,L=null,E=null,R.set(0,0,0),D=0,d=P,S=st}return}ve=ve||le,me=me||G,He=He||ee,(le!==m||ve!==y)&&(i.blendEquationSeparate(qe[le],qe[ve]),m=le,y=ve),(G!==A||ee!==x||me!==L||He!==E)&&(i.blendFuncSeparate(_t[G],_t[ee],_t[me],_t[He]),A=G,x=ee,L=me,E=He),(yt.equals(R)===!1||Dt!==D)&&(i.blendColor(yt.r,yt.g,yt.b,Dt),R.copy(yt),D=Dt),d=P,S=!1}function It(P,le){P.side===un?De(i.CULL_FACE):ae(i.CULL_FACE);let G=P.side===Wt;le&&(G=!G),Ze(G),P.blending===Ji&&P.transparent===!1?N(ri):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let ee=P.stencilWrite;a.setTest(ee),ee&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ht(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function Ye(P){P!==Ou?(ae(i.CULL_FACE),P!==I&&(P===uc?i.cullFace(i.BACK):P===Bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),I=P}function Me(P){P!==W&&(Y&&i.lineWidth(P),W=P)}function ht(P,le,G){P?(ae(i.POLYGON_OFFSET_FILL),(z!==le||$!==G)&&(i.polygonOffset(le,G),z=le,$=G)):De(i.POLYGON_OFFSET_FILL)}function Pe(P){P?ae(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function w(P){P===void 0&&(P=i.TEXTURE0+te-1),he!==P&&(i.activeTexture(P),he=P)}function _(P,le,G){G===void 0&&(he===null?G=i.TEXTURE0+te-1:G=he);let ee=_e[G];ee===void 0&&(ee={type:void 0,texture:void 0},_e[G]=ee),(ee.type!==P||ee.texture!==le)&&(he!==G&&(i.activeTexture(G),he=G),i.bindTexture(P,le||be[P]),ee.type=P,ee.texture=le)}function k(){let P=_e[he];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function T(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B(P){tt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function X(P){Z.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function ne(P,le){let G=c.get(le);G===void 0&&(G=new WeakMap,c.set(le,G));let ee=G.get(P);ee===void 0&&(ee=i.getUniformBlockIndex(le,P.name),G.set(P,ee))}function ce(P,le){let ee=c.get(le).get(P);l.get(le)!==ee&&(i.uniformBlockBinding(le,ee,P.__bindingPointIndex),l.set(le,ee))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},he=null,_e={},f={},u=new WeakMap,p=[],g=null,v=!1,d=null,m=null,A=null,x=null,y=null,L=null,E=null,R=new Xe(0,0,0),D=0,S=!1,b=null,I=null,W=null,z=null,$=null,tt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:De,bindFramebuffer:Oe,drawBuffers:ke,useProgram:at,setBlending:N,setMaterial:It,setFlipSided:Ze,setCullFace:Ye,setLineWidth:Me,setPolygonOffset:ht,setScissorTest:Pe,activeTexture:w,bindTexture:_,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:ye,texImage3D:T,updateUBOMapping:ne,uniformBlockBinding:ce,texStorage2D:ze,texStorage3D:ie,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:de,compressedTexSubImage3D:pe,scissor:B,viewport:X,reset:Ae}}function ch(i,e,t,n){let s=fg(n);switch(t){case Th:return i*e;case Ah:return i*e;case Rh:return i*e*2;case Ch:return i*e/s.components*s.byteLength;case El:return i*e/s.components*s.byteLength;case Ih:return i*e*2/s.components*s.byteLength;case Tl:return i*e*2/s.components*s.byteLength;case wh:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case wl:return i*e*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(e,8)/2;case va:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ar:case Na:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ph:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fg(i){switch(i){case Gn:case Mh:return{byteLength:1,components:1};case Ns:case Sh:case ks:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case wi:case bl:case zn:return{byteLength:4,components:1};case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):Pr("canvas")}function v(w,_,k){let j=1,Q=Pe(w);if((Q.width>k||Q.height>k)&&(j=k/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let K=Math.floor(j*Q.width),Se=Math.floor(j*Q.height);f===void 0&&(f=g(K,Se));let de=_?g(K,Se):f;return de.width=K,de.height=Se,de.getContext("2d").drawImage(w,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Se+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function d(w){return w.generateMipmaps}function m(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,_,k,j,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=_;if(_===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),_===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),_===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),_===i.RGBA){let Se=Q?jr:je.getTransfer(j);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=Se===lt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(w,_){let k;return w?_===null||_===wi||_===rs?k=i.DEPTH24_STENCIL8:_===zn?k=i.DEPTH32F_STENCIL8:_===Ns&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===rs?k=i.DEPTH_COMPONENT24:_===zn?k=i.DEPTH_COMPONENT32F:_===Ns&&(k=i.DEPTH_COMPONENT16),k}function L(w,_){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function E(w){let _=w.target;_.removeEventListener("dispose",E),D(_),_.isVideoTexture&&h.delete(_)}function R(w){let _=w.target;_.removeEventListener("dispose",R),b(_)}function D(w){let _=n.get(w);if(_.__webglInit===void 0)return;let k=w.source,j=u.get(k);if(j){let Q=j[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(w),Object.keys(j).length===0&&u.delete(k)}n.remove(w)}function S(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let k=w.source,j=u.get(k);delete j[_.__cacheKey],o.memory.textures--}function b(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let Q=0;Q<_.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=w.textures;for(let j=0,Q=k.length;j<Q;j++){let K=n.get(k[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(w)}let I=0;function W(){I=0}function z(){let w=I;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),I+=1,w}function $(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function te(w,_){let k=n.get(w);if(w.isVideoTexture&&Me(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,w,_);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function Y(w,_){let k=n.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function se(w,_){let k=n.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function q(w,_){let k=n.get(w);if(w.version>0&&k.__version!==w.version){re(k,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let he={[ss]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},_e={[fn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Ie={[gd]:i.NEVER,[Md]:i.ALWAYS,[vd]:i.LESS,[Dh]:i.LEQUAL,[_d]:i.EQUAL,[bd]:i.GEQUAL,[yd]:i.GREATER,[xd]:i.NOTEQUAL};function Ne(w,_){if(_.type===zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===Mo||_.magFilter===Qs||_.magFilter===Ti||_.minFilter===xn||_.minFilter===Mo||_.minFilter===Qs||_.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,he[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,he[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,he[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_e[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fn||_.minFilter!==Qs&&_.minFilter!==Ti||_.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function tt(w,_){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",E));let j=_.source,Q=u.get(j);Q===void 0&&(Q={},u.set(j,Q));let K=$(_);if(K!==w.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[K].usedTimes++;let Se=Q[w.__cacheKey];Se!==void 0&&(Q[w.__cacheKey].usedTimes--,Se.usedTimes===0&&S(_)),w.__cacheKey=K,w.__webglTexture=Q[K].texture}return k}function Z(w,_,k){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let Q=tt(w,_),K=_.source;t.bindTexture(j,w.__webglTexture,i.TEXTURE0+k);let Se=n.get(K);if(K.version!==Se.__version||Q===!0){t.activeTexture(i.TEXTURE0+k);let de=je.getPrimaries(je.workingColorSpace),pe=_.colorSpace===si?null:je.getPrimaries(_.colorSpace),ze=_.colorSpace===si||de===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ie=v(_.image,!1,s.maxTextureSize);ie=ht(_,ie);let ye=r.convert(_.format,_.colorSpace),T=r.convert(_.type),B=x(_.internalFormat,ye,T,_.colorSpace,_.isVideoTexture);Ne(j,_);let X,ne=_.mipmaps,ce=_.isVideoTexture!==!0,Ae=Se.__version===void 0||Q===!0,P=K.dataReady,le=L(_,ie);if(_.isDepthTexture)B=y(_.format===os,_.type),Ae&&(ce?t.texStorage2D(i.TEXTURE_2D,1,B,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,B,ie.width,ie.height,0,ye,T,null));else if(_.isDataTexture)if(ne.length>0){ce&&Ae&&t.texStorage2D(i.TEXTURE_2D,le,B,ne[0].width,ne[0].height);for(let G=0,ee=ne.length;G<ee;G++)X=ne[G],ce?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,X.width,X.height,ye,T,X.data):t.texImage2D(i.TEXTURE_2D,G,B,X.width,X.height,0,ye,T,X.data);_.generateMipmaps=!1}else ce?(Ae&&t.texStorage2D(i.TEXTURE_2D,le,B,ie.width,ie.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ye,T,ie.data)):t.texImage2D(i.TEXTURE_2D,0,B,ie.width,ie.height,0,ye,T,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ce&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,B,ne[0].width,ne[0].height,ie.depth);for(let G=0,ee=ne.length;G<ee;G++)if(X=ne[G],_.format!==dn)if(ye!==null)if(ce){if(P)if(_.layerUpdates.size>0){let ve=ch(X.width,X.height,_.format,_.type);for(let me of _.layerUpdates){let He=X.data.subarray(me*ve/X.data.BYTES_PER_ELEMENT,(me+1)*ve/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,me,X.width,X.height,1,ye,He)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,X.width,X.height,ie.depth,ye,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,B,X.width,X.height,ie.depth,0,X.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,X.width,X.height,ie.depth,ye,T,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,B,X.width,X.height,ie.depth,0,ye,T,X.data)}else{ce&&Ae&&t.texStorage2D(i.TEXTURE_2D,le,B,ne[0].width,ne[0].height);for(let G=0,ee=ne.length;G<ee;G++)X=ne[G],_.format!==dn?ye!==null?ce?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,X.width,X.height,ye,X.data):t.compressedTexImage2D(i.TEXTURE_2D,G,B,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,X.width,X.height,ye,T,X.data):t.texImage2D(i.TEXTURE_2D,G,B,X.width,X.height,0,ye,T,X.data)}else if(_.isDataArrayTexture)if(ce){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,B,ie.width,ie.height,ie.depth),P)if(_.layerUpdates.size>0){let G=ch(ie.width,ie.height,_.format,_.type);for(let ee of _.layerUpdates){let ve=ie.data.subarray(ee*G/ie.data.BYTES_PER_ELEMENT,(ee+1)*G/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,ye,T,ve)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,T,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,B,ie.width,ie.height,ie.depth,0,ye,T,ie.data);else if(_.isData3DTexture)ce?(Ae&&t.texStorage3D(i.TEXTURE_3D,le,B,ie.width,ie.height,ie.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,T,ie.data)):t.texImage3D(i.TEXTURE_3D,0,B,ie.width,ie.height,ie.depth,0,ye,T,ie.data);else if(_.isFramebufferTexture){if(Ae)if(ce)t.texStorage2D(i.TEXTURE_2D,le,B,ie.width,ie.height);else{let G=ie.width,ee=ie.height;for(let ve=0;ve<le;ve++)t.texImage2D(i.TEXTURE_2D,ve,B,G,ee,0,ye,T,null),G>>=1,ee>>=1}}else if(ne.length>0){if(ce&&Ae){let G=Pe(ne[0]);t.texStorage2D(i.TEXTURE_2D,le,B,G.width,G.height)}for(let G=0,ee=ne.length;G<ee;G++)X=ne[G],ce?P&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ye,T,X):t.texImage2D(i.TEXTURE_2D,G,B,ye,T,X);_.generateMipmaps=!1}else if(ce){if(Ae){let G=Pe(ie);t.texStorage2D(i.TEXTURE_2D,le,B,G.width,G.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,T,ie)}else t.texImage2D(i.TEXTURE_2D,0,B,ye,T,ie);d(_)&&m(j),Se.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function re(w,_,k){if(_.image.length!==6)return;let j=tt(w,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let K=n.get(Q);if(Q.version!==K.__version||j===!0){t.activeTexture(i.TEXTURE0+k);let Se=je.getPrimaries(je.workingColorSpace),de=_.colorSpace===si?null:je.getPrimaries(_.colorSpace),pe=_.colorSpace===si||Se===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ze=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!ze&&!ie?ye[ee]=v(_.image[ee],!0,s.maxCubemapSize):ye[ee]=ie?_.image[ee].image:_.image[ee],ye[ee]=ht(_,ye[ee]);let T=ye[0],B=r.convert(_.format,_.colorSpace),X=r.convert(_.type),ne=x(_.internalFormat,B,X,_.colorSpace),ce=_.isVideoTexture!==!0,Ae=K.__version===void 0||j===!0,P=Q.dataReady,le=L(_,T);Ne(i.TEXTURE_CUBE_MAP,_);let G;if(ze){ce&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ne,T.width,T.height);for(let ee=0;ee<6;ee++){G=ye[ee].mipmaps;for(let ve=0;ve<G.length;ve++){let me=G[ve];_.format!==dn?B!==null?ce?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,me.width,me.height,B,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,ne,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,me.width,me.height,B,X,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,ne,me.width,me.height,0,B,X,me.data)}}}else{if(G=_.mipmaps,ce&&Ae){G.length>0&&le++;let ee=Pe(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ne,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){ce?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,B,X,ye[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ne,ye[ee].width,ye[ee].height,0,B,X,ye[ee].data);for(let ve=0;ve<G.length;ve++){let He=G[ve].image[ee].image;ce?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,He.width,He.height,B,X,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,ne,He.width,He.height,0,B,X,He.data)}}else{ce?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,B,X,ye[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ne,B,X,ye[ee]);for(let ve=0;ve<G.length;ve++){let me=G[ve];ce?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,B,X,me.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,ne,B,X,me.image[ee])}}}d(_)&&m(i.TEXTURE_CUBE_MAP),K.__version=Q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function be(w,_,k,j,Q,K){let Se=r.convert(k.format,k.colorSpace),de=r.convert(k.type),pe=x(k.internalFormat,Se,de,k.colorSpace),ze=n.get(_),ie=n.get(k);if(ie.__renderTarget=_,!ze.__hasExternalTextures){let ye=Math.max(1,_.width>>K),T=Math.max(1,_.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,pe,ye,T,_.depth,0,Se,de,null):t.texImage2D(Q,K,pe,ye,T,0,Se,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ye(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,ie.__webglTexture,0,Ze(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,ie.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(w,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let j=_.depthTexture,Q=j&&j.isDepthTexture?j.type:null,K=y(_.stencilBuffer,Q),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Ze(_);Ye(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,K,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{let j=_.textures;for(let Q=0;Q<j.length;Q++){let K=j[Q],Se=r.convert(K.format,K.colorSpace),de=r.convert(K.type),pe=x(K.internalFormat,Se,de,K.colorSpace),ze=Ze(_);k&&Ye(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,pe,_.width,_.height):Ye(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),te(_.depthTexture,0);let Q=j.__webglTexture,K=Ze(_);if(_.depthTexture.format===ji)Ye(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===os)Ye(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Oe(w){let _=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=j}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");De(_.__webglFramebuffer,w)}else if(k){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),ae(_.__webglDepthbuffer[j],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ae(_.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(w,_,k){let j=n.get(w);_!==void 0&&be(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Oe(w)}function at(w){let _=w.texture,k=n.get(w),j=n.get(_);w.addEventListener("dispose",R);let Q=w.textures,K=w.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let pe=0;pe<_.mipmaps.length;pe++)k.__webglFramebuffer[de][pe]=i.createFramebuffer()}else k.__webglFramebuffer[de]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)k.__webglFramebuffer[de]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Se)for(let de=0,pe=Q.length;de<pe;de++){let ze=n.get(Q[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ye(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){let pe=Q[de];k.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[de]);let ze=r.convert(pe.format,pe.colorSpace),ie=r.convert(pe.type),ye=x(pe.internalFormat,ze,ie,pe.colorSpace,w.isXRRenderTarget===!0),T=Ze(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,ye,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,k.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)be(k.__webglFramebuffer[de][pe],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else be(k.__webglFramebuffer[de],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);d(_)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let de=0,pe=Q.length;de<pe;de++){let ze=Q[de],ie=n.get(ze);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Ne(i.TEXTURE_2D,ze),be(k.__webglFramebuffer,w,ze,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),d(ze)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),Ne(de,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)be(k.__webglFramebuffer[pe],w,_,i.COLOR_ATTACHMENT0,de,pe);else be(k.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,de,0);d(_)&&m(de),t.unbindTexture()}w.depthBuffer&&Oe(w)}function qe(w){let _=w.textures;for(let k=0,j=_.length;k<j;k++){let Q=_[k];if(d(Q)){let K=A(w),Se=n.get(Q).__webglTexture;t.bindTexture(K,Se),m(K),t.unbindTexture()}}}let _t=[],N=[];function It(w){if(w.samples>0){if(Ye(w)===!1){let _=w.textures,k=w.width,j=w.height,Q=i.COLOR_BUFFER_BIT,K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),de=_.length>1;if(de)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);let ze=n.get(_[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,Q,i.NEAREST),l===!0&&(_t.length=0,N.length=0,_t.push(i.COLOR_ATTACHMENT0+pe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_t.push(K),N.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);let ze=n.get(_[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ze(w){return Math.min(s.maxSamples,w.samples)}function Ye(w){let _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function ht(w,_){let k=w.colorSpace,j=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==ds&&k!==si&&(je.getTransfer(k)===lt?(j!==dn||Q!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function Pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=W,this.setTexture2D=te,this.setTexture2DArray=Y,this.setTexture3D=se,this.setTextureCube=q,this.rebindTextures=ke,this.setupRenderTarget=at,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ye}function mg(i,e){function t(n,s=si){let r,o=je.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.BYTE;if(n===Sh)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===Th)return i.ALPHA;if(n===wh)return i.RGB;if(n===dn)return i.RGBA;if(n===Ah)return i.LUMINANCE;if(n===Rh)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Ch)return i.RED;if(n===El)return i.RED_INTEGER;if(n===Ih)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===Tr||n===wr)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===_a||n===ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===_a)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===ba||n===Ma||n===Sa||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===Na||n===Ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ph||n===Fa||n===Oa||n===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tl=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rt=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let d=t.getJointPose(v,n),m=this._getHandJoint(c,v);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:vg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},il=class extends li{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null,v=new nl,d=t.getContextAttributes(),m=null,A=null,x=[],y=[],L=new Ke,E=null,R=new Ot;R.viewport=new ct;let D=new Ot;D.viewport=new ct;let S=[R,D],b=new tl,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=x[Z];return re===void 0&&(re=new Ds,x[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=x[Z];return re===void 0&&(re=new Ds,x[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=x[Z];return re===void 0&&(re=new Ds,x[Z]=re),re.getHandSpace()};function z(Z){let re=y.indexOf(Z.inputSource);if(re===-1)return;let be=x[re];be!==void 0&&(be.update(Z.inputSource,Z.frame,c||o),be.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<x.length;Z++){let re=y[Z];re!==null&&(y[Z]=null,x[Z].disconnect(re))}I=null,W=null,v.reset(),e.setRenderTarget(m),p=null,u=null,f=null,s=null,A=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",$),s.addEventListener("inputsourceschange",te),d.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let re={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Wn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let re=null,be=null,ae=null;d.depth&&(ae=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=d.stencil?os:ji,be=d.stencil?rs:wi);let De={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(De),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new Wn(u.textureWidth,u.textureHeight,{format:dn,type:Gn,depthTexture:new kr(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function te(Z){for(let re=0;re<Z.removed.length;re++){let be=Z.removed[re],ae=y.indexOf(be);ae>=0&&(y[ae]=null,x[ae].disconnect(be))}for(let re=0;re<Z.added.length;re++){let be=Z.added[re],ae=y.indexOf(be);if(ae===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=y.length){y.push(be),ae=Oe;break}else if(y[Oe]===null){y[Oe]=be,ae=Oe;break}if(ae===-1)break}let De=x[ae];De&&De.connect(be)}}let Y=new O,se=new O;function q(Z,re,be){Y.setFromMatrixPosition(re.matrixWorld),se.setFromMatrixPosition(be.matrixWorld);let ae=Y.distanceTo(se),De=re.projectionMatrix.elements,Oe=be.projectionMatrix.elements,ke=De[14]/(De[10]-1),at=De[14]/(De[10]+1),qe=(De[9]+1)/De[5],_t=(De[9]-1)/De[5],N=(De[8]-1)/De[0],It=(Oe[8]+1)/Oe[0],Ze=ke*N,Ye=ke*It,Me=ae/(-N+It),ht=Me*-N;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ht),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Pe=ke+Me,w=at+Me,_=Ze-ht,k=Ye+(ae-ht),j=qe*at/w*Pe,Q=_t*at/w*Pe;Z.projectionMatrix.makePerspective(_,k,j,Q,Pe,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,be=Z.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(be=v.depthFar)),b.near=D.near=R.near=re,b.far=D.far=R.far=be,(I!==b.near||W!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,W=b.far),R.layers.mask=Z.layers.mask|2,D.layers.mask=Z.layers.mask|4,b.layers.mask=R.layers.mask|D.layers.mask;let ae=Z.parent,De=b.cameras;he(b,ae);for(let Oe=0;Oe<De.length;Oe++)he(De[Oe],ae);De.length===2?q(b,R,D):b.projectionMatrix.copy(R.projectionMatrix),_e(Z,b,ae)};function _e(Z,re,be){be===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(be.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=za*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Ie=null;function Ne(Z,re){if(h=re.getViewerPose(c||o),g=re,h!==null){let be=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ae=!1;be.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Oe=0;Oe<be.length;Oe++){let ke=be[Oe],at=null;if(p!==null)at=p.getViewport(ke);else{let _t=f.getViewSubImage(u,ke);at=_t.viewport,Oe===0&&(e.setRenderTargetTextures(A,_t.colorTexture,u.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(A))}let qe=S[Oe];qe===void 0&&(qe=new Ot,qe.layers.enable(Oe),qe.viewport=new ct,S[Oe]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(at.x,at.y,at.width,at.height),Oe===0&&(b.matrix.copy(qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(qe)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){let Oe=f.getDepthInformation(be[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,s.renderState)}}for(let be=0;be<x.length;be++){let ae=y[be],De=x[be];ae!==null&&De!==void 0&&De.update(ae,re,c||o)}Ie&&Ie(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let tt=new Oh;tt.setAnimationLoop(Ne),this.setAnimationLoop=function(Z){Ie=Z},this.dispose=function(){}}},yi=new Mn,yg=new vt;function xg(i,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Fh(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,A,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),f(d,m)):m.isMeshPhongMaterial?(r(d,m),h(d,m)):m.isMeshStandardMaterial?(r(d,m),u(d,m),m.isMeshPhysicalMaterial&&p(d,m,y)):m.isMeshMatcapMaterial?(r(d,m),g(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),v(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?l(d,m,A,x):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Wt&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Wt&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let A=e.get(m),x=A.envMap,y=A.envMapRotation;x&&(d.envMap.value=x,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),d.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(yi)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,A,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*A,d.scale.value=x*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function u(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,A){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wt&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function v(d,m){let A=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bg(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,x){let y=x.program;n.uniformBlockBinding(A,y)}function c(A,x){let y=s[A.id];y===void 0&&(g(A),y=h(A),s[A.id]=y,A.addEventListener("dispose",d));let L=x.program;n.updateUBOMapping(A,L);let E=e.render.frame;r[A.id]!==E&&(u(A),r[A.id]=E)}function h(A){let x=f();A.__bindingPointIndex=x;let y=i.createBuffer(),L=A.__size,E=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let x=s[A.id],y=A.uniforms,L=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,R=y.length;E<R;E++){let D=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,b=D.length;S<b;S++){let I=D[S];if(p(I,E,S,L)===!0){let W=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],$=0;for(let te=0;te<z.length;te++){let Y=z[te],se=v(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,W+$,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,$),$+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,x,y,L){let E=A.value,R=x+"_"+y;if(L[R]===void 0)return typeof E=="number"||typeof E=="boolean"?L[R]=E:L[R]=E.clone(),!0;{let D=L[R];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return L[R]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function g(A){let x=A.uniforms,y=0,L=16;for(let R=0,D=x.length;R<D;R++){let S=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,I=S.length;b<I;b++){let W=S[b],z=Array.isArray(W.value)?W.value:[W.value];for(let $=0,te=z.length;$<te;$++){let Y=z[$],se=v(Y),q=y%L,he=q%se.boundary,_e=q+he;y+=he,_e!==0&&L-_e<se.storage&&(y+=L-_e),W.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=se.storage}}}let E=y%L;return E>0&&(y+=L-E),A.__size=y,A.__cache={},this}function v(A){let x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function d(A){let x=A.target;x.removeEventListener("dispose",d);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var zr=class{constructor(e={}){let{canvas:t=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),d=null,m=null,A=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=oi,this.toneMappingExposure=1;let y=this,L=!1,E=0,R=0,D=null,S=-1,b=null,I=new ct,W=new ct,z=null,$=new Xe(0),te=0,Y=t.width,se=t.height,q=1,he=null,_e=null,Ie=new ct(0,0,Y,se),Ne=new ct(0,0,Y,se),tt=!1,Z=new Os,re=!1,be=!1,ae=new vt,De=new vt,Oe=new O,ke=new ct,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function _t(){return D===null?q:1}let N=n;function It(M,U){return t.getContext(M,U)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){let U="webgl2";if(N=It(U,M),N===null)throw It(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ze,Ye,Me,ht,Pe,w,_,k,j,Q,K,Se,de,pe,ze,ie,ye,T,B,X,ne,ce,Ae,P;function le(){Ze=new Om(N),Ze.init(),ce=new mg(N,Ze),Ye=new Pm(N,Ze,e,ce),Me=new dg(N,Ze),Ye.reverseDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),ht=new zm(N),Pe=new Q0,w=new pg(N,Ze,Me,Pe,Ye,ce,ht),_=new Dm(y),k=new Fm(y),j=new Xd(N),Ae=new Cm(N,j),Q=new Bm(N,j,ht,Ae),K=new Vm(N,Q,j,ht),B=new Hm(N,Ye,w),ie=new Lm(Pe),Se=new j0(y,_,k,Ze,Ye,Ae,ie),de=new xg(y,Pe),pe=new tg,ze=new ag(Ze),T=new Rm(y,_,k,Me,K,p,l),ye=new hg(y,K,Ye),P=new bg(N,ht,Ye,Me),X=new Im(N,Ze,ht),ne=new km(N,Ze,ht),ht.programs=Se.programs,y.capabilities=Ye,y.extensions=Ze,y.properties=Pe,y.renderLists=pe,y.shadowMap=ye,y.state=Me,y.info=ht}le();let G=new il(y,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=Ze.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ze.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(Y,se,!1))},this.getSize=function(M){return M.set(Y,se)},this.setSize=function(M,U,H=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,se=U,t.width=Math.floor(M*q),t.height=Math.floor(U*q),H===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Y*q,se*q).floor()},this.setDrawingBufferSize=function(M,U,H){Y=M,se=U,q=H,t.width=Math.floor(M*H),t.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(Ie)},this.setViewport=function(M,U,H,V){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,U,H,V),Me.viewport(I.copy(Ie).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(Ne)},this.setScissor=function(M,U,H,V){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,U,H,V),Me.scissor(W.copy(Ne).multiplyScalar(q).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){Me.setScissorTest(tt=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){_e=M},this.getClearColor=function(M){return M.copy(T.getClearColor())},this.setClearColor=function(){T.setClearColor.apply(T,arguments)},this.getClearAlpha=function(){return T.getClearAlpha()},this.setClearAlpha=function(){T.setClearAlpha.apply(T,arguments)},this.clear=function(M=!0,U=!0,H=!0){let V=0;if(M){let F=!1;if(D!==null){let oe=D.texture.format;F=oe===wl||oe===Tl||oe===El}if(F){let oe=D.texture.type,ge=oe===Gn||oe===wi||oe===Ns||oe===rs||oe===Ml||oe===Sl,Ee=T.getClearColor(),Te=T.getClearAlpha(),Be=Ee.r,Ve=Ee.g,we=Ee.b;ge?(g[0]=Be,g[1]=Ve,g[2]=we,g[3]=Te,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Be,v[1]=Ve,v[2]=we,v[3]=Te,N.clearBufferiv(N.COLOR,0,v))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),pe.dispose(),ze.dispose(),Pe.dispose(),_.dispose(),k.dispose(),K.dispose(),Ae.dispose(),P.dispose(),Se.dispose(),G.dispose(),G.removeEventListener("sessionstart",ic),G.removeEventListener("sessionend",sc),fi.stop()};function ee(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let M=ht.autoReset,U=ye.enabled,H=ye.autoUpdate,V=ye.needsUpdate,F=ye.type;le(),ht.autoReset=M,ye.enabled=U,ye.autoUpdate=H,ye.needsUpdate=V,ye.type=F}function me(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function He(M){let U=M.target;U.removeEventListener("dispose",He),yt(U)}function yt(M){Dt(M),Pe.remove(M)}function Dt(M){let U=Pe.get(M).programs;U!==void 0&&(U.forEach(function(H){Se.releaseProgram(H)}),M.isShaderMaterial&&Se.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,V,F,oe){U===null&&(U=at);let ge=F.isMesh&&F.matrixWorld.determinant()<0,Ee=Nu(M,U,H,V,F);Me.setMaterial(V,ge);let Te=H.index,Be=1;if(V.wireframe===!0){if(Te=Q.getWireframeAttribute(H),Te===void 0)return;Be=2}let Ve=H.drawRange,we=H.attributes.position,et=Ve.start*Be,dt=(Ve.start+Ve.count)*Be;oe!==null&&(et=Math.max(et,oe.start*Be),dt=Math.min(dt,(oe.start+oe.count)*Be)),Te!==null?(et=Math.max(et,0),dt=Math.min(dt,Te.count)):we!=null&&(et=Math.max(et,0),dt=Math.min(dt,we.count));let ft=dt-et;if(ft<0||ft===1/0)return;Ae.setup(F,V,Ee,H,Te);let Ht,nt=X;if(Te!==null&&(Ht=j.get(Te),nt=ne,nt.setIndex(Ht)),F.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*_t()),nt.setMode(N.LINES)):nt.setMode(N.TRIANGLES);else if(F.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),Me.setLineWidth(Re*_t()),F.isLineSegments?nt.setMode(N.LINES):F.isLineLoop?nt.setMode(N.LINE_LOOP):nt.setMode(N.LINE_STRIP)}else F.isPoints?nt.setMode(N.POINTS):F.isSprite&&nt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Re=F._multiDrawStarts,Ln=F._multiDrawCounts,it=F._multiDrawCount,an=Te?j.get(Te).bytesPerElement:1,Ui=Pe.get(V).currentProgram.getUniforms();for(let Zt=0;Zt<it;Zt++)Ui.setValue(N,"_gl_DrawID",Zt),nt.render(Re[Zt]/an,Ln[Zt])}else if(F.isInstancedMesh)nt.renderInstances(et,ft,F.count);else if(H.isInstancedBufferGeometry){let Re=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ln=Math.min(H.instanceCount,Re);nt.renderInstances(et,ft,Ln)}else nt.render(et,ft)};function st(M,U,H){M.transparent===!0&&M.side===un&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,js(M,U,H),M.side=ai,M.needsUpdate=!0,js(M,U,H),M.side=un):js(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),m=ze.get(H),m.init(U),x.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),M!==H&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let V=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let oe=F.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let Ee=oe[ge];st(Ee,H,F),V.add(Ee)}else st(oe,H,F),V.add(oe)}),x.pop(),m=null,V},this.compileAsync=function(M,U,H=null){let V=this.compile(M,U,H);return new Promise(F=>{function oe(){if(V.forEach(function(ge){Pe.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){F(M);return}setTimeout(oe,10)}Ze.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let on=null;function Pn(M){on&&on(M)}function ic(){fi.stop()}function sc(){fi.start()}let fi=new Oh;fi.setAnimationLoop(Pn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(M){on=M,G.setAnimationLoop(M),M===null?fi.stop():fi.start()},G.addEventListener("sessionstart",ic),G.addEventListener("sessionend",sc),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,D),m=ze.get(M,x.length),m.init(U),x.push(m),De.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(De),be=this.localClippingEnabled,re=ie.init(this.clippingPlanes,be),d=pe.get(M,A.length),d.init(),A.push(d),G.enabled===!0&&G.isPresenting===!0){let oe=y.xr.getDepthSensingMesh();oe!==null&&bo(oe,U,-1/0,y.sortObjects)}bo(M,U,0,y.sortObjects),d.finish(),y.sortObjects===!0&&d.sort(he,_e),qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,qe&&T.addToRenderList(d,M),this.info.render.frame++,re===!0&&ie.beginShadows();let H=m.state.shadowsArray;ye.render(H,M,U),re===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=d.opaque,F=d.transmissive;if(m.setupLights(),U.isArrayCamera){let oe=U.cameras;if(F.length>0)for(let ge=0,Ee=oe.length;ge<Ee;ge++){let Te=oe[ge];oc(V,F,M,Te)}qe&&T.render(M);for(let ge=0,Ee=oe.length;ge<Ee;ge++){let Te=oe[ge];rc(d,M,Te,Te.viewport)}}else F.length>0&&oc(V,F,M,U),qe&&T.render(M),rc(d,M,U);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(y,M,U),Ae.resetDefaultState(),S=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],re===!0&&ie.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,A.pop(),A.length>0?d=A[A.length-1]:d=null};function bo(M,U,H,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){V&&ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(De);let ge=K.update(M),Ee=M.material;Ee.visible&&d.push(M,ge,Ee,H,ke.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){let ge=K.update(M),Ee=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ke.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ke.copy(ge.boundingSphere.center)),ke.applyMatrix4(M.matrixWorld).applyMatrix4(De)),Array.isArray(Ee)){let Te=ge.groups;for(let Be=0,Ve=Te.length;Be<Ve;Be++){let we=Te[Be],et=Ee[we.materialIndex];et&&et.visible&&d.push(M,ge,et,H,ke.z,we)}}else Ee.visible&&d.push(M,ge,Ee,H,ke.z,null)}}let oe=M.children;for(let ge=0,Ee=oe.length;ge<Ee;ge++)bo(oe[ge],U,H,V)}function rc(M,U,H,V){let F=M.opaque,oe=M.transmissive,ge=M.transparent;m.setupLightsView(H),re===!0&&ie.setGlobalState(y.clippingPlanes,H),V&&Me.viewport(I.copy(V)),F.length>0&&Js(F,U,H),oe.length>0&&Js(oe,U,H),ge.length>0&&Js(ge,U,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function oc(M,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Wn(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?ks:Gn,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let oe=m.state.transmissionRenderTarget[V.id],ge=V.viewport||I;oe.setSize(ge.z,ge.w);let Ee=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor($),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),y.clear(),qe&&T.render(H);let Te=y.toneMapping;y.toneMapping=oi;let Be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),re===!0&&ie.setGlobalState(y.clippingPlanes,V),Js(M,H,V),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let we=0,et=U.length;we<et;we++){let dt=U[we],ft=dt.object,Ht=dt.geometry,nt=dt.material,Re=dt.group;if(nt.side===un&&ft.layers.test(V.layers)){let Ln=nt.side;nt.side=Wt,nt.needsUpdate=!0,ac(ft,H,V,Ht,nt,Re),nt.side=Ln,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe))}y.setRenderTarget(Ee),y.setClearColor($,te),Be!==void 0&&(V.viewport=Be),y.toneMapping=Te}function Js(M,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,oe=M.length;F<oe;F++){let ge=M[F],Ee=ge.object,Te=ge.geometry,Be=V===null?ge.material:V,Ve=ge.group;Ee.layers.test(H.layers)&&ac(Ee,U,H,Te,Be,Ve)}}function ac(M,U,H,V,F,oe){M.onBeforeRender(y,U,H,V,F,oe),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(y,U,H,V,M,oe),F.transparent===!0&&F.side===un&&F.forceSinglePass===!1?(F.side=Wt,F.needsUpdate=!0,y.renderBufferDirect(H,U,V,F,M,oe),F.side=ai,F.needsUpdate=!0,y.renderBufferDirect(H,U,V,F,M,oe),F.side=un):y.renderBufferDirect(H,U,V,F,M,oe),M.onAfterRender(y,U,H,V,F,oe)}function js(M,U,H){U.isScene!==!0&&(U=at);let V=Pe.get(M),F=m.state.lights,oe=m.state.shadowsArray,ge=F.state.version,Ee=Se.getParameters(M,F.state,oe,U,H),Te=Se.getProgramCacheKey(Ee),Be=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?k:_).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",He),Be=new Map,V.programs=Be);let Ve=Be.get(Te);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===ge)return cc(M,Ee),Ve}else Ee.uniforms=Se.getUniforms(M),M.onBeforeCompile(Ee,y),Ve=Se.acquireProgram(Ee,Te),Be.set(Te,Ve),V.uniforms=Ee.uniforms;let we=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=ie.uniform),cc(M,Ee),V.needsLights=Fu(M),V.lightsStateVersion=ge,V.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function lc(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=es.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function cc(M,U){let H=Pe.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Nu(M,U,H,V,F){U.isScene!==!0&&(U=at),w.resetTextureUnits();let oe=U.fog,ge=V.isMeshStandardMaterial?U.environment:null,Ee=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ds,Te=(V.isMeshStandardMaterial?k:_).get(V.envMap||ge),Be=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,dt=!!H.morphAttributes.color,ft=oi;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=y.toneMapping);let Ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=Ht!==void 0?Ht.length:0,Re=Pe.get(V),Ln=m.state.lights;if(re===!0&&(be===!0||M!==b)){let en=M===b&&V.id===S;ie.setState(V,M,en)}let it=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ln.state.version||Re.outputColorSpace!==Ee||F.isBatchedMesh&&Re.batching===!1||!F.isBatchedMesh&&Re.batching===!0||F.isBatchedMesh&&Re.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Re.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Re.instancing===!1||!F.isInstancedMesh&&Re.instancing===!0||F.isSkinnedMesh&&Re.skinning===!1||!F.isSkinnedMesh&&Re.skinning===!0||F.isInstancedMesh&&Re.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Re.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Re.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Re.instancingMorph===!1&&F.morphTexture!==null||Re.envMap!==Te||V.fog===!0&&Re.fog!==oe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ie.numPlanes||Re.numIntersection!==ie.numIntersection)||Re.vertexAlphas!==Be||Re.vertexTangents!==Ve||Re.morphTargets!==we||Re.morphNormals!==et||Re.morphColors!==dt||Re.toneMapping!==ft||Re.morphTargetsCount!==nt)&&(it=!0):(it=!0,Re.__version=V.version);let an=Re.currentProgram;it===!0&&(an=js(V,U,F));let Ui=!1,Zt=!1,Ms=!1,pt=an.getUniforms(),_n=Re.uniforms;if(Me.useProgram(an.program)&&(Ui=!0,Zt=!0,Ms=!0),V.id!==S&&(S=V.id,Zt=!0),Ui||b!==M){Me.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),wd(ae),Ad(ae),pt.setValue(N,"projectionMatrix",ae)):pt.setValue(N,"projectionMatrix",M.projectionMatrix),pt.setValue(N,"viewMatrix",M.matrixWorldInverse);let Kn=pt.map.cameraPosition;Kn!==void 0&&Kn.setValue(N,Oe.setFromMatrixPosition(M.matrixWorld)),Ye.logarithmicDepthBuffer&&pt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Zt=!0,Ms=!0)}if(F.isSkinnedMesh){pt.setOptional(N,F,"bindMatrix"),pt.setOptional(N,F,"bindMatrixInverse");let en=F.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),pt.setValue(N,"boneTexture",en.boneTexture,w))}F.isBatchedMesh&&(pt.setOptional(N,F,"batchingTexture"),pt.setValue(N,"batchingTexture",F._matricesTexture,w),pt.setOptional(N,F,"batchingIdTexture"),pt.setValue(N,"batchingIdTexture",F._indirectTexture,w),pt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&pt.setValue(N,"batchingColorTexture",F._colorsTexture,w));let Ss=H.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&B.update(F,H,an),(Zt||Re.receiveShadow!==F.receiveShadow)&&(Re.receiveShadow=F.receiveShadow,pt.setValue(N,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_n.envMap.value=Te,_n.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(_n.envMapIntensity.value=U.environmentIntensity),Zt&&(pt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&Uu(_n,Ms),oe&&V.fog===!0&&de.refreshFogUniforms(_n,oe),de.refreshMaterialUniforms(_n,V,q,se,m.state.transmissionRenderTarget[M.id]),es.upload(N,lc(Re),_n,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(es.upload(N,lc(Re),_n,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(N,"center",F.center),pt.setValue(N,"modelViewMatrix",F.modelViewMatrix),pt.setValue(N,"normalMatrix",F.normalMatrix),pt.setValue(N,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let en=V.uniformsGroups;for(let Kn=0,Jn=en.length;Kn<Jn;Kn++){let hc=en[Kn];P.update(hc,an),P.bind(hc,an)}}return an}function Uu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Fu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,U,H){Pe.get(M.texture).__webglTexture=U,Pe.get(M.depthTexture).__webglTexture=H;let V=Pe.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){let H=Pe.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){D=M,E=U,R=H;let V=!0,F=null,oe=!1,ge=!1;if(M){let Te=Pe.get(M);if(Te.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(Te.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(Te.__hasExternalTextures)w.rebindTextures(M,Pe.get(M.texture).__webglTexture,Pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let we=M.depthTexture;if(Te.__boundDepthTexture!==we){if(we!==null&&Pe.has(we)&&(M.width!==we.image.width||M.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);let Ve=Pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?F=Ve[U][H]:F=Ve[U],oe=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?F=Pe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?F=Ve[H]:F=Ve,I.copy(M.viewport),W.copy(M.scissor),z=M.scissorTest}else I.copy(Ie).multiplyScalar(q).floor(),W.copy(Ne).multiplyScalar(q).floor(),z=tt;if(Me.bindFramebuffer(N.FRAMEBUFFER,F)&&V&&Me.drawBuffers(M,F),Me.viewport(I),Me.scissor(W),Me.setScissorTest(z),oe){let Te=Pe.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,H)}else if(ge){let Te=Pe.get(M.texture),Be=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,H||0,Be)}S=-1},this.readRenderTargetPixels=function(M,U,H,V,F,oe,ge){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Me.bindFramebuffer(N.FRAMEBUFFER,Ee);try{let Te=M.texture,Be=Te.format,Ve=Te.type;if(!Ye.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&H>=0&&H<=M.height-F&&N.readPixels(U,H,V,F,ce.convert(Be),ce.convert(Ve),oe)}finally{let Te=D!==null?Pe.get(D).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,V,F,oe,ge){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){let Te=M.texture,Be=Te.format,Ve=Te.type;if(!Ye.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-V&&H>=0&&H<=M.height-F){Me.bindFramebuffer(N.FRAMEBUFFER,Ee);let we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,oe.byteLength,N.STREAM_READ),N.readPixels(U,H,V,F,ce.convert(Be),ce.convert(Ve),0);let et=D!==null?Pe.get(D).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,et);let dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Td(N,dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,oe),N.deleteBuffer(we),N.deleteSync(dt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,H=0){M.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);let V=Math.pow(2,-H),F=Math.floor(M.image.width*V),oe=Math.floor(M.image.height*V),ge=U!==null?U.x:0,Ee=U!==null?U.y:0;w.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,ge,Ee,F,oe),Me.unbindTexture()},this.copyTextureToTexture=function(M,U,H=null,V=null,F=0){M.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],U=arguments[2],F=arguments[3]||0,H=null);let oe,ge,Ee,Te,Be,Ve,we,et,dt,ft=M.isCompressedTexture?M.mipmaps[F]:M.image;H!==null?(oe=H.max.x-H.min.x,ge=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,Be=H.min.y,Ve=H.isBox3?H.min.z:0):(oe=ft.width,ge=ft.height,Ee=ft.depth||1,Te=0,Be=0,Ve=0),V!==null?(we=V.x,et=V.y,dt=V.z):(we=0,et=0,dt=0);let Ht=ce.convert(U.format),nt=ce.convert(U.type),Re;U.isData3DTexture?(w.setTexture3D(U,0),Re=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Re=N.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Re=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),an=N.getParameter(N.UNPACK_SKIP_PIXELS),Ui=N.getParameter(N.UNPACK_SKIP_ROWS),Zt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);let Ms=M.isDataArrayTexture||M.isData3DTexture,pt=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let _n=Pe.get(M),Ss=Pe.get(U),en=Pe.get(_n.__renderTarget),Kn=Pe.get(Ss.__renderTarget);Me.bindFramebuffer(N.READ_FRAMEBUFFER,en.__webglFramebuffer),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Jn=0;Jn<Ee;Jn++)Ms&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(M).__webglTexture,F,Ve+Jn),M.isDepthTexture?(pt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(U).__webglTexture,F,dt+Jn),N.blitFramebuffer(Te,Be,oe,ge,we,et,oe,ge,N.DEPTH_BUFFER_BIT,N.NEAREST)):pt?N.copyTexSubImage3D(Re,F,we,et,dt+Jn,Te,Be,oe,ge):N.copyTexSubImage2D(Re,F,we,et,dt+Jn,Te,Be,oe,ge);Me.bindFramebuffer(N.READ_FRAMEBUFFER,null),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Re,F,we,et,dt,oe,ge,Ee,Ht,nt,ft.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,F,we,et,dt,oe,ge,Ee,Ht,ft.data):N.texSubImage3D(Re,F,we,et,dt,oe,ge,Ee,Ht,nt,ft):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,we,et,oe,ge,Ht,nt,ft.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,we,et,ft.width,ft.height,Ht,ft.data):N.texSubImage2D(N.TEXTURE_2D,F,we,et,oe,ge,Ht,nt,ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ln),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,an),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ui),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt),F===0&&U.generateMipmaps&&N.generateMipmap(Re),Me.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H=null,V=null,F=0){return M.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,M=arguments[2],U=arguments[3],F=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,H,V,F)},this.initRenderTarget=function(M){Pe.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){E=0,R=0,D=null,Me.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Hr=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Vr=class extends hi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gr=new O,Wr=new O,hh=new vt,Cs=new Us,xr=new as,jo=new O,uh=new O,sl=class extends $t{constructor(e=new nn,t=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Gr.fromBufferAttribute(t,s-1),Wr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gr.distanceTo(Wr);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,e.ray.intersectsSphere(xr)===!1)return;hh.copy(s).invert(),Cs.copy(e.ray).applyMatrix4(hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,d=g-1;v<d;v+=c){let m=h.getX(v),A=h.getX(v+1),x=br(this,e,Cs,l,m,A);x&&t.push(x)}if(this.isLineLoop){let v=h.getX(g-1),d=h.getX(p),m=br(this,e,Cs,l,v,d);m&&t.push(m)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,d=g-1;v<d;v+=c){let m=br(this,e,Cs,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=br(this,e,Cs,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function br(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Gr.fromBufferAttribute(o,s),Wr.fromBufferAttribute(o,r),t.distanceSqToSegment(Gr,Wr,jo,uh)>n)return;jo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(jo);if(!(l<e.near||l>e.far))return{distance:l,point:uh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var dh=new O,fh=new O,rl=class extends sl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dh.fromBufferAttribute(t,s),fh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dh.distanceTo(fh);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var cs=class extends Qt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class i extends nn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],g=0,v=[],d=n/2,m=0;A(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new bt(f,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(p,2));function A(){let y=new O,L=new O,E=0,R=(t-e)/n;for(let D=0;D<=r;D++){let S=[],b=D/r,I=b*(t-e)+e;for(let W=0;W<=s;W++){let z=W/s,$=z*l+a,te=Math.sin($),Y=Math.cos($);L.x=I*te,L.y=-b*n+d,L.z=I*Y,f.push(L.x,L.y,L.z),y.set(te,R,Y).normalize(),u.push(y.x,y.y,y.z),p.push(z,1-b),S.push(g++)}v.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let b=v[S][D],I=v[S+1][D],W=v[S+1][D+1],z=v[S][D+1];(e>0||S!==0)&&(h.push(b,I,z),E+=3),(t>0||S!==r-1)&&(h.push(I,W,z),E+=3)}c.addGroup(m,E,0),m+=E}function x(y){let L=g,E=new Ke,R=new O,D=0,S=y===!0?e:t,b=y===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,d*b,0),u.push(0,b,0),p.push(.5,.5),g++;let I=g;for(let W=0;W<=s;W++){let $=W/s*l+a,te=Math.cos($),Y=Math.sin($);R.x=S*Y,R.y=d*b,R.z=S*te,f.push(R.x,R.y,R.z),u.push(0,b,0),E.x=te*.5+.5,E.y=Y*.5*b+.5,p.push(E.x,E.y),g++}for(let W=0;W<s;W++){let z=L+W,$=I+W;y===!0?h.push($,$+1,z):h.push($+1,$,z),D+=3}c.addGroup(m,D,y===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class i extends hs{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bs=class i extends nn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new O,u=new O,p=[],g=[],v=[],d=[];for(let m=0;m<=n;m++){let A=[],x=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let E=L/t;f.x=-e*Math.cos(s+E*r)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),d.push(E+y,1-x),A.push(c++)}h.push(A)}for(let m=0;m<n;m++)for(let A=0;A<t;A++){let x=h[m][A+1],y=h[m][A],L=h[m+1][A],E=h[m+1][A+1];(m!==0||o>0)&&p.push(x,y,E),(m!==n-1||l<Math.PI)&&p.push(y,L,E)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ci=class i extends nn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new O,f=new O,u=new O;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let v=g/s*r,d=p/n*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(v),f.y=(e+t*Math.cos(d))*Math.sin(v),f.z=t*Math.sin(d),a.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,d=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,A=(s+1)*p+g;o.push(v,d,A),o.push(d,m,A)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ii=class extends hi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Mr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var us=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ol=class extends us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pc,endingEnd:pc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case mc:r=e,a=2*t-n;break;case gc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mc:o=e,l=2*n-t;break;case gc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,d=v*g,m=-u*d+2*u*v-u*g,A=(1+u)*d+(-1.5-2*u)*v+(-.5+u)*g+1,x=(-1-p)*d+(1.5+p)*v+.5*g,y=p*d-p*v;for(let L=0;L!==a;++L)r[L]=m*o[h+L]+A*o[c+L]+x*o[l+L]+y*o[f+L];return r}},al=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},ll=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mr(t,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mr(e.times,Array),values:Mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ol(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cr:t=this.InterpolantFactoryMethodDiscrete;break;case ka:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Mg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,u=f-n,p=f+n;for(let g=0;g!==n;++g){let v=t[f+g];if(v!==t[u+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ka;var Pi=class extends pn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Cr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends pn{};cl.prototype.ValueTypeName="color";var hl=class extends pn{};hl.prototype.ValueTypeName="number";var ul=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xr=class extends pn{InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends pn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Cr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends pn{};dl.prototype.ValueTypeName="vector";var fl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Sg=new fl,pl=class{constructor(e){this.manager=e!==void 0?e:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var qr=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yr=class extends qr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qo=new vt,ph=new O,mh=new O,ml=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var gh=new vt,Is=new O,ea=new O,gl=class extends ml{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),ea.copy(n.position),ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ea),n.updateMatrixWorld(),s.makeTranslation(-Is.x,-Is.y,-Is.z),gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh)}},ui=class extends qr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var Rl="\\[\\]\\.:\\/",Eg=new RegExp("["+Rl+"]","g"),Cl="[^"+Rl+"]",Tg="[^"+Rl.replace("\\.","")+"]",wg=/((?:WC+[\/:])*)/.source.replace("WC",Cl),Ag=/(WCOD+)?/.source.replace("WCOD",Tg),Rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cl),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cl),Ig=new RegExp("^"+wg+Ag+Rg+Cg+"$"),Pg=["material","materials","bones","map"],vl=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eg,"")}static parseTrackName(e){let t=Ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=vl;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gv=new Float32Array(1);var vh=new vt,Zr=class{constructor(e,t,n=0,s=1/0){this.ray=new Us(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(e,t=!0,n=[]){return _l(e,this,n,t),n.sort(_h),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)_l(e[s],this,n,t);return n.sort(_h),n}};function _h(i,e){return i.distance-e.distance}function _l(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)_l(r[o],e,t,!0)}}var Kr=class extends rl{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new nn;r.setIndex(new jt(n,1)),r.setAttribute("position",new bt(s,3)),super(r,new Vr({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);var Fe={sans:'"Segoe UI", "Helvetica Neue", Roboto, Arial, sans-serif',mono:'Consolas, Menlo, "DejaVu Sans Mono", "Courier New", monospace'};function Mt(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=new cs(n);return r.colorSpace=Ft,r.anisotropy=4,r.userData.ctx=s,t&&t(s,i,e),r}function $n(i,e){let t=i.userData.ctx;e(t,t.canvas.width,t.canvas.height),i.needsUpdate=!0}function kt(i,{w:e=512,h:t=256,bg:n="#f2f2ee",fg:s="#111",font:r=`bold 44px ${Fe.sans}`,border:o=null,align:a="center"}={}){return Mt(e,t,l=>{l.fillStyle=n,l.fillRect(0,0,e,t),o&&(l.strokeStyle=o,l.lineWidth=10,l.strokeRect(5,5,e-10,t-10)),l.textAlign=a,l.textBaseline="middle";let c=t/(i.length+1);i.forEach((h,f)=>{let u=typeof h=="string"?{t:h}:h;l.font=u.font||r,l.fillStyle=u.color||s,l.fillText(u.t,a==="center"?e/2:24,c*(f+1))})})}function Pl(i="#6b7178",e="#565b61",t=4,n=512){let s=Mt(n,n,r=>{r.fillStyle=i,r.fillRect(0,0,n,n);for(let a=0;a<2500;a++)r.fillStyle=`rgba(0,0,0,${Math.random()*.05})`,r.fillRect(Math.random()*n,Math.random()*n,2,2);r.strokeStyle=e,r.lineWidth=3;let o=n/t;for(let a=0;a<=t;a++)r.beginPath(),r.moveTo(a*o,0),r.lineTo(a*o,n),r.stroke(),r.beginPath(),r.moveTo(0,a*o),r.lineTo(n,a*o),r.stroke()});return s.wrapS=s.wrapT=ss,s}function Vh(){return Mt(512,320,(i,e,t)=>{i.fillStyle="#c9ced4",i.fillRect(0,0,e,t);let n=10,s=6,r=8,o=(e-r*2)/n,a=(t-r*2)/s;for(let l=0;l<s;l++)for(let c=0;c<n;c++){let h=r+c*o,f=r+l*a,u=i.createLinearGradient(h,f,h+o,f+a);u.addColorStop(0,"#1a2a6e"),u.addColorStop(1,"#0d1740"),i.fillStyle=u,i.fillRect(h+1.5,f+1.5,o-3,a-3),i.strokeStyle="rgba(200,210,230,.35)",i.lineWidth=1;for(let p=1;p<4;p++)i.beginPath(),i.moveTo(h+p*o/4,f+2),i.lineTo(h+p*o/4,f+a-2),i.stroke()}})}function Gh(){let i=Mt(256,64,(e,t,n)=>{e.fillStyle="#f2c200",e.fillRect(0,0,t,n),e.fillStyle="#111";for(let s=-n;s<t+n;s+=48)e.beginPath(),e.moveTo(s,n),e.lineTo(s+24,n),e.lineTo(s+24+n,0),e.lineTo(s+n,0),e.fill()});return i.wrapS=ss,i}function Wh(i,e,t,n,s=50){let r=s/2;i.beginPath(),e==="AND"||e==="NAND"?(i.moveTo(t,n-r),i.lineTo(t+35,n-r),i.arc(t+35,n,r,-Math.PI/2,Math.PI/2),i.lineTo(t,n+r),i.closePath()):e==="OR"||e==="NOR"||e==="XOR"?(i.moveTo(t,n-r),i.quadraticCurveTo(t+45,n-r,t+70,n),i.quadraticCurveTo(t+45,n+r,t,n+r),i.quadraticCurveTo(t+16,n,t,n-r),i.closePath()):e==="NOT"&&(i.moveTo(t,n-20),i.lineTo(t+48,n),i.lineTo(t,n+20),i.closePath()),i.fill(),i.stroke(),e==="XOR"&&(i.beginPath(),i.moveTo(t-9,n-r),i.quadraticCurveTo(t+7,n,t-9,n+r),i.stroke());let o=e==="NOT"?t+48:t+70;return(e==="NOT"||e==="NAND"||e==="NOR")&&($h(i,o+6,n),o+=12),o}function $h(i,e,t){i.beginPath(),i.arc(e,t,6,0,Math.PI*2),i.fill(),i.stroke()}function Xh(i,e,t,n,{bg:s="#f3efe2",ink:r="#1c3f94",title:o="FW-BOARD rev.C"}={}){i.fillStyle=s,i.fillRect(0,0,e,t),i.strokeStyle=r,i.fillStyle=r,i.lineWidth=3,i.lineJoin="round",i.font="bold 26px Consolas, monospace",i.textAlign="left",i.fillText(o+"  \u2014  OUT must be 1",24,38),i.save(),i.strokeStyle="rgba(28,63,148,.08)",i.lineWidth=1;for(let x=0;x<e;x+=20)i.beginPath(),i.moveTo(x,50),i.lineTo(x,t),i.stroke();for(let x=50;x<t;x+=20)i.beginPath(),i.moveTo(0,x),i.lineTo(e,x),i.stroke();i.restore();let a={A:70,B:130,C:190,D:250},l=90,c=t-30;i.font="bold 28px Consolas",i.textAlign="center";for(let[x,y]of Object.entries(a))i.fillText(x,y,l-12),i.beginPath(),i.moveTo(y,l),i.lineTo(y,c),i.stroke(),i.beginPath(),i.arc(y,l,5,0,Math.PI*2),i.fill();let h=n.terms,f=h.length,u=430,p=c-l-90,g=[];i.fillStyle=s,h.forEach((x,y)=>{let L=l+30+(f===1?p/2:p*y/(f-1)),E=x.g==="NOT"?[[x.a,L]]:[[x.a,L-12],[x.b,L+12]];for(let[D,S]of E){let b=D[0]==="!",I=b?D[1]:D,W=u+(x.g==="OR"||x.g==="NOR"||x.g==="XOR"?x.g==="XOR"?-9:5:0)-(b?12:0);i.beginPath(),i.moveTo(a[I],S),i.lineTo(W,S),i.stroke(),i.save(),i.fillStyle=r,i.beginPath(),i.arc(a[I],S,5,0,Math.PI*2),i.fill(),i.restore(),b&&$h(i,W+6,S)}let R=Wh(i,x.g,u,L);i.save(),i.fillStyle=r,i.font="15px Consolas",i.fillText(x.g,u+28,L+42),i.restore(),g.push([R,L])});let v=700,d=l+30+p/2,m=Math.max(70,f*26);g.forEach(([x,y],L)=>{let E=d-m/2+m*(L+1)/(f+1),R=600+L*14;i.beginPath(),i.moveTo(x,y),i.lineTo(R,y),i.lineTo(R,E),i.lineTo(v,E),i.stroke()});let A=Wh(i,"AND",v,d,m);i.save(),i.fillStyle=r,i.font="15px Consolas",i.fillText("AND",v+30,d+m/2+18),i.restore(),i.beginPath(),i.moveTo(A,d),i.lineTo(e-90,d),i.stroke(),i.save(),i.fillStyle=r,i.beginPath(),i.moveTo(e-90,d-16),i.lineTo(e-60,d),i.lineTo(e-90,d+16),i.closePath(),i.fill(),i.fillRect(e-58,d-16,4,32),i.font="bold 22px Consolas",i.fillText("OUT",e-62,d-28),i.restore()}var Lg=[{terms:[{g:"AND",a:"A",b:"!B"},{g:"XOR",a:"C",b:"D"},{g:"OR",a:"B",b:"D"}]},{terms:[{g:"XOR",a:"A",b:"B"},{g:"AND",a:"B",b:"D"},{g:"NOT",a:"C"}]},{terms:[{g:"AND",a:"A",b:"C"},{g:"NOR",a:"B",b:"D"}]}],qh=(i,e)=>e[0]==="!"?1-i["ABCD".indexOf(e[1])]:i["ABCD".indexOf(e)];function Dg(i,e){let t=qh(e,i.a),n=i.b?qh(e,i.b):0;switch(i.g){case"AND":return t&n;case"NAND":return 1-(t&n);case"OR":return t|n;case"NOR":return 1-(t|n);case"XOR":return t^n;case"NOT":return 1-t}return 0}var Ll=(i,e)=>i.terms.every(t=>Dg(t,e)===1)?1:0;function Ng(i){let e=[];for(let t=0;t<16;t++){let n=[t>>3&1,t>>2&1,t>>1&1,t&1];Ll(i,n)&&e.push(n.join(""))}return e}function Ug(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Fg=["Faraday","Tesla","Kelvin","Ampere","Joule","Hertz","Ohm","Watt"],Og=["GRID","VOLT","WATT","AMPS","OHMS"],Bg=["H2","PV","AC","DC"],kg=[10,12,15,18,22,27,33,39,47,56,68,82],Dl=["black","brown","red","orange","yellow","green","blue","violet","grey","white"],ps=["#111","#6b3a1e","#d0231f","#f07f16","#f5d10f","#2c9a3a","#2455c9","#7b3fb0","#8a8a8a","#f4f4f4"];function Yh(i=0){let e;if(!i)e={seed:0,year:1987,cat:"Faraday",lamps:6,res:47,resMult:2,bin:150,circuit:0,f1:"GRID",f3:"H2"};else{let t=Ug(Math.imul(i^2654435769,2654435761)^i>>>16),n=s=>s[Math.floor(t()*s.length)];e={seed:i,year:1975+Math.floor(t()*30),cat:n(Fg),lamps:4+Math.floor(t()*5),res:n(kg),resMult:2,bin:129+Math.floor(t()*126),circuit:Math.floor(t()*3),f1:n(Og),f3:n(Bg)}}return e.drawerCode=String(e.res*10**e.resMult).padStart(4,"0"),e.bands=[Math.floor(e.res/10),e.res%10,e.resMult],e.binStr=e.bin.toString(2).padStart(8,"0"),e.circuitDef=Lg[e.circuit],e.boardSolution=Ng(e.circuitDef)[0],e.userPw=e.cat.toLowerCase().split("").reverse().join(""),e.rootPw=`${e.f1}${e.bin}${e.f3}`,e.gridV=i?228+i%6:231,e.gridF=i?Math.round((49.97+i%9/100)*100)/100:50.03,e}var eo={title:"\u26A1 POWER LAB ESCAPE",lead:"Friday, 18:40. You came to the <b>Solar Test Laboratory</b> to certify its island microgrid. Then the storm hit.",body:`The public grid is down, the building is dark, and the booth door \u2014 a motor-driven, fail-secure sliding door \u2014 won't move without power.
    The emergency lights run on a battery that lasts about an hour. Marco Volta, the lab's head, has already left for the weekend.<br><br>
    Bring the lab's own power system to life, get into the control room, and get the building back on the grid.`},Zh=[[30,"Volta's Successor"],[40,"Chief Grid Engineer"],[50,"Senior Engineer"],[60,"Engineer"],[1/0,"Intern (overtime)"]];function Kh(i){return{rec1:{title:"Voice recorder \xB7 workbench",label:"Voice recorder",text:`"Memo, Friday. Facility management finally installed the fail-secure door drive on the booth. No power, no exit \u2014 very safe, they say.
Note to self: never get locked in here during a grid outage. \u2026Also, somebody feed the cat over the weekend."`},rec2:{title:"Voice recorder \xB7 battery cabinet",label:"Voice recorder",text:`"Changed the sun-simulator PIN again. It's the year we opened \u2014 the one engraved on that pompous brass plaque.
And yes, I wired the simulator to the building's emergency generator. Don't tell facility management."`},rec3:{title:"Voice recorder \xB7 electrolyzer",label:"Voice recorder",text:`"Lesson of the week: our three inverters are single-phase. Each one FORMS its own phase. Power cannot hop from L1 to L2 \u2014
if nothing feeds a phase, nothing on it runs. The intern tried to charge the battery from an empty phase for an hour.
Then he opened the H\u2082 valve with a wrench. The handwheel lives in my bench drawer now."`},rec4:{title:"Voice recorder \xB7 control room",label:"Voice recorder",text:`"If the grid ever drops out: the operator won't let us back on until gridctl has validated a day-ahead schedule.
Then synchronise at the tie panel \u2014 voltage, frequency, rotation, and close at twelve. Don't close out of phase. I've heard that bang once."`}}}function Hs(i){return[["LAB NOTES \u2014 DON'T ERASE!!","#1b3f8f","bold 40px"],["INV-1 \u2500 L?     INV-2 \u2500 L?     INV-3 \u2500 L?","#1b3f8f"],["   (each inverter = its OWN phase \u2192 island!)","#b3261e"],["Door drive: 3~ motor, 3 kW / phase at start","#1b3f8f"],["Sun-sim PIN \u2192 the year we opened \u2713","#1b3f8f"],["H\u2082 handwheel \u2192 locked away (intern-proof)","#1b3f8f"],["BMS min 25 %  \xB7  FC needs \u2592\u2592 % H\u2082","#1b3f8f"],["                                  \u2014 M.V.","#1b3f8f"]]}function Jh(i){return[{from:"it-security@solarlab.example",subj:"Your password hygiene (3rd reminder)",body:`Dear Marco,
we noticed that your password is still based on your cat's name. Reversing it does not count as encryption.
Please also stop splitting the root password into "fragments".
\u2014 IT`},{from:"dispatch@tso-grid.example",subj:"RE: Reconnection after outage \u2014 procedure",body:`Hello Solar Test Laboratory,
after the storm outage, reconnection of your site requires:
  1) a validated day-ahead dispatch schedule (gridctl, \u2265 ${Math.round(.55*100)} % of the optimum),
  2) manual synchronisation at your tie breaker Q0.
Our side: ${i.gridV} V, ${i.gridF.toFixed(2)} Hz, rotation L1-L2-L3 (clockwise).
The reconnection permit will be issued automatically once the schedule is validated.
\u2014 Grid Dispatch`},{from:"marco.volta@solarlab.example",subj:"Out of office",body:`I'm off for the weekend. For emergencies: don't.
PS for whoever is on duty: the cat sleeps on the battery inverter in the booth. Do not wake him. He bites.`}]}function Nl(){return`SYNC CHECKLIST \u2014 tie breaker Q0
1. Island voltage = grid voltage (\xB1 2 %)
2. Island frequency a hair ABOVE grid
   (needle creeps clockwise, slip \u2264 0.1 Hz)
3. Check phase ro\u2592\u2592\u2592\u2592n \u2014 the three lamps
   must go dark TOGETHER, not chase
4. Close when the needle is at 12 (\xB1 10\xB0)
                                   \u2014 M.V.`}var Je=3.5,We=(i,e={})=>new Ii({color:i,roughness:.7,metalness:.05,...e});function to(i,e,t,n){i.fillStyle="#2a2f36",i.fillRect(0,0,e,t),i.fillStyle="#ffd24a",i.font=`bold 30px ${Fe.sans}`,i.textAlign="center",i.fillText("SUN-SIM",e/2,40),i.fillStyle="#081a0e",i.fillRect(24,60,e-48,50),i.fillStyle=n?"#3eff7a":"#ff4a4a",i.font=`24px ${Fe.mono}`,i.fillText(n?"UNLOCKED":"LOCKED",e/2,94);for(let s=0;s<4;s++)for(let r=0;r<3;r++)i.fillStyle="#ccd",i.fillRect(40+r*64,130+s*56,48,42),i.fillStyle="#222",i.font=`bold 22px ${Fe.sans}`,i.fillText("123456789C0\u2713"[s*3+r],64+r*64,159+s*56)}function Fl(i,e,t,n,s){i.fillStyle="#100404",i.fillRect(0,0,e,t),i.fillStyle=s?"#ff3b2f":"#3a1210",i.font=`bold ${t*.75}px ${Fe.mono}`,i.textAlign="center",i.textBaseline="middle",i.fillText(s?n:"--",e/2,t/2+2),i.textBaseline="alphabetic"}function Ul(i){return Mt(1024,384,(e,t,n)=>{let s=e.createLinearGradient(0,0,0,n);if(i?(s.addColorStop(0,"#2b4a7a"),s.addColorStop(.55,"#f0a068"),s.addColorStop(1,"#ffd9a0")):(s.addColorStop(0,"#03060f"),s.addColorStop(1,"#141c2c")),e.fillStyle=s,e.fillRect(0,0,t,n),i){let l=e.createRadialGradient(760,n-70,5,760,n-70,120);l.addColorStop(0,"rgba(255,240,200,1)"),l.addColorStop(1,"rgba(255,200,120,0)"),e.fillStyle=l,e.fillRect(0,0,t,n)}let r=0,o=7,a=()=>(o=(o*9301+49297)%233280,o/233280);for(;r<t;){let l=30+a()*70,c=60+a()*200;e.fillStyle=i?"#27283a":"#070b12",e.fillRect(r,n-c,l,c);for(let h=n-c+10;h<n-10;h+=16)for(let f=r+6;f<r+l-8;f+=12)a()<(i?.35:.04)&&(e.fillStyle=a()<.5?"#ffd27a":"#9fc4ff",e.fillRect(f,h,5,7));r+=l+4}e.strokeStyle=i?"#3a3d52":"#1b2230",e.lineWidth=2;for(let l of[820,900,960]){e.beginPath(),e.moveTo(l,n-150),e.lineTo(l,n-60),e.stroke();for(let c=0;c<3;c++){let h=c*2.09+l;e.beginPath(),e.moveTo(l,n-150),e.lineTo(l+Math.cos(h)*34,n-150+Math.sin(h)*34),e.stroke()}}if(!i){e.strokeStyle="rgba(160,190,230,.22)",e.lineWidth=1;for(let l=0;l<260;l++){let c=a()*t,h=a()*n;e.beginPath(),e.moveTo(c,h),e.lineTo(c-6,h+22),e.stroke()}}})}function jh(i,e){let t=[],n={interactables:[]},s=(T,B,X,ne)=>{let ce={minX:T,maxX:B,minZ:X,maxZ:ne,enabled:!0};return t.push(ce),ce},r=(T,B,X,ne,ce,Ae,P,le=i)=>{let G=new gt(new Ai(T,B,X),ne);return G.position.set(ce,Ae,P),le.add(G),G},o=(T,B,X,ne,ce,Ae,P=i,le=24)=>{let G=new gt(new hs(T,T,B,le),X);return G.position.set(ne,ce,Ae),P.add(G),G},a=(T,B,X,ne,ce,Ae=i)=>{let P=new gt(new Bs(T,20,14),B);return P.position.set(X,ne,ce),Ae.add(P),P},l=(T,B,X,ne,ce,Ae,P="+z",le=i)=>{let G=new gt(new Ri(T,B),X);return G.position.set(ne,ce,Ae),G.rotation.y={"+z":0,"-z":Math.PI,"+x":Math.PI/2,"-x":-Math.PI/2}[P]??0,P==="+y"&&G.rotation.set(-Math.PI/2,0,0),le.add(G),G},c=(T,B={})=>new Ii({map:T,roughness:.6,...B}),h=(T,B=.6)=>c(T,{emissive:16777215,emissiveMap:T,emissiveIntensity:B}),f=(T,B=1)=>new Ii({color:1118481,emissive:new Xe(T),emissiveIntensity:B}),u=(T,B,X)=>(T.traverse(ne=>{ne.userData.id=B,ne.userData.label=X,ne.userData.root=T}),n.interactables.push(T),T),p=(T,B,X,ne)=>{let ce=new O(...T),Ae=new O(...B),P=new gt(new hs(X,X,ce.distanceTo(Ae),12),ne);return P.position.copy(ce).add(Ae).multiplyScalar(.5),P.quaternion.setFromUnitVectors(new O(0,1,0),Ae.clone().sub(ce).normalize()),i.add(P),P},g=T=>(T.raycast=()=>{},T),v=Pl("#747a80","#5c6166",2);v.repeat.set(6,5);let d={floor:We(16777215,{map:v,roughness:.85}),wall:We(14146526,{roughness:.95}),ceil:We(12172994,{roughness:1}),metal:We(10134701,{metalness:.6,roughness:.35}),dark:We(2830390,{roughness:.6}),white:We(15659507,{roughness:.5}),alu:We(13028562,{metalness:.7,roughness:.3}),pipeY:We(14725658,{metalness:.3,roughness:.4}),pipeB:We(3833808,{metalness:.3,roughness:.4}),ctrlWall:We(5596538,{roughness:.9}),wood:We(7032371,{roughness:.8}),red:We(13639712,{metalness:.4})};l(12,10,d.floor,0,0,0,"+y");let m=Pl("#3a4350","#2d353f",2);m.repeat.set(5,4);let A=We(16777215,{map:m,roughness:.8});l(10,8,A,0,0,-9,"+y"),l(12,10,d.ceil,0,Je,0,"+y").rotation.x=Math.PI/2,l(10,8,d.ceil,0,Je,-9,"+y").rotation.x=Math.PI/2,r(12.4,Je,.2,d.wall,0,Je/2,5.1),s(-6.2,6.2,5,5.2),r(.2,Je,10.4,d.wall,-6.1,Je/2,0),s(-6.2,-6,-5.2,5.2),r(.2,Je,10.4,d.wall,6.1,Je/2,0),s(6,6.2,-5.2,5.2),r(5.4,Je,.2,d.wall,-3.5,Je/2,-5.1),s(-6.2,-.8,-5.2,-5),r(5.4,Je,.2,d.wall,3.5,Je/2,-5.1),s(.8,6.2,-5.2,-5),r(1.6,Je-2.4,.2,d.wall,0,2.4+(Je-2.4)/2,-5.1),r(.2,Je,8,d.ctrlWall,-5.1,Je/2,-9.2),s(-5.2,-5,-13.2,-5.2),r(10.4,Je,.2,d.ctrlWall,0,Je/2,-13.1),s(-5.2,5.2,-13.2,-13),r(.2,Je,4.4,d.ctrlWall,5.1,Je/2,-11),s(5,5.2,-13.2,-8.8),r(.2,Je,2,d.ctrlWall,5.1,Je/2,-6.2),s(5,5.2,-7.2,-5.2),r(.2,Je-2.4,1.6,d.ctrlWall,5.1,2.4+(Je-2.4)/2,-8),l(3.8,1.6,A,7.1,0,-8,"+y"),l(3.8,1.6,d.ceil,7.1,Je,-8,"+y").rotation.x=Math.PI/2,r(3.8,Je,.2,d.ctrlWall,7.1,Je/2,-7.1),s(5.2,9.2,-7.2,-7),r(3.8,Je,.2,d.ctrlWall,7.1,Je/2,-8.9),s(5.2,9.2,-9,-8.8),n.outsideMat=new Sn({map:Ul(!1)}),n.dawnTex=Ul(!0),l(1.6,Je,n.outsideMat,9,Je/2,-8,"-x"),s(9,9.2,-8.8,-7.2),n.exitTrigger={minX:7.6,maxX:9,minZ:-8.8,maxZ:-7.2},r(11.9,.1,.02,d.dark,0,.05,4.99),r(.02,.1,9.9,d.dark,-5.99,.05,0),r(.02,.1,9.9,d.dark,5.99,.05,0),n.hemi=new Yr(14674175,9077368,.25),i.add(n.hemi),n.labLights=[];for(let[T,B]of[[-3,-2.2],[3,-2.2],[-3,2.5],[3,2.5]]){let X=f(16054271,.05);r(1.4,.06,.35,X,T,Je-.03,B);let ne=new ui(16054271,0,0,2);ne.position.set(T,Je-.25,B),i.add(ne),n.labLights.push({light:ne,mat:X})}n.ctrlLights=[];for(let[T,B]of[[-2.5,-9],[2.5,-9],[7,-8]]){let X=f(12375295,.05);r(1.2,.06,.3,X,T,Je-.03,B);let ne=new ui(16773596,0,0,2);ne.position.set(T,Je-.3,B),i.add(ne),n.ctrlLights.push({light:ne,mat:X})}n.emergency=[];for(let[T,B,X]of[[0,3.2,4.8],[-5.8,3.2,-4.6],[5.8,3.2,-4.6],[4.8,3.2,-12.8]]){r(.4,.1,.12,f(15266047,1.2),T,B,X);let ne=new ui(13623551,2.2,0,2);ne.position.set(T,B-.2,X+(X>0?-.3:.3)),i.add(ne),n.emergency.push(ne)}let x=kt([{t:"\u{1F3C3} EXIT",font:`bold 72px ${Fe.sans}`}],{w:256,h:96,bg:"#0c7a35",fg:"#fff"});l(.6,.22,h(x,1.1),4.98,2.7,-8,"-x");let y=c(Vh(),{roughness:.25,metalness:.3});for(let T of[-1.3,0,1.3]){let B=new rt;B.position.set(-4.95,1.05,T),B.rotation.z=-.5,r(1.75,.05,1.15,d.alu,0,0,0,B),l(1.68,1.08,y,0,.03,0,"+y",B),i.add(B),u(B,"pv","CPV test modules")}r(1.5,.06,3.9,d.metal,-4.95,.62,0);for(let T of[-1.9,1.9])for(let B of[-5.6,-4.3])r(.06,B<-5?1.35:.62,.06,d.metal,B,B<-5?.67:.31,T);s(-5.75,-4.15,-2,2),r(1.7,.18,4,d.dark,-4.95,3.05,0),r(.05,.4,.05,d.metal,-4.95,3.3,-1.8),r(.05,.4,.05,d.metal,-4.95,3.3,1.8);let L=f(16773832,.05),E=e.lamps,R=E>5?2:1,D=Math.ceil(E/R),S=0;for(let T=0;T<R;T++){let B=T===R-1?E-S:D;for(let X=0;X<B;X++){let ne=B===1?0:-1.5+3*X/(B-1),ce=R===1?-4.95:T===0?-5.35:-4.55;o(.2,.05,L,ce,2.94,ne),o(.23,.08,d.dark,ce,3,ne),S++}}n.sunLampMat=L,n.sunLight=new ui(16773324,0,0,2),n.sunLight.position.set(-4.95,2.6,0),i.add(n.sunLight);let b=new Sn({color:16773312,transparent:!0,opacity:0,depthWrite:!1,blending:Rr,side:un});g(r(1.6,1.8,3.8,b,-4.95,2,0)),n.sunCone=b,n.keypadTex=Mt(256,360,(T,B,X)=>to(T,B,X,!1));let I=new rt;r(.06,.5,.36,d.dark,-5.97,1.45,2.85,I),l(.34,.48,h(n.keypadTex,.35),-5.935,1.45,2.85,"+x",I),i.add(I),u(I,"sunsim","Sun-simulator keypad"),l(.8,.4,c(kt(["CPV TEST RIG",{t:"Sun simulator \xB7 2.4 suns",font:`30px ${Fe.sans}`}],{bg:"#1b3a6b",fg:"#fff"})),-5.99,2.35,0,"+x");let W=Mt(256,420,(T,B,X)=>{T.fillStyle="#e9ecef",T.fillRect(0,0,B,X),T.fillStyle="#2d7a3e",T.fillRect(0,0,B,50),T.fillStyle="#fff",T.font=`bold 26px ${Fe.sans}`,T.textAlign="center",T.fillText("Li-ion BESS",B/2,34);for(let ne=0;ne<6;ne++)T.fillStyle="#c5cad0",T.fillRect(20,70+ne*56,B-40,46),T.fillStyle="#8b9299",T.fillRect(30,80+ne*56,60,8),T.fillStyle="#3a3",T.fillRect(B-50,82+ne*56,10,10)});n.socLeds=[];for(let[T,B]of[[0,2.35],[1,3.75]]){let X=new rt;if(r(.7,2,1.2,d.white,5.6,1,B,X),l(1.1,1.8,c(W),5.245,1,B,"-x",X),T===0){r(.04,1.1,.14,d.dark,5.23,1.1,B+.48,X);for(let ne=0;ne<10;ne++)n.socLeds.push(r(.02,.07,.09,f(2236962,1),5.2,.63+ne*.105,B+.48,X))}i.add(X),u(X,"battery","Battery storage 10 kWh")}s(5.2,6,1.7,4.4),n.invLeds={};let z=[["inv_pv","INV-1","PV \xB7 HYBRID",.95],["inv_bat","INV-2","BATTERY",.15],["inv_fc","INV-3","FUEL CELL",-.65]];for(let[T,B,X,ne]of z){let ce=new rt;r(.22,.72,.56,d.white,5.88,1.6,ne,ce);let Ae=kt([{t:B,font:`bold 64px ${Fe.sans}`},{t:X,font:`bold 36px ${Fe.sans}`,color:"#1b5fa8"},{t:"~ / =",font:`46px ${Fe.mono}`,color:"#666"}],{w:256,h:320,bg:"#f5f6f7"});l(.5,.64,c(Ae),5.765,1.6,ne,"-x",ce),n.invLeds[T]=r(.03,.05,.05,f(1118481,1),5.75,1.88,ne+.18,ce),i.add(ce),u(ce,T,`${B} \xB7 ${X.toLowerCase()} inverter`),r(.08,3.1-1.96,.08,d.dark,5.93,1.96+(3.1-1.96)/2,ne-.2)}let $=new rt,te=We(14256698,{roughness:.95}),Y=We(11034911,{roughness:.95}),se=a(.13,te,0,.075,0,$);se.scale.set(.95,.6,1.6),a(.085,te,-.02,.1,.19,$).scale.set(1,.9,1);for(let T of[-1,1]){let B=new gt(new $r(.03,.06,8),Y);B.position.set(-.02+T*.045,.18,.2),B.rotation.z=-T*.25,$.add(B)}let he=new gt(new Ci(.14,.022,8,20,Math.PI*1.1),te);he.rotation.x=Math.PI/2,he.position.set(0,.03,-.02),$.add(he);let _e=new gt(new Ci(.06,.01,6,16),d.red);_e.position.set(-.02,.07,.15),_e.rotation.x=Math.PI/2.4,$.add(_e);let Ie=o(.018,.005,We(14725168,{metalness:.8,roughness:.3}),-.07,.05,.16,$);Ie.rotation.z=Math.PI/2,$.position.set(5.86,1.96,.15),i.add($),u($,"cat","A sleeping cat"),n.cat={group:$,body:se,tail:he};let Ne=new rt;r(.4,2,1.9,We(9081756,{metalness:.4,roughness:.5}),5.8,1.2,-2.9,Ne),r(.02,1.85,1.75,We(1777959),5.595,1.2,-2.9,Ne),n.busbars=[],[1.75,1.5,1.25].forEach((T,B)=>{n.busbars.push(r(.05,.07,1.4,f(3355443,.15),5.55,T,-2.95,Ne)),l(.16,.12,c(kt([`L${B+1}`],{w:128,h:96,bg:"#1b2127",fg:"#e6edf3",font:`bold 64px ${Fe.sans}`})),5.575,T,-2.1,"-x",Ne)}),r(.05,.07,1.4,We(3828432,{metalness:.5}),5.55,1,-2.95,Ne),l(.16,.12,c(kt(["N"],{w:128,h:96,bg:"#1b2127",fg:"#7aa0ff",font:`bold 64px ${Fe.sans}`})),5.575,1,-2.1,"-x",Ne),n.breakers=[];for(let T=0;T<3;T++)r(.1,.3,.16,d.white,5.55,.55,-3.3+T*.3,Ne),n.breakers.push(r(.06,.08,.06,We(2763306),5.49,.6,-3.3+T*.3,Ne));let tt=new gt(new Ri(1.75,1.85),new Ii({color:11193582,transparent:!0,opacity:.12,roughness:.05}));tt.position.set(5.5,1.2,-2.9),tt.rotation.y=-Math.PI/2,Ne.add(tt),i.add(Ne),u(Ne,"bus","Main bus panel"),l(1.2,.3,c(kt(["MAIN BUS  3~ 230/400 V"],{w:512,h:128,bg:"#ffd200",fg:"#111",font:`bold 48px ${Fe.sans}`})),5.99,2.45,-2.9,"-x"),l(.4,.4,c(Mt(256,256,T=>{T.fillStyle="#ffd200",T.beginPath(),T.moveTo(128,16),T.lineTo(244,230),T.lineTo(12,230),T.closePath(),T.fill(),T.strokeStyle="#111",T.lineWidth=12,T.stroke(),T.fillStyle="#111",T.font=`bold 130px ${Fe.sans}`,T.textAlign="center",T.fillText("\u26A1",128,200)}),{transparent:!0}),5.99,2.4,-1.7,"-x"),s(5.5,6,-3.9,-1.9),r(.35,.08,7.8,d.metal,5.75,3.12,.4),r(10.8,.08,.35,d.metal,.4,3.12,-4.75),r(.08,.9,.08,d.dark,5.93,2.65,-2.9),n.recorders={};let Z=(T,B,X,ne,ce=0)=>{let Ae=new rt;r(.14,.035,.07,We(1777444),0,0,0,Ae),r(.05,.01,.04,d.alu,.03,.022,0,Ae);let P=r(.012,.012,.012,f(16719904,1.5),-.05,.022,.02,Ae);Ae.position.set(B,X,ne),Ae.rotation.y=ce,i.add(Ae),u(Ae,T,"Voice recorder"),n.recorders[T]=P};Z("rec2",5.6,2.02,3.8,.4);let re=Mt(512,512,(T,B,X)=>{T.fillStyle="#f2f4f6",T.fillRect(0,0,B,X),T.fillStyle="#1b5fa8",T.fillRect(0,60,B,60),T.fillStyle="#fff",T.font=`bold 44px ${Fe.sans}`,T.textAlign="center",T.fillText("PEM ELECTROLYZER",B/2,105),T.fillStyle="#333",T.font=`32px ${Fe.sans}`,T.fillText("3 kW \xB7 H\u2082O \u2192 H\u2082 + \xBD O\u2082 \xB7 30 bar",B/2,170);for(let ne=0;ne<18;ne++)T.fillStyle=ne%2?"#9aa4ad":"#6f7a84",T.fillRect(70+ne*20,220,16,180);T.fillStyle="#081a0e",T.fillRect(140,420,232,56)}),be=new rt;r(1.6,1.6,1.1,d.white,-4.7,.8,-4.2,be),l(1.5,1.5,c(re),-4.7,.8,-3.645,"+z",be),n.elzGlow=r(1.5,.05,.02,f(3842303,.05),-4.7,1.57,-3.64,be),o(.28,.7,We(13625599,{transparent:!0,opacity:.7,roughness:.1}),-5.15,1.95,-4.3,be),i.add(be),u(be,"electrolyzer","PEM electrolyzer"),s(-5.55,-3.85,-4.8,-3.6),Z("rec3",-4.3,1.62,-3.95,-.3);let ae=new rt;o(.24,1.3,d.white,-2.9,.75,-4.35,ae);let De=new gt(new Bs(.24,24,12,0,Math.PI*2,0,Math.PI/2),d.white);De.position.set(-2.9,1.4,-4.35),ae.add(De),l(.3,.3,c(kt([{t:"H\u2082",font:`bold 120px ${Fe.sans}`,color:"#c21"},{t:"30 bar \xB7 90 L",font:`36px ${Fe.sans}`}],{w:256,h:256,bg:"#ffffff"})),-2.9,1,-4.105,"+z",ae),n.valve=new gt(new Ci(.11,.022,8,20),d.red),n.valve.position.set(-2.9,.45,-3.98),n.valve.visible=!1,ae.add(n.valve),o(.02,.14,d.metal,-2.9,.45,-4.05,ae).rotation.x=Math.PI/2,n.valveTag=l(.12,.08,c(kt(["NO WHEEL","\u2014 M.V."],{w:128,h:96,bg:"#fff6c8",fg:"#b3261e",font:`bold 22px ${Fe.sans}`})),-2.78,.36,-3.975,"+z",ae),o(.05,1,We(13428479,{transparent:!0,opacity:.3}),-2.52,.85,-4.15,ae),n.h2Bar=o(.038,.96,f(7327999,.8),-2.52,.37,-4.15,ae),n.h2Bar.geometry.translate(0,.48,0),n.h2Bar.scale.y=.001,i.add(ae),u(ae,"h2tank","H\u2082 tank & valve"),s(-3.2,-2.4,-4.7,-3.9),p([-3.9,1.4,-4.35],[-3.14,1.4,-4.35],.035,d.pipeY),p([-2.9,1.64,-4.35],[-2.9,2.75,-4.35],.035,d.pipeY),p([-2.9,2.75,-4.35],[-2.9,2.75,-4.85],.035,d.pipeY),p([-2.9,2.75,-4.85],[3.1,2.75,-4.85],.035,d.pipeY),p([3.1,2.75,-4.85],[3.1,1.3,-4.85],.035,d.pipeY),p([-5.15,2.3,-4.3],[-5.15,3.1,-4.3],.03,d.pipeB);let Oe=Mt(512,512,(T,B,X)=>{T.fillStyle="#5b6570",T.fillRect(0,0,B,X),T.fillStyle="#2e8b57",T.fillRect(0,40,B,70),T.fillStyle="#fff",T.font=`bold 46px ${Fe.sans}`,T.textAlign="center",T.fillText("PEM FUEL CELL",B/2,92),T.fillStyle="#e6edf3",T.font=`32px ${Fe.sans}`,T.fillText("3.4 kW \xB7 H\u2082 + \xBD O\u2082 \u2192 H\u2082O",B/2,160),T.strokeStyle="#333",T.lineWidth=6,T.beginPath(),T.arc(B/2,330,120,0,Math.PI*2),T.stroke();for(let ne=-100;ne<=100;ne+=20)T.beginPath(),T.moveTo(B/2-Math.sqrt(120*120-ne*ne),330+ne),T.lineTo(B/2+Math.sqrt(120*120-ne*ne),330+ne),T.stroke()}),ke=new rt;r(1.3,1.3,.9,We(5989744,{metalness:.3}),3.1,.65,-4.3,ke),l(1.25,1.25,c(Oe),3.1,.65,-3.845,"+z",ke),n.fcGlow=r(1.2,.05,.02,f(4116346,.05),3.1,1.27,-3.84,ke),i.add(ke),u(ke,"fuelcell","PEM fuel cell"),s(2.4,3.8,-4.8,-3.8);let at=Mt(256,384,(T,B,X)=>{T.fillStyle="#7d8790",T.fillRect(0,0,B,X),T.strokeStyle="#5d666e",T.lineWidth=4,T.strokeRect(16,16,B-32,X-32),T.fillStyle="#1b2530",T.fillRect(70,50,116,90),T.fillStyle="#ffd200",T.fillRect(16,250,B-32,38),T.fillStyle="#111",T.font=`bold 20px ${Fe.sans}`,T.textAlign="center",T.fillText("CONTROL ROOM",B/2,276)});n.door=r(1.62,2.4,.08,[d.metal,d.metal,d.metal,d.metal,c(at,{metalness:.4}),c(at,{metalness:.4})],0,1.2,-4.93),u(n.door,"door","Booth door (motor drive)"),n.doorCollider=s(-.85,.85,-5.2,-4.85),n.doorLed=r(.5,.06,.04,f(16719904,1.5),0,2.55,-4.98),n.doorScreenTex=Mt(256,320);let qe=new rt;r(.42,.52,.05,d.dark,-1.3,1.45,-4.98,qe),l(.36,.45,h(n.doorScreenTex),-1.3,1.45,-4.95,"+z",qe),i.add(qe),u(qe,"door","Door drive controller");for(let T of[-4.7,-5.45]){let B=Gh();B.repeat.set(3,1),l(1.6,.25,c(B),0,.005,T,"+y")}let _t=Mt(1024,512,(T,B,X)=>{T.fillStyle="#f7f7f2",T.fillRect(0,0,B,X);for(let ce=0;ce<14;ce++)T.fillStyle="rgba(120,130,160,.07)",T.beginPath(),T.ellipse(80+Math.random()*860,60+Math.random()*400,120,22,Math.random()-.5,0,Math.PI*2),T.fill();let ne='"Segoe Print", "Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive';Hs(e).forEach(([ce,Ae,P],le)=>{T.fillStyle=Ae,T.font=`${P||"28px"} ${ne}`,T.fillText(ce,40,64+le*58)})}),N=new rt;r(2.7,1.4,.05,d.alu,-1.8,1.75,4.97,N),l(2.6,1.3,c(_t,{roughness:.3}),-1.8,1.75,4.94,"-z",N),r(2,.04,.08,d.alu,-1.8,1.03,4.93,N),i.add(N),u(N,"whiteboard","Whiteboard");let It=new rt,Ze=kt([{t:"SOLAR TEST LABORATORY",font:"bold 38px Georgia, serif"},{t:`EST. ${e.year}`,font:"bold 64px Georgia, serif"},{t:'"Power to the people."',font:"italic 30px Georgia, serif"}],{w:512,h:300,bg:"#b8923a",fg:"#3b2a08",border:"#8a6a22"});r(.74,.44,.03,We(9071138,{metalness:.7}),2.6,1.95,4.98,It),l(.7,.41,c(Ze,{metalness:.5,roughness:.35}),2.6,1.95,4.96,"-z",It),i.add(It),u(It,"plaque","Brass plaque"),r(2.4,.06,.8,d.wood,2.6,.9,4.55);for(let[T,B]of[[1.5,4.25],[3.7,4.25],[1.5,4.85],[3.7,4.85]])r(.06,.9,.06,d.metal,T,.45,B);r(.45,.3,.35,d.dark,2,1.08,4.6),l(.22,.16,f(2817898,.6),1.95,1.1,4.42,"-z"),r(.12,.2,.05,We(15909376),3.45,1.03,4.55),s(1.35,3.85,4.1,5),r(.72,.2,.62,We(5980976),2.4,.76,4.55),n.drawer=new rt,r(.66,.16,.56,We(8018494),0,0,0,n.drawer),r(.7,.18,.02,We(9201736),0,0,-.325,n.drawer),r(.16,.025,.03,d.alu,0,.045,-.345,n.drawer);let Ye=Mt(160,48,(T,B,X)=>{T.fillStyle="#222",T.fillRect(0,0,B,X),T.fillStyle="#ddd",T.font=`bold 34px ${Fe.mono}`,T.textAlign="center",T.fillText("0 0 0 0",B/2,36)});n.drawerLockTex=Ye,l(.16,.05,h(Ye,.3),0,-.03,-.337,"-z",n.drawer),n.drawerWheel=new gt(new Ci(.1,.02,8,20),d.red),n.drawerWheel.rotation.x=Math.PI/2,n.drawerWheel.position.set(.05,0,.05),n.drawer.add(n.drawerWheel),n.drawer.position.set(2.4,.76,4.55),i.add(n.drawer),u(n.drawer,"drawer","Bench drawer (combination lock)");let Me=new rt,ht=o(.03,.2,We(15259568),0,0,0,Me);ht.rotation.z=Math.PI/2,[-.06,-.025,.01].forEach((T,B)=>{let X=o(.032,.014,We(ps[e.bands[B]]),T,0,0,Me);X.rotation.z=Math.PI/2});let Pe=o(.032,.014,We(13148224,{metalness:.8}),.065,0,0,Me);Pe.rotation.z=Math.PI/2;for(let T of[-1,1]){let B=o(.004,.1,d.alu,T*.15,0,0,Me);B.rotation.z=Math.PI/2}l(.16,.08,c(kt(["DRAWER =","MY VALUE IN \u03A9"],{w:256,h:128,bg:"#fff6c8",fg:"#1b3f8f",font:`bold 30px ${Fe.sans}`})),0,-.03,-.06,"-z",Me).rotation.x=-.4,Me.position.set(3.05,.97,4.35),Me.rotation.y=.15,i.add(Me),u(Me,"resistor","Resistor with a sticky note"),Z("rec1",1.55,.95,4.35,.2);let w=Mt(512,640,(T,B,X)=>{T.fillStyle="#fbfaf5",T.fillRect(0,0,B,X),T.fillStyle="#111",T.font=`bold 34px ${Fe.sans}`,T.textAlign="center",T.fillText("RESISTOR COLOUR CODE",B/2,48),T.font=`20px ${Fe.sans}`,T.fillText("band 1 \xB7 band 2 \xB7 multiplier \xD710\u207F \xB7 tolerance",B/2,80),["black","brown","red","orange","yellow","green","blue","violet","grey","white"].forEach((ne,ce)=>{let Ae=110+ce*50;T.fillStyle=ps[ce],T.fillRect(40,Ae,90,38),T.strokeStyle="#999",T.strokeRect(40,Ae,90,38),T.fillStyle="#111",T.textAlign="left",T.font=`bold 26px ${Fe.sans}`,T.fillText(`${ne}`,150,Ae+28),T.fillText(`${ce}`,300,Ae+28),T.fillText(`\xD710${"\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079"[ce]}`,370,Ae+28)})}),_=new rt;l(.64,.8,c(w),4.6,1.85,4.985,"-z",_),i.add(_),u(_,"colorcode","Colour-code poster"),r(2.4,.06,.9,d.dark,0,.76,-11.9);for(let T of[-1.1,1.1])r(.06,.76,.8,d.dark,T,.38,-11.9);s(-1.25,1.25,-12.4,-11.4),n.pcScreenTex=Mt(512,320);let k=new rt;r(1,.6,.05,d.dark,0,1.22,-12.15,k),l(.94,.54,new Sn({map:n.pcScreenTex}),0,1.22,-12.12,"+z",k),r(.08,.2,.08,d.dark,0,.88,-12.15,k),r(.6,.03,.2,We(1777444),0,.8,-11.7,k),r(.45,.45,.2,d.dark,.85,1.02,-12.1,k),i.add(k),u(k,"pc","Control PC");let j=new ui(6160271,1.8,0,2);j.position.set(0,1.3,-11.7),i.add(j),r(.5,.08,.5,We(1777444),0,.48,-11),r(.5,.6,.06,We(1777444),0,.82,-10.73),o(.04,.44,d.metal,0,.22,-11),s(-.28,.28,-11.28,-10.7),Z("rec4",.55,.81,-11.55,-.3);let Q=new rt;r(.5,.02,.3,We(1927994,{roughness:.5}),0,0,0,Q);let K=kt([{t:"FW-BOARD  A   B   C   D",font:`bold 30px ${Fe.mono}`}],{w:512,h:64,bg:"#1d6b3a",fg:"#e8f5e0"});l(.46,.06,c(K),0,.011,.1,"+y",Q),n.boardToggles=[];for(let T=0;T<4;T++){let B=-.02+T*.06;r(.035,.02,.04,We(2236962),B,.02,.03,Q);let X=r(.01,.04,.01,d.alu,B,.045,.03,Q);X.rotation.x=.5,n.boardToggles.push(X)}n.boardLed=a(.014,f(3342336,1),.2,.02,.05,Q),n.boardSegTex=Mt(128,64,(T,B,X)=>Fl(T,B,X,"",!1)),r(.16,.07,.02,We(1118481),-.14,.04,-.1,Q),l(.14,.06,h(n.boardSegTex,1),-.14,.04,-.089,"+z",Q),Q.position.set(-.7,.8,-11.72),i.add(Q),u(Q,"board","FW-BOARD logic board"),n.circuitCanvas=document.createElement("canvas"),n.circuitCanvas.width=900,n.circuitCanvas.height=460,Xh(n.circuitCanvas.getContext("2d"),900,460,e.circuitDef);let Se=new cs(n.circuitCanvas);Se.colorSpace=Ft;let de=new rt;l(1.3,.665,c(Se),1.9,1.9,-12.985,"+z",de),i.add(de),u(de,"circuit","Circuit poster (FW-BOARD)"),r(.8,2,.9,We(1119256),3.9,1,-12.4),n.rackLeds=[];for(let T=0;T<12;T++)n.rackLeds.push(r(.03,.03,.01,f(T%3?2817898:16752672,1),3.65+T%2*.1,.3+T*.1,-11.94));let pe=new rt;r(.78,.2,.02,We(1777959),3.9,1.72,-11.945,pe),n.diagLeds=[];for(let T=0;T<8;T++)n.diagLeds.push(r(.045,.045,.015,f(2228224,1),3.585+T*.09,1.7,-11.93,pe));l(.78,.07,c(kt([{t:"DIAG   \u25C0 MSB  \xB7  lit = 1",font:`bold 34px ${Fe.mono}`}],{w:512,h:48,bg:"#1b2127",fg:"#e6edf3"})),3.9,1.86,-11.93,"+z",pe),i.add(pe),u(pe,"rack","Server rack \xB7 DIAG LEDs"),s(3.45,4.35,-12.9,-11.9),n.wallScreenTex=Mt(768,400),l(3,1.56,new Sn({map:n.wallScreenTex}),-4.98,1.9,-9.2,"+x"),r(.04,1.66,3.1,d.dark,-5,1.9,-9.2),n.windowMat=new Sn({map:Ul(!1)}),l(3.4,1.3,n.windowMat,-2.3,2,-12.98,"+z"),r(3.5,.08,.1,d.alu,-2.3,1.33,-12.95),r(3.5,.08,.1,d.alu,-2.3,2.67,-12.95),l(1.2,.3,c(kt(["CONTROL ROOM"],{w:512,h:128,bg:"#1b2530",fg:"#ffd24a",font:`bold 60px ${Fe.sans}`})),0,2.9,-5.21,"-z");let ze=new rt;r(.35,1.9,1.3,We(9081756,{metalness:.4,roughness:.5}),4.82,1.05,-10.6,ze),n.syncTex=Mt(512,512),l(.5,.5,h(n.syncTex,.9),4.64,1.45,-10.6,"-x",ze),n.syncLamps=[-10.95,-10.6,-10.25].map(T=>a(.045,f(5579264,.2),4.62,1.86,T,ze)),n.syncHandle=r(.06,.25,.08,d.red,4.6,.85,-10.6,ze),l(1,.25,c(kt(["GRID TIE \xB7 Q0 \xB7 SYNC"],{w:512,h:128,bg:"#ffd200",fg:"#111",font:`bold 50px ${Fe.sans}`})),4.64,2.15,-10.6,"-x",ze),i.add(ze),u(ze,"sync","Grid tie panel (Q0)"),s(4.6,5.05,-11.3,-9.9);let ie=Mt(320,400,(T,B,X)=>{T.fillStyle="#f7f3e3",T.fillRect(0,0,B,X),T.fillStyle="#1b3f8f",T.font=`bold 22px ${Fe.sans}`,T.fillText("SYNC CHECKLIST",16,34),T.font=`17px ${Fe.sans}`,["1. V island = V grid","2. f island a hair ABOVE","3. phase ro\u2592\u2592\u2592n: lamps","    dark TOGETHER","4. close at 12 o'clock","","\u2014 M.V."].forEach((ne,ce)=>T.fillText(ne,16,80+ce*36)),T.fillStyle="#e8e0c8",T.beginPath(),T.moveTo(B,X-60),T.lineTo(B-70,X),T.lineTo(B,X),T.fill()}),ye=new rt;return l(.26,.32,c(ie),4.985,1.55,-11.7,"-x",ye),i.add(ye),u(ye,"checklist","Sync checklist (pinned)"),n.exitDoor=r(.08,2.4,1.62,[c(at,{metalness:.4}),c(at,{metalness:.4}),d.metal,d.metal,d.metal,d.metal],5.07,1.2,-8),u(n.exitDoor,"exit","Exit door"),n.exitCollider=s(4.95,5.25,-8.85,-7.15),n.exitLed=r(.04,.06,.5,f(16719904,1.5),4.98,2.52,-8),{colliders:t,refs:n}}var Et=["L1","L2","L3"],Qh={standard:["#ff5a4a","#ffd23f","#4aa8ff"],colorblind:["#e69f00","#56b4e9","#cc79a7"]},Xn=[...Qh.standard];function Ol(i){Qh[i].forEach((e,t)=>{Xn[t]=e})}var xe={TL:360,PV_DC:5.4,INV_EFF:.97,BAT_KWH:10,BAT_CH:2,BAT_DIS:3.5,BAT_EFF:.95,BAT_MIN:.25,ELZ_P:3,ELZ_KWH_KG:55,FC_P:3.4,FC_KWH_KG:18,FC_RAMP:3,FC_START:.3,H2_KG:.22,H2_BAR:30,AUX:.2,DOOR_P:3,DOOR_T:5},no=xe.TL/3600,zg=xe.PV_DC*xe.INV_EFF,zt=i=>i.toFixed(2),io=class{constructor(e){this.puzzle=e,this.s={t:0,sun:{unlocked:!1,on:!1,pin:""},inv:{pv:{on:!1,ph:-1},bat:{on:!1,ph:-1,mode:"idle"},fc:{on:!1,ph:-1}},bat:{soc:.08},elz:{on:!1,ph:-1},h2:{level:0,valve:!1,wheel:!1},fc:{running:!1,rt:0},trip:[!1,!1,!1],door:{state:"locked",t:0},stats:{trips:0}},this.version=0,this.events=[],this.f=this.compute()}emit(e,t="info",n){this.events.push({msg:e,kind:t,sfx:n}),this.version++}compute(){let e=this.s,t=[0,0,0],n=[0,0,0],s=[[],[],[]],r={cap:t,load:n,head:[0,0,0],live:[!1,!1,!1],pv:0,bat:0,fc:0,elz:0,door:0,pvAvail:0,fcAvail:0},o=h=>h>=0&&!e.trip[h];r.pvAvail=e.sun.on?zg*(.998+.002*Math.sin(e.t*.9)):0,r.fcAvail=e.fc.running&&e.fc.rt>=xe.FC_RAMP?xe.FC_P:0;let a=e.inv.pv,l=e.inv.bat,c=e.inv.fc;if(a.on&&o(a.ph)&&r.pvAvail>0&&s[a.ph].push(["pv",r.pvAvail]),e.grid)for(let h=0;h<3;h++)s[h].push(["grid",1e3]);l.on&&l.mode==="discharge"&&o(l.ph)&&e.bat.soc>xe.BAT_MIN&&s[l.ph].push(["bat",xe.BAT_DIS]),c.on&&o(c.ph)&&r.fcAvail>0&&s[c.ph].push(["fc",r.fcAvail]);for(let h=0;h<3;h++)t[h]=s[h].reduce((f,[,u])=>f+u,0),r.live[h]=t[h]>0;for(let h=0;h<3;h++)r.live[h]&&(n[h]+=xe.AUX);if(e.elz.on&&o(e.elz.ph)&&r.live[e.elz.ph]&&e.h2.level<1&&(n[e.elz.ph]+=xe.ELZ_P,r.elz=xe.ELZ_P),l.on&&l.mode==="charge"&&o(l.ph)&&r.live[l.ph]&&e.bat.soc<1&&(n[l.ph]+=xe.BAT_CH,r.bat=-xe.BAT_CH),e.door.state==="opening"){for(let h=0;h<3;h++)n[h]+=xe.DOOR_P;r.door=xe.DOOR_P}for(let h=0;h<3;h++){let f=n[h];for(let[u,p]of s[h]){let g=Math.min(p,f);f-=g,u==="pv"?r.pv+=g:u==="bat"?r.bat+=g:u==="fc"&&(r.fc+=g)}r.head[h]=t[h]-n[h]}return r}tick(e){let t=this.s;t.t+=e,t.fc.running&&(t.fc.rt+=e);let n=this.compute();for(let s=0;s<3;s++)n.load[s]>n.cap[s]+1e-6&&(n.cap[s]>0||n.door)&&(t.trip[s]=!0,t.stats.trips++,this.emit(n.cap[s]>0?`\u26A0 ${Et[s]}: demand ${zt(n.load[s])} kW > ${zt(n.cap[s])} kW available \u2014 inverter current limit, voltage collapse, under-voltage relay TRIPPED. Reset at the main bus panel.`:`\u26A0 ${Et[s]} has no voltage \u2014 the door motor is single-phasing and hums. Drive stopped.`,"bad","clack"));if(t.trip.some(Boolean)&&(t.door.state==="opening"&&(t.door.state="locked",t.door.t=0,this.emit("Door drive stalled \u2014 the bolt re-engages.","bad")),n=this.compute()),n.bat<0&&(t.bat.soc=Math.min(1,t.bat.soc-n.bat*xe.BAT_EFF*no*e/xe.BAT_KWH)),n.bat>0&&(t.bat.soc=Math.max(0,t.bat.soc-n.bat/xe.BAT_EFF*no*e/xe.BAT_KWH),t.bat.soc<=xe.BAT_MIN&&this.emit("Battery BMS: SOC reached 25 % \u2014 discharge blocked.","bad")),n.elz>0){let s=t.h2.level;t.h2.level=Math.min(1,t.h2.level+xe.ELZ_P/xe.ELZ_KWH_KG*no*e/xe.H2_KG),s<xe.FC_START&&t.h2.level>=xe.FC_START&&this.emit("H\u2082 tank above 30 % \u2014 enough to start the fuel cell.","good"),t.h2.level>=1&&this.emit("H\u2082 tank full (30 bar) \u2014 electrolyzer idles.")}n.fc>0&&(t.h2.level=Math.max(0,t.h2.level-n.fc/xe.FC_KWH_KG*no*e/xe.H2_KG),t.h2.level<=0&&(t.fc.running=!1,t.fc.rt=0,this.emit("Fuel cell shut down: H\u2082 tank empty.","bad"))),t.fc.running&&!t.h2.valve&&(t.fc.running=!1,t.fc.rt=0,this.emit("Fuel cell shut down: H\u2082 valve closed.","bad")),t.door.state==="opening"&&(t.door.t+=e,t.door.t>=xe.DOOR_T&&(t.door.state="open",this.emit("\u{1F513} Door open!","good","thunk"))),this.f=n}doorReady(){return this.f.head.every(e=>e>=xe.DOOR_P-1e-6)}hintTopic(){let e=this.s,t=this.f,n=this.puzzle,s=e.inv.pv.ph>=0?Et[e.inv.pv.ph]:"the PV phase";if(e.trip.some(Boolean))return{id:"trip",tiers:["Something clicked off. The main bus panel will tell you what.","A phase tripped because its demand exceeded what the inverters on that phase can deliver.","Remove load from the tripped phase (or add a source), then press RESET at the main bus panel on the right wall."]};if(!e.sun.unlocked)return{id:"pin",tiers:["The test rig on the left wall is dark. Something must control those lamps.","The sun-simulator keypad wants a 4-digit year. Marco's notes mention when the lab opened \u2014 look for something engraved.",`PIN ${n.year} \u2014 it is on the brass plaque above the workbench.`]};if(!e.sun.on)return{id:"sun",tiers:["The keypad is unlocked now.","Switch the lamp array on.","Keypad \u2192 Lamp array ON."]};if(t.pvAvail>0&&!(e.inv.pv.on&&e.inv.pv.ph>=0))return{id:"inv1",tiers:["Light on the modules makes DC. The lab bus is AC.","Something has to convert the PV power \u2014 look at the inverters on the right wall.","INV-1: power ON, output phase L1."]};let r=e.bat.soc<.5,o=e.h2.level<.6,a=e.inv.bat.on&&e.inv.bat.mode==="charge"&&e.inv.bat.ph===e.inv.pv.ph,l=e.elz.on&&e.elz.ph===e.inv.pv.ph;return r&&!a||o&&!l?{id:"store",tiers:["The door motor needs all three phases. One PV inverter can only energize one of them \u2014 and the other two sources are empty.","Loads only run from a source on the SAME phase. Use PV power to fill the battery and the H\u2082 tank.",`INV-2: ON, CHARGE, phase ${s}. Electrolyzer: ON, phase ${s}. 2 + 3 + 0.2 kW aux = 5.2 kW \u2264 5.24 kW PV. Fill battery \u2265 50 % and H\u2082 \u2265 60 %.`]}:r||o?{id:"wait",tiers:["Storage takes time \u2014 even at \xD7360 time-lapse.",`Battery ${(e.bat.soc*100).toFixed(0)} % (aim \u2265 50 %), H\u2082 ${(e.h2.level*100).toFixed(0)} % (aim \u2265 60 %). The door drive drains ~17 % battery and ~40 % H\u2082 per opening.`,"Meanwhile, solve the valve problem: the H\u2082 tank has no handwheel."]}:e.h2.wheel?!e.fc.running||!(e.inv.fc.on&&e.inv.fc.ph>=0)?{id:"fc",tiers:["Hydrogen in a tank does not make electricity by itself.","Open the H\u2082 valve, start the fuel cell stack, and give its inverter (INV-3) a phase.","H\u2082 tank: valve OPEN. Fuel cell: START. INV-3: ON, a phase not used by PV."]}:this.doorReady()?{id:"open",tiers:["All three phases have enough headroom.","The door controller next to the door has an OPEN button.","Door controller \u2192 OPEN, and keep the sources running for 5 s."]}:{id:"split",tiers:["Three sources, three phases. The door motor draws 3 kW on EVERY phase at once.",'Give each source its own phase and switch the loads off. Check "headroom" on the bus panel or the door controller.',"Electrolyzer OFF, INV-2 \u2192 DISCHARGE. PV on L1, battery on L2, fuel cell on L3. Every phase then has \u2265 3 kW headroom."]}:{id:"wheel",tiers:["The fuel cell needs hydrogen from the tank \u2014 but can you actually open the valve?",'The handwheel was removed ("M.V."). Marco keeps things in the workbench drawer \u2014 it has a 4-digit lock.',`The resistor on the bench: ${n.bands.map((c,h)=>h<2?["black","brown","red","orange","yellow","green","blue","violet","grey","white"][c]:"\xD710^"+c).join(", ")} \u2192 ${n.drawerCode} \u03A9. Drawer code ${n.drawerCode}. Then use the handwheel on the tank.`]}}objective(){let e=this.s;return e.door.state==="open"?null:e.door.state==="opening"?`Door drive running\u2026 ${(xe.DOOR_T-e.door.t).toFixed(1)} s`:"Get out of the booth. The door is driven by a <b>3-phase motor</b> \u2014 and the lab is dark."}panel(e){let t=this.s,n=this.f,s=(h,f)=>`<div class="seg"><button class="btn ${f?"on":""}" data-act="${h}:1">ON</button><button class="btn ${f?"":"danger"}" data-act="${h}:0">OFF</button></div>`,r=(h,f)=>`<div class="seg">${Et.map((u,p)=>`<button class="btn ${f===p?"on":""}" data-act="${h}:${p}" style="${f===p?"":`border-color:${Xn[p]}88`}">${u}</button>`).join("")}</div>`,o=(h,f=!1)=>`<div class="lcd ${f?"red":""}">${h}</div>`,a='<p class="note">\u23E9 Lab time-lapse \xD7360 \u2014 10 s \u2248 1 h.</p>',l={};l.sunsim={title:"Sun Simulator \xB7 Control Keypad",controls:()=>t.sun.unlocked?`<div class="ctl"><label>Lamp array</label>${s("sun",t.sun.on)}</div>
           <p class="note">${this.puzzle.lamps} xenon arc lamps giving 2.4 suns (2400 W/m\xB2) on the CPV test rig. Fed from the building's emergency generator ("temporarily" \u2014 M.V.).</p>`:`<p class="note">SYSTEM LOCKED \u2014 enter 4-digit PIN. (Number keys work too.)</p>
           <div class="keypad">${[1,2,3,4,5,6,7,8,9].map(h=>`<button class="btn" data-act="pin:${h}">${h}</button>`).join("")}
           <button class="btn warn" data-act="pin:C">C</button><button class="btn" data-act="pin:0">0</button><button class="btn on" data-act="pin:OK">OK</button></div>`,live:()=>t.sun.unlocked?o(`LAMPS ${t.sun.on?"ON ":"OFF"}   IRRADIANCE ${t.sun.on?"2400":"   0"} W/m\xB2`):o(`PIN: ${(t.sun.pin+"____").slice(0,4).split("").join(" ")}`,!0)},l.pv={title:"PV Test Rig \xB7 CPV modules",controls:()=>`<div class="kv"><span>Modules</span><span>3 \xD7 2 m\xB2 concentrator PV, triple-junction cells (\u03B7 \u2248 38 %)</span>
        <span>Output at 2.4 suns</span><span>${xe.PV_DC} kW DC</span><span>Connected to</span><span>INV-1 (hybrid inverter)</span></div>
        <p class="note">6 m\xB2 \xD7 2400 W/m\xB2 \xD7 0.38 \u2248 5.4 kW. The modules make DC; only an inverter can put it on the 230 V AC bus.</p>`,live:()=>o(`IRRADIANCE  ${t.sun.on?"2400":"0"} W/m\xB2
DC POWER    ${zt(n.pvAvail/xe.INV_EFF)} kW available
AC FEED-IN  ${zt(n.pv)} kW (as much as the phase consumes)`)};let c=(h,f,u,p,g="")=>{let v="OFF";return p.on&&(p.ph<0?v="NO PHASE SELECTED":t.trip[p.ph]?v=`FAULT: ${Et[p.ph]} UNDER-VOLTAGE TRIP`:v=f>0?`FORMING ${Et[p.ph]} \xB7 230 V 50 Hz`:"STANDBY (no DC source)"),o(`${h}
STATUS     ${v}
AVAILABLE  ${zt(f)} kW
DELIVERING ${zt(u)} kW${g}`,p.on&&p.ph>=0&&t.trip[p.ph])};return l.inv_pv={title:"INV-1 \xB7 Hybrid PV Inverter (6 kVA, \u03B7 97 %)",controls:()=>`<div class="ctl"><label>Power</label>${s("invpv",t.inv.pv.on)}</div>
        <div class="ctl"><label>Output phase</label>${r("invpvph",t.inv.pv.ph)}</div>
        <p class="note">Backup (EPS) mode: grid-forming on one phase. It throttles PV down to exactly what that phase consumes.</p>`,live:()=>c("INV-1 PV",t.inv.pv.on?n.pvAvail:0,n.pv,t.inv.pv)},l.inv_bat={title:"INV-2 \xB7 Battery Inverter (bidirectional)",controls:()=>`<div class="ctl"><label>Power</label>${s("invbat",t.inv.bat.on)}</div>
        <div class="ctl"><label>Mode</label><div class="seg">${["idle","charge","discharge"].map(h=>`<button class="btn ${t.inv.bat.mode===h?"on":""}" data-act="batmode:${h}">${h.toUpperCase()}</button>`).join("")}</div></div>
        <div class="ctl"><label>AC phase</label>${r("invbatph",t.inv.bat.ph)}</div>
        <p class="note">CHARGE draws ${xe.BAT_CH} kW from its phase \u2014 something else must be feeding that phase.<br>DISCHARGE forms the phase and supplies up to ${xe.BAT_DIS} kW while SOC &gt; 25 %.</p>${a}`,live:()=>c("INV-2 BATTERY",t.inv.bat.on&&t.inv.bat.mode==="discharge"&&t.bat.soc>xe.BAT_MIN?xe.BAT_DIS:0,n.bat,t.inv.bat,`
SOC        ${(t.bat.soc*100).toFixed(1)} %`+(t.inv.bat.on&&t.inv.bat.mode==="discharge"&&t.bat.soc<=xe.BAT_MIN?`
BMS        DISCHARGE BLOCKED (SOC < 25 %)`:""))},l.inv_fc={title:"INV-3 \xB7 Fuel Cell Inverter",controls:()=>`<div class="ctl"><label>Power</label>${s("invfc",t.inv.fc.on)}</div>
        <div class="ctl"><label>Output phase</label>${r("invfcph",t.inv.fc.ph)}</div>
        <p class="note">Converts the fuel cell's DC stack voltage to AC. The stack itself must be running.</p>`,live:()=>c("INV-3 FUEL CELL",t.inv.fc.on?n.fcAvail:0,n.fc,t.inv.fc)},l.battery={title:"Battery Storage \xB7 Li-ion (LFP) 10 kWh",controls:()=>`<div class="kv"><span>Capacity</span><span>10 kWh, 95 % one-way efficiency</span><span>BMS discharge limit</span><span>SOC \u2265 25 %</span>
        <span>Controlled by</span><span>INV-2 (right wall)</span></div>${a}`,live:()=>{let h=t.bat.soc*100,f=h<25?"#ff5a4a":h<50?"#ffc44a":"#3ecf7a";return`<div style="font:28px Consolas,monospace;margin:4px 0">${h.toFixed(1)} % <span style="font-size:15px;color:#8ea3b8">= ${(t.bat.soc*xe.BAT_KWH).toFixed(2)} kWh</span></div><div class="bar" style="height:16px"><i style="width:${h}%;background:${f}"></i><span class="mark" style="left:25%"></span><span class="mark" style="left:50%;opacity:.35"></span></div>`+o(`STATE  ${n.bat>0?"DISCHARGING":n.bat<0?"CHARGING":"IDLE"}
POWER  ${zt(n.bat)} kW (AC)`)}},l.electrolyzer={title:"PEM Electrolyzer \xB7 3 kW",controls:()=>`<div class="ctl"><label>Power</label>${s("elz",t.elz.on)}</div>
        <div class="ctl"><label>Supply phase</label>${r("elzph",t.elz.ph)}</div>
        <p class="note">Splits water into H\u2082 and O\u2082: 55 kWh per kg of H\u2082, delivered at 30 bar straight into the tank (no compressor).</p>${a}`,live:()=>{let h="OFF";return t.elz.on&&(t.elz.ph<0?h="NO SUPPLY PHASE":t.trip[t.elz.ph]?h=`NO VOLTAGE (${Et[t.elz.ph]} TRIPPED)`:n.live[t.elz.ph]?t.h2.level>=1?h="TANK FULL":h=`PRODUCING ${(xe.ELZ_P/xe.ELZ_KWH_KG*1e3).toFixed(0)} g/h`:h=`NO VOLTAGE ON ${Et[t.elz.ph]}`),o(`STATUS   ${h}
POWER    ${zt(n.elz)} kW
H\u2082 TANK  ${(t.h2.level*xe.H2_KG*1e3).toFixed(0)} g \xB7 ${(t.h2.level*xe.H2_BAR).toFixed(1)} bar`,h.startsWith("NO"))}},l.h2tank={title:"H\u2082 Buffer Tank \xB7 30 bar, 90 L",controls:()=>(t.h2.wheel?`<div class="ctl"><label>Manual valve</label><div class="seg"><button class="btn ${t.h2.valve?"on":""}" data-act="valve:1">OPEN</button><button class="btn ${t.h2.valve?"":"danger"}" data-act="valve:0">CLOSE</button></div></div>`:`<div class="lcd red">The valve spindle is bare \u2014 the handwheel has been removed.
Tag: "HANDWHEEL REMOVED AFTER THE INTERN INCIDENT \u2014 M.V."</div>
           <div class="ctl"><button class="btn" data-act="usewheel:1">Use handwheel from inventory</button></div>`)+`<p class="note">Holds up to ${xe.H2_KG*1e3} g of H\u2082 (\u2248 7.3 kWh chemical energy, but a fuel cell turns only ~\u2153 of the electricity back into electricity).</p>`,live:()=>`<div style="font:28px Consolas,monospace;margin:4px 0">${(t.h2.level*xe.H2_KG*1e3).toFixed(0)} g <span style="font-size:15px;color:#8ea3b8">${(t.h2.level*xe.H2_BAR).toFixed(1)} bar \xB7 ${(t.h2.level*100).toFixed(0)} %</span></div><div class="bar" style="height:16px"><i style="width:${t.h2.level*100}%;background:#7fd4ff"></i><span class="mark" style="left:30%"></span><span class="mark" style="left:60%;opacity:.35"></span></div>`+o(`VALVE  ${t.h2.wheel?t.h2.valve?"OPEN":"CLOSED":"NO HANDWHEEL"}`,!t.h2.wheel)},l.fuelcell={title:"PEM Fuel Cell \xB7 3.4 kW",controls:()=>`<div class="ctl"><label>Stack</label><div class="seg"><button class="btn ${t.fc.running?"on":""}" data-act="fc:1">START</button><button class="btn ${t.fc.running?"":"danger"}" data-act="fc:0">STOP</button></div></div>
        <p class="note">Start conditions: H\u2082 valve open, tank \u2265 30 %. Warm-up ramp ${xe.FC_RAMP} s. 18 kWh of electricity per kg H\u2082. Output goes through INV-3.</p>${a}`,live:()=>o(`STACK      ${t.fc.running?n.fcAvail===0?`WARMING UP ${Math.max(0,xe.FC_RAMP-t.fc.rt).toFixed(1)} s`:"RUNNING":"STOPPED"}
AVAILABLE  ${zt(n.fcAvail)} kW
DELIVERING ${zt(n.fc)} kW (via INV-3)
H\u2082         ${(t.h2.level*xe.H2_KG*1e3).toFixed(0)} g \xB7 valve ${t.h2.valve?"OPEN":"CLOSED"}`)},l.bus={title:"Main Bus \xB7 3~ 230/400 V island",controls:()=>`<div class="ctl"><label>Under-voltage relays</label><div class="seg">${Et.map((h,f)=>`<button class="btn ${t.trip[f]?"danger":"on"}" data-act="reset:${f}">${h} ${t.trip[f]?"RESET":"OK"}</button>`).join("")}</div></div>
        <p class="note">Each phase is formed by its own single-phase inverter \u2014 power cannot hop from one phase to another.
        <b>Headroom</b> = what the sources on a phase could still deliver. Negative headroom \u2192 current limit \u2192 voltage collapse \u2192 trip.</p>`,live:()=>{let h=p=>{let g=[];return t.inv.pv.ph===p&&t.inv.pv.on&&g.push("PV"),t.inv.bat.ph===p&&t.inv.bat.on&&g.push(`BAT(${t.inv.bat.mode})`),t.inv.fc.ph===p&&t.inv.fc.on&&g.push("FC"),t.elz.ph===p&&t.elz.on&&g.push("ELZ"),g.join(", ")||"\u2014"},f=n.load.reduce((p,g)=>p+g,0),u=Math.sqrt(n.load.reduce((p,g)=>p+g*g,0)-n.load[0]*n.load[1]-n.load[1]*n.load[2]-n.load[0]*n.load[2])*1e3/230;return`<table class="phase-table"><tr><th>Phase</th><th>Avail kW</th><th>Load kW</th><th>Headroom</th><th>Devices</th></tr>${Et.map((p,g)=>`<tr><td style="color:${Xn[g]}">${p}${t.trip[g]?' <span class="bad">TRIP</span>':n.live[g]?"":' <span style="color:#667">dead</span>'}</td><td>${zt(n.cap[g])}</td><td>${zt(n.load[g])}</td><td class="${n.head[g]>=xe.DOOR_P?"ok":""}">${zt(n.head[g])}${n.head[g]>=xe.DOOR_P?" \u2714":""}</td><td>${h(g)}</td></tr>`).join("")}</table>
          <div class="note">Total load ${zt(f)} kW \xB7 neutral current ${u.toFixed(1)} A ${u<1?"(balanced)":"(unbalanced)"}</div>`}},l.door={title:"Door Drive Controller",controls:()=>t.door.state==="open"?"":`<p class="note">Sliding door, fail-secure. Drive: 3-phase induction motor \u2014 starting current loads <b>${xe.DOOR_P} kW on EACH phase</b> for ${xe.DOOR_T} s. A missing phase makes the motor hum and stall ("single-phasing").</p>
        <div class="ctl"><button class="btn big" data-act="door:open" style="margin:0" ${t.door.state==="opening"?"disabled":""}>OPEN DOOR</button></div>`,live:()=>t.door.state==="open"?o("STATUS  OPEN \u2714"):o(Et.map((h,f)=>`${h}  headroom ${zt(n.head[f]).padStart(5)} kW  ${n.head[f]>=xe.DOOR_P-1e-6?"\u2714 ready":"\u2718"}`).join(`
`)+(t.door.state==="opening"?`

DRIVE RUNNING  ${t.door.t.toFixed(1)} / ${xe.DOOR_T}.0 s`:`

STATUS  ${this.doorReady()?"READY":"LOCKED"}`),!this.doorReady()&&t.door.state!=="opening")},l[e]}action(e){let[t,n]=e.split(":"),s=this.s,r=Number(n),o=null;switch(t){case"pin":if(s.sun.unlocked)break;n==="C"?s.sun.pin=s.sun.pin.slice(0,-1):n==="OK"?s.sun.pin===String(this.puzzle.year)?(s.sun.unlocked=!0,o=["Sun simulator unlocked.","good"]):(s.sun.pin="",o=["Wrong PIN.","bad"]):s.sun.pin.length<4&&(s.sun.pin+=n);break;case"sun":s.sun.on=!!r;break;case"invpv":s.inv.pv.on=!!r;break;case"invpvph":s.inv.pv.ph=r;break;case"invbat":s.inv.bat.on=!!r;break;case"invbatph":s.inv.bat.ph=r;break;case"batmode":s.inv.bat.mode=n;break;case"invfc":s.inv.fc.on=!!r;break;case"invfcph":s.inv.fc.ph=r;break;case"elz":s.elz.on=!!r;break;case"elzph":s.elz.ph=r;break;case"wheel":s.h2.wheel=!0,o=["Handwheel attached to the H\u2082 valve.","good"];break;case"valve":s.h2.wheel&&(s.h2.valve=!!r);break;case"fc":r?s.h2.valve?s.h2.level<xe.FC_START?o=["Fuel cell: start failed \u2014 H\u2082 tank below 30 %.","bad"]:s.fc.running||(s.fc.running=!0,s.fc.rt=0,o=["Fuel cell stack started \u2014 warming up.","good"]):o=["Fuel cell: start failed \u2014 H\u2082 valve is closed.","bad"]:(s.fc.running=!1,s.fc.rt=0);break;case"reset":if(s.trip[r]){s.trip[r]=!1;let a=this.compute();a.load[r]>a.cap[r]+1e-6&&a.cap[r]>0?(s.trip[r]=!0,o=[`${Et[r]} trips again \u2014 reduce the load first!`,"bad"]):o=[`${Et[r]} relay reset.`,"good"]}break;case"door":{if(s.door.state!=="locked")break;let a=this.compute(),l=Et.filter((c,h)=>!a.live[h]);if(l.length){o=[`Motor hums and won't turn \u2014 single-phasing (${l.join(", ")} ${l.length>1?"have":"has"} no voltage).`,"bad"];break}s.door.state="opening",s.door.t=0,o=["Door drive starting\u2026","info"];break}}this.version++,o&&this.events.push({msg:o[0],kind:o[1]}),this.f=this.compute()}};var sn=["guest","mvolta","root"],ms=["mvolta","root"],eu=(i,e)=>i.replace(/[a-z]/gi,t=>{let n=t<="Z"?65:97;return String.fromCharCode(((t.charCodeAt(0)-n+e)%26+26)%26+n)});function Hg(i){return{"/":{dir:!0,r:sn},"/home":{dir:!0,r:sn},"/home/guest":{dir:!0,r:sn},"/home/guest/readme.txt":{r:sn,c:`Welcome to labctl-01, guest.

Grid reconnection (gridctl) requires ROOT privileges.

Our admin Marco Volta (user: mvolta) keeps "forgetting" the root password,
so he split it into three fragments and hid them. Classic Marco.

PS: Marco uses this guest account way too often.
    Real hackers also look at hidden files (ls -a).`},"/home/guest/.bash_history":{r:sn,c:`ls
cd pics
cat IMG_0413.jpg
cd ..
su mvolta
su mvolta
# argh. why did I make my password my cat's name BACKWARDS and lowercase
exit`},"/home/guest/pics":{dir:!0,r:sn},"/home/guest/pics/IMG_0413.jpg":{r:sn,c:`\xFF\xD8\xFF\xE0 JFIF  \xFF\xDB C \u2591\u2592\u2593\u2588\u2593\u2592\u2591 \xA4\xA4\xA4 binary data \xA4\xA4\xA4 \u2592\u2593\u2588\u2593\u2592\u2591 \xFF\xC4
--- EXIF ---
Camera   : LabCam 3000
Author   : mvolta
Title    : "Napping on his favourite inverter again. Best cat. (Name's on the collar.)"
Date     : 2026:04:01 12:00:00`},"/home/guest/pics/inverter_bench.jpg":{r:sn,c:`\xFF\xD8\xFF\xE0 JFIF \u2592\u2593\u2588 binary data \u2588\u2593\u2592
--- EXIF ---
Author   : mvolta
Title    : "Three phases, 120\xB0 apart, rotating clockwise. Beautiful."`},"/home/mvolta":{dir:!0,r:ms},"/home/mvolta/notes.txt":{r:ms,c:`ROOT PASSWORD = FRAGMENT1 + FRAGMENT2 + FRAGMENT3   (no spaces)

F1 -> ~/fragment1.enc   Caesar cipher.
      Shift = number of lamps above our PV test rig.
      (decode <file> <shift>)
F2 -> run "scada diag" and look at the DIAG LED row on the server rack.
      Lit = 1, MSB on the left. I want it in decimal.
F3 -> the logic board on my desk shows it when its output is 1.
      (Wrong guesses set off the alarm. Sorry.)`},"/home/mvolta/todo.txt":{r:ms,c:`[ ] buy cat food
[x] lock away the H2 valve handwheel (intern!!)
[ ] fix sun simulator lamp driver
[ ] stop writing passwords in text files
[ ] answer the grid operator about the reconnection procedure (see mail)`},"/home/mvolta/fragment1.enc":{r:ms,c:eu(`The first fragment is: ${i.f1}`,i.lamps)},"/opt":{dir:!0,r:sn},"/opt/scada":{dir:!0,r:ms},"/opt/scada/scada.log":{r:ms,c:`18:02:11 GRID  L1 ${i.gridV}.0V  L2 ${i.gridV-1}.8V  L3 ${i.gridV}.2V  f=${i.gridF.toFixed(2)}Hz  rot L1-L2-L3
18:02:11 INFO phase angles L1 0\xB0  L2 -120\xB0  L3 -240\xB0
18:31:47 WARN storm front, wind gusts 110 km/h
18:36:02 ALRM GRID LOST \u2014 tie breaker Q0 opened by under-voltage protection
18:36:02 INFO building on emergency supply (life safety only)
18:36:05 INFO booth door drive: no supply \u2192 fail-secure LOCKED
18:37:40 INFO cluster INV-1..3 standby \u2014 manual start required`},"/etc":{dir:!0,r:sn},"/etc/passwd":{r:sn,c:`root:x:0:0:root:/root:/bin/bash
mvolta:x:1000:1000:Marco Volta,,,:/home/mvolta:/bin/bash
guest:x:1001:1001:Guest:/home/guest:/bin/bash`},"/etc/motd":{r:sn,c:"labctl-01 \xB7 Solar Test Laboratory \xB7 authorized use only \xB7 running on UPS"},"/root":{dir:!0,r:["root"]},"/root/README":{r:["root"],c:`You made it, root.

1. gridctl  \u2014 validate a day-ahead dispatch schedule. The grid operator issues
              the reconnection permit when it is good enough.
2. Then synchronise the lab with the grid at the tie panel (Q0) next to the exit.`}}}var so=class{constructor(e,t={}){this.P=e,this.hooks=t,this.fs=Hg(e),this.users={guest:null,mvolta:e.userPw,root:e.rootPw.toLowerCase()},this.el=document.getElementById("terminal"),this.out=document.getElementById("termOut"),this.inp=document.getElementById("termIn"),this.promptEl=document.getElementById("termPrompt"),this.stack=[{user:"guest",cwd:"/home/guest"}],this.hist=[],this.hi=0,this.pw=null,this.booted=!1,this.pending=null,this.progress={mv:!1,f1:!1,diag:!1,root:!1,mail:!1},this.inp.addEventListener("keydown",n=>this.key(n)),this.el.addEventListener("mousedown",n=>{n.target!==this.inp&&!n.target.closest("button")&&setTimeout(()=>this.inp.focus(),0)}),this.el.querySelectorAll("[data-cmd]").forEach(n=>n.addEventListener("click",()=>{this.inp.value=n.dataset.cmd+(n.dataset.cmd.endsWith(" "),""),n.dataset.cmd.endsWith(" ")?this.inp.focus():this.submit()}))}serialize(){return{stack:this.stack,progress:this.progress,hist:this.hist.slice(-50)}}restore(e){e&&(this.stack=e.stack,this.progress=e.progress,this.hist=e.hist||[],this.hi=this.hist.length)}get cur(){return this.stack[this.stack.length-1]}open(){this.el.classList.remove("hidden"),this.booted||(this.booted=!0,this.print("labctl-01 login: guest (auto-login)","dim"),this.print(this.fs["/etc/motd"].c,"hi"),this.cur.user!=="guest"&&this.print(`session restored: ${this.cur.user}`,"dim"),this.print(`Type "help" for commands. Stuck? Press the \u{1F4A1} button (or F1).
`,"dim")),this.updPrompt(),setTimeout(()=>this.inp.focus(),30)}close(){this.el.classList.add("hidden"),this.inp.blur(),this.pending&&(clearTimeout(this.pending),this.pending=null)}isOpen(){return!this.el.classList.contains("hidden")}print(e,t=""){let n=document.createElement("div");for(t&&(n.className=t),n.textContent=e,this.out.appendChild(n);this.out.childElementCount>400;)this.out.firstChild.remove();this.out.scrollTop=this.out.scrollHeight}updPrompt(){if(this.pw){this.promptEl.textContent="Password: ",this.inp.type="password";return}this.inp.type="text";let{user:e,cwd:t}=this.cur,n=e==="root"?"/root":`/home/${e}`,s=t===n?"~":t.startsWith(n+"/")?"~"+t.slice(n.length):t;this.promptEl.textContent=`${e}@labctl-01:${s}${e==="root"?"#":"$"} `}submit(){let e=this.inp.value;this.inp.value="",this.pw?(this.print("Password: ","dim"),this.checkPw(e)):(this.print(this.promptEl.textContent+e),e.trim()&&(this.hist.push(e),this.hi=this.hist.length),this.run(e.trim())),this.updPrompt()}key(e){if(e.stopPropagation(),e.key==="Escape"){e.preventDefault(),this.hooks.onEscape?.();return}if(e.key==="F1"){e.preventDefault(),this.hooks.onHint?.();return}(e.key.length===1||e.key==="Backspace")&&this.hooks.onKey?.(),e.key==="Enter"?(e.preventDefault(),this.submit()):e.key==="ArrowUp"&&!this.pw?(e.preventDefault(),this.hi>0&&(this.hi--,this.inp.value=this.hist[this.hi])):e.key==="ArrowDown"&&!this.pw?(e.preventDefault(),this.hi<this.hist.length&&(this.hi++,this.inp.value=this.hist[this.hi]??"")):e.key==="Tab"?(e.preventDefault(),this.complete()):e.key==="l"&&e.ctrlKey&&(e.preventDefault(),this.out.innerHTML="")}resolve(e){let{user:t,cwd:n}=this.cur;if(!e)return n;(e==="~"||e.startsWith("~/"))&&(e=(t==="root"?"/root":`/home/${t}`)+e.slice(1));let s=(e.startsWith("/")?e:n+"/"+e).split("/"),r=[];for(let o of s)!o||o==="."||(o===".."?r.pop():r.push(o));return"/"+r.join("/")}node(e){return Object.hasOwn(this.fs,e)?this.fs[e]:null}canRead(e){let t=e.split("/").filter(Boolean),n="";for(let s=0;s<=t.length;s++){let r=s===0?"/":n+="/"+t[s-1],o=this.node(r);if(o&&!o.r.includes(this.cur.user))return!1}return!0}children(e){let t=e==="/"?"/":e+"/";return Object.keys(this.fs).filter(n=>n!==e&&n.startsWith(t)&&!n.slice(t.length).includes("/")).map(n=>n.slice(t.length))}readFile(e){let t=this.resolve(e),n=this.node(t);return n?this.canRead(t)?n.dir?{err:`${e}: Is a directory`}:{c:n.c,p:t}:{err:`${e}: Permission denied`}:{err:`${e}: No such file or directory`}}complete(){let t=this.inp.value.split(" "),n=t[t.length-1],s;if(t.length===1)s=Object.keys(this.cmds()).filter(r=>r.startsWith(n));else{let r=n.lastIndexOf("/"),o=r>=0?n.slice(0,r+1):"",a=this.resolve(o||".");if(!this.node(a)?.dir||!this.canRead(a))return;s=this.children(a).filter(l=>l.startsWith(n.slice(r+1))).map(l=>o+l+(this.node(this.resolve(o+l))?.dir?"/":""))}s.length===1?(t[t.length-1]=s[0]+(s[0].endsWith("/")?"":" "),this.inp.value=t.join(" ")):s.length>1&&this.print(s.join("  "),"dim")}cmds(){let e=this.hooks.getState?.()||{};return{help:()=>this.print(`Commands:
  ls [-a] [path]        list directory          cd <path>       change directory
  cat <file>            print file              pwd / whoami    where / who am I
  su <user>             switch user             exit            leave user / close
  decode <file> <n>     Caesar-decode a file (shift letters back by n)
  scada [status|diag]   SCADA tools (group scada)
  mail [n]              read mail (mvolta)
  gridctl               grid reconnection console (root only)
  clear  history  hint`),ls:t=>{let n=t.some(c=>/^-\w*a/.test(c)),s=t.find(c=>!c.startsWith("-")),r=this.resolve(s),o=this.node(r);if(!o)return this.print(`ls: cannot access '${s}': No such file or directory`,"err");if(!this.canRead(r))return this.print(`ls: cannot open directory '${s}': Permission denied`,"err");if(!o.dir)return this.print(s);let l=this.children(r).filter(c=>n||!c.startsWith(".")).sort().map(c=>this.node((r==="/"?"":r)+"/"+c).dir?c+"/":c);this.print((n?["./","../",...l]:l).join("   ")||"")},cd:t=>{let n=this.resolve(t[0]||"~"),s=this.node(n);if(!s)return this.print(`cd: ${t[0]}: No such file or directory`,"err");if(!s.dir)return this.print(`cd: ${t[0]}: Not a directory`,"err");if(!this.canRead(n))return this.print(`cd: ${t[0]}: Permission denied`,"err");this.cur.cwd=n},cat:t=>{if(!t.length)return this.print("cat: missing file operand","err");for(let n of t){let s=this.readFile(n);s.err?this.print("cat: "+s.err,"err"):this.print(s.c)}},pwd:()=>this.print(this.cur.cwd),whoami:()=>this.print(this.cur.user),id:()=>this.print(`uid=${{root:0,mvolta:1e3,guest:1001}[this.cur.user]}(${this.cur.user}) groups=${this.cur.user}${this.cur.user!=="guest"?",scada":""}`),clear:()=>{this.out.innerHTML=""},history:()=>this.print(this.hist.map((t,n)=>`${String(n+1).padStart(4)}  ${t}`).join(`
`)),su:t=>{let n=t[0]||"root";if(!Object.hasOwn(this.users,n))return this.print(`su: user ${n} does not exist`,"err");if(n!==this.cur.user){if(this.users[n]===null){this.stack.push({user:n,cwd:`/home/${n}`});return}this.pw={user:n}}},exit:()=>{this.stack.length>1?(this.stack.pop(),this.print("logout","dim")):this.hooks.onEscape?.()},logout:()=>this.cmds().exit(),decode:t=>{if(t.length<2)return this.print("usage: decode <file> <shift>","err");let n=this.readFile(t[0]);if(n.err)return this.print("decode: "+n.err,"err");let s=parseInt(t[1],10);if(Number.isNaN(s))return this.print("decode: shift must be a number","err");let r=eu(n.c,-s),o=r.includes("fragment");this.print(r,o?"hi":""),o&&(this.progress.f1=!0)},scada:t=>{if(this.cur.user==="guest")return this.print("scada: permission denied (requires group scada)","err");t[0]==="diag"?(this.progress.diag=!0,this.hooks.onDiag?.(!0),this.print(`DIAG: LED self-test pattern latched on rack LED row "DIAG" (server rack, right of the desk).
Pattern stays until reboot.`,"hi")):this.print(`SCADA status
  grid         : ${e.synced?"CONNECTED":"LOST (tie breaker Q0 open)"}
  island       : cluster INV-1..3 ${e.labOn?"online":"standby"}
  permit       : ${e.permit?"GRANTED":"none"}
  see also     : scada diag`)},mail:t=>{if(this.cur.user==="guest")return this.print("mail: no mailbox for guest","err");let n=Jh(this.P),s=parseInt(t[0],10);if(!t[0])return this.print(n.map((r,o)=>`${o+1}  ${r.from.padEnd(34)} ${r.subj}`).join(`
`)+`

read with: mail <n>`);if(!(s>=1&&s<=n.length))return this.print("mail: no such message","err");this.progress.mail=!0,this.print(`From: ${n[s-1].from}
Subject: ${n[s-1].subj}

${n[s-1].body}`)},firewall:()=>this.print("firewall: moved to hardware \u2014 use the FW-BOARD logic board on the desk.","warn"),bin2dec:()=>this.print('bin2dec: command removed by IT ("do it in your head, Marco").',"err"),gridctl:()=>{if(this.cur.user!=="root")return this.print("gridctl: Operation not permitted (root only)","err");if(e.synced)return this.print("gridctl: site connected. Nothing left to validate.","hi");this.print("Starting gridctl dispatch console\u2026","hi"),this.pending&&clearTimeout(this.pending),this.pending=setTimeout(()=>{this.pending=null,this.isOpen()&&this.hooks.onGridctl?.()},450)},sudo:()=>this.print(`${this.cur.user} is not in the sudoers file. This incident will be reported.`,"err"),rm:()=>this.print("rm: Permission denied. And please don't.","err"),hint:()=>this.hooks.onHint?.(),echo:t=>this.print(t.join(" ")),uname:()=>this.print("Linux labctl-01 6.8.0-scada #1 SMP x86_64 GNU/Linux"),man:()=>this.print('No manual entry. Try "help".')}}hintTopic(e){let t=this.progress,n=this.P,s=this.cur.user;return!t.mv&&s==="guest"?{id:"mv",tiers:[`You are "guest". Marco's own account would be more useful.`,"readme.txt \u2192 hidden files (ls -a) \u2192 the photo in ~/pics. Whose name is it, and where is he napping?",`su mvolta \u2014 password "${n.userPw}": the cat's name from his collar tag (${n.cat}, on INV-2 in the booth), reversed, lowercase.`]}:t.f1?t.diag?e.f2seen?e.f3?s!=="root"?{id:"root",tiers:["You have all three fragments.","Root password = fragment 1 + fragment 2 + fragment 3, no spaces.",`su root \u2192 ${n.rootPw}`]}:null:{id:"f3",tiers:["Fragment 3 comes from hardware on the desk.","The FW-BOARD: set switches A\u2013D so the circuit on the poster outputs 1, then press TEST. Every AND input must be 1.",`Switches A B C D = ${n.boardSolution.split("").join(" ")} \u2192 fragment ${n.f3}.`]}:{id:"f2",tiers:["The DIAG row is a binary number.","Lit = 1, dark = 0, most significant bit on the left. Place values 128 64 32 16 8 4 2 1.",`${n.binStr} = ${n.bin}`]}:{id:"f2a",tiers:["Fragment 2 is on the server rack.",'Run "scada diag".',"scada diag \u2014 then look at the DIAG LED row on the rack."]}:{id:"f1",tiers:["As mvolta, read notes.txt.","Fragment 1 is a Caesar cipher. The shift is the number of lamps above the PV test rig in the booth.",`decode fragment1.enc ${n.lamps} \u2192 ${n.f1}`]}}checkPw(e){let t=this.pw.user;this.pw=null,e.trim().toLowerCase()===this.users[t]?(this.stack.push({user:t,cwd:t==="root"?"/root":`/home/${t}`}),t==="mvolta"&&(this.progress.mv=!0,this.print("Welcome back, Marco. You have 3 unread messages (mail).","hi")),t==="root"&&(this.progress.root=!0,this.print("# root shell. Try: cat README","hi"),this.hooks.onRoot?.())):this.print("su: Authentication failure","err")}run(e){if(!e)return;let[t,...n]=e.split(/\s+/),s=this.cmds();Object.hasOwn(s,t)?s[t](n):this.print(`${t}: command not found`,"err")}};var J={PV_KWP:600,PR:.82,BAT_E:1e3,BAT_P:250,BAT_EFF:.95,SOC_MIN:.05,BAT_WEAR:20,ELZ_P:200,ELZ_MIN:20,ELZ_KWH_KG:55,FC_P:150,FC_MIN:15,FC_KWH_KG:18,H2_MAX:150,LIM:300,FEE:40,SOC0:.5,H2_0:20,WIN_RATIO:.55,STAR3:.85};function Vg(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var kl=(i,e,t)=>Math.max(e,Math.min(t,i)),gs=i=>{let e=(i+.5-6)/14;return e>0&&e<1?Math.pow(Math.sin(Math.PI*e),1.2):0},Bl=i=>1-.75*Math.pow(i,3.4),tu=[{name:"Mostly sunny, passing clouds around noon",base:.15,trend:0,bump:.5},{name:"Cloudy morning, clearing in the afternoon",base:.6,trend:-.55,bump:0},{name:"Bright morning, thunderstorms later",base:.3,trend:.65,bump:0},{name:"Clear skies \u2014 solar flood on the market",base:.05,trend:0,bump:0},{name:"Overcast, windless evening",base:.8,trend:.1,bump:0}];function Gg(i,e){let t=Vg(i*7919+17),n=()=>{let d=1-t(),m=t();return Math.sqrt(-2*Math.log(d))*Math.cos(2*Math.PI*m)},s=tu[e??Math.floor(t()*tu.length)],r=[],o=[],a=[],l=[],c=[],h=[],f=[],u=0,p=0;for(let d=0;d<24;d++)u=u*.7+n()*.08,p=.7*p+Math.sqrt(1-.49)*n()*.18,r[d]=kl(s.base+s.trend*(d-12)/12+s.bump*Math.exp(-((d-12.5)**2)/3)+u,0,1),o[d]=kl(r[d]+p,0,1),a[d]=J.PV_KWP*J.PR*gs(d)*Bl(r[d]),l[d]=J.PV_KWP*J.PR*gs(d)*Bl(o[d]),c[d]=Math.round(70+(d>=7&&d<=17?55:0)+(d>=18&&d<=21?20:0)+t()*12);let g=r.slice(8,18).reduce((d,m)=>d+m,0)/10;for(let d=0;d<24;d++){let m=gs(d)*Bl(g),A=95+45*Math.exp(-((d-7.5)**2)/3)+115*Math.exp(-((d-19)**2)/4)-30*Math.exp(-((d-3)**2)/6)-175*m+n()*6;h[d]=Math.round(A*10)/10,f[d]=Math.round((A+n()*10+120*(o[d]-r[d])*gs(d))*10)/10}if(t()<.75){let d=17+Math.floor(t()*5);f[d]=Math.round((f[d]+120+t()*220)*10)/10}if(t()<.4){let d=10+Math.floor(t()*5);f[d]=Math.round((f[d]-40-t()*60)*10)/10}let v=Math.round((3+t()*5)*2)/2;return{seed:i,kind:s.name,cloudF:r,cloudA:o,pvF:a,pvA:l,load:c,priceF:h,priceA:f,h2Price:v}}var su=(i,e)=>(i>=0?i*e:i*(e+J.FEE))/1e3,ro=(i,e)=>i>0&&i<e?e:i;function Gs(i,e,t,n,s=!1){let r=s?i.pvF[e]:i.pvA[e],o=s?i.priceF[e]:i.priceA[e],a=i.load[e],l=[],c=t.soc*J.BAT_E,h=J.SOC_MIN*J.BAT_E,f=r*(1-n.curt/100),u=n.bat;if(u>0){let y=Math.max(0,(c-h)*J.BAT_EFF);u>y+1e-6&&l.push("battery empty"),u=Math.min(u,y)}if(u<0){let y=Math.max(0,(J.BAT_E-c)/J.BAT_EFF);-u>y+1e-6&&l.push("battery full"),u=-Math.min(-u,y)}let p=Math.min(ro(n.fc,J.FC_MIN),t.h2*J.FC_KWH_KG);p<J.FC_MIN&&(p=0),p<n.fc-1e-6&&l.push("H\u2082 low");let g=Math.min(ro(n.elz,J.ELZ_MIN),(J.H2_MAX-t.h2)*J.ELZ_KWH_KG);g<J.ELZ_MIN&&(g=0),g<n.elz-1e-6&&l.push("H\u2082 tank full");let v=f+p+u-a-g;if(v<-J.LIM){let y=Math.min(g,-J.LIM-v);g-=y,v+=y,l.push("import limit")}if(v<-J.LIM&&u<0){let y=Math.min(-u,-J.LIM-v);u+=y,v+=y}let d=0;if(v>J.LIM){let y=v-J.LIM,L=Math.min(f,y);f-=L,y-=L,d+=L;let E=Math.min(p,y);if(p-=E,y-=E,y>0&&u>0){let R=Math.min(u,y);u-=R,y-=R}v=J.LIM+y,l.push(`export limit (${d.toFixed(0)} kW PV lost)`)}let m=Math.max(0,u)*J.BAT_WEAR/1e3,A=su(v,o)-m,x=u>0?c-u/J.BAT_EFF:c-u*J.BAT_EFF;return{h:e,price:o,pvRaw:r,pv:f,load:a,bat:u,elz:g,fc:p,net:v,eur:A,wear:m,notes:l,soc:x/J.BAT_E,h2:t.h2+g/J.ELZ_KWH_KG-p/J.FC_KWH_KG}}var ru=i=>i.reduce((e,t)=>e+t,0)/i.length;function vs(i,e,t){let n=(t.soc-J.SOC0)*J.BAT_E*J.BAT_EFF*ru(i.priceF)/1e3,s=(t.h2-J.H2_0)*i.h2Price;return{cash:e,batV:n,h2V:s,total:e+n+s}}function Wg(i){let e={soc:J.SOC0,h2:J.H2_0},t=0;for(let n=0;n<24;n++){let s=Gs(i,n,e,{bat:0,elz:0,fc:0,curt:0});t+=s.eur,e=s}return vs(i,t,e).total}function $g(i,e={pv:i.pvA,price:i.priceA}){let n=J.SOC_MIN*J.BAT_E,s=Math.round((J.BAT_E-n)/25)+1,r=ru(i.priceF),o=Math.floor(J.BAT_P*J.BAT_EFF/25),a=Math.floor(J.BAT_P/J.BAT_EFF/25),l=[0,.25,.5,.75,1].map(x=>x*J.ELZ_P),c=[0,1/3,2/3,1].map(x=>Math.round(x*J.FC_P)),h=x=>x>0?-x*25/J.BAT_EFF:-x*25*J.BAT_EFF,f=[],u=[];for(let x=0;x<24;x++){f[x]={},u[x]={};for(let y=-a;y<=o;y++){let L=h(y),E=-1/0,R=null;for(let D of l)for(let S of c)for(let b of[0,25,50,75,100]){let I=e.pv[x]*(1-b/100)+S+L-i.load[x]-D;if(I<-J.LIM)continue;I>J.LIM&&(I=J.LIM);let W=su(I,e.price[x])-Math.max(0,L)*J.BAT_WEAR/1e3+(D/J.ELZ_KWH_KG-S/J.FC_KWH_KG)*i.h2Price;W>E&&(E=W,R={elz:D,fc:S,curt:b})}f[x][y]=E,u[x][y]=R}}let p=[],g=Array.from({length:s},(x,y)=>(n+y*25-J.SOC0*J.BAT_E)*J.BAT_EFF*r/1e3);for(let x=23;x>=0;x--){let y=new Array(s).fill(-1/0);p[x]=new Array(s).fill(0);for(let L=0;L<s;L++)for(let E=-a;E<=o;E++){let R=L+E;if(R<0||R>=s||f[x][E]===-1/0)continue;let D=f[x][E]+g[R];D>y[L]&&(y[L]=D,p[x][L]=E)}g=y}let v={soc:J.SOC0,h2:J.H2_0},d=0,m=[],A=[];for(let x=0;x<24;x++){let y=kl(Math.round((v.soc*J.BAT_E-n)/25),0,s-1),L=p[x][y],E={bat:Math.round(h(L)),...u[x][L]},R=Gs(i,x,v,E);d+=R.eur,v=R,m.push(E),A.push(R)}return{value:vs(i,d,v).total,plan:m,rows:A}}var qn=i=>(i<0?"\u2212":"")+"\u20AC"+Math.abs(i).toFixed(2),Vs=i=>String(i).padStart(2,"0")+":00",nu=(i,e)=>gs(i)===0?"\u{1F319}":e<.2?"\u2600\uFE0F":e<.45?"\u{1F324}\uFE0F":e<.7?"\u26C5":"\u2601\uFE0F",iu="ple-grid-best",oo=class{constructor(e){this.el=document.getElementById("grid"),this.onWin=e,this.onClose=null,this.onHint=null,this.dayNo=0,this.built=!1,this.permit=!1,this.newDay(2026,0)}newDay(e,t){this.dayNo++,this.seed=e,this.day=Gg(e,t),this.reset(),this.base=Wg(this.day),this.bench=$g(this.day)}reset(){this.st={soc:J.SOC0,h2:J.H2_0},this.h=0,this.cash=0,this.log=[],this.set={bat:0,elz:0,fc:0,curt:0},this.finished=!1,this.advisorHour=-1}serialize(){return{seed:this.seed,dayNo:this.dayNo,log:this.log,st:this.st,h:this.h,cash:this.cash,set:this.set,permit:this.permit}}restore(e){e&&(this.dayNo=e.dayNo-1,this.newDay(e.seed,e.seed===2026?0:void 0),Object.assign(this,{log:e.log,st:e.st,h:e.h,cash:e.cash,set:e.set,permit:e.permit,finished:e.h>=24}))}open(){this.built||this.build(),this.openedAt=performance.now(),this.el.classList.remove("hidden"),this.render(),this.finished&&!this.permit&&this.showResult()}close(){this.el.classList.add("hidden"),this.built&&this.$("gModal").classList.add("hidden")}isOpen(){return!this.el.classList.contains("hidden")}modalOpen(){return this.built&&!this.$("gModal").classList.contains("hidden")}build(){this.built=!0,this.el.innerHTML=`
    <div class="gwrap">
      <div class="ghead">
        <h2>gridctl \u25B8 day-ahead validation</h2>
        <span class="stat" id="gDay"></span>
        <span class="stat">Hour <b id="gHour"></b></span>
        <span class="stat">Cash <b id="gCash"></b></span>
        <span class="stat">Battery <b id="gSoc"></b></span>
        <span class="stat">H\u2082 <b id="gH2"></b></span>
        <span class="stat" id="gPace"></span>
        <span class="spacer"></span>
        <button class="btn" id="gClose">Leave console (Esc)</button>
      </div>
      <div class="gmain">
        <div class="gleft">
          <div class="chartbox"><canvas id="gChart"></canvas>
            <div class="legend">
              <span><i style="background:rgba(255,210,74,.35)"></i>PV forecast</span>
              <span><i style="background:#ffd24a"></i>PV actual</span>
              <span><i style="background:#8ea3b8;height:2px"></i>load</span>
              <span><i style="background:#ff8c42;height:2px"></i>price: day-ahead (dashed) / intraday</span>
              <span><i style="background:#3ecf7a;height:2px"></i>SOC (dashed: benchmark)</span>
            </div>
          </div>
          <div class="logbox"><table><thead><tr><th>Hour</th><th>Price DA\u2192ID</th><th>PV fc\u2192act kW</th><th>Load</th><th>Batt</th><th>ELZ</th><th>FC</th><th>Grid</th><th>\u20AC</th><th id="gBenchH" class="hidden">Bench \u20AC</th><th>SOC</th><th>H\u2082 kg</th><th>Notes</th></tr></thead><tbody id="gLog"></tbody></table></div>
        </div>
        <div class="gside">
          <h3 id="gFcTitle">Forecast</h3>
          <div class="fc" id="gFc"></div>
          <h3>Setpoints for this hour</h3>
          ${this.sliderHtml("bat","Battery",-J.BAT_P,J.BAT_P,10,"\u25C0 charge","discharge \u25B6")}
          ${this.sliderHtml("elz","Electrolyzer",0,J.ELZ_P,10,`off \xB7 min ${J.ELZ_MIN}`,`${J.ELZ_P} kW`)}
          ${this.sliderHtml("fc","Fuel cell",0,J.FC_P,5,`off \xB7 min ${J.FC_MIN}`,`${J.FC_P} kW`)}
          ${this.sliderHtml("curt","PV curtailment",0,100,10,"0 %","100 %")}
          <div class="preview" id="gPrev"></div>
          <div class="note" id="gTip" style="margin-bottom:10px"></div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn big" id="gRun" style="margin:0;flex:1">Run hour \u25B6 <span style="font-size:12px">(Enter)</span></button>
            <button class="btn" id="gRun3" title="Run 3 hours with these setpoints">\u25B6\u25B6 3 h</button>
            <button class="btn" id="gZero">Zero</button>
          </div>
        </div>
      </div>
      <div class="gfoot"><details><summary>How it works</summary><div>
        \u2022 Forecasts: <b>day-ahead</b> price and cloud cover. The <b>intraday</b> price and real clouds are revealed when the hour runs. Cloudier than forecast \u2192 less regional solar \u2192 higher price.<br>
        \u2022 Positive grid = export (paid the price). Import pays the price <b>+ \u20AC${J.FEE}/MWh grid fees</b>. Connection limit <b>\xB1${J.LIM} kW</b> \u2014 surplus PV beyond it is lost.<br>
        \u2022 Negative prices happen: exporting then <b>costs</b> money. Curtail, charge, or run the electrolyzer.<br>
        \u2022 Battery: ${J.BAT_E} kWh, \xB1${J.BAT_P} kW, ${J.BAT_EFF*100} % each way (90 % round trip), wear \u20AC${J.BAT_WEAR}/MWh discharged. Worth cycling when sell &gt; buy / 0.9 + wear.<br>
        \u2022 Electrolyzer ${J.ELZ_MIN}\u2013${J.ELZ_P} kW, ${J.ELZ_KWH_KG} kWh/kg. Fuel cell ${J.FC_MIN}\u2013${J.FC_P} kW, ${J.FC_KWH_KG} kWh/kg. H\u2082 value varies by day (header). Power\u2192H\u2082\u2192power \u2248 33 %.<br>
        \u2022 Result = cash + stored battery energy (after discharge losses, at the average day-ahead price) + H\u2082 change at today's H\u2082 price.<br>
        \u2022 The operator grants the reconnection permit if you reach \u2265 ${J.WIN_RATIO*100} % of the extra profit a perfect-foresight benchmark makes over "do nothing".
      </div></details></div>
      <div class="modal hidden" id="gModal"><div class="card" id="gModalCard" style="min-width:min(440px,92vw);max-height:92vh;overflow:auto"></div></div>
    </div>`;let e=t=>this.el.querySelector("#"+t);this.$=e;for(let t of["bat","elz","fc","curt"])e("s_"+t).addEventListener("input",n=>{this.set[t]=Number(n.target.value),this.renderSide()});e("gRun").addEventListener("click",()=>this.runHour()),e("gRun3").addEventListener("click",()=>{for(let t=0;t<3&&!this.finished;t++)this.runHour()}),e("gZero").addEventListener("click",()=>{this.set={bat:0,elz:0,fc:0,curt:0},this.renderSide()}),e("gClose").addEventListener("click",()=>this.onClose?.()),this.el.addEventListener("click",t=>{t.target.id==="gAdvisor"&&(this.advisorHour=this.h,this.onHint?.(),this.renderSide()),t.target.id==="gResult"&&this.showResult()}),window.addEventListener("resize",()=>{this.isOpen()&&this.drawChart()}),document.addEventListener("keydown",t=>{!this.isOpen()||this.modalOpen()||t.key!=="Enter"||t.repeat||performance.now()-this.openedAt<500||t.target.tagName!=="BUTTON"&&(t.preventDefault(),this.runHour())})}sliderHtml(e,t,n,s,r,o,a){return`<div class="slider"><div class="top"><span>${t}</span><b id="v_${e}"></b></div>
      <input type="range" id="s_${e}" min="${n}" max="${s}" step="${r}" value="0" aria-label="${t}">
      <div class="sub"><span>${o}</span><span>${a}</span></div></div>`}baselineAt(e){let t={soc:J.SOC0,h2:J.H2_0},n=0;for(let s=0;s<e;s++){let r=Gs(this.day,s,t,{bat:0,elz:0,fc:0,curt:0});n+=r.eur,t=r}return vs(this.day,n,t).total}render(){let e=this.$;if(e("gDay").innerHTML=`Day ${this.dayNo} \xB7 <b style="font-size:13px">${this.day.kind}</b> \xB7 H\u2082 \u20AC${this.day.h2Price.toFixed(1)}/kg`,e("gHour").textContent=this.finished?"done":`${Vs(this.h)}\u2013${Vs(this.h+1)}`,e("gCash").textContent=qn(this.cash),e("gCash").style.color=this.cash>=0?"#6dff9a":"#ff6b77",e("gSoc").textContent=`${(this.st.soc*100).toFixed(0)} %`,e("gH2").textContent=`${this.st.h2.toFixed(1)} kg`,this.h>0){let n=vs(this.day,this.cash,this.st).total,s=this.bench.rows.slice(0,this.h),r=vs(this.day,s.reduce((c,h)=>c+h.eur,0),s[s.length-1]).total,o=this.baselineAt(this.h),a=r-o,l=a>1?(n-o)/a:0;e("gPace").innerHTML=`Pace <b style="color:${l>=J.WIN_RATIO?"#6dff9a":"#ffc44a"}">${(l*100).toFixed(0)} %</b> <span style="font-size:11px">of benchmark</span>`}else e("gPace").textContent="";let t=this.finished;e("gBenchH").classList.toggle("hidden",!t),e("gLog").innerHTML=this.log.map(n=>{let s=this.bench.rows[n.h];return`<tr>
      <td>${Vs(n.h)}</td><td>${this.day.priceF[n.h].toFixed(0)}\u2192<b style="color:${Math.abs(n.price-this.day.priceF[n.h])>30?"#ffd24a":"inherit"}">${n.price.toFixed(0)}</b></td>
      <td>${this.day.pvF[n.h].toFixed(0)}\u2192${n.pvRaw.toFixed(0)}</td><td>${n.load}</td><td>${n.bat.toFixed(0)}</td><td>${n.elz.toFixed(0)}</td><td>${n.fc.toFixed(0)}</td>
      <td>${n.net.toFixed(0)}</td><td style="color:${n.eur>=0?"#6dff9a":"#ff6b77"}">${n.eur.toFixed(2)}</td>
      ${t?`<td title="benchmark: batt ${s.bat.toFixed(0)} \xB7 elz ${s.elz.toFixed(0)} \xB7 fc ${s.fc.toFixed(0)} \xB7 curt ${this.bench.plan[n.h].curt}%" style="color:#8ea3b8">${s.eur.toFixed(2)} <span style="font-size:10px">(${s.bat>0?"\u25B2":s.bat<0?"\u25BC":"\xB7"}${Math.abs(s.bat).toFixed(0)}${s.elz?" E"+s.elz.toFixed(0):""}${s.fc?" F"+s.fc.toFixed(0):""})</span></td>`:""}
      <td>${(n.soc*100).toFixed(0)}%</td><td>${n.h2.toFixed(1)}</td>
      <td style="text-align:left;color:#ffc44a">${n.notes.join(", ")}</td></tr>`}).reverse().join(""),this.renderSide(),this.drawChart()}renderSide(){let e=this.$,t=this.day,n=Math.min(this.h,23);for(let r of["bat","elz","fc","curt"]){e("s_"+r).value=this.set[r];let o=this.set[r],a=r==="elz"?ro(o,J.ELZ_MIN):r==="fc"?ro(o,J.FC_MIN):o;e("v_"+r).textContent=r==="bat"?o===0?"idle":o>0?`+${o} kW discharge`:`${-o} kW charge`:r==="curt"?`${o} %`:`${a} kW`}e("gFcTitle").textContent=this.finished?"Day complete":`Forecast ${Vs(n)}\u2013${Vs(n+1)}`,e("gFc").innerHTML=`
      <span>Price (day-ahead)</span><span style="color:${t.priceF[n]<0?"#7fd4ff":t.priceF[n]>180?"#ff8c42":"inherit"}">${t.priceF[n].toFixed(1)} \u20AC/MWh</span>
      <span>Weather</span><span>${nu(n,t.cloudF[n])} ${(t.cloudF[n]*100).toFixed(0)} % clouds</span>
      <span>PV</span><span>${t.pvF[n].toFixed(0)} kW</span>
      <span>Load</span><span>${t.load[n]} kW</span>
      <span>Next 3 h price</span><span>${[1,2,3].map(r=>n+r<24?t.priceF[n+r].toFixed(0):"\u2014").join(" / ")}</span>`;let s=Gs(t,n,this.st,this.set,!0);e("gPrev").innerHTML=`Expected (forecast):<br>grid ${s.net>=0?"export":"import"} <b>${Math.abs(s.net).toFixed(0)} kW</b> \u2192 <b style="color:${s.eur>=0?"#6dff9a":"#ff6b77"}">${qn(s.eur)}</b><br>H\u2082 ${s.elz>0?"+"+(s.elz/J.ELZ_KWH_KG).toFixed(2):""}${s.fc>0?" \u2212"+(s.fc/J.FC_KWH_KG).toFixed(2):""}${s.elz||s.fc?" kg":"\xB10"} (\u2248 ${qn((s.elz/J.ELZ_KWH_KG-s.fc/J.FC_KWH_KG)*t.h2Price)}) \xB7 SOC \u2192 ${(s.soc*100).toFixed(0)} %`+(s.notes.length?`<br><span style="color:#ffc44a">${s.notes.join(", ")}</span>`:""),e("gTip").innerHTML=this.finished?'<button class="btn on" id="gResult">\u{1F4CB} Show the result</button>':this.advisorHour===this.h?"\u{1F4A1} "+this.tip(n):'<button class="btn" id="gAdvisor">\u{1F4A1} Ask the advisor (counts as a hint)</button>',e("gRun").disabled=this.finished,e("gRun3").disabled=this.finished}tip(e){let t=this.day,n=t.priceF[e],s=t.h2Price,r=s/J.ELZ_KWH_KG*1e3,o=r-J.FEE,a=s/J.FC_KWH_KG*1e3,l=a-J.FEE,c=t.pvF[e]>t.load[e],h=`<br><span style="color:#6c8196">Break-evens today: electrolyzer below ${r.toFixed(0)} \u20AC/MWh on surplus PV (below ${o.toFixed(0)} when importing); fuel cell above ${l.toFixed(0)} \u20AC/MWh when it avoids imports (above ${a.toFixed(0)} when exporting).</span>`;if(n<0)return`Negative price: every exported kWh costs money. Curtail PV, charge the battery, run the electrolyzer.${h}`;if(n>l)return`High price: the fuel cell beats keeping H\u2082 worth \u20AC${s}/kg \u2014 and discharge the battery.${h}`;if(c&&n<r)return`Surplus PV and a price below ${r.toFixed(0)} \u20AC/MWh: turning PV into H\u2082 pays more than exporting.${h}`;let f=t.priceF.slice(e+1),u=f.length?Math.max(...f):0,p=c?n:n+J.FEE;return u>p/J.BAT_EFF**2+J.BAT_WEAR?`Store now? Forecast peak later ${u.toFixed(0)} \u20AC/MWh &gt; ${p.toFixed(0)} / 0.90 + ${J.BAT_WEAR} wear \u2192 charging pays if you hold it until then.${h}`:`No obvious arbitrage this hour. Imports carry \u20AC${J.FEE}/MWh fees.${h}`}runHour(){if(this.finished)return;let e=Gs(this.day,this.h,this.st,this.set,!1);if(this.cash+=e.eur,this.st={soc:e.soc,h2:e.h2},this.log.push(e),this.h++,this.onStep?.(),this.h>=24){this.finished=!0,this.render(),this.showResult();return}this.render()}result(){let e=vs(this.day,this.cash,this.st),t=e.total-this.base,n=Math.max(1,this.bench.value-this.base),s=t/n,r=s>=J.STAR3?3:s>=J.WIN_RATIO?2:t>0?1:0;return{...e,ratio:s,stars:r,won:s>=J.WIN_RATIO,base:this.base,bench:this.bench.value,day:this.dayNo,seed:this.seed}}showResult(){let e=this.result(),t={};try{t=JSON.parse(localStorage.getItem(iu)||"{}")}catch{}let n=t[this.seed];if(n===void 0||e.ratio>n){t[this.seed]=e.ratio;try{localStorage.setItem(iu,JSON.stringify(t))}catch{}}this.lastResult=e;let s=this.$("gModalCard");s.innerHTML=`<h2 style="margin-top:0;color:#ffd24a">Dispatch validation complete</h2>
      <div class="stars">${[1,2,3].map(o=>`<span class="${o<=e.stars?"":"off"}">\u2605</span>`).join("")}</div>
      <div class="res">
        <span>Cash from trading (incl. wear)</span><span>${qn(e.cash)}</span>
        <span>Battery energy change</span><span>${qn(e.batV)}</span>
        <span>H\u2082 inventory change</span><span>${qn(e.h2V)}</span>
        <span class="tot">Your result</span><span class="tot">${qn(e.total)}</span>
        <span style="color:#8ea3b8">"Do nothing" baseline</span><span style="color:#8ea3b8">${qn(this.base)}</span>
        <span style="color:#8ea3b8">Perfect-foresight benchmark</span><span style="color:#8ea3b8">${qn(this.bench.value)}</span>
        <span>Share of possible extra profit</span><span style="color:${e.won?"#6dff9a":"#ff6b77"}">${(e.ratio*100).toFixed(0)} %</span>
        ${n!==void 0?`<span style="color:#8ea3b8">Previous best on this day</span><span style="color:#8ea3b8">${(n*100).toFixed(0)} %</span>`:""}
      </div>
      <p class="note">${e.won?"\u2714 The grid operator accepts the schedule and issues a <b>reconnection permit</b>. Synchronise the lab with the grid at the tie panel next to the exit.":`The operator needs \u2265 ${J.WIN_RATIO*100} %. "Review the day" compares every hour with the benchmark (Bench \u20AC column, dashed SOC line).`}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn" id="mReview">Review the day</button>
        <button class="btn" id="mRetry">Replay this day</button>
        <button class="btn" id="mNew">New day</button>
        ${e.won?'<button class="btn big" id="mWin" style="margin:0">Take the permit \u25B6</button>':""}
      </div>`,this.$("gModal").classList.remove("hidden");let r=()=>this.$("gModal").classList.add("hidden");s.querySelector("#mReview").onclick=r,s.querySelector("#mRetry").onclick=()=>{r(),this.reset(),this.render()},s.querySelector("#mNew").onclick=()=>{r(),this.newDay(Math.floor(Math.random()*1e6)),this.render()},e.won&&(s.querySelector("#mWin").onclick=()=>{r(),this.permit=!0,this.onWin(e)})}drawChart(){let e=this.$("gChart"),t=Math.min(devicePixelRatio||1,2),n=e.clientWidth,s=e.clientHeight;if(!n||!s)return;e.width=n*t,e.height=s*t;let r=e.getContext("2d");r.setTransform(t,0,0,t,0,0),r.clearRect(0,0,n,s);let o=this.day,a=n<560,l=a?36:52,c=a?40:58,h=a?44:76,f=26,u=(n-l-c)/24,p=E=>l+E*u,g=600,v=E=>h+(s-h-f)*(1-E/g),d=[...o.priceF,...this.log.map(E=>E.price)],m=Math.min(-50,Math.floor(Math.min(...d)/50)*50),A=Math.max(250,Math.ceil(Math.max(...d)/50)*50),x=E=>h+(s-h-f)*(1-(E-m)/(A-m)),y='Consolas, "Courier New", monospace';r.font=`11px ${y}`,r.strokeStyle="#1a2633",r.lineWidth=1,r.fillStyle="#6c8196";for(let E=0;E<=g;E+=100)r.beginPath(),r.moveTo(l,v(E)),r.lineTo(n-c,v(E)),r.stroke(),r.textAlign="right",r.fillText(E,l-6,v(E)+4);r.strokeStyle="rgba(255,90,74,.35)",r.setLineDash([6,4]),r.beginPath(),r.moveTo(l,v(J.LIM)),r.lineTo(n-c,v(J.LIM)),r.stroke(),r.setLineDash([]),r.fillStyle="rgba(255,120,100,.7)",r.textAlign="left",r.fillText(`grid limit ${J.LIM} kW`,l+4,v(J.LIM)-4),r.fillStyle="#ff8c42";for(let E=m;E<=A;E+=50)r.fillText(E,n-c+6,x(E)+4);r.save(),r.fillStyle="#6c8196",r.translate(12,h+40),r.rotate(-Math.PI/2),r.fillText("kW",0,0),r.restore(),r.fillStyle="#ff8c42",r.fillText("\u20AC/MWh",n-c+6,h-8),m<0&&(r.fillStyle="rgba(80,160,255,.07)",r.fillRect(l,x(0),n-l-c,x(m)-x(0)),r.strokeStyle="rgba(127,212,255,.5)",r.setLineDash([2,3]),r.beginPath(),r.moveTo(l,x(0)),r.lineTo(n-c,x(0)),r.stroke(),r.setLineDash([])),this.finished||(r.fillStyle="rgba(255,210,74,.06)",r.fillRect(p(this.h),4,u,s-f-4),r.strokeStyle="rgba(255,210,74,.5)",r.setLineDash([3,3]),r.strokeRect(p(this.h)+.5,4.5,u-1,s-f-5),r.setLineDash([])),r.textAlign="center";for(let E=0;E<24;E++){let R=E<this.h,D=R?o.cloudA[E]:o.cloudF[E],S=u<20;r.font=`${S?10:15}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`,r.globalAlpha=R?.5:1,r.fillText(nu(E,D),p(E)+u/2,20),r.font=`9px ${y}`,r.fillStyle="#6c8196",gs(E)>0&&!S&&r.fillText(`${(D*100).toFixed(0)}%`,p(E)+u/2,34),r.globalAlpha=1,r.font=`10px ${y}`,r.fillStyle=E===this.h?"#ffd24a":"#6c8196",(!S||E%3===0||E===this.h)&&r.fillText(String(E).padStart(2,"0"),p(E)+u/2,s-8)}for(let E=0;E<24;E++){let R=u*.7,D=p(E)+u*.15;if(r.fillStyle="rgba(255,210,74,.22)",r.fillRect(D,v(o.pvF[E]),R,v(0)-v(o.pvF[E])),E<this.h){r.fillStyle="#ffd24a",r.fillRect(D+R*.2,v(o.pvA[E]),R*.6,v(0)-v(o.pvA[E]));let S=this.log[E];S&&S.pvRaw-S.pv>1&&(r.fillStyle="rgba(255,90,74,.7)",r.fillRect(D+R*.2,v(S.pvRaw),R*.6,v(S.pv)-v(S.pvRaw)))}}r.strokeStyle="#8ea3b8",r.lineWidth=1.5,r.beginPath();for(let E=0;E<24;E++)r.lineTo(p(E),v(o.load[E])),r.lineTo(p(E+1),v(o.load[E]));r.stroke();let L=(E,R,D)=>{r.strokeStyle=D,r.lineWidth=2,r.setLineDash(R),r.beginPath(),r.moveTo(p(0),v(J.SOC0*g)),E.forEach((S,b)=>r.lineTo(p(b+1),v(S.soc*g))),r.stroke(),r.setLineDash([])};this.finished&&L(this.bench.rows,[4,4],"rgba(62,207,122,.55)"),this.log.length&&(L(this.log,[],"#3ecf7a"),r.fillStyle="#3ecf7a",r.textAlign="left",r.font=`10px ${y}`,r.fillText(`SOC ${(this.st.soc*100).toFixed(0)}%`,p(this.log.length)+4,v(this.st.soc*g)-4)),r.strokeStyle="rgba(255,140,66,.75)",r.lineWidth=1.5,r.setLineDash([5,4]),r.beginPath();for(let E=0;E<24;E++)r.lineTo(p(E)+u/2,x(o.priceF[E]));r.stroke(),r.setLineDash([]),this.log.length&&(r.strokeStyle="#ff8c42",r.lineWidth=2.5,r.beginPath(),this.log.forEach((E,R)=>r.lineTo(p(R)+u/2,x(E.price))),r.stroke(),r.fillStyle="#ff8c42",this.log.forEach((E,R)=>{r.beginPath(),r.arc(p(R)+u/2,x(E.price),3,0,Math.PI*2),r.fill()}))}};var ou={CW:[0,-120,-240],CCW:[0,-240,-120]},Ws=i=>i*Math.PI/180,Xg=i=>((i+180)%360+360)%360-180,Di={V:5,F:.1,PHI:12},ao=class{constructor(e){this.grid={V:e.gridV,f:e.gridF,seq:"CW"},this.isl={V:222,f:49.8,seq:"CCW"},this.phi=140,this.closed=!1,this.flash=0}serialize(){return{isl:this.isl,closed:this.closed}}restore(e){e&&(Object.assign(this.isl,e.isl),this.closed=e.closed)}tick(e){if(this.closed){this.phi=0;return}this.phi=Xg(this.phi+360*(this.isl.f-this.grid.f)*e),this.flash=Math.max(0,this.flash-e)}lamps(){if(this.closed)return[0,0,0];let e=ou[this.grid.seq],t=ou[this.isl.seq];return[0,1,2].map(n=>{let s=Ws(this.phi+t[n]-e[n]),r=Math.sqrt(this.isl.V**2+this.grid.V**2-2*this.isl.V*this.grid.V*Math.cos(s));return Math.min(1,r/(2*230))})}check(){let e=this.isl.V-this.grid.V,t=this.isl.f-this.grid.f;return this.isl.seq!==this.grid.seq?{ok:!1,why:"PHASE ROTATION MISMATCH \u2014 negative-sequence protection tripped. The lamps were chasing each other, not going dark together."}:Math.abs(e)>Di.V?{ok:!1,why:`VOLTAGE MISMATCH ${e>0?"+":""}${e.toFixed(0)} V \u2014 reactive-power surge, breaker tripped.`}:Math.abs(t)>Di.F?{ok:!1,why:`SLIP TOO LARGE (${t>0?"+":""}${t.toFixed(2)} Hz) \u2014 power swing, breaker tripped.`}:Math.abs(this.phi)>Di.PHI?{ok:!1,why:`OUT OF PHASE by ${Math.abs(this.phi).toFixed(0)}\xB0 \u2014 the generators got yanked into step. BANG. Breaker tripped.`}:{ok:!0}}};function zl(i,e,t,n,{compact:s=!1}={}){i.fillStyle="#10161d",i.fillRect(0,0,e,t);let r=s?e/2:e*.3,o=s?t*.42:t/2,a=Math.min(s?e*.38:e*.25,t*.38),l='Consolas, "Courier New", monospace';i.fillStyle="#e9e6dc",i.beginPath(),i.arc(r,o,a,0,Math.PI*2),i.fill(),i.fillStyle="rgba(40,180,90,.45)",i.beginPath(),i.moveTo(r,o),i.arc(r,o,a,-Math.PI/2-Ws(Di.PHI),-Math.PI/2+Ws(Di.PHI)),i.closePath(),i.fill(),i.strokeStyle="#222",i.lineWidth=2;for(let m=0;m<36;m++){let A=Ws(m*10)-Math.PI/2,x=m%9===0?a*.78:a*.88;i.beginPath(),i.moveTo(r+Math.cos(A)*x,o+Math.sin(A)*x),i.lineTo(r+Math.cos(A)*a*.97,o+Math.sin(A)*a*.97),i.stroke()}i.fillStyle="#222",i.font=`bold ${Math.round(a*.15)}px ${l}`,i.textAlign="center",i.fillText("SLOW",r-a*.45,o+a*.55),i.fillText("FAST",r+a*.45,o+a*.55),i.fillText("\u21BA",r-a*.45,o+a*.35),i.fillText("\u21BB",r+a*.45,o+a*.35);let c=Ws(n.phi)-Math.PI/2;i.strokeStyle=n.closed?"#1a8f4a":"#c21",i.lineWidth=Math.max(3,a*.05),i.lineCap="round",i.beginPath(),i.moveTo(r-Math.cos(c)*a*.15,o-Math.sin(c)*a*.15),i.lineTo(r+Math.cos(c)*a*.85,o+Math.sin(c)*a*.85),i.stroke(),i.fillStyle="#222",i.beginPath(),i.arc(r,o,a*.07,0,Math.PI*2),i.fill(),i.lineCap="butt",n.flash>0&&(i.fillStyle=`rgba(255,255,255,${n.flash})`,i.fillRect(0,0,e,t));let h=n.lamps(),f=s?t*.88:t*.12,u=s?e/2-a*.6:e*.62;if(h.forEach((m,A)=>{let x=s?u+A*a*.6:u+A*e*.12,y=i.createRadialGradient(x,f,2,x,f,t*.07);y.addColorStop(0,`rgba(255,${200+55*m},${120+100*m},${.15+.85*m})`),y.addColorStop(1,"rgba(255,200,120,0)"),i.fillStyle="#2a2f36",i.beginPath(),i.arc(x,f,t*.04,0,Math.PI*2),i.fill(),i.fillStyle=y,i.beginPath(),i.arc(x,f,t*.07,0,Math.PI*2),i.fill(),s||(i.fillStyle="#8ea3b8",i.font=`${Math.round(t*.04)}px ${l}`,i.fillText(`L${A+1}`,x,f+t*.1))}),s)return;i.textAlign="left",i.font=`${Math.round(t*.05)}px ${l}`;let p=n.isl.V-n.grid.V,g=n.isl.f-n.grid.f;[["","GRID","ISLAND"],["V",`${n.grid.V} V`,`${n.isl.V} V`],["f",`${n.grid.f.toFixed(2)} Hz`,`${n.isl.f.toFixed(2)} Hz`],["\u21BB",n.grid.seq==="CW"?"L1-L2-L3":"L1-L3-L2",n.isl.seq==="CW"?"L1-L2-L3":"L1-L3-L2"]].forEach((m,A)=>{let x=t*.34+A*t*.1;i.fillStyle="#8ea3b8",i.fillText(m[0],e*.58,x),i.fillStyle=A===0?"#8ea3b8":"#e6edf3",i.fillText(m[1],e*.63,x),i.fillText(m[2],e*.81,x)});let d=m=>m?"#3ecf7a":"#ff6b77";i.fillStyle=d(Math.abs(p)<=Di.V),i.fillText(`\u0394V ${p>=0?"+":""}${p} V`,e*.58,t*.8),i.fillStyle=d(Math.abs(g)<=Di.F),i.fillText(`\u0394f ${g>=0?"+":""}${g.toFixed(2)} Hz`,e*.8,t*.8),i.fillStyle=n.closed?"#3ecf7a":"#ffd24a",i.fillText(n.closed?"Q0 CLOSED \u2014 CONNECTED":`\u0394\u03C6 ${n.phi>=0?"+":""}${n.phi.toFixed(0)}\xB0`,e*.58,t*.92)}var lo=class{constructor(){this.ctx=null,this.volume=.7,this.loops={}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(e.destination);let t=e.sampleRate*2;this.noise=e.createBuffer(1,t,e.sampleRate);let n=this.noise.getChannelData(0),s=0;for(let r=0;r<t;r++){let o=Math.random()*2-1;s=(s+.02*o)/1.02,n[r]=r%2?o:s*3.5}this.buildLoops()}catch{this.ctx=null}}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e}panner([e,t,n]){let s=this.ctx.createPanner();return s.panningModel="HRTF",s.distanceModel="inverse",s.refDistance=1.2,s.rolloffFactor=1.4,s.positionX?(s.positionX.value=e,s.positionY.value=t,s.positionZ.value=n):s.setPosition(e,t,n),s.connect(this.master),s}buildLoops(){let e=this.ctx,t=this.noiseSrc(),n=e.createBiquadFilter(),s=e.createGain();n.type="lowpass",n.frequency.value=260,s.gain.value=.035,t.connect(n).connect(s).connect(this.master),t.start(),this.loops.room=s;let r=e.createGain();r.gain.value=0,r.connect(this.panner([5.6,1.2,-2.9]));for(let[A,x]of[[50,.6],[100,1],[150,.35],[300,.12]]){let y=e.createOscillator(),L=e.createGain();y.frequency.value=A,L.gain.value=x,y.connect(L).connect(r),y.start()}this.loops.hum=r;let o=this.noiseSrc(),a=e.createBiquadFilter(),l=e.createGain();a.type="bandpass",a.frequency.value=700,a.Q.value=.8,l.gain.value=0,o.connect(a).connect(l).connect(this.panner([3.1,.8,-4.2])),o.start(),this.loops.fan=l;let c=this.noiseSrc(),h=e.createBiquadFilter(),f=e.createGain();h.type="bandpass",h.frequency.value=1400,h.Q.value=9,f.gain.value=0,c.connect(h).connect(f).connect(this.panner([-4.7,1,-4.1])),c.start(),this.loops.bub=f,this.loops.bubF=h;let u=e.createOscillator(),p=e.createBiquadFilter(),g=e.createGain();u.type="sawtooth",u.frequency.value=100,p.type="lowpass",p.frequency.value=500,g.gain.value=0,u.connect(p).connect(g).connect(this.panner([-4.95,2.9,0])),u.start(),this.loops.ballast=g;let v=e.createOscillator(),d=e.createBiquadFilter(),m=e.createGain();v.type="sawtooth",v.frequency.value=40,d.type="lowpass",d.frequency.value=380,m.gain.value=0,v.connect(d).connect(m).connect(this.panner([0,2.2,-4.9])),v.start(),this.loops.motor=m,this.loops.motorOsc=v}update(e,t,n){if(!this.ctx)return;let s=this.ctx.listener,r=this.ctx.currentTime,o=e.getWorldDirection(this._v||(this._v=e.position.clone()));s.positionX?(s.positionX.value=e.position.x,s.positionY.value=e.position.y,s.positionZ.value=e.position.z,s.forwardX.value=o.x,s.forwardY.value=o.y,s.forwardZ.value=o.z,s.upX.value=0,s.upY.value=1,s.upZ.value=0):(s.setPosition(e.position.x,e.position.y,e.position.z),s.setOrientation(o.x,o.y,o.z,0,1,0));let a=(l,c)=>l.gain.setTargetAtTime(c,r,.15);a(this.loops.hum,t.hum*.07),a(this.loops.fan,t.fan*.5),a(this.loops.ballast,t.ballast*.035),a(this.loops.motor,t.motor*.16),this.loops.motorOsc.frequency.setTargetAtTime(35+t.motor*55,r,.2),t.bubbles>0&&Math.random()<n*14&&(this.loops.bubF.frequency.setValueAtTime(900+Math.random()*1600,r),this.loops.bub.gain.setValueAtTime(.5*t.bubbles,r),this.loops.bub.gain.setTargetAtTime(0,r+.02,.03))}beep(e,t,n="sine",s=.08,r=0){if(!this.ctx)return;let o=this.ctx.currentTime+r,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=n,a.frequency.value=e,l.gain.setValueAtTime(s,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(this.master),a.start(o),a.stop(o+t+.02)}burst(e,t,n,s="lowpass",r=0){if(!this.ctx)return;let o=this.ctx.currentTime+r,a=this.noiseSrc(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();l.type=s,l.frequency.value=t,c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(c).connect(this.master),a.start(o,Math.random()),a.stop(o+e+.02)}click(){this.beep(1800,.03,"square",.025),this.burst(.03,3e3,.05,"highpass")}good(){this.beep(660,.12),this.beep(990,.18,"sine",.08,.09)}bad(){this.beep(140,.35,"sawtooth",.06)}step(){this.burst(.07,380+Math.random()*260,.22)}clack(){this.burst(.09,2500,.5,"bandpass"),this.beep(90,.25,"square",.08)}thunk(){this.beep(55,.4,"sine",.35),this.burst(.15,200,.4)}keyType(){this.burst(.025,4e3,.06,"highpass")}pickup(){this.beep(880,.08,"triangle",.08),this.beep(1320,.12,"triangle",.07,.07)}fanfare(){[523,659,784,1047].forEach((e,t)=>this.beep(e,.35,"triangle",.09,t*.12))}};var lu="ple-settings",au={sens:1,invertY:!1,fov:72,volume:.7,uiScale:1,reducedMotion:!1,palette:"standard",quality:"auto"};function cu(){try{return{...au,...JSON.parse(localStorage.getItem(lu)||"{}")}}catch{return{...au}}}function qg(i){try{localStorage.setItem(lu,JSON.stringify(i))}catch{}}function hu(i){let e=(s,r,o,a,l,c=h=>h)=>`<div class="setrow"><label for="set_${s}">${r}</label>
    <input type="range" id="set_${s}" data-set="${s}" min="${o}" max="${a}" step="${l}" value="${i[s]}"><output>${c(i[s])}</output></div>`,t=(s,r)=>`<div class="setrow"><label for="set_${s}">${r}</label><input type="checkbox" id="set_${s}" data-set="${s}" ${i[s]?"checked":""}></div>`,n=(s,r,o)=>`<div class="setrow"><label for="set_${s}">${r}</label><select id="set_${s}" data-set="${s}">${o.map(([a,l])=>`<option value="${a}" ${i[s]===a?"selected":""}>${l}</option>`).join("")}</select></div>`;return`<div class="settings">
    ${e("sens","Look sensitivity",.2,3,.1,s=>Number(s).toFixed(1)+"\xD7")}
    ${t("invertY","Invert Y axis")}
    ${e("fov","Field of view",55,100,1,s=>s+"\xB0")}
    ${e("volume","Volume",0,1,.05,s=>Math.round(s*100)+" %")}
    ${e("uiScale","UI scale",.8,1.5,.05,s=>Math.round(s*100)+" %")}
    ${t("reducedMotion","Reduced motion (no head bob / shake)")}
    ${n("palette","Phase colours",[["standard","Standard (red / yellow / blue)"],["colorblind","Colour-blind safe (Okabe\u2013Ito)"]])}
    ${n("quality","Render quality",[["low","Low (fast)"],["auto","Balanced"],["high","High (sharp)"]])}
  </div>`}function uu(i,e,t){i.querySelectorAll("[data-set]").forEach(n=>{n.addEventListener("input",()=>{let s=n.dataset.set;e[s]=n.type==="checkbox"?n.checked:n.tagName==="SELECT"?n.value:Number(n.value);let r=n.parentElement.querySelector("output");r&&(r.textContent={sens:o=>o.toFixed(1)+"\xD7",fov:o=>o+"\xB0",volume:o=>Math.round(o*100)+" %",uiScale:o=>Math.round(o*100)+" %"}[s]?.(e[s])??e[s]),qg(e),t(e)})})}var du=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0,co=class{constructor(e,t){this.h=t,this.move={x:0,y:0},this.enabled=!1,this.el=document.createElement("div"),this.el.id="touchUi",this.el.className="hidden",this.el.innerHTML=`
      <div class="joy" id="joyBase"><div class="joy-knob" id="joyKnob"></div></div>
      <div class="tbtns">
        <button class="tbtn" data-t="menu" aria-label="Menu">\u2630</button>
        <button class="tbtn" data-t="hint" aria-label="Hint">\u{1F4A1}</button>
        <button class="tbtn" data-t="journal" aria-label="Journal">\u{1F4D3}</button>
      </div>
      <button class="tbtn use" data-t="use">USE</button>
      <button class="tbtn run" data-t="sprint">RUN</button>`,document.body.appendChild(this.el),this.base=this.el.querySelector("#joyBase"),this.knob=this.el.querySelector("#joyKnob"),this.el.querySelectorAll("[data-t]").forEach(n=>{let s=n.dataset.t;if(s==="sprint"){n.addEventListener("pointerdown",o=>{o.preventDefault(),this.h.sprint?.(!0),n.classList.add("on")});let r=()=>{this.h.sprint?.(!1),n.classList.remove("on")};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("pointerleave",r)}else n.addEventListener("click",r=>{r.preventDefault(),this.h[s]?.()})}),this.joyId=null,this.lookId=null,e.addEventListener("pointerdown",n=>this.down(n)),window.addEventListener("pointermove",n=>this.moveEv(n)),window.addEventListener("pointerup",n=>this.up(n)),window.addEventListener("pointercancel",n=>this.up(n))}enable(e){this.enabled=e,this.el.classList.toggle("hidden",!e),e||this.reset()}reset(){this.move.x=this.move.y=0,this.joyId=this.lookId=null,this.base.classList.remove("active"),this.knob.style.transform=""}down(e){!this.enabled||e.pointerType==="mouse"||(e.clientX<innerWidth*.4&&this.joyId===null?(this.joyId=e.pointerId,this.jx=e.clientX,this.jy=e.clientY,this.base.style.left=`${e.clientX-60}px`,this.base.style.top=`${e.clientY-60}px`,this.base.classList.add("active")):this.lookId===null&&(this.lookId=e.pointerId,this.lx=e.clientX,this.ly=e.clientY,this.tapStart={x:e.clientX,y:e.clientY,t:performance.now()}))}moveEv(e){if(this.enabled)if(e.pointerId===this.joyId){let t=e.clientX-this.jx,n=e.clientY-this.jy,s=Math.hypot(t,n),r=50;s>r&&(t*=r/s,n*=r/s),this.knob.style.transform=`translate(${t}px, ${n}px)`,this.move.x=t/r,this.move.y=-n/r}else e.pointerId===this.lookId&&(this.h.look?.(e.clientX-this.lx,e.clientY-this.ly),this.lx=e.clientX,this.ly=e.clientY)}up(e){if(e.pointerId===this.joyId&&(this.joyId=null,this.move.x=this.move.y=0,this.base.classList.remove("active"),this.knob.style.transform=""),e.pointerId===this.lookId){this.lookId=null;let t=this.tapStart;t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<12&&performance.now()-t.t<350&&this.h.tap?.(e.clientX,e.clientY)}}};var po=new URLSearchParams(location.search),Ni="ple-save-v2",Yl="ple-best-v2",yu=60*60,Rn={get(i){try{return JSON.parse(localStorage.getItem(i)||"null")}catch{return null}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}},xu=()=>{let i=new Date;return i.getFullYear()*1e4+(i.getMonth()+1)*100+i.getDate()},qt=Number(po.get("seed"))||0,ut=Yh(qt),Rt=cu();Ol(Rt.palette);var ot=i=>document.getElementById(i),In;try{In=new zr({antialias:!0,powerPreference:"high-performance"})}catch{throw document.body.insertAdjacentHTML("beforeend",'<div class="overlay"><div class="card"><h2>WebGL unavailable</h2><p>This game needs a browser with WebGL enabled.</p></div></div>'),new Error("WebGL unavailable")}var bu=()=>Math.min(devicePixelRatio||1,{low:1,auto:1.5,high:2}[Rt.quality]??1.5);In.setPixelRatio(bu());In.setSize(innerWidth,innerHeight);In.toneMapping=xl;In.toneMappingExposure=1.15;ot("app").appendChild(In.domElement);var Yn=In.domElement;Yn.setAttribute("aria-label","3D view of the laboratory");var Ys=new Hr;Ys.background=new Xe(329740);var Pt=new Ot(Rt.fov,innerWidth/innerHeight,.05,100);Pt.rotation.order="YXZ";addEventListener("resize",()=>{Pt.aspect=innerWidth/innerHeight,Pt.updateProjectionMatrix(),In.setSize(innerWidth,innerHeight)});var{colliders:Yg,refs:ue}=jh(Ys,ut),Ue=new io(ut),xt=new ao(ut),Qe=new lo;Qe.setVolume(Rt.volume);var ho=Kh(ut),Zn=new Kr(new bn,16765514);Zn.material.depthTest=!1;Zn.material.transparent=!0;Zn.material.opacity=.7;Zn.renderOrder=10;Zn.visible=!1;Ys.add(Zn);var Jl=[];Ys.traverse(i=>{i.isMesh&&Jl.push(i)});var Ce={hud:ot("hud"),start:ot("start"),resume:ot("resume"),menu:ot("menu"),panel:ot("panel"),panelTitle:ot("panelTitle"),panelBody:ot("panelBody"),prompt:ot("prompt"),cross:ot("crosshair"),objective:ot("objective"),busHud:ot("busHud"),toast:ot("toast"),end:ot("end"),timer:ot("timer"),inv:ot("inv"),hint:ot("hintBox"),journal:ot("journal")};function Mu(){Pt.fov=Rt.fov,Pt.updateProjectionMatrix(),Qe.setVolume(Rt.volume),document.documentElement.style.setProperty("--ui",Rt.uiScale),Ol(Rt.palette),In.setPixelRatio(bu()),Ue.version++}Mu();var C={mode:"start",stage:"lab",panelId:null,panelVersion:-1,pver:0,target:null,inventory:[],journal:{},heard:{},hints:{used:0,revealed:{}},time:{elapsed:0,penalty:0,splits:{}},drawer:{code:[0,0,0,0],open:!1,taken:!1},board:{bits:[0,0,0,0],solved:!1,fails:0},diag:!1,f2seen:!1,exitOpen:!1,catPets:0,termOpened:!1,shake:0},Le={x:0,z:2.6,yaw:0,pitch:-.05,eye:1.65,r:.3,vx:0,vz:0,bob:0,stepAcc:0},Xt={},jl=!1,Cn=null,go=()=>{for(let i in Xt)Xt[i]=!1;Cn?.reset(),jl=!1},gn=i=>{let e=Math.abs(Math.round(i));return`${i<0?"+":""}${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},ys=()=>C.time.elapsed+C.time.penalty,$s=[],Xs=0;function Tt(i,e="info"){$s.length&&$s[$s.length-1].msg===i||($s.push({msg:i,kind:e}),Xs<=0&&Su())}function Su(){let i=$s.shift();if(!i){Ce.toast.classList.remove("show");return}Ce.toast.textContent=i.msg,Ce.toast.className="show "+(i.kind==="bad"?"bad":i.kind==="good"?"good":""),Xs=Math.min(6,2.2+i.msg.length/30)}function Ql(i,e){C.time.penalty+=i,Tt(`\u23F1 +${gn(i)} \u2014 ${e}`,"bad"),Ce.timer.classList.remove("pen"),Ce.timer.offsetWidth,Ce.timer.classList.add("pen")}var ec={handwheel:"\u{1F534} Valve handwheel",permit:"\u{1F4C4} Reconnection permit"};function Eu(i){C.inventory.includes(i)||(C.inventory.push(i),Qe.pickup(),Tt(`Picked up: ${ec[i]}`,"good"),vo())}function Zg(i){C.inventory=C.inventory.filter(e=>e!==i),vo()}function vo(){Ce.inv.innerHTML=C.inventory.map(i=>`<span class="chip">${ec[i]}</span>`).join("")}function mn(i,e,t){C.journal[i]||(C.journal[i]={title:e,text:t,t:ys()},ot("jBadge")?.classList.add("new"))}var fu={control:"Booth door",root:"Root access",permit:"Reconnection permit",synced:"Grid synchronised",won:"Escaped"};function wn(i){C.stage!==i&&(C.stage=i,C.time.splits[i]=ys(),i==="permit"&&Eu("permit"),i==="synced"&&(ue.windowMat.map=ue.dawnTex,ue.windowMat.needsUpdate=!0,ue.outsideMat.map=ue.dawnTex,ue.outsideMat.needsUpdate=!0,C.exitOpen=!0,Ue.s.grid=!0,setTimeout(()=>{Qe.thunk(),Tt("The building is back on the grid. The exit is unlocked!","good")},600)),bs())}function Kg(){return C.stage==="lab"?Ue.objective()||"The door is open. Go through.":{control:"Get the building back on the grid. The <b>control PC</b> is on the desk.",root:"You are root. Get the <b>reconnection permit</b>: run <b>gridctl</b>.",permit:"Permit granted. <b>Synchronise</b> the lab with the grid at the tie panel (Q0) next to the exit.",synced:"The exit is open. <b>Get out!</b>",won:"You escaped. Feel free to look around."}[C.stage]}function Jg(){return C.stage==="lab"?Ue.hintTopic():C.stage==="control"?C.termOpened?vn.hintTopic({f2seen:C.f2seen,f3:C.board.solved})||{id:"root",tiers:["You have everything.","Combine the fragments.",`su root \u2192 ${ut.rootPw}`]}:{id:"pc",tiers:["There is a computer in this room.","The PC on the desk runs on the UPS.","Walk to the desk and use the PC."]}:C.stage==="root"?{id:"gridctl",tiers:["Marco's mail (mail) and /root/README describe the reconnection procedure.",`Run gridctl as root and validate a 24-h dispatch: reach \u2265 ${J.WIN_RATIO*100} % of the benchmark's extra profit.`,"At negative prices: curtail, charge, electrolyze. At the evening peak: discharge (fuel cell above its break-even). The \u{1F4A1} advisor gives per-hour advice."]}:C.stage==="permit"?{id:"sync",tiers:["The tie panel (Q0) is on the east wall next to the exit. Marco pinned a checklist nearby.","Match the voltage, run the island slightly FASTER than the grid, fix the phase rotation until all three lamps go dark TOGETHER, then close at 12 o'clock.",`Island ${ut.gridV} V, ${(ut.gridF+.04).toFixed(2)} Hz, rotation L1-L2-L3 \u21BB. Press CLOSE (or Space) when the needle is in the green sector.`]}:{id:"exit",tiers:["Walk out!","The exit door is in the east wall of the control room.","Go through the open exit door and down the corridor."]}}var vn=new so(ut,{onGridctl:()=>{vn.close(),Au()},onDiag:i=>{C.diag=i,mn("diag","SCADA diag","scada diag latched a pattern on the rack's DIAG LED row.")},onKey:()=>Qe.keyType(),onEscape:()=>An(),onHint:()=>xo(),onRoot:()=>wn("root"),getState:()=>({permit:Lt.permit,synced:C.stage==="synced"||C.stage==="won",labOn:Ue.f.live.some(Boolean)})}),Lt=new oo(i=>{C.gridResult=i,Lt.close(),wn("permit"),An(),Tt("\u{1F4C4} Reconnection permit granted. Synchronise at the tie panel (Q0) next to the exit.","good")});Lt.onClose=()=>An();Lt.onHint=()=>{C.hints.used++,Tt("Advisor consulted (counts as a hint).")};var Yt=du();Cn=new co(Yn,{look:(i,e)=>{C.mode==="play"&&Iu(i*1.6,e*1.6)},tap:(i,e)=>{C.mode==="play"&&iv(i,e)},use:()=>{C.mode==="play"&&Ks(C.target)},menu:()=>xs(),hint:()=>xo(),journal:()=>nc(),sprint:i=>{jl=i}});var Zl=0;function _o(){if(Yt){Zs();return}let i=()=>{C.mode==="paused"&&Ce.resume.classList.remove("hidden")};try{let e=Yn.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>{try{let t=Yn.requestPointerLock();t&&t.catch&&t.catch(i)}catch{i()}})}catch{try{Yn.requestPointerLock()}catch{i()}}}function Zs(){C.mode="play",Ce.resume.classList.add("hidden"),Zl=2}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Yn?Zs():(go(),C.mode==="play"&&xs())});document.addEventListener("pointerlockerror",()=>{C.mode==="paused"&&Ce.resume.classList.remove("hidden")});Ce.resume.addEventListener("click",()=>{Qe.init(),Yt?Zs():_o()});Yn.addEventListener("click",()=>{C.mode==="paused"&&!Yt&&(Qe.init(),_o())});addEventListener("blur",()=>{go(),C.mode==="play"&&Yt&&xs()});document.addEventListener("visibilitychange",()=>{document.hidden&&(go(),bs(),C.mode==="play"&&Yt&&xs())});var jg=["panel","terminal","grid","hint","journal","menu"];function di(i){C.mode=i,go(),document.pointerLockElement&&document.exitPointerLock(),Ce.resume.classList.add("hidden"),Ce.prompt.style.display="none",Ce.cross.classList.remove("active"),Zn.visible=!1,Cn.enable(!1)}function An(){Ce.panel.classList.add("hidden"),Ce.hint.classList.add("hidden"),Ce.journal.classList.add("hidden"),Ce.menu.classList.add("hidden"),vn.close(),Lt.close(),C.panelId=null,document.activeElement?.blur?.(),!(C.mode==="end"||C.mode==="start")&&(C.mode="paused",Cn.enable(Yt),Yt?Zs():_o())}document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",An));var uo=(i,e=!1)=>`<div class="lcd ${e?"red":""}">${i}</div>`,Qg=null,pu=()=>Qg??(Qg=ue.circuitCanvas.toDataURL()),Tu=()=>$n(ue.drawerLockTex,(i,e,t)=>{i.fillStyle="#222",i.fillRect(0,0,e,t),i.fillStyle="#ddd",i.font=`bold 34px ${Fe.mono}`,i.textAlign="center",i.fillText(C.drawer.code.join(" "),e/2,36)});function ev(i){let e={};e.cat={title:"A sleeping cat",controls:()=>`<p>A ginger cat is curled up on top of INV-2, enjoying the warm fan exhaust.</p>
      <div class="lcd" style="font-size:18px">Collar tag: \u201C${ut.cat.toUpperCase()}\u201D</div>
      <button class="btn" data-act="pet">Pet the cat</button>`,onOpen:()=>mn("cat","The cat on INV-2",`Collar tag: "${ut.cat.toUpperCase()}"`),onAct:()=>{C.catPets++,Qe.beep(70,.7,"sine",.15),Tt(C.catPets>3?"He opens one eye. Judging you.":"Prrrrr. (He did not bite.)")}},e.drawer={title:"Bench drawer \xB7 4-wheel combination lock",controls:()=>C.drawer.open?C.drawer.taken?"<p>Empty \u2014 cable ties, a multimeter fuse and half a cookie.</p>":'<p>Inside: the missing <b>handwheel</b> of the H\u2082 valve.</p><button class="btn on" data-act="take">Take the handwheel</button>':`<p class="note">Four number wheels. (You can also type the digits and press Enter.)</p>
        <div class="wheels">${C.drawer.code.map((t,n)=>`<div class="wheel"><button class="btn" data-act="dw:${n}:1" aria-label="wheel ${n+1} up">\u25B2</button><div class="digit">${t}</div><button class="btn" data-act="dw:${n}:-1" aria-label="wheel ${n+1} down">\u25BC</button></div>`).join("")}</div>
        <button class="btn on" data-act="dopen">Pull the drawer</button>`,onAct:t=>{let[n,s,r]=t.split(":");n==="dw"&&(C.drawer.code[s]=(C.drawer.code[s]+Number(r)+10)%10),n==="digit"&&(C.drawer.code.shift(),C.drawer.code.push(Number(s))),n==="dopen"&&(C.drawer.code.join("")===ut.drawerCode?(C.drawer.open=!0,Qe.clack(),Tt("Click \u2014 the drawer slides open.","good"),mn("drawer","Bench drawer",`Code ${ut.drawerCode}. It held the H\u2082 valve handwheel.`)):(Qe.bad(),Tt("The lock doesn't budge.","bad"))),n==="take"&&(C.drawer.taken=!0,Eu("handwheel")),Tu()}},e.resistor={title:"A display resistor with a sticky note",controls:()=>`<div class="resistor"><span class="lead"></span><span class="rbody">${ut.bands.map(t=>`<i style="background:${ps[t]}"></i>`).join("")}<i class="gap"></i><i style="background:#c8a040"></i></span><span class="lead"></span></div>
      <div class="board" style="font-size:18px">"Drawer = my value in \u03A9." <span style="float:right">\u2014 M.V.</span></div>
      <p class="note">Bands are read from the end they are closest to. The separate gold band is the tolerance.</p>`,onOpen:()=>mn("resistor","Resistor sticky note",`"Drawer = my value in \u03A9." Bands: ${ut.bands.map(t=>Dl[t]).join(", ")}, gold.`)},e.colorcode={title:"Resistor colour code (poster)",controls:()=>`<table class="phase-table"><tr><th>Colour</th><th>Digit</th><th>Multiplier</th></tr>${Dl.map((t,n)=>`<tr><td><i class="sw" style="background:${ps[n]}"></i> ${t}</td><td>${n}</td><td>\xD7 10${"\u2070\xB9\xB2\xB3\u2074\u2075\u2076\u2077\u2078\u2079"[n]}</td></tr>`).join("")}</table>
      <p class="note">4-band resistor: digit, digit, multiplier, tolerance (gold \xB15 %).</p>`,onOpen:()=>mn("colorcode","Resistor colour code","digit \xB7 digit \xB7 \xD710\u207F \xB7 tolerance \u2014 black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9.")},e.whiteboard={title:"Whiteboard (half erased)",controls:()=>`<div class="board">${Hs(ut).map(([t,n])=>`<div style="color:${n};white-space:pre-wrap">${t}</div>`).join("")}</div>`,onOpen:()=>mn("whiteboard","Whiteboard",Hs(ut).map(t=>t[0].trim()).join(`
`))},e.plaque={title:"Brass plaque",controls:()=>`<div class="board" style="background:#b8923a;color:#3b2a08;text-align:center;font-family:Georgia,serif">SOLAR TEST LABORATORY<br><b style="font-size:26px">EST. ${ut.year}</b><br><i>"Power to the people."</i></div>`,onOpen:()=>mn("plaque","Brass plaque",`Solar Test Laboratory \u2014 est. ${ut.year}`)};for(let t of["rec1","rec2","rec3","rec4"])e[t]={title:ho[t].title,controls:()=>`<div class="memo">\u25B6 ${ho[t].text.replace(/\n/g,"<br>")}</div><button class="btn" data-act="replay">\u21BB Replay</button>`,onOpen:()=>{mu(),C.heard[t]=!0,mn(t,ho[t].title,ho[t].text)},onAct:()=>mu()};return e.rack={title:"Server rack \xB7 DIAG LED row",controls:()=>C.diag?`<div class="leds">${ut.binStr.split("").map(t=>`<span class="led ${t==="1"?"on":""}"></span>`).join("")}</div><p class="note">\u25C0 MSB \xB7 lit = 1 \xB7 8 bits</p>`:"<p>The DIAG row is dark. Some SCADA diagnostic must drive it.</p>",onOpen:()=>{C.diag&&(C.f2seen=!0,mn("rackdiag","DIAG LED pattern",`${ut.binStr.replace(/1/g,"\u25CF").replace(/0/g,"\u25CB")}  (lit = 1, MSB left)`))}},e.circuit={title:"Poster: FW-BOARD circuit",controls:()=>`<img class="circuit-img" src="${pu()}" alt="Logic circuit: inputs A to D feed gates whose outputs are ANDed into the output LED">`},e.board={title:"FW-BOARD \xB7 logic board",controls:()=>`<img class="circuit-img" src="${pu()}" alt="Logic circuit">
      <div class="seg" style="margin:10px 0">${"ABCD".split("").map((t,n)=>`<button class="btn tog ${C.board.bits[n]?"on":""}" data-act="bt:${n}" ${C.board.solved?"disabled":""}>${t} = ${C.board.bits[n]}</button>`).join("")}
      <button class="btn big" data-act="btest" style="margin:0 0 0 8px" ${C.board.solved?"disabled":""}>TEST</button></div>
      <p class="note">Keys 1\u20134 toggle A\u2013D, Enter tests. A wrong TEST trips the security alarm (+0:30).</p>`,live:()=>C.board.solved?uo(`OUT = 1  \u2714
DISPLAY: ${ut.f3}   (fragment 3)`):uo(`OUT = ?   inputs ${C.board.bits.join(" ")}`),onAct:t=>{let[n,s]=t.split(":");C.board.solved||(n==="bt"&&(C.board.bits[s]^=1),n==="btest"&&(Ll(ut.circuitDef,C.board.bits)?(C.board.solved=!0,Qe.good(),Tt(`FW-BOARD: OUT = 1 \u2014 the display shows "${ut.f3}".`,"good"),mn("f3","Fragment 3",`FW-BOARD display: ${ut.f3}`)):(C.board.fails++,Qe.bad(),Qe.beep(880,.5,"square",.06,.1),Ql(30,"FW-BOARD alarm: output 0"))))}},e.checklist={title:"Sync checklist (pinned to the wall)",controls:()=>`<div class="board" style="white-space:pre-wrap;font-size:16px">${Nl()}</div>`,onOpen:()=>mn("checklist","Sync checklist",Nl())},e.sync={title:"Grid tie panel \xB7 breaker Q0",controls:()=>`<canvas id="syncCv" class="synccv" width="720" height="420"></canvas>
      ${xt.closed?uo("Q0 CLOSED \u2014 the lab is connected to the grid \u2714"):Lt.permit?"":uo("Q0 INTERLOCKED \u2014 no reconnection permit from the grid operator yet (gridctl).",!0)}
      <div class="ctl"><label>Island voltage</label><div class="seg">${[-5,-1,1,5].map(t=>`<button class="btn" data-act="sv:${t}">${t>0?"+":"\u2212"}${Math.abs(t)} V</button>`).join("")}</div></div>
      <div class="ctl"><label>Island frequency</label><div class="seg">${[-.1,-.01,.01,.1].map(t=>`<button class="btn" data-act="sf:${t}">${t>0?"+":"\u2212"}${Math.abs(t)} Hz</button>`).join("")}</div></div>
      <div class="ctl"><label>Cluster rotation</label><div class="seg"><button class="btn ${xt.isl.seq==="CW"?"on":""}" data-act="sq:CW">L1-L2-L3 \u21BB</button><button class="btn ${xt.isl.seq==="CCW"?"on":""}" data-act="sq:CCW">L1-L3-L2 \u21BA</button></div></div>
      ${xt.closed?"":'<button class="btn big danger" data-act="sclose" style="margin-top:4px">CLOSE Q0 <span style="font-size:12px">(Space)</span></button>'}`,anim:()=>{let t=ot("syncCv");t&&zl(t.getContext("2d"),t.width,t.height,xt)},onAct:t=>{let[n,s]=t.split(":");xt.closed||(n==="sv"&&(xt.isl.V=Math.max(200,Math.min(260,xt.isl.V+Number(s)))),n==="sf"&&(xt.isl.f=Math.round(Math.max(49,Math.min(51,xt.isl.f+Number(s)))*100)/100),n==="sq"&&(xt.isl.seq=s),n==="sclose"&&tv())}},e.exit={title:"Exit door",controls:()=>C.exitOpen?"<p>The door is open. Fresh air!</p>":"<p>The access control is dead: the building has no grid supply. Only the life-safety circuits run on the emergency generator.</p>"},e[i]}function mu(){for(let i=0;i<9;i++)Qe.beep(140+Math.random()*120,.09,"triangle",.05,i*.11)}function tv(){if(!Lt.permit){Qe.bad(),Tt("Q0 is interlocked: no reconnection permit yet (gridctl).","bad");return}let i=xt.check();i.ok?(xt.closed=!0,Qe.thunk(),Qe.fanfare(),Tt("Q0 CLOSED \u2014 synchronised! The lab is back on the grid.","good"),wn("synced")):(xt.flash=1,C.shake=Rt.reducedMotion?0:.5,Qe.clack(),Qe.thunk(),Ql(30,i.why))}function yo(i){let e=Ue.panel(i);return e?{...e,lab:!0}:ev(i)}function wu(i){let e=yo(i);e&&(di("panel"),C.panelId=i,C.panelVersion=-1,Ce.panelTitle.textContent=e.title,Ce.panel.classList.remove("hidden"),e.onOpen?.(),tc(!0))}function tc(i=!1){if(!C.panelId)return;let e=yo(C.panelId),t=Ue.version*1e3+C.pver;if(i||C.panelVersion!==t)C.panelVersion=t,Ce.panelBody.innerHTML=`<div id="panelLive">${e.live?e.live():""}</div>${e.controls()}`;else if(e.live){let n=ot("panelLive");n&&(n.innerHTML=e.live())}}function Tn(i){let e=yo(C.panelId);e&&(Qe.click(),i.startsWith("usewheel")?C.inventory.includes("handwheel")?(Zg("handwheel"),Ue.action("wheel:1")):Tt("You have nothing that fits the spindle.","bad"):e.lab?(Ue.action(i),i==="pin:OK"&&Ue.s.sun.unlocked&&$n(ue.keypadTex,(t,n,s)=>to(t,n,s,!0))):e.onAct?.(i),C.pver++,tc(!0))}Ce.panelBody.addEventListener("click",i=>{let e=i.target.closest("[data-act]");!e||e.disabled||Tn(e.dataset.act)});function Ks(i){if(i){if(Qe.init(),Qe.click(),i==="pc"){C.termOpened=!0,di("terminal"),vn.open();return}i==="door"&&Ue.s.door.state==="open"||wu(i)}}var qs=new Zr;qs.far=3.2;var nv=new Ke(0,0);function iv(i,e){let t=new Ke(i/innerWidth*2-1,-(e/innerHeight)*2+1);qs.setFromCamera(t,Pt);let n=qs.intersectObjects(Jl,!1)[0];n?.object.userData.id&&Ks(n.object.userData.id)}function Au(){di("grid"),Lt.open()}function xo(){C.mode==="start"||C.mode==="end"||(C.mode==="terminal"&&vn.close(),C.mode==="grid"&&Lt.close(),di("hint"),Ru(),Ce.hint.classList.remove("hidden"))}function Ru(){let i=Jg(),e=C.hints.revealed[i.id]??0,t=[0,60,180];Ce.hint.querySelector(".hint-body").innerHTML=`
    ${i.tiers.slice(0,e).map((s,r)=>`<div class="hint-tier t${r}"><b>${["Nudge","Pointer","Solution"][r]}</b> ${s}</div>`).join("")||'<p class="note">Stuck? Reveal a hint for your current problem. Nudges are free; pointers and solutions cost time.</p>'}
    ${e<3?`<button class="btn ${e===2?"danger":""}" id="hintMore">${["Show a nudge (free)","Show a pointer (+1:00)","Show the solution (+3:00)"][e]}</button>`:""}`;let n=ot("hintMore");n&&(n.onclick=()=>{C.hints.revealed[i.id]=e+1,C.hints.used++,t[e]&&Ql(t[e],"hint"),Ru()})}function nc(){if(C.mode==="start"||C.mode==="end")return;C.mode==="terminal"&&vn.close(),C.mode==="grid"&&Lt.close(),di("journal");let i=Object.values(C.journal).sort((e,t)=>e.t-t.t);ot("jBadge")?.classList.remove("new"),Ce.journal.querySelector(".journal-body").innerHTML=`
    <div class="kv"><span>Time</span><span>${gn(ys())} (${gn(C.time.penalty)} penalties)</span><span>Hints used</span><span>${C.hints.used}</span>
    <span>Inventory</span><span>${C.inventory.map(e=>ec[e]).join(", ")||"\u2014"}</span></div>
    ${i.length?i.map(e=>`<div class="jentry"><b>${e.title}</b><div>${e.text.replace(/\n/g,"<br>")}</div></div>`).join(""):'<p class="note">Clues you read or hear are collected here automatically.</p>'}`,Ce.journal.classList.remove("hidden")}function xs(i=!1){C.mode!=="end"&&(i||di("menu"),Ce.menu.querySelector(".menu-actions").classList.toggle("hidden",i),Ce.menu.querySelector("h2").textContent=i?"Settings":"Menu",Ce.menu.querySelector("h3").classList.toggle("hidden",i),Ce.menu.querySelector(".settings-wrap").innerHTML=hu(Rt),uu(Ce.menu,Rt,Mu),Ce.menu.classList.remove("hidden"),Ce.menu.dataset.fromStart=i?"1":"")}Ce.menu.addEventListener("click",i=>{let e=i.target.closest("[data-menu]")?.dataset.menu;if(e){if(e==="resume"){if(Ce.menu.dataset.fromStart){Ce.menu.classList.add("hidden");return}Qe.init(),An()}e==="hint"&&(Ce.menu.classList.add("hidden"),xo()),e==="journal"&&(Ce.menu.classList.add("hidden"),nc()),e==="restart"&&confirm("Restart this room from the beginning? Your progress will be lost.")&&(Rn.del(Ni),location.search=qt?`?seed=${qt}&autostart=1`:"?autostart=1"),e==="title"&&(bs(),location.href=location.pathname)}});var sv={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",e:"KeyE",h:"KeyH",j:"KeyJ"," ":"Space",escape:"Escape",enter:"Enter",backspace:"Backspace",shift:"ShiftLeft",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"},Cu=i=>i.code||sv[i.key?.toLowerCase()]||i.key,rv=i=>/^\d$/.test(i.key)?Number(i.key):/^(?:Digit|Numpad)(\d)$/.test(i.code)?Number(i.code.slice(-1)):null;addEventListener("keydown",i=>{let e=Cu(i);if(!((i.target.tagName==="INPUT"||i.target.tagName==="SELECT")&&e!=="Escape")){if(C.mode==="start"&&e==="Escape"&&!Ce.menu.classList.contains("hidden")){Ce.menu.classList.add("hidden");return}if(!(C.mode==="start"||C.mode==="end")){if(e==="Escape"){if(C.mode==="grid"&&Lt.modalOpen()){Lt.$("gModal").classList.add("hidden");return}jg.includes(C.mode)?(i.preventDefault(),An()):(C.mode==="paused"||C.mode==="play"&&!document.pointerLockElement)&&xs();return}if(C.mode==="panel"){let t=C.panelId;if(e==="KeyE"&&!i.repeat){An();return}let n=rv(i),s=e==="Enter"||e==="NumpadEnter";t==="sunsim"&&!Ue.s.sun.unlocked&&(n!==null&&Tn(`pin:${n}`),e==="Backspace"&&Tn("pin:C"),s&&Tn("pin:OK")),t==="drawer"&&!C.drawer.open&&(n!==null&&Tn(`digit:${n}`),s&&Tn("dopen")),t==="board"&&!C.board.solved&&(n>=1&&n<=4&&Tn(`bt:${n-1}`),s&&Tn("btest")),t==="sync"&&e==="Space"&&(i.preventDefault(),i.repeat||Tn("sclose")),t==="door"&&s&&Tn("door:open");return}if(e==="KeyH"&&["play","paused","hint"].includes(C.mode)){C.mode==="hint"?An():xo();return}if(e==="KeyJ"&&["play","paused","journal"].includes(C.mode)){C.mode==="journal"?An():nc();return}C.mode==="play"&&(Xt[e]=!0,e==="Space"&&i.preventDefault(),e==="KeyE"&&!i.repeat&&Ks(C.target))}}});addEventListener("keyup",i=>{Xt[Cu(i)]=!1});function Iu(i,e){let t=.0022*Rt.sens;Le.yaw-=i*t,Le.pitch=Math.max(-1.45,Math.min(1.45,Le.pitch-e*t*(Rt.invertY?-1:1)))}addEventListener("mousemove",i=>{if(!(C.mode!=="play"||Yt||document.pointerLockElement!==Yn)){if(Zl>0){Zl--;return}Math.abs(i.movementX)>200||Math.abs(i.movementY)>200||Iu(i.movementX,i.movementY)}});Yn.addEventListener("mousedown",i=>{C.mode==="play"&&!Yt&&i.button===0&&Ks(C.target)});function gu(i,e){let t=Le.r;for(let n of Yg)if(n.enabled!==!1&&i>n.minX-t&&i<n.maxX+t&&e>n.minZ-t&&e<n.maxZ+t)return!0;return!1}function ov(i){let e=0,t=0;C.mode==="play"&&((Xt.KeyW||Xt.ArrowUp)&&(e+=1),(Xt.KeyS||Xt.ArrowDown)&&(e-=1),(Xt.KeyD||Xt.ArrowRight)&&(t+=1),(Xt.KeyA||Xt.ArrowLeft)&&(t-=1),Cn.enabled&&(e+=Cn.move.y,t+=Cn.move.x));let n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let s=Xt.ShiftLeft||Xt.ShiftRight||jl,r=s?5.2:3,o=Math.sin(Le.yaw),a=Math.cos(Le.yaw),l=(-o*e+a*t)*r,c=(-a*e-o*t)*r,h=1-Math.exp(-12*i);Le.vx+=(l-Le.vx)*h,Le.vz+=(c-Le.vz)*h;let f=Le.vx*i,u=Le.vz*i;gu(Le.x+f,Le.z)?Le.vx=0:Le.x+=f,gu(Le.x,Le.z+u)?Le.vz=0:Le.z+=u;let p=Math.hypot(Le.vx,Le.vz);p>.3&&(Le.bob+=i*p*2.6,Le.stepAcc+=p*i,Le.stepAcc>(s?.8:.65)&&(Le.stepAcc=0,Qe.step()));let g=Rt.fov+(s&&p>3.5&&!Rt.reducedMotion?6:0);Math.abs(Pt.fov-g)>.05&&(Pt.fov+=(g-Pt.fov)*Math.min(1,i*6),Pt.updateProjectionMatrix())}var Hl=new bn;function av(i){let e=Ue.s,t=Ue.f,n=(s,r,o)=>s.on?s.ph<0?"no phase":e.trip[s.ph]?`${Et[s.ph]} TRIPPED`:o?`${Et[s.ph]} \xB7 ${r.toFixed(1)} kW`:"standby":"off";switch(i){case"inv_pv":return n(e.inv.pv,t.pv,t.pvAvail>0);case"inv_bat":return n(e.inv.bat,t.bat,e.inv.bat.ph>=0&&t.live[e.inv.bat.ph])+` \xB7 ${e.inv.bat.mode}`;case"inv_fc":return n(e.inv.fc,t.fc,t.fcAvail>0);case"battery":return`SOC ${(e.bat.soc*100).toFixed(0)} %`;case"h2tank":return e.h2.wheel?`${(e.h2.level*xe.H2_KG*1e3).toFixed(0)} g \xB7 valve ${e.h2.valve?"open":"closed"}`:"handwheel missing";case"fuelcell":return e.fc.running?`running \xB7 ${t.fc.toFixed(1)} kW`:"stopped";case"electrolyzer":return e.elz.on?t.elz>0?"producing H\u2082":"no voltage":"off";case"sunsim":return e.sun.unlocked?e.sun.on?"lamps on":"unlocked":"locked";case"door":return{locked:Ue.doorReady()?"READY":"locked",opening:"opening\u2026",open:"open"}[e.door.state];case"bus":return e.trip.some(Boolean)?"TRIP!":`${t.live.filter(Boolean).length}/3 phases live`;case"drawer":return C.drawer.open?C.drawer.taken?"empty":"open":"locked";case"board":return C.board.solved?"OUT = 1":"";case"sync":return xt.closed?"closed \u2714":Lt.permit?"permit \u2714":"interlocked";case"exit":return C.exitOpen?"open":"locked";case"rec1":case"rec2":case"rec3":case"rec4":return C.heard[i]?"played":"new";default:return""}}function lv(){let i=C.target;if(C.target=null,C.mode==="play"){qs.setFromCamera(nv,Pt);let e=qs.intersectObjects(Jl,!1)[0],t=e?.object.userData.id;if(t&&!(t==="door"&&Ue.s.door.state==="open"&&e.object===ue.door)&&!(t==="exit"&&C.exitOpen)){C.target=t;let n=av(t);Ce.prompt.innerHTML=`<b>${Cn.enabled?"USE":"E"}</b> \xB7 ${e.object.userData.label}${n?` <span class="st">\xB7 ${n}</span>`:""}`,Hl.setFromObject(e.object.userData.root),Hl.expandByScalar(.02),Zn.box.copy(Hl)}}Zn.visible=!!C.target,Ce.prompt.style.display=C.target?"block":"none",Ce.cross.classList.toggle("active",!!C.target),i!==C.target&&C.target&&Qe.beep(2400,.015,"sine",.012)}var Vl=0,Gl=0,rn=0,cv=[0,1,2,0],hv=ue.labLights.map(()=>({on:!1,flicker:0})),Kl=Ue.s.door.state;function uv(i){let e=Ue.s,t=Ue.f;rn+=i;let n=C.stage==="synced"||C.stage==="won",s=(u,p,g)=>u+(p-u)*Math.min(1,i*g);ue.sunLampMat.emissiveIntensity=s(ue.sunLampMat.emissiveIntensity,e.sun.on?3:.05,3),ue.sunLight.intensity=s(ue.sunLight.intensity,e.sun.on?22:0,3),ue.sunCone.opacity=s(ue.sunCone.opacity,e.sun.on?.07:0,3);let r=0;ue.labLights.forEach((u,p)=>{let g=n||t.live[cv[p]],v=hv[p];g&&!v.on&&(v.flicker=.45),v.on=g,v.flicker=Math.max(0,v.flicker-i);let d=v.flicker>0&&Math.random()<.5?.15:1;u.light.intensity=v.flicker>0?9*d:s(u.light.intensity,g?9:0,6),u.mat.emissiveIntensity=g?1.6*d:.05,g&&r++}),ue.ctrlLights.forEach(u=>{u.light.intensity=s(u.light.intensity,n?11:0,2),u.mat.emissiveIntensity=n?1.4:.05});let o=yu-ys()<0;ue.emergency.forEach((u,p)=>{u.intensity=o?Math.sin(rn*7+p)>.6?.4:1.1:2.2}),ue.hemi.intensity=s(ue.hemi.intensity,.2+.45*(r/4)+(n?.5:0),3),ue.busbars.forEach((u,p)=>{u.material.emissive.set(e.trip[p]?Math.sin(rn*10)>0?"#ff0000":"#330000":Xn[p]),u.material.emissiveIntensity=e.trip[p]?1.5:.05+Math.min(3,t.load[p]*.6)}),ue.breakers.forEach((u,p)=>{u.position.y=e.trip[p]?.5:.6,u.material.color.set(e.trip[p]?13639712:2763306)});let a=(u,p)=>{u.material.emissive.set({off:"#111",idle:"#ffa020",run:"#20ff60",fault:"#ff2020"}[p]),u.material.emissiveIntensity=p==="off"?0:p==="fault"&&Math.sin(rn*8)<0?.2:2},l=(u,p)=>u.on?u.ph>=0&&e.trip[u.ph]?"fault":p?"run":"idle":"off";a(ue.invLeds.inv_pv,l(e.inv.pv,t.pvAvail>0&&e.inv.pv.ph>=0)),a(ue.invLeds.inv_bat,l(e.inv.bat,e.inv.bat.ph>=0&&t.live[e.inv.bat.ph])),a(ue.invLeds.inv_fc,l(e.inv.fc,t.fcAvail>0&&e.inv.fc.ph>=0));let c=Math.ceil(e.bat.soc*10-.001);ue.socLeds.forEach((u,p)=>{let g=p<c||t.bat<0&&p===c&&Math.sin(rn*6)>0;u.material.emissive.set(g?e.bat.soc<.25?"#ff3020":e.bat.soc<.5?"#ffb020":"#20ff60":"#111"),u.material.emissiveIntensity=g?1.8:0}),ue.elzGlow.material.emissiveIntensity=t.elz>0?1.5+Math.sin(rn*5)*.8:.05,ue.fcGlow.material.emissiveIntensity=t.fc>0?2:e.fc.running?.6:.05,ue.h2Bar.scale.y=Math.max(.001,e.h2.level),ue.valve.visible=e.h2.wheel,ue.valveTag.visible=!e.h2.wheel,ue.valve.rotation.z=s(ue.valve.rotation.z,e.h2.valve?Math.PI*1.5:0,4),ue.cat.body.scale.y=.6+Math.sin(rn*1.8)*.02,ue.cat.tail.rotation.z=Math.sin(rn*.7)*.15;let h=e.door.state==="open"?1.65:e.door.state==="opening"?1.65*Math.min(1,e.door.t/xe.DOOR_T):0;ue.door.position.x=s(ue.door.position.x,h,4),ue.doorCollider.enabled=ue.door.position.x<1.35,ue.doorLed.material.emissive.set(e.door.state==="open"?"#20ff60":e.door.state==="opening"?Math.sin(rn*12)>0?"#ffb020":"#ff2020":Ue.doorReady()?"#ffb020":"#ff2020"),Kl!=="open"&&e.door.state==="open"&&(C.shake=Rt.reducedMotion?0:.35),Kl=e.door.state,ue.exitDoor.position.z=s(ue.exitDoor.position.z,C.exitOpen?-6.4:-8,1.2),ue.exitCollider.enabled=ue.exitDoor.position.z<-6.7,ue.exitLed.material.emissive.set(C.exitOpen?"#20ff60":"#ff2020"),ue.drawer.position.z=s(ue.drawer.position.z,C.drawer.open?4.15:4.55,5),ue.drawerWheel.visible=!C.drawer.taken;for(let[u,p]of Object.entries(ue.recorders))p.material.emissive.set(C.heard[u]?"#20ff60":"#ff2020"),p.material.emissiveIntensity=C.heard[u]?.6:Math.sin(rn*4)>0?2:.2;ue.boardToggles.forEach((u,p)=>{u.rotation.x=C.board.bits[p]?-.5:.5}),ue.boardLed.material.emissive.set(C.board.solved?"#20ff60":"#330000"),ue.diagLeds.forEach((u,p)=>{let g=C.diag&&ut.binStr[p]==="1";u.material.emissive.set(g?"#ff3020":"#200505"),u.material.emissiveIntensity=g?2.2:1}),ue.rackLeds.forEach((u,p)=>{u.material.emissiveIntensity=Math.sin(rn*(3+p*.7)+p)>.2?1.5:.1});let f=xt.lamps();ue.syncLamps.forEach((u,p)=>{u.material.emissive.set("#ffb060"),u.material.emissiveIntensity=.05+f[p]*3}),ue.syncHandle.rotation.x=xt.closed?.6:0,Gl-=i,Le.z<-5&&Gl<=0&&(Gl=.05,$n(ue.syncTex,(u,p,g)=>zl(u,p,g,xt,{compact:!0}))),Vl-=i,Vl<=0&&(Vl=.25,dv())}var _s={};function dv(){let i=Ue.s,e=Ue.f,t=JSON.stringify([i.door.state,e.head.map(o=>o.toFixed(1)),i.door.t.toFixed(1),Rt.palette]);_s.door!==t&&(_s.door=t,$n(ue.doorScreenTex,(o,a)=>{o.fillStyle="#061009",o.fillRect(0,0,a,320),o.font=`bold 26px ${Fe.mono}`,o.textAlign="center";let l=Ue.doorReady();o.fillStyle=i.door.state==="open"?"#3eff7a":l?"#ffd24a":"#ff4a4a",o.fillText(i.door.state==="open"?"OPEN":i.door.state==="opening"?"OPENING":l?"READY":"LOCKED",a/2,36),o.font=`17px ${Fe.mono}`,o.fillStyle="#7fbf8f",o.fillText(`drive: ${xe.DOOR_P} kW / phase`,a/2,64),Et.forEach((c,h)=>{let f=100+h*56;o.textAlign="left",o.fillStyle=Xn[h],o.font=`bold 22px ${Fe.mono}`,o.fillText(c,14,f+16),o.fillStyle="#1a2a1e",o.fillRect(60,f,180,22),o.fillStyle=e.head[h]>=xe.DOOR_P?"#3eff7a":"#ff9a4a",o.fillRect(60,f,180*Math.max(0,Math.min(1,e.head[h]/6)),22),o.fillStyle="#fff",o.fillRect(60+180*xe.DOOR_P/6,f-3,2,28),o.fillStyle="#cfe",o.font=`15px ${Fe.mono}`,o.fillText(`${e.head[h].toFixed(1)} kW ${e.head[h]>=xe.DOOR_P?"\u2714":""}`,64,f+42)}),o.textAlign="center",o.fillStyle="#ffd24a",o.font=`18px ${Fe.mono}`,i.door.state==="opening"&&o.fillText(`${i.door.t.toFixed(1)} / ${xe.DOOR_T} s`,a/2,300)}));let n=Math.sin(rn*4)>0,s=C.stage+n;_s.pc!==s&&(_s.pc=s,$n(ue.pcScreenTex,o=>{o.fillStyle="#020c05",o.fillRect(0,0,512,320),o.fillStyle="#5dff8f",o.font=`20px ${Fe.mono}`,o.textAlign="left";let a=C.stage==="won"||C.stage==="synced"?["gridctl \u25B8 connected","","Q0: CLOSED","EXIT: UNLOCKED \u2714"]:C.stage==="permit"?["gridctl \u25B8 schedule OK","","reconnection permit \u2714","sync at tie panel Q0"]:["labctl-01 login:","","Solar Test Laboratory","running on UPS","",C.stage==="root"?"# root session active":"grid reconnection: root required"];a.forEach((l,c)=>o.fillText(l,24,40+c*30)),n&&o.fillRect(24+o.measureText(a[0]).width+8,24,11,20)}));let r=JSON.stringify([e.pv.toFixed(1),(i.bat.soc*100).toFixed(0),(i.h2.level*100).toFixed(0),i.fc.running,C.stage,e.load.map(o=>o.toFixed(1)),Rt.palette]);_s.wall!==r&&(_s.wall=r,$n(ue.wallScreenTex,o=>{o.fillStyle="#07111c",o.fillRect(0,0,768,400),o.fillStyle="#ffd24a",o.font=`bold 34px ${Fe.sans}`,o.textAlign="left",o.fillText("SOLAR TEST LAB \xB7 GRID STATUS",30,52),o.font=`24px ${Fe.mono}`;let a=C.stage==="synced"||C.stage==="won";[["Public grid",a?"CONNECTED \u2714":"LOST (storm)"],["PV (CPV rig)",`${e.pv.toFixed(2)} kW`],["Battery",`${(i.bat.soc*100).toFixed(0)} % SOC`],["H\u2082 tank",`${(i.h2.level*xe.H2_KG*1e3).toFixed(0)} g`],["Fuel cell",i.fc.running?"RUNNING":"STOPPED"],["Reconnection",a?"DONE":C.stage==="permit"?"PERMIT \u2714 \u2014 sync Q0":"root required"]].forEach(([c,h],f)=>{o.fillStyle="#9fb0c0",o.fillText(c,30,105+f*44),o.fillStyle=a||f?"#5dff8f":"#ff6b77",o.fillText(h,300,105+f*44)}),Et.forEach((c,h)=>{let f=Math.min(200,e.load[h]*35);o.fillStyle=Xn[h],o.fillRect(600+h*50,330-f,40,f+2),o.fillText(c,602+h*50,370)})}))}function fv(){let i=Ue.s,e=Ue.f;Ce.objective.innerHTML=`<span class="lbl">Objective</span>${Kg()}`,Ce.busHud.style.display=C.stage==="lab"?"":"none",C.stage==="lab"&&(Ce.busHud.innerHTML='<div style="color:#ffd24a;margin-bottom:4px">MAIN BUS \xB7 headroom</div>'+Et.map((n,s)=>`<div class="row"><span style="color:${Xn[s]}">${n}${i.trip[s]?' <span class="bad">TRIP</span>':e.live[s]?"":' <span style="color:#778">dead</span>'}</span><span>${e.live[s]?e.head[s].toFixed(2)+" kW":"\u2014"} ${e.head[s]>=xe.DOOR_P?"\u2714":""}</span></div>
        <div class="bar"><i style="width:${Math.max(0,Math.min(100,e.head[s]/6*100))}%;background:${e.head[s]>=xe.DOOR_P?"#3ecf7a":Xn[s]}"></i><span class="mark" style="left:50%"></span></div>`).join("")+`<div class="row"><span>Battery</span><span>${(i.bat.soc*100).toFixed(0)} %</span></div><div class="row"><span>H\u2082 tank</span><span>${(i.h2.level*xe.H2_KG*1e3).toFixed(0)} g</span></div>`);let t=yu-ys();Ce.timer.innerHTML=`\u23F1 ${t>=0?gn(t):'<span class="bad">'+gn(t)+"</span>"} <span class="sub">${t>=0?"emergency light":"overtime"}</span>`}function pv(i){let e=Ue.s,t=Ue.f,n=C.stage==="synced"||C.stage==="won";Qe.update(Pt,{hum:Math.min(1,t.load.reduce((s,r)=>s+r,0)/9)+(n?.5:0),fan:t.fc>0?1:e.fc.running?.4:0,bubbles:t.elz>0?1:0,ballast:e.sun.on?1:0,motor:e.door.state==="opening"?1:Math.abs(ue.exitDoor.position.z-(C.exitOpen?-6.4:-8))>.05?.8:0},i)}function bs(){C.mode==="start"||C.stage==="won"||C.noSave||Rn.set(Ni,{v:2,seed:qt,stage:C.stage,at:Date.now(),player:{x:Le.x,z:Le.z,yaw:Le.yaw,pitch:Le.pitch},sim:Ue.s,term:vn.serialize(),grid:Lt.serialize(),sync:xt.serialize(),G:{inventory:C.inventory,journal:C.journal,heard:C.heard,hints:C.hints,time:C.time,drawer:C.drawer,board:C.board,diag:C.diag,f2seen:C.f2seen,exitOpen:C.exitOpen,catPets:C.catPets,termOpened:C.termOpened,gridResult:C.gridResult}})}function Pu(i){Object.assign(Ue.s,JSON.parse(JSON.stringify(i.sim))),Ue.s.door.state==="opening"&&(Ue.s.door.state="locked",Ue.s.door.t=0),Ue.version++,Ue.f=Ue.compute(),Kl=Ue.s.door.state,mo=Ue.s.door.state==="open",Object.assign(Le,i.player),vn.restore(i.term),Lt.restore(i.grid),xt.restore(i.sync),Object.assign(C,i.G),C.stage=i.stage,Ue.s.sun.unlocked&&$n(ue.keypadTex,(e,t,n)=>to(e,t,n,!0)),ue.door.position.x=Ue.s.door.state==="open"?1.65:0,ue.exitDoor.position.z=C.exitOpen?-6.4:-8,ue.drawer.position.z=C.drawer.open?4.15:4.55,Tu(),C.stage==="synced"&&(ue.windowMat.map=ue.dawnTex,ue.windowMat.needsUpdate=!0,ue.outsideMat.map=ue.dawnTex,ue.outsideMat.needsUpdate=!0),vo()}addEventListener("pagehide",bs);function mv(){let i=Rn.get(Ni),e=Rn.get(Yl)||{},t=xu(),n=ot("startCard");n.innerHTML=`<h1>${eo.title}</h1>
    <p class="lead">${eo.lead}</p><p>${eo.body}</p>
    <div class="controls-help">${Yt?"<div>Left thumb: move</div><div>Right thumb: look</div><div>Tap an object / USE: interact</div><div>\u{1F4A1} hints \xB7 \u{1F4D3} journal</div>":"<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move \xB7 <kbd>Shift</kbd> run</div><div><kbd>Mouse</kbd> look</div><div><kbd>E</kbd>/<kbd>Click</kbd> use</div><div><kbd>H</kbd> hint</div><div><kbd>J</kbd> journal</div><div><kbd>Esc</kbd> menu</div>"}</div>
    <div class="start-btns">
      ${i&&i.stage!=="won"?`<button class="btn big" data-start="continue">Continue <span class="small">(${i.seed?"daily "+i.seed:"classic"} \xB7 ${gn(i.G.time.elapsed+i.G.time.penalty)})</span></button>`:""}
      <button class="btn big ${i?"alt":""}" data-start="classic">New game \xB7 Classic room</button>
      <button class="btn big alt" data-start="daily">Daily room \xB7 ${String(t).slice(6)}.${String(t).slice(4,6)}.</button>
      <button class="btn" data-start="settings">\u2699 Settings</button>
    </div>
    ${Object.keys(e).length?`<p class="note">Best: ${Object.entries(e).map(([s,r])=>`${s==="0"?"Classic":"Daily "+s} ${gn(r.time)} (${r.rank})`).join(" \xB7 ")}</p>`:""}
    <p class="note">Every code in a daily room is different. Progress is saved automatically in this browser.</p>`,n.querySelectorAll("[data-start]").forEach(s=>s.addEventListener("click",()=>{let r=s.dataset.start;if(Qe.init(),r==="settings"){xs(!0);return}if(r==="continue"){if((i.seed||0)!==qt){location.search=`?seed=${i.seed}&continue=1`;return}Pu(i),vu(!1);return}let o=r==="daily"?t:0;if(Rn.del(Ni),o!==qt){location.search=o?`?seed=${o}&autostart=1`:"?autostart=1";return}vu(!0)})),Ce.start.classList.remove("hidden")}function vu(i){Ce.start.classList.add("hidden"),Ce.hud.classList.remove("hidden"),C.mode="paused",Cn.enable(Yt),Yt?Zs():_o(),Qe.init(),i?(Qe.good(),Tt(qt?`Daily room ${qt}: every code is different today.`:"Find a way out. The emergency light won't last forever.")):Tt("Welcome back."),vo()}function Lu(){wn("won"),di("end");let i=ys(),e=Zh.find(([c])=>i/60<c)[1],t=Rn.get(Yl)||{},n=String(qt),s=!t[n]||i<t[n].time;s&&(t[n]={time:i,rank:e},Rn.set(Yl,t)),Rn.del(Ni);let r=C.gridResult,o=[[C.hints.used===0,"No hints"],[Ue.s.stats.trips===0,"No breaker trips"],[r?.stars===3,"Grid wizard (3\u2605)"],[i<30*60,"Under 30 minutes"],[C.catPets>0,"Cat person"],[Object.keys(C.heard).length===4,"Heard every memo"],[C.board.fails===0,"Clean logic"]],a=Object.entries(C.time.splits).filter(([c])=>fu[c]).map(([c,h])=>`<span>${fu[c]}</span><span>${gn(h)}</span>`).join(""),l=`\u26A1 Power Lab Escape \xB7 ${qt?"Daily "+qt:"Classic"} \xB7 ${gn(i)} \xB7 ${C.hints.used} hints \xB7 grid ${r?"\u2605".repeat(r.stars):"\u2013"} \xB7 "${e}"`;ot("endCard").innerHTML=`<h1>\u{1F305} YOU ESCAPED</h1>
    <p class="lead">Dawn. The storm has passed and the lab hums on the grid again. Rank: <b>${e}</b>${s?" \xB7 new personal best!":""}</p>
    <div class="res">${a}<span class="tot">Total (incl. ${gn(C.time.penalty)} penalties)</span><span class="tot">${gn(i)}</span>
      <span>Hints used</span><span>${C.hints.used}</span><span>Breaker trips</span><span>${Ue.s.stats.trips}</span>
      ${r?`<span>Dispatch score</span><span>${"\u2605".repeat(r.stars)}${"\u2606".repeat(3-r.stars)} ${(r.ratio*100).toFixed(0)} %</span>`:""}</div>
    <div class="ach">${o.map(([c,h])=>`<span class="${c?"got":""}">${c?"\u{1F3C6}":"\xB7"} ${h}</span>`).join("")}</div>
    <div class="start-btns">
      <button class="btn big" id="shareBtn">Copy result</button>
      <button class="btn big alt" id="dailyBtn">Play the daily room</button>
      <button class="btn" id="againBtn">Play classic again</button>
      <button class="btn" id="keepBtn">Keep exploring</button>
    </div>`,Ce.end.classList.remove("hidden"),Qe.fanfare(),ot("shareBtn").onclick=()=>{navigator.clipboard?.writeText(l).then(()=>Tt("Result copied!","good"),()=>Tt(l))},ot("dailyBtn").onclick=()=>{location.search=`?seed=${xu()}&autostart=1`},ot("againBtn").onclick=()=>{location.search="?autostart=1"},ot("keepBtn").onclick=()=>{Ce.end.classList.add("hidden"),C.mode="paused",An()}}var _u=performance.now(),Wl=0,$l=5,mo=Ue.s.door.state==="open";function Du(i){let e=Math.min(.1,(i-_u)/1e3);_u=i,!["start","menu","end"].includes(C.mode)&&(Ue.tick(e),xt.tick(e),C.stage!=="won"&&(C.time.elapsed+=e));for(let r of Ue.events.splice(0))C.stage!=="lab"&&Le.z<-5||(Tt(r.msg,r.kind),r.sfx?Qe[r.sfx]?.():r.kind==="bad"?Qe.bad():r.kind==="good"&&Qe.good());if(Ue.s.door.state==="open"&&!mo&&(mo=!0,wn("control"),Tt("The booth door slides open. On to the control room!","good")),C.board.solved&&!C.boardDrawn&&(C.boardDrawn=!0,$n(ue.boardSegTex,(r,o,a)=>Fl(r,o,a,ut.f3,!0))),(C.mode==="play"||C.mode==="paused")&&ov(e),C.stage==="synced"&&C.mode==="play"){let r=ue.exitTrigger;Le.x>r.minX&&Le.x<r.maxX&&Le.z>r.minZ&&Le.z<r.maxZ&&Lu()}let n=Rt.reducedMotion?0:Math.sin(Le.bob)*.03*Math.min(1,Math.hypot(Le.vx,Le.vz)/3);C.shake=Math.max(0,C.shake-e);let s=C.shake*.05;Pt.position.set(Le.x+(Math.random()-.5)*s,Le.eye+n+(Math.random()-.5)*s,Le.z+(Math.random()-.5)*s),Pt.rotation.set(Le.pitch,Le.yaw,0),C.mode==="start"&&(Pt.position.set(Math.sin(i/9e3)*2,1.9,2.8),Pt.rotation.set(-.12,Math.sin(i/9e3)*.5,0)),lv(),uv(e),pv(e),C.mode==="panel"&&yo(C.panelId)?.anim?.(e),Wl-=e,Wl<=0&&(Wl=.2,fv(),C.mode==="panel"&&tc()),Xs>0&&(Xs-=e,Xs<=0&&Su()),$l-=e,$l<=0&&($l=5,bs()),C.mode!=="grid"&&In.render(Ys,Pt),requestAnimationFrame(Du)}requestAnimationFrame(Du);function Xl(){Ce.start.classList.add("hidden"),Ce.hud.classList.remove("hidden"),C.mode="paused",Cn.enable(Yt),Ce.resume.classList.remove("hidden")}Ce.resume.textContent=Yt?"\u25B6 Tap to play":"\u25B6 Click to play";var ql=Rn.get(Ni),fo=po.get("skip");if(fo){C.noSave=!0;let i=Ue.s;Object.assign(i.sun,{unlocked:!0,on:!0}),i.door.state="open",mo=!0,ue.door.position.x=1.65,wn("control"),Le.z=-7,Le.yaw=0,Xl(),fo==="terminal"&&(di("terminal"),vn.open()),fo==="grid"&&(vn.stack.push({user:"root",cwd:"/root"}),wn("root"),Au()),fo==="sync"&&(wn("root"),Lt.permit=!0,wn("permit"),Le.x=3.6,Le.z=-10.6,Le.yaw=-Math.PI/2)}else po.get("continue")&&ql&&(ql.seed||0)===qt?(Pu(ql),Xl(),Tt("Welcome back.")):po.get("autostart")?(Rn.del(Ni),Xl(),Tt(qt?`Daily room ${qt}: every code is different today.`:"Find a way out. The emergency light won't last forever.")):mv();window.__game={player:Le,sim:Ue,G:C,P:ut,interact:Ks,terminal:vn,grid:Lt,sync:xt,refs:ue,openPanel:wu,setStage:wn,win:Lu,save:bs};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

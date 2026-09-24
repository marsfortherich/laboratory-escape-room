(()=>{var Kc="170";var op=0,ru=1,lp=2;var vd=1,Jc=2,gi=3,Fi=0,cn=1,ln=2,Nt=0,Cs=1,Qn=2,au=3,ou=4,jc=5,In=100,cp=101,hp=102,up=103,dp=104,Ws=200,fp=201,pp=202,mp=203,Rl=204,Cl=205,to=206,gp=207,no=208,vp=209,yp=210,_p=211,xp=212,bp=213,Mp=214,Pl=0,Il=1,Dl=2,Ls=3,Ll=4,Nl=5,Ul=6,Ol=7,yd=0,Sp=1,Tp=2,Oi=0,Qc=1,eh=2,th=3,Pr=4,Ep=5,nh=6,ih=7;var _d=300,Ns=301,Us=302,Fl=303,kl=304,io=306,Yt=1e3,ts=1001,Bl=1002,hn=1003,wp=1004;var Kr=1005;var jn=1006,Xo=1007;var ns=1008;var Vn=1009,xd=1010,bd=1011,Mr=1012,sh=1013,is=1014,yi=1015,Lt=1016,rh=1017,ah=1018,ki=1020,Md=35902,Sd=1021,Td=1022,En=1023,Ed=1024,wd=1025,Ps=1026,Bi=1027,Ad=1028,oh=1029,Rd=1030,lh=1031;var ch=1033,Sa=33776,Ta=33777,Ea=33778,wa=33779,zl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,$l=37492,Xl=37496,ql=37808,Yl=37809,Zl=37810,Kl=37811,Jl=37812,jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,Aa=36492,oc=36494,lc=36495,Cd=36283,cc=36284,hc=36285,uc=36286;var Ra=2300,dc=2301,qo=2302,lu=2400,cu=2401,hu=2402;var Ap=3200,hh=3201;var uh=0,Rp=1,Jn="",zt="srgb",$s="srgb-linear",so="linear",Mt="srgb";var ps=7680;var uu=519,Cp=512,Pp=513,Ip=514,Pd=515,Dp=516,Lp=517,Np=518,Up=519,du=35044;var fu="300 es",_i=2e3,Ca=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yo=Math.PI/180,Pa=180/Math.PI;function Ir(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function Op(i,e){return(i%e+e)%e}function Zo(i,e,t){return(1-t)*i+t*e}function hr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],E=s[1],_=s[4],x=s[7],P=s[2],M=s[5],T=s[8];return r[0]=a*v+o*E+l*P,r[3]=a*p+o*_+l*M,r[6]=a*m+o*x+l*T,r[1]=c*v+h*E+u*P,r[4]=c*p+h*_+u*M,r[7]=c*m+h*x+u*T,r[2]=d*v+f*E+g*P,r[5]=d*p+f*_+g*M,r[8]=d*m+f*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ko=new st;function Id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fp(){let i=Ia("canvas");return i.style.display="block",i}var pu={};function vr(i){i in pu||(pu[i]=!0,console.warn(i))}function kp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Bp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ut={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=Is(i.r),i.g=Is(i.g),i.b=Is(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?so:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mu=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],vu=[.3127,.329],yu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ut.define({[$s]:{primaries:mu,whitePoint:vu,transfer:so,toXYZ:yu,fromXYZ:_u,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:mu,whitePoint:vu,transfer:Mt,toXYZ:yu,fromXYZ:_u,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});var ms,fc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=Ia("canvas")),ms.width=e.width,ms.height=e.height;let n=ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ia("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hp=0,Da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jo(s[a].image)):r.push(Jo(s[a]))}else r=Jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vp=0,xn=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ts,s=ts,r=jn,a=ns,o=En,l=Vn,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Ir(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=_d;xn.DEFAULT_ANISOTROPY=1;var Tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,x=(f+1)/2,P=(m+1)/2,M=(h+d)/4,T=(u+v)/4,D=(g+p)/4;return _>x&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=T/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=D/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Et=class extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},La=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let p=1-o,m=l*d+c*f+h*g+u*v,E=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let P=Math.sqrt(_),M=Math.atan2(P,m*E);p=Math.sin(p*M)/P,o=Math.sin(o*M)/P}let x=o*E;if(l=l*p+d*x,c=c*p+f*x,h=h*p+g*x,u=u*p+v*x,p===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jo=new N,xu=new Hi,ei=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),jr.subVectors(this.max,ur),gs.subVectors(e.a,ur),vs.subVectors(e.b,ur),ys.subVectors(e.c,ur),Pi.subVectors(vs,gs),Ii.subVectors(ys,vs),Xi.subVectors(gs,ys);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-Xi.z,Xi.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,Xi.z,0,-Xi.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-Xi.y,Xi.x,0];return!Qo(t,gs,vs,ys,jr)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,gs,vs,ys,jr))?!1:(Qr.crossVectors(Pi,Ii),t=[Qr.x,Qr.y,Qr.z],Qo(t,gs,vs,ys,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new N,new N,new N,new N,new N,new N,new N,new N],Bn=new N,Jr=new ei,gs=new N,vs=new N,ys=new N,Pi=new N,Ii=new N,Xi=new N,ur=new N,jr=new N,Qr=new N,qi=new N;function Qo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Gp=new ei,dr=new N,el=new N,ss=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(el)),this.expandByPoint(dr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new N,tl=new N,ea=new N,Di=new N,nl=new N,ta=new N,il=new N,Os=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tl.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(tl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=Di.dot(this.direction),l=-Di.dot(ea),c=Di.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tl).addScaledVector(ea,d),f}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){nl.subVectors(t,e),ta.subVectors(n,e),il.crossVectors(nl,ta);let a=this.direction.dot(il),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);let l=o*this.direction.dot(ta.crossVectors(Di,ta));if(l<0)return null;let c=o*this.direction.dot(nl.cross(Di));if(c<0||l+c>a)return null;let h=-o*Di.dot(il);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,$p)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Li.crossVectors(n,Sn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Li.crossVectors(n,Sn)),Li.normalize(),na.crossVectors(Sn,Li),s[0]=Li.x,s[4]=na.x,s[8]=Sn.x,s[1]=Li.y,s[5]=na.y,s[9]=Sn.y,s[2]=Li.z,s[6]=na.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],E=n[3],_=n[7],x=n[11],P=n[15],M=s[0],T=s[4],D=s[8],b=s[12],y=s[1],C=s[5],I=s[9],F=s[13],H=s[2],Z=s[6],W=s[10],ae=s[14],X=s[3],J=s[7],oe=s[11],me=s[15];return r[0]=a*M+o*y+l*H+c*X,r[4]=a*T+o*C+l*Z+c*J,r[8]=a*D+o*I+l*W+c*oe,r[12]=a*b+o*F+l*ae+c*me,r[1]=h*M+u*y+d*H+f*X,r[5]=h*T+u*C+d*Z+f*J,r[9]=h*D+u*I+d*W+f*oe,r[13]=h*b+u*F+d*ae+f*me,r[2]=g*M+v*y+p*H+m*X,r[6]=g*T+v*C+p*Z+m*J,r[10]=g*D+v*I+p*W+m*oe,r[14]=g*b+v*F+p*ae+m*me,r[3]=E*M+_*y+x*H+P*X,r[7]=E*T+_*C+x*Z+P*J,r[11]=E*D+_*I+x*W+P*oe,r[15]=E*b+_*F+x*ae+P*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+p*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],E=u*p*c-v*d*c+v*l*f-o*p*f-u*l*m+o*d*m,_=g*d*c-h*p*c-g*l*f+a*p*f+h*l*m-a*d*m,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*m+a*u*m,P=g*u*l-h*v*l-g*o*d+a*v*d+h*o*p-a*u*p,M=t*E+n*_+s*x+r*P;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return e[0]=E*T,e[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*T,e[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*m+n*l*m)*T,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*T,e[4]=_*T,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*T,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*m-t*l*m)*T,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*T,e[8]=x*T,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*m-t*u*m)*T,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*m+t*o*m)*T,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=P*T,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*p+t*u*p)*T,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*p-t*o*p)*T,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,p=a*u,m=o*u,E=l*c,_=l*h,x=l*u,P=n.x,M=n.y,T=n.z;return s[0]=(1-(v+m))*P,s[1]=(f+x)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+m))*M,s[6]=(p+E)*M,s[7]=0,s[8]=(g+_)*T,s[9]=(p-E)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),a=_s.set(s[4],s[5],s[6]).length(),o=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);let c=1/r,h=1/a,u=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_i){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===_i)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ca)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_i){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,g,v;if(o===_i)g=(a+r)*u,v=-2*u;else if(o===Ca)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_s=new N,zn=new ft,Wp=new N(0,0,0),$p=new N(1,1,1),Li=new N,na=new N,Sn=new N,bu=new ft,Mu=new Hi,ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xp=0,Su=new N,xs=new Hi,fi=new ft,ia=new N,fr=new N,qp=new N,Yp=new Hi,Tu=new N(1,0,0),Eu=new N(0,1,0),wu=new N(0,0,1),Au={type:"added"},Zp={type:"removed"},bs={type:"childadded",child:null},sl={type:"childremoved",child:null},tn=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new ti,n=new Hi,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new st}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(fr,ia,this.up):fi.lookAt(ia,fr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(fi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};tn.DEFAULT_UP=new N(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new N,pi=new N,rl=new N,mi=new N,Ms=new N,Ss=new N,Ru=new N,al=new N,ol=new N,ll=new N,cl=new Tt,hl=new Tt,ul=new Tt,Qi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),pi.subVectors(n,t),rl.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(pi),l=Hn.dot(rl),c=pi.dot(pi),h=pi.dot(rl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cl,r.x),a.addScaledVector(hl,r.y),a.addScaledVector(ul,r.z),a}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),pi.subVectors(e,t),Hn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Hn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),Ss.subVectors(r,n),al.subVectors(e,n);let l=Ms.dot(al),c=Ss.dot(al);if(l<=0&&c<=0)return t.copy(n);ol.subVectors(e,s);let h=Ms.dot(ol),u=Ss.dot(ol);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ms,a);ll.subVectors(e,r);let f=Ms.dot(ll),g=Ss.dot(ll);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Ru.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ru,o);let m=1/(p+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},sa={h:0,s:0,l:0};function dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Op(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dl(a,r,e+1/3),this.g=dl(a,r,e),this.b=dl(a,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ut.fromWorkingColorSpace(on.copy(this),e),Math.round(Qt(on.r*255,0,255))*65536+Math.round(Qt(on.g*255,0,255))*256+Math.round(Qt(on.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(on.copy(this),t);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=zt){ut.fromWorkingColorSpace(on.copy(this),e);let t=on.r,n=on.g,s=on.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(sa);let n=Zo(Ni.h,sa.h,t),s=Zo(Ni.s,sa.s,t),r=Zo(Ni.l,sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Ce;Ce.NAMES=Dd;var Kp=0,ni=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Ir(),this.name="",this.blending=Cs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zt=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new N,ra=new pe,pn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=du,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),s=_n(s,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==du&&(e.usage=this.usage),e}};var Na=class extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ua=class extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jp=0,Pn=new ft,fl=new tn,Ts=new N,Tn=new ei,pr=new ei,qt=new N,Ut=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?Ua:Na)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Tn.min,pr.min),Tn.expandByPoint(qt),qt.addVectors(Tn.max,pr.max),Tn.expandByPoint(qt)):(Tn.expandByPoint(pr.min),Tn.expandByPoint(pr.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),qt.add(Ts)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new N,l[D]=new N;let c=new N,h=new N,u=new N,d=new pe,f=new pe,g=new pe,v=new N,p=new N;function m(D,b,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[D].add(v),o[b].add(v),o[y].add(v),l[D].add(p),l[b].add(p),l[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,b=E.length;D<b;++D){let y=E[D],C=y.start,I=y.count;for(let F=C,H=C+I;F<H;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new N,x=new N,P=new N,M=new N;function T(D){P.fromBufferAttribute(s,D),M.copy(P);let b=o[D];_.copy(b),_.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(M,b);let C=x.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,C)}for(let D=0,b=E.length;D<b;++D){let y=E[D],C=y.start,I=y.count;for(let F=C,H=C+I;F<H;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new ft,Yi=new Os,aa=new ss,Pu=new N,oa=new N,la=new N,ca=new N,pl=new N,ha=new N,Iu=new N,ua=new N,Pe=class extends tn{constructor(e=new Ut,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(pl.fromBufferAttribute(u,e),a?ha.addScaledVector(pl,h):ha.addScaledVector(pl.sub(t),h))}t.add(ha)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(aa.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(aa,Pu)===null||Yi.origin.distanceToSquared(Pu)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=E,P=_;x<P;x+=3){let M=o.getX(x),T=o.getX(x+1),D=o.getX(x+2);s=da(this,m,e,n,c,h,u,M,T,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let E=o.getX(p),_=o.getX(p+1),x=o.getX(p+2);s=da(this,a,e,n,c,h,u,E,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=E,P=_;x<P;x+=3){let M=x,T=x+1,D=x+2;s=da(this,m,e,n,c,h,u,M,T,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let E=p,_=p+1,x=p+2;s=da(this,a,e,n,c,h,u,E,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function jp(i,e,t,n,s,r,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Fi,o),l===null)return null;ua.copy(o),ua.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:i}}function da(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,oa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);let h=jp(i,e,t,n,oa,la,ca,Iu);if(h){let u=new N;Qi.getBarycoord(Iu,oa,la,ca,u),s&&(h.uv=Qi.getInterpolatedAttribute(s,o,l,c,u,new pe)),r&&(h.uv1=Qi.getInterpolatedAttribute(r,o,l,c,u,new pe)),a&&(h.normal=Qi.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Qi.getNormal(oa,la,ca,d.normal),h.face=d,h.barycoord=u}return h}var bi=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function g(v,p,m,E,_,x,P,M,T,D,b){let y=x/T,C=P/D,I=x/2,F=P/2,H=M/2,Z=T+1,W=D+1,ae=0,X=0,J=new N;for(let oe=0;oe<W;oe++){let me=oe*C-F;for(let Se=0;Se<Z;Se++){let Ke=Se*y-I;J[v]=Ke*E,J[p]=me*_,J[m]=H,c.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[m]=M>0?1:-1,h.push(J.x,J.y,J.z),u.push(Se/T),u.push(1-oe/D),ae+=1}}for(let oe=0;oe<D;oe++)for(let me=0;me<T;me++){let Se=d+me+Z*oe,Ke=d+me+Z*(oe+1),j=d+(me+1)+Z*(oe+1),he=d+(me+1)+Z*oe;l.push(Se,Ke,he),l.push(Ke,j,he),X+=6}o.addGroup(f,X,b),f+=X,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Fs(i[t]);for(let s in n)e[s]=n[s]}return e}function Qp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ld(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var un={clone:Fs,merge:fn},e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dt=class extends ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Oa=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new N,Du=new pe,Lu=new pe,en=class extends Oa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Lu),t.subVectors(Lu,Du)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=-90,ws=1,gc=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Es,ws,e,t);s.layers=this.layers,this.add(s);let r=new en(Es,ws,e,t);r.layers=this.layers,this.add(r);let a=new en(Es,ws,e,t);a.layers=this.layers,this.add(a);let o=new en(Es,ws,e,t);o.layers=this.layers,this.add(o);let l=new en(Es,ws,e,t);l.layers=this.layers,this.add(l);let c=new en(Es,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fa=class extends xn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vc=class extends Et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new dt({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Nt});r.uniforms.tEquirect.value=t;let a=new Pe(s,r),o=t.minFilter;return t.minFilter===ns&&(t.minFilter=jn),new gc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ml=new N,n0=new N,i0=new st,vi=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ml.subVectors(n,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||i0.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new ss,fa=new N,Tr=class{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],E=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,p-f,x-m).normalize(),n[1].setComponents(l+r,d+c,p+f,x+m).normalize(),n[2].setComponents(l+a,d+h,p+g,x+E).normalize(),n[3].setComponents(l-a,d-h,p-g,x-E).normalize(),n[4].setComponents(l-o,d-u,p-v,x-_).normalize(),t===_i)n[5].setComponents(l+o,d+u,p+v,x+_).normalize();else if(t===Ca)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fa.x=s.normal.x>0?e.max.x:e.min.x,fa.y=s.normal.y>0?e.max.y:e.min.y,fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function s0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dn=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let E=m*d-a;for(let _=0;_<c;_++){let x=_*u-r;g.push(x,-E,0),v.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){let _=E+c*m,x=E+c*(m+1),P=E+1+c*(m+1),M=E+1+c*m;f.push(_,x,M),f.push(x,P,M)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a0=`#ifdef USE_ALPHAHASH
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
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P0=`vec3 transformedNormal = objectNormal;
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
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K0=`uniform bool receiveShadow;
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
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,Tg=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Og=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:r0,alphahash_pars_fragment:a0,alphamap_fragment:o0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:v0,iridescence_fragment:y0,bumpmap_pars_fragment:_0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:S0,color_fragment:T0,color_pars_fragment:E0,color_pars_vertex:w0,color_vertex:A0,common:R0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:P0,displacementmap_pars_vertex:I0,displacementmap_vertex:D0,emissivemap_fragment:L0,emissivemap_pars_fragment:N0,colorspace_fragment:U0,colorspace_pars_fragment:O0,envmap_fragment:F0,envmap_common_pars_fragment:k0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:J0,envmap_vertex:H0,fog_vertex:V0,fog_pars_vertex:G0,fog_fragment:W0,fog_pars_fragment:$0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:Z0,lights_pars_begin:K0,lights_toon_fragment:j0,lights_toon_pars_fragment:Q0,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:am,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:vm,morphcolor_vertex:ym,morphnormal_vertex:_m,morphtarget_pars_vertex:xm,morphtarget_vertex:bm,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:Tm,normal_pars_vertex:Em,normal_vertex:wm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Im,opaque_fragment:Dm,packing:Lm,premultiplied_alpha_fragment:Nm,project_vertex:Um,dithering_fragment:Om,dithering_pars_fragment:Fm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:$m,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Zm,tonemapping_fragment:Km,tonemapping_pars_fragment:Jm,transmission_fragment:jm,transmission_pars_fragment:Qm,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:ag,backgroundCube_frag:og,cube_vert:lg,cube_frag:cg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:dg,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:vg,meshbasic_vert:yg,meshbasic_frag:_g,meshlambert_vert:xg,meshlambert_frag:bg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:Tg,meshnormal_frag:Eg,meshphong_vert:wg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:Dg,points_frag:Lg,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Og,sprite_frag:Fg},xe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Kn={basic:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:fn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:fn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:fn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:fn([xe.points,xe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:fn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:fn([xe.common,xe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:fn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:fn([xe.sprite,xe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:fn([xe.common,xe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:fn([xe.lights,xe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Kn.physical={uniforms:fn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var pa={r:0,b:0,g:0},Ki=new ti,kg=new ft;function Bg(i,e,t,n,s,r,a){let o=new Ce(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?t:e).get(_)),_}function v(E){let _=!1,x=g(E);x===null?m(o,l):x&&x.isColor&&(m(x,1),_=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===io)?(h===void 0&&(h=new Pe(new bi(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:Fs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ki.copy(_.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ki)),h.material.toneMapped=ut.getTransfer(x.colorSpace)!==Mt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Pe(new Dn(2,2),new dt({name:"BackgroundMaterial",uniforms:Fs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ut.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,_){E.getRGB(pa,Ld(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(E,_=1){o.set(E),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:v,addToRenderList:p}}function zg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,C,I,F,H){let Z=!1,W=u(F,I,C);r!==W&&(r=W,c(r.object)),Z=f(y,F,I,H),Z&&g(y,F,I,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(y,C,I,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,I){let F=I.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[C.id];Z===void 0&&(Z={},H[C.id]=Z);let W=Z[F];return W===void 0&&(W=d(l()),Z[F]=W),W}function d(y){let C=[],I=[],F=[];for(let H=0;H<t;H++)C[H]=0,I[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,C,I,F){let H=r.attributes,Z=C.attributes,W=0,ae=I.getAttributes();for(let X in ae)if(ae[X].location>=0){let oe=H[X],me=Z[X];if(me===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(y,C,I,F){let H={},Z=C.attributes,W=0,ae=I.getAttributes();for(let X in ae)if(ae[X].location>=0){let oe=Z[X];oe===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));let me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),H[X]=me,W++}r.attributes=H,r.attributesNum=W,r.index=F}function v(){let y=r.newAttributes;for(let C=0,I=y.length;C<I;C++)y[C]=0}function p(y){m(y,0)}function m(y,C){let I=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;I[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),H[y]!==C&&(i.vertexAttribDivisor(y,C),H[y]=C)}function E(){let y=r.newAttributes,C=r.enabledAttributes;for(let I=0,F=C.length;I<F;I++)C[I]!==y[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function _(y,C,I,F,H,Z,W){W===!0?i.vertexAttribIPointer(y,C,I,H,Z):i.vertexAttribPointer(y,C,I,F,H,Z)}function x(y,C,I,F){v();let H=F.attributes,Z=I.getAttributes(),W=C.defaultAttributeValues;for(let ae in Z){let X=Z[ae];if(X.location>=0){let J=H[ae];if(J===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){let oe=J.normalized,me=J.itemSize,Se=e.get(J);if(Se===void 0)continue;let Ke=Se.buffer,j=Se.type,he=Se.bytesPerElement,ve=j===i.INT||j===i.UNSIGNED_INT||J.gpuType===sh;if(J.isInterleavedBufferAttribute){let O=J.data,$=O.stride,ie=J.offset;if(O.isInstancedInterleavedBuffer){for(let de=0;de<X.locationSize;de++)m(X.location+de,O.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let de=0;de<X.locationSize;de++)p(X.location+de);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let de=0;de<X.locationSize;de++)_(X.location+de,me/X.locationSize,j,oe,$*he,(ie+me/X.locationSize*de)*he,ve)}else{if(J.isInstancedBufferAttribute){for(let O=0;O<X.locationSize;O++)m(X.location+O,J.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let O=0;O<X.locationSize;O++)p(X.location+O);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let O=0;O<X.locationSize;O++)_(X.location+O,me/X.locationSize,j,oe,me*he,me/X.locationSize*O*he,ve)}}else if(W!==void 0){let oe=W[ae];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(X.location,oe);break;case 3:i.vertexAttrib3fv(X.location,oe);break;case 4:i.vertexAttrib4fv(X.location,oe);break;default:i.vertexAttrib1fv(X.location,oe)}}}}E()}function P(){D();for(let y in n){let C=n[y];for(let I in C){let F=C[I];for(let H in F)h(F[H].object),delete F[H];delete C[I]}delete n[y]}}function M(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let I in C){let F=C[I];for(let H in F)h(F[H].object),delete F[H];delete C[I]}delete n[y.id]}function T(y){for(let C in n){let I=n[C];if(I[y.id]===void 0)continue;let F=I[y.id];for(let H in F)h(F[H].object),delete F[H];delete I[y.id]}}function D(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function Hg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let D=T===Lt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yi&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:P,maxSamples:M}}function Gg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vi,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,_=E*4,x=m.clippingState||null;l.value=x,x=h(g,d,_,f);for(let P=0;P!==_;++P)x[P]=t[P];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,x=f;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(E,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Wg(i){let e=new WeakMap;function t(a,o){return o===Fl?a.mapping=Ns:o===kl&&(a.mapping=Us),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Fl||o===kl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new vc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Er=class extends Oa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rs=4,Nu=[.125,.215,.35,.446,.526,.582],es=20,gl=new Er,Uu=new Ce,vl=null,yl=0,_l=0,xl=!1,ji=(1+Math.sqrt(5))/2,As=1/ji,Ou=[new N(-ji,As,0),new N(ji,As,0),new N(-As,0,ji),new N(As,0,ji),new N(0,ji,-As),new N(0,ji,As),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,yl,_l),this._renderer.xr.enabled=xl,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Lt,format:En,colorSpace:$s,depthBuffer:!1},s=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$g(r)),this._blurMaterial=Xg(r,e,t)}return s}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,s){let o=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uu),h.toneMapping=Oi,h.autoClear=!1;let f=new Zt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Pe(new bi,f),v=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(Uu),v=!0);for(let m=0;m<6;m++){let E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;ma(s,E*_,m>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ns||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ou[(s-r-1)%Ou.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):es;p>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${es}`);let m=[],E=0;for(let T=0;T<es;++T){let D=T/v,b=Math.exp(-D*D/2);m.push(b),T===0?E+=b:T<p&&(E+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let x=this._sizeLods[s],P=3*x*(s>_-Rs?s-_+Rs:0),M=4*(this._cubeSize-x);ma(t,P,M,3*x,2*x),l.setRenderTarget(t),l.render(u,gl)}};function $g(i){let e=[],t=[],n=[],s=i,r=i-Rs+1+Nu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Rs?l=Nu[a-i+Rs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,E=new Float32Array(v*g*f),_=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let M=0;M<f;M++){let T=M%3*2/3-1,D=M>2?0:-1,b=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];E.set(b,v*g*M),_.set(d,p*g*M);let y=[M,M,M,M,M,M];x.set(y,m*g*M)}let P=new Ut;P.setAttribute("position",new pn(E,v)),P.setAttribute("uv",new pn(_,p)),P.setAttribute("faceIndex",new pn(x,m)),e.push(P),s>Rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fu(i,e,t){let n=new Et(i,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xg(i,e,t){let n=new Float32Array(es),s=new N(0,1,0);return new dt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function ku(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Bu(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function qg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Fl||l===kl,h=l===Ns||l===Us;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ks(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ks(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zg(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let E=f.array;v=f.version;for(let _=0,x=E.length;_<x;_+=3){let P=E[_+0],M=E[_+1],T=E[_+2];d.push(P,M,M,T,T,P)}}else if(g!==void 0){let E=g.array;v=g.version;for(let _=0,x=E.length/3-1;_<x;_+=3){let P=_+0,M=_+1,T=_+2;d.push(P,M,M,T,T,P)}}else return;let p=new(Id(d)?Ua:Na)(d,1);p.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Kg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let m=0;for(let E=0;E<g;E++)m+=f[E]*v[E];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jg(i,e,t){let n=new WeakMap,s=new Tt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*P*4*u),T=new La(M,x,P,u);T.type=yi,T.needsUpdate=!0;let D=_*4;for(let y=0;y<u;y++){let C=p[y],I=m[y],F=E[y],H=x*P*4*y;for(let Z=0;Z<C.count;Z++){let W=Z*D;f===!0&&(s.fromBufferAttribute(C,Z),M[H+W+0]=s.x,M[H+W+1]=s.y,M[H+W+2]=s.z,M[H+W+3]=0),g===!0&&(s.fromBufferAttribute(I,Z),M[H+W+4]=s.x,M[H+W+5]=s.y,M[H+W+6]=s.z,M[H+W+7]=0),v===!0&&(s.fromBufferAttribute(F,Z),M[H+W+8]=s.x,M[H+W+9]=s.y,M[H+W+10]=s.z,M[H+W+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new pe(x,P)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Qg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Bs=class extends xn{constructor(e,t,n,s,r,a,o,l,c,h=Ps){if(h!==Ps&&h!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=is),n===void 0&&h===Bi&&(n=ki),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ud=new xn,zu=new Bs(1,1),Od=new La,Fd=new mc,kd=new Fa,Hu=[],Vu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),$u=new Float32Array(4);function Xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ro(i,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),Wt(t,n)}}function rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),Wt(t,n)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),Wt(t,n)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function uv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zu.compareFunction=Pd,r=zu):r=Ud,t.setTexture2D(e||r,s)}function gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fd,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kd,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Od,s)}function _v(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return yv}}function xv(i,e){i.uniform1fv(this.addr,e)}function bv(i,e){let t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function Mv(i,e){let t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function Sv(i,e){let t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function Tv(i,e){let t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ev(i,e){let t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wv(i,e){let t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Av(i,e){i.uniform1iv(this.addr,e)}function Rv(i,e){i.uniform2iv(this.addr,e)}function Cv(i,e){i.uniform3iv(this.addr,e)}function Pv(i,e){i.uniform4iv(this.addr,e)}function Iv(i,e){i.uniform1uiv(this.addr,e)}function Dv(i,e){i.uniform2uiv(this.addr,e)}function Lv(i,e){i.uniform3uiv(this.addr,e)}function Nv(i,e){i.uniform4uiv(this.addr,e)}function Uv(i,e,t){let n=this.cache,s=e.length,r=ro(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ud,r[a])}function Ov(i,e,t){let n=this.cache,s=e.length,r=ro(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Fd,r[a])}function Fv(i,e,t){let n=this.cache,s=e.length,r=ro(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||kd,r[a])}function kv(i,e,t){let n=this.cache,s=e.length,r=ro(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Od,r[a])}function Bv(i){switch(i){case 5126:return xv;case 35664:return bv;case 35665:return Mv;case 35666:return Sv;case 35674:return Tv;case 35675:return Ev;case 35676:return wv;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Iv;case 36294:return Dv;case 36295:return Lv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return kv}}var yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}},_c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bv(t.type)}},xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function Xu(i,e){i.seq.push(e),i.map[e.id]=e}function zv(i,e,t){let n=i.name,s=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),a=bl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xu(t,c===void 0?new yc(o,i,e):new _c(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new xc(o),Xu(t,u)),t=u}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zv(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function qu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hv=37297,Vv=0;function Gv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Yu=new st;function Wv(i){ut._getMatrix(Yu,ut.workingColorSpace,i);let e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case so:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gv(i.getShaderSource(e),a)}else return s}function $v(i,e){let t=Wv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xv(i,e){let t;switch(e){case Qc:t="Linear";break;case eh:t="Reinhard";break;case th:t="Cineon";break;case Pr:t="ACESFilmic";break;case nh:t="AgX";break;case ih:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ga=new N;function qv(){ut.getLuminanceCoefficients(ga);let i=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Zv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yr(i){return i!==""}function Ku(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(Jv,Qv)}var jv=new Map;function Qv(i,e){let t=at[e];if(t===void 0){let n=jv.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}var ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(ey,ty)}function ty(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ny(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function iy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Us:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function ry(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yd:e="ENVMAP_BLENDING_MULTIPLY";break;case Sp:e="ENVMAP_BLENDING_MIX";break;case Tp:e="ENVMAP_BLENDING_ADD";break}return e}function ay(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ny(t),c=iy(t),h=sy(t),u=ry(t),d=ay(t),f=Yv(t),g=Zv(r),v=s.createProgram(),p,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?at.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,$v("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=bc(a),a=Ku(a,t),a=Ju(a,t),o=bc(o),o=Ku(o,t),o=Ju(o,t),a=ju(a),o=ju(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=E+p+a,x=E+m+o,P=qu(s,s.VERTEX_SHADER,_),M=qu(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(M).trim(),Z=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,M);else{let ae=Zu(s,P,"vertex"),X=Zu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+ae+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||H==="")&&(W=!1);W&&(C.diagnostics={runnable:Z,programLog:I,vertexShader:{log:F,prefix:p},fragmentShader:{log:H,prefix:m}})}s.deleteShader(P),s.deleteShader(M),D=new Ds(s,v),b=Kv(s,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Hv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=M,this}var ly=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=ly++,this.code=e,this.usedTimes=0}};function cy(i,e,t,n,s,r,a){let o=new Sr,l=new Mc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,y,C,I,F){let H=I.fog,Z=F.geometry,W=b.isMeshStandardMaterial?I.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),X=ae&&ae.mapping===io?ae.image.height:null,J=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let oe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,me=oe!==void 0?oe.length:0,Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let Ke,j,he,ve;if(J){let Q=Kn[J];Ke=Q.vertexShader,j=Q.fragmentShader}else Ke=b.vertexShader,j=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),ve=l.getFragmentShaderID(b);let O=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),ie=F.isInstancedMesh===!0,de=F.isBatchedMesh===!0,Ne=!!b.map,_e=!!b.matcap,Te=!!ae,U=!!b.aoMap,nt=!!b.lightMap,Je=!!b.bumpMap,Xe=!!b.normalMap,Le=!!b.displacementMap,ct=!!b.emissiveMap,Ve=!!b.metalnessMap,L=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,se=b.dispersion>0,re=b.iridescence>0,te=b.sheen>0,Ue=b.transmission>0,ye=S&&!!b.anisotropyMap,Me=G&&!!b.clearcoatMap,tt=G&&!!b.clearcoatNormalMap,le=G&&!!b.clearcoatRoughnessMap,Ae=re&&!!b.iridescenceMap,Oe=re&&!!b.iridescenceThicknessMap,Ze=te&&!!b.sheenColorMap,Re=te&&!!b.sheenRoughnessMap,rt=!!b.specularMap,$e=!!b.specularColorMap,ht=!!b.specularIntensityMap,k=Ue&&!!b.transmissionMap,ge=Ue&&!!b.thicknessMap,K=!!b.gradientMap,ne=!!b.alphaMap,Ee=b.alphaTest>0,be=!!b.alphaHash,Qe=!!b.extensions,R=Oi;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(R=i.toneMapping);let V={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:j,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:de,batchingColor:de&&F._colorsTexture!==null,instancing:ie,instancingColor:ie&&F.instanceColor!==null,instancingMorph:ie&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:$s,alphaToCoverage:!!b.alphaToCoverage,map:Ne,matcap:_e,envMap:Te,envMapMode:Te&&ae.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:nt,bumpMap:Je,normalMap:Xe,displacementMap:d&&Le,emissiveMap:ct,normalMapObjectSpace:Xe&&b.normalMapType===Rp,normalMapTangentSpace:Xe&&b.normalMapType===uh,metalnessMap:Ve,roughnessMap:L,anisotropy:S,anisotropyMap:ye,clearcoat:G,clearcoatMap:Me,clearcoatNormalMap:tt,clearcoatRoughnessMap:le,dispersion:se,iridescence:re,iridescenceMap:Ae,iridescenceThicknessMap:Oe,sheen:te,sheenColorMap:Ze,sheenRoughnessMap:Re,specularMap:rt,specularColorMap:$e,specularIntensityMap:ht,transmission:Ue,transmissionMap:k,thicknessMap:ge,gradientMap:K,opaque:b.transparent===!1&&b.blending===Cs&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:Ee,alphaHash:be,combine:b.combine,mapUv:Ne&&v(b.map.channel),aoMapUv:U&&v(b.aoMap.channel),lightMapUv:nt&&v(b.lightMap.channel),bumpMapUv:Je&&v(b.bumpMap.channel),normalMapUv:Xe&&v(b.normalMap.channel),displacementMapUv:Le&&v(b.displacementMap.channel),emissiveMapUv:ct&&v(b.emissiveMap.channel),metalnessMapUv:Ve&&v(b.metalnessMap.channel),roughnessMapUv:L&&v(b.roughnessMap.channel),anisotropyMapUv:ye&&v(b.anisotropyMap.channel),clearcoatMapUv:Me&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:tt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(b.sheenRoughnessMap.channel),specularMapUv:rt&&v(b.specularMap.channel),specularColorMapUv:$e&&v(b.specularColorMap.channel),specularIntensityMapUv:ht&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:ge&&v(b.thicknessMap.channel),alphaMapUv:ne&&v(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xe||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Ne||ne),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:$,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:R,decodeVideoTexture:Ne&&b.map.isVideoTexture===!0&&ut.getTransfer(b.map.colorSpace)===Mt,decodeVideoTextureEmissive:ct&&b.emissiveMap.isVideoTexture===!0&&ut.getTransfer(b.emissiveMap.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ln,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Qe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&b.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return V.vertexUv1s=c.has(1),V.vertexUv2s=c.has(2),V.vertexUv3s=c.has(3),c.clear(),V}function m(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(E(y,b),_(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){let y=g[b.type],C;if(y){let I=Kn[y];C=un.clone(I.uniforms)}else C=b.uniforms;return C}function P(b,y){let C;for(let I=0,F=h.length;I<F;I++){let H=h[I];if(H.cacheKey===y){C=H,++C.usedTimes;break}}return C===void 0&&(C=new oy(i,y,b,r),h.push(C)),C}function M(b){if(--b.usedTimes===0){let y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:P,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:D}}function hy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function uy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function td(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function o(u,d,f,g,v,p){let m=a(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,v,p){let m=a(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||uy),n.length>1&&n.sort(d||ed),s.length>1&&s.sort(d||ed)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function dy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new td,i.set(n,[a])):s>=r.length?(a=new td,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ce};break;case"SpotLight":t={position:new N,direction:new N,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function py(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var my=0;function gy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vy(i){let e=new fy,t=py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ft,a=new ft;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,E=0,_=0,x=0,P=0,M=0,T=0;c.sort(gy);for(let b=0,y=c.length;b<y;b++){let C=c[b],I=C.color,F=C.intensity,H=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],F);T++}else if(C.isDirectionalLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ae=C.shadow,X=t.get(C);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=C.shadow.matrix,E++}n.directional[f]=W,f++}else if(C.isSpotLight){let W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(I).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[v]=W;let ae=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,ae.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[v]=ae.matrix,C.castShadow){let X=t.get(C);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=Z,x++}v++}else if(C.isRectAreaLight){let W=e.get(C);W.color.copy(I).multiplyScalar(F),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=W,p++}else if(C.isPointLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let ae=C.shadow,X=t.get(C);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,X.shadowCameraNear=ae.camera.near,X.shadowCameraFar=ae.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,_++}n.point[g]=W,g++}else if(C.isHemisphereLight){let W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(F),W.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[m]=W,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==E||D.numPointShadows!==_||D.numSpotShadows!==x||D.numSpotMaps!==P||D.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+P-M,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=E,D.numPointShadows=_,D.numSpotShadows=x,D.numSpotMaps=P,D.numLightProbes=T,n.version=my++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=h.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){let _=c[m];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function nd(i){let e=new vy(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function yy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new nd(i),e.set(s,[o])):r>=a.length?(o=new nd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var wr=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
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
}`;function by(i,e,t){let n=new Tr,s=new pe,r=new pe,a=new Tt,o=new wr({depthPacking:hh}),l=new Tc,c={},h=t.maxTextureSize,u={[Fi]:cn,[cn]:Fi,[ln]:ln},d=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:_y,fragmentShader:xy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let m=this.type;this.render=function(M,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Nt),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=m!==gi&&this.type===gi,H=m===gi&&this.type!==gi;for(let Z=0,W=M.length;Z<W;Z++){let ae=M[Z],X=ae.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let J=X.getFrameExtents();if(s.multiply(J),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,X.mapSize.y=r.y)),X.map===null||F===!0||H===!0){let me=this.type!==gi?{minFilter:hn,magFilter:hn}:{};X.map!==null&&X.map.dispose(),X.map=new Et(s.x,s.y,me),X.map.texture.name=ae.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let oe=X.getViewportCount();for(let me=0;me<oe;me++){let Se=X.getViewport(me);a.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),I.viewport(a),X.updateMatrices(ae,me),n=X.getFrustum(),x(T,D,X.camera,ae,this.type)}X.isPointLightShadow!==!0&&this.type===gi&&E(X,D),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,y,C)};function E(M,T){let D=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Et(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,D,d,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,D,f,v,null)}function _(M,T,D,b){let y=null,C=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)y=C;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let I=y.uuid,F=T.uuid,H=c[I];H===void 0&&(H={},c[I]=H);let Z=H[F];Z===void 0&&(Z=y.clone(),H[F]=Z,T.addEventListener("dispose",P)),y=Z}if(y.visible=T.visible,y.wireframe=T.wireframe,b===gi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let I=i.properties.get(y);I.light=D}return y}function x(M,T,D,b,y){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===gi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);let F=e.update(M),H=M.material;if(Array.isArray(H)){let Z=F.groups;for(let W=0,ae=Z.length;W<ae;W++){let X=Z[W],J=H[X.materialIndex];if(J&&J.visible){let oe=_(M,J,b,y);M.onBeforeShadow(i,M,T,D,F,oe,X),i.renderBufferDirect(D,null,F,oe,M,X),M.onAfterShadow(i,M,T,D,F,oe,X)}}}else if(H.visible){let Z=_(M,H,b,y);M.onBeforeShadow(i,M,T,D,F,Z,null),i.renderBufferDirect(D,null,F,Z,M,null),M.onAfterShadow(i,M,T,D,F,Z,null)}}let I=M.children;for(let F=0,H=I.length;F<H;F++)x(I[F],T,D,b,y)}function P(M){M.target.removeEventListener("dispose",P);for(let D in c){let b=c[D],y=M.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var My={[Pl]:Il,[Dl]:Ul,[Ll]:Ol,[Ls]:Nl,[Il]:Pl,[Ul]:Dl,[Ol]:Ll,[Nl]:Ls};function Sy(i,e){function t(){let k=!1,ge=new Tt,K=null,ne=new Tt(0,0,0,0);return{setMask:function(Ee){K!==Ee&&!k&&(i.colorMask(Ee,Ee,Ee,Ee),K=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,be,Qe,R,V){V===!0&&(Ee*=R,be*=R,Qe*=R),ge.set(Ee,be,Qe,R),ne.equals(ge)===!1&&(i.clearColor(Ee,be,Qe,R),ne.copy(ge))},reset:function(){k=!1,K=null,ne.set(-1,0,0,0)}}}function n(){let k=!1,ge=!1,K=null,ne=null,Ee=null;return{setReversed:function(be){if(ge!==be){let Qe=e.get("EXT_clip_control");ge?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let R=Ee;Ee=null,this.setClear(R)}ge=be},getReversed:function(){return ge},setTest:function(be){be?O(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(be){K!==be&&!k&&(i.depthMask(be),K=be)},setFunc:function(be){if(ge&&(be=My[be]),ne!==be){switch(be){case Pl:i.depthFunc(i.NEVER);break;case Il:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Nl:i.depthFunc(i.GEQUAL);break;case Ul:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=be}},setLocked:function(be){k=be},setClear:function(be){Ee!==be&&(ge&&(be=1-be),i.clearDepth(be),Ee=be)},reset:function(){k=!1,K=null,ne=null,Ee=null,ge=!1}}}function s(){let k=!1,ge=null,K=null,ne=null,Ee=null,be=null,Qe=null,R=null,V=null;return{setTest:function(Q){k||(Q?O(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(Q){ge!==Q&&!k&&(i.stencilMask(Q),ge=Q)},setFunc:function(Q,ue,We){(K!==Q||ne!==ue||Ee!==We)&&(i.stencilFunc(Q,ue,We),K=Q,ne=ue,Ee=We)},setOp:function(Q,ue,We){(be!==Q||Qe!==ue||R!==We)&&(i.stencilOp(Q,ue,We),be=Q,Qe=ue,R=We)},setLocked:function(Q){k=Q},setClear:function(Q){V!==Q&&(i.clearStencil(Q),V=Q)},reset:function(){k=!1,ge=null,K=null,ne=null,Ee=null,be=null,Qe=null,R=null,V=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,v=!1,p=null,m=null,E=null,_=null,x=null,P=null,M=null,T=new Ce(0,0,0),D=0,b=!1,y=null,C=null,I=null,F=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ae=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=ae>=1):X.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=ae>=2);let J=null,oe={},me=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Ke=new Tt().fromArray(me),j=new Tt().fromArray(Se);function he(k,ge,K,ne){let Ee=new Uint8Array(4),be=i.createTexture();i.bindTexture(k,be),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<K;Qe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ge+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return be}let ve={};ve[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),O(i.DEPTH_TEST),a.setFunc(Ls),Je(!1),Xe(ru),O(i.CULL_FACE),U(Nt);function O(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function $(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function ie(k,ge){return u[k]!==ge?(i.bindFramebuffer(k,ge),u[k]=ge,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function de(k,ge){let K=f,ne=!1;if(k){K=d.get(ge),K===void 0&&(K=[],d.set(ge,K));let Ee=k.textures;if(K.length!==Ee.length||K[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Qe=Ee.length;be<Qe;be++)K[be]=i.COLOR_ATTACHMENT0+be;K.length=Ee.length,ne=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ne=!0);ne&&i.drawBuffers(K)}function Ne(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let _e={[In]:i.FUNC_ADD,[cp]:i.FUNC_SUBTRACT,[hp]:i.FUNC_REVERSE_SUBTRACT};_e[up]=i.MIN,_e[dp]=i.MAX;let Te={[Ws]:i.ZERO,[fp]:i.ONE,[pp]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[yp]:i.SRC_ALPHA_SATURATE,[no]:i.DST_COLOR,[to]:i.DST_ALPHA,[mp]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[vp]:i.ONE_MINUS_DST_COLOR,[gp]:i.ONE_MINUS_DST_ALPHA,[_p]:i.CONSTANT_COLOR,[xp]:i.ONE_MINUS_CONSTANT_COLOR,[bp]:i.CONSTANT_ALPHA,[Mp]:i.ONE_MINUS_CONSTANT_ALPHA};function U(k,ge,K,ne,Ee,be,Qe,R,V,Q){if(k===Nt){v===!0&&($(i.BLEND),v=!1);return}if(v===!1&&(O(i.BLEND),v=!0),k!==jc){if(k!==p||Q!==b){if((m!==In||x!==In)&&(i.blendEquation(i.FUNC_ADD),m=In,x=In),Q)switch(k){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,_=null,P=null,M=null,T.set(0,0,0),D=0,p=k,b=Q}return}Ee=Ee||ge,be=be||K,Qe=Qe||ne,(ge!==m||Ee!==x)&&(i.blendEquationSeparate(_e[ge],_e[Ee]),m=ge,x=Ee),(K!==E||ne!==_||be!==P||Qe!==M)&&(i.blendFuncSeparate(Te[K],Te[ne],Te[be],Te[Qe]),E=K,_=ne,P=be,M=Qe),(R.equals(T)===!1||V!==D)&&(i.blendColor(R.r,R.g,R.b,V),T.copy(R),D=V),p=k,b=!1}function nt(k,ge){k.side===ln?$(i.CULL_FACE):O(i.CULL_FACE);let K=k.side===cn;ge&&(K=!K),Je(K),k.blending===Cs&&k.transparent===!1?U(Nt):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let ne=k.stencilWrite;o.setTest(ne),ne&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ct(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function Xe(k){k!==op?(O(i.CULL_FACE),k!==C&&(k===ru?i.cullFace(i.BACK):k===lp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),C=k}function Le(k){k!==I&&(W&&i.lineWidth(k),I=k)}function ct(k,ge,K){k?(O(i.POLYGON_OFFSET_FILL),(F!==ge||H!==K)&&(i.polygonOffset(ge,K),F=ge,H=K)):$(i.POLYGON_OFFSET_FILL)}function Ve(k){k?O(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function L(k){k===void 0&&(k=i.TEXTURE0+Z-1),J!==k&&(i.activeTexture(k),J=k)}function S(k,ge,K){K===void 0&&(J===null?K=i.TEXTURE0+Z-1:K=J);let ne=oe[K];ne===void 0&&(ne={type:void 0,texture:void 0},oe[K]=ne),(ne.type!==k||ne.texture!==ge)&&(J!==K&&(i.activeTexture(K),J=K),i.bindTexture(k,ge||ve[k]),ne.type=k,ne.texture=ge)}function G(){let k=oe[J];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(k){Ke.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ke.copy(k))}function Re(k){j.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),j.copy(k))}function rt(k,ge){let K=c.get(ge);K===void 0&&(K=new WeakMap,c.set(ge,K));let ne=K.get(k);ne===void 0&&(ne=i.getUniformBlockIndex(ge,k.name),K.set(k,ne))}function $e(k,ge){let ne=c.get(ge).get(k);l.get(ge)!==ne&&(i.uniformBlockBinding(ge,ne,k.__bindingPointIndex),l.set(ge,ne))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,oe={},u={},d=new WeakMap,f=[],g=null,v=!1,p=null,m=null,E=null,_=null,x=null,P=null,M=null,T=new Ce(0,0,0),D=0,b=!1,y=null,C=null,I=null,F=null,H=null,Ke.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:O,disable:$,bindFramebuffer:ie,drawBuffers:de,useProgram:Ne,setBlending:U,setMaterial:nt,setFlipSided:Je,setCullFace:Xe,setLineWidth:Le,setPolygonOffset:ct,setScissorTest:Ve,activeTexture:L,bindTexture:S,unbindTexture:G,compressedTexImage2D:se,compressedTexImage3D:re,texImage2D:Ae,texImage3D:Oe,updateUBOMapping:rt,uniformBlockBinding:$e,texStorage2D:tt,texStorage3D:le,texSubImage2D:te,texSubImage3D:Ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:Me,scissor:Ze,viewport:Re,reset:ht}}function id(i,e,t,n){let s=Ty(n);switch(t){case Sd:return i*e;case Ed:return i*e;case wd:return i*e*2;case Ad:return i*e/s.components*s.byteLength;case oh:return i*e/s.components*s.byteLength;case Rd:return i*e*2/s.components*s.byteLength;case lh:return i*e*2/s.components*s.byteLength;case Td:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case ch:return i*e*4/s.components*s.byteLength;case Sa:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case zl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Aa:case oc:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cd:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ty(i){switch(i){case Vn:case xd:return{byteLength:1,components:1};case Mr:case bd:case Lt:return{byteLength:2,components:1};case rh:case ah:return{byteLength:2,components:4};case is:case sh:case yi:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ey(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return f?new OffscreenCanvas(L,S):Ia("canvas")}function v(L,S,G){let se=1,re=Ve(L);if((re.width>G||re.height>G)&&(se=G/Math.max(re.width,re.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let te=Math.floor(se*re.width),Ue=Math.floor(se*re.height);u===void 0&&(u=g(te,Ue));let ye=S?g(te,Ue):u;return ye.width=te,ye.height=Ue,ye.getContext("2d").drawImage(L,0,0,te,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+te+"x"+Ue+")."),ye}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),L;return L}function p(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,S,G,se,re=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=S;if(S===i.RED&&(G===i.FLOAT&&(te=i.R32F),G===i.HALF_FLOAT&&(te=i.R16F),G===i.UNSIGNED_BYTE&&(te=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.R8UI),G===i.UNSIGNED_SHORT&&(te=i.R16UI),G===i.UNSIGNED_INT&&(te=i.R32UI),G===i.BYTE&&(te=i.R8I),G===i.SHORT&&(te=i.R16I),G===i.INT&&(te=i.R32I)),S===i.RG&&(G===i.FLOAT&&(te=i.RG32F),G===i.HALF_FLOAT&&(te=i.RG16F),G===i.UNSIGNED_BYTE&&(te=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RG8UI),G===i.UNSIGNED_SHORT&&(te=i.RG16UI),G===i.UNSIGNED_INT&&(te=i.RG32UI),G===i.BYTE&&(te=i.RG8I),G===i.SHORT&&(te=i.RG16I),G===i.INT&&(te=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RGB8UI),G===i.UNSIGNED_SHORT&&(te=i.RGB16UI),G===i.UNSIGNED_INT&&(te=i.RGB32UI),G===i.BYTE&&(te=i.RGB8I),G===i.SHORT&&(te=i.RGB16I),G===i.INT&&(te=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),G===i.UNSIGNED_INT&&(te=i.RGBA32UI),G===i.BYTE&&(te=i.RGBA8I),G===i.SHORT&&(te=i.RGBA16I),G===i.INT&&(te=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),S===i.RGBA){let Ue=re?so:ut.getTransfer(se);G===i.FLOAT&&(te=i.RGBA32F),G===i.HALF_FLOAT&&(te=i.RGBA16F),G===i.UNSIGNED_BYTE&&(te=Ue===Mt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(L,S){let G;return L?S===null||S===is||S===ki?G=i.DEPTH24_STENCIL8:S===yi?G=i.DEPTH32F_STENCIL8:S===Mr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===is||S===ki?G=i.DEPTH_COMPONENT24:S===yi?G=i.DEPTH_COMPONENT32F:S===Mr&&(G=i.DEPTH_COMPONENT16),G}function P(L,S){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==hn&&L.minFilter!==jn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function M(L){let S=L.target;S.removeEventListener("dispose",M),D(S),S.isVideoTexture&&h.delete(S)}function T(L){let S=L.target;S.removeEventListener("dispose",T),y(S)}function D(L){let S=n.get(L);if(S.__webglInit===void 0)return;let G=L.source,se=d.get(G);if(se){let re=se[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(L),Object.keys(se).length===0&&d.delete(G)}n.remove(L)}function b(L){let S=n.get(L);i.deleteTexture(S.__webglTexture);let G=L.source,se=d.get(G);delete se[S.__cacheKey],a.memory.textures--}function y(L){let S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let re=0;re<S.__webglFramebuffer[se].length;re++)i.deleteFramebuffer(S.__webglFramebuffer[se][re]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=L.textures;for(let se=0,re=G.length;se<re;se++){let te=n.get(G[se]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(G[se])}n.remove(L)}let C=0;function I(){C=0}function F(){let L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function H(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function Z(L,S){let G=n.get(L);if(L.isVideoTexture&&Le(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){let se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,L,S);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function W(L,S){let G=n.get(L);if(L.version>0&&G.__version!==L.version){j(G,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function ae(L,S){let G=n.get(L);if(L.version>0&&G.__version!==L.version){j(G,L,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function X(L,S){let G=n.get(L);if(L.version>0&&G.__version!==L.version){he(G,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let J={[Yt]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},oe={[hn]:i.NEAREST,[wp]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},me={[Cp]:i.NEVER,[Up]:i.ALWAYS,[Pp]:i.LESS,[Pd]:i.LEQUAL,[Ip]:i.EQUAL,[Np]:i.GEQUAL,[Dp]:i.GREATER,[Lp]:i.NOTEQUAL};function Se(L,S){if(S.type===yi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===jn||S.magFilter===Xo||S.magFilter===Kr||S.magFilter===ns||S.minFilter===jn||S.minFilter===Xo||S.minFilter===Kr||S.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,J[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,J[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,J[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,oe[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==Kr&&S.minFilter!==ns||S.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(L,S){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",M));let se=S.source,re=d.get(se);re===void 0&&(re={},d.set(se,re));let te=H(S);if(te!==L.__cacheKey){re[te]===void 0&&(re[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),re[te].usedTimes++;let Ue=re[L.__cacheKey];Ue!==void 0&&(re[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(S)),L.__cacheKey=te,L.__webglTexture=re[te].texture}return G}function j(L,S,G){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);let re=Ke(L,S),te=S.source;t.bindTexture(se,L.__webglTexture,i.TEXTURE0+G);let Ue=n.get(te);if(te.version!==Ue.__version||re===!0){t.activeTexture(i.TEXTURE0+G);let ye=ut.getPrimaries(ut.workingColorSpace),Me=S.colorSpace===Jn?null:ut.getPrimaries(S.colorSpace),tt=S.colorSpace===Jn||ye===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let le=v(S.image,!1,s.maxTextureSize);le=ct(S,le);let Ae=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),Ze=_(S.internalFormat,Ae,Oe,S.colorSpace,S.isVideoTexture);Se(se,S);let Re,rt=S.mipmaps,$e=S.isVideoTexture!==!0,ht=Ue.__version===void 0||re===!0,k=te.dataReady,ge=P(S,le);if(S.isDepthTexture)Ze=x(S.format===Bi,S.type),ht&&($e?t.texStorage2D(i.TEXTURE_2D,1,Ze,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ze,le.width,le.height,0,Ae,Oe,null));else if(S.isDataTexture)if(rt.length>0){$e&&ht&&t.texStorage2D(i.TEXTURE_2D,ge,Ze,rt[0].width,rt[0].height);for(let K=0,ne=rt.length;K<ne;K++)Re=rt[K],$e?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Ae,Oe,Re.data):t.texImage2D(i.TEXTURE_2D,K,Ze,Re.width,Re.height,0,Ae,Oe,Re.data);S.generateMipmaps=!1}else $e?(ht&&t.texStorage2D(i.TEXTURE_2D,ge,Ze,le.width,le.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Ae,Oe,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,le.width,le.height,0,Ae,Oe,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$e&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ze,rt[0].width,rt[0].height,le.depth);for(let K=0,ne=rt.length;K<ne;K++)if(Re=rt[K],S.format!==En)if(Ae!==null)if($e){if(k)if(S.layerUpdates.size>0){let Ee=id(Re.width,Re.height,S.format,S.type);for(let be of S.layerUpdates){let Qe=Re.data.subarray(be*Ee/Re.data.BYTES_PER_ELEMENT,(be+1)*Ee/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,be,Re.width,Re.height,1,Ae,Qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Re.width,Re.height,le.depth,Ae,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ze,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Re.width,Re.height,le.depth,Ae,Oe,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ze,Re.width,Re.height,le.depth,0,Ae,Oe,Re.data)}else{$e&&ht&&t.texStorage2D(i.TEXTURE_2D,ge,Ze,rt[0].width,rt[0].height);for(let K=0,ne=rt.length;K<ne;K++)Re=rt[K],S.format!==En?Ae!==null?$e?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Re.width,Re.height,Ae,Oe,Re.data):t.texImage2D(i.TEXTURE_2D,K,Ze,Re.width,Re.height,0,Ae,Oe,Re.data)}else if(S.isDataArrayTexture)if($e){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ze,le.width,le.height,le.depth),k)if(S.layerUpdates.size>0){let K=id(le.width,le.height,S.format,S.type);for(let ne of S.layerUpdates){let Ee=le.data.subarray(ne*K/le.data.BYTES_PER_ELEMENT,(ne+1)*K/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,Ae,Oe,Ee)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,Oe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,le.width,le.height,le.depth,0,Ae,Oe,le.data);else if(S.isData3DTexture)$e?(ht&&t.texStorage3D(i.TEXTURE_3D,ge,Ze,le.width,le.height,le.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,Oe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,le.width,le.height,le.depth,0,Ae,Oe,le.data);else if(S.isFramebufferTexture){if(ht)if($e)t.texStorage2D(i.TEXTURE_2D,ge,Ze,le.width,le.height);else{let K=le.width,ne=le.height;for(let Ee=0;Ee<ge;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ze,K,ne,0,Ae,Oe,null),K>>=1,ne>>=1}}else if(rt.length>0){if($e&&ht){let K=Ve(rt[0]);t.texStorage2D(i.TEXTURE_2D,ge,Ze,K.width,K.height)}for(let K=0,ne=rt.length;K<ne;K++)Re=rt[K],$e?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Ae,Oe,Re):t.texImage2D(i.TEXTURE_2D,K,Ze,Ae,Oe,Re);S.generateMipmaps=!1}else if($e){if(ht){let K=Ve(le);t.texStorage2D(i.TEXTURE_2D,ge,Ze,K.width,K.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Oe,le)}else t.texImage2D(i.TEXTURE_2D,0,Ze,Ae,Oe,le);p(S)&&m(se),Ue.__version=te.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function he(L,S,G){if(S.image.length!==6)return;let se=Ke(L,S),re=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);let te=n.get(re);if(re.version!==te.__version||se===!0){t.activeTexture(i.TEXTURE0+G);let Ue=ut.getPrimaries(ut.workingColorSpace),ye=S.colorSpace===Jn?null:ut.getPrimaries(S.colorSpace),Me=S.colorSpace===Jn||Ue===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let tt=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let ne=0;ne<6;ne++)!tt&&!le?Ae[ne]=v(S.image[ne],!0,s.maxCubemapSize):Ae[ne]=le?S.image[ne].image:S.image[ne],Ae[ne]=ct(S,Ae[ne]);let Oe=Ae[0],Ze=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),rt=_(S.internalFormat,Ze,Re,S.colorSpace),$e=S.isVideoTexture!==!0,ht=te.__version===void 0||se===!0,k=re.dataReady,ge=P(S,Oe);Se(i.TEXTURE_CUBE_MAP,S);let K;if(tt){$e&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,rt,Oe.width,Oe.height);for(let ne=0;ne<6;ne++){K=Ae[ne].mipmaps;for(let Ee=0;Ee<K.length;Ee++){let be=K[Ee];S.format!==En?Ze!==null?$e?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,0,0,be.width,be.height,Ze,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,rt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,0,0,be.width,be.height,Ze,Re,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee,rt,be.width,be.height,0,Ze,Re,be.data)}}}else{if(K=S.mipmaps,$e&&ht){K.length>0&&ge++;let ne=Ve(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,rt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){$e?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae[ne].width,Ae[ne].height,Ze,Re,Ae[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,Ae[ne].width,Ae[ne].height,0,Ze,Re,Ae[ne].data);for(let Ee=0;Ee<K.length;Ee++){let Qe=K[Ee].image[ne].image;$e?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,0,0,Qe.width,Qe.height,Ze,Re,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,rt,Qe.width,Qe.height,0,Ze,Re,Qe.data)}}else{$e?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ze,Re,Ae[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,Ze,Re,Ae[ne]);for(let Ee=0;Ee<K.length;Ee++){let be=K[Ee];$e?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,0,0,Ze,Re,be.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee+1,rt,Ze,Re,be.image[ne])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),te.__version=re.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ve(L,S,G,se,re,te){let Ue=r.convert(G.format,G.colorSpace),ye=r.convert(G.type),Me=_(G.internalFormat,Ue,ye,G.colorSpace),tt=n.get(S),le=n.get(G);if(le.__renderTarget=S,!tt.__hasExternalTextures){let Ae=Math.max(1,S.width>>te),Oe=Math.max(1,S.height>>te);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,te,Me,Ae,Oe,S.depth,0,Ue,ye,null):t.texImage2D(re,te,Me,Ae,Oe,0,Ue,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,re,le.__webglTexture,0,Je(S)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,re,le.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(L,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){let se=S.depthTexture,re=se&&se.isDepthTexture?se.type:null,te=x(S.stencilBuffer,re),Ue=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=Je(S);Xe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,te,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,L)}else{let se=S.textures;for(let re=0;re<se.length;re++){let te=se[re],Ue=r.convert(te.format,te.colorSpace),ye=r.convert(te.type),Me=_(te.internalFormat,Ue,ye,te.colorSpace),tt=Je(S);G&&Xe(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Me,S.width,S.height):Xe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,Me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);let re=se.__webglTexture,te=Je(S);if(S.depthTexture.format===Ps)Xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(S.depthTexture.format===Bi)Xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ie(L){let S=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let se=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){let re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",re)};se.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=se}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");$(S.__webglFramebuffer,L)}else if(G){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=i.createRenderbuffer(),O(S.__webglDepthbuffer[se],L,!1);else{let re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),O(S.__webglDepthbuffer,L,!1);else{let se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(L,S,G){let se=n.get(L);S!==void 0&&ve(se.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ie(L)}function Ne(L){let S=L.texture,G=n.get(L),se=n.get(S);L.addEventListener("dispose",T);let re=L.textures,te=L.isWebGLCubeRenderTarget===!0,Ue=re.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,a.memory.textures++),te){G.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ye]=[];for(let Me=0;Me<S.mipmaps.length;Me++)G.__webglFramebuffer[ye][Me]=i.createFramebuffer()}else G.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)G.__webglFramebuffer[ye]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ye=0,Me=re.length;ye<Me;ye++){let tt=n.get(re[ye]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Xe(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<re.length;ye++){let Me=re[ye];G.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);let tt=r.convert(Me.format,Me.colorSpace),le=r.convert(Me.type),Ae=_(Me.internalFormat,tt,le,Me.colorSpace,L.isXRRenderTarget===!0),Oe=Je(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ae,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),O(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Se(i.TEXTURE_CUBE_MAP,S);for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)ve(G.__webglFramebuffer[ye][Me],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me);else ve(G.__webglFramebuffer[ye],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ye=0,Me=re.length;ye<Me;ye++){let tt=re[ye],le=n.get(tt);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Se(i.TEXTURE_2D,tt),ve(G.__webglFramebuffer,L,tt,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),p(tt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ye=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,se.__webglTexture),Se(ye,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)ve(G.__webglFramebuffer[Me],L,S,i.COLOR_ATTACHMENT0,ye,Me);else ve(G.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,ye,0);p(S)&&m(ye),t.unbindTexture()}L.depthBuffer&&ie(L)}function _e(L){let S=L.textures;for(let G=0,se=S.length;G<se;G++){let re=S[G];if(p(re)){let te=E(L),Ue=n.get(re).__webglTexture;t.bindTexture(te,Ue),m(te),t.unbindTexture()}}}let Te=[],U=[];function nt(L){if(L.samples>0){if(Xe(L)===!1){let S=L.textures,G=L.width,se=L.height,re=i.COLOR_BUFFER_BIT,te=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(L),ye=S.length>1;if(ye)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Me]);let tt=n.get(S[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,G,se,0,0,G,se,re,i.NEAREST),l===!0&&(Te.length=0,U.length=0,Te.push(i.COLOR_ATTACHMENT0+Me),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Te.push(te),U.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Me]);let tt=n.get(S[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Je(L){return Math.min(s.maxSamples,L.samples)}function Xe(L){let S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(L){let S=a.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function ct(L,S){let G=L.colorSpace,se=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==$s&&G!==Jn&&(ut.getTransfer(G)===Mt?(se!==En||re!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ve(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=ae,this.setTextureCube=X,this.rebindTextures=de,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Xe}function wy(i,e){function t(n,s=Jn){let r,a=ut.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xd)return i.BYTE;if(n===bd)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===sh)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===yi)return i.FLOAT;if(n===Lt)return i.HALF_FLOAT;if(n===Sd)return i.ALPHA;if(n===Td)return i.RGB;if(n===En)return i.RGBA;if(n===Ed)return i.LUMINANCE;if(n===wd)return i.LUMINANCE_ALPHA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Ad)return i.RED;if(n===oh)return i.RED_INTEGER;if(n===Rd)return i.RG;if(n===lh)return i.RG_INTEGER;if(n===ch)return i.RGBA_INTEGER;if(n===Sa||n===Ta||n===Ea||n===wa)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===$l||n===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===$l)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===Yl||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===oc||n===lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cd||n===cc||n===hc||n===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ec=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},je=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ay={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cy=`
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

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new xn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dt({vertexShader:Ry,fragmentShader:Cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ac=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=new wc,p=t.getContextAttributes(),m=null,E=null,_=[],x=[],P=new pe,M=null,T=new en;T.viewport=new Tt;let D=new en;D.viewport=new Tt;let b=[T,D],y=new Ec,C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=_[j];return he===void 0&&(he=new _r,_[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=_[j];return he===void 0&&(he=new _r,_[j]=he),he.getGripSpace()},this.getHand=function(j){let he=_[j];return he===void 0&&(he=new _r,_[j]=he),he.getHandSpace()};function F(j){let he=x.indexOf(j.inputSource);if(he===-1)return;let ve=_[he];ve!==void 0&&(ve.update(j.inputSource,j.frame,c||a),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<_.length;j++){let he=x[j];he!==null&&(x[j]=null,_[j].disconnect(he))}C=null,I=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,E=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Et(f.framebufferWidth,f.framebufferHeight,{format:En,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,ve=null,O=null;p.depth&&(O=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?Bi:Ps,ve=p.stencil?ki:is);let $={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer($),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Et(d.textureWidth,d.textureHeight,{format:En,type:Vn,depthTexture:new Bs(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(j){for(let he=0;he<j.removed.length;he++){let ve=j.removed[he],O=x.indexOf(ve);O>=0&&(x[O]=null,_[O].disconnect(ve))}for(let he=0;he<j.added.length;he++){let ve=j.added[he],O=x.indexOf(ve);if(O===-1){for(let ie=0;ie<_.length;ie++)if(ie>=x.length){x.push(ve),O=ie;break}else if(x[ie]===null){x[ie]=ve,O=ie;break}if(O===-1)break}let $=_[O];$&&$.connect(ve)}}let W=new N,ae=new N;function X(j,he,ve){W.setFromMatrixPosition(he.matrixWorld),ae.setFromMatrixPosition(ve.matrixWorld);let O=W.distanceTo(ae),$=he.projectionMatrix.elements,ie=ve.projectionMatrix.elements,de=$[14]/($[10]-1),Ne=$[14]/($[10]+1),_e=($[9]+1)/$[5],Te=($[9]-1)/$[5],U=($[8]-1)/$[0],nt=(ie[8]+1)/ie[0],Je=de*U,Xe=de*nt,Le=O/(-U+nt),ct=Le*-U;if(he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ct),j.translateZ(Le),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),$[10]===-1)j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let Ve=de+Le,L=Ne+Le,S=Je-ct,G=Xe+(O-ct),se=_e*Ne/L*Ve,re=Te*Ne/L*Ve;j.projectionMatrix.makePerspective(S,G,se,re,Ve,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function J(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let he=j.near,ve=j.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),y.near=D.near=T.near=he,y.far=D.far=T.far=ve,(C!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,I=y.far),T.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,y.layers.mask=T.layers.mask|D.layers.mask;let O=j.parent,$=y.cameras;J(y,O);for(let ie=0;ie<$.length;ie++)J($[ie],O);$.length===2?X(y,T,D):y.projectionMatrix.copy(T.projectionMatrix),oe(j,y,O)};function oe(j,he,ve){ve===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let me=null;function Se(j,he){if(h=he.getViewerPose(c||a),g=he,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let O=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,O=!0);for(let ie=0;ie<ve.length;ie++){let de=ve[ie],Ne=null;if(f!==null)Ne=f.getViewport(de);else{let Te=u.getViewSubImage(d,de);Ne=Te.viewport,ie===0&&(e.setRenderTargetTextures(E,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(E))}let _e=b[ie];_e===void 0&&(_e=new en,_e.layers.enable(ie),_e.viewport=new Tt,b[ie]=_e),_e.matrix.fromArray(de.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(de.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ie===0&&(y.matrix.copy(_e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),O===!0&&y.cameras.push(_e)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")){let ie=u.getDepthInformation(ve[0]);ie&&ie.isValid&&ie.texture&&v.init(e,ie,s.renderState)}}for(let ve=0;ve<_.length;ve++){let O=x[ve],$=_[ve];O!==null&&$!==void 0&&$.update(O,he,c||a)}me&&me(j,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}let Ke=new Nd;Ke.setAnimationLoop(Se),this.setAnimationLoop=function(j){me=j},this.dispose=function(){}}},Ji=new ti,Py=new ft;function Iy(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ld(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,E,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let E=e.get(m),_=E.envMap,x=E.envMapRotation;_&&(p.envMap.value=_,Ji.copy(x),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),p.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(Ji)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let E=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,_){let x=_.program;n.uniformBlockBinding(E,x)}function c(E,_){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",p));let P=_.program;n.updateUBOMapping(E,P);let M=e.render.frame;r[E.id]!==M&&(d(E),r[E.id]=M)}function h(E){let _=u();E.__bindingPointIndex=_;let x=i.createBuffer(),P=E.__size,M=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let _=s[E.id],x=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=x.length;M<T;M++){let D=Array.isArray(x[M])?x[M]:[x[M]];for(let b=0,y=D.length;b<y;b++){let C=D[b];if(f(C,M,b,P)===!0){let I=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],H=0;for(let Z=0;Z<F.length;Z++){let W=F[Z],ae=v(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,I+H,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,H),H+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,_,x,P){let M=E.value,T=_+"_"+x;if(P[T]===void 0)return typeof M=="number"||typeof M=="boolean"?P[T]=M:P[T]=M.clone(),!0;{let D=P[T];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return P[T]=M,!0}else if(D.equals(M)===!1)return D.copy(M),!0}return!1}function g(E){let _=E.uniforms,x=0,P=16;for(let T=0,D=_.length;T<D;T++){let b=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,C=b.length;y<C;y++){let I=b[y],F=Array.isArray(I.value)?I.value:[I.value];for(let H=0,Z=F.length;H<Z;H++){let W=F[H],ae=v(W),X=x%P,J=X%ae.boundary,oe=X+J;x+=J,oe!==0&&P-oe<ae.storage&&(x+=P-oe),I.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=ae.storage}}}let M=x%P;return M>0&&(x+=P-M),E.__size=x,E.__cache={},this}function v(E){let _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){let _=E.target;_.removeEventListener("dispose",p);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ka=class{constructor(e={}){let{canvas:t=Fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),v=new Int32Array(4),p=null,m=null,E=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Oi,this.toneMappingExposure=1;let x=this,P=!1,M=0,T=0,D=null,b=-1,y=null,C=new Tt,I=new Tt,F=null,H=new Ce(0),Z=0,W=t.width,ae=t.height,X=1,J=null,oe=null,me=new Tt(0,0,W,ae),Se=new Tt(0,0,W,ae),Ke=!1,j=new Tr,he=!1,ve=!1,O=new ft,$=new ft,ie=new N,de=new Tt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function Te(){return D===null?X:1}let U=n;function nt(A,B){return t.getContext(A,B)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",be,!1),U===null){let B="webgl2";if(U=nt(B,A),U===null)throw nt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Je,Xe,Le,ct,Ve,L,S,G,se,re,te,Ue,ye,Me,tt,le,Ae,Oe,Ze,Re,rt,$e,ht,k;function ge(){Je=new Yg(U),Je.init(),$e=new wy(U,Je),Xe=new Vg(U,Je,e,$e),Le=new Sy(U,Je),Xe.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),ct=new Jg(U),Ve=new hy,L=new Ey(U,Je,Le,Ve,Xe,$e,ct),S=new Wg(x),G=new qg(x),se=new s0(U),ht=new zg(U,se),re=new Zg(U,se,ct,ht),te=new Qg(U,re,se,ct),Ze=new jg(U,Xe,L),le=new Gg(Ve),Ue=new cy(x,S,G,Je,Xe,ht,le),ye=new Iy(x,Ve),Me=new dy,tt=new yy(Je),Oe=new Bg(x,S,G,Le,te,f,l),Ae=new by(x,te,Xe),k=new Dy(U,ct,Xe,Le),Re=new Hg(U,Je,ct),rt=new Kg(U,Je,ct),ct.programs=Ue.programs,x.capabilities=Xe,x.extensions=Je,x.properties=Ve,x.renderLists=Me,x.shadowMap=Ae,x.state=Le,x.info=ct}ge();let K=new Ac(x,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(W,ae,!1))},this.getSize=function(A){return A.set(W,ae)},this.setSize=function(A,B,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,ae=B,t.width=Math.floor(A*X),t.height=Math.floor(B*X),q===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(W*X,ae*X).floor()},this.setDrawingBufferSize=function(A,B,q){W=A,ae=B,X=q,t.width=Math.floor(A*q),t.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(me)},this.setViewport=function(A,B,q,Y){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,B,q,Y),Le.viewport(C.copy(me).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Se)},this.setScissor=function(A,B,q,Y){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,B,q,Y),Le.scissor(I.copy(Se).multiplyScalar(X).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){Le.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,B=!0,q=!0){let Y=0;if(A){let z=!1;if(D!==null){let fe=D.texture.format;z=fe===ch||fe===lh||fe===oh}if(z){let fe=D.texture.type,we=fe===Vn||fe===is||fe===Mr||fe===ki||fe===rh||fe===ah,ke=Oe.getClearColor(),Be=Oe.getClearAlpha(),et=ke.r,it=ke.g,ze=ke.b;we?(g[0]=et,g[1]=it,g[2]=ze,g[3]=Be,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=et,v[1]=it,v[2]=ze,v[3]=Be,U.clearBufferiv(U.COLOR,0,v))}else Y|=U.COLOR_BUFFER_BIT}B&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Me.dispose(),tt.dispose(),Ve.dispose(),S.dispose(),G.dispose(),te.dispose(),ht.dispose(),k.dispose(),Ue.dispose(),K.dispose(),K.removeEventListener("sessionstart",mt),K.removeEventListener("sessionend",_t),kt.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=ct.autoReset,B=Ae.enabled,q=Ae.autoUpdate,Y=Ae.needsUpdate,z=Ae.type;ge(),ct.autoReset=A,Ae.enabled=B,Ae.autoUpdate=q,Ae.needsUpdate=Y,Ae.type=z}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){let B=A.target;B.removeEventListener("dispose",Qe),R(B)}function R(A){V(A),Ve.remove(A)}function V(A){let B=Ve.get(A).programs;B!==void 0&&(B.forEach(function(q){Ue.releaseProgram(q)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,Y,z,fe){B===null&&(B=Ne);let we=z.isMesh&&z.matrixWorld.determinant()<0,ke=sp(A,B,q,Y,z);Le.setMaterial(Y,we);let Be=q.index,et=1;if(Y.wireframe===!0){if(Be=re.getWireframeAttribute(q),Be===void 0)return;et=2}let it=q.drawRange,ze=q.attributes.position,gt=it.start*et,At=(it.start+it.count)*et;fe!==null&&(gt=Math.max(gt,fe.start*et),At=Math.min(At,(fe.start+fe.count)*et)),Be!==null?(gt=Math.max(gt,0),At=Math.min(At,Be.count)):ze!=null&&(gt=Math.max(gt,0),At=Math.min(At,ze.count));let Rt=At-gt;if(Rt<0||Rt===1/0)return;ht.setup(z,Y,ke,q,Be);let yn,xt=Re;if(Be!==null&&(yn=se.get(Be),xt=rt,xt.setIndex(yn)),z.isMesh)Y.wireframe===!0?(Le.setLineWidth(Y.wireframeLinewidth*Te()),xt.setMode(U.LINES)):xt.setMode(U.TRIANGLES);else if(z.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),Le.setLineWidth(Ge*Te()),z.isLineSegments?xt.setMode(U.LINES):z.isLineLoop?xt.setMode(U.LINE_LOOP):xt.setMode(U.LINE_STRIP)}else z.isPoints?xt.setMode(U.POINTS):z.isSprite&&xt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)xt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))xt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ge=z._multiDrawStarts,hi=z._multiDrawCounts,bt=z._multiDrawCount,kn=Be?se.get(Be).bytesPerElement:1,fs=Ve.get(Y).currentProgram.getUniforms();for(let Mn=0;Mn<bt;Mn++)fs.setValue(U,"_gl_DrawID",Mn),xt.render(Ge[Mn]/kn,hi[Mn])}else if(z.isInstancedMesh)xt.renderInstances(gt,Rt,z.count);else if(q.isInstancedBufferGeometry){let Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,hi=Math.min(q.instanceCount,Ge);xt.renderInstances(gt,Rt,hi)}else xt.render(gt,Rt)};function Q(A,B,q){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,Zr(A,B,q),A.side=Fi,A.needsUpdate=!0,Zr(A,B,q),A.side=ln):Zr(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),m=tt.get(q),m.init(B),_.push(m),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),A!==q&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let Y=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let fe=z.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){let ke=fe[we];Q(ke,q,z),Y.add(ke)}else Q(fe,q,z),Y.add(fe)}),_.pop(),m=null,Y},this.compileAsync=function(A,B,q=null){let Y=this.compile(A,B,q);return new Promise(z=>{function fe(){if(Y.forEach(function(we){Ve.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){z(A);return}setTimeout(fe,10)}Je.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ue=null;function We(A){ue&&ue(A)}function mt(){kt.stop()}function _t(){kt.start()}let kt=new Nd;kt.setAnimationLoop(We),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(A){ue=A,K.setAnimationLoop(A),A===null?kt.stop():kt.start()},K.addEventListener("sessionstart",mt),K.addEventListener("sessionend",_t),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,D),m=tt.get(A,_.length),m.init(B),_.push(m),$.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix($),ve=this.localClippingEnabled,he=le.init(this.clippingPlanes,ve),p=Me.get(A,E.length),p.init(),E.push(p),K.enabled===!0&&K.isPresenting===!0){let fe=x.xr.getDepthSensingMesh();fe!==null&&jt(fe,B,-1/0,x.sortObjects)}jt(A,B,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(J,oe),_e=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,_e&&Oe.addToRenderList(p,A),this.info.render.frame++,he===!0&&le.beginShadows();let q=m.state.shadowsArray;Ae.render(q,A,B),he===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=p.opaque,z=p.transmissive;if(m.setupLights(),B.isArrayCamera){let fe=B.cameras;if(z.length>0)for(let we=0,ke=fe.length;we<ke;we++){let Be=fe[we];eu(Y,z,A,Be)}_e&&Oe.render(A);for(let we=0,ke=fe.length;we<ke;we++){let Be=fe[we];Qh(p,A,Be,Be.viewport)}}else z.length>0&&eu(Y,z,A,B),_e&&Oe.render(A),Qh(p,A,B);D!==null&&(L.updateMultisampleRenderTarget(D),L.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(x,A,B),ht.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?(m=_[_.length-1],he===!0&&le.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function jt(A,B,q,Y){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Y&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);let we=te.update(A),ke=A.material;ke.visible&&p.push(A,we,ke,q,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){let we=te.update(A),ke=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),de.copy(we.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4($)),Array.isArray(ke)){let Be=we.groups;for(let et=0,it=Be.length;et<it;et++){let ze=Be[et],gt=ke[ze.materialIndex];gt&&gt.visible&&p.push(A,we,gt,q,de.z,ze)}}else ke.visible&&p.push(A,we,ke,q,de.z,null)}}let fe=A.children;for(let we=0,ke=fe.length;we<ke;we++)jt(fe[we],B,q,Y)}function Qh(A,B,q,Y){let z=A.opaque,fe=A.transmissive,we=A.transparent;m.setupLightsView(q),he===!0&&le.setGlobalState(x.clippingPlanes,q),Y&&Le.viewport(C.copy(Y)),z.length>0&&Yr(z,B,q),fe.length>0&&Yr(fe,B,q),we.length>0&&Yr(we,B,q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function eu(A,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Et(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Lt:Vn,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let fe=m.state.transmissionRenderTarget[Y.id],we=Y.viewport||C;fe.setSize(we.z,we.w);let ke=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(H),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),_e&&Oe.render(q);let Be=x.toneMapping;x.toneMapping=Oi;let et=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),he===!0&&le.setGlobalState(x.clippingPlanes,Y),Yr(A,q,Y),L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let ze=0,gt=B.length;ze<gt;ze++){let At=B[ze],Rt=At.object,yn=At.geometry,xt=At.material,Ge=At.group;if(xt.side===ln&&Rt.layers.test(Y.layers)){let hi=xt.side;xt.side=cn,xt.needsUpdate=!0,tu(Rt,q,Y,yn,xt,Ge),xt.side=hi,xt.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe))}x.setRenderTarget(ke),x.setClearColor(H,Z),et!==void 0&&(Y.viewport=et),x.toneMapping=Be}function Yr(A,B,q){let Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,fe=A.length;z<fe;z++){let we=A[z],ke=we.object,Be=we.geometry,et=Y===null?we.material:Y,it=we.group;ke.layers.test(q.layers)&&tu(ke,B,q,Be,et,it)}}function tu(A,B,q,Y,z,fe){A.onBeforeRender(x,B,q,Y,z,fe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,B,q,Y,A,fe),z.transparent===!0&&z.side===ln&&z.forceSinglePass===!1?(z.side=cn,z.needsUpdate=!0,x.renderBufferDirect(q,B,Y,z,A,fe),z.side=Fi,z.needsUpdate=!0,x.renderBufferDirect(q,B,Y,z,A,fe),z.side=ln):x.renderBufferDirect(q,B,Y,z,A,fe),A.onAfterRender(x,B,q,Y,z,fe)}function Zr(A,B,q){B.isScene!==!0&&(B=Ne);let Y=Ve.get(A),z=m.state.lights,fe=m.state.shadowsArray,we=z.state.version,ke=Ue.getParameters(A,z.state,fe,B,q),Be=Ue.getProgramCacheKey(ke),et=Y.programs;Y.environment=A.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(A.isMeshStandardMaterial?G:S).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Qe),et=new Map,Y.programs=et);let it=et.get(Be);if(it!==void 0){if(Y.currentProgram===it&&Y.lightsStateVersion===we)return iu(A,ke),it}else ke.uniforms=Ue.getUniforms(A),A.onBeforeCompile(ke,x),it=Ue.acquireProgram(ke,Be),et.set(Be,it),Y.uniforms=ke.uniforms;let ze=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=le.uniform),iu(A,ke),Y.needsLights=ap(A),Y.lightsStateVersion=we,Y.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=it,Y.uniformsList=null,it}function nu(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Ds.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function iu(A,B){let q=Ve.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function sp(A,B,q,Y,z){B.isScene!==!0&&(B=Ne),L.resetTextureUnits();let fe=B.fog,we=Y.isMeshStandardMaterial?B.environment:null,ke=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:$s,Be=(Y.isMeshStandardMaterial?G:S).get(Y.envMap||we),et=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!q.morphAttributes.position,gt=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,Rt=Oi;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let yn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=yn!==void 0?yn.length:0,Ge=Ve.get(Y),hi=m.state.lights;if(he===!0&&(ve===!0||A!==y)){let Cn=A===y&&Y.id===b;le.setState(Y,A,Cn)}let bt=!1;Y.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==hi.state.version||Ge.outputColorSpace!==ke||z.isBatchedMesh&&Ge.batching===!1||!z.isBatchedMesh&&Ge.batching===!0||z.isBatchedMesh&&Ge.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ge.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ge.instancing===!1||!z.isInstancedMesh&&Ge.instancing===!0||z.isSkinnedMesh&&Ge.skinning===!1||!z.isSkinnedMesh&&Ge.skinning===!0||z.isInstancedMesh&&Ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ge.instancingMorph===!1&&z.morphTexture!==null||Ge.envMap!==Be||Y.fog===!0&&Ge.fog!==fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==le.numPlanes||Ge.numIntersection!==le.numIntersection)||Ge.vertexAlphas!==et||Ge.vertexTangents!==it||Ge.morphTargets!==ze||Ge.morphNormals!==gt||Ge.morphColors!==At||Ge.toneMapping!==Rt||Ge.morphTargetsCount!==xt)&&(bt=!0):(bt=!0,Ge.__version=Y.version);let kn=Ge.currentProgram;bt===!0&&(kn=Zr(Y,B,z));let fs=!1,Mn=!1,lr=!1,Ct=kn.getUniforms(),Zn=Ge.uniforms;if(Le.useProgram(kn.program)&&(fs=!0,Mn=!0,lr=!0),Y.id!==b&&(b=Y.id,Mn=!0),fs||y!==A){Le.buffers.depth.getReversed()?(O.copy(A.projectionMatrix),Bp(O),zp(O),Ct.setValue(U,"projectionMatrix",O)):Ct.setValue(U,"projectionMatrix",A.projectionMatrix),Ct.setValue(U,"viewMatrix",A.matrixWorldInverse);let Ri=Ct.map.cameraPosition;Ri!==void 0&&Ri.setValue(U,ie.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&Ct.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ct.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Mn=!0,lr=!0)}if(z.isSkinnedMesh){Ct.setOptional(U,z,"bindMatrix"),Ct.setOptional(U,z,"bindMatrixInverse");let Cn=z.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ct.setValue(U,"boneTexture",Cn.boneTexture,L))}z.isBatchedMesh&&(Ct.setOptional(U,z,"batchingTexture"),Ct.setValue(U,"batchingTexture",z._matricesTexture,L),Ct.setOptional(U,z,"batchingIdTexture"),Ct.setValue(U,"batchingIdTexture",z._indirectTexture,L),Ct.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Ct.setValue(U,"batchingColorTexture",z._colorsTexture,L));let cr=q.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&Ze.update(z,q,kn),(Mn||Ge.receiveShadow!==z.receiveShadow)&&(Ge.receiveShadow=z.receiveShadow,Ct.setValue(U,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Zn.envMap.value=Be,Zn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Zn.envMapIntensity.value=B.environmentIntensity),Mn&&(Ct.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&rp(Zn,lr),fe&&Y.fog===!0&&ye.refreshFogUniforms(Zn,fe),ye.refreshMaterialUniforms(Zn,Y,X,ae,m.state.transmissionRenderTarget[A.id]),Ds.upload(U,nu(Ge),Zn,L)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ds.upload(U,nu(Ge),Zn,L),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ct.setValue(U,"center",z.center),Ct.setValue(U,"modelViewMatrix",z.modelViewMatrix),Ct.setValue(U,"normalMatrix",z.normalMatrix),Ct.setValue(U,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Cn=Y.uniformsGroups;for(let Ri=0,Ci=Cn.length;Ri<Ci;Ri++){let su=Cn[Ri];k.update(su,kn),k.bind(su,kn)}}return kn}function rp(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ap(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,B,q){Ve.get(A.texture).__webglTexture=B,Ve.get(A.depthTexture).__webglTexture=q;let Y=Ve.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){let q=Ve.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,q=0){D=A,M=B,T=q;let Y=!0,z=null,fe=!1,we=!1;if(A){let Be=Ve.get(A);if(Be.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Be.__hasExternalTextures)L.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ze=A.depthTexture;if(Be.__boundDepthTexture!==ze){if(ze!==null&&Ve.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}let et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(we=!0);let it=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[B])?z=it[B][q]:z=it[B],fe=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?z=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?z=it[q]:z=it,C.copy(A.viewport),I.copy(A.scissor),F=A.scissorTest}else C.copy(me).multiplyScalar(X).floor(),I.copy(Se).multiplyScalar(X).floor(),F=Ke;if(Le.bindFramebuffer(U.FRAMEBUFFER,z)&&Y&&Le.drawBuffers(A,z),Le.viewport(C),Le.scissor(I),Le.setScissorTest(F),fe){let Be=Ve.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Be.__webglTexture,q)}else if(we){let Be=Ve.get(A.texture),et=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Be.__webglTexture,q||0,et)}b=-1},this.readRenderTargetPixels=function(A,B,q,Y,z,fe,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke){Le.bindFramebuffer(U.FRAMEBUFFER,ke);try{let Be=A.texture,et=Be.format,it=Be.type;if(!Xe.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-z&&U.readPixels(B,q,Y,z,$e.convert(et),$e.convert(it),fe)}finally{let Be=D!==null?Ve.get(D).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,Y,z,fe,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(ke=ke[we]),ke){let Be=A.texture,et=Be.format,it=Be.type;if(!Xe.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-z){Le.bindFramebuffer(U.FRAMEBUFFER,ke);let ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ze),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(B,q,Y,z,$e.convert(et),$e.convert(it),0);let gt=D!==null?Ve.get(D).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,gt);let At=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await kp(U,At,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.deleteBuffer(ze),U.deleteSync(At),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,q=0){A.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);let Y=Math.pow(2,-q),z=Math.floor(A.image.width*Y),fe=Math.floor(A.image.height*Y),we=B!==null?B.x:0,ke=B!==null?B.y:0;L.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,we,ke,z,fe),Le.unbindTexture()},this.copyTextureToTexture=function(A,B,q=null,Y=null,z=0){A.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],B=arguments[2],z=arguments[3]||0,q=null);let fe,we,ke,Be,et,it,ze,gt,At,Rt=A.isCompressedTexture?A.mipmaps[z]:A.image;q!==null?(fe=q.max.x-q.min.x,we=q.max.y-q.min.y,ke=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,et=q.min.y,it=q.isBox3?q.min.z:0):(fe=Rt.width,we=Rt.height,ke=Rt.depth||1,Be=0,et=0,it=0),Y!==null?(ze=Y.x,gt=Y.y,At=Y.z):(ze=0,gt=0,At=0);let yn=$e.convert(B.format),xt=$e.convert(B.type),Ge;B.isData3DTexture?(L.setTexture3D(B,0),Ge=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Ge=U.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Ge=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let hi=U.getParameter(U.UNPACK_ROW_LENGTH),bt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),kn=U.getParameter(U.UNPACK_SKIP_PIXELS),fs=U.getParameter(U.UNPACK_SKIP_ROWS),Mn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,it);let lr=A.isDataArrayTexture||A.isData3DTexture,Ct=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Zn=Ve.get(A),cr=Ve.get(B),Cn=Ve.get(Zn.__renderTarget),Ri=Ve.get(cr.__renderTarget);Le.bindFramebuffer(U.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Le.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ci=0;Ci<ke;Ci++)lr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.get(A).__webglTexture,z,it+Ci),A.isDepthTexture?(Ct&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.get(B).__webglTexture,z,At+Ci),U.blitFramebuffer(Be,et,fe,we,ze,gt,fe,we,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ct?U.copyTexSubImage3D(Ge,z,ze,gt,At+Ci,Be,et,fe,we):U.copyTexSubImage2D(Ge,z,ze,gt,At+Ci,Be,et,fe,we);Le.bindFramebuffer(U.READ_FRAMEBUFFER,null),Le.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ct?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ge,z,ze,gt,At,fe,we,ke,yn,xt,Rt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ge,z,ze,gt,At,fe,we,ke,yn,Rt.data):U.texSubImage3D(Ge,z,ze,gt,At,fe,we,ke,yn,xt,Rt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,ze,gt,fe,we,yn,xt,Rt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,ze,gt,Rt.width,Rt.height,yn,Rt.data):U.texSubImage2D(U.TEXTURE_2D,z,ze,gt,fe,we,yn,xt,Rt);U.pixelStorei(U.UNPACK_ROW_LENGTH,hi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kn),U.pixelStorei(U.UNPACK_SKIP_ROWS,fs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mn),z===0&&B.generateMipmaps&&U.generateMipmap(Ge),Le.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q=null,Y=null,z=0){return A.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],B=arguments[3],z=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,q,Y,z)},this.initRenderTarget=function(A){Ve.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){M=0,T=0,D=null,Le.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}},Ba=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var zs=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Hs=class extends xn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=hn,h=hn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vs=class extends ni{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},za=new N,Ha=new N,sd=new ft,mr=new Os,va=new ss,Ml=new N,rd=new N,Rc=class extends tn{constructor(e=new Ut,t=new Vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),Ha.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=za.distanceTo(Ha);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;sd.copy(s).invert(),mr.copy(e.ray).applyMatrix4(sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=h.getX(v),E=h.getX(v+1),_=ya(this,e,mr,l,m,E);_&&t.push(_)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(f),m=ya(this,e,mr,l,v,p);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=ya(this,e,mr,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=ya(this,e,mr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ya(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(za.fromBufferAttribute(a,s),Ha.fromBufferAttribute(a,r),t.distanceSqToSegment(za,Ha,Ml,rd)>n)return;Ml.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ml);if(!(l<e.near||l>e.far))return{distance:l,point:rd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ad=new N,od=new N,Ar=class extends Rc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ad.fromBufferAttribute(t,s),od.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ad.distanceTo(od);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rr=class extends ni{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ld=new ft,Cc=new Os,_a=new ss,xa=new N,Va=class extends tn{constructor(e=new Ut,t=new Rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;ld.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let p=c.getX(g);xa.fromBufferAttribute(u,p),cd(xa,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)xa.fromBufferAttribute(u,g),cd(xa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cd(i,e,t,n,s,r,a){let o=Cc.distanceSqToPoint(i);if(o<t){let l=new N;Cc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ii=class extends xn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new N,s=[],r=[],a=[],o=new N,l=new ft;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ga=class extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pc=class extends Ga{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ba=new N,Sl=new fh,Tl=new fh,El=new fh,Vi=class extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ba.subVectors(s[0],s[1]).add(s[0]),c=ba);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ba.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Sl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),Tl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),El.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Tl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),El.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Sl.calc(l),Tl.calc(l),El.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ly(i,e){let t=1-i;return t*t*e}function Ny(i,e){return 2*(1-i)*i*e}function Uy(i,e){return i*i*e}function xr(i,e,t,n){return Ly(i,e)+Ny(i,t)+Uy(i,n)}function Oy(i,e){let t=1-i;return t*t*t*e}function Fy(i,e){let t=1-i;return 3*t*t*i*e}function ky(i,e){return 3*(1-i)*i*i*e}function By(i,e){return i*i*i*e}function br(i,e,t,n,s){return Oy(i,e)+Fy(i,t)+ky(i,n)+By(i,s)}var Ic=class extends Gn{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(e,s.x,r.x,a.x,o.x),br(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dc=class extends Gn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(e,s.x,r.x,a.x,o.x),br(e,s.y,r.y,a.y,o.y),br(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lc=class extends Gn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends Gn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends Gn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Gn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y),xr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(hd(o,l.x,c.x,h.x,u.x),hd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},zy=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:Vi,CubicBezierCurve:Ic,CubicBezierCurve3:Dc,EllipseCurve:Ga,LineCurve:Lc,LineCurve3:Nc,QuadraticBezierCurve:Uc,QuadraticBezierCurve3:Wa,SplineCurve:Oc});var $a=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new N,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},mn=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],p=n/2,m=0;E(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function E(){let x=new N,P=new N,M=0,T=(t-e)/n;for(let D=0;D<=r;D++){let b=[],y=D/r,C=y*(t-e)+e;for(let I=0;I<=s;I++){let F=I/s,H=F*l+o,Z=Math.sin(H),W=Math.cos(H);P.x=C*Z,P.y=-y*n+p,P.z=C*W,u.push(P.x,P.y,P.z),x.set(Z,T,W).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-y),b.push(g++)}v.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let y=v[b][D],C=v[b+1][D],I=v[b+1][D+1],F=v[b][D+1];(e>0||b!==0)&&(h.push(y,C,F),M+=3),(t>0||b!==r-1)&&(h.push(C,I,F),M+=3)}c.addGroup(m,M,0),m+=M}function _(x){let P=g,M=new pe,T=new N,D=0,b=x===!0?e:t,y=x===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;let C=g;for(let I=0;I<=s;I++){let H=I/s*l+o,Z=Math.cos(H),W=Math.sin(H);T.x=b*W,T.y=p*y,T.z=b*Z,u.push(T.x,T.y,T.z),d.push(0,y,0),M.x=Z*.5+.5,M.y=W*.5*y+.5,f.push(M.x,M.y),g++}for(let I=0;I<s;I++){let F=P+I,H=C+I;x===!0?h.push(H,H+1,F):h.push(H+1,H,F),D+=3}c.addGroup(m,D,x===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rs=class i extends mn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wn=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,d=new N,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let E=[],_=m/n,x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){let M=P/t;u.x=-e*Math.cos(s+M*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+M*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(M+x,1-_),E.push(c++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<t;E++){let _=h[m][E+1],x=h[m][E],P=h[m+1][E],M=h[m+1][E+1];(m!==0||a>0)&&f.push(_,x,M),(m!==n-1||l<Math.PI)&&f.push(x,P,M)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ln=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,E=(s+1)*f+g;a.push(v,p,E),a.push(p,m,E)}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Xa=class i extends Ut{constructor(e=new Wa(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new pe,h=new N,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function v(){for(let _=0;_<t;_++)p(_);p(r===!1?t:0),E(),m()}function p(_){h=e.getPointAt(_/t,h);let x=a.normals[_],P=a.binormals[_];for(let M=0;M<=s;M++){let T=M/s*Math.PI*2,D=Math.sin(T),b=-Math.cos(T);l.x=b*x.x+D*P.x,l.y=b*x.y+D*P.y,l.z=b*x.z+D*P.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){let P=(s+1)*(_-1)+(x-1),M=(s+1)*_+(x-1),T=(s+1)*_+x,D=(s+1)*(_-1)+x;g.push(P,M,D),g.push(M,T,D)}}function E(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)c.x=_/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new zy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var qa=class extends dt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ht=class extends ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},as=class extends Ht{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ya=class extends ni{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Ma(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Hy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cu:r=e,o=2*t-n;break;case hu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:a=e,l=2*n-t;break;case hu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,E=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*v+.5*g,x=f*p-f*v;for(let P=0;P!==o;++P)r[P]=m*a[h+P]+E*a[c+P]+_*a[l+P]+x*a[u+P];return r}},kc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Bc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ma(t,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ma(e.times,Array),values:Ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ra:t=this.InterpolantFactoryMethodDiscrete;break;case dc:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Hy(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=dc;var os=class extends Wn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ra;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends Wn{};zc.prototype.ValueTypeName="color";var Hc=class extends Wn{};Hc.prototype.ValueTypeName="number";var Vc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Hi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Za=class extends Wn{InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Wn{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ra;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Wn{};Gc.prototype.ValueTypeName="vector";var Wc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Vy=new Wc,$c=class{constructor(e){this.manager=e!==void 0?e:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$c.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ka=class extends Cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wl=new ft,ud=new N,dd=new N,Ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xc=class extends Ja{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},cs=class extends Cr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fd=new ft,gr=new N,Al=new N,qc=class extends Ja{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),Al.copy(n.position),Al.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Al),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}},Gi=class extends Cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pd(){return performance.now()}var ph="\\[\\]\\.:\\/",Gy=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",Wy="[^"+ph.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",mh),Xy=/(WCOD+)?/.source.replace("WCOD",Wy),qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),Yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),Zy=new RegExp("^"+$y+Xy+qy+Yy+"$"),Ky=["material","materials","bones","map"],Yc=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gy,"")}static parseTrackName(e){let t=Zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ky.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Yc;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);var md=new ft,Qa=class{constructor(e,t,n=0,s=1/0){this.ray=new Os(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,n=[]){return Zc(e,this,n,t),n.sort(gd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Zc(e[s],this,n,t);return n.sort(gd),n}};function gd(i,e){return i.distance-e.distance}function Zc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Zc(r[a],e,t,!0)}}var eo=class extends Ar{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ut;r.setIndex(new pn(n,1)),r.setAttribute("position",new pt(s,3)),super(r,new Vs({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);function hs(i){let e=i>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296)}function Mi(i,e,t,n){let s=new Float32Array(i*i),r=1,a=0,o=hs(n);for(let l=0;l<t;l++,e*=2,r*=.5){let c=new Float32Array(e*e);for(let u=0;u<c.length;u++)c[u]=o();let h=e/i;for(let u=0;u<i;u++){let d=u*h,f=Math.floor(d)%e,g=(f+1)%e,v=d-Math.floor(d),p=v*v*(3-2*v);for(let m=0;m<i;m++){let E=m*h,_=Math.floor(E)%e,x=(_+1)%e,P=E-Math.floor(E),M=P*P*(3-2*P),T=c[f*e+_]+(c[f*e+x]-c[f*e+_])*M,D=c[g*e+_]+(c[g*e+x]-c[g*e+_])*M;s[u*i+m]+=(T+(D-T)*p)*r}}a+=r}for(let l=0;l<s.length;l++)s[l]/=a;return s}function $n(i,{srgb:e=!0,repeat:t=!0}={}){let n=new ii(i);return e&&(n.colorSpace=zt),t&&(n.wrapS=n.wrapT=Yt),n.anisotropy=8,n}function Xn(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function gh(i,e,t){t(e),e<i*.25&&t(e+i),e>i*.75&&t(e-i)}function vh({base:i=[214,218,221],seed:e=1,size:t=512,grime:n=1}={}){let s=Mi(t,4,5,e),r=Mi(t,64,2,e+7),a=Xn(t),o=a.getContext("2d"),l=o.createImageData(t,t),c=Xn(t),h=c.getContext("2d"),u=h.createImageData(t,t);for(let p=0;p<t*t;p++){let m=.9+.12*s[p]+.025*(r[p]-.5);l.data[p*4]=i[0]*m,l.data[p*4+1]=i[1]*m,l.data[p*4+2]=i[2]*m,l.data[p*4+3]=255;let E=128+40*(r[p]-.5)+50*(s[p]-.5);u.data[p*4]=u.data[p*4+1]=u.data[p*4+2]=E,u.data[p*4+3]=255}o.putImageData(l,0,0),h.putImageData(u,0,0);let d=hs(e*31);for(let p=0;p<7*n;p++){let m=d()*t,E=d()*t*.8,_=20+d()*70;gh(t,m,x=>{let P=o.createRadialGradient(x,E,_*.2,x,E,_);P.addColorStop(0,`rgba(120,98,60,${.05+d()*.06})`),P.addColorStop(.85,"rgba(110,90,55,0.03)"),P.addColorStop(1,"rgba(110,90,55,0)"),o.fillStyle=P,o.fillRect(x-_,E-_,_*2,_*2)})}for(let p=0;p<16*n;p++){let m=d()*t,E=t*(.15+d()*.5),_=1+d()*3,x=o.createLinearGradient(0,0,0,E);x.addColorStop(0,`rgba(90,80,65,${.06+d()*.06})`),x.addColorStop(1,"rgba(90,80,65,0)"),gh(t,m,P=>{o.fillStyle=x,o.fillRect(P,0,_,E)})}let f=o.createLinearGradient(0,t*.8,0,t);f.addColorStop(0,"rgba(60,55,48,0)"),f.addColorStop(1,`rgba(60,55,48,${.22*n})`),o.fillStyle=f,o.fillRect(0,t*.8,t,t*.2);for(let p=0;p<40*n;p++){let m=d()*t,E=t*(.9+d()*.09),_=6+d()*30;o.strokeStyle=`rgba(30,28,26,${.08+d()*.15})`,o.lineWidth=1+d()*2,gh(t,m,x=>{o.beginPath(),o.moveTo(x,E),o.quadraticCurveTo(x+_/2,E-3+d()*6,x+_,E+(d()-.5)*4),o.stroke()})}let g=$n(a),v=$n(c,{srgb:!1});return{map:g,bump:v}}function yh({base:i=[118,124,130],grout:e=[70,72,74],seed:t=2,size:n=512,tiles:s=4}={}){let r=Mi(n,4,5,t),a=Mi(n,128,1,t+3),o=Xn(n),l=o.getContext("2d"),c=l.createImageData(n,n),h=Xn(n),u=h.getContext("2d"),d=u.createImageData(n,n),f=Xn(n),g=f.getContext("2d"),v=g.createImageData(n,n),p=hs(t*17),m=Array.from({length:s*s},()=>.93+p()*.12),E=n/s,_=2.5;for(let x=0;x<n;x++)for(let P=0;P<n;P++){let M=x*n+P,T=P%E,D=x%E,b=T<_||D<_,y=m[Math.floor(x/E)*s+Math.floor(P/E)],C=(.88+.16*r[M]+.08*(a[M]-.5))*(b?1:y),I=b?e:i;c.data[M*4]=I[0]*C,c.data[M*4+1]=I[1]*C,c.data[M*4+2]=I[2]*C,c.data[M*4+3]=255;let F=b?40:170+30*(a[M]-.5);d.data[M*4]=d.data[M*4+1]=d.data[M*4+2]=F,d.data[M*4+3]=255;let H=b?250:120+110*r[M];v.data[M*4]=v.data[M*4+1]=v.data[M*4+2]=H,v.data[M*4+3]=255}l.putImageData(c,0,0),u.putImageData(d,0,0),g.putImageData(v,0,0);for(let x=0;x<55;x++){let P=p()*n,M=p()*n,T=8+p()*40,D=p()*Math.PI;l.strokeStyle=`rgba(20,20,20,${.06+p()*.16})`,l.lineWidth=.8+p()*1.8,l.beginPath(),l.moveTo(P,M),l.quadraticCurveTo(P+Math.cos(D)*T/2+(p()-.5)*10,M+Math.sin(D)*T/2,P+Math.cos(D)*T,M+Math.sin(D)*T),l.stroke()}for(let x=0;x<6;x++){let P=p()*n,M=p()*n,T=10+p()*34,D=l.createRadialGradient(P,M,2,P,M,T);D.addColorStop(0,"rgba(70,60,45,.10)"),D.addColorStop(1,"rgba(70,60,45,0)"),l.fillStyle=D,l.beginPath(),l.ellipse(P,M,T,T*(.5+p()*.5),p()*3,0,Math.PI*2),l.fill()}return{map:$n(o),bump:$n(h,{srgb:!1}),rough:$n(f,{srgb:!1})}}function Bd({seed:i=3,size:e=512,tiles:t=4}={}){let n=Mi(e,128,2,i),s=Mi(e,8,3,i+1),r=Xn(e),a=r.getContext("2d"),o=a.createImageData(e,e);for(let h=0;h<e*e;h++){let u=.82+.1*s[h]+.16*(n[h]-.5);o.data[h*4]=212*u,o.data[h*4+1]=210*u,o.data[h*4+2]=204*u,o.data[h*4+3]=255}a.putImageData(o,0,0);let l=hs(i*13),c=e/t;for(let h=0;h<3;h++){let u=Math.floor(l()*t)*c,d=Math.floor(l()*t)*c,f=a.createRadialGradient(u+c/2,d+c/2,4,u+c/2,d+c/2,c*.6);f.addColorStop(0,"rgba(150,120,70,.28)"),f.addColorStop(.7,"rgba(150,120,70,.12)"),f.addColorStop(1,"rgba(150,120,70,0)"),a.fillStyle=f,a.fillRect(u,d,c,c)}a.fillStyle="#e8e8e4";for(let h=0;h<=t;h++)a.fillRect(h*c-3,0,6,e),a.fillRect(0,h*c-3,e,6);a.fillStyle="rgba(0,0,0,.25)";for(let h=0;h<=t;h++)a.fillRect(h*c+3,0,1.5,e),a.fillRect(0,h*c+3,e,1.5);return{map:$n(r)}}function _h({base:i=[160,168,176],seed:e=4,size:t=256,brushed:n=!0}={}){let s=Mi(t,4,4,e),r=Xn(t),a=r.getContext("2d"),o=a.createImageData(t,t),l=Xn(t),c=l.getContext("2d"),h=c.createImageData(t,t),u=hs(e*7),d=new Float32Array(t);for(let f=0;f<t;f++)d[f]=u();for(let f=0;f<t;f++)for(let g=0;g<t;g++){let v=f*t+g,p=n?d[f]*.08:0,m=.9+.1*s[v]+p;o.data[v*4]=i[0]*m,o.data[v*4+1]=i[1]*m,o.data[v*4+2]=i[2]*m,o.data[v*4+3]=255;let E=90+80*s[v]+(n?d[f]*40:0);h.data[v*4]=h.data[v*4+1]=h.data[v*4+2]=E,h.data[v*4+3]=255}a.putImageData(o,0,0),c.putImageData(h,0,0);for(let f=0;f<30;f++){let g=u()*t,v=u()*t,p=5+u()*40,m=u()*Math.PI;a.strokeStyle=`rgba(255,255,255,${.05+u()*.12})`,a.lineWidth=.6,a.beginPath(),a.moveTo(g,v),a.lineTo(g+Math.cos(m)*p,v+Math.sin(m)*p),a.stroke()}return{map:$n(r),rough:$n(l,{srgb:!1})}}function xh({base:i=[236,239,241],seed:e=5,size:t=256}={}){let n=Mi(t,64,2,e),s=Mi(t,4,3,e+2),r=Xn(t),a=r.getContext("2d"),o=a.createImageData(t,t);for(let c=0;c<t*t;c++){let h=Math.floor(c/t)/t,u=(.93+.06*s[c]+.04*(n[c]-.5))*(h>.9?1-(h-.9)*1.5:1);o.data[c*4]=i[0]*u,o.data[c*4+1]=i[1]*u,o.data[c*4+2]=i[2]*u,o.data[c*4+3]=255}a.putImageData(o,0,0);let l=hs(e*5);for(let c=0;c<14;c++){let h=l()*t,u=l()*t;a.strokeStyle=`rgba(60,60,60,${.05+l()*.1})`,a.lineWidth=.8,a.beginPath(),a.moveTo(h,u),a.lineTo(h+(l()-.5)*30,u+(l()-.5)*8),a.stroke()}return{map:$n(r,{repeat:!1})}}function Kt(i,e,t,n=1,s=9){let r=hs(s+e*7+t*13);i.save();for(let u=0;u<e*t*.004*n;u++)i.fillStyle=r()<.5?`rgba(0,0,0,${.03+r()*.06})`:`rgba(255,255,255,${.03+r()*.05})`,i.fillRect(r()*e,r()*t,1+r()*2,1+r()*2);for(let u=0;u<6*n;u++){i.strokeStyle=`rgba(0,0,0,${.05+r()*.07})`,i.lineWidth=.8;let d=r()*e,f=r()*t;i.beginPath(),i.moveTo(d,f),i.lineTo(d+(r()-.5)*e*.3,f+(r()-.5)*t*.1),i.stroke()}let a=Math.min(e,t)*.18;for(let[u,d,f,g]of[[0,0,0,a],[0,t,0,t-a],[0,0,a,0],[e,0,e-a,0]]){let v=i.createLinearGradient(u,d,f,g);v.addColorStop(0,`rgba(40,35,28,${.16*n})`),v.addColorStop(1,"rgba(40,35,28,0)"),i.fillStyle=v,i.fillRect(0,0,e,t)}let o=r()*e,l=r()*t,c=Math.min(e,t)*.12,h=i.createRadialGradient(o,l,1,o,l,c);h.addColorStop(0,`rgba(60,50,40,${.07*n})`),h.addColorStop(1,"rgba(60,50,40,0)"),i.fillStyle=h,i.fillRect(o-c,l-c,c*2,c*2),i.restore()}function zd(){let i=Xn(128),e=i.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(.55,"rgba(0,0,0,.28)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),$n(i,{srgb:!1,repeat:!1})}function Hd(){let i=Xn(4,64),e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,64);return t.addColorStop(0,"rgba(0,0,0,.5)"),t.addColorStop(.35,"rgba(0,0,0,.18)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,4,64),$n(i,{srgb:!1,repeat:!1})}var He={sans:'"Segoe UI", "Helvetica Neue", Roboto, Arial, sans-serif',mono:'Consolas, Menlo, "DejaVu Sans Mono", "Courier New", monospace'};function yt(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=new ii(n);return r.colorSpace=zt,r.anisotropy=4,r.userData.ctx=s,t&&t(s,i,e),r}function An(i,e){let t=i.userData.ctx;e(t,t.canvas.width,t.canvas.height),i.needsUpdate=!0}function Jy(i,e,t){let n=/(\d+(?:\.\d+)?)px/.exec(i.font);if(!n)return;let s=Number(n[1]);for(;s>8&&i.measureText(e).width>t;)s-=1,i.font=i.font.replace(/\d+(?:\.\d+)?px/,`${s}px`)}function $t(i,{w:e=512,h:t=256,bg:n="#f2f2ee",fg:s="#111",font:r=`bold 44px ${He.sans}`,border:a=null,align:o="center",weathered:l=.6}={}){return yt(e,t,c=>{c.fillStyle=n,c.fillRect(0,0,e,t),a&&(c.strokeStyle=a,c.lineWidth=10,c.strokeRect(5,5,e-10,t-10)),c.textAlign=o,c.textBaseline="middle";let h=t/(i.length+1);i.forEach((u,d)=>{let f=typeof u=="string"?{t:u}:u;c.font=f.font||r,c.fillStyle=f.color||s,Jy(c,f.t,e-(a?44:28)),c.fillText(f.t,o==="center"?e/2:24,h*(d+1))}),l&&Kt(c,e,t,l,i.length*31+e)})}function Vd(){return yt(512,320,(i,e,t)=>{i.fillStyle="#c9ced4",i.fillRect(0,0,e,t);let n=10,s=6,r=8,a=(e-r*2)/n,o=(t-r*2)/s;for(let l=0;l<s;l++)for(let c=0;c<n;c++){let h=r+c*a,u=r+l*o,d=i.createLinearGradient(h,u,h+a,u+o);d.addColorStop(0,"#1a2a6e"),d.addColorStop(1,"#0d1740"),i.fillStyle=d,i.fillRect(h+1.5,u+1.5,a-3,o-3),i.strokeStyle="rgba(200,210,230,.35)",i.lineWidth=1;for(let f=1;f<4;f++)i.beginPath(),i.moveTo(h+f*a/4,u+2),i.lineTo(h+f*a/4,u+o-2),i.stroke()}Kt(i,e,t,.7,5)})}function ao(){let i=yt(256,64,(e,t,n)=>{e.fillStyle="#f2c200",e.fillRect(0,0,t,n),e.fillStyle="#111";for(let s=-n;s<t+n;s+=48)e.beginPath(),e.moveTo(s,n),e.lineTo(s+24,n),e.lineTo(s+24+n,0),e.lineTo(s+n,0),e.fill()});return i.wrapS=Yt,i}function Gd(i,e,t,n,s=50){let r=s/2;i.beginPath(),e==="AND"||e==="NAND"?(i.moveTo(t,n-r),i.lineTo(t+35,n-r),i.arc(t+35,n,r,-Math.PI/2,Math.PI/2),i.lineTo(t,n+r),i.closePath()):e==="OR"||e==="NOR"||e==="XOR"?(i.moveTo(t,n-r),i.quadraticCurveTo(t+45,n-r,t+70,n),i.quadraticCurveTo(t+45,n+r,t,n+r),i.quadraticCurveTo(t+16,n,t,n-r),i.closePath()):e==="NOT"&&(i.moveTo(t,n-20),i.lineTo(t+48,n),i.lineTo(t,n+20),i.closePath()),i.fill(),i.stroke(),e==="XOR"&&(i.beginPath(),i.moveTo(t-9,n-r),i.quadraticCurveTo(t+7,n,t-9,n+r),i.stroke());let a=e==="NOT"?t+48:t+70;return(e==="NOT"||e==="NAND"||e==="NOR")&&(Wd(i,a+6,n),a+=12),a}function Wd(i,e,t){i.beginPath(),i.arc(e,t,6,0,Math.PI*2),i.fill(),i.stroke()}function $d(i,e,t,n,{bg:s="#f3efe2",ink:r="#1c3f94",title:a="FW-BOARD rev.C"}={}){i.fillStyle=s,i.fillRect(0,0,e,t),i.strokeStyle=r,i.fillStyle=r,i.lineWidth=3,i.lineJoin="round",i.font="bold 26px Consolas, monospace",i.textAlign="left",i.fillText(a+"  \u2014  OUT must be 1",24,38),i.save(),i.strokeStyle="rgba(28,63,148,.08)",i.lineWidth=1;for(let _=0;_<e;_+=20)i.beginPath(),i.moveTo(_,50),i.lineTo(_,t),i.stroke();for(let _=50;_<t;_+=20)i.beginPath(),i.moveTo(0,_),i.lineTo(e,_),i.stroke();i.restore();let o={A:70,B:130,C:190,D:250},l=90,c=t-30;i.font="bold 28px Consolas",i.textAlign="center";for(let[_,x]of Object.entries(o))i.fillText(_,x,l-12),i.beginPath(),i.moveTo(x,l),i.lineTo(x,c),i.stroke(),i.beginPath(),i.arc(x,l,5,0,Math.PI*2),i.fill();let h=n.terms,u=h.length,d=430,f=c-l-90,g=[];i.fillStyle=s,h.forEach((_,x)=>{let P=l+30+(u===1?f/2:f*x/(u-1)),M=_.g==="NOT"?[[_.a,P]]:[[_.a,P-12],[_.b,P+12]];for(let[D,b]of M){let y=D[0]==="!",C=y?D[1]:D,I=d+(_.g==="OR"||_.g==="NOR"||_.g==="XOR"?_.g==="XOR"?-9:5:0)-(y?12:0);i.beginPath(),i.moveTo(o[C],b),i.lineTo(I,b),i.stroke(),i.save(),i.fillStyle=r,i.beginPath(),i.arc(o[C],b,5,0,Math.PI*2),i.fill(),i.restore(),y&&Wd(i,I+6,b)}let T=Gd(i,_.g,d,P);i.save(),i.fillStyle=r,i.font="15px Consolas",i.fillText(_.g,d+28,P+42),i.restore(),g.push([T,P])});let v=700,p=l+30+f/2,m=Math.max(70,u*26);g.forEach(([_,x],P)=>{let M=p-m/2+m*(P+1)/(u+1),T=600+P*14;i.beginPath(),i.moveTo(_,x),i.lineTo(T,x),i.lineTo(T,M),i.lineTo(v,M),i.stroke()});let E=Gd(i,"AND",v,p,m);i.save(),i.fillStyle=r,i.font="15px Consolas",i.fillText("AND",v+30,p+m/2+18),i.restore(),i.beginPath(),i.moveTo(E,p),i.lineTo(e-90,p),i.stroke(),i.save(),i.fillStyle=r,i.beginPath(),i.moveTo(e-90,p-16),i.lineTo(e-60,p),i.lineTo(e-90,p+16),i.closePath(),i.fill(),i.fillRect(e-58,p-16,4,32),i.font="bold 22px Consolas",i.fillText("OUT",e-62,p-28),i.restore()}var Xd=[{terms:[{g:"AND",a:"A",b:"!B"},{g:"XOR",a:"C",b:"D"},{g:"OR",a:"B",b:"D"}]},{terms:[{g:"XOR",a:"A",b:"B"},{g:"AND",a:"B",b:"D"},{g:"NOT",a:"C"}]},{terms:[{g:"AND",a:"A",b:"C"},{g:"NOR",a:"B",b:"D"}]},{terms:[{g:"NAND",a:"B",b:"C"},{g:"NOR",a:"A",b:"D"},{g:"XOR",a:"B",b:"D"}]},{terms:[{g:"XOR",a:"!A",b:"C"},{g:"NAND",a:"B",b:"C"},{g:"AND",a:"A",b:"D"}]},{terms:[{g:"XOR",a:"B",b:"D"},{g:"NOR",a:"A",b:"D"},{g:"NAND",a:"!C",b:"!D"}]},{terms:[{g:"AND",a:"A",b:"D"},{g:"NOR",a:"C",b:"!D"},{g:"XOR",a:"B",b:"C"}]},{terms:[{g:"AND",a:"C",b:"D"},{g:"XOR",a:"A",b:"C"},{g:"NOR",a:"A",b:"B"}]}],qd=(i,e)=>e[0]==="!"?1-i["ABCD".indexOf(e[1])]:i["ABCD".indexOf(e)];function jy(i,e){let t=qd(e,i.a),n=i.b?qd(e,i.b):0;switch(i.g){case"AND":return t&n;case"NAND":return 1-(t&n);case"OR":return t|n;case"NOR":return 1-(t|n);case"XOR":return t^n;case"NOT":return 1-t}return 0}var bh=(i,e)=>i.terms.every(t=>jy(t,e)===1)?1:0;function Qy(i){let e=[];for(let t=0;t<16;t++){let n=[t>>3&1,t>>2&1,t>>1&1,t&1];bh(i,n)&&e.push(n.join(""))}return e}function e_(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var t_=["Faraday","Tesla","Kelvin","Ampere","Joule","Hertz","Ohm","Watt"],n_=["GRID","VOLT","WATT","AMPS","OHMS"],i_=["H2","PV","AC","DC"],s_=[10,12,15,18,22,27,33,39,47,56,68,82],Mh=["black","brown","red","orange","yellow","green","blue","violet","grey","white"],oo=["\xD71","\xD710","\xD7100","\xD71 000","\xD710 000","\xD7100 000","\xD71 M","\xD710 M","\xD7100 M","\xD71 G"],qs=["#111","#6b3a1e","#d0231f","#f07f16","#f5d10f","#2c9a3a","#2455c9","#7b3fb0","#8a8a8a","#f4f4f4"];function Yd(i=0){let e;if(!i)e={seed:0,year:1987,cat:"Faraday",lamps:6,res:47,resMult:2,bin:150,circuit:0,f1:"GRID",f3:"H2",swapped:!0};else{let t=e_(Math.imul(i^2654435769,2654435761)^i>>>16),n=s=>s[Math.floor(t()*s.length)];e={seed:i,year:1975+Math.floor(t()*30),cat:n(t_),lamps:4+Math.floor(t()*5),res:n(s_),resMult:2,bin:129+Math.floor(t()*126),circuit:Math.floor(t()*Xd.length),f1:n(n_),f3:n(i_)},e.swapped=t()<.5,t()<.3&&(e.resMult=1)}return e.drawerCode=String(e.res*10**e.resMult).padStart(4,"0"),e.bands=[Math.floor(e.res/10),e.res%10,e.resMult],e.binStr=e.bin.toString(2).padStart(8,"0"),e.circuitDef=Xd[e.circuit],e.boardSolution=Qy(e.circuitDef)[0],e.userPw=e.cat.toLowerCase().split("").reverse().join(""),e.rootPw=`${e.f1}${e.bin}${e.f3}`,e.gridV=i?228+i%6:231,e.gridF=i?Math.round((49.97+i%9/100)*100)/100:50.03,e}var ee={PV_KWP:600,PR:.82,BAT_E:1e3,BAT_P:250,BAT_EFF:.95,SOC_MIN:.05,BAT_WEAR:20,ELZ_P:200,ELZ_MIN:20,ELZ_KWH_KG:55,FC_P:150,FC_MIN:15,FC_KWH_KG:18,H2_MAX:150,H2_GREY:2,RFNBO_MAX:20,LIM:300,FEE:40,SOC0:.5,H2_0:20,WIN_RATIO:.55,STAR3:.85};function tf(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var co=(i,e,t)=>Math.max(e,Math.min(t,i)),$i=i=>{let e=(i+.5-6)/14;return e>0&&e<1?Math.pow(Math.sin(Math.PI*e),1.2):0},lo=i=>1-.75*Math.pow(i,3.4),Zd=[{name:"Mostly sunny, passing clouds around noon",base:.15,trend:0,bump:.5},{name:"Cloudy morning, clearing in the afternoon",base:.6,trend:-.55,bump:0},{name:"Bright morning, thunderstorms later",base:.3,trend:.65,bump:0},{name:"Clear skies \u2014 solar flood on the market",base:.05,trend:0,bump:0},{name:"Overcast, windless evening",base:.95,trend:.05,bump:0}];function Kd(i,e){let t=tf(i*7919+17),n=()=>{let p=1-t(),m=t();return Math.sqrt(-2*Math.log(p))*Math.cos(2*Math.PI*m)},s=Zd[e??Math.floor(t()*Zd.length)],r=[],a=[],o=[],l=[],c=[],h=[],u=[],d=0,f=0;for(let p=0;p<24;p++)d=d*.7+n()*.08,f=.7*f+Math.sqrt(1-.49)*n()*.18,r[p]=co(s.base+s.trend*(p-12)/12+s.bump*Math.exp(-((p-12.5)**2)/3)+d,0,1),a[p]=co(r[p]+f,0,1),o[p]=ee.PV_KWP*ee.PR*$i(p)*lo(r[p]),l[p]=ee.PV_KWP*ee.PR*$i(p)*lo(a[p]),c[p]=Math.round(70+(p>=7&&p<=17?55:0)+(p>=18&&p<=21?20:0)+t()*12);let g=r.slice(8,18).reduce((p,m)=>p+m,0)/10;for(let p=0;p<24;p++){let m=$i(p)*lo(g),E=95+45*Math.exp(-((p-7.5)**2)/3)+115*Math.exp(-((p-19)**2)/4)-30*Math.exp(-((p-3)**2)/6)-175*m+n()*6;h[p]=Math.round(E*10)/10,u[p]=Math.round((E+n()*10+120*(a[p]-r[p])*$i(p))*10)/10}if(t()<.75){let p=17+Math.floor(t()*5);u[p]=Math.round((u[p]+120+t()*220)*10)/10}if(t()<.4){let p=10+Math.floor(t()*5);u[p]=Math.round((u[p]-40-t()*60)*10)/10}let v=Math.round((3+t()*5)*2)/2;return{seed:i,kind:s.name,cloudF:r,cloudA:a,pvF:o,pvA:l,load:c,priceF:h,priceA:u,h2Price:v,variant:0}}function r_(i,e){if(!e)return i;let t=tf(i.seed*7919+17+e*104729),n=()=>{let l=1-t(),c=t();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*c)},s=[],r=[],a=[],o=0;for(let l=0;l<24;l++)o=.7*o+Math.sqrt(1-.49)*n()*.18,s[l]=co(i.cloudF[l]+o,0,1),r[l]=ee.PV_KWP*ee.PR*$i(l)*lo(s[l]),a[l]=Math.round((i.priceF[l]+n()*10+120*(s[l]-i.cloudF[l])*$i(l))*10)/10;if(t()<.75){let l=17+Math.floor(t()*5);a[l]=Math.round((a[l]+120+t()*220)*10)/10}if(t()<.4){let l=10+Math.floor(t()*5);a[l]=Math.round((a[l]-40-t()*60)*10)/10}return{...i,cloudA:s,pvA:r,priceA:a,variant:e}}var nf=(i,e)=>(i>=0?i*e:i*(e+ee.FEE))/1e3,ho=(i,e)=>i>0&&i<e?e:i;function sf(i,e,t,n,s,r=0){if(e<=0||i.h2Price<=ee.H2_GREY)return 0;let a=s<=ee.RFNBO_MAX?e:Math.min(e,Math.max(0,t-n-r));return(e-a)/ee.ELZ_KWH_KG*(i.h2Price-ee.H2_GREY)}function Sh(i){let e=i.h2Price/ee.ELZ_KWH_KG*1e3,t=i.h2Price/ee.FC_KWH_KG*1e3;return{elzEx:e,fcEx:t,fcIm:t-ee.FEE}}function Lr(i,e,t,n,s=!1){let r=s?i.pvF[e]:i.pvA[e],a=s?i.priceF[e]:i.priceA[e],o=i.load[e],l=[],c=t.soc*ee.BAT_E,h=ee.SOC_MIN*ee.BAT_E,u=r*(1-n.curt/100),d=n.bat;if(d>0){let P=Math.max(0,(c-h)*ee.BAT_EFF);d>P+1e-6&&l.push("battery empty"),d=Math.min(d,P)}if(d<0){let P=Math.max(0,(ee.BAT_E-c)/ee.BAT_EFF);-d>P+1e-6&&l.push("battery full"),d=-Math.min(-d,P)}let f=Math.min(ho(n.fc,ee.FC_MIN),t.h2*ee.FC_KWH_KG);f<ee.FC_MIN&&(f=0),f<n.fc-1e-6&&l.push("H\u2082 low");let g=Math.min(ho(n.elz,ee.ELZ_MIN),(ee.H2_MAX-t.h2)*ee.ELZ_KWH_KG);g<ee.ELZ_MIN&&(g=0),g<n.elz-1e-6&&l.push("H\u2082 tank full");let v=u+f+d-o-g;if(v<-ee.LIM){let P=Math.min(g,-ee.LIM-v);g-=P,v+=P,l.push("import limit")}if(v<-ee.LIM&&d<0){let P=Math.min(-d,-ee.LIM-v);d+=P,v+=P}let p=0;if(v>ee.LIM){let P=v-ee.LIM,M=Math.min(u,P);u-=M,P-=M,p+=M;let T=Math.min(f,P);if(f-=T,P-=T,P>0&&d>0){let D=Math.min(d,P);d-=D,P-=D}v=ee.LIM+P,l.push(`export limit (${p.toFixed(0)} kW PV lost)`)}let m=Math.max(0,d)*ee.BAT_WEAR/1e3,E=sf(i,g,u,o,i.priceF[e],Math.max(0,-d));E>.5&&l.push(`grey H\u2082 \u2212\u20AC${E.toFixed(0)}`);let _=nf(v,a)-m-E,x=d>0?c-d/ee.BAT_EFF:c-d*ee.BAT_EFF;return{h:e,price:a,pvRaw:r,pv:u,load:o,bat:d,elz:g,fc:f,net:v,eur:_,wear:m,grey:E,notes:l,soc:x/ee.BAT_E,h2:t.h2+g/ee.ELZ_KWH_KG-f/ee.FC_KWH_KG}}var rf=i=>i.reduce((e,t)=>e+t,0)/i.length;function Ys(i,e,t){let n=(t.soc-ee.SOC0)*ee.BAT_E*ee.BAT_EFF*(rf(i.priceF)-ee.BAT_WEAR)/1e3,s=(t.h2-ee.H2_0)*i.h2Price;return{cash:e,batV:n,h2V:s,total:e+n+s}}function Jd(i){let e={soc:ee.SOC0,h2:ee.H2_0},t=0;for(let n=0;n<24;n++){let s=Lr(i,n,e,{bat:0,elz:0,fc:0,curt:0});t+=s.eur,e=s}return Ys(i,t,e).total}function jd(i,e={pv:i.pvA,price:i.priceA}){let n=ee.SOC_MIN*ee.BAT_E,s=Math.round((ee.BAT_E-n)/25)+1,r=rf(i.priceF),a=Math.floor(ee.BAT_P*ee.BAT_EFF/25),o=Math.floor(ee.BAT_P/ee.BAT_EFF/25),l=[0,.25,.5,.75,1].map(_=>_*ee.ELZ_P),c=[0,1/3,2/3,1].map(_=>Math.round(_*ee.FC_P)),h=_=>_>0?-_*25/ee.BAT_EFF:-_*25*ee.BAT_EFF,u=[],d=[];for(let _=0;_<24;_++){u[_]={},d[_]={};for(let x=-o;x<=a;x++){let P=h(x),M=-1/0,T=null;for(let D of l)for(let b of c)for(let y of[0,25,50,75,100]){let C=e.pv[_]*(1-y/100)+b+P-i.load[_]-D;if(C<-ee.LIM)continue;C>ee.LIM&&(C=ee.LIM);let I=nf(C,e.price[_])-Math.max(0,P)*ee.BAT_WEAR/1e3+(D/ee.ELZ_KWH_KG-b/ee.FC_KWH_KG)*i.h2Price-sf(i,D,e.pv[_]*(1-y/100),i.load[_],i.priceF[_],Math.max(0,-P));I>M&&(M=I,T={elz:D,fc:b,curt:y})}u[_][x]=M,d[_][x]=T}}let f=[],g=Array.from({length:s},(_,x)=>(n+x*25-ee.SOC0*ee.BAT_E)*ee.BAT_EFF*(r-ee.BAT_WEAR)/1e3);for(let _=23;_>=0;_--){let x=new Array(s).fill(-1/0);f[_]=new Array(s).fill(0);for(let P=0;P<s;P++)for(let M=-o;M<=a;M++){let T=P+M;if(T<0||T>=s||u[_][M]===-1/0)continue;let D=u[_][M]+g[T];D>x[P]&&(x[P]=D,f[_][P]=M)}g=x}let v={soc:ee.SOC0,h2:ee.H2_0},p=0,m=[],E=[];for(let _=0;_<24;_++){let x=co(Math.round((v.soc*ee.BAT_E-n)/25),0,s-1),P=f[_][x],M={bat:Math.round(h(P)),...d[_][P]},T=Lr(i,_,v,M);p+=T.eur,v=T,m.push(M),E.push(T)}return{value:Ys(i,p,v).total,plan:m,rows:E}}var Si=i=>(i<0?"\u2212":"")+"\u20AC"+Math.abs(i).toFixed(2),Dr=i=>String(i).padStart(2,"0")+":00",Qd=(i,e)=>$i(i)===0?"\u{1F319}":e<.2?"\u2600\uFE0F":e<.45?"\u{1F324}\uFE0F":e<.7?"\u26C5":"\u2601\uFE0F",ef="ple-grid-best",uo=class{constructor(e,t=0){this.el=document.getElementById("grid"),this.onWin=e,this.onClose=null,this.onHint=null,this.dayNo=0,this.built=!1,this.permit=!1,this.newDay(t||2026,t?void 0:0)}newDay(e,t){this.dayNo++,this.seed=e,this.day=Kd(e,t),this.reset(),this.base=Jd(this.day),this.bench=jd(this.day)}replay(e=(this.day.variant||0)+1){this.day=r_(Kd(this.seed,this.seed===2026?0:void 0),e),this.reset(),this.base=Jd(this.day),this.bench=jd(this.day)}reset(){this.st={soc:ee.SOC0,h2:ee.H2_0},this.h=0,this.cash=0,this.log=[],this.set={bat:0,elz:0,fc:0,curt:0},this.finished=!1,this.advisorHour=-1,this.advisorUsed=!1}serialize(){return{seed:this.seed,variant:this.day.variant,dayNo:this.dayNo,log:this.log,st:this.st,h:this.h,cash:this.cash,set:this.set,permit:this.permit}}restore(e){e&&(this.dayNo=e.dayNo-1,this.newDay(e.seed,e.seed===2026?0:void 0),e.variant&&this.replay(e.variant),Object.assign(this,{log:e.log,st:e.st,h:e.h,cash:e.cash,set:e.set,permit:e.permit,finished:e.h>=24}))}open(){this.built||this.build(),this.openedAt=performance.now(),this.el.classList.remove("hidden"),this.render(),this.finished&&!this.permit&&this.showResult()}close(){this.el.classList.add("hidden"),this.built&&this.$("gModal").classList.add("hidden")}isOpen(){return!this.el.classList.contains("hidden")}modalOpen(){return this.built&&!this.$("gModal").classList.contains("hidden")}build(){this.built=!0,this.el.innerHTML=`
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
          ${this.sliderHtml("bat","Battery",-ee.BAT_P,ee.BAT_P,10,"\u25C0 charge","discharge \u25B6")}
          ${this.sliderHtml("elz","Electrolyzer",0,ee.ELZ_P,10,`off \xB7 min ${ee.ELZ_MIN}`,`${ee.ELZ_P} kW`)}
          ${this.sliderHtml("fc","Fuel cell",0,ee.FC_P,5,`off \xB7 min ${ee.FC_MIN}`,`${ee.FC_P} kW`)}
          ${this.sliderHtml("curt","PV curtailment",0,100,10,"0 %","100 %")}
          <div class="preview" id="gPrev"></div>
          <div class="note" id="gTip" style="margin-bottom:10px"></div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn big" id="gRun" style="margin:0;flex:1">Run hour \u25B6 <span class="kbd-hint" style="font-size:12px">(Enter)</span></button>
            <button class="btn" id="gRun3" title="Run 3 hours with these setpoints">\u25B6\u25B6 3 h</button>
            <button class="btn" id="gZero">Zero</button>
          </div>
        </div>
      </div>
      <div class="gfoot"><details><summary>How it works</summary><div>
        \u2022 Forecasts: <b>day-ahead</b> price and cloud cover. The <b>intraday</b> price and real clouds are revealed when the hour runs. Cloudier than forecast \u2192 less regional solar \u2192 higher price.<br>
        \u2022 Positive grid = export (paid the price). Import pays the price <b>+ \u20AC${ee.FEE}/MWh grid fees</b>. Connection limit <b>\xB1${ee.LIM} kW</b> \u2014 surplus PV beyond it is lost.<br>
        \u2022 Negative prices happen: exporting then <b>costs</b> money. Curtail, charge, or run the electrolyzer.<br>
        \u2022 Renewable-H\u2082 rule (EU RFNBO, simplified): hydrogen only fetches today's price if it is made from on-site PV surplus or in hours \u2264 ${ee.RFNBO_MAX} \u20AC/MWh; otherwise it sells as grey H\u2082 for \u20AC${ee.H2_GREY}/kg.<br>
        \u2022 Battery: ${ee.BAT_E} kWh, \xB1${ee.BAT_P} kW, ${ee.BAT_EFF*100} % each way (90 % round trip), wear \u20AC${ee.BAT_WEAR}/MWh discharged. Worth cycling when sell &gt; buy / 0.9 + wear.<br>
        \u2022 Electrolyzer ${ee.ELZ_MIN}\u2013${ee.ELZ_P} kW, ${ee.ELZ_KWH_KG} kWh/kg. Fuel cell ${ee.FC_MIN}\u2013${ee.FC_P} kW, ${ee.FC_KWH_KG} kWh/kg. H\u2082 value varies by day (header). Power\u2192H\u2082\u2192power \u2248 33 %.<br>
        \u2022 Result = cash + stored battery energy (after discharge losses, at the average day-ahead price) + H\u2082 change at today's H\u2082 price.<br>
        \u2022 The operator grants the reconnection permit if you reach \u2265 ${ee.WIN_RATIO*100} % of the extra profit a perfect-foresight benchmark makes over "do nothing".
      </div></details></div>
      <div class="modal hidden" id="gModal"><div class="card" id="gModalCard" style="min-width:min(440px,92vw);max-height:92vh;overflow:auto"></div></div>
    </div>`;let e=t=>this.el.querySelector("#"+t);this.$=e;for(let t of["bat","elz","fc","curt"])e("s_"+t).addEventListener("input",n=>{this.set[t]=Number(n.target.value),this.renderSide()});e("gRun").addEventListener("click",t=>{t.currentTarget.blur(),this.runHour()}),e("gRun3").addEventListener("click",t=>{t.currentTarget.blur();for(let n=0;n<3&&!this.finished;n++)this.runHour()}),e("gZero").addEventListener("click",()=>{this.set={bat:0,elz:0,fc:0,curt:0},this.renderSide()}),e("gClose").addEventListener("click",()=>this.onClose?.()),this.el.addEventListener("click",t=>{t.target.id==="gAdvisor"&&(this.advisorHour=this.h,this.onHint?.(!this.advisorUsed),this.advisorUsed=!0,this.renderSide()),t.target.id==="gResult"&&this.showResult()}),window.addEventListener("resize",()=>{this.isOpen()&&this.drawChart()}),document.addEventListener("keydown",t=>{if(!(!this.isOpen()||this.modalOpen())&&t.key==="Enter"){if(t.repeat){t.preventDefault();return}performance.now()-this.openedAt<500||t.target.tagName!=="BUTTON"&&(t.preventDefault(),this.runHour())}})}sliderHtml(e,t,n,s,r,a,o){return`<div class="slider"><div class="top"><span>${t}</span><b id="v_${e}"></b></div>
      <input type="range" id="s_${e}" min="${n}" max="${s}" step="${r}" value="0" aria-label="${t}">
      <div class="sub"><span>${a}</span><span>${o}</span></div></div>`}baselineAt(e){let t={soc:ee.SOC0,h2:ee.H2_0},n=0;for(let s=0;s<e;s++){let r=Lr(this.day,s,t,{bat:0,elz:0,fc:0,curt:0});n+=r.eur,t=r}return Ys(this.day,n,t).total}render(){let e=this.$;if(e("gDay").innerHTML=`Day ${this.dayNo} \xB7 <b style="font-size:13px">${this.day.kind}</b> \xB7 H\u2082 \u20AC${this.day.h2Price.toFixed(1)}/kg`,e("gHour").textContent=this.finished?"done":`${Dr(this.h)}\u2013${Dr(this.h+1)}`,e("gCash").textContent=Si(this.cash),e("gCash").style.color=this.cash>=0?"#6dff9a":"#ff6b77",e("gSoc").textContent=`${(this.st.soc*100).toFixed(0)} %`,e("gH2").textContent=`${this.st.h2.toFixed(1)} kg`,this.h>0){let n=Ys(this.day,this.cash,this.st).total,s=this.bench.rows.slice(0,this.h),r=Ys(this.day,s.reduce((c,h)=>c+h.eur,0),s[s.length-1]).total,a=this.baselineAt(this.h),o=r-a,l=o>1?(n-a)/o:0;e("gPace").innerHTML=`Pace <b style="color:${l>=ee.WIN_RATIO?"#6dff9a":"#ffc44a"}">${(l*100).toFixed(0)} %</b> <span style="font-size:11px">of benchmark</span>`}else e("gPace").textContent="";let t=this.finished;e("gBenchH").classList.toggle("hidden",!t),e("gLog").innerHTML=this.log.map(n=>{let s=this.bench.rows[n.h];return`<tr>
      <td>${Dr(n.h)}</td><td>${this.day.priceF[n.h].toFixed(0)}\u2192<b style="color:${Math.abs(n.price-this.day.priceF[n.h])>30?"#ffd24a":"inherit"}">${n.price.toFixed(0)}</b></td>
      <td>${this.day.pvF[n.h].toFixed(0)}\u2192${n.pvRaw.toFixed(0)}</td><td>${n.load}</td><td>${n.bat.toFixed(0)}</td><td>${n.elz.toFixed(0)}</td><td>${n.fc.toFixed(0)}</td>
      <td>${n.net.toFixed(0)}</td><td style="color:${n.eur>=0?"#6dff9a":"#ff6b77"}">${n.eur.toFixed(2)}</td>
      ${t?`<td title="benchmark: batt ${s.bat.toFixed(0)} \xB7 elz ${s.elz.toFixed(0)} \xB7 fc ${s.fc.toFixed(0)} \xB7 curt ${this.bench.plan[n.h].curt}%" style="color:#8ea3b8">${s.eur.toFixed(2)} <span style="font-size:10px">(${s.bat>0?"\u25B2":s.bat<0?"\u25BC":"\xB7"}${Math.abs(s.bat).toFixed(0)}${s.elz?" E"+s.elz.toFixed(0):""}${s.fc?" F"+s.fc.toFixed(0):""})</span></td>`:""}
      <td>${(n.soc*100).toFixed(0)}%</td><td>${n.h2.toFixed(1)}</td>
      <td style="text-align:left;color:#ffc44a">${n.notes.join(", ")}</td></tr>`}).reverse().join(""),this.renderSide(),this.drawChart()}renderSide(){let e=this.$,t=this.day,n=Math.min(this.h,23);for(let r of["bat","elz","fc","curt"]){e("s_"+r).value=this.set[r];let a=this.set[r],o=r==="elz"?ho(a,ee.ELZ_MIN):r==="fc"?ho(a,ee.FC_MIN):a;e("v_"+r).textContent=r==="bat"?a===0?"idle":a>0?`+${a} kW discharge`:`${-a} kW charge`:r==="curt"?`${a} %`:`${o} kW`}e("gFcTitle").textContent=this.finished?"Day complete":`Forecast ${Dr(n)}\u2013${Dr(n+1)}`,e("gFc").innerHTML=`
      <span>Price (day-ahead)</span><span style="color:${t.priceF[n]<0?"#7fd4ff":t.priceF[n]>180?"#ff8c42":"inherit"}">${t.priceF[n].toFixed(1)} \u20AC/MWh</span>
      <span>Weather</span><span>${Qd(n,t.cloudF[n])} ${(t.cloudF[n]*100).toFixed(0)} % clouds</span>
      <span>PV</span><span>${t.pvF[n].toFixed(0)} kW</span>
      <span>Load</span><span>${t.load[n]} kW</span>
      <span>Next 3 h price</span><span>${[1,2,3].map(r=>n+r<24?t.priceF[n+r].toFixed(0):"\u2014").join(" / ")}</span>
      <span title="today's H\u2082 break-even prices">Break-evens</span><span>ELZ &lt; ${Sh(t).elzEx.toFixed(0)} \xB7 FC &gt; ${Sh(t).fcIm.toFixed(0)}</span>`;let s=Lr(t,n,this.st,this.set,!0);e("gPrev").innerHTML=`Expected (forecast):<br>grid ${s.net>=0?"export":"import"} <b>${Math.abs(s.net).toFixed(0)} kW</b> \u2192 <b style="color:${s.eur>=0?"#6dff9a":"#ff6b77"}">${Si(s.eur)}</b><br>H\u2082 ${s.elz>0?"+"+(s.elz/ee.ELZ_KWH_KG).toFixed(2):""}${s.fc>0?" \u2212"+(s.fc/ee.FC_KWH_KG).toFixed(2):""}${s.elz||s.fc?" kg":"\xB10"} (\u2248 ${Si((s.elz/ee.ELZ_KWH_KG-s.fc/ee.FC_KWH_KG)*t.h2Price)}) \xB7 SOC \u2192 ${(s.soc*100).toFixed(0)} %`+(s.notes.length?`<br><span style="color:#ffc44a">${s.notes.join(", ")}</span>`:""),e("gTip").innerHTML=this.finished?'<button class="btn on" id="gResult">\u{1F4CB} Show the result</button>':this.advisorHour===this.h?"\u{1F4A1} "+this.tip(n):'<button class="btn" id="gAdvisor">\u{1F4A1} Ask the advisor (counts as a hint)</button>',e("gRun").disabled=this.finished,e("gRun3").disabled=this.finished}tip(e){let t=this.day,n=t.priceF[e],s=t.h2Price,{elzEx:r,fcEx:a,fcIm:o}=Sh(t),l=t.pvF[e]>t.load[e],c=`<br><span style="color:#6c8196">Break-evens today: electrolyzer below ${r.toFixed(0)} \u20AC/MWh on surplus PV; from grid power only in renewable hours (\u2264 ${ee.RFNBO_MAX} \u20AC/MWh), otherwise the H\u2082 is grey (\u20AC${ee.H2_GREY}/kg). Fuel cell above ${o.toFixed(0)} \u20AC/MWh when it avoids imports (above ${a.toFixed(0)} when exporting).</span>`;if(n<0)return`Negative price: every exported kWh costs money. Curtail PV, charge the battery, run the electrolyzer.${c}`;if(n>o)return`High price: the fuel cell beats keeping H\u2082 worth \u20AC${s}/kg \u2014 and discharge the battery.${c}`;if(l&&n<r)return`Surplus PV and a price below ${r.toFixed(0)} \u20AC/MWh: turning PV into H\u2082 pays more than exporting.${c}`;let h=t.priceF.slice(e+1),u=h.length?Math.max(...h):0,d=l?n:n+ee.FEE;return u>d/ee.BAT_EFF**2+ee.BAT_WEAR?`Store now? Forecast peak later ${u.toFixed(0)} \u20AC/MWh &gt; ${d.toFixed(0)} / 0.90 + ${ee.BAT_WEAR} wear \u2192 charging pays if you hold it until then.${c}`:`No obvious arbitrage this hour. Imports carry \u20AC${ee.FEE}/MWh fees.${c}`}runHour(){if(this.finished)return;let e=Lr(this.day,this.h,this.st,this.set,!1);if(this.cash+=e.eur,this.st={soc:e.soc,h2:e.h2},this.log.push(e),this.h++,this.onStep?.(),this.h>=24){this.finished=!0,this.render(),this.showResult();return}this.render()}result(){let e=Ys(this.day,this.cash,this.st),t=e.total-this.base,n=Math.max(1,this.bench.value-this.base),s=t/n,r=s>=ee.STAR3?3:s>=ee.WIN_RATIO?2:t>0?1:0;return{...e,ratio:s,stars:r,won:s>=ee.WIN_RATIO,base:this.base,bench:this.bench.value,day:this.dayNo,seed:this.seed}}showResult(){let e=this.result(),t={};try{t=JSON.parse(localStorage.getItem(ef)||"{}")}catch{}let n=t[this.seed];if(n===void 0||e.ratio>n){t[this.seed]=e.ratio;try{localStorage.setItem(ef,JSON.stringify(t))}catch{}}this.lastResult=e;let s=this.$("gModalCard");s.innerHTML=`<h2 style="margin-top:0;color:#ffd24a">Dispatch validation complete</h2>
      <div class="stars">${[1,2,3].map(a=>`<span class="${a<=e.stars?"":"off"}">\u2605</span>`).join("")}</div>
      <div class="res">
        <span>Cash from trading (incl. wear)</span><span>${Si(e.cash)}</span>
        <span>Battery energy change</span><span>${Si(e.batV)}</span>
        <span>H\u2082 inventory change</span><span>${Si(e.h2V)}</span>
        <span class="tot">Your result</span><span class="tot">${Si(e.total)}</span>
        <span style="color:#8ea3b8">"Do nothing" baseline</span><span style="color:#8ea3b8">${Si(this.base)}</span>
        <span style="color:#8ea3b8">Perfect-foresight benchmark</span><span style="color:#8ea3b8">${Si(this.bench.value)}</span>
        <span>Share of possible extra profit</span><span style="color:${e.won?"#6dff9a":"#ff6b77"}">${(e.ratio*100).toFixed(0)} %</span>
        ${n!==void 0?`<span style="color:#8ea3b8">Previous best on this day</span><span style="color:#8ea3b8">${(n*100).toFixed(0)} %</span>`:""}
      </div>
      <p class="note">${e.won?"\u2714 The grid operator accepts the schedule and issues a <b>reconnection permit</b>. Synchronise the lab with the grid at the tie panel next to the exit.":`The operator needs \u2265 ${ee.WIN_RATIO*100} %. "Review the day" compares every hour with the benchmark (Bench \u20AC column, dashed SOC line). "Replay" keeps the forecasts, but the real clouds and intraday prices come out differently.`}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn" id="mReview">Review the day</button>
        <button class="btn" id="mRetry">Replay this day</button>
        <button class="btn" id="mNew">New day</button>
        ${e.won?'<button class="btn big" id="mWin" style="margin:0">Take the permit \u25B6</button>':""}
      </div>`,this.$("gModal").classList.remove("hidden");let r=()=>this.$("gModal").classList.add("hidden");s.querySelector("#mReview").onclick=r,s.querySelector("#mRetry").onclick=()=>{r(),this.replay(),this.render()},s.querySelector("#mNew").onclick=()=>{r(),this.newDay(Math.floor(Math.random()*1e6)),this.render()},e.won&&(s.querySelector("#mWin").onclick=()=>{r(),this.permit=!0,this.onWin(e)})}drawChart(){let e=this.$("gChart"),t=Math.min(devicePixelRatio||1,2),n=e.clientWidth,s=e.clientHeight;if(!n||!s)return;e.width=n*t,e.height=s*t;let r=e.getContext("2d");r.setTransform(t,0,0,t,0,0),r.clearRect(0,0,n,s);let a=this.day,o=n<560,l=o?36:52,c=o?40:58,h=o?44:76,u=26,d=(n-l-c)/24,f=M=>l+M*d,g=600,v=M=>h+(s-h-u)*(1-M/g),p=[...a.priceF,...this.log.map(M=>M.price)],m=Math.min(-50,Math.floor(Math.min(...p)/50)*50),E=Math.max(250,Math.ceil(Math.max(...p)/50)*50),_=M=>h+(s-h-u)*(1-(M-m)/(E-m)),x='Consolas, "Courier New", monospace';r.font=`11px ${x}`,r.strokeStyle="#1a2633",r.lineWidth=1,r.fillStyle="#6c8196";for(let M=0;M<=g;M+=100)r.beginPath(),r.moveTo(l,v(M)),r.lineTo(n-c,v(M)),r.stroke(),r.textAlign="right",r.fillText(M,l-6,v(M)+4);r.strokeStyle="rgba(255,90,74,.35)",r.setLineDash([6,4]),r.beginPath(),r.moveTo(l,v(ee.LIM)),r.lineTo(n-c,v(ee.LIM)),r.stroke(),r.setLineDash([]),r.fillStyle="rgba(255,120,100,.7)",r.textAlign="left",r.fillText(`grid limit ${ee.LIM} kW`,l+4,v(ee.LIM)-4),r.fillStyle="#ff8c42";for(let M=m;M<=E;M+=50)r.fillText(M,n-c+6,_(M)+4);r.save(),r.fillStyle="#6c8196",r.translate(12,h+40),r.rotate(-Math.PI/2),r.fillText("kW",0,0),r.restore(),r.fillStyle="#ff8c42",r.fillText("\u20AC/MWh",n-c+6,h-8),m<0&&(r.fillStyle="rgba(80,160,255,.07)",r.fillRect(l,_(0),n-l-c,_(m)-_(0)),r.strokeStyle="rgba(127,212,255,.5)",r.setLineDash([2,3]),r.beginPath(),r.moveTo(l,_(0)),r.lineTo(n-c,_(0)),r.stroke(),r.setLineDash([])),this.finished||(r.fillStyle="rgba(255,210,74,.06)",r.fillRect(f(this.h),4,d,s-u-4),r.strokeStyle="rgba(255,210,74,.5)",r.setLineDash([3,3]),r.strokeRect(f(this.h)+.5,4.5,d-1,s-u-5),r.setLineDash([])),r.textAlign="center";for(let M=0;M<24;M++){let T=M<this.h,D=T?a.cloudA[M]:a.cloudF[M],b=d<20;r.font=`${b?10:15}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`,r.globalAlpha=T?.5:1,r.fillText(Qd(M,D),f(M)+d/2,20),r.font=`9px ${x}`,r.fillStyle="#6c8196",$i(M)>0&&!b&&r.fillText(`${(D*100).toFixed(0)}%`,f(M)+d/2,34),r.globalAlpha=1,r.font=`10px ${x}`,r.fillStyle=M===this.h?"#ffd24a":"#6c8196",(!b||M%3===0||M===this.h)&&r.fillText(String(M).padStart(2,"0"),f(M)+d/2,s-8)}for(let M=0;M<24;M++){let T=d*.7,D=f(M)+d*.15;if(r.fillStyle="rgba(255,210,74,.22)",r.fillRect(D,v(a.pvF[M]),T,v(0)-v(a.pvF[M])),M<this.h){r.fillStyle="#ffd24a",r.fillRect(D+T*.2,v(a.pvA[M]),T*.6,v(0)-v(a.pvA[M]));let b=this.log[M];b&&b.pvRaw-b.pv>1&&(r.fillStyle="rgba(255,90,74,.7)",r.fillRect(D+T*.2,v(b.pvRaw),T*.6,v(b.pv)-v(b.pvRaw)))}}r.strokeStyle="#8ea3b8",r.lineWidth=1.5,r.beginPath();for(let M=0;M<24;M++)r.lineTo(f(M),v(a.load[M])),r.lineTo(f(M+1),v(a.load[M]));r.stroke();let P=(M,T,D)=>{r.strokeStyle=D,r.lineWidth=2,r.setLineDash(T),r.beginPath(),r.moveTo(f(0),v(ee.SOC0*g)),M.forEach((b,y)=>r.lineTo(f(y+1),v(b.soc*g))),r.stroke(),r.setLineDash([])};this.finished&&P(this.bench.rows,[4,4],"rgba(62,207,122,.55)"),this.log.length&&(P(this.log,[],"#3ecf7a"),r.fillStyle="#3ecf7a",r.textAlign="left",r.font=`10px ${x}`,r.fillText(`SOC ${(this.st.soc*100).toFixed(0)}%`,f(this.log.length)+4,v(this.st.soc*g)-4)),r.strokeStyle="rgba(255,140,66,.75)",r.lineWidth=1.5,r.setLineDash([5,4]),r.beginPath();for(let M=0;M<24;M++)r.lineTo(f(M)+d/2,_(a.priceF[M]));r.stroke(),r.setLineDash([]),this.log.length&&(r.strokeStyle="#ff8c42",r.lineWidth=2.5,r.beginPath(),this.log.forEach((M,T)=>r.lineTo(f(T)+d/2,_(M.price))),r.stroke(),r.fillStyle="#ff8c42",this.log.forEach((M,T)=>{r.beginPath(),r.arc(f(T)+d/2,_(M.price),3,0,Math.PI*2),r.fill()}))}};var fo={title:"\u26A1 POWER LAB ESCAPE",lead:"Friday, 18:40. You came to the <b>Solar Test Laboratory</b> to certify its island microgrid. Then the storm hit.",body:`The public grid is down, the building is dark, and the booth door \u2014 a motor-driven, fail-secure sliding door \u2014 won't move without power.
    The emergency lights run on a battery that lasts about an hour. Marco Volta, the lab's head, has already left for the weekend.<br><br>
    Bring the lab's own power system to life, get into the control room, and get the building back on the grid.`},af=[[30,"Volta's Successor"],[40,"Chief Grid Engineer"],[50,"Senior Engineer"],[60,"Engineer"],[1/0,"Intern (overtime)"]];function of(i){return{rec1:{title:"Voice recorder \xB7 workbench",label:"Voice recorder",text:`"Memo, Friday. Facility management finally installed the fail-secure door drive on the booth. No power, no exit \u2014 very safe, they say.
Note to self: never get locked in here during a grid outage. \u2026Also, somebody feed the cat over the weekend."`},rec2:{title:"Voice recorder \xB7 battery cabinet",label:"Voice recorder",text:`"Changed the sun-simulator PIN again. It's the year we opened \u2014 the one engraved on that pompous brass plaque.
And yes, I wired the simulator to the building's emergency generator. Don't tell facility management."`},rec3:{title:"Voice recorder \xB7 electrolyzer",label:"Voice recorder",text:`"Lesson of the week: our three inverters are single-phase. Each one FORMS its own phase. Power cannot hop from L1 to L2 \u2014
if nothing feeds a phase, nothing on it runs. The intern tried to charge the battery from an empty phase for an hour.
Then he opened the H\u2082 valve with a wrench. The handwheel lives in my bench drawer now."`},rec4:{title:"Voice recorder \xB7 control room",label:"Voice recorder",text:`"If the grid ever drops out: the operator won't let us back on until gridctl has validated a day-ahead schedule.
Then synchronise at the tie panel \u2014 voltage, frequency, rotation, and close at twelve. Don't close out of phase. I've heard that bang once."`}}}function Nr(i){return[["LAB NOTES \u2014 DON'T ERASE!!","#1b3f8f","bold 40px"],["INV-1 \u2500 L?     INV-2 \u2500 L?     INV-3 \u2500 L?","#1b3f8f"],["   (each inverter = its OWN phase \u2192 island!)","#b3261e"],["Door drive: 3~ motor, 3 kW / phase at start","#1b3f8f"],["Sun-sim PIN \u2192 the year we opened \u2713","#1b3f8f"],["H\u2082 handwheel \u2192 locked away (intern-proof)","#1b3f8f"],["BMS min 25 %  \xB7  FC needs \u2592\u2592 % H\u2082","#1b3f8f"],["                                  \u2014 M.V.","#1b3f8f"]]}function lf(i){return[{from:"it-security@solarlab.example",subj:"Your password hygiene (3rd reminder)",body:`Dear Marco,
we noticed that your password is still based on your cat's name. Reversing it does not count as encryption.
Please also stop splitting the root password into "fragments".
\u2014 IT`},{from:"dispatch@tso-grid.example",subj:"RE: Reconnection after outage \u2014 procedure",body:`Hello Solar Test Laboratory,
after the storm outage, reconnection of your site requires:
  1) a validated day-ahead dispatch schedule (gridctl: \u2265 ${Math.round(ee.WIN_RATIO*100)} % of the extra profit
     a perfect-foresight plan makes over doing nothing),
  2) manual synchronisation at your tie breaker Q0.
Our side: ${i.gridV} V, ${i.gridF.toFixed(2)} Hz, rotation L1-L2-L3 (clockwise) at the substation.
NB: our storm crew re-terminated your incomer cable at Q0 tonight in a hurry \u2014 check the phase rotation before closing.
The reconnection permit card is issued automatically once the schedule is validated.
\u2014 Grid Dispatch`},{from:"marco.volta@solarlab.example",subj:"Out of office",body:`I'm off for the weekend. For emergencies: don't.
PS for whoever is on duty: the cat sleeps on the battery inverter in the booth. Do not wake him. He bites.`}]}function Th(){return`SYNC CHECKLIST \u2014 tie breaker Q0
0. Permit card into the interlock
1. Island voltage = grid voltage (\xB1 2 %)
2. Island frequency a hair ABOVE grid
   (needle creeps clockwise, slip \u2264 0.1 Hz)
3. Check phase ro\u2592\u2592\u2592\u2592n \u2014 the three lamps
   must go dark TOGETHER, not chase.
   Chasing? \u2192 swap two incoming phases
4. Close on the SYNCHROSCOPE at 12 (\xB1 10\xB0)
   (lamps look dark over a wide band)
                                   \u2014 M.V.`}var Ur={W:2048,H:768,HORIZON:560.64},Dt={K:2408,R:4,EYE:1.65,WATER:-6,BANK:-5,RAIL:4,X0:-2816,X1:6700},po=(i,e)=>Ur.HORIZON-(i-Dt.EYE)*Dt.K/(Dt.R+e),Eh=[{id:"sky",depth:1/0,w:2048,h:256},{id:"far",depth:2500,w:3072,h:384},{id:"mid",depth:600,w:4096,h:448},{id:"bridge",depth:220,w:3072,h:384}],a_=150;function o_(i,e,t,n,s,r){let a=document.createElement("canvas");a.width=e,a.height=t;let o=a.getContext("2d");o.drawImage(i.canvas,0,0),o.globalCompositeOperation="destination-out",o.drawImage(i.canvas,n,s),o.globalCompositeOperation="source-in",o.fillStyle=r,o.fillRect(0,0,e,t),i.drawImage(a,0,0)}function mo(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function cf(i,e,t,n,s){let r=n==="evening",a=n!=="night",o=mo(1248+s.id.length*97+(s.id==="far"?5:0)),l=e/(Dt.X1-Dt.X0),c=t/Ur.H,h=_=>(_-Dt.X0)*l,u=_=>_*c,d=u(Ur.HORIZON);i.clearRect(0,0,e,t);let f=r?"#5d5470":"#141b27",g=r?"#3b3346":"#0d121a",v=r?"#211b26":"#080b11",p=(_,x,P,M,T,D=9,b=11)=>{for(let y=x+6*c;y<x+M-6*c;y+=b*c)for(let C=_+4*l;C<_+P-5*l;C+=D*l)o()<T&&(i.fillStyle=o()<.6?"#ffd58a":"#cfe0ff",i.fillRect(C,y,Math.max(1,4*l),Math.max(1,5*c)))},m=a?.28:.02,E=(_,x)=>{r&&o_(i,e,t,Math.max(1,_*l*2),Math.max(1,x*c),"rgba(255,186,105,.9)")};if(s.id==="sky"){let _=i.createLinearGradient(0,0,0,d);r?(_.addColorStop(0,"#2c4a7c"),_.addColorStop(.5,"#8e7196"),_.addColorStop(.82,"#e59a78"),_.addColorStop(1,"#ffc389")):(_.addColorStop(0,"#070a13"),_.addColorStop(.55,"#172033"),_.addColorStop(1,"#34435e")),i.fillStyle=_,i.fillRect(0,0,e,t);for(let P=0;P<(r?60:90);P++){let M=o()*e,T=d*(.18+o()*(r?.4:.67)),D=(250+o()*450)*l;for(let b=0;b<18;b++){let y=M+(o()-.5)*D,C=T+(o()-.5)*50*c,I=Math.max(3,(30+o()*70)*c),[F,H,Z,W]=r?[255,200+o()*30,180+o()*30,.08+o()*.1]:[50+o()*25,58+o()*25,80+o()*25,.1+o()*.14],ae=i.createRadialGradient(0,0,0,0,0,I);ae.addColorStop(0,`rgba(${F|0},${H|0},${Z|0},${W})`),ae.addColorStop(1,`rgba(${F|0},${H|0},${Z|0},0)`),i.save(),i.translate(y,C),i.scale(2.2,1),i.fillStyle=ae,i.fillRect(-I,-I,I*2,I*2),i.restore()}}if(r){let P=h(a_),M=d-30*c,T=i.createRadialGradient(0,0,2,0,0,520*c);T.addColorStop(0,"rgba(255,236,190,.95)"),T.addColorStop(.25,"rgba(255,180,110,.5)"),T.addColorStop(1,"rgba(255,160,100,0)"),i.save(),i.translate(P,M),i.scale(3.2*l/c,1),i.fillStyle=T,i.fillRect(-520*c,-520*c,1040*c,1040*c),i.restore(),i.fillStyle="#fff4d8",i.beginPath(),i.ellipse(P,M,Math.max(2,11*l),Math.max(2,11*c),0,0,Math.PI*2),i.fill()}else if(a){let P=i.createLinearGradient(0,d-160*c,0,d);P.addColorStop(0,"rgba(255,150,70,0)"),P.addColorStop(1,"rgba(255,150,70,.28)"),i.fillStyle=P,i.fillRect(0,d-160*c,e,160*c)}let x=i.createLinearGradient(0,0,0,d*.3);x.addColorStop(0,r?"#2c4a7c":"#070a13"),x.addColorStop(1,r?"rgba(44,74,124,0)":"rgba(7,10,19,0)"),i.fillStyle=x,i.fillRect(0,0,e,d*.3);return}if(s.id==="far"){let _=u(po(Dt.BANK,s.depth));for(let x=0;x<e;){let P=(30+o()*70)*l,M=(18+o()*60)*c;i.fillStyle=f,i.fillRect(x,_-M,P+1,t-_+M),p(x,_-M,P,M,m*.6),x+=P}i.fillStyle=f,i.fillRect(h(295),u(360),9*l,t),i.beginPath(),i.ellipse(h(299.5),u(408),22*l,6*c,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(h(299.5),u(397),17*l,5*c,0,0,Math.PI*2),i.fill(),i.fillRect(h(298),u(307),3*l,56*c),i.fillStyle="#ff3b2f";for(let x of[308,360,440])i.fillRect(h(298),u(x),Math.max(2,3*l),Math.max(2,3*c));for(let x of[-2520,-2440,-2360])i.fillStyle=g,i.fillRect(h(x),u(486),18*l,t),i.fillRect(h(x),u(486),52*l,20*c),i.fillStyle=a?"rgba(170,200,230,.35)":"rgba(80,100,140,.25)",i.fillRect(h(x),u(487),52*l,2*c),p(h(x),u(486),52*l,20*c,m),p(h(x),u(506),18*l,_-u(506),m);E(1,1);return}if(s.id==="mid"){let _=u(po(Dt.BANK,s.depth));for(let b=0;b<e;){let y=Dt.X0+b/l,C=(40+o()*60)*l,I=(24+o()*40)*c;(y<640||y>1600)&&(i.fillStyle=g,i.fillRect(b,_-I,C+1,t-_+I),p(b,_-I,C,I,m)),b+=C}for(let b=h(660);b<h(1200);){let y=(26+o()*22)*l,C=(48+o()*35)*c;i.fillStyle=r?["#4b3a3c","#56423c","#433b4e","#4e473f"][Math.floor(o()*4)]:g,i.fillRect(b,_-C,y+1,t-_+C),i.beginPath(),i.moveTo(b,_-C),i.lineTo(b+y/2,_-C-(22+o()*10)*c),i.lineTo(b+y,_-C),i.fill(),p(b,_-C,y,C,m*1.6),b+=y}i.fillStyle=r?"#3e3530":"#0a0e14",i.fillRect(h(640),_,h(1600)-h(640),t),i.fillStyle=v,i.fillRect(h(760),_-95*c,130*l,t),i.fillRect(h(795),u(330),52*l,t),i.beginPath(),i.moveTo(h(795),u(330)),i.lineTo(h(821),u(250)),i.lineTo(h(847),u(330)),i.fill();for(let b of[791,843])i.fillRect(h(b),u(318),8*l,30*c),i.beginPath(),i.moveTo(h(b),u(318)),i.lineTo(h(b+4),u(292)),i.lineTo(h(b+8),u(318)),i.fill();let x=(b,y,C,I)=>{i.fillStyle=v,i.fillRect(h(b-I),u(y),2*I*l,t);for(let F=0;F<4;F++){let H=y+40+F*45;i.fillRect(h(b-I-5),u(H),5*l,30*c),i.fillRect(h(b+I),u(H),5*l,30*c)}i.fillRect(h(b-I*.72),u(y-40),I*1.44*l,42*c),i.beginPath(),i.moveTo(h(b-I*.72),u(y-38)),i.lineTo(h(b),u(C)),i.lineTo(h(b+I*.72),u(y-38)),i.fill();for(let F=.1;F<.95;F+=.09){let H=y-38+(C-(y-38))*F,Z=I*.72*(1-F);for(let W of[-1,1])i.beginPath(),i.moveTo(h(b+W*Z),u(H)),i.lineTo(h(b+W*(Z+6)),u(H-4)),i.lineTo(h(b+W*Z),u(H-8)),i.fill()}i.fillRect(h(b-1.5),u(C-16),3*l,18*c),i.fillRect(h(b-6),u(C-10),12*l,3*c),i.strokeStyle=r?"rgba(255,220,180,.18)":"rgba(120,140,170,.14)",i.lineWidth=Math.max(1,1.5*l);for(let F=-1;F<=1;F++)for(let[H,Z]of[[y+30,y+120],[y+150,y+230]]){let W=b+F*I*.5;i.beginPath(),i.moveTo(h(W-5),u(Z)),i.lineTo(h(W-5),u(H+10)),i.lineTo(h(W),u(H)),i.lineTo(h(W+5),u(H+10)),i.lineTo(h(W+5),u(Z)),i.stroke()}};i.fillStyle=v,i.fillRect(h(1170),u(410),340*l,t),i.fillRect(h(1190),u(380),300*l,40*c),i.beginPath(),i.moveTo(h(1190),u(382)),i.lineTo(h(1235),u(318)),i.lineTo(h(1470),u(318)),i.lineTo(h(1510),u(382)),i.fill(),i.beginPath(),i.moveTo(h(1500),u(410)),i.lineTo(h(1552),u(430)),i.lineTo(h(1560),t),i.lineTo(h(1500),t),i.fill(),i.fillRect(h(1300),u(360),46*l,60*c),i.beginPath(),i.moveTo(h(1300),u(362)),i.lineTo(h(1323),u(322)),i.lineTo(h(1346),u(362)),i.fill();for(let b=1205;b<1560;b+=24){let y=b>1495?392:372;i.beginPath(),i.moveTo(h(b-4),u(y+45)),i.lineTo(h(b),u(y)),i.lineTo(h(b+4),u(y+45)),i.fill(),i.fillRect(h(b-4),u(y+45),8*l,30*c)}i.fillRect(h(1352),u(300),12*l,55*c),i.beginPath(),i.moveTo(h(1350),u(302)),i.lineTo(h(1358),u(262)),i.lineTo(h(1366),u(302)),i.fill(),x(1118,230,62,34),x(1205,236,70,34),i.fillStyle=a?"#2d5a9a":"#101a2e",i.beginPath(),i.moveTo(h(1545),_),i.quadraticCurveTo(h(1580),_-55*c,h(1640),_-38*c),i.lineTo(h(1660),_),i.fill();let P=u(po(Dt.WATER,s.depth)),M=130,T=610,D=P-16*c;i.fillStyle=r?"#8f8a86":"#1c222b",i.beginPath(),i.moveTo(h(M),D),i.lineTo(h(T),D),i.lineTo(h(T+18),D-6*c),i.lineTo(h(T+10),t),i.lineTo(h(M+4),t),i.fill(),i.fillRect(h(M+40),D-14*c,(T-M-90)*l,14*c),i.fillRect(h(M+70),D-25*c,(T-M-170)*l,11*c),i.fillStyle="#ffd9a0";for(let b=M+46;b<T-54;b+=8)o()<.8&&i.fillRect(h(b),D-10*c,Math.max(1,4*l),Math.max(1,4*c));for(let b=M+76;b<T-104;b+=10)o()<.5&&i.fillRect(h(b),D-21*c,Math.max(1,5*l),Math.max(1,4*c));if(i.fillStyle=r?"#1c3f7a":"#0e1622",i.fillRect(h(M),D+4*c,(T-M)*l,4*c),E(1,1),a){let b=i.createRadialGradient(h(1160),_,10*l,h(1160),_-80*c,300*c);b.addColorStop(0,`rgba(255,196,120,${r?.3:.55})`),b.addColorStop(1,"rgba(255,196,120,0)"),i.globalCompositeOperation="source-atop",i.fillStyle=b,i.fillRect(h(880),u(40),620*l,_-u(40)),i.globalCompositeOperation="source-over"}return}if(s.id==="bridge"){let _=u(po(Dt.WATER,s.depth)),x=r?"#3a3440":"#0a0e15",P=T=>u(547-(T-1180)*.035),M=[1180,1420,1700,2040];i.fillStyle=x,i.beginPath(),i.moveTo(h(1180),P(1180)),i.lineTo(h(2760),P(2760)),i.lineTo(h(2760),P(2760)+16*c),i.lineTo(h(1180),P(1180)+12*c),i.fill();for(let T of M)i.fillRect(h(T)-11*l,P(T),22*l,t);for(let T=2160;T<2760;T+=120)i.fillRect(h(T)-8*l,P(T),16*l,t),i.beginPath(),i.moveTo(h(T-112),P(T-112)+14*c),i.quadraticCurveTo(h(T-60),P(T-60)+40*c,h(T-8),P(T-8)+14*c),i.lineTo(h(T-8),P(T-8)+10*c),i.lineTo(h(T-112),P(T-112)+10*c),i.fill();i.strokeStyle=x;for(let T=0;T<3;T++){let D=M[T],b=M[T+1],y=(D+b)/2,C=P(y)-(b-D)*.62*c;i.lineWidth=Math.max(2,5*l);for(let I of[0,7])i.beginPath(),i.moveTo(h(D),P(D)),i.quadraticCurveTo(h(y),C+I*c,h(b),P(b)),i.stroke();i.lineWidth=Math.max(1,1.6*l);for(let I=.05;I<.96;I+=.05){let F=D+(b-D)*I,H=(1-I)*(1-I)*P(D)+2*(1-I)*I*C+I*I*P(b);i.beginPath(),i.moveTo(h(F),H),i.lineTo(h(F+13*(I<.5?1:-1)),P(F)),i.stroke()}}if(a){i.fillStyle="rgba(255,190,110,.9)";for(let T=1190;T<2760;T+=22)i.fillRect(h(T),P(T)+3*c,Math.max(2,3*l),Math.max(2,3*c))}if(!r){i.fillStyle="#131820";for(let T=0;T<4;T++){let D=1480+T*58;i.fillRect(h(D),P(D)-13*c,55*l,13*c)}i.fillStyle="rgba(160,190,255,.45)";for(let T=1486;T<1706;T+=9)o()<.4&&i.fillRect(h(T),P(T)-10*c,Math.max(1,4*l),Math.max(1,4*c))}if(i.fillStyle=r?"#2e3a4c":"#0b1018",i.fillRect(h(2790),u(250),90*l,t),i.fillStyle=r?"rgba(255,200,140,.45)":"rgba(90,110,150,.2)",i.fillRect(h(2790),u(250),90*l,22*c),r){let T=i.createLinearGradient(h(2790),0,h(2880),0);T.addColorStop(0,"rgba(255,190,120,.35)"),T.addColorStop(1,"rgba(255,190,120,0)"),i.fillStyle=T,i.fillRect(h(2790),u(272),90*l,_-u(272))}p(h(2790),u(280),90*l,_-u(280),m*1.2,8,9);for(let T=h(2900);T<e;){let D=(50+o()*70)*l,b=(60+o()*90)*c;i.fillStyle=r?"#2a2531":"#090c12",i.fillRect(T,_-b-30*c,D+1,t),p(T,_-b-30*c,D,b,m),T+=D}E(1,1)}}function wh(i,e,t,n){let s=mo(n),r=[],a=(o,l,c,h,u,d)=>{let f=[[o,l]];for(let g=0;g<h&&l<t;g++)o+=(s()-.5)*26+c*4,l+=8+s()*14,(o<24||o>e-24)&&(o=Math.max(24,Math.min(e-24,o)),c=-c),f.push([o,l]),d<2&&s()<.08&&a(o,l,s()<.5?-1.6:1.6,(h-g)*.45,u*.55,d+1);r.push({pts:f,wd:u})};a(e*.5,0,0,60,1,0),i.clearRect(0,0,e,t),i.lineCap="round",i.lineJoin="round",i.shadowColor="rgba(140,170,255,1)";for(let[o,l,c]of[["rgba(120,150,255,.35)",9,18],["rgba(200,215,255,.8)",3.5,6],["#fff",1.4,0]]){i.strokeStyle=o,i.shadowBlur=c;for(let h of r){i.lineWidth=l*h.wd,i.beginPath(),i.moveTo(...h.pts[0]);for(let u of h.pts)i.lineTo(...u);i.stroke()}}i.shadowBlur=0}function hf(i,e,t){i.clearRect(0,0,e,t);let n=mo(11);for(let s=0;s<150;s++){let r=n()*e,a=n()*t,o=1.2+n()*3.2;i.fillStyle="rgba(0,0,0,.12)",i.beginPath(),i.arc(r,a,o,0,Math.PI*2),i.fill(),i.fillStyle="rgba(210,225,255,.16)",i.beginPath(),i.arc(r-o*.3,a-o*.35,o*.35,0,Math.PI*2),i.fill()}}function uf(i,e,t){i.clearRect(0,0,e,t);let n=mo(7);for(let s=0;s<90;s++){let r=n()*e,a=n()*t,o=14+n()*40;i.strokeStyle=`rgba(190,210,240,${.05+n()*.12})`,i.lineWidth=1+n(),i.beginPath(),i.moveTo(r,a),i.bezierCurveTo(r+2,a+o*.3,r-2,a+o*.6,r+(n()-.5)*3,a+o),i.stroke(),i.fillStyle="rgba(210,225,255,.2)",i.beginPath(),i.arc(r,a+o,1.6,0,Math.PI*2),i.fill()}}var qn=i=>(Number.isFinite(i)?i:1e6).toFixed(3),Ah=Object.fromEntries(Eh.map(i=>[i.id,Dt.R+i.depth])),l_=`
varying vec3 vW;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,c_=`
uniform sampler2D tSkyN, tFarN, tMidN, tBriN, tSkyD, tFarD, tMidD, tBriD, tBolt;
uniform vec3 uO, uRt, uN;
uniform float uXC, uTime, uFlash, uBoltX, uMix, uRain, uEve, uLamps, uTrees;   // uMix: texture cross-fade \xB7 uEve: evening light
uniform vec3 uRoom;
varying vec3 vW;

#define K ${qn(Dt.K)}
#define RREF ${qn(Dt.R)}
#define EYE ${qn(Dt.EYE)}
#define HZ ${qn(Ur.HORIZON)}
#define X0 ${qn(Dt.X0)}
#define XW ${qn(Dt.X1-Dt.X0)}
#define WATER ${qn(Dt.WATER)}
#define RAIL ${qn(Dt.R+Dt.RAIL)}
#define RFAR ${qn(Ah.far)}
#define RMID ${qn(Ah.mid)}
#define RBRI ${qn(Ah.bridge)}
#define TREE 6.5

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), g = fract(p); g = g * g * (3.0 - 2.0 * g);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), g.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), g.x), g.y);
}
float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return v; }

// far intersection of the ray p + s\xB7d with the vertical cylinder of radius r around the reference eye
float cylS(vec3 p, vec3 d, float r) {
  vec2 q = vec2(p.x, p.z - RREF), h = d.xz;
  float a = dot(h, h), b = dot(q, h), c = dot(q, q) - r * r, disc = b * b - a * c;
  return disc < 0.0 ? -1.0 : (-b + sqrt(disc)) / a;
}
float arcOf(vec3 h, float r) { return atan(h.x, RREF - h.z) * r; }           // metres along a cylinder
vec2 design(vec3 h, float r) { return vec2(uXC + atan(h.x, RREF - h.z) * K, HZ - (h.y - EYE) * K / r); }
vec4 samp(sampler2D a, sampler2D b, vec2 xy, float bias) {
  vec2 uv = vec2((xy.x - X0) / XW, 1.0 - xy.y / 768.0);
  vec4 c;                                                                    // uniform branches: one fetch except during a cross-fade
  if (uMix <= 0.0) c = texture2D(a, uv, bias);
  else if (uMix >= 1.0) c = texture2D(b, uv, bias);
  else c = mix(texture2D(a, uv, bias), texture2D(b, uv, bias), uMix);
  return c * step(0.0, uv.x) * step(uv.x, 1.0);
}
vec3 sky(vec3 d, float bias) {
  vec2 xy = vec2(uXC + atan(d.x, -d.z) * K, HZ - d.y / max(length(d.xz), 1e-4) * K);
  vec3 c = samp(tSkyN, tSkyD, xy, bias).rgb * (1.0 + uFlash * 3.0);
  if (uFlash > 0.0) {
    vec2 b = vec2((xy.x - uBoltX) / 300.0 + 0.5, (xy.y - 30.0) / 560.0);
    vec4 bc = texture2D(tBolt, vec2(b.x, 1.0 - b.y), 0.0);
    c += bc.rgb * bc.a * step(0.0, b.x) * step(b.x, 1.0) * step(0.0, b.y) * step(b.y, 1.0) * uFlash * 5.0;
  }
  return c;
}
// city layers in front of whatever is at distance sMax along the ray
vec3 city(vec3 p, vec3 d, vec3 c, float sMax, float bias) {
  float lit = 1.0 + uFlash * 0.6, s; vec4 L;
  s = cylS(p, d, RFAR); L = samp(tFarN, tFarD, design(p + s * d, RFAR), bias); c = mix(c, L.rgb * lit, L.a * step(0.0, s) * step(s, sMax));
  s = cylS(p, d, RMID); L = samp(tMidN, tMidD, design(p + s * d, RMID), bias); c = mix(c, L.rgb * lit, L.a * step(0.0, s) * step(s, sMax));
  s = cylS(p, d, RBRI); L = samp(tBriN, tBriD, design(p + s * d, RBRI), bias); c = mix(c, L.rgb * lit, L.a * step(0.0, s) * step(s, sMax));
  return c;
}
float band(float y, float a, float b, float w) { return smoothstep(a - w, a, y) * (1.0 - smoothstep(b, b + w, y)); }
// repeated vertical bars of half-width hw every period; fades to the average coverage where they would alias
float bars(float x, float period, float hw, float w) {
  float dd = abs(fract(x / period + 0.5) - 0.5) * period;
  return mix(1.0 - smoothstep(hw - w * 0.5, hw + w * 0.5, dd), 2.0 * hw / period, smoothstep(hw, period * 0.5, w));
}
float rain(vec3 p, vec3 d, float r, float seed, float sMax) {
  float s = cylS(p, d, r); vec3 h = p + s * d;
  vec2 q = vec2(arcOf(h, r) * 9.0 + h.y * 1.2, h.y * 0.5 + uTime * 4.5);   // 11 cm lanes, 2 m cells, falling 9 m/s, wind-slanted
  q.y += hash(vec2(floor(q.x), seed * 3.1));                               // every lane starts at its own height (no rows)
  vec2 id = floor(q), g = fract(q);
  float fx = fwidth(q.x) + 1e-4;
  float line = 1.0 - smoothstep(0.02, 0.02 + fx * 1.5, abs(g.x - 0.2 - 0.6 * hash(id.yx + seed * 1.7)));
  float seg = smoothstep(0.0, 0.03, g.y) * (1.0 - smoothstep(0.07, 0.13, g.y));
  return line * seg * step(hash(id + seed), 0.4) * step(0.0, s) * step(s, sMax) / (1.0 + fx * 4.0);
}

void main() {
  vec3 cw = cameraPosition - uO, dw = vW - cameraPosition;
  vec3 P = vec3(dot(cw, uRt), cameraPosition.y, dot(cw, uN));                 // outside frame: x right, y up, z towards the room
  vec3 d = vec3(dot(dw, uRt), dw.y, dot(dw, uN));
  vec3 nd = normalize(d);
  vec3 col; float sOpq = 1e9;
  float sG = d.y < 0.0 ? -P.y / d.y : -1.0;
  vec3 g = P + sG * d;
  if (sG > 0.0 && length(vec2(g.x, g.z - RREF)) < RAIL) {
    // wet terrace: paving slabs, puddles, blurry reflections (sharp in the puddles, rippled by the rain)
    sOpq = sG; vec2 p = g.xz;
    vec2 t = p / vec2(0.6, 0.4); t.x += 0.5 * mod(floor(t.y), 2.0);
    vec2 ft = abs(fract(t) - 0.5) * vec2(0.6, 0.4), fw = fwidth(p) + 1e-4;
    float joint = max(1.0 - smoothstep(0.004, 0.004 + fw.x, 0.3 - ft.x), 1.0 - smoothstep(0.004, 0.004 + fw.y, 0.2 - ft.y));
    float puddle = smoothstep(0.5, 0.56, fbm(p * 0.5 + 3.7));
    vec2 rip = (vec2(vnoise(p * 16.0 + uTime * 3.1), vnoise(p * 16.0 - uTime * 2.7)) - 0.5) * 0.06 * uRain;
    vec3 r = vec3(d.x + rip.x * length(d), -d.y, d.z + rip.y * length(d));
    float bias = mix(4.0, 0.5, puddle);
    vec3 rc = city(g, r, sky(r, bias), 1e9, bias);
    vec3 base = mix(vec3(0.010, 0.011, 0.014), vec3(0.15, 0.13, 0.12), uEve) * (0.7 + 0.6 * fbm(p * 2.0)) * (1.0 - 0.45 * joint * (1.0 - puddle));
    float F = 0.03 + 0.97 * pow(1.0 - clamp(-nd.y, 0.0, 1.0), 5.0);
    col = mix(base, rc, clamp(F * mix(0.45, 1.0, puddle) + 0.2 * puddle, 0.0, 1.0)) * (1.0 + uFlash * 0.8);
  } else if (d.y < 0.0) {
    // the Rhine: reflections of sky and city, stretched into vertical streaks by the waves
    sOpq = (WATER - P.y) / d.y;
    vec3 w = P + sOpq * d; vec2 p = vec2(w.x * 0.3, w.z * 1.2);
    float fade = 1.0 / (1.0 + sOpq * length(d) / 250.0);                    // calmer look (less aliasing) far away
    float n1 = vnoise(p + vec2(uTime * 0.25, uTime * 0.6)) - 0.5, n2 = vnoise(p * 2.3 - vec2(uTime * 0.4, uTime * 0.3)) - 0.5;
    vec3 r = vec3(d.x + (n1 * 0.6 + n2 * 0.4) * 0.012 * length(d.xz) * fade, -d.y * (1.0 + (n1 + n2) * 1.1 * fade), d.z);
    vec3 rc = city(w, r, sky(r, 1.0), 1e9, 1.0);
    float F = 0.02 + 0.98 * pow(1.0 - clamp(-nd.y, 0.0, 1.0), 5.0);
    col = mix(mix(vec3(0.006, 0.009, 0.013), vec3(0.08, 0.07, 0.075), uEve), rc, clamp(F * 1.1, 0.0, 0.95));
    col = mix(col, sky(vec3(d.x, 0.0, d.z), 2.0), (1.0 - exp(-sOpq * length(d) / 900.0)) * 0.5);   // haze
  } else col = sky(d, 0.0);
  col = city(P, d, col, sOpq, 0.0);

  // rain behind the railing
  vec3 rainCol = vec3(0.55, 0.62, 0.75) * (0.09 + uFlash * 0.6) * uRain;
  if (uRain > 0.0) col += rainCol * (rain(P, d, 28.0, 1.0, sOpq) * 0.6 + rain(P, d, 12.0, 2.0, sOpq) * 0.8);

  // railing on the terrace edge, and street lamps (dark in the blackout, glowing once the grid is back)
  float s = cylS(P, d, RAIL); vec3 h = P + s * d;
  float a = arcOf(h, RAIL), y = h.y; vec2 fw = fwidth(vec2(a, y)) + 1e-4;
  if (s > 0.0 && s < sOpq && h.y > -0.05) {
    float rail = max(max(band(y, 0.98, 1.05, fw.y), band(y, 0.52, 0.55, fw.y)), band(y, -0.05, 0.14, fw.y));
    rail = max(rail, bars(a, 1.6, 0.03, fw.x) * band(y, 0.0, 1.05, fw.y));
    rail = max(rail, bars(a, 0.13, 0.008, fw.x) * band(y, 0.14, 0.98, fw.y));
    float la = a - 2.4 - 16.0 * floor((a - 2.4) / 16.0 + 0.5);
    float pole = (1.0 - smoothstep(0.06, 0.06 + fw.x, abs(la))) * band(y, 0.0, 4.6, fw.y);
    pole = max(pole, band(la, 0.0, 0.75, fw.x) * band(y, 4.5, 4.57, fw.y));
    vec2 hd = (vec2(la, y) - vec2(0.72, 4.46)) / vec2(0.34, 0.09);
    float head = 1.0 - smoothstep(1.0 - fw.x * 4.0, 1.0, length(hd));
    vec3 steel = mix(vec3(0.014, 0.016, 0.02), vec3(0.07, 0.06, 0.06), uEve) * (1.0 + uFlash * 1.5);
    steel += vec3(0.25, 0.16, 0.1) * uEve * band(y, 1.03, 1.05, fw.y);    // evening light catching the handrail
    col = mix(col, steel, max(rail, pole));
    col = mix(col, mix(steel, vec3(3.0, 2.2, 1.3), uLamps), head);
    col += vec3(1.0, 0.7, 0.4) * uLamps * 0.35 * exp(-dot(hd * vec2(0.34, 0.09), hd * vec2(0.34, 0.09)) * 2.5);   // lamp glow
  }
  if (uRain > 0.0) col += rainCol * rain(P, d, 7.2, 3.0, sOpq);

  // plane trees on the terrace, swaying in the wind
  s = cylS(P, d, TREE); h = P + s * d;
  a = arcOf(h, TREE);
  float fx = fwidth(a) + 1e-4;
  if (uTrees > 0.5 && s > 0.0 && s < sOpq && h.y > -0.05) {
    for (int i = 0; i < 2; i++) {
      vec2 q = vec2(a - (i == 0 ? -4.0 : 5.6), h.y);
      if (abs(q.x) > 3.2 || q.y > 7.0) continue;                            // cheap bounds test before the noise
      q.x += sin(uTime * (1.3 + float(i) * 0.4) + q.y * 0.6) * 0.04 * max(q.y - 2.0, 0.0) * (0.4 + uRain);
      float trunk = (1.0 - smoothstep(0.16 - q.y * 0.02, 0.16 - q.y * 0.02 + fx, abs(q.x + 0.12 * sin(q.y * 1.1)))) * step(q.y, 3.6);
      vec2 c = (q - vec2(0.0, 4.7)) / vec2(2.4, 1.9);
      float leaf = fbm(q * 2.4 + float(i) * 7.0);
      float canopy = smoothstep(0.02, -0.02, length(c) - 0.72 - 0.5 * (leaf - 0.5)) * smoothstep(0.32, 0.4, fbm(q * 5.5 + 3.0) + (1.0 - length(c)) * 0.35);
      vec3 tc = mix(vec3(0.006, 0.008, 0.01), vec3(0.035, 0.04, 0.025), uEve) * (0.7 + 0.6 * leaf) * (1.0 + uFlash * 1.2);
      tc += vec3(0.3, 0.18, 0.08) * uEve * smoothstep(0.3, 0.9, -c.x + c.y * 0.5) * canopy;   // warm rim from the low sun (west, on the left)
      col = mix(col, tc, max(trunk, canopy));
    }
  }
  if (uRain > 0.0) col += rainCol * rain(P, d, 5.2, 4.0, sOpq);

  // the pane itself reflects the room, more so at grazing angles (Fresnel), and lets a little less through
  if (P.z > 0.0) {                                                          // (not once the camera has stepped outside)
    float Fg = 0.04 + 0.96 * pow(1.0 - clamp(-nd.z, 0.0, 1.0), 5.0);
    col = col * (1.0 - Fg) + uRoom * Fg;
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,df={night:{eve:0,lamps:0,rain:1,fade:1},restored:{eve:0,lamps:1,rain:.7,fade:5},evening:{eve:1,lamps:1,rain:0,fade:9}},go=class{constructor({scale:e=1}={}){this.scale=e,this.mode="night",this.sets={night:this.makeSet("night")},this.cur="night",this.next=null,this.boltTex=yt(256,512,(n,s,r)=>wh(n,s,r,1));let t=this.sets.night;this.u={tSkyN:{value:t.sky},tFarN:{value:t.far},tMidN:{value:t.mid},tBriN:{value:t.bridge},tSkyD:{value:t.sky},tFarD:{value:t.far},tMidD:{value:t.mid},tBriD:{value:t.bridge},tBolt:{value:this.boltTex},uTime:{value:0},uFlash:{value:0},uBoltX:{value:1e3},uMix:{value:0},uRain:{value:1},uEve:{value:0},uLamps:{value:0},uRoom:{value:new Ce(.02,.025,.03)}}}get night(){return this.sets.night}makeSet(e){let t={};for(let n of Eh)t[n.id]=yt(Math.round(n.w*this.scale),Math.round(n.h*this.scale),(s,r,a)=>cf(s,r,a,e,n));return t}material({origin:e,right:t,normal:n,xCenter:s=1024},{trees:r=!0}={}){return new dt({uniforms:{...this.u,uO:{value:e},uRt:{value:t},uN:{value:n},uXC:{value:s},uTrees:{value:r?1:0}},vertexShader:l_,fragmentShader:c_,fog:!1})}prepare(e){return this.sets[e]?[]:(this.sets[e]=this.makeSet(e),Object.values(this.sets[e]))}setMode(e,t=!1){if(e===this.mode){t&&this.next&&this.finish();return}this.next&&this.finish(),this.prepare(e),this.mode=e,this.next=e;let n=this.sets[e],s=this.u;s.tSkyD.value=n.sky,s.tFarD.value=n.far,s.tMidD.value=n.mid,s.tBriD.value=n.bridge,s.uMix.value=0,t&&this.finish()}finish(){let e=this.u,t=df[this.next];e.uEve.value=t.eve,e.uLamps.value=t.lamps,e.uRain.value=t.rain;let n=this.sets[this.cur];this.cur=this.next,this.next=null;let s=this.sets[this.cur];if(e.tSkyN.value=s.sky,e.tFarN.value=s.far,e.tMidN.value=s.mid,e.tBriN.value=s.bridge,e.uMix.value=0,n&&n!==s){for(let r of Object.values(n))r.dispose(),r.image.width=r.image.height=0;for(let r in this.sets)this.sets[r]===n&&delete this.sets[r]}}strike(){this.u.uBoltX.value=250+Math.random()*1600,An(this.boltTex,(e,t,n)=>wh(e,t,n,Math.random()*1e9|0))}update(e,t){let n=this.u;if(n.uTime.value=(n.uTime.value+e)%3600,n.uFlash.value=t,!this.next)return;let s=df[this.next],r=Math.min(1,e/s.fade);n.uMix.value=Math.min(1,n.uMix.value+r),n.uEve.value+=(s.eve-n.uEve.value)*Math.min(1,r*3),n.uLamps.value+=(s.lamps-n.uLamps.value)*Math.min(1,r*4),n.uRain.value=Math.max(s.rain,n.uRain.value-e/(s.fade*.4)),n.uMix.value>=1&&this.finish()}};var Zs=()=>matchMedia("(pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches,vo=class{constructor(e,t){this.h=t,this.move={x:0,y:0},this.enabled=!1,this.el=document.createElement("div"),this.el.id="touchUi",this.el.className="hidden",this.el.innerHTML=`
      <div class="joy" id="joyBase"><div class="joy-knob" id="joyKnob"></div></div>
      <div class="tbtns">
        <button class="tbtn" data-t="menu" aria-label="Menu">\u2630</button>
        <button class="tbtn" data-t="hint" aria-label="Hint">\u{1F4A1}</button>
        <button class="tbtn" data-t="journal" aria-label="Journal">\u{1F4D3}</button>
      </div>
      <button class="tbtn use" data-t="use">USE</button>
      <button class="tbtn run" data-t="sprint">RUN</button>`,document.body.appendChild(this.el),this.base=this.el.querySelector("#joyBase"),this.knob=this.el.querySelector("#joyKnob"),this.el.querySelectorAll("[data-t]").forEach(n=>{let s=n.dataset.t;if(s==="sprint"){n.addEventListener("pointerdown",a=>{a.preventDefault(),this.h.sprint?.(!0),n.classList.add("on")});let r=()=>{this.h.sprint?.(!1),n.classList.remove("on")};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("pointerleave",r)}else n.addEventListener("click",r=>{r.preventDefault(),this.h[s]?.()})}),this.joyId=null,this.lookId=null,e.addEventListener("pointerdown",n=>this.down(n)),window.addEventListener("pointermove",n=>this.moveEv(n)),window.addEventListener("pointerup",n=>this.up(n)),window.addEventListener("pointercancel",n=>this.up(n))}enable(e){this.enabled=e,this.el.classList.toggle("hidden",!e),e||this.reset()}reset(){this.move.x=this.move.y=0,this.joyId=this.lookId=null,this.base.classList.remove("active"),this.knob.style.transform=""}down(e){!this.enabled||e.pointerType==="mouse"||(e.clientX<innerWidth*.4&&this.joyId===null?(this.joyId=e.pointerId,this.jx=e.clientX,this.jy=e.clientY,this.base.style.left=`${e.clientX-60}px`,this.base.style.top=`${e.clientY-60}px`,this.base.classList.add("active")):this.lookId===null&&(this.lookId=e.pointerId,this.lx=e.clientX,this.ly=e.clientY,this.tapStart={x:e.clientX,y:e.clientY,t:performance.now()}))}moveEv(e){if(this.enabled)if(e.pointerId===this.joyId){let t=e.clientX-this.jx,n=e.clientY-this.jy,s=Math.hypot(t,n),r=50;s>r&&(t*=r/s,n*=r/s),this.knob.style.transform=`translate(${t}px, ${n}px)`,this.move.x=t/r,this.move.y=-n/r}else e.pointerId===this.lookId&&(this.h.look?.(e.clientX-this.lx,e.clientY-this.ly),this.lx=e.clientX,this.ly=e.clientY)}up(e){if(e.pointerId===this.joyId&&(this.joyId=null,this.move.x=this.move.y=0,this.base.classList.remove("active"),this.knob.style.transform=""),e.pointerId===this.lookId){this.lookId=null;let t=this.tapStart;t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<12&&performance.now()-t.t<350&&this.h.tap?.(e.clientX,e.clientY)}}};function ff({scene:i,refs:e,M:t,col:n,box:s,cyl:r,sph:a,plane:o,texMat:l,tag:c,noRay:h}){let u=(O,$={})=>new Ht({color:O,roughness:.75,...$}),d=new Zt({map:zd(),transparent:!0,depthWrite:!1,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-2,fog:!1});for(let[O,$,ie,de]of[[5.6,3.05,1.3,3.3],[5.75,-2.9,.9,2.4],[-4.7,-4.2,2.1,1.6],[-2.9,-4.35,.9,.9],[3.1,-4.3,1.8,1.4],[-4.95,0,2.1,4.6],[2.6,4.55,2.9,1.3],[0,-11.9,2.9,1.4],[3.9,-12.4,1.3,1.4],[4.8,-10.6,.8,1.8],[0,-11,.8,.8],[-5.35,4.35,1.3,1.3],[-4.45,-12.45,.9,1],[1,4.65,.5,.5],[4.35,-5.75,.6,.6]])h(o(ie,de,d,O,.003,$,"+y"));let f=new Zt({map:Hd(),transparent:!0,depthWrite:!1,opacity:.75,polygonOffset:!0,polygonOffsetFactor:-2,fog:!1}),g=(O,$,ie,de,Ne=.45)=>{let _e=new je;_e.position.set(O,.004,$),_e.rotation.y=de;let Te=new Pe(new Dn(ie,Ne),f);Te.rotation.x=-Math.PI/2,Te.position.z=Ne/2,h(Te),_e.add(Te),i.add(_e)},v=Math.PI;g(0,5,12,v),g(-6,0,10,v/2),g(6,0,10,-v/2),g(-3.4,-5,5.2,0),g(3.4,-5,5.2,0),g(0,-13,10,0),g(-5,-9.1,7.8,v/2),g(5,-10.9,4.2,-v/2),g(5,-6.2,2,-v/2),g(-2.9,-5.2,4.2,v),g(2.9,-5.2,4.2,v),g(7,-7.2,3.8,v),g(7,-8.8,3.8,0);let p=(O,$,ie,de)=>{O.clearRect(0,0,$,ie),O.fillStyle="#f1efe6",O.beginPath(),O.arc(128,128,124,0,v*2),O.fill(),O.strokeStyle="#222";for(let _e=0;_e<60;_e++){let Te=_e/60*v*2,U=_e%5?108:94;O.lineWidth=_e%5?2:6,O.beginPath(),O.moveTo(128+Math.sin(Te)*U,128-Math.cos(Te)*U),O.lineTo(128+Math.sin(Te)*116,128-Math.cos(Te)*116),O.stroke()}O.fillStyle="#333",O.font=`bold 15px ${He.sans}`,O.textAlign="center",O.fillText("SYNCHRON \xB7 50 Hz",128,172);let Ne=(_e,Te,U,nt)=>{O.strokeStyle=nt,O.lineWidth=U,O.lineCap="round",O.beginPath(),O.moveTo(128,128),O.lineTo(128+Math.sin(_e)*Te,128-Math.cos(_e)*Te),O.stroke()};Ne(de/3600%12/12*v*2,62,9,"#1b1b1b"),Ne(de/60%60/60*v*2,96,6,"#1b1b1b"),Ne(de%60/60*v*2,104,2,"#c21"),O.fillStyle="#1b1b1b",O.beginPath(),O.arc(128,128,8,0,v*2),O.fill(),Kt(O,$,ie,.9,21)},m=18*3600+36*60+2,E=yt(256,256,(O,$,ie)=>p(O,$,ie,m));e.setClocks=O=>An(E,($,ie,de)=>p($,ie,de,O)),e.CLOCK_STOPPED=m;let _=l(E,{roughness:.35}),x=(O,$,ie,de)=>{let Ne=new je,_e=new Pe(new $a(.16,40),_);_e.position.z=.021,Ne.add(_e);let Te=new Pe(new mn(.175,.175,.04,40),t.dark);Te.rotation.x=v/2,Ne.add(Te),Ne.position.set(O,$,ie),Ne.rotation.y=de,i.add(Ne),c(Ne,"clock","Wall clock")};x(.55,2.6,4.975,v),x(-4.975,2.93,-9.2,v/2);let P=new je;r(.085,.5,u(12588058,{roughness:.4,metalness:.1}),0,.42,0,P),r(.03,.08,t.dark,0,.71,0,P),s(.12,.02,.03,t.dark,.03,.76,0,P);let M=new Pe(new Ln(.1,.01,6,16,v*1.2),t.dark);M.position.set(.07,.55,.05),M.rotation.z=-v/2,P.add(M),s(.2,.06,.04,t.metal,0,.55,-.09,P),P.position.set(-2.05,0,-4.86),i.add(P),n(-2.15,-1.95,-5,-4.76),o(.18,.24,l($t([{t:"\u{1F9EF}",font:`90px ${He.sans}`},{t:"FIRE",font:`bold 34px ${He.sans}`}],{w:192,h:256,bg:"#c0141a",fg:"#fff"})),-2.05,1.05,-4.99,"+z"),o(.3,.3,l($t([{t:"H\u2082",font:`bold 70px ${He.sans}`},{t:"NO FLAMES",font:`bold 30px ${He.sans}`}],{w:256,h:256,bg:"#ffd200",fg:"#111",border:"#111"})),-3.9,2.2,-4.99,"+z"),o(.26,.26,l($t([{t:"\u26D1",font:`80px ${He.sans}`},{t:"PPE",font:`bold 36px ${He.sans}`}],{w:256,h:256,bg:"#1b5fa8",fg:"#fff"})),5.99,1.6,-4.4,"-x");let T=yt(256,256,(O,$,ie)=>{O.fillStyle="#a57b4f",O.fillRect(0,0,$,ie);for(let de=0;de<400;de++)O.fillStyle=`rgba(${60+Math.random()*40},${40+Math.random()*30},20,${Math.random()*.08})`,O.fillRect(Math.random()*$,Math.random()*ie,3,1);O.fillStyle="rgba(210,190,140,.75)",O.fillRect($*.44,0,$*.12,ie),O.fillStyle="#2a2a2a",O.font=`bold 22px ${He.sans}`,O.textAlign="center",O.fillText("PV MODULES",$/2-55,80),O.fillText("\u2191\u2191 THIS SIDE UP",$/2,200),Kt(O,$,ie,1.5,22)}),D=l(T,{roughness:.95});for(let[O,$,ie,de,Ne,_e,Te]of[[.62,.42,.5,-5.4,.21,4.4,.12],[.55,.36,.45,-5.35,.6,4.35,-.18],[.4,.3,.35,-4.75,.15,4.62,.4]]){let U=s(O,$,ie,D,de,Ne,_e);U.rotation.y=Te,c(U,"boxes","Cardboard boxes")}n(-5.75,-4.5,4.05,4.85);let b=new Pe(new mn(.17,.14,.44,24,1,!0),u(3817285,{side:ln,roughness:.6}));b.position.set(1,.22,4.65),i.add(b),c(b,"bin","Waste-paper bin"),r(.14,.01,u(2764339),1,.005,4.65);for(let O=0;O<4;O++)a(.045+Math.random()*.02,u(15263454,{roughness:1}),1+(Math.random()-.5)*.12,.38+O*.03,4.65+(Math.random()-.5)*.12);n(.83,1.17,4.48,4.82);let y=new je,C=new Pe(new mn(.18,.18,10.8,24),t.alu);C.rotation.z=v/2,y.add(C);for(let O=-5.2;O<=5.2;O+=.6){let $=new Pe(new Ln(.183,.008,6,24),t.metal);$.rotation.y=v/2,$.position.x=O,y.add($)}for(let O of[-2.2,2.2])s(.34,.06,.34,t.white,O,-.21,0,y),o(.3,.3,l(yt(128,128,($,ie,de)=>{$.fillStyle="#ddd",$.fillRect(0,0,ie,de),$.fillStyle="#555";for(let Ne=8;Ne<ie;Ne+=12)$.fillRect(Ne,8,5,de-16);Kt($,ie,de,1,23)})),O,-.245,0,"+y",y).rotation.x=v/2;for(let O of[-4.5,-1,2.5,5])s(.02,.14,.02,t.metal,O,.25,0,y);y.position.set(-.2,3.18,3.6),i.add(y);let I=u(1447963,{roughness:.5}),F=(O,$=.012,ie=I,de=null)=>{let _e=new Vi(O.map(nt=>new N(...nt)),!1,"centripetal").getSpacedPoints(90).map(nt=>(nt.y=Math.max(nt.y,$+.0015),nt)),Te=new Vi(_e,!1,"centripetal"),U=new Pe(new Xa(Te,160,$,8,!1),ie);if(U.userData.cable=!0,i.add(U),de){let[nt,Je]=de,Xe=Te.getSpacedPoints(400);for(let Le=1;Le<Xe.length;Le++)if((Xe[Le-1][nt]-Je)*(Xe[Le][nt]-Je)<=0){let ct=r($+.009,.03,t.dark,Xe[Le].x,Xe[Le].y,Xe[Le].z);ct.position[nt]=Je,ct.rotation.set(nt==="z"?Math.PI/2:0,0,nt==="x"?Math.PI/2:0);break}}return U},H=e.INV_Y-.3;F([[5.9,H,.25],[5.91,H-.25,.3],[5.91,.4,.45],[5.9,.08,.7],[5.9,0,1],[5.9,0,1.5],[5.88,.12,1.66],[5.87,.25,1.78]],.012,I,["z",1.75]),F([[5.94,H,1.05],[5.955,H-.25,1.1],[5.955,.4,1.2],[5.955,.06,1.35],[5.955,0,1.55],[5.945,.2,1.68],[5.93,.36,1.78]],.01,I,["z",1.75]),F([[5.9,H,-.7],[5.92,H-.25,-.8],[5.935,.4,-1.05],[5.94,.06,-1.35],[5.94,0,-1.6],[5.93,.15,-1.85],[5.9,.36,-1.98]],.012,I,["z",-1.95]);let Z=F([[-3.95,.5,-4.45],[-3.84,.4,-4.5],[-3.72,.1,-4.62],[-3.5,0,-4.8],[-3,0,-4.86],[-2,0,-4.87],[-1.3,0,-4.88],[-1.12,.12,-4.93],[-1.1,.4,-4.935]],.014,u(2047866,{roughness:.5}),["x",-3.9]);s(.16,.22,.08,t.dark,-1.1,.46,-4.955),F([[3.49,.97,4.56],[3.56,.941,4.59],[3.72,.94,4.61],[3.79,.942,4.615],[3.814,.937,4.62],[3.824,.9,4.623],[3.834,.82,4.627],[3.845,.5,4.64],[3.86,.1,4.66],[3.95,0,4.76],[4.2,0,4.9],[4.3,.08,4.965],[4.3,.24,4.975]],.007,u(14276300)),s(.09,.09,.03,u(15658730,{roughness:.5}),4.3,.26,4.985),F([[.95,.92,-12.19],[.95,.88,-12.27],[.93,.812,-12.335],[.926,.801,-12.362],[.922,.77,-12.387],[.9,.62,-12.42],[.8,.36,-12.47],[.68,.29,-12.47],[.64,.28,-12.4]],.01),F([[.1,1,-12.17],[.11,.92,-12.2],[.13,.82,-12.24],[.17,.8,-12.28],[.23,.803,-12.32],[.25,.805,-12.337],[.258,.797,-12.357],[.265,.775,-12.376],[.33,.62,-12.42],[.45,.4,-12.46],[.53,.33,-12.47],[.56,.32,-12.4]],.006);let W=(O,$,ie,de)=>{let Ne=Math.hypot(ie-O,de-$),_e=ao();_e.repeat.set(Ne/.3,1);let Te=new je;Te.position.set((O+ie)/2,.006,($+de)/2),Te.rotation.y=-Math.atan2(de-$,ie-O);let U=new Pe(new Dn(Ne,.07),l(_e,{roughness:.6,polygonOffset:!0,polygonOffsetFactor:-3}));U.rotation.x=-v/2,h(U),Te.add(U),i.add(Te)};W(-3.85,-2.3,-3.85,2.3),W(-6,2.3,-3.85,2.3),W(-6,-2.3,-3.85,-2.3),W(5.15,-4,5.15,-1.8);let ae=new je;s(.5,1.3,.6,t.dark,0,.65,0,ae);for(let O=0;O<4;O++)s(.46,.005,.02,t.metal,0,.3+O*.3,.301,ae),s(.12,.025,.03,t.metal,0,.18+O*.3,.31,ae);ae.position.set(-4.45,0,-12.45),i.add(ae),c(ae,"cabinet","Filing cabinet"),n(-4.72,-4.18,-12.78,-12.12);let X=new je;r(.04,.09,u(15262936,{roughness:.3}),0,.045,0,X),r(.036,.005,u(2824720,{roughness:.1}),0,.075,0,X);let J=new Pe(new Ln(.025,.007,6,12),u(15262936));J.position.set(.045,.045,0),X.add(J),X.position.set(-.28,.79,-12.05),i.add(X);let oe=u(15921386,{roughness:.9});for(let[O,$,ie]of[[.25,-11.5,.2],[.3,-11.55,-.15],[-1,-12.15,.6]]){let de=o(.21,.297,oe,O,.792,$,"+y");de.rotation.z=ie,c(de,"papers","Papers")}let me=new je;s(.2,.4,.45,t.dark,0,.2,0,me),s(.05,.02,.01,new Ht({color:1118481,emissive:2162528,emissiveIntensity:2}),0,.33,.226,me),me.position.set(.6,0,-12.2),i.add(me);let Se=new je,Ke=new Pe(new mn(.16,.12,.32,20),u(8014386,{roughness:.9}));Ke.position.y=.16,Se.add(Ke),r(.15,.01,u(2826262),0,.31,0,Se);for(let O=0;O<9;O++){let $=new Pe(new rs(.03,.45,5),u(O%3?7039532:9075258,{roughness:.9})),ie=O/9*v*2;$.position.set(Math.cos(ie)*.05,.5,Math.sin(ie)*.05),$.rotation.set(Math.sin(ie)*.5,0,Math.cos(ie)*.5+O%2*.3),Se.add($)}Se.position.set(4.35,0,-5.75),i.add(Se),n(4.17,4.53,-5.93,-5.57);let j=yt(384,256,(O,$,ie)=>{O.fillStyle="#b48a5a",O.fillRect(0,0,$,ie);for(let Ne=0;Ne<2500;Ne++)O.fillStyle=`rgba(90,60,30,${Math.random()*.25})`,O.fillRect(Math.random()*$,Math.random()*ie,2,2);[["#fff59d","Fri rota:","M.V."],["#b3e5fc","Wi-Fi:","SolarLab_Guest"],["#ffccbc","PV test","plan Q4"],["#c8e6c9","Lunch?","12:30"]].forEach(([Ne,_e,Te],U)=>{let nt=20+U%2*180+Math.random()*20,Je=18+Math.floor(U/2)*120+Math.random()*10;O.save(),O.translate(nt+70,Je+50),O.rotate((Math.random()-.5)*.2),O.fillStyle=Ne,O.fillRect(-70,-50,140,100),O.fillStyle="#333",O.font='20px "Segoe Print", "Comic Sans MS", cursive',O.textAlign="center",O.fillText(_e,0,-8),O.fillText(Te,0,22),O.fillStyle="#c21",O.beginPath(),O.arc(0,-40,5,0,v*2),O.fill(),O.restore()}),Kt(O,$,ie,1,24)});s(.03,.62,.92,u(7032371),-4.985,1.6,-6.3),c(o(.88,.58,l(j,{roughness:.95}),-4.968,1.6,-6.3,"+x"),"cork","Cork board");let he=yt(32,32,(O,$,ie)=>{let de=O.createRadialGradient($/2,ie/2,0,$/2,ie/2,$/2);de.addColorStop(0,"rgba(255,255,255,1)"),de.addColorStop(1,"rgba(255,255,255,0)"),O.fillStyle=de,O.fillRect(0,0,$,ie)}),ve=(O,$,ie,de)=>{let Ne=new Ut,_e=new Float32Array(O*3);for(let nt=0;nt<O;nt++)_e[nt*3]=$[0]+Math.random()*($[1]-$[0]),_e[nt*3+1]=$[2]+Math.random()*($[3]-$[2]),_e[nt*3+2]=$[4]+Math.random()*($[5]-$[4]);Ne.setAttribute("position",new pn(_e,3));let Te=new Rr({color:ie,size:de,map:he,transparent:!0,opacity:0,depthWrite:!1,blending:Qn,fog:!1}),U=new Va(Ne,Te);return U.userData.box=$,U.userData.seed=Math.random()*100,h(U),i.add(U),U};e.dustSun=ve(260,[-5.6,-4.3,1.1,2.8,-1.8,1.8],16773590,.014),e.dustBeam=ve(300,[-1.5,3.2,.2,2.4,-12.6,-5.6],16763024,.016)}function yo(i,e,{segs:t=56,ring:n=16,flatten:s=1,floor:r=-1/0}={}){let a=new Vi(i.map(m=>new N(...m)),!1,"centripetal"),o=[],l=[],c=[],h=new N(0,1,0),u=new N,d=new N,f=new N,g=new N,v=new N(1,0,0);for(let m=0;m<=t;m++){let E=m/t;a.getPointAt(E,g),a.getTangentAt(E,u),d.crossVectors(u,h),d.lengthSq()<1e-4?d.copy(v):d.normalize(),v.copy(d),f.crossVectors(d,u).normalize();let _=e(E);for(let x=0;x<=n;x++){let P=-Math.PI/2+x/n*Math.PI*2,M=Math.cos(P)*_,T=Math.sin(P)*_*s;o.push(g.x+M*d.x+T*f.x,Math.max(r,g.y+M*d.y+T*f.y),g.z+M*d.z+T*f.z),l.push(E,x/n)}}for(let m=0;m<t;m++)for(let E=0;E<n;E++){let _=m*(n+1)+E,x=_+n+1;c.push(_,x,_+1,x,x+1,_+1)}let p=new Ut;return p.setAttribute("position",new pt(o,3)),p.setAttribute("uv",new pt(l,2)),p.setIndex(c),p.computeVertexNormals(),p}var _o=i=>e=>{for(let t=1;t<i.length;t++)if(e<=i[t][0]){let[n,s]=i[t-1],[r,a]=i[t],o=(e-n)/(r-n);return s+(a-s)*o*o*(3-2*o)}return i[i.length-1][1]};function Rh(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new ii(n);return s.colorSpace=zt,s.anisotropy=4,s.wrapS=s.wrapT=Yt,s}function Ch(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}var mf=[208,136,72],gf=[150,78,30],vf=[238,212,170],xo=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t);function pf(i,e=.62){let t=Ch(77),n=Array.from({length:8},()=>t()*6.28);return Rh(512,256,(s,r,a)=>{let o=s.createImageData(r,a),l=o.data;for(let c=0;c<a;c++)for(let h=0;h<r;h++){let u=h/r,d=1-c/a,f=Math.exp(-(((d-e)/.2)**2)),g=Math.exp(-(((d-.22)/.13)**2))+Math.exp(-(((d-1.02)/.1)**2)),v=Math.sin(d*9+n[0])*.012+Math.sin(d*23+u*40+n[1])*.004,p=Math.sin((u+v)*i*Math.PI*2+Math.sin(u*7+n[2])*.8),m=Math.max(0,p-.15)/.85*(.35+.65*f)*(1-Math.min(1,g*1.4)),E=(t()-.5)*16,_=xo(mf,gf,Math.min(1,m*.9+f*.25));_=xo(_,vf,Math.min(1,g*.9));let x=(c*r+h)*4;l[x]=_[0]+E,l[x+1]=_[1]+E*.8,l[x+2]=_[2]+E*.6,l[x+3]=255}s.putImageData(o,0,0)})}function h_(){return Rh(256,128,(i,e,t)=>{let n=i.createImageData(e,t),s=n.data,r=Ch(5);for(let a=0;a<t;a++)for(let o=0;o<e;o++){let l=o/e,c=1-a/t,h=Math.abs(l-.25),u=0;if(c>.6)for(let p of[0,.045,.09,.14])u=Math.max(u,Math.exp(-(((h-p)/.012)**2))*Math.min(1,(c-.6)/.08));c>.66&&h>.18&&(u=Math.max(u,.5+.5*Math.sin(l*60))),h>.1&&h<.2&&(u=Math.max(u,Math.exp(-(((c-.5+(h-.1)*.6)/.018)**2))*.9));let d=Math.exp(-((h/.085)**2))*Math.exp(-(((c-.36)/.13)**2))+Math.exp(-(((c-.1)/.15)**2)),f=xo(mf,gf,u*.85);f=xo(f,vf,Math.min(1,d));let g=(r()-.5)*14,v=(a*e+o)*4;s[v]=f[0]+g,s[v+1]=f[1]+g*.8,s[v+2]=f[2]+g*.6,s[v+3]=255}i.putImageData(n,0,0)})}function u_(){let i=Rh(128,128,(e,t,n)=>{let s=e.createImageData(t,n),r=s.data,a=Ch(9);for(let o=0;o<t*n;o++){let l=a()**.8*255;r[o*4]=r[o*4+1]=r[o*4+2]=l,r[o*4+3]=255}e.putImageData(s,0,0)});return i.colorSpace=Jn,i}function yf({M:i}){let e=new je,t=u_(),n=J=>new as({map:J,roughness:.92,sheen:1,sheenRoughness:.45,sheenColor:new Ce(.55,.36,.2),bumpMap:t,bumpScale:.4}),s=(J,oe,me,Se,Ke=.0035,j=3)=>{let he=new Pe(J,oe);Se.add(he);let ve=J.attributes.normal,O=J.attributes.position,$=t.clone();$.repeat.set(...me),$.needsUpdate=!0;for(let ie=1;ie<=j;ie++){let de=J.clone(),Ne=de.attributes.position;for(let U=0;U<Ne.count;U++)Ne.setXYZ(U,O.getX(U)+ve.getX(U)*Ke*ie/j,O.getY(U)+ve.getY(U)*Ke*ie/j,O.getZ(U)+ve.getZ(U)*Ke*ie/j);de.computeBoundingSphere();let _e=new Ht({map:oe.map,alphaMap:$,alphaTest:.35+ie*.14,roughness:1,color:new Ce().setScalar(.8+ie*.06)}),Te=new Pe(de,_e);Te.raycast=()=>{},Se.add(Te)}return he},r=n(pf(9)),a=n(pf(5,.5)),o=n(h_()),l=[-.075,.068,-.028],c=[];for(let J=-.62;J<=.93;J+=.08)c.push([.05*Math.cos(J*Math.PI),.05,.1*Math.sin(J*Math.PI)]);c.push([-.07,.058,0],l);let h=new je;e.add(h),s(yo(c,_o([[0,.004],[.025,.05],[.07,.072],[.15,.078],[.4,.07],[.62,.068],[.78,.06],[.9,.042],[1,.035]]),{flatten:.74,floor:.002,segs:72}),r,[2,1.8],h);let u=(J,oe)=>s(yo(J,_o([[0,oe],[.62,.015],[.84,.0195],[1,.005]]),{segs:24,ring:10,floor:J[J.length-1][1]>0?.002:-1}),a,[.6,.5],h,.003,2);u([[-.04,.03,.055],[-.08,.02,.02],[-.1,.016,-.02],[-.108,.015,-.04]],.021),u([[-.045,.032,.11],[-.085,.026,.14],[-.114,.022,.155],[-.136,-.012,.163],[-.142,-.05,.166]],.021);let d=_o([[0,.018],[.5,.0155],[1,.0145]]);s(yo([[-.03,.035,-.115],[-.07,.026,-.15],[-.105,.02,-.17],[-.13,.008,-.178],[-.14,0,-.18]],d,{segs:24,ring:10,floor:.002}),a,[.7,.35],e,.003,2);let f=new je;f.position.set(-.14,0,-.18),e.add(f);let g=new Pe(new wn(.0145,12,10),a);f.add(g),s(yo([[0,0,0],[-.006,-.04,.002],[-.008,-.08,.01],[-.001,-.1,.028],[.006,-.102,.042]],_o([[0,.0145],[.75,.012],[1,.003]]),{segs:24,ring:10}),a,[.5,.35],f,.003,2);let v=new je;v.position.set(...l),e.add(v),v.lookAt(new N(l[0]-1,l[1]-.35,l[2]-.3).add(e.position)),v.rotateZ(.3);let p=new wn(.05,32,20);p.scale(1.05,.86,.95),s(p,o,[1.2,.6],v,.004,3);let m=new as({color:15653044,roughness:.9,sheen:1,sheenRoughness:.5,sheenColor:new Ce(.4,.34,.28)});for(let J of[-1,1]){let oe=new Pe(new wn(.0145,14,10),m);oe.position.set(J*.0115,-.017,.038),oe.scale.set(1,.85,.9),v.add(oe)}let E=new Pe(new wn(.014,12,8),m);E.position.set(0,-.032,.03),v.add(E);let _=new Pe(new wn(.0075,12,8),new Ht({color:12745328,roughness:.35}));_.position.set(0,-.004,.047),_.scale.set(1.2,.75,.7),v.add(_);let x=new Ht({color:2758412,roughness:.6}),P=[-1,1].map(J=>{let oe=new Pe(new Ln(.0105,.0016,6,16,Math.PI*.8),x);return oe.position.set(J*.021,.014,.041),oe.rotation.set(-.35,J*.45,Math.PI+Math.PI*.1),v.add(oe),oe}),M=new je;v.add(M),M.visible=!1;let T=new Pe(new wn(.0095,16,12),new as({color:14263345,roughness:.15,clearcoat:1,emissive:3810304}));T.position.set(.021,.013,.041),T.scale.set(1,.8,.6),M.add(T);let D=new Pe(new wn(.0095,12,8),new Zt({color:328965}));D.position.set(.021,.013,.0437),D.scale.set(.22,.75,.5),M.add(D);let b=new as({map:o.map,roughness:.9,sheen:1,sheenRoughness:.4,sheenColor:new Ce(.5,.33,.2)}),y=new Ht({color:13209736,roughness:.8}),C=[-1,1].map(J=>{let oe=new je;oe.position.set(J*.029,.034,-.004),oe.rotation.set(-.25,J*.2,-J*.42),v.add(oe);let me=new Pe(new rs(.02,.036,3,1),b);me.position.y=.016,me.scale.set(1,1,.45),me.rotation.y=Math.PI/6,oe.add(me);let Se=new Pe(new rs(.014,.027,3,1),y);return Se.position.set(0,.013,.005),Se.scale.set(1,1,.3),Se.rotation.y=Math.PI/6,oe.add(Se),oe}),I=[];for(let J of[-1,1])for(let oe=0;oe<4;oe++){let me=-.012-oe*.004,Se=(oe-1.5)*.12;I.push(J*.018,me,.04,J*(.018+Math.cos(Se)*.055),me-.006-Math.sin(Se)*.02,.04-.012)}let F=new Ut;F.setAttribute("position",new pt(I,3));let H=new Ar(F,new Vs({color:9407104,transparent:!0,opacity:.4}));H.raycast=()=>{},v.add(H);let Z=new Pe(new Ln(.037,.0055,8,24),i.red);Z.position.set(-.064,.058,.004),Z.lookAt(new N(-.075,.068,-.028).add(e.position)),e.add(Z);let W=new Pe(new mn(.009,.009,.002,16),new Ht({color:14198840,metalness:.85,roughness:.3}));W.position.set(-.098,.03,.01),W.rotation.z=Math.PI/2,e.add(W),e.traverse(J=>{J.isMesh&&(J.castShadow=!1)});let ae=v.quaternion.clone();return{group:e,body:h,tail:f,ears:C,head:v,eyeOpen:M,lids:P,lift:J=>{v.quaternion.copy(ae),v.rotateX(-.28*J),v.rotateY(.12*J)}}}var qe=3.5,ot=(i,e={})=>new Ht({color:i,roughness:.7,metalness:.05,...e});function bo(i,e,t,n){i.fillStyle="#2a2f36",i.fillRect(0,0,e,t),i.fillStyle="#ffd24a",i.font=`bold 30px ${He.sans}`,i.textAlign="center",i.fillText("SUN-SIM",e/2,40),i.fillStyle="#081a0e",i.fillRect(24,60,e-48,50),i.fillStyle=n?"#3eff7a":"#ff4a4a",i.font=`24px ${He.mono}`,i.fillText(n?"UNLOCKED":"LOCKED",e/2,94);for(let s=0;s<4;s++)for(let r=0;r<3;r++)i.fillStyle="#ccd",i.fillRect(40+r*64,130+s*56,48,42),i.fillStyle="#222",i.font=`bold 22px ${He.sans}`,i.fillText("123456789C0\u2713"[s*3+r],64+r*64,159+s*56);Kt(i,e,t,.8,3)}function Ph(i,e,t,n,s){i.fillStyle="#100404",i.fillRect(0,0,e,t),i.fillStyle=s?"#ff3b2f":"#3a1210",i.font=`bold ${t*.75}px ${He.mono}`,i.textAlign="center",i.textBaseline="middle",i.fillText(s?n:"--",e/2,t/2+2),i.textBaseline="alphabetic"}function _f(i,e){let t=[],n={interactables:[]},s=(R,V,Q,ue)=>{let We={minX:R,maxX:V,minZ:Q,maxZ:ue,enabled:!0};return t.push(We),We},r=(R,V,Q,ue,We,mt,_t,kt=i)=>{let jt=new Pe(new bi(R,V,Q),ue);return jt.position.set(We,mt,_t),kt.add(jt),jt},a=(R,V,Q,ue,We,mt,_t=i,kt=24)=>{let jt=new Pe(new mn(R,R,V,kt),Q);return jt.position.set(ue,We,mt),_t.add(jt),jt},o=(R,V,Q,ue,We,mt=i)=>{let _t=new Pe(new wn(R,20,14),V);return _t.position.set(Q,ue,We),mt.add(_t),_t},l=(R,V,Q,ue,We,mt,_t="+z",kt=i)=>{let jt=new Pe(new Dn(R,V),Q);return jt.position.set(ue,We,mt),jt.rotation.y={"+z":0,"-z":Math.PI,"+x":Math.PI/2,"-x":-Math.PI/2}[_t]??0,_t==="+y"&&jt.rotation.set(-Math.PI/2,0,0),kt.add(jt),jt},c=(R,V={})=>new Ht({map:R,roughness:.6,...V}),h=(R,V=.6)=>c(R,{emissive:16777215,emissiveMap:R,emissiveIntensity:V}),u=(R,V=1)=>new Ht({color:1118481,emissive:new Ce(R),emissiveIntensity:V}),d=(R,V,Q)=>(R.traverse(ue=>{ue.userData.id=V,ue.userData.label=Q,ue.userData.root=R}),n.interactables.push(R),R),f=(R,V,Q,ue)=>{let We=new N(...R),mt=new N(...V),_t=new Pe(new mn(Q,Q,We.distanceTo(mt),12),ue);return _t.position.copy(We).add(mt).multiplyScalar(.5),_t.quaternion.setFromUnitVectors(new N(0,1,0),mt.clone().sub(We).normalize()),i.add(_t),_t},g=R=>(R.raycast=()=>{},R),v=vh({base:[214,218,221],seed:11}),p=vh({base:[86,100,118],seed:23,grime:.8}),m=yh({seed:5}),E=yh({base:[70,78,90],grout:[42,46,52],seed:9}),_=Bd({seed:7}),x=_h({seed:3}),P=_h({base:[196,202,208],seed:8}),M=xh({seed:4}),T=xh({base:[48,53,59],seed:6}),D=(R,V,Q,ue=0)=>{let We=R.clone();return We.repeat.set(V,Q),We.offset.set(0,ue),We.needsUpdate=!0,We},b=(R,V,Q=qe)=>{let ue=Q/qe,We=1-ue;return ot(16777215,{map:D(R.map,V/3.5,ue,We),bumpMap:D(R.bump,V/3.5,ue,We),bumpScale:.7,roughness:.93})},y=(R,V,Q)=>ot(16777215,{map:D(R.map,V/2.4,Q/2.4),bumpMap:D(R.bump,V/2.4,Q/2.4),bumpScale:1.5,roughnessMap:D(R.rough,V/2.4,Q/2.4),roughness:1}),C=(R,V)=>ot(16777215,{map:D(_.map,R/2.4,V/2.4),roughness:1}),I={wall:b(v,3.5),metal:ot(16777215,{map:x.map,roughnessMap:x.rough,metalness:.75,roughness:.85}),dark:ot(16777215,{map:T.map,roughness:.62}),white:ot(16777215,{map:M.map,roughness:.55}),alu:ot(16777215,{map:P.map,roughnessMap:P.rough,metalness:.8,roughness:.7}),pipeY:ot(14725658,{metalness:.3,roughness:.4}),pipeB:ot(3833808,{metalness:.3,roughness:.4}),ctrlWall:ot(5596538,{roughness:.9}),wood:ot(7032371,{roughness:.8}),red:ot(13639712,{metalness:.4})};l(12,10,y(m,12,10),0,0,0,"+y"),l(10,8,y(E,10,8),0,0,-9,"+y"),l(12,10,C(12,10),0,qe,0,"+y").rotation.x=Math.PI/2,l(10,8,C(10,8),0,qe,-9,"+y").rotation.x=Math.PI/2,r(12.4,qe,.2,b(v,12.4),0,qe/2,5.1),s(-6.2,6.2,5,5.2),r(.2,qe,10.4,b(v,10.4),-6.1,qe/2,0),s(-6.2,-6,-5.2,5.2),r(.2,qe,10.4,b(v,10.4),6.1,qe/2,0),s(6,6.2,-5.2,5.2),r(5.4,qe,.2,b(v,5.4),-3.5,qe/2,-5.1),s(-6.2,-.8,-5.2,-5),r(5.4,qe,.2,b(v,5.4),3.5,qe/2,-5.1),s(.8,6.2,-5.2,-5),r(1.6,qe-2.4,.2,b(v,1.6,qe-2.4),0,2.4+(qe-2.4)/2,-5.1),l(4.2,qe,b(p,4.2),-2.9,qe/2,-5.205,"-z"),l(4.2,qe,b(p,4.2),2.9,qe/2,-5.205,"-z"),l(1.6,qe-2.4,b(p,1.6,qe-2.4),0,2.4+(qe-2.4)/2,-5.205,"-z"),r(.2,qe,8,b(p,8),-5.1,qe/2,-9.2),s(-5.2,-5,-13.2,-5.2);let F=(R,V,Q,ue)=>{let We=ot(16777215,{roughness:.93,bumpScale:.7});for(let[mt,_t]of[["map",p.map],["bumpMap",p.bump]]){let kt=_t.clone();kt.repeat.set((V-R)/3.5,(ue-Q)/qe),kt.offset.set((R+5.2)/3.5,Q/qe),kt.needsUpdate=!0,We[mt]=kt}r(V-R,ue-Q,.2,We,(R+V)/2,(Q+ue)/2,-13.1)};F(-5.2,-4,0,qe),F(-.6,5.2,0,qe),F(-4,-.6,0,1.35),F(-4,-.6,2.65,qe),s(-5.2,5.2,-13.2,-13),r(.2,qe,4.4,b(p,4.4),5.1,qe/2,-11),s(5,5.2,-13.2,-8.8),r(.2,qe,2,b(p,2),5.1,qe/2,-6.2),s(5,5.2,-7.2,-5.2),r(.2,qe-2.4,1.6,b(p,1.6,qe-2.4),5.1,2.4+(qe-2.4)/2,-8),l(4,1.6,y(E,4,1.6),7,0,-8,"+y"),l(4,1.6,C(4,1.6),7,qe,-8,"+y").rotation.x=Math.PI/2,r(3.8,qe,.2,b(p,3.8),7.1,qe/2,-7.1),s(5.2,9.2,-7.2,-7),r(3.8,qe,.2,b(p,3.8),7.1,qe/2,-8.9),s(5.2,9.2,-9,-8.8),n.outside=new go({scale:Zs()?.5:1}),n.doorFrame={origin:new N(9,0,-8),right:new N(0,0,1),normal:new N(-1,0,0),xCenter:1024+Dt.K*Math.PI/2},n.doorView=l(1.6,2.4,n.outside.material(n.doorFrame),9,1.2,-8,"-x"),r(.2,qe-2.4,1.6,b(p,1.6,qe-2.4),9.1,2.4+(qe-2.4)/2,-8),s(9,9.2,-8.8,-7.2);for(let R of[-8.77,-7.23])r(.12,2.4,.06,I.alu,8.96,1.2,R);r(.12,.06,1.6,I.alu,8.96,2.37,-8),r(.14,.02,1.6,I.metal,8.95,.01,-8),n.skyLight=new cs(16761996,0,9,1,.8,1),n.skyLight.position.set(8.9,2.3,-8),n.skyLight.target.position.set(6.2,0,-8),i.add(n.skyLight,n.skyLight.target),n.exitTrigger={minX:7.6,maxX:9,minZ:-8.8,maxZ:-7.2},r(11.9,.1,.02,I.dark,0,.05,4.99),r(.02,.1,9.9,I.dark,-5.99,.05,0),r(.02,.1,9.9,I.dark,5.99,.05,0),n.hemi=new Ka(14674175,9077368,.25),i.add(n.hemi),n.labLights=[];for(let[R,V]of[[-3,-2.2],[3,-2.2],[-3,2.5],[3,2.5]]){let Q=u(16054271,.05);r(1.4,.06,.35,Q,R,qe-.03,V);let ue=new Gi(16054271,0,0,2);ue.position.set(R,qe-.25,V),i.add(ue),n.labLights.push({light:ue,mat:Q})}n.ctrlLights=[];for(let[R,V]of[[-2.5,-9],[2.5,-9]]){let Q=u(12375295,.05);r(1.2,.06,.3,Q,R,qe-.03,V);let ue=new Gi(16773596,0,0,2);ue.position.set(R,qe-.3,V),i.add(ue),n.ctrlLights.push({light:ue,mat:Q})}r(1.2,.06,.3,u(12375295,.02),7,qe-.03,-8),n.emergency=[];for(let[R,V,Q]of[[0,3.2,4.8],[-5.8,3.2,-4.6],[5.8,3.2,-4.6],[4.8,3.2,-12.8]]){r(.4,.1,.12,u(15266047,1.2),R,V,Q);let ue=new cs(13623551,2.6,0,1.05,.75,2);ue.position.set(R,V-.08,Q+(Q>0?-.2:.2)),ue.target.position.set(R,0,Q+(Q>0?-1.2:1.2)),i.add(ue,ue.target),n.emergency.push(ue)}let H=$t([{t:"\u{1F3C3} EXIT",font:`bold 72px ${He.sans}`}],{w:256,h:96,bg:"#0c7a35",fg:"#fff"});l(.6,.22,h(H,1.1),4.98,2.7,-8,"-x");let Z=c(Vd(),{roughness:.25,metalness:.3});for(let R of[-1.3,0,1.3]){let V=new je;V.position.set(-4.95,1.05,R),V.rotation.z=-.5,r(1.75,.05,1.15,I.alu,0,0,0,V),l(1.68,1.08,Z,0,.03,0,"+y",V),i.add(V),d(V,"pv","III-V PV test modules")}r(1.5,.06,3.9,I.metal,-4.95,.62,0);for(let R of[-1.9,1.9])for(let V of[-5.6,-4.3])r(.06,V<-5?1.35:.62,.06,I.metal,V,V<-5?.67:.31,R);s(-5.75,-4.15,-2,2),r(1.7,.18,4,I.dark,-4.95,3.05,0),r(.05,.4,.05,I.metal,-4.95,3.3,-1.8),r(.05,.4,.05,I.metal,-4.95,3.3,1.8);let W=u(16773832,.05),ae=e.lamps,X=ae>5?2:1,J=Math.ceil(ae/X),oe=0;for(let R=0;R<X;R++){let V=R===X-1?ae-oe:J;for(let Q=0;Q<V;Q++){let ue=V===1?0:-1.5+3*Q/(V-1),We=X===1?-4.95:R===0?-5.35:-4.55;a(.2,.05,W,We,2.94,ue),a(.23,.08,I.dark,We,3,ue),oe++}}n.sunLampMat=W,n.sunLight=new cs(16773324,0,0,1.15,.6,2),n.sunLight.position.set(-4.95,2.85,0),n.sunLight.target.position.set(-4.95,0,0),i.add(n.sunLight,n.sunLight.target);let me=new dt({uniforms:{opacity:{value:0}},transparent:!0,depthWrite:!1,blending:Qn,side:ln,vertexShader:"varying vec3 vN, vV; varying float vY; void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vY = uv.y; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float opacity; varying vec3 vN, vV; varying float vY; void main() { float edge = pow(abs(dot(normalize(vN), normalize(vV))), 2.0); gl_FragColor = vec4(vec3(1.0, 0.94, 0.78) * opacity * edge * smoothstep(0.0, 0.8, vY), 1.0); }"}),Se=new Pe(new mn(.85,1.25,1.9,32,1,!0),me);Se.scale.set(1,1,1.6),Se.position.set(-4.95,1.95,0),i.add(g(Se)),n.sunCone={get opacity(){return me.uniforms.opacity.value},set opacity(R){me.uniforms.opacity.value=R}},n.keypadTex=yt(256,360,(R,V,Q)=>bo(R,V,Q,!1));let Ke=new je;r(.06,.5,.36,I.dark,-5.97,1.45,2.85,Ke),l(.34,.48,h(n.keypadTex,.35),-5.935,1.45,2.85,"+x",Ke),i.add(Ke),d(Ke,"sunsim","Sun-simulator keypad"),l(.8,.4,c($t(["PV TEST RIG",{t:"Sun simulator \xB7 3 suns",font:`30px ${He.sans}`}],{bg:"#1b3a6b",fg:"#fff"})),-5.99,2,-2.75,"+x");let j=yt(256,420,(R,V,Q)=>{R.fillStyle="#e9ecef",R.fillRect(0,0,V,Q),R.fillStyle="#2d7a3e",R.fillRect(0,0,V,50),R.fillStyle="#fff",R.font=`bold 26px ${He.sans}`,R.textAlign="center",R.fillText("Li-ion BESS",V/2,34);for(let ue=0;ue<6;ue++)R.fillStyle="#c5cad0",R.fillRect(20,70+ue*56,V-40,46),R.fillStyle="#8b9299",R.fillRect(30,80+ue*56,60,8),R.fillStyle="#3a3",R.fillRect(V-50,82+ue*56,10,10);Kt(R,V,Q,1.2,11)});n.socLeds=[];for(let[R,V]of[[0,2.35],[1,3.75]]){let Q=new je;if(r(.7,2,1.2,I.white,5.6,1,V,Q),l(1.1,1.8,c(j),5.245,1,V,"-x",Q),R===0){r(.04,1.1,.14,I.dark,5.23,1.1,V+.48,Q);for(let ue=0;ue<10;ue++)n.socLeds.push(r(.02,.07,.09,u(2236962,1),5.2,.63+ue*.105,V+.48,Q))}i.add(Q),d(Q,"battery","Battery storage 10 kWh")}s(5.2,6,1.7,4.4),n.invLeds={};let he=[["inv_pv","INV-1","PV \xB7 HYBRID",.95],["inv_bat","INV-2","BATTERY",.15],["inv_fc","INV-3","FUEL CELL",-.65]],ve=n.INV_Y=1.25,O=ve+.36;for(let[R,V,Q,ue]of he){let We=new je;r(.22,.72,.56,I.white,5.88,ve,ue,We);let mt=$t([{t:V,font:`bold 64px ${He.sans}`},{t:Q,font:`bold 36px ${He.sans}`,color:"#1b5fa8"},{t:"~ / =",font:`46px ${He.mono}`,color:"#666"}],{w:256,h:320,bg:"#f5f6f7"});l(.5,.64,c(mt),5.765,ve,ue,"-x",We),n.invLeds[R]=r(.03,.05,.05,u(1118481,1),5.75,ve+.28,ue+.18,We),i.add(We),d(We,R,`${V} \xB7 ${Q.toLowerCase()} inverter`),r(.08,3.1-O,.08,I.dark,5.93,O+(3.1-O)/2,ue-.2)}n.cat=yf({M:I}),n.cat.group.position.set(5.873,O,.22),i.add(n.cat.group),d(n.cat.group,"cat","A sleeping cat");let $=new je;r(.4,2,1.9,ot(9081756,{metalness:.4,roughness:.5}),5.8,1.2,-2.9,$),r(.02,1.85,1.75,ot(1777959),5.595,1.2,-2.9,$),n.busbars=[],[1.75,1.5,1.25].forEach((R,V)=>{n.busbars.push(r(.05,.07,1.4,u(3355443,.15),5.55,R,-2.95,$)),l(.16,.12,c($t([`L${V+1}`],{w:128,h:96,bg:"#1b2127",fg:"#e6edf3",font:`bold 64px ${He.sans}`})),5.575,R,-2.1,"-x",$)}),r(.05,.07,1.4,ot(3828432,{metalness:.5}),5.55,1,-2.95,$),l(.16,.12,c($t(["N"],{w:128,h:96,bg:"#1b2127",fg:"#7aa0ff",font:`bold 64px ${He.sans}`})),5.575,1,-2.1,"-x",$),n.breakers=[];for(let R=0;R<3;R++)r(.1,.3,.16,I.white,5.55,.55,-3.3+R*.3,$),n.breakers.push(r(.06,.08,.06,ot(2763306),5.49,.6,-3.3+R*.3,$));let ie=new Pe(new Dn(1.75,1.85),new Ht({color:11193582,transparent:!0,opacity:.12,roughness:.05}));ie.position.set(5.44,1.2,-2.9),ie.rotation.y=-Math.PI/2,$.add(ie),i.add($),d($,"bus","Main bus panel"),l(1.2,.3,c($t(["MAIN BUS  3~ 230/400 V"],{w:512,h:128,bg:"#ffd200",fg:"#111",font:`bold 48px ${He.sans}`})),5.99,2.45,-2.9,"-x"),l(.4,.4,c(yt(256,256,R=>{R.fillStyle="#ffd200",R.beginPath(),R.moveTo(128,16),R.lineTo(244,230),R.lineTo(12,230),R.closePath(),R.fill(),R.strokeStyle="#111",R.lineWidth=12,R.stroke(),R.fillStyle="#111",R.font=`bold 130px ${He.sans}`,R.textAlign="center",R.fillText("\u26A1",128,200)}),{transparent:!0}),5.99,2.4,-1.7,"-x"),s(5.5,6,-3.9,-1.9),r(.35,.08,7.8,I.metal,5.75,3.12,.4),r(10.8,.08,.35,I.metal,.4,3.12,-4.75),r(.08,.9,.08,I.dark,5.93,2.65,-3.75),n.recorders={};let de=(R,V,Q,ue,We=0)=>{let mt=new je;r(.14,.035,.07,ot(1777444),0,0,0,mt),r(.05,.01,.04,I.alu,.03,.022,0,mt);let _t=r(.012,.012,.012,u(16719904,1.5),-.05,.022,.02,mt);mt.position.set(V,Q,ue),mt.rotation.y=We,i.add(mt),d(mt,R,"Voice recorder"),n.recorders[R]=_t};de("rec2",5.6,2.02,3.8,.4);let Ne=yt(512,512,(R,V,Q)=>{R.fillStyle="#f2f4f6",R.fillRect(0,0,V,Q),R.fillStyle="#1b5fa8",R.fillRect(0,60,V,60),R.fillStyle="#fff",R.font=`bold 44px ${He.sans}`,R.textAlign="center",R.fillText("PEM ELECTROLYZER",V/2,105),R.fillStyle="#333",R.font=`32px ${He.sans}`,R.fillText("3 kW \xB7 H\u2082O \u2192 H\u2082 + \xBD O\u2082 \xB7 30 bar",V/2,170);for(let ue=0;ue<18;ue++)R.fillStyle=ue%2?"#9aa4ad":"#6f7a84",R.fillRect(70+ue*20,220,16,180);R.fillStyle="#081a0e",R.fillRect(140,420,232,56),Kt(R,V,Q,1.2,12)}),_e=new je;r(1.6,1.6,1.1,I.white,-4.7,.8,-4.2,_e),l(1.5,1.5,c(Ne),-4.7,.8,-3.645,"+z",_e),n.elzGlow=r(1.5,.05,.02,u(3842303,.05),-4.7,1.57,-3.64,_e),a(.28,.7,ot(13625599,{transparent:!0,opacity:.7,roughness:.1}),-5.15,1.95,-4.3,_e),i.add(_e),d(_e,"electrolyzer","PEM electrolyzer"),s(-5.55,-3.85,-4.8,-3.6),de("rec3",-4.3,1.62,-3.95,-.3);let Te=new je;a(.24,1.3,I.white,-2.9,.75,-4.35,Te);let U=new Pe(new wn(.24,24,12,0,Math.PI*2,0,Math.PI/2),I.white);U.position.set(-2.9,1.4,-4.35),Te.add(U);let nt=new Pe(new mn(.243,.243,.3,24,1,!0,-.65,1.3),c($t([{t:"H\u2082",font:`bold 120px ${He.sans}`,color:"#c21"},{t:"30 bar \xB7 90 L",font:`36px ${He.sans}`}],{w:256,h:256,bg:"#ffffff"})));nt.position.set(-2.9,1,-4.35),Te.add(nt),n.valve=new Pe(new Ln(.11,.022,8,20),I.red),n.valve.position.set(-2.9,.45,-3.98),n.valve.visible=!1,Te.add(n.valve),a(.02,.14,I.metal,-2.9,.45,-4.05,Te).rotation.x=Math.PI/2,n.valveTag=new je,l(.1,.075,c($t(["NO WHEEL","\u2014 M.V."],{w:128,h:96,bg:"#fff6c8",fg:"#b3261e",font:`bold 22px ${He.sans}`})),-2.9,.37,-3.985,"+z",n.valveTag),a(.002,.045,I.dark,-2.9,.428,-3.985,n.valveTag),Te.add(n.valveTag),a(.05,1.3,ot(13428479,{transparent:!0,opacity:.3}),-2.52,.75,-4.15,Te),r(.12,.1,.12,I.metal,-2.52,.05,-4.15,Te);for(let R of[.3,1.2])r(.16,.03,.04,I.metal,-2.6,R,-4.18,Te);n.h2Bar=a(.038,1.26,u(7327999,.8),-2.52,.12,-4.15,Te),n.h2Bar.geometry.translate(0,.63,0),n.h2Bar.scale.y=.001,i.add(Te),d(Te,"h2tank","H\u2082 tank & valve"),s(-3.2,-2.4,-4.7,-3.9),f([-3.9,1.4,-4.35],[-3.14,1.4,-4.35],.035,I.pipeY),f([-2.9,1.64,-4.35],[-2.9,2.75,-4.35],.035,I.pipeY),f([-2.9,2.75,-4.35],[-2.9,2.75,-4.85],.035,I.pipeY),f([-2.9,2.75,-4.85],[3.1,2.75,-4.85],.035,I.pipeY),f([3.1,2.75,-4.85],[3.1,1.3,-4.85],.035,I.pipeY),f([-5.15,2.3,-4.3],[-5.15,3.1,-4.3],.03,I.pipeB);let Je=yt(512,512,(R,V,Q)=>{R.fillStyle="#5b6570",R.fillRect(0,0,V,Q),R.fillStyle="#2e8b57",R.fillRect(0,40,V,70),R.fillStyle="#fff",R.font=`bold 46px ${He.sans}`,R.textAlign="center",R.fillText("PEM FUEL CELL",V/2,92),R.fillStyle="#e6edf3",R.font=`32px ${He.sans}`,R.fillText("3.4 kW \xB7 H\u2082 + \xBD O\u2082 \u2192 H\u2082O",V/2,160),R.strokeStyle="#333",R.lineWidth=6,R.beginPath(),R.arc(V/2,330,120,0,Math.PI*2),R.stroke();for(let ue=-100;ue<=100;ue+=20)R.beginPath(),R.moveTo(V/2-Math.sqrt(120*120-ue*ue),330+ue),R.lineTo(V/2+Math.sqrt(120*120-ue*ue),330+ue),R.stroke();Kt(R,V,Q,1.4,13)}),Xe=new je;r(1.3,1.3,.9,ot(5989744,{metalness:.3}),3.1,.65,-4.3,Xe),l(1.25,1.25,c(Je),3.1,.65,-3.845,"+z",Xe),n.fcGlow=r(1.2,.05,.02,u(4116346,.05),3.1,1.27,-3.84,Xe),i.add(Xe),d(Xe,"fuelcell","PEM fuel cell"),s(2.4,3.8,-4.8,-3.8);let Le=yt(256,384,(R,V,Q)=>{R.fillStyle="#7d8790",R.fillRect(0,0,V,Q),R.strokeStyle="#5d666e",R.lineWidth=4,R.strokeRect(16,16,V-32,Q-32),R.fillStyle="#1b2530",R.fillRect(70,50,116,90),R.fillStyle="#ffd200",R.fillRect(16,250,V-32,38),R.fillStyle="#111",R.font=`bold 20px ${He.sans}`,R.textAlign="center",R.fillText("CONTROL ROOM",V/2,276),Kt(R,V,Q,1.5,14)});n.door=r(1.62,2.4,.08,[I.metal,I.metal,I.metal,I.metal,c(Le,{metalness:.4}),c(Le,{metalness:.4})],0,1.2,-4.93),d(n.door,"door","Booth door (motor drive)"),n.doorCollider=s(-.85,.85,-5.2,-4.85),n.doorLed=r(.5,.06,.04,u(16719904,1.5),0,2.55,-4.98),n.doorScreenTex=yt(256,320);let ct=new je;r(.42,.52,.05,I.dark,-1.3,1.45,-4.98,ct),l(.36,.45,h(n.doorScreenTex),-1.3,1.45,-4.95,"+z",ct),i.add(ct),d(ct,"door","Door drive controller");for(let R of[-4.7,-5.45]){let V=ao();V.repeat.set(3,1),l(1.6,.25,c(V),0,.012,R,"+y")}let Ve=yt(1024,512,(R,V,Q)=>{R.fillStyle="#f7f7f2",R.fillRect(0,0,V,Q);for(let We=0;We<14;We++)R.fillStyle="rgba(120,130,160,.07)",R.beginPath(),R.ellipse(80+Math.random()*860,60+Math.random()*400,120,22,Math.random()-.5,0,Math.PI*2),R.fill();let ue='"Segoe Print", "Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive';Nr(e).forEach(([We,mt,_t],kt)=>{R.fillStyle=mt,R.font=`${_t||"28px"} ${ue}`,R.fillText(We,40,64+kt*58)}),Kt(R,V,Q,.5,15)}),L=new je;r(2.7,1.4,.05,I.alu,-1.8,1.75,4.97,L),l(2.6,1.3,c(Ve,{roughness:.3}),-1.8,1.75,4.94,"-z",L),r(2,.04,.08,I.alu,-1.8,1.03,4.93,L),i.add(L),d(L,"whiteboard","Whiteboard");let S=new je,G=$t([{t:"SOLAR TEST LABORATORY",font:"bold 38px Georgia, serif"},{t:`EST. ${e.year}`,font:"bold 64px Georgia, serif"},{t:'"Power to the people."',font:"italic 30px Georgia, serif"}],{w:512,h:300,bg:"#b8923a",fg:"#3b2a08",border:"#8a6a22"});r(.74,.44,.03,ot(9071138,{metalness:.25,roughness:.5}),2.6,1.95,4.98,S),l(.7,.41,c(G,{metalness:.1,roughness:.45}),2.6,1.95,4.96,"-z",S),i.add(S),d(S,"plaque","Brass plaque"),r(2.4,.06,.8,I.wood,2.6,.9,4.55);for(let[R,V]of[[1.5,4.25],[3.7,4.25],[1.5,4.85],[3.7,4.85]])r(.06,.9,.06,I.metal,R,.45,V);r(.45,.3,.35,I.dark,2,1.08,4.6),l(.22,.16,u(2817898,.6),1.95,1.1,4.42,"-z"),r(.12,.2,.05,ot(15909376),3.45,1.03,4.55),s(1.35,3.85,4.1,5),r(.72,.2,.62,ot(5980976),2.4,.76,4.55),n.drawer=new je,r(.66,.16,.56,ot(8018494),0,0,0,n.drawer),r(.7,.18,.02,ot(9201736),0,0,-.325,n.drawer),r(.16,.025,.03,I.alu,0,.045,-.345,n.drawer);let se=yt(160,48,(R,V,Q)=>{R.fillStyle="#222",R.fillRect(0,0,V,Q),R.fillStyle="#ddd",R.font=`bold 34px ${He.mono}`,R.textAlign="center",R.fillText("0 0 0 0",V/2,36)});n.drawerLockTex=se,l(.16,.05,h(se,.3),0,-.03,-.337,"-z",n.drawer),n.drawerWheel=new Pe(new Ln(.1,.02,8,20),I.red),n.drawerWheel.rotation.x=Math.PI/2,n.drawerWheel.position.set(.05,0,.05),n.drawer.add(n.drawerWheel),n.drawer.position.set(2.4,.76,4.55),i.add(n.drawer),d(n.drawer,"drawer","Bench drawer (combination lock)");let re=new je,te=a(.03,.2,ot(15259568),0,0,0,re);te.rotation.z=Math.PI/2;let Ue=R=>ot(R,{emissive:new Ce(R),emissiveIntensity:.25,roughness:.5});[.075,.04,.005].forEach((R,V)=>{let Q=a(.032,.018,Ue(qs[e.bands[V]]),R,0,0,re);Q.rotation.z=Math.PI/2});let ye=a(.032,.014,ot(13148224,{metalness:.2,roughness:.4,emissive:new Ce(13148224),emissiveIntensity:.15}),-.06,0,0,re);ye.rotation.z=Math.PI/2;for(let R of[-1,1]){let V=a(.004,.1,I.alu,R*.15,0,0,re);V.rotation.z=Math.PI/2}l(.16,.08,c($t(["DRAWER =","MY VALUE IN \u03A9"],{w:256,h:128,bg:"#fff6c8",fg:"#1b3f8f",font:`bold 30px ${He.sans}`})),0,.012,-.07,"-z",re).rotation.x=.6,re.position.set(3.05,.97,4.35),re.rotation.y=.15,i.add(re),d(re,"resistor","Resistor with a sticky note"),de("rec1",1.55,.95,4.35,.2);let Me=yt(512,720,(R,V,Q)=>{R.fillStyle="#fbfaf5",R.fillRect(0,0,V,Q),R.fillStyle="#111",R.font=`bold 34px ${He.sans}`,R.textAlign="center",R.fillText("RESISTOR COLOUR CODE",V/2,44),R.font=`bold 20px ${He.sans}`,R.fillText("bands 1 + 2 = DIGITS  \xB7  band 3 = MULTIPLIER",V/2,76),R.font=`italic 18px ${He.sans}`,R.fillStyle="#b3261e",R.fillText("band 3 is NOT a digit \u2014 it adds zeros!",V/2,100),R.fillStyle="#555",R.font=`bold 17px ${He.sans}`,R.textAlign="left",R.fillText("colour",150,132),R.fillText("digit",262,132),R.fillText("multiplier",340,132),["black","brown","red","orange","yellow","green","blue","violet","grey","white"].forEach((We,mt)=>{let _t=142+mt*46;R.fillStyle=qs[mt],R.fillRect(40,_t,90,36),R.strokeStyle="#999",R.strokeRect(40,_t,90,36),R.fillStyle="#111",R.font=`bold 24px ${He.sans}`,R.fillText(We,150,_t+26),R.fillText(String(mt),272,_t+26),R.fillText(oo[mt],340,_t+26)});let ue=142+10*46;R.fillStyle="#c8a040",R.fillRect(40,ue,90,36),R.strokeRect(40,ue,90,36),R.fillStyle="#111",R.fillText("gold",150,ue+26),R.fillText("\u2014",272,ue+26),R.fillText("\xB15 % tol.",340,ue+26),R.font=`18px ${He.sans}`,R.fillStyle="#1b3f8f",R.textAlign="center",R.fillText("e.g. brown \xB7 black \xB7 orange \xB7 gold",V/2,680),R.fillText("= 1, 0, \xD71 000  \u2192  10 \xD7 1 000 = 10 000 \u03A9",V/2,704),Kt(R,V,Q,.7,16)}),tt=new je;l(.64,.9,c(Me),4.6,1.85,4.985,"-z",tt),i.add(tt),d(tt,"colorcode","Colour-code poster"),r(2.4,.06,.9,I.dark,0,.76,-11.9);for(let R of[-1.1,1.1])r(.06,.76,.8,I.dark,R,.38,-11.9);s(-1.25,1.25,-12.4,-11.4),n.pcScreenTex=yt(512,320);let le=new je;r(1,.6,.05,I.dark,0,1.22,-12.15,le),l(.94,.54,new Zt({map:n.pcScreenTex}),0,1.22,-12.12,"+z",le),r(.08,.2,.08,I.dark,0,.88,-12.15,le),r(.6,.03,.2,ot(1777444),0,.8,-11.7,le),r(.45,.45,.2,I.dark,.85,1.02,-12.1,le),i.add(le),d(le,"pc","Control PC");let Ae=new Gi(6160271,1.8,0,2);Ae.position.set(0,1.3,-11.7),i.add(Ae),r(.5,.08,.5,ot(1777444),0,.48,-11),r(.5,.6,.06,ot(1777444),0,.82,-10.73),a(.04,.44,I.metal,0,.22,-11),s(-.28,.28,-11.28,-10.7),de("rec4",.55,.81,-11.55,-.3);let Oe=new je;r(.5,.02,.3,ot(1927994,{roughness:.5}),0,0,0,Oe);let Ze=$t([{t:"FW-BOARD  A   B   C   D",font:`bold 30px ${He.mono}`}],{w:512,h:64,bg:"#1d6b3a",fg:"#e8f5e0"});l(.46,.06,c(Ze),0,.014,.1,"+y",Oe),n.boardToggles=[];for(let R=0;R<4;R++){let V=-.02+R*.06;r(.035,.02,.04,ot(2236962),V,.02,.03,Oe);let Q=r(.01,.04,.01,I.alu,V,.045,.03,Oe);Q.rotation.x=.5,n.boardToggles.push(Q)}n.boardLed=o(.014,u(3342336,1),.2,.02,.05,Oe),n.boardSegTex=yt(128,64,(R,V,Q)=>Ph(R,V,Q,"",!1)),r(.16,.07,.02,ot(1118481),-.14,.04,-.1,Oe),l(.14,.06,h(n.boardSegTex,1),-.14,.04,-.086,"+z",Oe),Oe.position.set(-.7,.8,-11.72),i.add(Oe),d(Oe,"board","FW-BOARD logic board"),n.circuitCanvas=document.createElement("canvas"),n.circuitCanvas.width=900,n.circuitCanvas.height=460,$d(n.circuitCanvas.getContext("2d"),900,460,e.circuitDef);let Re=new ii(n.circuitCanvas);Re.colorSpace=zt;let rt=new je;l(1.3,.665,c(Re),1.9,1.9,-12.985,"+z",rt),i.add(rt),d(rt,"circuit","Circuit poster (FW-BOARD)"),r(.8,2,.9,ot(1119256),3.9,1,-12.4),n.rackLeds=[];for(let R=0;R<12;R++)n.rackLeds.push(r(.03,.03,.01,u(R%3?2817898:16752672,1),3.65+R%2*.1,.3+R*.1,-11.94));let $e=new je;r(.78,.2,.02,ot(1777959),3.9,1.72,-11.945,$e),n.diagLeds=[];for(let R=0;R<8;R++)n.diagLeds.push(r(.045,.045,.015,u(2228224,1),3.585+R*.09,1.7,-11.93,$e));l(.78,.07,c($t([{t:"DIAG   \u25C0 MSB  \xB7  lit = 1",font:`bold 34px ${He.mono}`}],{w:512,h:48,bg:"#1b2127",fg:"#e6edf3"})),3.9,1.86,-11.93,"+z",$e),i.add($e),d($e,"rack","Server rack \xB7 DIAG LEDs"),s(3.45,4.35,-12.9,-11.9),n.wallScreenTex=yt(768,400),l(3,1.56,new Zt({map:n.wallScreenTex}),-4.965,1.9,-9.2,"+x"),r(.04,1.66,3.1,I.dark,-5,1.9,-9.2),l(3.4,1.3,n.outside.material({origin:new N(-2.3,0,-13.16),right:new N(1,0,0),normal:new N(0,0,1)}),-2.3,2,-13.16,"+z");let ht=yt(512,512,hf);ht.wrapS=ht.wrapT=Yt,ht.repeat.set(3,1.2),n.rainTex=yt(512,512,uf),n.rainTex.wrapS=n.rainTex.wrapT=Yt,n.rainTex.repeat.set(3,1.2),n.dropMat=new Zt({map:ht,transparent:!0,depthWrite:!1,fog:!1}),n.rainMat=new Zt({map:n.rainTex,transparent:!0,depthWrite:!1,fog:!1}),g(l(3.4,1.3,n.dropMat,-2.3,2,-13.156,"+z")),g(l(3.4,1.3,n.rainMat,-2.3,2,-13.154,"+z"));let k=ot(14278112,{roughness:.9});l(.2,1.3,k,-3.999,2,-13.1,"+x"),l(.2,1.3,k,-.601,2,-13.1,"-x"),l(3.4,.2,k,-2.3,2.649,-13.1,"+y").rotation.x=Math.PI/2,r(3.56,.035,.3,ot(9276036,{roughness:.45}),-2.3,1.335,-13.02);for(let R of[-3.97,-.63,-2.3])r(.06,1.3,.07,I.alu,R,2,-13.16);for(let R of[1.38,2.62])r(3.4,.06,.07,I.alu,-2.3,R,-13.16);let ge=new N(-Math.sin(.37)*Math.cos(.18),Math.sin(.18),-Math.cos(.37)*Math.cos(.18)),K=new N(-2.3,2,-13.15);n.windowLight=new cs(16756848,0,0,.24,.35,0),n.windowLight.position.copy(K).addScaledVector(ge,10),n.windowLight.target.position.copy(K).addScaledVector(ge,-10),n.windowLight.castShadow=!0,Object.assign(n.windowLight.shadow,{autoUpdate:!1,needsUpdate:!0,bias:-6e-4,normalBias:.02}),n.windowLight.shadow.mapSize.set(1024,1024),n.windowLight.shadow.camera.near=6,n.windowLight.shadow.camera.far=24,i.add(n.windowLight,n.windowLight.target),l(1.2,.26,c($t(["CONTROL ROOM \u25B8"],{w:592,h:128,bg:"#1b2530",fg:"#ffd24a",font:`bold 60px ${He.sans}`})),0,2.93,-4.99,"+z");let ne=new je;r(.35,1.9,1.3,ot(9081756,{metalness:.4,roughness:.5}),4.82,1.05,-10.6,ne),n.syncTex=yt(512,512),l(.5,.5,h(n.syncTex,.9),4.64,1.45,-10.6,"-x",ne),n.syncLamps=[-10.95,-10.6,-10.25].map(R=>o(.045,u(5579264,.2),4.62,1.86,R,ne)),n.syncHandle=r(.06,.25,.08,I.red,4.6,.85,-10.6,ne),l(1,.25,c($t(["GRID TIE \xB7 Q0 \xB7 SYNC"],{w:512,h:128,bg:"#ffd200",fg:"#111",font:`bold 50px ${He.sans}`})),4.985,2.25,-10.6,"-x",ne),i.add(ne),d(ne,"sync","Grid tie panel (Q0)"),s(4.6,5.05,-11.3,-9.9);let Ee=yt(320,400,(R,V,Q)=>{R.fillStyle="#f7f3e3",R.fillRect(0,0,V,Q),R.fillStyle="#1b3f8f",R.font=`bold 22px ${He.sans}`,R.fillText("SYNC CHECKLIST",16,34),R.font=`17px ${He.sans}`,["0. permit card in","1. V island = V grid \xB12%","2. f island a hair ABOVE","3. phase ro\u2592\u2592\u2592n: lamps","    dark TOGETHER","4. close on scope at 12","\u2014 M.V."].forEach((ue,We)=>R.fillText(ue,16,76+We*44)),R.fillStyle="#e8e0c8",R.beginPath(),R.moveTo(V,Q-60),R.lineTo(V-70,Q),R.lineTo(V,Q),R.fill(),Kt(R,V,Q,.9,17)}),be=new je;l(.26,.32,c(Ee),4.985,1.55,-11.7,"-x",be),i.add(be),d(be,"checklist","Sync checklist (pinned)");let Qe=yt(256,384,(R,V,Q)=>{R.fillStyle="#7d8790",R.fillRect(0,0,V,Q),R.strokeStyle="#5d666e",R.lineWidth=4,R.strokeRect(16,16,V-32,Q-32),R.fillStyle="#1b2530",R.fillRect(70,50,116,90),R.fillStyle="#0c7a35",R.fillRect(16,250,V-32,38),R.fillStyle="#fff",R.font=`bold 22px ${He.sans}`,R.textAlign="center",R.fillText("EXIT \u25B8 OUTSIDE",V/2,276),Kt(R,V,Q,1.3,18)});return n.exitDoor=r(.08,2.4,1.62,[c(Qe,{metalness:.4}),c(Qe,{metalness:.4}),I.metal,I.metal,I.metal,I.metal],5.07,1.2,-8),d(n.exitDoor,"exit","Exit door"),n.exitCollider=s(4.95,5.25,-8.85,-7.15),n.exitLed=r(.04,.06,.5,u(16719904,1.5),4.98,2.52,-8),ff({scene:i,P:e,refs:n,M:I,col:s,box:r,cyl:a,sph:o,plane:l,texMat:c,glowMat:u,tag:d,noRay:g}),i.fog=new Ba(724499,.028),{colliders:t,refs:n}}var Vt=["L1","L2","L3"],xf={standard:["#ff5a4a","#ffd23f","#4aa8ff"],colorblind:["#e69f00","#56b4e9","#cc79a7"]},Ti=[...xf.standard];function Ih(i){xf[i].forEach((e,t)=>{Ti[t]=e})}var Ie={TL:360,PV_DC:5.4,LAMP_KW:60,INV_EFF:.97,BAT_KWH:10,BAT_CH:2,BAT_DIS:3.5,BAT_EFF:.95,BAT_MIN:.25,ELZ_P:3,ELZ_KWH_KG:55,FC_P:3.4,FC_KWH_KG:18,FC_RAMP:3,FC_START:.3,H2_KG:.22,H2_BAR:30,AUX:.2,DOOR_P:3,DOOR_T:5},d_=Ie.TL/3600,f_=Ie.PV_DC*Ie.INV_EFF,gn=i=>i.toFixed(2),Mo=class{constructor(e){this.puzzle=e,this.s={t:0,sun:{unlocked:!1,on:!1,pin:""},inv:{pv:{on:!1,ph:-1},bat:{on:!1,ph:-1,mode:"idle"},fc:{on:!1,ph:-1}},bat:{soc:.08},elz:{on:!1,ph:-1},h2:{level:0,valve:!1,wheel:!1},fc:{running:!1,rt:0},trip:[!1,!1,!1],door:{state:"locked",t:0},stats:{trips:0}},this.version=0,this.events=[],this.f=this.compute()}emit(e,t="info",n){this.events.push({msg:e,kind:t,sfx:n}),this.version++}compute(){let e=this.s,t=[0,0,0],n=[0,0,0],s=[[],[],[]],r={cap:t,load:n,head:[0,0,0],live:[!1,!1,!1],pv:0,bat:0,fc:0,elz:0,door:0,pvAvail:0,fcAvail:0},a=h=>h>=0&&!e.trip[h];r.pvAvail=e.sun.on?f_*(.998+.002*Math.sin(e.t*.9)):0,r.fcAvail=e.fc.running&&e.fc.rt>=Ie.FC_RAMP?Ie.FC_P:0;let o=e.inv.pv,l=e.inv.bat,c=e.inv.fc;if(o.on&&a(o.ph)&&r.pvAvail>0&&s[o.ph].push(["pv",r.pvAvail]),e.grid)for(let h=0;h<3;h++)s[h].push(["grid",1e3]);l.on&&l.mode==="discharge"&&a(l.ph)&&e.bat.soc>Ie.BAT_MIN&&s[l.ph].push(["bat",Ie.BAT_DIS]),c.on&&a(c.ph)&&r.fcAvail>0&&s[c.ph].push(["fc",r.fcAvail]);for(let h=0;h<3;h++)t[h]=s[h].reduce((u,[,d])=>u+d,0),r.live[h]=t[h]>0;for(let h=0;h<3;h++)r.live[h]&&(n[h]+=Ie.AUX);if(e.elz.on&&a(e.elz.ph)&&r.live[e.elz.ph]&&e.h2.level<1&&(n[e.elz.ph]+=Ie.ELZ_P,r.elz=Ie.ELZ_P),l.on&&l.mode==="charge"&&a(l.ph)&&r.live[l.ph]&&e.bat.soc<1&&(n[l.ph]+=Ie.BAT_CH,r.bat=-Ie.BAT_CH),e.door.state==="opening"){for(let h=0;h<3;h++)n[h]+=Ie.DOOR_P;r.door=Ie.DOOR_P}for(let h=0;h<3;h++){let u=n[h];for(let[d,f]of s[h]){let g=Math.min(f,u);u-=g,d==="pv"?r.pv+=g:d==="bat"?r.bat+=g:d==="fc"&&(r.fc+=g)}r.head[h]=t[h]-n[h]}return r}tick(e){let t=this.s;t.t+=e,t.fc.running&&(t.fc.rt+=e);let n=this.compute(),s=(t.door.state==="opening"?1/3600:d_)*e;for(let r=0;r<3;r++)n.load[r]>n.cap[r]+1e-6&&(n.cap[r]>0||n.door)&&(t.trip[r]=!0,t.stats.trips++,this.emit(n.cap[r]>0?`\u26A0 ${Vt[r]}: demand ${gn(n.load[r])} kW > ${gn(n.cap[r])} kW available \u2014 inverter current limit, voltage collapse, under-voltage relay TRIPPED. Reset at the main bus panel.`:`\u26A0 ${Vt[r]} has no voltage \u2014 the door motor is single-phasing and hums. Drive stopped.`,"bad","clack"));if(t.trip.some(Boolean)&&(t.door.state==="opening"&&(t.door.state="locked",t.door.t=0,this.emit("Door drive stalled \u2014 the bolt re-engages.","bad")),n=this.compute()),n.bat<0&&(t.bat.soc=Math.min(1,t.bat.soc-n.bat*Ie.BAT_EFF*s/Ie.BAT_KWH)),n.bat>0&&(t.bat.soc=Math.max(0,t.bat.soc-n.bat/Ie.BAT_EFF*s/Ie.BAT_KWH),t.bat.soc<=Ie.BAT_MIN&&this.emit("Battery BMS: SOC reached 25 % \u2014 discharge blocked.","bad")),n.elz>0){let r=t.h2.level;t.h2.level=Math.min(1,t.h2.level+Ie.ELZ_P/Ie.ELZ_KWH_KG*s/Ie.H2_KG),r<Ie.FC_START&&t.h2.level>=Ie.FC_START&&this.emit("H\u2082 tank above 30 % \u2014 enough to start the fuel cell.","good"),t.h2.level>=1&&this.emit("H\u2082 tank full (30 bar) \u2014 electrolyzer idles.")}n.fc>0&&(t.h2.level=Math.max(0,t.h2.level-n.fc/Ie.FC_KWH_KG*s/Ie.H2_KG),t.h2.level<=0&&(t.fc.running=!1,t.fc.rt=0,this.emit("Fuel cell shut down: H\u2082 tank empty.","bad"))),t.fc.running&&!t.h2.valve&&(t.fc.running=!1,t.fc.rt=0,this.emit("Fuel cell shut down: H\u2082 valve closed.","bad")),t.door.state==="opening"&&(t.door.t+=e,t.door.t>=Ie.DOOR_T&&(t.door.state="open",this.emit("\u{1F513} Door open!","good","thunk"))),this.f=n}doorReady(){return this.f.head.every(e=>e>=Ie.DOOR_P-1e-6)}hintTopic(){let e=this.s,t=this.f,n=this.puzzle,s=e.inv.pv.ph>=0?Vt[e.inv.pv.ph]:"the PV phase";if(e.trip.some(Boolean))return{id:"trip",tiers:["Something clicked off. The main bus panel will tell you what.","A phase tripped because its demand exceeded what the inverters on that phase can deliver.","Remove load from the tripped phase (or add a source), then press RESET at the main bus panel on the right wall."]};if(!e.sun.unlocked)return{id:"pin",tiers:["The test rig on the left wall is dark. Something must control those lamps.","The sun-simulator keypad wants a 4-digit year. Marco's notes mention when the lab opened \u2014 look for something engraved.",`PIN ${n.year} \u2014 it is on the brass plaque above the workbench.`]};if(!e.sun.on)return{id:"sun",tiers:["The keypad is unlocked now.","Switch the lamp array on.","Keypad \u2192 Lamp array ON."]};if(t.pvAvail>0&&!(e.inv.pv.on&&e.inv.pv.ph>=0))return{id:"inv1",tiers:["Light on the modules makes DC. The lab bus is AC.","Something has to convert the PV power \u2014 look at the inverters on the right wall.","INV-1: power ON, output phase L1."]};let r=e.bat.soc<.35,a=e.h2.level<.45,o=e.inv.bat.on&&e.inv.bat.mode==="charge"&&e.inv.bat.ph===e.inv.pv.ph,l=e.elz.on&&e.elz.ph===e.inv.pv.ph;return r&&!o||a&&!l?{id:"store",tiers:["The door motor needs all three phases. One PV inverter can only energize one of them \u2014 and the other two sources are empty.","Loads only run from a source on the SAME phase. Use PV power to fill the battery and the H\u2082 tank.",`INV-2: ON, CHARGE, phase ${s}. Electrolyzer: ON, phase ${s}. 2 + 3 + 0.2 kW aux = 5.2 kW \u2264 5.24 kW PV. Fill the battery to \u2265 35 % and the tank to \u2265 45 % \u2014 a margin above the 25 % / 30 % limits.`]}:r||a?{id:"wait",tiers:["Storage takes time \u2014 even at \xD7360 time-lapse.",`Battery ${(e.bat.soc*100).toFixed(0)} % (aim \u2265 35 %), H\u2082 ${(e.h2.level*100).toFixed(0)} % (aim \u2265 45 %). The 5 s motor start itself is cheap, but idle phases keep draining their storage through the 0.2 kW aux load at \xD7360.`,"Meanwhile, solve the valve problem: the H\u2082 tank has no handwheel."]}:e.h2.wheel?!e.fc.running||!(e.inv.fc.on&&e.inv.fc.ph>=0)?{id:"fc",tiers:["Hydrogen in a tank does not make electricity by itself.","Open the H\u2082 valve, start the fuel cell stack, and give its inverter (INV-3) a phase.","H\u2082 tank: valve OPEN. Fuel cell: START. INV-3: ON, a phase not used by PV."]}:this.doorReady()?{id:"open",tiers:["All three phases have enough headroom.","The door controller next to the door has an OPEN button.","Door controller \u2192 OPEN, and keep the sources running for 5 s."]}:{id:"split",tiers:["Three sources, three phases. The door motor draws 3 kW on EVERY phase at once.",'Give each source its own phase and switch the loads off. Check "headroom" on the bus panel or the door controller.',"Electrolyzer OFF, INV-2 \u2192 DISCHARGE. PV on L1, battery on L2, fuel cell on L3. Every phase then has \u2265 3 kW headroom."]}:{id:"wheel",tiers:["The fuel cell needs hydrogen from the tank \u2014 but can you actually open the valve?",'The handwheel was removed ("M.V."). The workbench drawer has a 4-digit lock: the sticky note on the bench resistor says the code is its value in \u03A9, and the colour-code poster on the back wall decodes the bands.',(()=>{let c=["black","brown","red","orange","yellow","green","blue","violet","grey","white"],[h,u,d]=n.bands;return`The resistor on the bench: ${c[h]} (${h}), ${c[u]} (${u}), ${c[d]} = multiplier \xD7${10**d} \u2192 ${h}${u} \xD7 ${10**d} = ${n.drawerCode} \u03A9. Drawer code ${n.drawerCode}. Then use the handwheel on the tank.`})()]}}objective(){let e=this.s;return e.door.state==="open"?null:e.door.state==="opening"?`Door drive running\u2026 ${(Ie.DOOR_T-e.door.t).toFixed(1)} s`:"Get out of the booth. The door is driven by a <b>3-phase motor</b> \u2014 and the lab is dark."}panel(e){let t=this.s,n=this.f,s=(h,u)=>`<div class="seg"><button class="btn ${u?"on":""}" data-act="${h}:1">ON</button><button class="btn ${u?"":"danger"}" data-act="${h}:0">OFF</button></div>`,r=(h,u)=>`<div class="seg">${Vt.map((d,f)=>`<button class="btn ${u===f?"on":""}" data-act="${h}:${f}" style="${u===f?"":`border-color:${Ti[f]}88`}">${d}</button>`).join("")}</div>`,a=(h,u=!1)=>`<div class="lcd ${u?"red":""}">${h}</div>`,o='<p class="note">\u23E9 Lab time-lapse \xD7360 \u2014 10 s \u2248 1 h.</p>',l={};l.sunsim={title:"Sun Simulator \xB7 Control Keypad",controls:()=>t.sun.unlocked?`<div class="ctl"><label>Lamp array</label>${s("sun",t.sun.on)}</div>
           <p class="note">Xenon arc lamps giving 3 suns (3000 W/m\xB2) on the test rig. Lamp input \u2248 ${Ie.LAMP_KW} kW from the building's emergency generator ("temporarily" \u2014 M.V.). Lamp \u2192 light \u2192 PV \u2192 AC is only \u2248 9 % efficient; the water-cooled rig has to shed the other \u2248 12 kW as heat.</p>`:`<p class="note">SYSTEM LOCKED \u2014 enter 4-digit PIN.<span class="kbd-hint"> (Number keys work too.)</span></p>
           <div class="keypad">${[1,2,3,4,5,6,7,8,9].map(h=>`<button class="btn" data-act="pin:${h}">${h}</button>`).join("")}
           <button class="btn warn" data-act="pin:C">C</button><button class="btn" data-act="pin:0">0</button><button class="btn on" data-act="pin:OK">OK</button></div>`,live:()=>t.sun.unlocked?a(`LAMPS ${t.sun.on?"ON ":"OFF"}   IRRADIANCE ${t.sun.on?"3000":"   0"} W/m\xB2
LAMP INPUT ${t.sun.on?Ie.LAMP_KW:0} kW (emergency generator)`):a(`PIN: ${(t.sun.pin+"____").slice(0,4).split("").join(" ")}`,!0)},l.pv={title:"PV Test Rig \xB7 III-V modules",controls:()=>`<div class="kv"><span>Modules</span><span>3 \xD7 2 m\xB2 III-V multi-junction modules (\u03B7 \u2248 30 %)</span>
        <span>Output at 3 suns</span><span>${Ie.PV_DC} kW DC</span><span>Connected to</span><span>INV-1 (hybrid inverter)</span></div>
        <p class="note">6 m\xB2 \xD7 3000 W/m\xB2 \xD7 0.30 = 5.4 kW. The modules make DC; only an inverter can put it on the 230 V AC bus.</p>`,live:()=>a(`IRRADIANCE  ${t.sun.on?"3000":"0"} W/m\xB2
DC POWER    ${gn(n.pvAvail/Ie.INV_EFF)} kW available
AC FEED-IN  ${gn(n.pv)} kW (as much as the phase consumes)`)};let c=(h,u,d,f,g="")=>{let v="OFF";return f.on&&(f.ph<0?v="NO PHASE SELECTED":t.trip[f.ph]?v=`FAULT: ${Vt[f.ph]} UNDER-VOLTAGE TRIP`:v=u>0?`FORMING ${Vt[f.ph]} \xB7 230 V 50 Hz`:"STANDBY (no DC source)"),a(`${h}
STATUS     ${v}
AVAILABLE  ${gn(u)} kW
DELIVERING ${gn(d)} kW${g}`,f.on&&f.ph>=0&&t.trip[f.ph])};return l.inv_pv={title:"INV-1 \xB7 Hybrid PV Inverter (6 kVA, \u03B7 97 %)",controls:()=>`<div class="ctl"><label>Power</label>${s("invpv",t.inv.pv.on)}</div>
        <div class="ctl"><label>Output phase</label>${r("invpvph",t.inv.pv.ph)}</div>
        <p class="note">Backup (EPS) mode: grid-forming on one phase. It throttles PV down to exactly what that phase consumes. As cluster master it sets the clock the other two inverters follow, 120\xB0 apart.</p>`,live:()=>c("INV-1 PV",t.inv.pv.on?n.pvAvail:0,n.pv,t.inv.pv)},l.inv_bat={title:"INV-2 \xB7 Battery Inverter (bidirectional)",controls:()=>`<div class="ctl"><label>Power</label>${s("invbat",t.inv.bat.on)}</div>
        <div class="ctl"><label>Mode</label><div class="seg">${["idle","charge","discharge"].map(h=>`<button class="btn ${t.inv.bat.mode===h?"on":""}" data-act="batmode:${h}">${h.toUpperCase()}</button>`).join("")}</div></div>
        <div class="ctl"><label>AC phase</label>${r("invbatph",t.inv.bat.ph)}</div>
        <p class="note">CHARGE draws ${Ie.BAT_CH} kW from its phase \u2014 something else must be feeding that phase.<br>DISCHARGE forms the phase and supplies up to ${Ie.BAT_DIS} kW while SOC &gt; 25 %.</p>${o}`,live:()=>c("INV-2 BATTERY",t.inv.bat.on&&t.inv.bat.mode==="discharge"&&t.bat.soc>Ie.BAT_MIN?Ie.BAT_DIS:0,n.bat,t.inv.bat,`
SOC        ${(t.bat.soc*100).toFixed(1)} %`+(t.inv.bat.on&&t.inv.bat.mode==="discharge"&&t.bat.soc<=Ie.BAT_MIN?`
BMS        DISCHARGE BLOCKED (SOC < 25 %)`:""))},l.inv_fc={title:"INV-3 \xB7 Fuel Cell Inverter",controls:()=>`<div class="ctl"><label>Power</label>${s("invfc",t.inv.fc.on)}</div>
        <div class="ctl"><label>Output phase</label>${r("invfcph",t.inv.fc.ph)}</div>
        <p class="note">Converts the fuel cell's DC stack voltage to AC. The stack itself must be running.</p>`,live:()=>c("INV-3 FUEL CELL",t.inv.fc.on?n.fcAvail:0,n.fc,t.inv.fc)},l.battery={title:"Battery Storage \xB7 Li-ion (LFP) 10 kWh",controls:()=>`<div class="kv"><span>Capacity</span><span>10 kWh, 95 % one-way efficiency</span><span>BMS discharge limit</span><span>SOC \u2265 25 %</span>
        <span>Controlled by</span><span>INV-2 (right wall)</span></div>${o}`,live:()=>{let h=t.bat.soc*100,u=h<25?"#ff5a4a":h<50?"#ffc44a":"#3ecf7a";return`<div style="font:28px Consolas,monospace;margin:4px 0">${h.toFixed(1)} % <span style="font-size:15px;color:#8ea3b8">= ${(t.bat.soc*Ie.BAT_KWH).toFixed(2)} kWh</span></div><div class="bar" style="height:16px"><i style="width:${h}%;background:${u}"></i><span class="mark" style="left:25%"></span><span class="mark" style="left:50%;opacity:.35"></span></div>`+a(`STATE  ${n.bat>0?"DISCHARGING":n.bat<0?"CHARGING":"IDLE"}
POWER  ${gn(n.bat)} kW (AC)`)}},l.electrolyzer={title:"PEM Electrolyzer \xB7 3 kW",controls:()=>`<div class="ctl"><label>Power</label>${s("elz",t.elz.on)}</div>
        <div class="ctl"><label>Supply phase</label>${r("elzph",t.elz.ph)}</div>
        <p class="note">Splits water into H\u2082 and O\u2082: 55 kWh per kg of H\u2082, delivered at 30 bar straight into the tank (no compressor).</p>${o}`,live:()=>{let h="OFF";return t.elz.on&&(t.elz.ph<0?h="NO SUPPLY PHASE":t.trip[t.elz.ph]?h=`NO VOLTAGE (${Vt[t.elz.ph]} TRIPPED)`:n.live[t.elz.ph]?t.h2.level>=1?h="TANK FULL":h=`PRODUCING ${(Ie.ELZ_P/Ie.ELZ_KWH_KG*1e3).toFixed(0)} g/h`:h=`NO VOLTAGE ON ${Vt[t.elz.ph]}`),a(`STATUS   ${h}
POWER    ${gn(n.elz)} kW
H\u2082 TANK  ${(t.h2.level*Ie.H2_KG*1e3).toFixed(0)} g \xB7 ${(t.h2.level*Ie.H2_BAR).toFixed(1)} bar`,h.startsWith("NO"))}},l.h2tank={title:"H\u2082 Buffer Tank \xB7 30 bar, 90 L",controls:()=>(t.h2.wheel?`<div class="ctl"><label>Manual valve</label><div class="seg"><button class="btn ${t.h2.valve?"on":""}" data-act="valve:1">OPEN</button><button class="btn ${t.h2.valve?"":"danger"}" data-act="valve:0">CLOSE</button></div></div>`:`<div class="lcd red">The valve spindle is bare \u2014 the handwheel has been removed.
Tag: "HANDWHEEL REMOVED AFTER THE INTERN INCIDENT \u2014 M.V."</div>
           <div class="ctl"><button class="btn" data-act="usewheel:1">Use handwheel from inventory</button></div>`)+`<p class="note">Holds up to ${Ie.H2_KG*1e3} g of H\u2082 (\u2248 7.3 kWh chemical energy, but a fuel cell turns only ~\u2153 of the electricity back into electricity).</p>`,live:()=>`<div style="font:28px Consolas,monospace;margin:4px 0">${(t.h2.level*Ie.H2_KG*1e3).toFixed(0)} g <span style="font-size:15px;color:#8ea3b8">${(t.h2.level*Ie.H2_BAR).toFixed(1)} bar \xB7 ${(t.h2.level*100).toFixed(0)} %</span></div><div class="bar" style="height:16px"><i style="width:${t.h2.level*100}%;background:#7fd4ff"></i><span class="mark" style="left:30%"></span><span class="mark" style="left:60%;opacity:.35"></span></div>`+a(`VALVE  ${t.h2.wheel?t.h2.valve?"OPEN":"CLOSED":"NO HANDWHEEL"}`,!t.h2.wheel)},l.fuelcell={title:"PEM Fuel Cell \xB7 3.4 kW",controls:()=>`<div class="ctl"><label>Stack</label><div class="seg"><button class="btn ${t.fc.running?"on":""}" data-act="fc:1">START</button><button class="btn ${t.fc.running?"":"danger"}" data-act="fc:0">STOP</button></div></div>
        <p class="note">Start conditions: H\u2082 valve open, tank \u2265 30 %. Warm-up ramp ${Ie.FC_RAMP} s. 18 kWh of electricity per kg H\u2082. Output goes through INV-3.</p>${o}`,live:()=>a(`STACK      ${t.fc.running?n.fcAvail===0?`WARMING UP ${Math.max(0,Ie.FC_RAMP-t.fc.rt).toFixed(1)} s`:"RUNNING":"STOPPED"}
AVAILABLE  ${gn(n.fcAvail)} kW
DELIVERING ${gn(n.fc)} kW (via INV-3)
H\u2082         ${(t.h2.level*Ie.H2_KG*1e3).toFixed(0)} g \xB7 valve ${t.h2.valve?"OPEN":"CLOSED"}`)},l.bus={title:"Main Bus \xB7 3~ 230/400 V island",controls:()=>`<div class="ctl"><label>Under-voltage relays</label><div class="seg">${Vt.map((h,u)=>`<button class="btn ${t.trip[u]?"danger":"on"}" data-act="reset:${u}">${h} ${t.trip[u]?"RESET":"OK"}</button>`).join("")}</div></div>
        <p class="note">Each phase is formed by its own single-phase inverter \u2014 power cannot hop from one phase to another.
        <b>Headroom</b> = what the sources on a phase could still deliver. Negative headroom \u2192 current limit \u2192 voltage collapse \u2192 trip.</p>`,live:()=>{let h=f=>{let g=[];return t.inv.pv.ph===f&&t.inv.pv.on&&g.push("PV"),t.inv.bat.ph===f&&t.inv.bat.on&&g.push(`BAT(${t.inv.bat.mode})`),t.inv.fc.ph===f&&t.inv.fc.on&&g.push("FC"),t.elz.ph===f&&t.elz.on&&g.push("ELZ"),g.join(", ")||"\u2014"},u=n.load.reduce((f,g)=>f+g,0),d=Math.sqrt(n.load.reduce((f,g)=>f+g*g,0)-n.load[0]*n.load[1]-n.load[1]*n.load[2]-n.load[0]*n.load[2])*1e3/230;return`<table class="phase-table"><tr><th>Phase</th><th>Avail kW</th><th>Load kW</th><th>Headroom</th><th>Devices</th></tr>${Vt.map((f,g)=>`<tr><td style="color:${Ti[g]}">${f}${t.trip[g]?' <span class="bad">TRIP</span>':n.live[g]?"":' <span style="color:#667">dead</span>'}</td><td>${gn(n.cap[g])}</td><td>${gn(n.load[g])}</td><td class="${n.head[g]>=Ie.DOOR_P?"ok":""}">${gn(n.head[g])}${n.head[g]>=Ie.DOOR_P?" \u2714":""}</td><td>${h(g)}</td></tr>`).join("")}</table>
          <div class="note">Total load ${gn(u)} kW \xB7 neutral current ${d.toFixed(1)} A ${d<1?"(balanced)":"(unbalanced)"}</div>`}},l.door={title:"Door Drive Controller",controls:()=>t.door.state==="open"?"":`<p class="note">Sliding door, fail-secure. Drive: 3-phase induction motor \u2014 starting current loads <b>\u2248 ${Ie.DOOR_P} kVA on EACH phase</b> for ${Ie.DOOR_T} s (inrush at a low power factor \u2014 the inverters' current limit is what counts) (real time \u2014 the \xD7360 time-lapse pauses while the motor starts). A missing phase makes the motor hum and stall ("single-phasing").</p>
        <div class="ctl"><button class="btn big" data-act="door:open" style="margin:0" ${t.door.state==="opening"?"disabled":""}>OPEN DOOR</button></div>`,live:()=>t.door.state==="open"?a("STATUS  OPEN \u2714"):a(Vt.map((h,u)=>`${h}  headroom ${gn(n.head[u]).padStart(5)} kW  ${n.head[u]>=Ie.DOOR_P-1e-6?"\u2714 ready":"\u2718"}`).join(`
`)+(t.door.state==="opening"?`

DRIVE RUNNING  ${t.door.t.toFixed(1)} / ${Ie.DOOR_T}.0 s`:`

STATUS  ${this.doorReady()?"READY":"LOCKED"}`),!this.doorReady()&&t.door.state!=="opening")},l[e]}action(e){let[t,n]=e.split(":"),s=this.s,r=Number(n),a=null;switch(t){case"pin":if(s.sun.unlocked)break;n==="C"?s.sun.pin=s.sun.pin.slice(0,-1):n==="OK"?s.sun.pin===String(this.puzzle.year)?(s.sun.unlocked=!0,a=["Sun simulator unlocked.","good"]):(s.sun.pin="",a=["Wrong PIN.","bad"]):s.sun.pin.length<4&&(s.sun.pin+=n);break;case"sun":s.sun.on=!!r;break;case"invpv":s.inv.pv.on=!!r;break;case"invpvph":s.inv.pv.ph=r;break;case"invbat":s.inv.bat.on=!!r;break;case"invbatph":s.inv.bat.ph=r;break;case"batmode":s.inv.bat.mode=n;break;case"invfc":s.inv.fc.on=!!r;break;case"invfcph":s.inv.fc.ph=r;break;case"elz":s.elz.on=!!r;break;case"elzph":s.elz.ph=r;break;case"wheel":s.h2.wheel=!0,a=["Handwheel attached to the H\u2082 valve.","good"];break;case"valve":s.h2.wheel&&(s.h2.valve=!!r);break;case"fc":r?s.h2.valve?s.h2.level<Ie.FC_START?a=["Fuel cell: start failed \u2014 H\u2082 tank below 30 %.","bad"]:s.fc.running||(s.fc.running=!0,s.fc.rt=0,a=["Fuel cell stack started \u2014 warming up.","good"]):a=["Fuel cell: start failed \u2014 H\u2082 valve is closed.","bad"]:(s.fc.running=!1,s.fc.rt=0);break;case"reset":if(s.trip[r]){s.trip[r]=!1;let o=this.compute();o.load[r]>o.cap[r]+1e-6&&o.cap[r]>0?(s.trip[r]=!0,a=[`${Vt[r]} trips again \u2014 reduce the load first!`,"bad"]):a=[`${Vt[r]} relay reset.`,"good"]}break;case"door":{if(s.door.state!=="locked")break;let o=this.compute(),l=Vt.filter((c,h)=>!o.live[h]);if(l.length){a=[`Motor hums and won't turn \u2014 single-phasing (${l.join(", ")} ${l.length>1?"have":"has"} no voltage).`,"bad"];break}s.door.state="opening",s.door.t=0,a=["Door drive starting\u2026","info"];break}}this.version++,a&&this.events.push({msg:a[0],kind:a[1]}),this.f=this.compute()}};var Nn=["guest","mvolta","root"],Ks=["mvolta","root"],bf=(i,e)=>i.replace(/[a-z]/gi,t=>{let n=t<="Z"?65:97;return String.fromCharCode(((t.charCodeAt(0)-n+e)%26+26)%26+n)});function p_(i){return{"/":{dir:!0,r:Nn},"/home":{dir:!0,r:Nn},"/home/guest":{dir:!0,r:Nn},"/home/guest/readme.txt":{r:Nn,c:`Welcome to labctl-01, guest.

Grid reconnection (gridctl) requires ROOT privileges.

Our admin Marco Volta (user: mvolta) keeps "forgetting" the root password,
so he split it into three fragments and hid them. Classic Marco.

PS: Marco uses this guest account way too often.
    Real hackers also look at hidden files (ls -a).`},"/home/guest/.bash_history":{r:Nn,c:`ls
cd pics
cat IMG_0413.jpg
cd ..
su mvolta
su mvolta
# argh. why did I make my password my cat's name BACKWARDS and lowercase
exit`},"/home/guest/pics":{dir:!0,r:Nn},"/home/guest/pics/IMG_0413.jpg":{r:Nn,c:`\xFF\xD8\xFF\xE0 JFIF  \xFF\xDB C \u2591\u2592\u2593\u2588\u2593\u2592\u2591 \xA4\xA4\xA4 binary data \xA4\xA4\xA4 \u2592\u2593\u2588\u2593\u2592\u2591 \xFF\xC4
--- EXIF ---
Camera   : LabCam 3000
Author   : mvolta
Title    : "Napping on his favourite inverter again. Best cat. (Name's on the collar.)"
Date     : 2026:04:01 12:00:00`},"/home/guest/pics/inverter_bench.jpg":{r:Nn,c:`\xFF\xD8\xFF\xE0 JFIF \u2592\u2593\u2588 binary data \u2588\u2593\u2592
--- EXIF ---
Author   : mvolta
Title    : "Three phases, 120\xB0 apart, rotating clockwise. Beautiful."`},"/home/mvolta":{dir:!0,r:Ks},"/home/mvolta/notes.txt":{r:Ks,c:`ROOT PASSWORD = FRAGMENT1 + FRAGMENT2 + FRAGMENT3   (no spaces)

F1 -> ~/fragment1.enc   Caesar cipher.
      Shift = number of lamps above our PV test rig.
      (decode <file> <shift>)
F2 -> run "scada diag" and look at the DIAG LED row on the server rack.
      Lit = 1, MSB on the left. I want it in decimal.
F3 -> the logic board on my desk shows it when its output is 1.
      (Wrong guesses set off the alarm. Sorry.)`},"/home/mvolta/todo.txt":{r:Ks,c:`[ ] buy cat food
[x] lock away the H2 valve handwheel (intern!!)
[ ] fix sun simulator lamp driver
[ ] stop writing passwords in text files
[ ] answer the grid operator about the reconnection procedure (see mail)`},"/home/mvolta/fragment1.enc":{r:Ks,c:bf(`The first fragment is: ${i.f1}`,i.lamps)},"/opt":{dir:!0,r:Nn},"/opt/scada":{dir:!0,r:Ks},"/opt/scada/scada.log":{r:Ks,c:`18:02:11 GRID  L1 ${i.gridV}.0V  L2 ${i.gridV-1}.8V  L3 ${i.gridV}.2V  f=${i.gridF.toFixed(2)}Hz  rot L1-L2-L3
18:02:11 INFO phase angles L1 0\xB0  L2 -120\xB0  L3 -240\xB0
18:31:47 WARN storm front, wind gusts 110 km/h
18:36:02 ALRM GRID LOST \u2014 tie breaker Q0 opened by under-voltage protection
18:36:02 INFO building on emergency supply (life safety only)
18:36:05 INFO booth door drive: no supply \u2192 fail-secure LOCKED
18:37:40 INFO cluster INV-1..3 standby \u2014 manual start required`},"/etc":{dir:!0,r:Nn},"/etc/passwd":{r:Nn,c:`root:x:0:0:root:/root:/bin/bash
mvolta:x:1000:1000:Marco Volta,,,:/home/mvolta:/bin/bash
guest:x:1001:1001:Guest:/home/guest:/bin/bash`},"/etc/motd":{r:Nn,c:"labctl-01 \xB7 Solar Test Laboratory \xB7 authorized use only \xB7 running on UPS"},"/root":{dir:!0,r:["root"]},"/root/README":{r:["root"],c:`You made it, root.

1. gridctl  \u2014 validate a day-ahead dispatch schedule. The grid operator issues
              the reconnection permit when it is good enough.
2. Then synchronise the lab with the grid at the tie panel (Q0) next to the exit.`}}}var So=class{constructor(e,t={}){this.P=e,this.hooks=t,this.fs=p_(e),this.users={guest:null,mvolta:e.userPw,root:e.rootPw.toLowerCase()},this.el=document.getElementById("terminal"),this.out=document.getElementById("termOut"),this.inp=document.getElementById("termIn"),this.promptEl=document.getElementById("termPrompt"),this.stack=[{user:"guest",cwd:"/home/guest"}],this.hist=[],this.hi=0,this.pw=null,this.booted=!1,this.pending=null,this.decodeLock=0,this.progress={mv:!1,f1:!1,diag:!1,root:!1,mail:!1},this.inp.addEventListener("keydown",n=>this.key(n)),this.el.addEventListener("mousedown",n=>{n.target!==this.inp&&!n.target.closest("button")&&setTimeout(()=>this.inp.focus(),0)}),this.el.querySelectorAll("[data-cmd]").forEach(n=>n.addEventListener("click",()=>{this.inp.value=n.dataset.cmd+(n.dataset.cmd.endsWith(" "),""),n.dataset.cmd.endsWith(" ")?this.inp.focus():this.submit()}))}serialize(){return{stack:this.stack,progress:this.progress,hist:this.hist.slice(-50)}}restore(e){e&&(this.stack=e.stack,this.progress=e.progress,this.hist=e.hist||[],this.hi=this.hist.length)}get cur(){return this.stack[this.stack.length-1]}open(){this.el.classList.remove("hidden"),this.booted||(this.booted=!0,this.print("labctl-01 login: guest (auto-login)","dim"),this.print(this.fs["/etc/motd"].c,"hi"),this.cur.user!=="guest"&&this.print(`session restored: ${this.cur.user}`,"dim"),this.print(`Type "help" for commands. Stuck? Press the \u{1F4A1} button (or F1).
`,"dim")),this.updPrompt(),setTimeout(()=>this.inp.focus(),30)}close(){this.el.classList.add("hidden"),this.inp.blur(),this.pending&&(clearTimeout(this.pending),this.pending=null)}isOpen(){return!this.el.classList.contains("hidden")}print(e,t=""){let n=document.createElement("div");for(t&&(n.className=t),n.textContent=e,this.out.appendChild(n);this.out.childElementCount>400;)this.out.firstChild.remove();this.out.scrollTop=this.out.scrollHeight}updPrompt(){if(this.pw){this.promptEl.textContent="Password: ",this.inp.type="password";return}this.inp.type="text";let{user:e,cwd:t}=this.cur,n=e==="root"?"/root":`/home/${e}`,s=t===n?"~":t.startsWith(n+"/")?"~"+t.slice(n.length):t;this.promptEl.textContent=`${e}@labctl-01:${s}${e==="root"?"#":"$"} `}submit(){let e=this.inp.value;this.inp.value="",this.pw?(this.print("Password: ","dim"),this.checkPw(e)):(this.print(this.promptEl.textContent+e),e.trim()&&(this.hist.push(e),this.hi=this.hist.length),this.run(e.trim())),this.updPrompt()}key(e){if(e.stopPropagation(),e.key==="Escape"){e.preventDefault(),this.hooks.onEscape?.();return}if(e.key==="F1"){e.preventDefault(),this.hooks.onHint?.();return}(e.key.length===1||e.key==="Backspace")&&this.hooks.onKey?.(),e.key==="Enter"?(e.preventDefault(),this.submit()):e.key==="ArrowUp"&&!this.pw?(e.preventDefault(),this.hi>0&&(this.hi--,this.inp.value=this.hist[this.hi])):e.key==="ArrowDown"&&!this.pw?(e.preventDefault(),this.hi<this.hist.length&&(this.hi++,this.inp.value=this.hist[this.hi]??"")):e.key==="Tab"?(e.preventDefault(),this.complete()):e.key==="l"&&e.ctrlKey&&(e.preventDefault(),this.out.innerHTML="")}resolve(e){let{user:t,cwd:n}=this.cur;if(!e)return n;(e==="~"||e.startsWith("~/"))&&(e=(t==="root"?"/root":`/home/${t}`)+e.slice(1));let s=(e.startsWith("/")?e:n+"/"+e).split("/"),r=[];for(let a of s)!a||a==="."||(a===".."?r.pop():r.push(a));return"/"+r.join("/")}node(e){return Object.hasOwn(this.fs,e)?this.fs[e]:null}canRead(e){let t=e.split("/").filter(Boolean),n="";for(let s=0;s<=t.length;s++){let r=s===0?"/":n+="/"+t[s-1],a=this.node(r);if(a&&!a.r.includes(this.cur.user))return!1}return!0}children(e){let t=e==="/"?"/":e+"/";return Object.keys(this.fs).filter(n=>n!==e&&n.startsWith(t)&&!n.slice(t.length).includes("/")).map(n=>n.slice(t.length))}readFile(e){let t=this.resolve(e),n=this.node(t);return n?this.canRead(t)?n.dir?{err:`${e}: Is a directory`}:{c:n.c,p:t}:{err:`${e}: Permission denied`}:{err:`${e}: No such file or directory`}}complete(){let t=this.inp.value.split(" "),n=t[t.length-1],s;if(t.length===1)s=Object.keys(this.cmds()).filter(r=>r.startsWith(n));else{let r=n.lastIndexOf("/"),a=r>=0?n.slice(0,r+1):"",o=this.resolve(a||".");if(!this.node(o)?.dir||!this.canRead(o))return;s=this.children(o).filter(l=>l.startsWith(n.slice(r+1))).map(l=>a+l+(this.node(this.resolve(a+l))?.dir?"/":""))}s.length===1?(t[t.length-1]=s[0]+(s[0].endsWith("/")?"":" "),this.inp.value=t.join(" ")):s.length>1&&this.print(s.join("  "),"dim")}cmds(){let e=this.hooks.getState?.()||{};return{help:()=>this.print(`Commands:
  ls [-a] [path]     list a directory
  cd <path>          change directory
  cat <file>         print a file
  pwd / whoami       where am I / who am I
  su <user>          switch user
  exit               leave user / close
  decode <file> <n>  Caesar-decode (shift back by n)
  scada status|diag  SCADA tools (group scada)
  mail [n]           read mail (mvolta)
  gridctl            grid console (root only)
  clear \xB7 history \xB7 hint`),ls:t=>{let n=t.some(c=>/^-\w*a/.test(c)),s=t.find(c=>!c.startsWith("-")),r=this.resolve(s),a=this.node(r);if(!a)return this.print(`ls: cannot access '${s}': No such file or directory`,"err");if(!this.canRead(r))return this.print(`ls: cannot open directory '${s}': Permission denied`,"err");if(!a.dir)return this.print(s);let l=this.children(r).filter(c=>n||!c.startsWith(".")).sort().map(c=>this.node((r==="/"?"":r)+"/"+c).dir?c+"/":c);this.print((n?["./","../",...l]:l).join("   ")||"")},cd:t=>{let n=this.resolve(t[0]||"~"),s=this.node(n);if(!s)return this.print(`cd: ${t[0]}: No such file or directory`,"err");if(!s.dir)return this.print(`cd: ${t[0]}: Not a directory`,"err");if(!this.canRead(n))return this.print(`cd: ${t[0]}: Permission denied`,"err");this.cur.cwd=n},cat:t=>{if(!t.length)return this.print("cat: missing file operand","err");for(let n of t){let s=this.readFile(n);s.err?this.print("cat: "+s.err,"err"):this.print(s.c)}},pwd:()=>this.print(this.cur.cwd),whoami:()=>this.print(this.cur.user),id:()=>this.print(`uid=${{root:0,mvolta:1e3,guest:1001}[this.cur.user]}(${this.cur.user}) groups=${this.cur.user}${this.cur.user!=="guest"?",scada":""}`),clear:()=>{this.out.innerHTML=""},history:()=>this.print(this.hist.map((t,n)=>`${String(n+1).padStart(4)}  ${t}`).join(`
`)),su:t=>{let n=t[0]||"root";if(!Object.hasOwn(this.users,n))return this.print(`su: user ${n} does not exist`,"err");if(n!==this.cur.user){if(this.users[n]===null){this.stack.push({user:n,cwd:`/home/${n}`});return}this.pw={user:n}}},exit:()=>{this.stack.length>1?(this.stack.pop(),this.print("logout","dim")):this.hooks.onEscape?.()},logout:()=>this.cmds().exit(),decode:t=>{if(t.length<2)return this.print("usage: decode <file> <shift>","err");let n=this.readFile(t[0]);if(n.err)return this.print("decode: "+n.err,"err");let s=parseInt(t[1],10);if(Number.isNaN(s))return this.print("decode: shift must be a number","err");let r=Math.ceil((this.decodeLock-Date.now())/1e3);if(r>0)return this.print(`decode: key schedule cooling down \u2014 retry in ${r} s`,"err");let a=bf(n.c,-s),o=a.includes("fragment");this.print(a,o?"hi":""),o?this.progress.f1=!0:this.decodeLock=Date.now()+5e3},scada:t=>{if(this.cur.user==="guest")return this.print("scada: permission denied (requires group scada)","err");t[0]==="diag"?(this.progress.diag=!0,this.hooks.onDiag?.(!0),this.print(`DIAG: LED self-test pattern latched on rack LED row "DIAG" (server rack, right of the desk).
Pattern stays until reboot.`,"hi")):this.print(`SCADA status
  grid         : ${e.synced?"CONNECTED":"LOST (tie breaker Q0 open)"}
  island       : cluster INV-1..3 ${e.labOn?"online":"standby"}
  permit       : ${e.permit?"GRANTED":"none"}
  see also     : scada diag`)},mail:t=>{if(this.cur.user==="guest")return this.print("mail: no mailbox for guest","err");let n=lf(this.P),s=parseInt(t[0],10);if(!t[0])return this.print(n.map((r,a)=>`${a+1}  ${r.from.padEnd(34)} ${r.subj}`).join(`
`)+`

read with: mail <n>`);if(!(s>=1&&s<=n.length))return this.print("mail: no such message","err");this.progress.mail=!0,this.print(`From: ${n[s-1].from}
Subject: ${n[s-1].subj}

${n[s-1].body}`)},firewall:()=>this.print("firewall: moved to hardware \u2014 use the FW-BOARD logic board on the desk.","warn"),bin2dec:()=>this.print('bin2dec: command removed by IT ("do it in your head, Marco").',"err"),gridctl:()=>{if(this.cur.user!=="root")return this.print("gridctl: Operation not permitted (root only)","err");if(e.synced)return this.print("gridctl: site connected. Nothing left to validate.","hi");this.print("Starting gridctl dispatch console\u2026","hi"),this.pending&&clearTimeout(this.pending),this.pending=setTimeout(()=>{this.pending=null,this.isOpen()&&this.hooks.onGridctl?.()},450)},sudo:()=>this.print(`${this.cur.user} is not in the sudoers file. This incident will be reported.`,"err"),rm:()=>this.print("rm: Permission denied. And please don't.","err"),hint:()=>this.hooks.onHint?.(),echo:t=>this.print(t.join(" ")),uname:()=>this.print("Linux labctl-01 6.8.0-scada #1 SMP x86_64 GNU/Linux"),man:()=>this.print('No manual entry. Try "help".')}}hintTopic(e){let t=this.progress,n=this.P,s=this.cur.user;return!t.mv&&s==="guest"?{id:"mv",tiers:[`You are "guest". Marco's own account would be more useful.`,"readme.txt \u2192 hidden files (ls -a) \u2192 the photo in ~/pics. Whose name is it, and where is he napping?",`su mvolta \u2014 password "${n.userPw}": the cat's name from his collar tag (${n.cat}, on INV-2 in the booth), reversed, lowercase.`]}:t.f1?t.diag?e.f2seen?e.f3?s!=="root"?{id:"root",tiers:["You have all three fragments.","Root password = fragment 1 + fragment 2 + fragment 3, no spaces.",`su root \u2192 ${n.rootPw}`]}:null:{id:"f3",tiers:["Fragment 3 comes from hardware on the desk.","The FW-BOARD: set switches A\u2013D so the circuit on the poster outputs 1, then press TEST. Every AND input must be 1.",`Switches A B C D = ${n.boardSolution.split("").join(" ")} \u2192 fragment ${n.f3}.`]}:{id:"f2",tiers:["The DIAG row is a binary number.","Lit = 1, dark = 0, most significant bit on the left. Place values 128 64 32 16 8 4 2 1.",`${n.binStr} = ${n.bin}`]}:{id:"f2a",tiers:["Fragment 2 is on the server rack.",'Run "scada diag".',"scada diag \u2014 then look at the DIAG LED row on the rack."]}:{id:"f1",tiers:["As mvolta, read notes.txt.","Fragment 1 is a Caesar cipher. The shift is the number of lamps above the PV test rig in the booth.",`decode fragment1.enc ${n.lamps} \u2192 ${n.f1}`]}}checkPw(e){let t=this.pw.user;this.pw=null,e.trim().toLowerCase()===this.users[t]?(this.stack.push({user:t,cwd:t==="root"?"/root":`/home/${t}`}),t==="mvolta"&&(this.progress.mv=!0,this.print("Welcome back, Marco. You have 3 unread messages (mail).","hi")),t==="root"&&(this.progress.root=!0,this.print("# root shell. Try: cat README","hi"),this.hooks.onRoot?.())):this.print("su: Authentication failure","err")}run(e){if(!e)return;let[t,...n]=e.split(/\s+/),s=this.cmds();Object.hasOwn(s,t)?s[t](n):this.print(`${t}: command not found`,"err")}};var Mf={CW:[0,-120,-240],CCW:[0,-240,-120]},Or=i=>i*Math.PI/180,m_=i=>((i+180)%360+360)%360-180,Fr={V_REL:.02,F:.1,PHI:10},To=class{constructor(e){this.grid={V:e.gridV,f:e.gridF},this.isl={V:222,f:49.8},this.swapped=e.swapped??!0,this.islandOn=!0,this.phi=140,this.closed=!1,this.flash=0}serialize(){return{isl:{V:this.isl.V,f:this.isl.f},swapped:this.swapped,closed:this.closed}}restore(e){e&&(this.isl.V=e.isl.V,this.isl.f=e.isl.f,this.closed=e.closed,this.swapped=e.swapped??(e.isl.seq?e.isl.seq!=="CW":!0))}tick(e){if(this.closed){this.phi=0;return}this.flash=Math.max(0,this.flash-e),this.islandOn&&(this.phi=m_(this.phi+360*(this.isl.f-this.grid.f)*e))}lamps(){if(this.closed)return[0,0,0];let e=Mf[this.swapped?"CCW":"CW"],t=Mf.CW,n=this.islandOn?this.isl.V:0;return[0,1,2].map(s=>{let r=Or(this.phi+t[s]-e[s]),a=Math.sqrt(n**2+this.grid.V**2-2*n*this.grid.V*Math.cos(r)),o=Math.min(1,a/(2*230));return Math.max(0,(o*o-.0625)/.9375)})}check(){let e=this.isl.V-this.grid.V,t=this.isl.f-this.grid.f;return this.islandOn?this.swapped?{ok:!1,why:"PHASE ROTATION MISMATCH \u2014 the incomer arrives as L1-L3-L2. Two poles closed onto 400 V: the inverters hit their current limit within milliseconds and Q0 tripped. (The lamps were chasing each other instead of going dark together.)"}:Math.abs(e)>Fr.V_REL*this.grid.V?{ok:!1,why:`VOLTAGE MISMATCH ${e>0?"+":""}${e.toFixed(0)} V \u2014 a reactive-current surge drove the island inverters into current limit; Q0 tripped.`}:Math.abs(t)>Fr.F?{ok:!1,why:`SLIP TOO LARGE (${t>0?"+":""}${t.toFixed(2)} Hz) \u2014 the island inverters could not be pulled into step; overcurrent trip.`}:t<=0?{ok:!1,why:`ISLAND ${t<0?"SLOWER THAN":"EXACTLY AT"} GRID FREQUENCY (${t.toFixed(2)} Hz) \u2014 the grid would push power INTO the island inverters the moment Q0 closes. Reverse-power relay tripped. (Checklist: a hair ABOVE the grid.)`}:Math.abs(this.phi)>Fr.PHI?{ok:!1,why:`OUT OF PHASE by ${Math.abs(this.phi).toFixed(0)}\xB0 \u2014 ${(460*Math.sin(Math.abs(this.phi)*Math.PI/360)).toFixed(0)} V across each pole, inverters at current limit, Q0 tripped instantly. BANG.`}:{ok:!0}:{ok:!1,why:"NO ISLAND VOLTAGE \u2014 Q0 cannot synchronise a dead bus. Energise the lab cluster first."}}};function Dh(i,e,t,n,{compact:s=!1}={}){i.fillStyle="#10161d",i.fillRect(0,0,e,t);let r=s?e/2:e*.3,a=s?t*.42:t/2,o=Math.min(s?e*.38:e*.25,t*.38),l='Consolas, "Courier New", monospace';i.fillStyle="#e9e6dc",i.beginPath(),i.arc(r,a,o,0,Math.PI*2),i.fill(),i.fillStyle="rgba(40,180,90,.45)",i.beginPath(),i.moveTo(r,a),i.arc(r,a,o,-Math.PI/2-Or(Fr.PHI),-Math.PI/2+Or(Fr.PHI)),i.closePath(),i.fill(),i.strokeStyle="#222",i.lineWidth=2;for(let p=0;p<36;p++){let m=Or(p*10)-Math.PI/2,E=p%9===0?o*.78:o*.88;i.beginPath(),i.moveTo(r+Math.cos(m)*E,a+Math.sin(m)*E),i.lineTo(r+Math.cos(m)*o*.97,a+Math.sin(m)*o*.97),i.stroke()}i.fillStyle="#222",i.font=`bold ${Math.round(o*.15)}px ${l}`,i.textAlign="center",i.fillText("SLOW",r-o*.45,a+o*.55),i.fillText("FAST",r+o*.45,a+o*.55),i.fillText("\u21BA",r-o*.45,a+o*.35),i.fillText("\u21BB",r+o*.45,a+o*.35);let c=Or(n.phi)-Math.PI/2;i.strokeStyle=n.closed?"#1a8f4a":"#c21",i.lineWidth=Math.max(3,o*.05),i.lineCap="round",i.beginPath(),i.moveTo(r-Math.cos(c)*o*.15,a-Math.sin(c)*o*.15),i.lineTo(r+Math.cos(c)*o*.85,a+Math.sin(c)*o*.85),i.stroke(),i.fillStyle="#222",i.beginPath(),i.arc(r,a,o*.07,0,Math.PI*2),i.fill(),i.lineCap="butt",n.flash>0&&(i.fillStyle=`rgba(255,255,255,${n.flash})`,i.fillRect(0,0,e,t));let h=n.lamps(),u=s?t*.88:t*.12,d=s?e/2-o*.6:e*.62;if(h.forEach((p,m)=>{let E=s?d+m*o*.6:d+m*e*.12,_=i.createRadialGradient(E,u,2,E,u,t*.07);_.addColorStop(0,`rgba(255,${200+55*p},${120+100*p},${.15+.85*p})`),_.addColorStop(1,"rgba(255,200,120,0)"),i.fillStyle="#2a2f36",i.beginPath(),i.arc(E,u,t*.04,0,Math.PI*2),i.fill(),i.fillStyle=_,i.beginPath(),i.arc(E,u,t*.07,0,Math.PI*2),i.fill(),s||(i.fillStyle="#8ea3b8",i.font=`${Math.round(t*.04)}px ${l}`,i.fillText(`L${m+1}`,E,u+t*.1))}),s)return;i.textAlign="left",i.font=`${Math.round(t*.062)}px ${l}`;let f=n.isl.V-n.grid.V,g=n.isl.f-n.grid.f;[["","GRID","ISLAND"],["V",`${n.grid.V} V`,n.islandOn?`${n.isl.V} V`:"\u2014 V"],["f",`${n.grid.f.toFixed(2)} Hz`,n.islandOn?`${n.isl.f.toFixed(2)} Hz`:"\u2014 Hz"]].forEach((p,m)=>{let E=t*.34+m*t*.11;i.fillStyle="#8ea3b8",i.fillText(p[0],e*.56,E),i.fillStyle=m===0?"#8ea3b8":"#e6edf3",i.fillText(p[1],e*.6,E),i.fillText(p[2],e*.8,E)}),i.fillStyle="#c8d4e0",i.fillText(n.islandOn?`\u0394V ${f>=0?"+":""}${f} V`:"\u0394V \u2014",e*.56,t*.72),i.fillText(n.islandOn?`\u0394f ${g>=0?"+":""}${g.toFixed(2)} Hz`:"\u0394f \u2014",e*.78,t*.72),i.fillStyle=n.closed?"#3ecf7a":"#ffd24a",i.fillText(n.closed?"Q0 CLOSED \u2014 CONNECTED":n.islandOn?`\u0394\u03C6 ${n.phi>=0?"+":""}${n.phi.toFixed(0)}\xB0`:"ISLAND BUS DEAD",e*.56,t*.9)}var Eo=class{constructor(){this.ctx=null,this.volume=.7,this.loops={}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(e.destination);let t=e.sampleRate*2;this.noise=e.createBuffer(1,t,e.sampleRate);let n=this.noise.getChannelData(0),s=0;for(let r=0;r<t;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=r%2?a:s*3.5}this.buildLoops()}catch{this.ctx=null}}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e}panner([e,t,n]){let s=this.ctx.createPanner();return s.panningModel="HRTF",s.distanceModel="inverse",s.refDistance=1.2,s.rolloffFactor=1.4,s.positionX?(s.positionX.value=e,s.positionY.value=t,s.positionZ.value=n):s.setPosition(e,t,n),s.connect(this.master),s}buildLoops(){let e=this.ctx,t=this.noiseSrc(),n=e.createBiquadFilter(),s=e.createGain();n.type="lowpass",n.frequency.value=260,s.gain.value=.035,t.connect(n).connect(s).connect(this.master),t.start(),this.loops.room=s;let r=e.createGain();r.gain.value=0,r.connect(this.panner([5.6,1.2,-2.9]));for(let[ve,O]of[[50,.6],[100,1],[150,.35],[300,.12]]){let $=e.createOscillator(),ie=e.createGain();$.frequency.value=ve,ie.gain.value=O,$.connect(ie).connect(r),$.start()}this.loops.hum=r;let a=this.noiseSrc(),o=e.createBiquadFilter(),l=e.createGain();o.type="bandpass",o.frequency.value=700,o.Q.value=.8,l.gain.value=0,a.connect(o).connect(l).connect(this.panner([3.1,.8,-4.2])),a.start(),this.loops.fan=l;let c=this.noiseSrc(),h=e.createBiquadFilter(),u=e.createGain();h.type="bandpass",h.frequency.value=1400,h.Q.value=9,u.gain.value=0,c.connect(h).connect(u).connect(this.panner([-4.7,1,-4.1])),c.start(),this.loops.bub=u,this.loops.bubF=h;let d=e.createOscillator(),f=e.createBiquadFilter(),g=e.createGain();d.type="sawtooth",d.frequency.value=100,f.type="lowpass",f.frequency.value=500,g.gain.value=0,d.connect(f).connect(g).connect(this.panner([-4.95,2.9,0])),d.start(),this.loops.ballast=g;let v=e.createOscillator(),p=e.createBiquadFilter(),m=e.createGain();v.type="sawtooth",v.frequency.value=40,p.type="lowpass",p.frequency.value=380,m.gain.value=0,v.connect(p).connect(m).connect(this.panner([0,2.2,-4.9])),v.start(),this.loops.motor=m,this.loops.motorOsc=v;let E=this.noiseSrc(),_=e.createBiquadFilter(),x=e.createGain();_.type="lowpass",_.frequency.value=1800,x.gain.value=0,E.connect(_).connect(x).connect(this.master),E.start();let P=this.noiseSrc(),M=e.createBiquadFilter(),T=e.createGain(),D=e.createOscillator(),b=e.createGain();M.type="bandpass",M.frequency.value=320,M.Q.value=.7,T.gain.value=0,D.frequency.value=.09,b.gain.value=140,D.connect(b).connect(M.frequency),D.start(),P.connect(M).connect(T).connect(this.master),P.start(0,.7);let y=this.noiseSrc(),C=e.createBiquadFilter(),I=e.createGain();C.type="highpass",C.frequency.value=2400,I.gain.value=0;let F=this.panner([-2.3,2,-13]);F.refDistance=1.5,F.rolloffFactor=1.2,y.connect(C).connect(I).connect(F),y.start(0,1.3),this.loops.rain=x,this.loops.rainF=_,this.loops.wind=T,this.loops.pat=I;let H=this.noiseSrc(),Z=e.createBiquadFilter(),W=e.createGain(),ae=e.createOscillator(),X=e.createGain(),J=e.createGain();Z.type="lowpass",Z.frequency.value=260,W.gain.value=.5,ae.frequency.value=24,X.gain.value=.5,ae.connect(X).connect(W.gain),ae.start();let oe=this.panner([5.8,1.7,.2]);oe.refDistance=.4,oe.rolloffFactor=3.5,J.gain.value=0,H.connect(Z).connect(W).connect(J).connect(oe),H.start(0,.4),this.loops.purr=J;let me=e.createGain(),Se=e.createBiquadFilter();Se.type="lowpass",Se.frequency.value=220,me.gain.value=0,Se.connect(me).connect(this.master);for(let ve of[55,58.3,82.4]){let O=e.createOscillator();O.type="sawtooth",O.frequency.value=ve;let $=e.createGain();$.gain.value=ve>80?.25:.5,O.connect($).connect(Se),O.start()}this.loops.drone=me;let Ke=this.noiseSrc(),j=e.createBiquadFilter(),he=e.createGain();j.type="lowpass",j.frequency.value=420,he.gain.value=0,Ke.connect(j).connect(he).connect(this.master),Ke.start(0,.2),this.loops.traffic=he}update(e,t,n){if(!this.ctx)return;let s=this.ctx.listener,r=this.ctx.currentTime,a=e.getWorldDirection(this._v||(this._v=e.position.clone()));s.positionX?(s.positionX.value=e.position.x,s.positionY.value=e.position.y,s.positionZ.value=e.position.z,s.forwardX.value=a.x,s.forwardY.value=a.y,s.forwardZ.value=a.z,s.upX.value=0,s.upY.value=1,s.upZ.value=0):(s.setPosition(e.position.x,e.position.y,e.position.z),s.setOrientation(a.x,a.y,a.z,0,1,0));let o=(l,c)=>l.gain.setTargetAtTime(c,r,.15);o(this.loops.hum,t.hum*.07),o(this.loops.fan,t.fan*.5),o(this.loops.ballast,t.ballast*.035),o(this.loops.motor,t.motor*.16),this.loops.motorOsc.frequency.setTargetAtTime(35+t.motor*55,r,.2),o(this.loops.rain,t.rain*(.05+.05*(1-t.inside))),this.loops.rainF.frequency.setTargetAtTime(t.inside>.5?900:1800,r,.5),o(this.loops.wind,t.rain*.09),o(this.loops.pat,t.rain*.05),o(this.loops.purr,t.purr*.5),o(this.loops.drone,t.drone*.022),o(this.loops.traffic,t.evening*.03),t.evening>.5&&Math.random()<n*.35&&this.bird(),t.bubbles>0&&Math.random()<n*14&&(this.loops.bubF.frequency.setValueAtTime(900+Math.random()*1600,r),this.loops.bub.gain.setValueAtTime(.5*t.bubbles,r),this.loops.bub.gain.setTargetAtTime(0,r+.02,.03))}beep(e,t,n="sine",s=.08,r=0){if(!this.ctx)return;let a=this.ctx.currentTime+r,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=n,o.frequency.value=e,l.gain.setValueAtTime(s,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(this.master),o.start(a),o.stop(a+t+.02)}burst(e,t,n,s="lowpass",r=0){if(!this.ctx)return;let a=this.ctx.currentTime+r,o=this.noiseSrc(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();l.type=s,l.frequency.value=t,c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(c).connect(this.master),o.start(a,Math.random()),o.stop(a+e+.02)}click(){this.beep(1800,.03,"square",.025),this.burst(.03,3e3,.05,"highpass")}good(){this.beep(660,.12),this.beep(990,.18,"sine",.08,.09)}bad(){this.beep(140,.35,"sawtooth",.06)}step(){this.burst(.07,380+Math.random()*260,.22)}clack(){this.burst(.09,2500,.5,"bandpass"),this.beep(90,.25,"square",.08)}thunk(){this.beep(55,.4,"sine",.35),this.burst(.15,200,.4)}keyType(){this.burst(.025,4e3,.06,"highpass")}pickup(){this.beep(880,.08,"triangle",.08),this.beep(1320,.12,"triangle",.07,.07)}fanfare(){[523,659,784,1047].forEach((e,t)=>this.beep(e,.35,"triangle",.09,t*.12))}thunder(e=1,t=4){let n=Math.max(0,Math.min(1,(5-t)/3));n>0&&(this.burst(.25,2600,.4*e*n,"bandpass"),this.burst(.6,900,.3*e*n,"lowpass",.05)),this.burst(3.2,110,.55*e),this.burst(1.6,320,.22*e,"lowpass",.08),this.burst(2.4,90,.35*e,"lowpass",.6),this.beep(36,2.2,"sine",.22*e,.05)}tink(e=0){this.beep(3100+Math.random()*600,.05,"triangle",.035,e),this.beep(100,.12,"sawtooth",.025,e)}purrLoud(e=2.4){if(!this.ctx)return;let t=this.ctx,n=t.currentTime,s=this.noiseSrc(),r=t.createBiquadFilter(),a=t.createGain(),o=t.createOscillator(),l=t.createGain(),c=t.createGain();r.type="lowpass",r.frequency.value=320,a.gain.value=.5,o.frequency.value=25,l.gain.value=.5,o.connect(l).connect(a.gain),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.6,n+.3),c.gain.setValueAtTime(.6,n+e*.45),c.gain.linearRampToValueAtTime(.25,n+e*.55),c.gain.linearRampToValueAtTime(.5,n+e*.7),c.gain.linearRampToValueAtTime(0,n+e),s.connect(r).connect(a).connect(c).connect(this.master),s.start(n,Math.random()),o.start(n),s.stop(n+e+.05),o.stop(n+e+.05)}resolve(){[110,164.8,220,277.2,329.6].forEach((e,t)=>{this.beep(e,4.5,"triangle",.035,.05+t*.07),this.beep(e*2,3.5,"sine",.012,.3+t*.07)})}bird(){if(!this.ctx)return;let e=this.ctx.currentTime,t=2+Math.floor(Math.random()*4),n=2200+Math.random()*1400;for(let s=0;s<t;s++){let r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=e+s*(.09+Math.random()*.08),l=.05+Math.random()*.08;r.frequency.setValueAtTime(n*(.8+Math.random()*.5),o),r.frequency.exponentialRampToValueAtTime(n*(.9+Math.random()*.7),o+l),a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(.012,o+.01),a.gain.exponentialRampToValueAtTime(1e-4,o+l),r.connect(a).connect(this.master),r.start(o),r.stop(o+l+.02)}}bell(e=98,t=0,n=.05){if(!this.ctx)return;let s=this.ctx.currentTime+t;for(let[r,a,o]of[[.5,.6,6],[1,1,4.5],[1.19,.5,3.5],[1.5,.45,3],[2,.35,2.5],[2.51,.25,2],[3.01,.15,1.6],[4.17,.08,1.2]]){let l=this.ctx.createOscillator(),c=this.ctx.createGain();l.frequency.value=e*r,c.gain.setValueAtTime(n*a,s),c.gain.exponentialRampToValueAtTime(1e-4,s+o),l.connect(c).connect(this.master),l.start(s),l.stop(s+o+.05)}}};var Ef="ple-settings",Sf=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Tf={sens:1,invertY:!1,fov:72,volume:.7,uiScale:1,reducedMotion:Sf,reduceFlashing:Sf,brightness:1,palette:"standard",quality:"auto"};function wf(){try{return{...Tf,...JSON.parse(localStorage.getItem(Ef)||"{}")}}catch{return{...Tf}}}function g_(i){try{localStorage.setItem(Ef,JSON.stringify(i))}catch{}}function Af(i){let e=(s,r,a,o,l,c=h=>h)=>`<div class="setrow"><label for="set_${s}">${r}</label>
    <input type="range" id="set_${s}" data-set="${s}" min="${a}" max="${o}" step="${l}" value="${i[s]}"><output>${c(i[s])}</output></div>`,t=(s,r)=>`<div class="setrow"><label for="set_${s}">${r}</label><input type="checkbox" id="set_${s}" data-set="${s}" ${i[s]?"checked":""}></div>`,n=(s,r,a)=>`<div class="setrow"><label for="set_${s}">${r}</label><select id="set_${s}" data-set="${s}">${a.map(([o,l])=>`<option value="${o}" ${i[s]===o?"selected":""}>${l}</option>`).join("")}</select></div>`;return`<div class="settings">
    ${e("sens","Look sensitivity",.2,3,.1,s=>Number(s).toFixed(1)+"\xD7")}
    ${t("invertY","Invert Y axis")}
    ${e("fov","Field of view",55,100,1,s=>s+"\xB0")}
    ${e("volume","Volume",0,1,.05,s=>Math.round(s*100)+" %")}
    ${e("uiScale","UI scale",.8,1.5,.05,s=>Math.round(s*100)+" %")}
    ${e("brightness","Brightness",.7,1.6,.05,s=>Math.round(s*100)+" %")}
    ${t("reducedMotion","Reduced motion (no head bob / shake)")}
    ${t("reduceFlashing","Reduce flashing (lightning, flicker)")}
    ${n("palette","Phase colours",[["standard","Standard (red / yellow / blue)"],["colorblind","Colour-blind safe (Okabe\u2013Ito)"]])}
    ${n("quality","Render quality",[["low","Low (fast)"],["auto","Balanced"],["high","High (sharp)"]])}
  </div>`}function Rf(i,e,t){i.querySelectorAll("[data-set]").forEach(n=>{n.addEventListener("input",()=>{let s=n.dataset.set;e[s]=n.type==="checkbox"?n.checked:n.tagName==="SELECT"?n.value:Number(n.value);let r=n.parentElement.querySelector("output");r&&(r.textContent={sens:a=>a.toFixed(1)+"\xD7",fov:a=>a+"\xB0",volume:a=>Math.round(a*100)+" %",uiScale:a=>Math.round(a*100)+" %",brightness:a=>Math.round(a*100)+" %"}[s]?.(e[s])??e[s]),g_(e),t(e)})})}var wo=class extends zs{constructor(){super();let e=new bi;e.deleteAttribute("uv");let t=new Ht({side:cn}),n=new Ht,s=new Gi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Pe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Pe(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Pe(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Pe(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Pe(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Pe(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Pe(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Pe(e,Js(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Pe(e,Js(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Pe(e,Js(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new Pe(e,Js(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let p=new Pe(e,Js(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new Pe(e,Js(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Js(i){let e=new Zt;return e.color.setScalar(i),e}var si={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},v_=new Er(-1,1,1,-1,0,1),Lh=class extends Ut{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},y_=new Lh,Un=class{constructor(e){this._mesh=new Pe(y_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var js=class extends nn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=un.clone(e.uniforms),this.material=new dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Un(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var kr=class extends nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ao=class extends nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ro=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new pe);this._width=n.width,this._height=n.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Lt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new js(si),this.copyPass.material.blending=Nt,this.clock=new ja}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}kr!==void 0&&(a instanceof kr?n=!0:a instanceof Ao&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Co=class extends nn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Cf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Qs=class i extends nn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(r,a,{type:Lt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Et(r,a,{type:Lt});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Et(r,a,{type:Lt});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Cf;this.highPassUniforms=un.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=si;this.copyUniforms=un.clone(h.uniforms),this.blendMaterial=new dt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Qn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new Zt,this.fsQuad=new Un(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new pe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Qs.BlurDirectionX=new pe(1,0);Qs.BlurDirectionY=new pe(0,1);var Pf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Po=class extends nn{constructor(){super();let e=Pf;this.uniforms=un.clone(e.uniforms),this.material=new qa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Un(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ih&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Br={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ft},cameraProjectionMatrixInverse:{value:new ft},cameraWorldMatrix:{value:new ft},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new N(-1,-1,-1)},sceneBoxMax:{value:new N(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},zr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Io={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function If(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=__(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new N(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Hs(s,e,e);return r.wrapS=Yt,r.wrapT=Yt,r.needsUpdate=!0,r}function __(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var Hr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Nh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new pe},cameraProjectionMatrixInverse:{value:new ft},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Nh(i,e,t){let n=x_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function x_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new N(Math.cos(r),Math.sin(r),a))}return n}var Do=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=e-d,v=t-f,p,m;g>v?(p=1,m=0):(p=0,m=1);let E=g-p+h,_=v-m+h,x=g-1+2*h,P=v-1+2*h,M=l&255,T=c&255,D=this.perm[M+this.perm[T]]%12,b=this.perm[M+p+this.perm[T+m]]%12,y=this.perm[M+1+this.perm[T+1]]%12,C=.5-g*g-v*v;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[D],g,v));let I=.5-E*E-_*_;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[b],E,_));let F=.5-x*x-P*P;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[y],x,P)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,v=h-g,p=u-g,m=d-g,E=e-v,_=t-p,x=n-m,P,M,T,D,b,y;E>=_?_>=x?(P=1,M=0,T=0,D=1,b=1,y=0):E>=x?(P=1,M=0,T=0,D=1,b=0,y=1):(P=0,M=0,T=1,D=1,b=0,y=1):_<x?(P=0,M=0,T=1,D=0,b=1,y=1):E<x?(P=0,M=1,T=0,D=0,b=1,y=1):(P=0,M=1,T=0,D=1,b=1,y=0);let C=E-P+f,I=_-M+f,F=x-T+f,H=E-D+2*f,Z=_-b+2*f,W=x-y+2*f,ae=E-1+3*f,X=_-1+3*f,J=x-1+3*f,oe=h&255,me=u&255,Se=d&255,Ke=this.perm[oe+this.perm[me+this.perm[Se]]]%12,j=this.perm[oe+P+this.perm[me+M+this.perm[Se+T]]]%12,he=this.perm[oe+D+this.perm[me+b+this.perm[Se+y]]]%12,ve=this.perm[oe+1+this.perm[me+1+this.perm[Se+1]]]%12,O=.6-E*E-_*_-x*x;O<0?s=0:(O*=O,s=O*O*this.dot3(this.grad3[Ke],E,_,x));let $=.6-C*C-I*I-F*F;$<0?r=0:($*=$,r=$*$*this.dot3(this.grad3[j],C,I,F));let ie=.6-H*H-Z*Z-W*W;ie<0?a=0:(ie*=ie,a=ie*ie*this.dot3(this.grad3[he],H,Z,W));let de=.6-ae*ae-X*X-J*J;return de<0?o=0:(de*=de,o=de*de*this.dot3(this.grad3[ve],ae,X,J)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,g,v=(e+t+n+s)*l,p=Math.floor(e+v),m=Math.floor(t+v),E=Math.floor(n+v),_=Math.floor(s+v),x=(p+m+E+_)*c,P=p-x,M=m-x,T=E-x,D=_-x,b=e-P,y=t-M,C=n-T,I=s-D,F=b>y?32:0,H=b>C?16:0,Z=y>C?8:0,W=b>I?4:0,ae=y>I?2:0,X=C>I?1:0,J=F+H+Z+W+ae+X,oe=a[J][0]>=3?1:0,me=a[J][1]>=3?1:0,Se=a[J][2]>=3?1:0,Ke=a[J][3]>=3?1:0,j=a[J][0]>=2?1:0,he=a[J][1]>=2?1:0,ve=a[J][2]>=2?1:0,O=a[J][3]>=2?1:0,$=a[J][0]>=1?1:0,ie=a[J][1]>=1?1:0,de=a[J][2]>=1?1:0,Ne=a[J][3]>=1?1:0,_e=b-oe+c,Te=y-me+c,U=C-Se+c,nt=I-Ke+c,Je=b-j+2*c,Xe=y-he+2*c,Le=C-ve+2*c,ct=I-O+2*c,Ve=b-$+3*c,L=y-ie+3*c,S=C-de+3*c,G=I-Ne+3*c,se=b-1+4*c,re=y-1+4*c,te=C-1+4*c,Ue=I-1+4*c,ye=p&255,Me=m&255,tt=E&255,le=_&255,Ae=o[ye+o[Me+o[tt+o[le]]]]%32,Oe=o[ye+oe+o[Me+me+o[tt+Se+o[le+Ke]]]]%32,Ze=o[ye+j+o[Me+he+o[tt+ve+o[le+O]]]]%32,Re=o[ye+$+o[Me+ie+o[tt+de+o[le+Ne]]]]%32,rt=o[ye+1+o[Me+1+o[tt+1+o[le+1]]]]%32,$e=.6-b*b-y*y-C*C-I*I;$e<0?h=0:($e*=$e,h=$e*$e*this.dot4(r[Ae],b,y,C,I));let ht=.6-_e*_e-Te*Te-U*U-nt*nt;ht<0?u=0:(ht*=ht,u=ht*ht*this.dot4(r[Oe],_e,Te,U,nt));let k=.6-Je*Je-Xe*Xe-Le*Le-ct*ct;k<0?d=0:(k*=k,d=k*k*this.dot4(r[Ze],Je,Xe,Le,ct));let ge=.6-Ve*Ve-L*L-S*S-G*G;ge<0?f=0:(ge*=ge,f=ge*ge*this.dot4(r[Re],Ve,L,S,G));let K=.6-se*se-re*re-te*te-Ue*Ue;return K<0?g=0:(K*=K,g=K*K*this.dot4(r[rt],se,re,te,Ue)),27*(h+u+d+f+g)}};var Vr=class i extends nn{constructor(e,t,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=If(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Et(this.width,this.height,{type:Lt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new dt({defines:Object.assign({},Br.defines),uniforms:un.clone(Br.uniforms),vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader,blending:Nt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ya,this.normalMaterial.blending=Nt,this.pdMaterial=new dt({defines:Object.assign({},Hr.defines),uniforms:un.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new dt({defines:Object.assign({},zr.defines),uniforms:un.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,blending:Nt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new dt({uniforms:un.clone(si.uniforms),vertexShader:si.vertexShader,fragmentShader:si.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:no,blendDst:Ws,blendEquation:In,blendSrcAlpha:to,blendDstAlpha:Ws,blendEquationAlpha:In}),this.blendMaterial=new dt({uniforms:un.clone(Io.uniforms),vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jc,blendSrc:no,blendDst:Ws,blendEquation:In,blendSrcAlpha:to,blendDstAlpha:Ws,blendEquationAlpha:In}),this.fsQuad=new Un(null),this.originalClearColor=new Ce,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Bs,this.depthTexture.format=Bi,this.depthTexture.type=ki,this.normalRenderTarget=new Et(this.width,this.height,{minFilter:hn,magFilter:hn,type:Lt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Nh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Nt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new Do,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Hs(s,e,e,En,Vn);return r.wrapS=Yt,r.wrapT=Yt,r.needsUpdate=!0,r}};Vr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var er=class i extends nn{constructor(e,t,n,s){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new Ce(1,1,1),this.hiddenEdgeColor=new Ce(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256);let r=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Et(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new wr,this.depthMaterial.side=ln,this.depthMaterial.depthPacking=hh,this.depthMaterial.blending=Nt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=ln,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Et(this.resolution.x,this.resolution.y,{type:Lt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Et(r,a,{type:Lt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Et(r,a,{type:Lt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Et(Math.round(r/2),Math.round(a/2),{type:Lt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Et(r,a,{type:Lt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Et(Math.round(r/2),Math.round(a/2),{type:Lt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;let o=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(r,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();let c=si;this.copyUniforms=un.clone(c.uniforms),this.materialCopy=new dt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Nt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.fsQuad=new Un(null),this.tempPulseColor1=new Ce,this.tempPulseColor2=new Ce,this.textureMatrix=new ft;function h(u,d){let f=d.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,s),this.renderTargetBlurBuffer1.setSize(n,s),this.renderTargetEdgeBuffer1.setSize(n,s),this.separableBlurMaterial1.uniforms.texSize.value.set(n,s),n=Math.round(n/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(n,s),this.renderTargetEdgeBuffer2.setSize(n,s),this.separableBlurMaterial2.uniforms.texSize.value.set(n,s)}updateSelectionCache(){let e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}changeVisibilityOfSelectedObjects(e){let t=this._visibilityCache;for(let n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}changeVisibilityOfNonSelectedObjects(e){let t=this._visibilityCache,n=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!n.has(r)){let a=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,a)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);let o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){let l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=i.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new dt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new pe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new dt({uniforms:{maskTexture:{value:null},texSize:{value:new pe(.5,.5)},visibleEdgeColor:{value:new N(1,1,1)},hiddenEdgeColor:{value:new N(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new dt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new dt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Qn,depthTest:!1,depthWrite:!1,transparent:!0})}};er.BlurDirectionX=new pe(1,0);er.BlurDirectionY=new pe(0,1);var b_={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.045},vignette:{value:.4},aberration:{value:.0025}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float time, grain, vignette, aberration; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + time * 61.7) * 43758.5453); }
    void main() {
      vec2 d = vUv - 0.5; float r2 = dot(d, d);
      vec2 off = d * aberration * r2 * 4.0;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      col *= 1.0 - vignette * smoothstep(0.05, 0.7, r2 * 2.0);
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col += (hash(vUv * 1024.0) - 0.5) * grain * (1.2 - lum);   // film grain, a bit stronger in the shadows
      gl_FragColor = vec4(col, 1.0);
    }`},Lo=class{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,this.enabled=!1,this.composer=null}configure(e,{touch:t=!1}={}){if(this.composer){for(let h of this.composer.passes)h.dispose?.();this.composer.dispose()}if(this.composer=null,this.outline=null,this.enabled=e!=="low",!this.enabled)return;let n=this.renderer,s=n.getSize(new pe),r=n.getPixelRatio(),a=new Et(s.x*r,s.y*r,{type:Lt,samples:t?2:4}),o=this.composer=new Ro(n,a);if(o.setPixelRatio(r),o.setSize(s.x,s.y),o.addPass(new Co(this.scene,this.camera)),e==="high"||e==="auto"&&!t){let h=this.ao=new Vr(this.scene,this.camera,s.x,s.y);if(e!=="high"){let u=h.setSize.bind(h);h.setSize=(d,f)=>u(Math.max(1,Math.round(d/2)),Math.max(1,Math.round(f/2))),h.setSize(s.x*r,s.y*r)}h.updateGtaoMaterial({radius:.45,distanceExponent:1.5,thickness:1.2,scale:1.1,samples:e==="high"?16:12}),h.updatePdMaterial({samples:12,radius:6}),h.blendIntensity=.9,o.addPass(h)}else this.ao=null;let c=this.outline=new er(new pe(s.x,s.y),this.scene,this.camera);Object.assign(c,{edgeStrength:2.2,edgeGlow:.4,edgeThickness:1.2,pulsePeriod:0}),c.visibleEdgeColor.set(16765514),c.hiddenEdgeColor.set(5917210),o.addPass(c),this.bloom=new Qs(new pe(s.x,s.y),.55,.45,1),o.addPass(this.bloom),o.addPass(new Po),this.film=new js(b_),o.addPass(this.film)}setSize(e,t){this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t))}select(e){return this.outline?(this.outline.selectedObjects=e,!0):!1}render(e,t=!1){if(!this.enabled){this.renderer.render(this.scene,this.camera);return}this.film.uniforms.time.value=(this.film.uniforms.time.value+e)%100,this.ao&&(this.ao.enabled=!t),this.composer.render(e)}};var Oo=new URLSearchParams(location.search),Vh="ple-best-v2",Bf=60*60,Fo=i=>`ple-save-v2-${i}`,rn={get(i){try{return JSON.parse(localStorage.getItem(i)||"null")}catch{return null}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}},zf=()=>{let i=new Date;return i.getFullYear()*1e4+(i.getMonth()+1)*100+i.getDate()},dn=Number(Oo.get("seed"))||0,sr=Fo(dn);{let i=rn.get("ple-save-v2");i&&(rn.set(Fo(i.seed||0),i),rn.del("ple-save-v2"))}var vt=Yd(dn),Pt=wf();Ih(Pt.palette);var St=i=>document.getElementById(i),Xt;try{Xt=new ka({antialias:Pt.quality==="low",powerPreference:"high-performance"})}catch{throw document.body.insertAdjacentHTML("beforeend",'<div class="overlay"><div class="card"><h2>WebGL unavailable</h2><p>This game needs a browser with WebGL enabled.</p></div></div>'),new Error("WebGL unavailable")}var Hf=()=>Math.min(devicePixelRatio||1,{low:1,auto:1.5,high:2}[Pt.quality]??1.5);Xt.setPixelRatio(Hf());Xt.setSize(innerWidth,innerHeight);Xt.toneMapping=Pr;Xt.toneMappingExposure=1.15;Xt.shadowMap.enabled=!Zs();Xt.shadowMap.type=Jc;St("app").appendChild(Xt.domElement);var Ei=Xt.domElement;Ei.setAttribute("aria-label","3D view of the laboratory");var On=new zs;On.background=new Ce(329740);var Ft=new en(Pt.fov,innerWidth/innerHeight,.05,100);Ft.rotation.order="YXZ";{let i=new ks(Xt);On.environment=i.fromScene(new wo,.04).texture,i.dispose()}On.environmentIntensity=.08;var ds=new Lo(Xt,On,Ft),Df=null;addEventListener("resize",()=>{Ft.aspect=innerWidth/innerHeight,Ft.updateProjectionMatrix(),Xt.setSize(innerWidth,innerHeight),ds.setSize(innerWidth,innerHeight)});var{colliders:M_,refs:ce}=_f(On,vt);for(let i of Object.values(ce.outside.night))Xt.initTexture(i);On.traverse(i=>{i.isMesh&&!i.material.transparent&&!i.material.isShaderMaterial&&(i.castShadow=!0,i.receiveShadow=!0)});ce.cat.eyeOpen.visible=!0;Xt.compile(On,Ft);ce.cat.eyeOpen.visible=!1;var wi=new Pe(new Dn(4,4),ce.outside.material(ce.doorFrame,{trees:!1}));Object.assign(wi.material,{depthTest:!1,depthWrite:!1});wi.renderOrder=1e3;wi.frustumCulled=!1;wi.position.z=-.2;wi.visible=!1;Ft.add(wi);On.add(Ft);var ko=document.createElement("div");ko.id="fade";document.body.appendChild(ko);var ir=document.createElement("div");ir.id="caption";document.body.appendChild(ir);function Bo(i,e=4){ir.textContent=i,ir.classList.add("show"),clearTimeout(Bo.t),Bo.t=setTimeout(()=>ir.classList.remove("show"),e*1e3)}var Ye=new Mo(vt),wt=new To(vt),lt=new Eo;lt.setVolume(Pt.volume);var No=of(vt),ci=new eo(new ei,16765514);ci.material.depthTest=!1;ci.material.transparent=!0;ci.material.opacity=.7;ci.renderOrder=10;ci.visible=!1;On.add(ci);var Xh=[];On.traverse(i=>{i.isMesh&&Xh.push(i)});var Fe={hud:St("hud"),start:St("start"),resume:St("resume"),menu:St("menu"),panel:St("panel"),panelTitle:St("panelTitle"),panelBody:St("panelBody"),prompt:St("prompt"),cross:St("crosshair"),objective:St("objective"),busHud:St("busHud"),toast:St("toast"),end:St("end"),timer:St("timer"),inv:St("inv"),hint:St("hintBox"),journal:St("journal")};function Vf(){let i=Ft.aspect;return i>=1?Pt.fov:Math.max(Pt.fov,Math.min(100,2*Math.atan(Math.tan(62*Math.PI/360)/i)*180/Math.PI))}function Gf(){Ft.fov=Vf(),Ft.updateProjectionMatrix(),Xt.toneMappingExposure=1.15*Pt.brightness,lt.setVolume(Pt.volume),document.documentElement.style.setProperty("--ui",Pt.uiScale),Ih(Pt.palette),Xt.setPixelRatio(Hf()),Df!==Pt.quality&&(Df=Pt.quality,ds.configure(Pt.quality,{touch:Zs()})),ds.setSize(innerWidth,innerHeight),Ye.version++}Gf();var w={mode:"start",stage:"lab",panelId:null,panelVersion:-1,pver:0,target:null,inventory:[],journal:{},heard:{},hints:{used:0,revealed:{}},time:{elapsed:0,penalty:0,splits:{}},drawer:{code:[0,0,0,0],open:!1,taken:!1},board:{bits:[0,0,0,0],solved:!1,fails:0},diag:!1,f2seen:!1,exitOpen:!1,catPets:0,termOpened:!1,busSeen:!1,shake:0,shakeDir:new N(0,1,0)};function Gh(i){Pt.reducedMotion||(w.shake=i,w.shakeDir.set(Math.random()-.5,1,Math.random()-.5).normalize())}var De={x:0,z:2.6,yaw:0,pitch:-.05,eye:1.65,r:.3,vx:0,vz:0,bob:0,stepAcc:0},bn={},qh=!1,li=null,$r=()=>{for(let i in bn)bn[i]=!1;li?.reset(),qh=!1},Yn=i=>{let e=Math.abs(Math.round(i));return`${i<0?"+":""}${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},rr=()=>w.time.elapsed+w.time.penalty,nr=[],Gr=0;function Ot(i,e="info"){nr.length&&nr[nr.length-1].msg===i||(nr.push({msg:i,kind:e}),Gr<=0&&Yh())}function Yh(){let i=nr.shift();if(!i){Fe.toast.classList.remove("show");return}Fe.toast.textContent=i.msg,Fe.toast.className="show "+(i.kind==="bad"?"bad":i.kind==="good"?"good":""),Gr=Math.min(6,2.2+i.msg.length/30)}function Ho(i,e){w.time.penalty+=i,Ot(`\u23F1 +${Yn(i)} \u2014 ${e}`,"bad"),Fe.timer.classList.remove("pen"),Fe.timer.offsetWidth,Fe.timer.classList.add("pen")}var Zh={handwheel:"\u{1F534} Valve handwheel",permit:"\u{1FAAA} Reconnection permit card"};function Wf(i){w.inventory.includes(i)||(w.inventory.push(i),lt.pickup(),Ot(`Picked up: ${Zh[i]}`,"good"),Vo())}function $f(i){w.inventory=w.inventory.filter(e=>e!==i),Vo()}function Vo(){Fe.inv.innerHTML=w.inventory.map(i=>`<span class="chip">${Zh[i]}</span>`).join("")}function Rn(i,e,t){w.journal[i]||(w.journal[i]={title:e,text:t,t:rr()},St("jBadge")?.classList.add("new"))}var Lf={control:"Booth door",root:"Root access",permit:"Reconnection permit",synced:"Grid synchronised",won:"Escaped"};function ai(i){if(w.stage!==i){if(w.stage=i,w.time.splits[i]=rr(),i==="control"&&(w.boltIn=.6,ce.windowLight.shadow.needsUpdate=!0),i==="permit"){Wf("permit");for(let e of["restored","evening"])for(let t of ce.outside.prepare(e))Xt.initTexture(t);ce.outside.setMode("restored"),setTimeout(()=>Bo("Across the river the city lights come back on. The grid is live again \u2014 only this building is still dark.",6),1200)}i==="synced"&&(ce.outside.setMode("evening"),w.exitOpen=!0,w.syncT=0,Ye.s.grid=!0,ce.windowLight.shadow.needsUpdate=!0),or()}}function S_(){return w.stage==="lab"?Ye.objective()||"The door is open. Go through.":{control:"Get the building back on the grid. The <b>control PC</b> is on the desk.",root:"You are root. Get the <b>reconnection permit</b>: run <b>gridctl</b>.",permit:"Permit granted. <b>Synchronise</b> the lab with the grid at the tie panel (Q0) next to the exit.",synced:"The exit is open. <b>Get out!</b>",won:"You escaped. Feel free to look around."}[w.stage]}function T_(){return w.stage==="lab"?Ye.hintTopic():w.stage==="control"?w.termOpened?Fn.hintTopic({f2seen:w.f2seen,f3:w.board.solved})||{id:"root",tiers:["You have everything.","Combine the fragments.",`su root \u2192 ${vt.rootPw}`]}:{id:"pc",tiers:["There is a computer in this room.","The PC on the desk runs on the UPS.","Walk to the desk and use the PC."]}:w.stage==="root"?{id:"gridctl",tiers:["Marco's mail (mail) and /root/README describe the reconnection procedure.",`Run gridctl as root and validate a 24-h dispatch: reach \u2265 ${ee.WIN_RATIO*100} % of the benchmark's extra profit.`,"At negative prices: curtail, charge, electrolyze. At the evening peak: discharge (fuel cell above its break-even). The \u{1F4A1} advisor gives per-hour advice."]}:w.stage==="permit"?{id:"sync",tiers:["The tie panel (Q0) is on the east wall next to the exit. Marco pinned a checklist nearby, and the grid operator's e-mail lists their values.","Insert the permit card. Match the voltage, run the island slightly FASTER than the grid, and watch the three lamps: if they chase each other instead of going dark together, the incoming phases are swapped. Close on the synchroscope at 12 o'clock.",`Insert the permit card. Island ${vt.gridV} V, ${(vt.gridF+.04).toFixed(2)} Hz. ${vt.swapped?'In this room the lamps chase \u2192 press "Swap L2 \u2194 L3" once.':"In this room the lamps already go dark together \u2192 leave the jumper as found."} Press CLOSE (or Space) when the needle is in the green sector.`]}:{id:"exit",tiers:["Walk out!","The exit door is in the east wall of the control room.","Go through the open exit door and down the corridor."]}}var Fn=new So(vt,{onGridctl:()=>{Fn.close(),Jh()},onDiag:i=>{w.diag=i,Rn("diag","SCADA diag","scada diag latched a pattern on the rack's DIAG LED row.")},onKey:()=>lt.keyType(),onEscape:()=>oi(),onHint:()=>$o(),onRoot:()=>ai("root"),getState:()=>({permit:Jt.permit,synced:w.stage==="synced"||w.stage==="won",labOn:Ye.f.live.some(Boolean)})}),Jt=new uo(i=>{w.gridResult=i,Jt.close(),ai("permit"),oi(),Ot("\u{1FAAA} Reconnection permit card issued. Take it to the tie panel (Q0) next to the exit and synchronise.","good")},dn);Jt.onClose=()=>oi();Jt.onHint=i=>{i&&w.hints.used++,Ho(15,"advisor consulted")};var vn=Zs();document.body.classList.toggle("touch",vn);li=new vo(Ei,{look:(i,e)=>{w.mode==="play"&&jf(i*1.6,e*1.6)},tap:(i,e)=>{w.mode==="play"&&C_(i,e)},use:()=>{w.mode==="play"&&qr(w.target)},menu:()=>ar(),hint:()=>$o(),journal:()=>jh(),sprint:i=>{qh=i}});var Xf=0;function Go(){if(vn){Xr();return}let i=()=>{w.mode==="paused"&&Fe.resume.classList.remove("hidden")};try{let e=Ei.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>{try{let t=Ei.requestPointerLock();t&&t.catch&&t.catch(i)}catch{i()}})}catch{try{Ei.requestPointerLock()}catch{i()}}}function Xr(){w.mode="play",w.coldPending&&(w.coldPending=!1,w.cold=0),Fe.resume.classList.add("hidden"),Xf=performance.now()}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Ei?Xr():($r(),w.mode==="play"&&ar())});document.addEventListener("pointerlockerror",()=>{w.mode==="paused"&&Fe.resume.classList.remove("hidden")});Fe.resume.addEventListener("click",()=>{lt.init(),vn?Xr():Go()});Ei.addEventListener("click",()=>{w.mode==="paused"&&!vn&&(lt.init(),Go())});addEventListener("blur",()=>{$r(),w.mode==="play"&&vn&&ar()});document.addEventListener("visibilitychange",()=>{document.hidden&&($r(),or(),w.mode==="play"&&vn&&ar())});var E_=["panel","terminal","grid","hint","journal","menu"];function Ai(i){w.mode=i,$r(),document.pointerLockElement&&document.exitPointerLock(),Fe.resume.classList.add("hidden"),Fe.prompt.style.display="none",Fe.cross.classList.remove("active"),ci.visible=!1,li.enable(!1)}function oi(){if(Fe.panel.classList.add("hidden"),Fe.hint.classList.add("hidden"),Fe.journal.classList.add("hidden"),Fe.menu.classList.add("hidden"),Fn.close(),Jt.close(),w.panelId=null,document.activeElement?.blur?.(),!(w.mode==="end"||w.mode==="start")){if(w.returnTo&&["hint","journal"].includes(w.mode)){let i=w.returnTo;w.returnTo=null,i==="terminal"?(Ai("terminal"),Fn.open()):Jh();return}w.returnTo=null,w.mode="paused",li.enable(vn),vn?Xr():Go()}}document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",oi));var us=(i,e=!1)=>`<div class="lcd ${e?"red":""}">${i}</div>`,w_=null,Nf=()=>w_??(w_=ce.circuitCanvas.toDataURL()),qf=()=>An(ce.drawerLockTex,(i,e,t)=>{i.fillStyle="#222",i.fillRect(0,0,e,t),i.fillStyle="#ddd",i.font=`bold 34px ${He.mono}`,i.textAlign="center",i.fillText(w.drawer.code.join(" "),e/2,36)});function Yf(i){let e={};e.cat={title:"A sleeping cat",controls:()=>`<p>A ginger cat is curled up on top of INV-2, enjoying the warm fan exhaust.</p>
      <div class="lcd" style="font-size:18px">Collar tag: \u201C${vt.cat.toUpperCase()}\u201D</div>
      <button class="btn" data-act="pet">Pet the cat</button>`,onOpen:()=>Rn("cat","The cat on INV-2",`Collar tag: "${vt.cat.toUpperCase()}"`),onAct:()=>{w.catPets++,lt.purrLoud(),w.catPets>3?w.catEye=2.5:w.earFlick={ear:w.catPets%2,t:.35},Ot(w.catPets>3?"He opens one eye. Judging you.":"Prrrrr. (He did not bite.)")}},e.drawer={title:"Bench drawer \xB7 4-wheel combination lock",controls:()=>w.drawer.open?w.drawer.taken?"<p>Empty \u2014 cable ties, a multimeter fuse and half a cookie.</p>":'<p>Inside: the missing <b>handwheel</b> of the H\u2082 valve.</p><button class="btn on" data-act="take">Take the handwheel</button>':`<p class="note">Four number wheels.<span class="kbd-hint"> (You can also type the digits and press Enter.)</span></p>
        <div class="wheels">${w.drawer.code.map((t,n)=>`<div class="wheel"><button class="btn" data-act="dw:${n}:1" aria-label="wheel ${n+1} up">\u25B2</button><div class="digit">${t}</div><button class="btn" data-act="dw:${n}:-1" aria-label="wheel ${n+1} down">\u25BC</button></div>`).join("")}</div>
        <button class="btn on" data-act="dopen">Pull the drawer</button>`,onAct:t=>{let[n,s,r]=t.split(":");n==="dw"&&(w.drawer.code[s]=(w.drawer.code[s]+Number(r)+10)%10),n==="digit"&&(w.drawer.code.shift(),w.drawer.code.push(Number(s))),n==="dopen"&&(w.drawer.code.join("")===vt.drawerCode?(w.drawer.open=!0,lt.clack(),Ot("Click \u2014 the drawer slides open.","good"),Rn("drawer","Bench drawer",`Code ${vt.drawerCode}. It held the H\u2082 valve handwheel.`)):[`${vt.bands.join("")}0`,`0${vt.bands.join("")}`].includes(w.drawer.code.join(""))?(lt.bad(),Ot("The wheels almost give\u2026 Is the third band really a digit? Check the colour-code poster.","bad")):(lt.bad(),Ot("The lock doesn't budge.","bad"))),n==="take"&&(w.drawer.taken=!0,Wf("handwheel")),qf()}},e.resistor={title:"A display resistor with a sticky note",controls:()=>`<div class="resistor"><span class="lead"></span><span class="rbody">${vt.bands.map(t=>`<i style="background:${qs[t]}"></i>`).join("")}<i class="gap"></i><i style="background:#c8a040"></i></span><span class="lead"></span></div>
      <div class="board" style="font-size:18px">"Drawer = my value in \u03A9." <span style="float:right">\u2014 M.V.</span></div>
      <p class="note">Bands are read from the end they are closest to. The separate gold band is the tolerance.</p>`,onOpen:()=>Rn("resistor","Resistor sticky note",`"Drawer = my value in \u03A9." Bands: ${vt.bands.map(t=>Mh[t]).join(", ")}, gold.`)},e.colorcode={title:"Resistor colour code (poster)",controls:()=>`<p><b>Bands 1 + 2 = digits \xB7 band 3 = multiplier</b> <span class="bad">(band 3 is not a digit \u2014 it adds zeros)</span> \xB7 band 4 = tolerance</p>
      <table class="phase-table"><tr><th>Colour</th><th>Digit (bands 1\u20132)</th><th>Multiplier (band 3)</th></tr>${Mh.map((t,n)=>`<tr><td><i class="sw" style="background:${qs[n]}"></i> ${t}</td><td>${n}</td><td>${oo[n]} <span class="note">(${n?`+${n} zero${n>1?"s":""}`:"no zeros"})</span></td></tr>`).join("")}<tr><td><i class="sw" style="background:#c8a040"></i> gold</td><td>\u2014</td><td>tolerance \xB15 %</td></tr></table>
      <p class="note">Example: brown \xB7 black \xB7 orange \xB7 gold = 1, 0, \xD71 000 \u2192 10 \xD7 1 000 = 10 000 \u03A9.</p>`,onOpen:()=>Rn("colorcode","Resistor colour code","Bands 1+2 = digits, band 3 = MULTIPLIER (number of zeros), band 4 = tolerance. black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9. Example: brown\xB7black\xB7orange = 10 \xD7 1 000 = 10 000 \u03A9.")},e.whiteboard={title:"Whiteboard (half erased)",controls:()=>`<div class="board">${Nr(vt).map(([t,n])=>`<div style="color:${n};white-space:pre-wrap">${t}</div>`).join("")}</div>`,onOpen:()=>Rn("whiteboard","Whiteboard",Nr(vt).map(t=>t[0].trim()).join(`
`))},e.plaque={title:"Brass plaque",controls:()=>`<div class="board" style="background:#b8923a;color:#3b2a08;text-align:center;font-family:Georgia,serif">SOLAR TEST LABORATORY<br><b style="font-size:26px">EST. ${vt.year}</b><br><i>"Power to the people."</i></div>`,onOpen:()=>Rn("plaque","Brass plaque",`Solar Test Laboratory \u2014 est. ${vt.year}`)};for(let t of["rec1","rec2","rec3","rec4"])e[t]={title:No[t].title,controls:()=>`<div class="memo">\u25B6 ${No[t].text.replace(/\n/g,"<br>")}</div><button class="btn" data-act="replay">\u21BB Replay</button>`,onOpen:()=>{Uf(),w.heard[t]=!0,Rn(t,No[t].title,No[t].text)},onAct:()=>Uf()};return e.rack={title:"Server rack \xB7 DIAG LED row",controls:()=>w.diag?`<div class="leds">${vt.binStr.split("").map(t=>`<span class="led ${t==="1"?"on":""}"></span>`).join("")}</div><p class="note">\u25C0 MSB \xB7 lit = 1 \xB7 8 bits</p>`:"<p>The DIAG row is dark. Some SCADA diagnostic must drive it.</p>",onOpen:()=>{w.diag&&(w.f2seen=!0,Rn("rackdiag","DIAG LED pattern",`${vt.binStr.replace(/1/g,"\u25CF").replace(/0/g,"\u25CB")}  (lit = 1, MSB left)`))}},e.circuit={title:"Poster: FW-BOARD circuit",controls:()=>`<img class="circuit-img" src="${Nf()}" alt="Logic circuit: inputs A to D feed gates whose outputs are ANDed into the output LED">`},e.board={title:"FW-BOARD \xB7 logic board",controls:()=>`<img class="circuit-img" src="${Nf()}" alt="Logic circuit">
      <div class="seg" style="margin:10px 0">${"ABCD".split("").map((t,n)=>`<button class="btn tog ${w.board.bits[n]?"on":""}" data-act="bt:${n}" ${w.board.solved?"disabled":""}>${t} = ${w.board.bits[n]}</button>`).join("")}
      <button class="btn big" data-act="btest" style="margin:0 0 0 8px" ${w.board.solved?"disabled":""}>TEST</button></div>
      <p class="note"><span class="kbd-hint">Keys 1\u20134 toggle A\u2013D, Enter tests. </span>A wrong TEST trips the security alarm (+0:30).</p>`,live:()=>w.board.solved?us(`OUT = 1  \u2714
DISPLAY: ${vt.f3}   (fragment 3)`):us(`OUT = ?   inputs ${w.board.bits.join(" ")}`),onAct:t=>{let[n,s]=t.split(":");w.board.solved||(n==="bt"&&(w.board.bits[s]^=1),n==="btest"&&(bh(vt.circuitDef,w.board.bits)?(w.board.solved=!0,lt.good(),Ot(`FW-BOARD: OUT = 1 \u2014 the display shows "${vt.f3}".`,"good"),Rn("f3","Fragment 3",`FW-BOARD display: ${vt.f3}`)):(w.board.fails++,lt.bad(),lt.beep(880,.5,"square",.06,.1),Ho(30,"FW-BOARD alarm: output 0"))))}},e.checklist={title:"Sync checklist (pinned to the wall)",controls:()=>`<div class="board" style="white-space:pre-wrap;font-size:16px">${Th()}</div>`,onOpen:()=>Rn("checklist","Sync checklist",Th())},e.sync={title:"Grid tie panel \xB7 breaker Q0",controls:()=>`<canvas id="syncCv" class="synccv" width="720" height="420"></canvas>
      ${!wt.closed&&!wt.islandOn?us("ISLAND BUS DEAD \u2014 the lab cluster has no voltage. Energise it again in the booth (e.g. PV on INV-1).",!0):""}
      ${wt.closed?us("Q0 CLOSED \u2014 the lab is connected to the grid \u2714"):Jt.permit?w.permitIn?us("Permit card accepted \u2014 interlock released."):`${us("Q0 INTERLOCKED \u2014 insert the operator's permit card.",!0)}<button class="btn on" data-act="permit">\u{1FAAA} Insert the permit card</button>`:us("Q0 INTERLOCKED \u2014 no reconnection permit from the grid operator yet (gridctl).",!0)}
      <div class="ctl"><label>Island voltage</label><div class="seg">${[-5,-1,1,5].map(t=>`<button class="btn" data-act="sv:${t}">${t>0?"+":"\u2212"}${Math.abs(t)} V</button>`).join("")}</div></div>
      <div class="ctl"><label>Island frequency</label><div class="seg">${[-.1,-.01,.01,.1].map(t=>`<button class="btn" data-act="sf:${t}">${t>0?"+":"\u2212"}${Math.abs(t)} Hz</button>`).join("")}</div></div>
      <div class="ctl"><label>Incomer terminals</label><div class="seg"><button class="btn" data-act="swap">\u21C4 Swap L2 \u2194 L3</button></div><span class="note">jumper position ${wt.swapped===vt.swapped?"A (as found)":"B (L2 \u2194 L3 exchanged)"}</span></div>
      ${wt.closed?"":'<button class="btn big danger" data-act="sclose" style="margin-top:4px">CLOSE Q0 <span class="kbd-hint" style="font-size:12px">(Space)</span></button>'}`,anim:()=>{let t=St("syncCv");t&&Dh(t.getContext("2d"),t.width,t.height,wt)},onAct:t=>{let[n,s]=t.split(":");wt.closed||(n==="sv"&&(wt.isl.V=Math.max(200,Math.min(260,wt.isl.V+Number(s)))),n==="sf"&&(wt.isl.f=Math.round(Math.max(49,Math.min(51,wt.isl.f+Number(s)))*100)/100),n==="swap"&&(wt.swapped=!wt.swapped,lt.clack()),n==="permit"&&(w.inventory.includes("permit")?($f("permit"),w.permitIn=!0,lt.clack(),Ot("The interlock key turns \u2014 Q0 can now be closed.","good")):Ot("You have no permit card.","bad")),n==="sclose"&&A_())}},e.clock={title:"Wall clock",controls:()=>w.stage==="synced"||w.stage==="won"?"<p>It is ticking again \u2014 the 50 Hz are back. Somebody will have to set it right: it still lags by the length of the blackout.</p>":"<p>A mains-synchronous clock: its motor counts the 50 Hz of the grid. It stopped at <b>18:36:02</b> \u2014 the moment the grid went down.</p>",onOpen:()=>Rn("clock","Wall clock","Mains-synchronous clock, stopped at 18:36:02 when the grid went down.")},e.cabinet={say:()=>'Expense reports 2019\u20132023 and a folder marked "DO NOT OPEN \u2014 M.V.". It is empty.'},e.bin={say:()=>`Crumpled drafts. One says: "${vt.bands.join("-")}?? NO \u2014 the third band is the number of ZEROS. \u2014 M.V."`},e.boxes={say:()=>'Spare III-V test modules, still in their foam. The "THIS SIDE UP" arrows point down.'},e.papers={say:()=>"Test protocols for the PV rig. Somebody drew a cat in the margin."},e.cork={say:()=>"The duty rota, the guest Wi-Fi name, a lunch invite for 12:30. None of it opens anything. Probably."},e.exit={title:"Exit door",controls:()=>w.exitOpen?"<p>The door is open. Fresh air!</p>":"<p>The access control is dead: the building has no grid supply. Only the life-safety circuits run on the emergency generator.</p>"},e[i]}function Uf(){for(let i=0;i<9;i++)lt.beep(140+Math.random()*120,.09,"triangle",.05,i*.11)}function A_(){if(!wt.closed&&!wt.islandOn){lt.bad(),Ot("Q0 refuses: the island bus is dead \u2014 energise the lab cluster first.","bad");return}if(!Jt.permit||!w.permitIn){lt.bad(),Ot(Jt.permit?"Q0 is interlocked: insert the permit card first.":"Q0 is interlocked: no reconnection permit yet (gridctl).","bad");return}let i=wt.check();i.ok?(wt.closed=!0,lt.thunk(),lt.resolve(),ai("synced")):(wt.flash=Pt.reduceFlashing?.3:1,Gh(.5),lt.clack(),lt.thunk(),Ho(30,i.why))}function Wo(i){let e=Ye.panel(i);return e?{...e,lab:!0}:Yf(i)}function Zf(i){let e=Wo(i);e&&(Ai("panel"),w.panelId=i,w.panelVersion=-1,Ye.panel(i)&&(w.busSeen=!0),Fe.panelTitle.textContent=e.title,Fe.panel.classList.remove("hidden"),e.onOpen?.(),Kh(!0))}function Kh(i=!1){if(!w.panelId)return;let e=Wo(w.panelId),t=Ye.version*1e3+w.pver;if(i||w.panelVersion!==t)w.panelVersion=t,Fe.panelBody.innerHTML=`<div id="panelLive">${e.live?e.live():""}</div>${e.controls()}`;else if(e.live){let n=St("panelLive");n&&(n.innerHTML=e.live())}}function ri(i){let e=Wo(w.panelId);e&&(lt.click(),i.startsWith("usewheel")?w.inventory.includes("handwheel")?($f("handwheel"),Ye.action("wheel:1")):Ot("You have nothing that fits the spindle.","bad"):e.lab?(Ye.action(i),i==="pin:OK"&&Ye.s.sun.unlocked&&An(ce.keypadTex,(t,n,s)=>bo(t,n,s,!0))):e.onAct?.(i),w.pver++,Kh(!0))}Fe.panelBody.addEventListener("click",i=>{let e=i.target.closest("[data-act]");!e||e.disabled||ri(e.dataset.act)});function qr(i){if(!i)return;lt.init(),lt.click();let e=Yf(i)?.say;if(e){Ot(e());return}if(i==="pc"){w.termOpened=!0,Ai("terminal"),Fn.open();return}i==="door"&&Ye.s.door.state==="open"||Zf(i)}var Wr=new Qa;Wr.far=3.2;var R_=new pe(0,0);function C_(i,e){let t=new pe(i/innerWidth*2-1,-(e/innerHeight)*2+1);Wr.setFromCamera(t,Ft);let n=Wr.intersectObjects(Xh,!1)[0];n?.object.userData.id&&qr(n.object.userData.id)}function Jh(){Ai("grid"),Jt.open()}function $o(){w.mode==="start"||w.mode==="end"||(w.returnTo=["terminal","grid"].includes(w.mode)?w.mode:w.returnTo,w.mode==="terminal"&&Fn.close(),w.mode==="grid"&&Jt.close(),Ai("hint"),Kf(),Fe.hint.classList.remove("hidden"))}function Kf(){let i=T_(),e=w.hints.revealed[i.id]??0,t=[0,60,180];Fe.hint.querySelector(".hint-body").innerHTML=`
    ${i.tiers.slice(0,e).map((s,r)=>`<div class="hint-tier t${r}"><b>${["Nudge","Pointer","Solution"][r]}</b> ${s}</div>`).join("")||'<p class="note">Stuck? Reveal a hint for your current problem. Nudges are free; pointers and solutions cost time.</p>'}
    ${e<3?`<button class="btn ${e===2?"danger":""}" id="hintMore">${["Show a nudge (free)","Show a pointer (+1:00)","Show the solution (+3:00)"][e]}</button>`:""}`;let n=St("hintMore");n&&(n.onclick=()=>{w.hints.revealed[i.id]=e+1,w.hints.used++,t[e]&&Ho(t[e],"hint"),Kf()})}function jh(){if(w.mode==="start"||w.mode==="end")return;w.returnTo=["terminal","grid"].includes(w.mode)?w.mode:w.returnTo,w.mode==="terminal"&&Fn.close(),w.mode==="grid"&&Jt.close(),Ai("journal");let i=Object.values(w.journal).sort((e,t)=>e.t-t.t);St("jBadge")?.classList.remove("new"),Fe.journal.querySelector(".journal-body").innerHTML=`
    <div class="kv"><span>Time</span><span>${Yn(rr())} (${Yn(w.time.penalty)} penalties)</span><span>Hints used</span><span>${w.hints.used}</span>
    <span>Inventory</span><span>${w.inventory.map(e=>Zh[e]).join(", ")||"\u2014"}</span></div>
    ${i.length?i.map(e=>`<div class="jentry"><b>${e.title}</b><div>${e.text.replace(/\n/g,"<br>")}</div></div>`).join(""):'<p class="note">Clues you read or hear are collected here automatically.</p>'}`,Fe.journal.classList.remove("hidden")}function ar(i=!1){w.mode!=="end"&&(i||Ai("menu"),w.menuAt=performance.now(),Fe.menu.querySelector(".menu-actions").classList.toggle("hidden",i),Fe.menu.querySelector("h2").textContent=i?"Settings":"Menu",Fe.menu.querySelector("h3").classList.toggle("hidden",i),Fe.menu.querySelector(".settings-wrap").innerHTML=Af(Pt),Rf(Fe.menu,Pt,Gf),Fe.menu.classList.remove("hidden"),Fe.menu.dataset.fromStart=i?"1":"")}Fe.menu.addEventListener("click",i=>{let e=i.target.closest("[data-menu]")?.dataset.menu;if(e){if(e==="resume"){if(Fe.menu.dataset.fromStart){Fe.menu.classList.add("hidden");return}lt.init(),oi()}e==="hint"&&(Fe.menu.classList.add("hidden"),$o()),e==="journal"&&(Fe.menu.classList.add("hidden"),jh()),e==="restart"&&confirm("Restart this room from the beginning? Your progress will be lost.")&&(rn.del(sr),location.search=dn?`?seed=${dn}&autostart=1`:"?autostart=1"),e==="title"&&(or(),location.href=location.pathname)}});var P_={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",e:"KeyE",h:"KeyH",j:"KeyJ"," ":"Space",escape:"Escape",enter:"Enter",backspace:"Backspace",shift:"ShiftLeft",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"},Jf=i=>i.code||P_[i.key?.toLowerCase()]||i.key,I_=i=>/^\d$/.test(i.key)?Number(i.key):/^(?:Digit|Numpad)(\d)$/.test(i.code)?Number(i.code.slice(-1)):null;addEventListener("keydown",i=>{let e=Jf(i);if(!((i.target.tagName==="INPUT"||i.target.tagName==="SELECT")&&e!=="Escape")){if(w.mode==="start"&&e==="Escape"&&!Fe.menu.classList.contains("hidden")){Fe.menu.classList.add("hidden");return}if(!(w.mode==="start"||w.mode==="end")){if(e==="Escape"){if(w.mode==="menu"&&performance.now()-(w.menuAt||0)<200)return;if(w.mode==="grid"&&Jt.modalOpen()){Jt.$("gModal").classList.add("hidden");return}E_.includes(w.mode)?(i.preventDefault(),oi()):(w.mode==="paused"||w.mode==="play"&&!document.pointerLockElement)&&ar();return}if(w.mode==="panel"){let t=w.panelId;if(e==="KeyE"&&!i.repeat){oi();return}let n=I_(i),s=e==="Enter"||e==="NumpadEnter";t==="sunsim"&&!Ye.s.sun.unlocked&&(n!==null&&ri(`pin:${n}`),e==="Backspace"&&ri("pin:C"),s&&ri("pin:OK")),t==="drawer"&&!w.drawer.open&&(n!==null&&ri(`digit:${n}`),s&&ri("dopen")),t==="board"&&!w.board.solved&&(n>=1&&n<=4&&ri(`bt:${n-1}`),s&&ri("btest")),t==="sync"&&e==="Space"&&(i.preventDefault(),i.repeat||ri("sclose")),t==="door"&&s&&ri("door:open");return}if(e==="KeyH"&&["play","paused","hint"].includes(w.mode)){w.mode==="hint"?oi():$o();return}if(e==="KeyJ"&&["play","paused","journal"].includes(w.mode)){w.mode==="journal"?oi():jh();return}w.mode==="play"&&(bn[e]=!0,e==="Space"&&i.preventDefault(),e==="KeyE"&&!i.repeat&&qr(w.target))}}});addEventListener("keyup",i=>{bn[Jf(i)]=!1});function jf(i,e){let t=.0022*Pt.sens;De.yaw-=i*t,De.pitch=Math.max(-1.45,Math.min(1.45,De.pitch-e*t*(Pt.invertY?-1:1)))}addEventListener("mousemove",i=>{if(w.mode!=="play"||vn||document.pointerLockElement!==Ei||(Math.abs(i.movementX)>150||Math.abs(i.movementY)>150)&&performance.now()-Xf<150)return;let t=n=>Math.max(-400,Math.min(400,n));jf(t(i.movementX),t(i.movementY))});Ei.addEventListener("mousedown",i=>{w.mode==="play"&&!vn&&i.button===0&&qr(w.target)});function Of(i,e){let t=De.r,n=(s,r,a)=>r>s.minX-t&&r<s.maxX+t&&a>s.minZ-t&&a<s.maxZ+t;for(let s of M_)if(s.enabled!==!1&&n(s,i,e)&&!n(s,De.x,De.z))return!0;return!1}function D_(i){let e=0,t=0;w.mode==="play"&&((bn.KeyW||bn.ArrowUp)&&(e+=1),(bn.KeyS||bn.ArrowDown)&&(e-=1),(bn.KeyD||bn.ArrowRight)&&(t+=1),(bn.KeyA||bn.ArrowLeft)&&(t-=1),li.enabled&&(e+=li.move.y,t+=li.move.x));let n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let s=bn.ShiftLeft||bn.ShiftRight||qh,r=s?5.2:3,a=Math.sin(De.yaw),o=Math.cos(De.yaw),l=(-a*e+o*t)*r,c=(-o*e-a*t)*r,h=1-Math.exp(-12*i);De.vx+=(l-De.vx)*h,De.vz+=(c-De.vz)*h;let u=De.vx*i,d=De.vz*i;Of(De.x+u,De.z)?De.vx=0:De.x+=u,Of(De.x,De.z+d)?De.vz=0:De.z+=d;let f=Math.hypot(De.vx,De.vz);f>.3&&(De.bob+=i*f*2.6,De.stepAcc+=f*i,De.stepAcc>(s?.8:.65)&&(De.stepAcc=0,lt.step()));let g=Vf()+(s&&f>3.5&&!Pt.reducedMotion?6:0);Math.abs(Ft.fov-g)>.05&&(Ft.fov+=(g-Ft.fov)*Math.min(1,i*6),Ft.updateProjectionMatrix())}var Uh=new ei;function L_(i){let e=Ye.s,t=Ye.f,n=(s,r,a)=>s.on?s.ph<0?"no phase":e.trip[s.ph]?`${Vt[s.ph]} TRIPPED`:a?`${Vt[s.ph]} \xB7 ${r.toFixed(1)} kW`:"standby":"off";switch(i){case"inv_pv":return n(e.inv.pv,t.pv,t.pvAvail>0);case"inv_bat":return n(e.inv.bat,t.bat,e.inv.bat.ph>=0&&t.live[e.inv.bat.ph])+` \xB7 ${e.inv.bat.mode}`;case"inv_fc":return n(e.inv.fc,t.fc,t.fcAvail>0);case"battery":return`SOC ${(e.bat.soc*100).toFixed(0)} %`;case"h2tank":return e.h2.wheel?`${(e.h2.level*Ie.H2_KG*1e3).toFixed(0)} g \xB7 valve ${e.h2.valve?"open":"closed"}`:"handwheel missing";case"fuelcell":return e.fc.running?`running \xB7 ${t.fc.toFixed(1)} kW`:"stopped";case"electrolyzer":return e.elz.on?t.elz>0?"producing H\u2082":"no voltage":"off";case"sunsim":return e.sun.unlocked?e.sun.on?"lamps on":"unlocked":"locked";case"door":return{locked:Ye.doorReady()?"READY":"locked",opening:"opening\u2026",open:"open"}[e.door.state];case"bus":return e.trip.some(Boolean)?"TRIP!":`${t.live.filter(Boolean).length}/3 phases live`;case"drawer":return w.drawer.open?w.drawer.taken?"empty":"open":"locked";case"board":return w.board.solved?"OUT = 1":"";case"sync":return wt.closed?"closed \u2714":w.permitIn?"armed":Jt.permit?"insert permit":"interlocked";case"exit":return w.exitOpen?"open":"locked";case"rec1":case"rec2":case"rec3":case"rec4":return w.heard[i]?"played":"new";default:return""}}function N_(){let i=w.target;if(w.target=null,w.mode==="play"){Wr.setFromCamera(R_,Ft);let t=Wr.intersectObjects(Xh,!1)[0],n=t?.object.userData.id;if(n&&!(n==="door"&&Ye.s.door.state==="open"&&t.object===ce.door)&&!(n==="exit"&&w.exitOpen)){w.target=n;let s=L_(n);Fe.prompt.innerHTML=`<b>${li.enabled?"USE":"E"}</b> \xB7 ${t.object.userData.label}${s?` <span class="st">\xB7 ${s}</span>`:""}`,w.targetRoot=t.object.userData.root,Uh.setFromObject(w.targetRoot),Uh.expandByScalar(.02),ci.box.copy(Uh)}}let e=ds.select(w.target?[w.targetRoot]:[]);ci.visible=!!w.target&&!e,Fe.prompt.style.display=w.target?"block":"none",Fe.cross.classList.toggle("active",!!w.target),i!==w.target&&w.target&&lt.beep(2400,.015,"sine",.012)}var Oh=0,Fh=0,sn=0,U_=[0,1,2,0],O_=ce.labLights.map(()=>({on:!1,flicker:0})),Wh=Ye.s.door.state;function F_(i){let e=Ye.s,t=Ye.f;sn+=i;let n=w.stage==="synced"||w.stage==="won",s=(y,C,I)=>y+(C-y)*Math.min(1,i*I);ce.sunLampMat.emissiveIntensity=s(ce.sunLampMat.emissiveIntensity,e.sun.on?3:.05,3),ce.sunLight.intensity=s(ce.sunLight.intensity,e.sun.on?18:0,3),ce.sunCone.opacity=s(ce.sunCone.opacity,e.sun.on?.1:0,3);let r=Pt.reduceFlashing,a=w.cold??99;a<99&&(w.cold=a+i,a<1.2&&w.cold>=1.2&&(w.boltT=0,w.thunderIn=.35,w.thunderKm=1.2,Gh(.4)),a<2.4&&w.cold>=2.4&&lt.clack(),a<3.2&&w.cold>=3.2&&Bo("18:36:02 \u2014 the grid is gone.",4),w.cold>12&&(w.cold=99));let o=[[.07,1],[.18,0],[.06,1],[.3,0]],l=(y,C)=>{if(C&&!y.on&&(y.t=0,y.step=-1),y.on=C,!C)return 0;if(y.t=(y.t??9)+i,r)return 1;let I=0;for(let F=0;F<o.length;F++)if(I+=o[F][0],y.t<I)return o[F][1]&&y.step!==F&&(y.step=F,lt.tink()),o[F][1];return 1},c=0;ce.labLights.forEach((y,C)=>{let I;a<1.2?I=1:a<1.6?I=!r&&a>1.32&&a<1.42?1:0:I=l(O_[C],n||t.live[U_[C]]),y.light.intensity=I?s(y.light.intensity,7,25):s(y.light.intensity,0,30),y.mat.emissiveIntensity=I?1.6:.05,I&&c++}),w.syncT!==void 0&&(w.syncT+=i),ce.ctrlLights.forEach((y,C)=>{let I=n&&(w.syncT===void 0||w.syncT>.9+C*.8),F=l(y,I);y.light.intensity=F?s(y.light.intensity,3.2,20):0,y.mat.emissiveIntensity=F?1.2:.05}),n&&Math.floor(sn)!==w.clockSec&&(w.clockSec=Math.floor(sn),ce.setClocks(ce.CLOCK_STOPPED+(w.syncT??0)));let h=Bf-rr()<0;ce.emergency.forEach((y,C)=>{!r&&Math.random()<.0015&&(y.userData.stutter=.12),y.userData.stutter=Math.max(0,(y.userData.stutter||0)-i);let I=a<2.4+C*.12;y.intensity=I?0:y.userData.stutter>0?.8:h?Math.sin(sn*7+C)>.6?.5:1.3:2.6}),ce.hemi.intensity=s(ce.hemi.intensity,.08+.35*(c/4)+(n?.3:0),3),On.environmentIntensity=s(On.environmentIntensity,.04+.18*(c/4)+(n?.12:0),3);let u=ce.outside.u,d=u.uEve.value;!n&&w.mode!=="start"&&(w.boltIn=(w.boltIn??5)-i,w.boltIn<=0&&(w.boltIn=7+Math.random()*16,w.boltT=0,ce.outside.strike(),w.thunderKm=2+Math.random()*6,w.thunderIn=w.thunderKm*1e3/343)),w.boltT!==void 0&&(w.boltT+=i);let f=w.boltT??99,g=(y,C)=>f<y?0:C*Math.exp(-(f-y)/.08),v=f>3?0:r?.3*Math.min(1,f/.15)*Math.exp(-f/.5):Math.min(1,g(0,1)+g(.24,.6));w.thunderIn>0&&(w.thunderIn-=i)<=0&&lt.thunder(Math.min(1,2.6/w.thunderKm)*(De.z>-5?.6:1),w.thunderKm),ce.outside.update(i,v),ce.dropMat.opacity=Math.min(1,u.uRain.value*1.4),ce.rainMat.opacity=u.uRain.value,ce.rainTex.offset.y=(ce.rainTex.offset.y+i*.03)%1;let p=ce.ctrlLights[0].light.intensity/3.2;u.uRoom.value.setRGB(.012+.08*p,.016+.07*p,.02+.06*p);let m=d*5,E=v*3.5;ce.windowLight.intensity=m+E,m+E>0&&ce.windowLight.color.setRGB((1*m+.75*E)/(m+E),(.68*m+.82*E)/(m+E),(.4*m+1*E)/(m+E)),ce.skyLight.intensity=d*7,w.syncT>3&&!w.shadowRedone&&(w.shadowRedone=!0,ce.windowLight.shadow.needsUpdate=!0);let _=(w.catEye=Math.max(0,(w.catEye||0)-i))>0;ce.cat.eyeOpen.visible=_,ce.cat.lids.forEach(y=>{y.visible=!_}),w.catLift=s(w.catLift||0,_?1:0,4),ce.cat.lift(w.catLift);for(let[y,C]of[[ce.dustSun,e.sun.on?.7:0],[ce.dustBeam,d*.8]]){if(y.material.opacity=s(y.material.opacity,C,2),y.material.opacity<.01)continue;let I=y.geometry.attributes.position.array,F=y.userData.box,H=y.userData.seed;for(let Z=0;Z<I.length;Z+=3)I[Z]+=Math.sin(sn*.25+Z*.37+H)*.012*i,I[Z+1]-=(.012+Z%11*.002)*i,I[Z+2]+=Math.cos(sn*.21+Z*.29+H)*.012*i,I[Z+1]<F[2]&&(I[Z+1]=F[3]);y.geometry.attributes.position.needsUpdate=!0}ce.busbars.forEach((y,C)=>{y.material.emissive.set(e.trip[C]?Math.sin(sn*10)>0?"#ff0000":"#330000":Ti[C]),y.material.emissiveIntensity=e.trip[C]?1.5:.05+Math.min(3,t.load[C]*.6)}),ce.breakers.forEach((y,C)=>{y.position.y=e.trip[C]?.5:.6,y.material.color.set(e.trip[C]?13639712:2763306)});let x=(y,C)=>{y.material.emissive.set({off:"#111",idle:"#ffa020",run:"#20ff60",fault:"#ff2020"}[C]),y.material.emissiveIntensity=C==="off"?0:C==="fault"&&Math.sin(sn*8)<0?.2:2},P=(y,C)=>y.on?y.ph>=0&&e.trip[y.ph]?"fault":C?"run":"idle":"off";x(ce.invLeds.inv_pv,P(e.inv.pv,t.pvAvail>0&&e.inv.pv.ph>=0)),x(ce.invLeds.inv_bat,P(e.inv.bat,e.inv.bat.ph>=0&&t.live[e.inv.bat.ph])),x(ce.invLeds.inv_fc,P(e.inv.fc,t.fcAvail>0&&e.inv.fc.ph>=0));let M=Math.ceil(e.bat.soc*10-.001);ce.socLeds.forEach((y,C)=>{let I=C<M||t.bat<0&&C===M&&Math.sin(sn*6)>0;y.material.emissive.set(I?e.bat.soc<.25?"#ff3020":e.bat.soc<.5?"#ffb020":"#20ff60":"#111"),y.material.emissiveIntensity=I?1.8:0}),ce.elzGlow.material.emissiveIntensity=t.elz>0?1.5+Math.sin(sn*5)*.8:.05,ce.fcGlow.material.emissiveIntensity=t.fc>0?2:e.fc.running?.6:.05,ce.h2Bar.scale.y=Math.max(.001,e.h2.level),ce.valve.visible=e.h2.wheel,ce.valveTag.visible=!e.h2.wheel,ce.valve.rotation.z=s(ce.valve.rotation.z,e.h2.valve?Math.PI*1.5:0,4);let T=Math.sin(sn*1.9);ce.cat.body.scale.set(1+T*.012,1+T*.035,1),ce.cat.tail.rotation.x=Math.sin(sn*.55)*.1+Math.sin(sn*1.7)*.025,Math.random()<i*.12&&(w.earFlick={ear:Math.random()<.5?0:1,t:.35}),ce.cat.ears.forEach((y,C)=>{y.rotation.x=-.25+(w.earFlick&&w.earFlick.ear===C?Math.sin((.35-w.earFlick.t)*36)*.35*(w.earFlick.t/.35):0)}),w.earFlick&&(w.earFlick.t-=i)<=0&&(w.earFlick=null);let D=e.door.state==="open"?1.65:e.door.state==="opening"?1.65*Math.min(1,e.door.t/Ie.DOOR_T):0;ce.door.position.x=s(ce.door.position.x,D,4),ce.doorCollider.enabled=ce.door.position.x<1.35,ce.doorLed.material.emissive.set(e.door.state==="open"?"#20ff60":e.door.state==="opening"?Math.sin(sn*12)>0?"#ffb020":"#ff2020":Ye.doorReady()?"#ffb020":"#ff2020"),Wh!=="open"&&e.door.state==="open"&&Gh(.35),Wh=e.door.state,ce.exitDoor.position.z=s(ce.exitDoor.position.z,w.exitOpen?-6.4:-8,1.2),ce.exitCollider.enabled=ce.exitDoor.position.z<-6.7,ce.exitLed.material.emissive.set(w.exitOpen?"#20ff60":"#ff2020"),ce.drawer.position.z=s(ce.drawer.position.z,w.drawer.open?4.15:4.55,5),ce.drawerWheel.visible=!w.drawer.taken;for(let[y,C]of Object.entries(ce.recorders))C.material.emissive.set(w.heard[y]?"#20ff60":"#ff2020"),C.material.emissiveIntensity=w.heard[y]?.6:Math.sin(sn*4)>0?2:.2;ce.boardToggles.forEach((y,C)=>{y.rotation.x=w.board.bits[C]?-.5:.5}),ce.boardLed.material.emissive.set(w.board.solved?"#20ff60":"#330000"),ce.diagLeds.forEach((y,C)=>{let I=w.diag&&vt.binStr[C]==="1";y.material.emissive.set(I?"#ff3020":"#200505"),y.material.emissiveIntensity=I?2.2:1}),ce.rackLeds.forEach((y,C)=>{y.material.emissiveIntensity=Math.sin(sn*(3+C*.7)+C)>.2?1.5:.1});let b=wt.lamps();ce.syncLamps.forEach((y,C)=>{y.material.emissive.set("#ffb060"),y.material.emissiveIntensity=.05+b[C]*3}),ce.syncHandle.rotation.x=wt.closed?.6:0,Fh-=i,De.z<-5&&Fh<=0&&(Fh=.05,An(ce.syncTex,(y,C,I)=>Dh(y,C,I,wt,{compact:!0}))),Oh-=i,Oh<=0&&(Oh=.25,k_())}var tr={};function k_(){let i=Ye.s,e=Ye.f,t=JSON.stringify([i.door.state,e.head.map(a=>a.toFixed(1)),i.door.t.toFixed(1),Pt.palette]);tr.door!==t&&(tr.door=t,An(ce.doorScreenTex,(a,o)=>{a.fillStyle="#061009",a.fillRect(0,0,o,320),a.font=`bold 26px ${He.mono}`,a.textAlign="center";let l=Ye.doorReady();a.fillStyle=i.door.state==="open"?"#3eff7a":l?"#ffd24a":"#ff4a4a",a.fillText(i.door.state==="open"?"OPEN":i.door.state==="opening"?"OPENING":l?"READY":"LOCKED",o/2,36),a.font=`17px ${He.mono}`,a.fillStyle="#7fbf8f",a.fillText(`drive: ${Ie.DOOR_P} kW / phase`,o/2,64),Vt.forEach((c,h)=>{let u=100+h*56;a.textAlign="left",a.fillStyle=Ti[h],a.font=`bold 22px ${He.mono}`,a.fillText(c,14,u+16),a.fillStyle="#1a2a1e",a.fillRect(60,u,180,22),a.fillStyle=e.head[h]>=Ie.DOOR_P?"#3eff7a":"#ff9a4a",a.fillRect(60,u,180*Math.max(0,Math.min(1,e.head[h]/6)),22),a.fillStyle="#fff",a.fillRect(60+180*Ie.DOOR_P/6,u-3,2,28),a.fillStyle="#cfe",a.font=`15px ${He.mono}`,a.fillText(`${e.head[h].toFixed(1)} kW ${e.head[h]>=Ie.DOOR_P?"\u2714":""}`,64,u+42)}),a.textAlign="center",a.fillStyle="#ffd24a",a.font=`18px ${He.mono}`,i.door.state==="opening"&&a.fillText(`${i.door.t.toFixed(1)} / ${Ie.DOOR_T} s`,o/2,300)}));let n=Math.sin(sn*4)>0,s=w.stage+n;tr.pc!==s&&(tr.pc=s,An(ce.pcScreenTex,a=>{a.fillStyle="#020c05",a.fillRect(0,0,512,320),a.fillStyle="#5dff8f",a.font=`20px ${He.mono}`,a.textAlign="left";let o=w.stage==="won"||w.stage==="synced"?["gridctl \u25B8 connected","","Q0: CLOSED","EXIT: UNLOCKED \u2714"]:w.stage==="permit"?["gridctl \u25B8 schedule OK","","reconnection permit \u2714","sync at tie panel Q0"]:["labctl-01 login:","","Solar Test Laboratory","running on UPS","",w.stage==="root"?"# root session active":"grid reconnection: root required"];o.forEach((l,c)=>a.fillText(l,24,40+c*30)),n&&a.fillRect(24+a.measureText(o[0]).width+8,24,11,20)}));let r=JSON.stringify([e.pv.toFixed(1),(i.bat.soc*100).toFixed(0),(i.h2.level*100).toFixed(0),i.fc.running,w.stage,e.load.map(a=>a.toFixed(1)),Pt.palette]);tr.wall!==r&&(tr.wall=r,An(ce.wallScreenTex,a=>{a.fillStyle="#07111c",a.fillRect(0,0,768,400),a.fillStyle="#ffd24a",a.font=`bold 34px ${He.sans}`,a.textAlign="left",a.fillText("SOLAR TEST LAB \xB7 GRID STATUS",30,52),a.font=`24px ${He.mono}`;let o=w.stage==="synced"||w.stage==="won";[["Public grid",o?"CONNECTED \u2714":w.stage==="permit"?"LIVE at incomer \xB7 site OFF":"LOST (storm)"],["PV (test rig)",`${e.pv.toFixed(2)} kW`],["Battery",`${(i.bat.soc*100).toFixed(0)} % SOC`],["H\u2082 tank",`${(i.h2.level*Ie.H2_KG*1e3).toFixed(0)} g`],["Fuel cell",i.fc.running?"RUNNING":"STOPPED"],["Reconnection",o?"DONE":w.stage==="permit"?"PERMIT \u2714 \u2014 sync Q0":"root required"]].forEach(([c,h],u)=>{a.fillStyle="#9fb0c0",a.fillText(c,30,105+u*44),a.fillStyle=o||u?"#5dff8f":"#ff6b77",a.fillText(h,300,105+u*44)}),Vt.forEach((c,h)=>{let u=Math.min(200,e.load[h]*35);a.fillStyle=Ti[h],a.fillRect(600+h*50,330-u,40,u+2),a.fillText(c,602+h*50,370)})}))}function B_(){let i=Ye.s,e=Ye.f;Fe.objective.innerHTML=`<span class="lbl">Objective</span>${S_()}`;let t=w.stage==="lab"&&w.busSeen;Fe.busHud.style.display=t?"":"none",t&&(Fe.busHud.innerHTML='<div style="color:#ffd24a;margin-bottom:4px">MAIN BUS \xB7 headroom</div>'+Vt.map((s,r)=>`<div class="row"><span style="color:${Ti[r]}">${s}${i.trip[r]?' <span class="bad">TRIP</span>':e.live[r]?"":' <span style="color:#778">dead</span>'}</span><span>${e.live[r]?e.head[r].toFixed(2)+" kW":"\u2014"} ${e.head[r]>=Ie.DOOR_P?"\u2714":""}</span></div>
        <div class="bar"><i style="width:${Math.max(0,Math.min(100,e.head[r]/6*100))}%;background:${e.head[r]>=Ie.DOOR_P?"#3ecf7a":Ti[r]}"></i><span class="mark" style="left:50%"></span></div>`).join("")+`<div class="row"><span>Battery</span><span>${(i.bat.soc*100).toFixed(0)} %</span></div><div class="row"><span>H\u2082 tank</span><span>${(i.h2.level*Ie.H2_KG*1e3).toFixed(0)} g</span></div>`);let n=Bf-rr();Fe.timer.innerHTML=`\u23F1 ${n>=0?Yn(n):'<span class="bad">'+Yn(n)+"</span>"} <span class="sub">${w.stage==="synced"||w.stage==="won"?"grid restored":n>=0?"emergency light":"overtime"}</span>`}function z_(i){let e=Ye.s,t=Ye.f,n=w.stage==="synced"||w.stage==="won",s=De.z>-5?1:De.x>5&&w.exitOpen?.2:.55;lt.update(Ft,{rain:w.mode==="start"?.4:ce.outside.u.uRain.value,inside:w.outro?0:s,purr:1,drone:!n&&w.mode!=="start"&&(w.cold??99)>3?1:0,evening:ce.outside.u.uEve.value,hum:(w.cold??99)<1.2?1:Math.min(1,t.load.reduce((r,a)=>r+a,0)/9)+(n?.5:0),fan:t.fc>0?1:e.fc.running?.4:0,bubbles:t.elz>0?1:0,ballast:e.sun.on?1:0,motor:e.door.state==="opening"?1:Math.abs(ce.exitDoor.position.z-(w.exitOpen?-6.4:-8))>.05?.8:0},i)}function or(){w.mode==="start"||w.stage==="won"||w.noSave||rn.set(sr,{v:2,seed:dn,stage:w.stage,at:Date.now(),player:{x:De.x,z:De.z,yaw:De.yaw,pitch:De.pitch},sim:Ye.s,term:Fn.serialize(),grid:Jt.serialize(),sync:wt.serialize(),G:{inventory:w.inventory,journal:w.journal,heard:w.heard,hints:w.hints,time:w.time,drawer:w.drawer,board:w.board,diag:w.diag,f2seen:w.f2seen,exitOpen:w.exitOpen,catPets:w.catPets,termOpened:w.termOpened,gridResult:w.gridResult,permitIn:w.permitIn,busSeen:w.busSeen}})}function Qf(i){if(Object.assign(Ye.s,JSON.parse(JSON.stringify(i.sim))),Ye.s.door.state==="opening"&&(Ye.s.door.state="locked",Ye.s.door.t=0),Ye.version++,Ye.f=Ye.compute(),Wh=Ye.s.door.state,zo=Ye.s.door.state==="open",Object.assign(De,i.player),Fn.restore(i.term),Jt.restore(i.grid),wt.restore(i.sync),Object.assign(w,i.G),w.stage=i.stage,Ye.s.sun.unlocked&&An(ce.keypadTex,(e,t,n)=>bo(e,t,n,!0)),ce.door.position.x=Ye.s.door.state==="open"?1.65:0,ce.exitDoor.position.z=w.exitOpen?-6.4:-8,ce.drawer.position.z=w.drawer.open?4.15:4.55,qf(),w.stage==="permit"){for(let e of["restored","evening"])for(let t of ce.outside.prepare(e))Xt.initTexture(t);ce.outside.setMode("restored",!0)}(w.stage==="synced"||w.stage==="won")&&(ce.outside.setMode("evening",!0),w.syncT=99),ce.windowLight.shadow.needsUpdate=!0,Vo()}addEventListener("pagehide",or);function H_(){let i=rn.get(Vh)||{},e=zf(),t=h=>{let u=rn.get(Fo(h));return u&&u.stage!=="won"?u:null},n=t(0),s=t(e),r=(h,u)=>h?`<button class="btn big" data-start="${u}">Continue ${u==="cont-classic"?"classic":"daily"} <span class="small">(${Yn(h.G.time.elapsed+h.G.time.penalty)})</span></button>`:"",a=St("startCard"),o=rn.get($h)||[],l=0;for(let h=new Date,u=0;u<400;u++,h.setDate(h.getDate()-1)){let d=h.getFullYear()*1e4+(h.getMonth()+1)*100+h.getDate();if(i[d])l++;else if(u>0)break}let c=Object.entries(i).sort((h,u)=>h[0]==="0"?-1:u[0]==="0"?1:u[0]-h[0]).slice(0,4);a.innerHTML=`<h1>${fo.title}</h1>
    <p class="lead">${fo.lead}</p>
    <div class="controls-help">${vn?"<div>Left thumb: move</div><div>Right thumb: look</div><div>Tap an object / USE: interact</div><div>\u{1F4A1} hints \xB7 \u{1F4D3} journal</div>":"<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move \xB7 <kbd>Shift</kbd> run</div><div><kbd>Mouse</kbd> look</div><div><kbd>E</kbd>/<kbd>Click</kbd> use</div><div><kbd>H</kbd> hint</div><div><kbd>J</kbd> journal</div><div><kbd>Esc</kbd> menu</div>"}</div>
    <div class="start-btns">
      ${r(n,"cont-classic")}${r(s,"cont-daily")}
      <button class="btn big ${n||s?"alt":""}" data-start="classic">New game \xB7 Classic room</button>
      <button class="btn big alt" data-start="daily">${s?"Restart":"Play"} daily room \xB7 ${String(e).slice(6)}.${String(e).slice(4,6)}.</button>
      <button class="btn" data-start="settings">\u2699 Settings</button>
    </div>
    ${c.length?`<p class="note">Best: ${c.map(([h,u])=>`${h==="0"?"Classic":"Daily "+String(h).slice(6)+"."+String(h).slice(4,6)+"."} ${Yn(u.time)} (${u.rank})`).join(" \xB7 ")}${l>1?` \xB7 \u{1F525} daily streak ${l}`:""}</p>`:""}
    ${o.length?`<p class="note trophies">\u{1F3C6} ${o.length}/${ep.length}: ${o.join(" \xB7 ")}</p>`:""}
    <p class="note">Every code in a daily room is different. Progress is saved automatically in this browser.</p>`,a.querySelectorAll("[data-start]").forEach(h=>h.addEventListener("click",()=>{let u=h.dataset.start;if(lt.init(),u==="settings"){ar(!0);return}if(u==="cont-classic"||u==="cont-daily"){let f=u==="cont-daily"?e:0;if(f!==dn){location.search=f?`?seed=${f}&continue=1`:"?continue=1";return}Qf(rn.get(sr)),Ff(!1);return}let d=u==="daily"?e:0;if(!((d?s:n)&&!confirm("Start this room over? The run in progress will be lost."))){if(rn.del(Fo(d)),d!==dn){location.search=d?`?seed=${d}&autostart=1`:"?autostart=1";return}Ff(!0)}})),Fe.start.classList.remove("hidden")}function Ff(i){Fe.start.classList.add("hidden"),Fe.hud.classList.remove("hidden"),w.mode="paused",i&&tp(),li.enable(vn),vn?Xr():Go(),lt.init(),Ot(i&&dn?`Daily room ${dn}: every code is different today.`:"Welcome back."),Vo()}var $h="ple-achievements",ep=["No hints","No breaker trips","Grid wizard (3\u2605)","Under 30 minutes","Cat person","Heard every memo","Clean logic"];function tp(){w.coldPending=!0,Rn("brief","Briefing",fo.body.replace(/<br>/g,`
`))}function V_(){w.outro={t:0,x0:De.x,z0:De.z,yaw0:De.yaw,pitch0:De.pitch,bells:!1},w.mode="outro",document.pointerLockElement&&document.exitPointerLock(),$r(),Fe.hud.classList.add("hidden"),Fe.prompt.style.display="none",ci.visible=!1,ds.select([]),nr.length=0,Yh(),ir.classList.remove("show")}function G_(i){let e=w.outro;e.t+=i;let t=(a,o)=>{let l=Math.max(0,Math.min(1,(e.t-a)/(o-a)));return l*l*(3-2*l)},n=t(0,3),s=t(2.8,7.2);De.x=e.x0+(10.4-e.x0)*n+.3*s,De.z=e.z0+(-8-e.z0)*n;let r=(-Math.PI/2-e.yaw0+Math.PI*3)%(Math.PI*2)-Math.PI;De.yaw=e.yaw0+r*Math.min(1,n*1.6)+(.24+Math.PI/2)*s,De.pitch=e.pitch0+(.03-e.pitch0)*n,wi.visible=Ft.position.x>8.93,!e.bells&&e.t>3.4&&(e.bells=!0,[0,2.1,4.2,6.3].forEach((a,o)=>lt.bell(o%2?110:98,a,.045))),e.t>9.5&&!e.faded&&(e.faded=!0,ko.classList.add("on")),e.t>11&&!e.done&&(e.done=!0,np(),setTimeout(()=>ko.classList.remove("on"),300))}function np(){ai("won"),Ai("end");let i=rr(),e=af.find(([c])=>i/60<c)[1],t=rn.get(Vh)||{},n=String(dn),s=!w.noSave&&(!t[n]||i<t[n].time);s&&(t[n]={time:i,rank:e},rn.set(Vh,t)),rn.del(sr);let r=w.gridResult,a=[[w.hints.used===0,"No hints"],[Ye.s.stats.trips===0,"No breaker trips"],[r?.stars===3,"Grid wizard (3\u2605)"],[i<30*60,"Under 30 minutes"],[w.catPets>0,"Cat person"],[Object.keys(w.heard).length===4,"Heard every memo"],[w.board.fails===0,"Clean logic"]];w.noSave||rn.set($h,ep.filter(c=>(rn.get($h)||[]).includes(c)||a.some(([h,u])=>h&&u===c)));let o=Object.entries(w.time.splits).filter(([c])=>Lf[c]).map(([c,h])=>`<span>${Lf[c]}</span><span>${Yn(h)}</span>`).join(""),l=`\u26A1 Power Lab Escape \xB7 ${dn?"Daily "+dn:"Classic"} \xB7 ${Yn(i)} \xB7 ${w.hints.used} hints \xB7 grid ${r?"\u2605".repeat(r.stars):"\u2013"} \xB7 "${e}"`;St("endCard").innerHTML=`<h1>\u{1F307} YOU ESCAPED</h1>
    <p class="lead">Evening. The storm has passed, the sun is going down behind the Dom, and the lab hums on the grid again. Rank: <b>${e}</b>${s?" \xB7 new personal best!":""}</p>
    <div class="res">${o}<span class="tot">Total (incl. ${Yn(w.time.penalty)} penalties)</span><span class="tot">${Yn(i)}</span>
      <span>Hints used</span><span>${w.hints.used}</span><span>Breaker trips</span><span>${Ye.s.stats.trips}</span>
      ${r?`<span>Dispatch score</span><span>${"\u2605".repeat(r.stars)}${"\u2606".repeat(3-r.stars)} ${(r.ratio*100).toFixed(0)} %</span>`:""}</div>
    <div class="ach">${a.map(([c,h])=>`<span class="${c?"got":""}">${c?"\u{1F3C6}":"\xB7"} ${h}</span>`).join("")}</div>
    <div class="start-btns">
      <button class="btn big" id="shareBtn">Copy result</button>
      <button class="btn big alt" id="dailyBtn">Play the daily room</button>
      <button class="btn" id="againBtn">Play classic again</button>
      <button class="btn" id="keepBtn">Keep exploring</button>
    </div>`,Fe.end.classList.remove("hidden"),lt.fanfare(),St("shareBtn").onclick=()=>{navigator.clipboard?.writeText(l).then(()=>Ot("Result copied!","good"),()=>Ot(l))},St("dailyBtn").onclick=()=>{location.search=`?seed=${zf()}&autostart=1`},St("againBtn").onclick=()=>{location.search="?autostart=1"},St("keepBtn").onclick=()=>{Fe.end.classList.add("hidden"),Fe.hud.classList.remove("hidden"),wi.visible=!1,Object.assign(De,{x:7.2,z:-8,yaw:Math.PI/2}),w.outro=null,w.mode="paused",oi()}}var kf=performance.now(),kh=0,Bh=5,zo=Ye.s.door.state==="open";function ip(i){let e=Math.min(.1,(i-kf)/1e3);kf=i,["play","panel","terminal","grid","hint","journal"].includes(w.mode)&&(Ye.tick(e),wt.islandOn=Ye.s.grid||Ye.f.live.some(Boolean),wt.tick(e),w.stage!=="won"&&(w.time.elapsed+=e));for(let r of Ye.events.splice(0))w.stage!=="lab"&&De.z<-5||(Ot(r.msg,r.kind),r.sfx?lt[r.sfx]?.():r.kind==="bad"?lt.bad():r.kind==="good"&&lt.good());if(Ye.s.door.state==="open"&&!zo&&(zo=!0,ai("control"),Ot("The booth door slides open. On to the control room!","good")),w.board.solved&&!w.boardDrawn&&(w.boardDrawn=!0,An(ce.boardSegTex,(r,a,o)=>Ph(r,a,o,vt.f3,!0))),(w.mode==="play"||w.mode==="paused")&&D_(e),w.stage==="synced"&&w.mode==="play"){let r=ce.exitTrigger;De.x>r.minX&&De.x<r.maxX&&De.z>r.minZ&&De.z<r.maxZ&&V_()}(w.mode==="outro"||w.outro&&!w.outro.done)&&G_(e);let n=Pt.reducedMotion?0:Math.sin(De.bob)*.03*Math.min(1,Math.hypot(De.vx,De.vz)/3);w.shake=Math.max(0,w.shake-e);let s=w.shake>0?Math.sin(w.shake*45)*w.shake*.09:0;Ft.position.set(De.x+w.shakeDir.x*s,De.eye+n+w.shakeDir.y*s,De.z+w.shakeDir.z*s),Ft.rotation.set(De.pitch,De.yaw,0),w.mode==="start"&&(Ft.position.set(Math.sin(i/9e3)*2,1.9,2.8),Ft.rotation.set(-.12,Math.sin(i/9e3)*.5,0)),N_(),F_(e),z_(e),w.mode==="panel"&&Wo(w.panelId)?.anim?.(e),kh-=e,kh<=0&&(kh=.2,B_(),w.mode==="panel"&&Kh()),Gr>0&&(Gr-=e,Gr<=0&&Yh()),Bh-=e,Bh<=0&&(Bh=5,or()),w.mode!=="grid"&&ds.render(e,wi.visible||["panel","terminal","journal","hint","menu"].includes(w.mode)),requestAnimationFrame(ip)}requestAnimationFrame(ip);function zh(){Fe.start.classList.add("hidden"),Fe.hud.classList.remove("hidden"),w.mode="paused",li.enable(vn),Fe.resume.classList.remove("hidden")}Fe.resume.textContent=vn?"\u25B6 Tap to play":"\u25B6 Click to play";var Hh=rn.get(sr),Uo=Oo.get("skip");if(Uo){w.noSave=!0;let i=Ye.s;Object.assign(i.sun,{unlocked:!0,on:!0}),i.door.state="open",zo=!0,ce.door.position.x=1.65,ai("control"),De.z=-7,De.yaw=0,zh(),Uo==="terminal"&&(Ai("terminal"),Fn.open()),Uo==="grid"&&(Fn.stack.push({user:"root",cwd:"/root"}),ai("root"),Jh()),Uo==="sync"&&(ai("root"),Jt.permit=!0,ai("permit"),De.x=3.6,De.z=-10.6,De.yaw=-Math.PI/2)}else Oo.get("continue")&&Hh&&(Hh.seed||0)===dn?(Qf(Hh),zh(),Ot("Welcome back.")):Oo.get("autostart")?(rn.del(sr),zh(),tp(),dn&&Ot(`Daily room ${dn}: every code is different today.`)):H_();window.__game={player:De,sim:Ye,G:w,P:vt,interact:qr,terminal:Fn,grid:Jt,sync:wt,refs:ce,openPanel:Zf,setStage:ai,win:np,save:or,postfx:ds,renderer:Xt};St("loading")?.remove();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

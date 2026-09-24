(()=>{var Qc="170";var mp=0,cu=1,gp=2;var na=1,vp=2,vi=3,zi=0,cn=1,An=2,Wt=0,Is=1,Hi=2,hu=3,uu=4,eh=5,Nn=100,yp=101,_p=102,xp=103,bp=104,$s=200,Mp=201,Sp=202,Tp=203,Cl=204,Pl=205,ia=206,Ep=207,sa=208,wp=209,Ap=210,Rp=211,Cp=212,Pp=213,Ip=214,Il=0,Ll=1,Dl=2,Us=3,Nl=4,Ul=5,Fl=6,Ol=7,bd=0,Lp=1,Dp=2,Bi=0,th=1,nh=2,ih=3,Cr=4,Np=5,sh=6,rh=7;var Md=300,Fs=301,Os=302,kl=303,Bl=304,ra=306,Kt=1e3,os=1001,zl=1002,hn=1003,Up=1004;var Zr=1005;var ei=1006,qa=1007;var as=1008;var Gn=1009,Sd=1010,Td=1011,Mr=1012,oh=1013,ls=1014,_i=1015,un=1016,ah=1017,lh=1018,Vi=1020,Ed=35902,wd=1021,Ad=1022,Rn=1023,Rd=1024,Cd=1025,Ls=1026,Gi=1027,Pd=1028,ch=1029,Id=1030,hh=1031;var uh=1033,So=33776,To=33777,Eo=33778,wo=33779,Hl=35840,Vl=35841,Gl=35842,Wl=35843,$l=36196,Xl=37492,ql=37496,Yl=37808,Zl=37809,Kl=37810,Jl=37811,jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,Ao=36492,lc=36494,cc=36495,Ld=36283,hc=36284,uc=36285,dc=36286;var Ro=2300,fc=2301,Ya=2302,du=2400,fu=2401,pu=2402;var Fp=3200,Op=3201;var dh=0,kp=1,Qn="",zt="srgb",Xs="srgb-linear",oa="linear",Mt="srgb";var gs=7680;var mu=519,Bp=512,zp=513,Hp=514,Dd=515,Vp=516,Gp=517,Wp=518,$p=519,gu=35044;var vu="300 es",xi=2e3,Co=2001,Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Za=Math.PI/180,Po=180/Math.PI;function Pr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function Xp(i,e){return(i%e+e)%e}function Ka(i,e,t){return(1-t)*i+t*e}function hr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class i{constructor(e,t,n,s,r,o,a,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,h)}set(e,t,n,s,r,o,a,l,h){let c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],S=s[1],_=s[4],x=s[7],A=s[2],M=s[5],T=s[8];return r[0]=o*v+a*S+l*A,r[3]=o*p+a*_+l*M,r[6]=o*m+a*x+l*T,r[1]=h*v+c*S+u*A,r[4]=h*p+c*_+u*M,r[7]=h*m+c*x+u*T,r[2]=d*v+f*S+g*A,r[5]=d*p+f*_+g*M,r[8]=d*m+f*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8];return t*o*c-t*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*h-c*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(c*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-h*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new st;function Nd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qp(){let i=Io("canvas");return i.style.display="block",i}var yu={};function vr(i){i in yu||(yu[i]=!0,console.warn(i))}function Yp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Zp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var dt={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?oa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _u=[.64,.33,.3,.6,.15,.06],xu=[.2126,.7152,.0722],bu=[.3127,.329],Mu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[Xs]:{primaries:_u,whitePoint:bu,transfer:oa,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:xu,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:_u,whitePoint:bu,transfer:Mt,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:xu,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});var vs,pc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=Io("canvas")),vs.width=e.width,vs.height=e.height;let n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Io("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jp=0,Lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ja(s[o].image)):r.push(ja(s[o]))}else r=ja(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jp=0,_n=class i extends Wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=os,s=os,r=ei,o=as,a=Rn,l=Gn,h=i.DEFAULT_ANISOTROPY,c=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Pr(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kt:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kt:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Md;_n.DEFAULT_ANISOTROPY=1;var Tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(h+1)/2,x=(f+1)/2,A=(m+1)/2,M=(c+d)/4,T=(u+v)/4,L=(g+p)/4;return _>x&&_>A?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=T/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=T/r,s=L/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-v)/S,this.z=(d-c)/S,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mc=class extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new _n(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Do=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $i=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||h!==f||c!==g){let p=1-a,m=l*d+h*f+c*g+u*v,S=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let A=Math.sqrt(_),M=Math.atan2(A,m*S);p=Math.sin(p*M)/A,a=Math.sin(a*M)/A}let x=a*S;if(l=l*p+d*x,h=h*p+f*x,c=c*p+g*x,u=u*p+v*x,p===1-a){let A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+c*u+l*f-h*d,e[t+1]=l*g+c*d+h*u-a*f,e[t+2]=h*g+c*f+a*d-l*u,e[t+3]=c*g-a*u-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,c=t._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*n),c=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new U,Tu=new $i,Wn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(e.matrixWorld),this.union(Kr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Jr.subVectors(this.max,ur),ys.subVectors(e.a,ur),_s.subVectors(e.b,ur),xs.subVectors(e.c,ur),Di.subVectors(_s,ys),Ni.subVectors(xs,_s),Ji.subVectors(ys,xs);let t=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-Ji.z,Ji.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,Ji.z,0,-Ji.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-Ji.y,Ji.x,0];return!el(t,ys,_s,xs,Jr)||(t=[1,0,0,0,1,0,0,0,1],!el(t,ys,_s,xs,Jr))?!1:(jr.crossVectors(Di,Ni),t=[jr.x,jr.y,jr.z],el(t,ys,_s,xs,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new U,new U,new U,new U,new U,new U,new U,new U],zn=new U,Kr=new Wn,ys=new U,_s=new U,xs=new U,Di=new U,Ni=new U,Ji=new U,ur=new U,Jr=new U,jr=new U,ji=new U;function el(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),h=t.dot(ji),c=n.dot(ji);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Qp=new Wn,dr=new U,tl=new U,cs=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(tl)),this.expandByPoint(dr.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new U,nl=new U,Qr=new U,Ui=new U,il=new U,eo=new U,sl=new U,ks=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nl.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(nl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qr),a=Ui.dot(this.direction),l=-Ui.dot(Qr),h=Ui.lengthSq(),c=Math.abs(1-o*o),u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=r*c,u>=0)if(d>=-g)if(d<=g){let v=1/c;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nl).addScaledVector(Qr,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){il.subVectors(t,e),eo.subVectors(n,e),sl.crossVectors(il,eo);let o=this.direction.dot(sl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);let l=a*this.direction.dot(eo.crossVectors(Ui,eo));if(l<0)return null;let h=a*this.direction.dot(il.cross(Ui));if(h<0||l+h>o)return null;let c=-a*Ui.dot(sl);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class i{constructor(e,t,n,s,r,o,a,l,h,c,u,d,f,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,h,c,u,d,f,g,v,p)}set(e,t,n,s,r,o,a,l,h,c,u,d,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*c,f=o*u,g=a*c,v=a*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=f+g*h,t[5]=d-v*h,t[9]=-a*l,t[2]=v-d*h,t[6]=g+f*h,t[10]=o*l}else if(e.order==="YXZ"){let d=l*c,f=l*u,g=h*c,v=h*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*h,t[1]=o*u,t[5]=o*c,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*c,f=l*u,g=h*c,v=h*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*c,t[9]=v-d*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*c,f=o*u,g=a*c,v=a*u;t[0]=l*c,t[4]=g*h-f,t[8]=d*h+v,t[1]=l*u,t[5]=v*h+d,t[9]=f*h-g,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*h,g=a*l,v=a*h;t[0]=l*c,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*c,t[9]=-a*c,t[2]=-h*c,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,f=o*h,g=a*l,v=a*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+v,t[5]=o*c,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*c,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Fi.crossVectors(n,En),Fi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Fi.crossVectors(n,En)),Fi.normalize(),to.crossVectors(En,Fi),s[0]=Fi.x,s[4]=to.x,s[8]=En.x,s[1]=Fi.y,s[5]=to.y,s[9]=En.y,s[2]=Fi.z,s[6]=to.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],S=n[3],_=n[7],x=n[11],A=n[15],M=s[0],T=s[4],L=s[8],b=s[12],y=s[1],R=s[5],I=s[9],F=s[13],H=s[2],Y=s[6],W=s[10],se=s[14],$=s[3],ue=s[7],ee=s[11],ae=s[15];return r[0]=o*M+a*y+l*H+h*$,r[4]=o*T+a*R+l*Y+h*ue,r[8]=o*L+a*I+l*W+h*ee,r[12]=o*b+a*F+l*se+h*ae,r[1]=c*M+u*y+d*H+f*$,r[5]=c*T+u*R+d*Y+f*ue,r[9]=c*L+u*I+d*W+f*ee,r[13]=c*b+u*F+d*se+f*ae,r[2]=g*M+v*y+p*H+m*$,r[6]=g*T+v*R+p*Y+m*ue,r[10]=g*L+v*I+p*W+m*ee,r[14]=g*b+v*F+p*se+m*ae,r[3]=S*M+_*y+x*H+A*$,r[7]=S*T+_*R+x*Y+A*ue,r[11]=S*L+_*I+x*W+A*ee,r[15]=S*b+_*F+x*se+A*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*h*u-r*a*d+n*h*d+s*a*f-n*l*f)+v*(+t*l*f-t*h*d+r*o*d-s*o*f+s*h*c-r*l*c)+p*(+t*h*u-t*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+m*(-s*a*c-t*l*u+t*a*d+s*o*u-n*o*d+n*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],S=u*p*h-v*d*h+v*l*f-a*p*f-u*l*m+a*d*m,_=g*d*h-c*p*h-g*l*f+o*p*f+c*l*m-o*d*m,x=c*v*h-g*u*h+g*a*f-o*v*f-c*a*m+o*u*m,A=g*u*l-c*v*l-g*a*d+o*v*d+c*a*p-o*u*p,M=t*S+n*_+s*x+r*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return e[0]=S*T,e[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*m-n*d*m)*T,e[2]=(a*p*r-v*l*r+v*s*h-n*p*h-a*s*m+n*l*m)*T,e[3]=(u*l*r-a*d*r-u*s*h+n*d*h+a*s*f-n*l*f)*T,e[4]=_*T,e[5]=(c*p*r-g*d*r+g*s*f-t*p*f-c*s*m+t*d*m)*T,e[6]=(g*l*r-o*p*r-g*s*h+t*p*h+o*s*m-t*l*m)*T,e[7]=(o*d*r-c*l*r+c*s*h-t*d*h-o*s*f+t*l*f)*T,e[8]=x*T,e[9]=(g*u*r-c*v*r-g*n*f+t*v*f+c*n*m-t*u*m)*T,e[10]=(o*v*r-g*a*r+g*n*h-t*v*h-o*n*m+t*a*m)*T,e[11]=(c*a*r-o*u*r-c*n*h+t*u*h+o*n*f-t*a*f)*T,e[12]=A*T,e[13]=(c*v*s-g*u*s+g*n*d-t*v*d-c*n*p+t*u*p)*T,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*p-t*a*p)*T,e[15]=(o*u*s-c*a*s+c*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,g=r*u,v=o*c,p=o*u,m=a*u,S=l*h,_=l*c,x=l*u,A=n.x,M=n.y,T=n.z;return s[0]=(1-(v+m))*A,s[1]=(f+x)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+m))*M,s[6]=(p+S)*M,s[7]=0,s[8]=(g+_)*T,s[9]=(p-S)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=bs.set(s[0],s[1],s[2]).length(),o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let h=1/r,c=1/o,u=1/a;return Hn.elements[0]*=h,Hn.elements[1]*=h,Hn.elements[2]*=h,Hn.elements[4]*=c,Hn.elements[5]*=c,Hn.elements[6]*=c,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=xi){let l=this.elements,h=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===xi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Co)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=xi){let l=this.elements,h=1/(t-e),c=1/(n-s),u=1/(o-r),d=(t+e)*h,f=(n+s)*c,g,v;if(a===xi)g=(o+r)*u,v=-2*u;else if(a===Co)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bs=new U,Hn=new gt,e0=new U(0,0,0),t0=new U(1,1,1),Fi=new U,to=new U,En=new U,Eu=new gt,wu=new $i,ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n0=0,Au=new U,Ms=new $i,pi=new gt,no=new U,fr=new U,i0=new U,s0=new $i,Ru=new U(1,0,0),Cu=new U(0,1,0),Pu=new U(0,0,1),Iu={type:"added"},r0={type:"removed"},Ss={type:"childadded",child:null},rl={type:"childremoved",child:null},nn=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new ti,n=new $i,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new st}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Ru,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ru,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(fr,no,this.up):pi.lookAt(no,fr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(pi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),h=o(e.textures),c=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};nn.DEFAULT_UP=new U(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new U,mi=new U,ol=new U,gi=new U,Ts=new U,Es=new U,Lu=new U,al=new U,ll=new U,cl=new U,hl=new Tt,ul=new Tt,dl=new Tt,ss=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),mi.subVectors(n,t),ol.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(mi),l=Vn.dot(ol),h=mi.dot(mi),c=mi.dot(ol),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),mi.subVectors(e,t),Vn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Vn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ts.subVectors(s,n),Es.subVectors(r,n),al.subVectors(e,n);let l=Ts.dot(al),h=Es.dot(al);if(l<=0&&h<=0)return t.copy(n);ll.subVectors(e,s);let c=Ts.dot(ll),u=Es.dot(ll);if(c>=0&&u<=c)return t.copy(s);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(Ts,o);cl.subVectors(e,r);let f=Ts.dot(cl),g=Es.dot(cl);if(g>=0&&f<=g)return t.copy(r);let v=f*h-l*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(n).addScaledVector(Es,a);let p=c*g-f*u;if(p<=0&&u-c>=0&&f-g>=0)return Lu.subVectors(r,s),a=(u-c)/(u-c+(f-g)),t.copy(s).addScaledVector(Lu,a);let m=1/(p+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(Ts,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},io={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Xp(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fl(o,r,e+1/3),this.g=fl(o,r,e),this.b=fl(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return dt.fromWorkingColorSpace(ln.copy(this),e),Math.round(Qt(ln.r*255,0,255))*65536+Math.round(Qt(ln.g*255,0,255))*256+Math.round(Qt(ln.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=zt){dt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(io);let n=Ka(Oi.h,io.h,t),s=Ka(Oi.s,io.s,t),r=Ka(Oi.l,io.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ue;Ue.NAMES=Ud;var o0=0,ni=class extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Pr(),this.name="",this.blending=Is,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Pl&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ht=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new U,so=new Se,tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gu,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}};var No=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Uo=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},a0=0,Dn=new gt,pl=new nn,ws=new U,wn=new Wn,pr=new Wn,Zt=new U,Pt=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nd(e)?Uo:No)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(wn.min,pr.min),wn.expandByPoint(Zt),Zt.addVectors(wn.max,pr.max),wn.expandByPoint(Zt)):(wn.expandByPoint(pr.min),wn.expandByPoint(pr.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Zt.fromBufferAttribute(a,h),l&&(ws.fromBufferAttribute(e,h),Zt.add(ws)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new U,l[L]=new U;let h=new U,c=new U,u=new U,d=new Se,f=new Se,g=new Se,v=new U,p=new U;function m(L,b,y){h.fromBufferAttribute(n,L),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),c.sub(h),u.sub(h),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),p.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(R),a[L].add(v),a[b].add(v),a[y].add(v),l[L].add(p),l[b].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,b=S.length;L<b;++L){let y=S[L],R=y.start,I=y.count;for(let F=R,H=R+I;F<H;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new U,x=new U,A=new U,M=new U;function T(L){A.fromBufferAttribute(s,L),M.copy(A);let b=a[L];_.copy(b),_.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(M,b);let R=x.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,R)}for(let L=0,b=S.length;L<b;++L){let y=S[L],R=y.start,I=y.count;for(let F=R,H=R+I;F<H;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,h=new U,c=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,p),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){let h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c),f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let m=0;m<c;m++)d[g++]=h[f++]}return new tn(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=e(l,n);t.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let h=n[l];e.data.attributes[l]=h.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new gt,Qi=new ks,ro=new cs,Nu=new U,oo=new U,ao=new U,lo=new U,ml=new U,co=new U,Uu=new U,ho=new U,Ee=class extends nn{constructor(e=new Pt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],u=r[l];c!==0&&(ml.fromBufferAttribute(u,e),o?co.addScaledVector(ml,c):co.addScaledVector(ml.sub(t),c))}t.add(co)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(ro.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ro,Nu)===null||Qi.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=S,A=_;x<A;x+=3){let M=a.getX(x),T=a.getX(x+1),L=a.getX(x+2);s=uo(this,m,e,n,h,c,u,M,T,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let S=a.getX(p),_=a.getX(p+1),x=a.getX(p+2);s=uo(this,o,e,n,h,c,u,S,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=S,A=_;x<A;x+=3){let M=x,T=x+1,L=x+2;s=uo(this,m,e,n,h,c,u,M,T,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let S=p,_=p+1,x=p+2;s=uo(this,o,e,n,h,c,u,S,_,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function l0(i,e,t,n,s,r,o,a){let l;if(e.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===zi,a),l===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(ho);return h<t.near||h>t.far?null:{distance:h,point:ho.clone(),object:i}}function uo(i,e,t,n,s,r,o,a,l,h){i.getVertexPosition(a,oo),i.getVertexPosition(l,ao),i.getVertexPosition(h,lo);let c=l0(i,e,t,n,oo,ao,lo,Uu);if(c){let u=new U;ss.getBarycoord(Uu,oo,ao,lo,u),s&&(c.uv=ss.getInterpolatedAttribute(s,a,l,h,u,new Se)),r&&(c.uv1=ss.getInterpolatedAttribute(r,a,l,h,u,new Se)),o&&(c.normal=ss.getInterpolatedAttribute(o,a,l,h,u,new U),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new U,materialIndex:0};ss.getNormal(oo,ao,lo,d.normal),c.face=d,c.barycoord=u}return c}var Mi=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2));function g(v,p,m,S,_,x,A,M,T,L,b){let y=x/T,R=A/L,I=x/2,F=A/2,H=M/2,Y=T+1,W=L+1,se=0,$=0,ue=new U;for(let ee=0;ee<W;ee++){let ae=ee*R-F;for(let Ae=0;Ae<Y;Ae++){let Ve=Ae*y-I;ue[v]=Ve*S,ue[p]=ae*_,ue[m]=H,h.push(ue.x,ue.y,ue.z),ue[v]=0,ue[p]=0,ue[m]=M>0?1:-1,c.push(ue.x,ue.y,ue.z),u.push(Ae/T),u.push(1-ee/L),se+=1}}for(let ee=0;ee<L;ee++)for(let ae=0;ae<T;ae++){let Ae=d+ae+Y*ee,Ve=d+ae+Y*(ee+1),K=d+(ae+1)+Y*(ee+1),oe=d+(ae+1)+Y*ee;l.push(Ae,Ve,oe),l.push(Ve,K,oe),$+=6}a.addGroup(f,$,b),f+=$,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Bs(i[t]);for(let s in n)e[s]=n[s]}return e}function c0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var bn={clone:Bs,merge:fn},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fo=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new U,Fu=new Se,Ou=new Se,en=class extends Fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Fu,Ou),t.subVectors(Ou,Fu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Za*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},As=-90,Rs=1,vc=class extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(As,Rs,e,t);s.layers=this.layers,this.add(s);let r=new en(As,Rs,e,t);r.layers=this.layers,this.add(r);let o=new en(As,Rs,e,t);o.layers=this.layers,this.add(o);let a=new en(As,Rs,e,t);a.layers=this.layers,this.add(a);let l=new en(As,Rs,e,t);l.layers=this.layers,this.add(l);let h=new en(As,Rs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let h of t)this.remove(h);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Oo=class extends _n{constructor(e,t,n,s,r,o,a,l,h,c){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yc=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Oo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mi(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Wt});r.uniforms.tEquirect.value=t;let o=new Ee(s,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=ei),new vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},gl=new U,d0=new U,f0=new st,yi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gl.subVectors(n,t).cross(d0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||f0.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new cs,fo=new U,Tr=class{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],p=s[11],m=s[12],S=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,d-h,p-f,x-m).normalize(),n[1].setComponents(l+r,d+h,p+f,x+m).normalize(),n[2].setComponents(l+o,d+c,p+g,x+S).normalize(),n[3].setComponents(l-o,d-c,p-g,x-S).normalize(),n[4].setComponents(l-a,d-u,p-v,x-_).normalize(),t===xi)n[5].setComponents(l+a,d+u,p+v,x+_).normalize();else if(t===Co)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Od(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function p0(i){let e=new WeakMap;function t(a,l){let h=a.array,c=a.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){let c=l.array,u=l.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Cn=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,u=e/a,d=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<c;m++){let S=m*d-o;for(let _=0;_<h;_++){let x=_*u-r;g.push(x,-S,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let _=S+h*m,x=S+h*(m+1),A=S+1+h*(m+1),M=S+1+h*m;f.push(_,x,M),f.push(x,A,M)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
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
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
#endif`,T0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R0=`#ifdef USE_IRIDESCENCE
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
#endif`,C0=`#ifdef USE_BUMPMAP
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k0=`#define PI 3.141592653589793
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
} // validated`,B0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
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
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,fm=`struct PhysicalMaterial {
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
}`,pm=`
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
}`,Mg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,kg=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,Hg=`#define TOON
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
}`,Vg=`uniform float size;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,$g=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:v0,alphamap_pars_fragment:y0,alphatest_fragment:_0,alphatest_pars_fragment:x0,aomap_fragment:b0,aomap_pars_fragment:M0,batching_pars_vertex:S0,batching_vertex:T0,begin_vertex:E0,beginnormal_vertex:w0,bsdfs:A0,iridescence_fragment:R0,bumpmap_pars_fragment:C0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:D0,color_fragment:N0,color_pars_fragment:U0,color_pars_vertex:F0,color_vertex:O0,common:k0,cube_uv_reflection_fragment:B0,defaultnormal_vertex:z0,displacementmap_pars_vertex:H0,displacementmap_vertex:V0,emissivemap_fragment:G0,emissivemap_pars_fragment:W0,colorspace_fragment:$0,colorspace_pars_fragment:X0,envmap_fragment:q0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:Z0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:am,envmap_vertex:J0,fog_vertex:j0,fog_pars_vertex:Q0,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:sm,lights_lambert_pars_fragment:rm,lights_pars_begin:om,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:dm,lights_physical_pars_fragment:fm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:xm,map_fragment:bm,map_pars_fragment:Mm,map_particle_fragment:Sm,map_particle_pars_fragment:Tm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:wm,morphinstance_vertex:Am,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Nm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Hm,opaque_fragment:Vm,packing:Gm,premultiplied_alpha_fragment:Wm,project_vertex:$m,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Jm,shadowmap_vertex:jm,shadowmask_pars_fragment:Qm,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:vg,cube_vert:yg,cube_frag:_g,depth_vert:xg,depth_frag:bg,distanceRGBA_vert:Mg,distanceRGBA_frag:Sg,equirect_vert:Tg,equirect_frag:Eg,linedashed_vert:wg,linedashed_frag:Ag,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:kg,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:Hg,points_vert:Vg,points_frag:Gg,shadow_vert:Wg,shadow_frag:$g,sprite_vert:Xg,sprite_frag:qg},Te={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},jn={basic:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:fn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:fn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:fn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:fn([Te.points,Te.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:fn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:fn([Te.common,Te.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:fn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:fn([Te.sprite,Te.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:fn([Te.common,Te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:fn([Te.lights,Te.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};jn.physical={uniforms:fn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var po={r:0,b:0,g:0},ts=new ti,Yg=new gt;function Zg(i,e,t,n,s,r,o){let a=new Ue(0),l=r===!0?0:1,h,c,u=null,d=0,f=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function v(S){let _=!1,x=g(S);x===null?m(a,l):x&&x.isColor&&(m(x,1),_=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===ra)?(c===void 0&&(c=new Ee(new Mi(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Bs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),ts.copy(_.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(ts)),c.material.toneMapped=dt.getTransfer(x.colorSpace)!==Mt,(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Ee(new Cn(2,2),new yt({name:"BackgroundMaterial",uniforms:Bs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=dt.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function m(S,_){S.getRGB(po,Fd(i)),n.buffers.color.setClear(po.r,po.g,po.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:v,addToRenderList:p}}function Kg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,R,I,F,H){let Y=!1,W=u(F,I,R);r!==W&&(r=W,h(r.object)),Y=f(y,F,I,H),Y&&g(y,F,I,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(y,R,I,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function c(y){return i.deleteVertexArray(y)}function u(y,R,I){let F=I.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Y=H[R.id];Y===void 0&&(Y={},H[R.id]=Y);let W=Y[F];return W===void 0&&(W=d(l()),Y[F]=W),W}function d(y){let R=[],I=[],F=[];for(let H=0;H<t;H++)R[H]=0,I[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,R,I,F){let H=r.attributes,Y=R.attributes,W=0,se=I.getAttributes();for(let $ in se)if(se[$].location>=0){let ee=H[$],ae=Y[$];if(ae===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(y,R,I,F){let H={},Y=R.attributes,W=0,se=I.getAttributes();for(let $ in se)if(se[$].location>=0){let ee=Y[$];ee===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));let ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),H[$]=ae,W++}r.attributes=H,r.attributesNum=W,r.index=F}function v(){let y=r.newAttributes;for(let R=0,I=y.length;R<I;R++)y[R]=0}function p(y){m(y,0)}function m(y,R){let I=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;I[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),H[y]!==R&&(i.vertexAttribDivisor(y,R),H[y]=R)}function S(){let y=r.newAttributes,R=r.enabledAttributes;for(let I=0,F=R.length;I<F;I++)R[I]!==y[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function _(y,R,I,F,H,Y,W){W===!0?i.vertexAttribIPointer(y,R,I,H,Y):i.vertexAttribPointer(y,R,I,F,H,Y)}function x(y,R,I,F){v();let H=F.attributes,Y=I.getAttributes(),W=R.defaultAttributeValues;for(let se in Y){let $=Y[se];if($.location>=0){let ue=H[se];if(ue===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ue!==void 0){let ee=ue.normalized,ae=ue.itemSize,Ae=e.get(ue);if(Ae===void 0)continue;let Ve=Ae.buffer,K=Ae.type,oe=Ae.bytesPerElement,be=K===i.INT||K===i.UNSIGNED_INT||ue.gpuType===oh;if(ue.isInterleavedBufferAttribute){let le=ue.data,ye=le.stride,Fe=ue.offset;if(le.isInstancedInterleavedBuffer){for(let Be=0;Be<$.locationSize;Be++)m($.location+Be,le.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<$.locationSize;Be++)p($.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Be=0;Be<$.locationSize;Be++)_($.location+Be,ae/$.locationSize,K,ee,ye*oe,(Fe+ae/$.locationSize*Be)*oe,be)}else{if(ue.isInstancedBufferAttribute){for(let le=0;le<$.locationSize;le++)m($.location+le,ue.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let le=0;le<$.locationSize;le++)p($.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let le=0;le<$.locationSize;le++)_($.location+le,ae/$.locationSize,K,ee,ae*oe,ae/$.locationSize*le*oe,be)}}else if(W!==void 0){let ee=W[se];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv($.location,ee);break;case 3:i.vertexAttrib3fv($.location,ee);break;case 4:i.vertexAttrib4fv($.location,ee);break;default:i.vertexAttrib1fv($.location,ee)}}}}S()}function A(){L();for(let y in n){let R=n[y];for(let I in R){let F=R[I];for(let H in F)c(F[H].object),delete F[H];delete R[I]}delete n[y]}}function M(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let I in R){let F=R[I];for(let H in F)c(F[H].object),delete F[H];delete R[I]}delete n[y.id]}function T(y){for(let R in n){let I=n[R];if(I[y.id]===void 0)continue;let F=I[y.id];for(let H in F)c(F[H].object),delete F[H];delete I[y.id]}}function L(){b(),o=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function Jg(i,e,t){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),t.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),t.update(c,n,u))}function a(h,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];t.update(f,n,1)}function l(h,c,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let L=T===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==_i&&!L)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:A,maxSamples:M}}function Qg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new yi,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?c(null):h();else{let S=r?0:n,_=S*4,x=m.clippingState||null;l.value=x,x=c(g,d,_,f);for(let A=0;A!==_;++A)x[A]=t[A];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(S,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function ev(i){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=Fs:a===Bl&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===kl||a===Bl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new yc(l.height);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",s),t(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Er=class extends Fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ps=4,ku=[.125,.215,.35,.446,.526,.582],rs=20,vl=new Er,Bu=new Ue,yl=null,_l=0,xl=0,bl=!1,is=(1+Math.sqrt(5))/2,Cs=1/is,zu=[new U(-is,Cs,0),new U(is,Cs,0),new U(-Cs,0,is),new U(Cs,0,is),new U(0,is,-Cs),new U(0,is,Cs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,_l,xl),this._renderer.xr.enabled=bl,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:un,format:Rn,colorSpace:Xs,depthBuffer:!1},s=Hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tv(r)),this._blurMaterial=nv(r,e,t)}return s}_compileMaterial(e){let t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s){let a=new en(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Bu),c.toneMapping=Bi,c.autoClear=!1;let f=new Ht({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Ee(new Mi,f),v=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(Bu),v=!0);for(let m=0;m<6;m++){let S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));let _=this._cubeSize;mo(s,S*_,m>2?_:0,_,_),c.setRenderTarget(s),v&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;mo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zu[(s-r-1)%zu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Ee(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rs-1),v=r/g,p=isFinite(r)?1+Math.floor(c*v):rs;p>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rs}`);let m=[],S=0;for(let T=0;T<rs;++T){let L=T/v,b=Math.exp(-L*L/2);m.push(b),T===0?S+=b:T<p&&(S+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let x=this._sizeLods[s],A=3*x*(s>_-Ps?s-_+Ps:0),M=4*(this._cubeSize-x);mo(t,A,M,3*x,2*x),l.setRenderTarget(t),l.render(u,vl)}};function tv(i){let e=[],t=[],n=[],s=i,r=i-Ps+1+ku.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ps?l=ku[o-i+Ps-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,v=3,p=2,m=1,S=new Float32Array(v*g*f),_=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let M=0;M<f;M++){let T=M%3*2/3-1,L=M>2?0:-1,b=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];S.set(b,v*g*M),_.set(d,p*g*M);let y=[M,M,M,M,M,M];x.set(y,m*g*M)}let A=new Pt;A.setAttribute("position",new tn(S,v)),A.setAttribute("uv",new tn(_,p)),A.setAttribute("faceIndex",new tn(x,m)),e.push(A),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hu(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function nv(i,e,t){let n=new Float32Array(rs),s=new U(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Vu(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Gu(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function iv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===kl||l===Bl,c=l===Fs||l===Os;if(h||c){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new zs(i)),u=h?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return h&&f&&f.height>0||c&&f&&s(f)?(t===null&&(t=new zs(i)),u=h?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rv(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],i.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let S=f.array;v=f.version;for(let _=0,x=S.length;_<x;_+=3){let A=S[_+0],M=S[_+1],T=S[_+2];d.push(A,M,M,T,T,A)}}else if(g!==void 0){let S=g.array;v=g.version;for(let _=0,x=S.length/3-1;_<x;_+=3){let A=_+0,M=_+1,T=_+2;d.push(A,M,M,T,T,A)}}else return;let p=new(Nd(d)?Uo:No)(d,1);p.version=v;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function c(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function ov(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function c(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)h(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S]*v[S];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function av(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lv(i,e,t){let n=new WeakMap,s=new Tt;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*A*4*u),T=new Do(M,x,A,u);T.type=_i,T.needsUpdate=!0;let L=_*4;for(let y=0;y<u;y++){let R=p[y],I=m[y],F=S[y],H=x*A*4*y;for(let Y=0;Y<R.count;Y++){let W=Y*L;f===!0&&(s.fromBufferAttribute(R,Y),M[H+W+0]=s.x,M[H+W+1]=s.y,M[H+W+2]=s.z,M[H+W+3]=0),g===!0&&(s.fromBufferAttribute(I,Y),M[H+W+4]=s.x,M[H+W+5]=s.y,M[H+W+6]=s.z,M[H+W+7]=0),v===!0&&(s.fromBufferAttribute(F,Y),M[H+W+8]=s.x,M[H+W+9]=s.y,M[H+W+10]=s.z,M[H+W+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new Se(x,A)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<h.length;v++)f+=h[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cv(i,e,t,n){let s=new WeakMap;function r(l){let h=n.render.frame,c=l.geometry,u=e.get(l,c);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var Xi=class extends _n{constructor(e,t,n,s,r,o,a,l,h,c=Ls){if(c!==Ls&&c!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Ls&&(n=ls),n===void 0&&c===Gi&&(n=Vi),super(null,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},kd=new _n,Wu=new Xi(1,1),Bd=new Do,zd=new gc,Hd=new Oo,$u=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$u[s];if(r===void 0&&(r=new Float32Array(s),$u[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function aa(i,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Xt(t,n)}}function mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),Xt(t,n)}}function gv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),Xt(t,n)}}function vv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Ev(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wu.compareFunction=Dd,r=Wu):r=kd,t.setTexture2D(e||r,s)}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zd,s)}function Av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hd,s)}function Rv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bd,s)}function Cv(i){switch(i){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return yv;case 35668:case 35672:return _v;case 35669:case 35673:return xv;case 5125:return bv;case 36294:return Mv;case 36295:return Sv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(i,e){i.uniform1fv(this.addr,e)}function Iv(i,e){let t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Lv(i,e){let t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Dv(i,e){let t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function Nv(i,e){let t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){let t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fv(i,e){let t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ov(i,e){i.uniform1iv(this.addr,e)}function kv(i,e){i.uniform2iv(this.addr,e)}function Bv(i,e){i.uniform3iv(this.addr,e)}function zv(i,e){i.uniform4iv(this.addr,e)}function Hv(i,e){i.uniform1uiv(this.addr,e)}function Vv(i,e){i.uniform2uiv(this.addr,e)}function Gv(i,e){i.uniform3uiv(this.addr,e)}function Wv(i,e){i.uniform4uiv(this.addr,e)}function $v(i,e,t){let n=this.cache,s=e.length,r=aa(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||kd,r[o])}function Xv(i,e,t){let n=this.cache,s=e.length,r=aa(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zd,r[o])}function qv(i,e,t){let n=this.cache,s=e.length,r=aa(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hd,r[o])}function Yv(i,e,t){let n=this.cache,s=e.length,r=aa(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bd,r[o])}function Zv(i){switch(i){case 5126:return Pv;case 35664:return Iv;case 35665:return Lv;case 35666:return Dv;case 35674:return Nv;case 35675:return Uv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Vv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}var _c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cv(t.type)}},xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zv(t.type)}},bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function Kv(i,e,t){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),o=Ml.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Ku(t,h===void 0?new _c(a,i,e):new xc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new bc(a),Ku(t,u)),t=u}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Kv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Jv=37297,jv=0;function Qv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ju=new st;function ey(i){dt._getMatrix(ju,dt.workingColorSpace,i);let e=`mat3( ${ju.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case oa:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Qv(i.getShaderSource(e),o)}else return s}function ty(i,e){let t=ey(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ny(i,e){let t;switch(e){case th:t="Linear";break;case nh:t="Reinhard";break;case ih:t="Cineon";break;case Cr:t="ACESFilmic";break;case sh:t="AgX";break;case rh:t="Neutral";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var go=new U;function iy(){dt.getLuminanceCoefficients(go);let i=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function ry(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function yr(i){return i!==""}function ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(ay,cy)}var ly=new Map;function cy(i,e){let t=ot[e];if(t===void 0){let n=ly.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(hy,uy)}function uy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function dy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===na?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function fy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function py(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function my(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bd:e="ENVMAP_BLENDING_MULTIPLY";break;case Lp:e="ENVMAP_BLENDING_MIX";break;case Dp:e="ENVMAP_BLENDING_ADD";break}return e}function gy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=dy(t),h=fy(t),c=py(t),u=my(t),d=gy(t),f=sy(t),g=ry(r),v=s.createProgram(),p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(p=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?ot.tonemapping_pars_fragment:"",t.toneMapping!==Bi?ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,ty("linearToOutputTexel",t.outputColorSpace),iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=Mc(o),o=ed(o,t),o=td(o,t),a=Mc(a),a=ed(a,t),a=td(a,t),o=nd(o),a=nd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=S+p+o,x=S+m+a,A=Ju(s,s.VERTEX_SHADER,_),M=Ju(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(A).trim(),H=s.getShaderInfoLog(M).trim(),Y=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,M);else{let se=Qu(s,A,"vertex"),$=Qu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+se+`
`+$)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||H==="")&&(W=!1);W&&(R.diagnostics={runnable:Y,programLog:I,vertexShader:{log:F,prefix:p},fragmentShader:{log:H,prefix:m}})}s.deleteShader(A),s.deleteShader(M),L=new Ns(s,v),b=oy(s,v)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Jv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=M,this}var yy=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tc(e),t.set(e,n)),n}},Tc=class{constructor(e){this.id=yy++,this.code=e,this.usedTimes=0}};function _y(i,e,t,n,s,r,o){let a=new Sr,l=new Sc,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return h.add(b),b===0?"uv":`uv${b}`}function p(b,y,R,I,F){let H=I.fog,Y=F.geometry,W=b.isMeshStandardMaterial?I.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),$=se&&se.mapping===ra?se.image.height:null,ue=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ee=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=ee!==void 0?ee.length:0,Ae=0;Y.morphAttributes.position!==void 0&&(Ae=1),Y.morphAttributes.normal!==void 0&&(Ae=2),Y.morphAttributes.color!==void 0&&(Ae=3);let Ve,K,oe,be;if(ue){let J=jn[ue];Ve=J.vertexShader,K=J.fragmentShader}else Ve=b.vertexShader,K=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);let le=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,ut=!!b.map,z=!!b.matcap,Q=!!se,N=!!b.aoMap,fe=!!b.lightMap,pe=!!b.bumpMap,ve=!!b.normalMap,me=!!b.displacementMap,Oe=!!b.emissiveMap,_e=!!b.metalnessMap,D=!!b.roughnessMap,E=b.anisotropy>0,V=b.clearcoat>0,ne=b.dispersion>0,re=b.iridescence>0,te=b.sheen>0,ke=b.transmission>0,Me=E&&!!b.anisotropyMap,Re=V&&!!b.clearcoatMap,nt=V&&!!b.clearcoatNormalMap,he=V&&!!b.clearcoatRoughnessMap,Ie=re&&!!b.iridescenceMap,ze=re&&!!b.iridescenceThicknessMap,je=te&&!!b.sheenColorMap,Le=te&&!!b.sheenRoughnessMap,rt=!!b.specularMap,Ze=!!b.specularColorMap,ht=!!b.specularIntensityMap,O=ke&&!!b.transmissionMap,xe=ke&&!!b.thicknessMap,Z=!!b.gradientMap,ie=!!b.alphaMap,Ce=b.alphaTest>0,we=!!b.alphaHash,et=!!b.extensions,P=Bi;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(P=i.toneMapping);let G={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:K,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Be,batchingColor:Be&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Xs,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:z,envMap:Q,envMapMode:Q&&se.mapping,envMapCubeUVHeight:$,aoMap:N,lightMap:fe,bumpMap:pe,normalMap:ve,displacementMap:d&&me,emissiveMap:Oe,normalMapObjectSpace:ve&&b.normalMapType===kp,normalMapTangentSpace:ve&&b.normalMapType===dh,metalnessMap:_e,roughnessMap:D,anisotropy:E,anisotropyMap:Me,clearcoat:V,clearcoatMap:Re,clearcoatNormalMap:nt,clearcoatRoughnessMap:he,dispersion:ne,iridescence:re,iridescenceMap:Ie,iridescenceThicknessMap:ze,sheen:te,sheenColorMap:je,sheenRoughnessMap:Le,specularMap:rt,specularColorMap:Ze,specularIntensityMap:ht,transmission:ke,transmissionMap:O,thicknessMap:xe,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Is&&b.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ce,alphaHash:we,combine:b.combine,mapUv:ut&&v(b.map.channel),aoMapUv:N&&v(b.aoMap.channel),lightMapUv:fe&&v(b.lightMap.channel),bumpMapUv:pe&&v(b.bumpMap.channel),normalMapUv:ve&&v(b.normalMap.channel),displacementMapUv:me&&v(b.displacementMap.channel),emissiveMapUv:Oe&&v(b.emissiveMap.channel),metalnessMapUv:_e&&v(b.metalnessMap.channel),roughnessMapUv:D&&v(b.roughnessMap.channel),anisotropyMapUv:Me&&v(b.anisotropyMap.channel),clearcoatMapUv:Re&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(b.sheenRoughnessMap.channel),specularMapUv:rt&&v(b.specularMap.channel),specularColorMapUv:Ze&&v(b.specularColorMap.channel),specularIntensityMapUv:ht&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:xe&&v(b.thicknessMap.channel),alphaMapUv:ie&&v(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ve||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ut||ie),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:P,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===Mt,decodeVideoTextureEmissive:Oe&&b.emissiveMap.isVideoTexture===!0&&dt.getTransfer(b.emissiveMap.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===An,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:et&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&b.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return G.vertexUv1s=h.has(1),G.vertexUv2s=h.has(2),G.vertexUv3s=h.has(3),h.clear(),G}function m(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(S(y,b),_(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let y=g[b.type],R;if(y){let I=jn[y];R=bn.clone(I.uniforms)}else R=b.uniforms;return R}function A(b,y){let R;for(let I=0,F=c.length;I<F;I++){let H=c[I];if(H.cacheKey===y){R=H,++R.usedTimes;break}}return R===void 0&&(R=new vy(i,y,b,r),c.push(R)),R}function M(b){if(--b.usedTimes===0){let y=c.indexOf(b);c[y]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:A,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:L}}function xy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function by(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function a(u,d,f,g,v,p){let m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,v,p){let m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function h(u,d){t.length>1&&t.sort(u||by),n.length>1&&n.sort(d||sd),s.length>1&&s.sort(d||sd)}function c(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function My(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new rd,i.set(n,[o])):s>=r.length?(o=new rd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ue};break;case"SpotLight":t={position:new U,direction:new U,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Ty(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ey=0;function wy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ay(i){let e=new Sy,t=Ty(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);let s=new U,r=new gt,o=new gt;function a(h){let c=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,S=0,_=0,x=0,A=0,M=0,T=0;h.sort(wy);for(let b=0,y=h.length;b<y;b++){let R=h[b],I=R.color,F=R.intensity,H=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=I.r*F,u+=I.g*F,d+=I.b*F;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],F);T++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let se=R.shadow,$=t.get(R);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,S++}n.directional[f]=W,f++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(I).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[v]=W;let se=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,se.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[v]=se.matrix,R.castShadow){let $=t.get(R);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=Y,x++}v++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(I).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=W,p++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let se=R.shadow,$=t.get(R);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,$.shadowCameraNear=se.camera.near,$.shadowCameraFar=se.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=W,g++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(F),W.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[m]=W,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==S||L.numPointShadows!==_||L.numSpotShadows!==x||L.numSpotMaps!==A||L.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=S,L.numPointShadows=_,L.numSpotShadows=x,L.numSpotMaps=A,L.numLightProbes=T,n.version=Ey++)}function l(h,c){let u=0,d=0,f=0,g=0,v=0,p=c.matrixWorldInverse;for(let m=0,S=h.length;m<S;m++){let _=h[m];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function od(i){let e=new Ay(i),t=[],n=[];function s(c){h.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function o(c){n.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}let h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ry(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new od(i),e.set(s,[a])):r>=o.length?(a=new od(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ec=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wc=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`;function Iy(i,e,t){let n=new Tr,s=new Se,r=new Se,o=new Tt,a=new Ec({depthPacking:Op}),l=new wc,h={},c=t.maxTextureSize,u={[zi]:cn,[cn]:zi,[An]:An},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Cy,fragmentShader:Py}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ee(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let m=this.type;this.render=function(M,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Wt),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=m!==vi&&this.type===vi,H=m===vi&&this.type!==vi;for(let Y=0,W=M.length;Y<W;Y++){let se=M[Y],$=se.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ue=$.getFrameExtents();if(s.multiply(ue),r.copy($.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ue.x),s.x=r.x*ue.x,$.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ue.y),s.y=r.y*ue.y,$.mapSize.y=r.y)),$.map===null||F===!0||H===!0){let ae=this.type!==vi?{minFilter:hn,magFilter:hn}:{};$.map!==null&&$.map.dispose(),$.map=new Ft(s.x,s.y,ae),$.map.texture.name=se.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let ee=$.getViewportCount();for(let ae=0;ae<ee;ae++){let Ae=$.getViewport(ae);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),I.viewport(o),$.updateMatrices(se,ae),n=$.getFrustum(),x(T,L,$.camera,se,this.type)}$.isPointLightShadow!==!0&&this.type===vi&&S($,L),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,y,R)};function S(M,T){let L=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ft(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,L,d,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,L,f,v,null)}function _(M,T,L,b){let y=null,R=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)y=R;else if(y=L.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let I=y.uuid,F=T.uuid,H=h[I];H===void 0&&(H={},h[I]=H);let Y=H[F];Y===void 0&&(Y=y.clone(),H[F]=Y,T.addEventListener("dispose",A)),y=Y}if(y.visible=T.visible,y.wireframe=T.wireframe,b===vi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let I=i.properties.get(y);I.light=L}return y}function x(M,T,L,b,y){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===vi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);let F=e.update(M),H=M.material;if(Array.isArray(H)){let Y=F.groups;for(let W=0,se=Y.length;W<se;W++){let $=Y[W],ue=H[$.materialIndex];if(ue&&ue.visible){let ee=_(M,ue,b,y);M.onBeforeShadow(i,M,T,L,F,ee,$),i.renderBufferDirect(L,null,F,ee,M,$),M.onAfterShadow(i,M,T,L,F,ee,$)}}}else if(H.visible){let Y=_(M,H,b,y);M.onBeforeShadow(i,M,T,L,F,Y,null),i.renderBufferDirect(L,null,F,Y,M,null),M.onAfterShadow(i,M,T,L,F,Y,null)}}let I=M.children;for(let F=0,H=I.length;F<H;F++)x(I[F],T,L,b,y)}function A(M){M.target.removeEventListener("dispose",A);for(let L in h){let b=h[L],y=M.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var Ly={[Il]:Ll,[Dl]:Fl,[Nl]:Ol,[Us]:Ul,[Ll]:Il,[Fl]:Dl,[Ol]:Nl,[Ul]:Us};function Dy(i,e){function t(){let O=!1,xe=new Tt,Z=null,ie=new Tt(0,0,0,0);return{setMask:function(Ce){Z!==Ce&&!O&&(i.colorMask(Ce,Ce,Ce,Ce),Z=Ce)},setLocked:function(Ce){O=Ce},setClear:function(Ce,we,et,P,G){G===!0&&(Ce*=P,we*=P,et*=P),xe.set(Ce,we,et,P),ie.equals(xe)===!1&&(i.clearColor(Ce,we,et,P),ie.copy(xe))},reset:function(){O=!1,Z=null,ie.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,Z=null,ie=null,Ce=null;return{setReversed:function(we){if(xe!==we){let et=e.get("EXT_clip_control");xe?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);let P=Ce;Ce=null,this.setClear(P)}xe=we},getReversed:function(){return xe},setTest:function(we){we?le(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(we){Z!==we&&!O&&(i.depthMask(we),Z=we)},setFunc:function(we){if(xe&&(we=Ly[we]),ie!==we){switch(we){case Il:i.depthFunc(i.NEVER);break;case Ll:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Nl:i.depthFunc(i.EQUAL);break;case Ul:i.depthFunc(i.GEQUAL);break;case Fl:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=we}},setLocked:function(we){O=we},setClear:function(we){Ce!==we&&(xe&&(we=1-we),i.clearDepth(we),Ce=we)},reset:function(){O=!1,Z=null,ie=null,Ce=null,xe=!1}}}function s(){let O=!1,xe=null,Z=null,ie=null,Ce=null,we=null,et=null,P=null,G=null;return{setTest:function(J){O||(J?le(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(J){xe!==J&&!O&&(i.stencilMask(J),xe=J)},setFunc:function(J,de,Ye){(Z!==J||ie!==de||Ce!==Ye)&&(i.stencilFunc(J,de,Ye),Z=J,ie=de,Ce=Ye)},setOp:function(J,de,Ye){(we!==J||et!==de||P!==Ye)&&(i.stencilOp(J,de,Ye),we=J,et=de,P=Ye)},setLocked:function(J){O=J},setClear:function(J){G!==J&&(i.clearStencil(J),G=J)},reset:function(){O=!1,xe=null,Z=null,ie=null,Ce=null,we=null,et=null,P=null,G=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],g=null,v=!1,p=null,m=null,S=null,_=null,x=null,A=null,M=null,T=new Ue(0,0,0),L=0,b=!1,y=null,R=null,I=null,F=null,H=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec($)[1]),W=se>=1):$.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=se>=2);let ue=null,ee={},ae=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Ve=new Tt().fromArray(ae),K=new Tt().fromArray(Ae);function oe(O,xe,Z,ie){let Ce=new Uint8Array(4),we=i.createTexture();i.bindTexture(O,we),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<Z;et++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(xe+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return we}let be={};be[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(Us),pe(!1),ve(cu),le(i.CULL_FACE),N(Wt);function le(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function ye(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function Fe(O,xe){return u[O]!==xe?(i.bindFramebuffer(O,xe),u[O]=xe,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xe),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Be(O,xe){let Z=f,ie=!1;if(O){Z=d.get(xe),Z===void 0&&(Z=[],d.set(xe,Z));let Ce=O.textures;if(Z.length!==Ce.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let we=0,et=Ce.length;we<et;we++)Z[we]=i.COLOR_ATTACHMENT0+we;Z.length=Ce.length,ie=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Z)}function ut(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let z={[Nn]:i.FUNC_ADD,[yp]:i.FUNC_SUBTRACT,[_p]:i.FUNC_REVERSE_SUBTRACT};z[xp]=i.MIN,z[bp]=i.MAX;let Q={[$s]:i.ZERO,[Mp]:i.ONE,[Sp]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[Ap]:i.SRC_ALPHA_SATURATE,[sa]:i.DST_COLOR,[ia]:i.DST_ALPHA,[Tp]:i.ONE_MINUS_SRC_COLOR,[Pl]:i.ONE_MINUS_SRC_ALPHA,[wp]:i.ONE_MINUS_DST_COLOR,[Ep]:i.ONE_MINUS_DST_ALPHA,[Rp]:i.CONSTANT_COLOR,[Cp]:i.ONE_MINUS_CONSTANT_COLOR,[Pp]:i.CONSTANT_ALPHA,[Ip]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,xe,Z,ie,Ce,we,et,P,G,J){if(O===Wt){v===!0&&(ye(i.BLEND),v=!1);return}if(v===!1&&(le(i.BLEND),v=!0),O!==eh){if(O!==p||J!==b){if((m!==Nn||x!==Nn)&&(i.blendEquation(i.FUNC_ADD),m=Nn,x=Nn),J)switch(O){case Is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hi:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,_=null,A=null,M=null,T.set(0,0,0),L=0,p=O,b=J}return}Ce=Ce||xe,we=we||Z,et=et||ie,(xe!==m||Ce!==x)&&(i.blendEquationSeparate(z[xe],z[Ce]),m=xe,x=Ce),(Z!==S||ie!==_||we!==A||et!==M)&&(i.blendFuncSeparate(Q[Z],Q[ie],Q[we],Q[et]),S=Z,_=ie,A=we,M=et),(P.equals(T)===!1||G!==L)&&(i.blendColor(P.r,P.g,P.b,G),T.copy(P),L=G),p=O,b=!1}function fe(O,xe){O.side===An?ye(i.CULL_FACE):le(i.CULL_FACE);let Z=O.side===cn;xe&&(Z=!Z),pe(Z),O.blending===Is&&O.transparent===!1?N(Wt):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ie=O.stencilWrite;a.setTest(ie),ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Oe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function ve(O){O!==mp?(le(i.CULL_FACE),O!==R&&(O===cu?i.cullFace(i.BACK):O===gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),R=O}function me(O){O!==I&&(W&&i.lineWidth(O),I=O)}function Oe(O,xe,Z){O?(le(i.POLYGON_OFFSET_FILL),(F!==xe||H!==Z)&&(i.polygonOffset(xe,Z),F=xe,H=Z)):ye(i.POLYGON_OFFSET_FILL)}function _e(O){O?le(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function D(O){O===void 0&&(O=i.TEXTURE0+Y-1),ue!==O&&(i.activeTexture(O),ue=O)}function E(O,xe,Z){Z===void 0&&(ue===null?Z=i.TEXTURE0+Y-1:Z=ue);let ie=ee[Z];ie===void 0&&(ie={type:void 0,texture:void 0},ee[Z]=ie),(ie.type!==O||ie.texture!==xe)&&(ue!==Z&&(i.activeTexture(Z),ue=Z),i.bindTexture(O,xe||be[O]),ie.type=O,ie.texture=xe)}function V(){let O=ee[ue];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(O){Ve.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ve.copy(O))}function Le(O){K.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function rt(O,xe){let Z=h.get(xe);Z===void 0&&(Z=new WeakMap,h.set(xe,Z));let ie=Z.get(O);ie===void 0&&(ie=i.getUniformBlockIndex(xe,O.name),Z.set(O,ie))}function Ze(O,xe){let ie=h.get(xe).get(O);l.get(xe)!==ie&&(i.uniformBlockBinding(xe,ie,O.__bindingPointIndex),l.set(xe,ie))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},ue=null,ee={},u={},d=new WeakMap,f=[],g=null,v=!1,p=null,m=null,S=null,_=null,x=null,A=null,M=null,T=new Ue(0,0,0),L=0,b=!1,y=null,R=null,I=null,F=null,H=null,Ve.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:ye,bindFramebuffer:Fe,drawBuffers:Be,useProgram:ut,setBlending:N,setMaterial:fe,setFlipSided:pe,setCullFace:ve,setLineWidth:me,setPolygonOffset:Oe,setScissorTest:_e,activeTexture:D,bindTexture:E,unbindTexture:V,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:Ie,texImage3D:ze,updateUBOMapping:rt,uniformBlockBinding:Ze,texStorage2D:nt,texStorage3D:he,texSubImage2D:te,texSubImage3D:ke,compressedTexSubImage2D:Me,compressedTexSubImage3D:Re,scissor:je,viewport:Le,reset:ht}}function ad(i,e,t,n){let s=Ny(n);switch(t){case wd:return i*e;case Rd:return i*e;case Cd:return i*e*2;case Pd:return i*e/s.components*s.byteLength;case ch:return i*e/s.components*s.byteLength;case Id:return i*e*2/s.components*s.byteLength;case hh:return i*e*2/s.components*s.byteLength;case Ad:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case uh:return i*e*4/s.components*s.byteLength;case So:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Eo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Wl:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case Gl:return Math.max(i,8)*Math.max(e,8)/2;case $l:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ao:case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ld:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ny(i){switch(i){case Gn:case Sd:return{byteLength:1,components:1};case Mr:case Td:case un:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case ls:case oh:case _i:return{byteLength:4,components:1};case Ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Uy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Se,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return f?new OffscreenCanvas(D,E):Io("canvas")}function v(D,E,V){let ne=1,re=_e(D);if((re.width>V||re.height>V)&&(ne=V/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let te=Math.floor(ne*re.width),ke=Math.floor(ne*re.height);u===void 0&&(u=g(te,ke));let Me=E?g(te,ke):u;return Me.width=te,Me.height=ke,Me.getContext("2d").drawImage(D,0,0,te,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+te+"x"+ke+")."),Me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),D;return D}function p(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,E,V,ne,re=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let te=E;if(E===i.RED&&(V===i.FLOAT&&(te=i.R32F),V===i.HALF_FLOAT&&(te=i.R16F),V===i.UNSIGNED_BYTE&&(te=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.R8UI),V===i.UNSIGNED_SHORT&&(te=i.R16UI),V===i.UNSIGNED_INT&&(te=i.R32UI),V===i.BYTE&&(te=i.R8I),V===i.SHORT&&(te=i.R16I),V===i.INT&&(te=i.R32I)),E===i.RG&&(V===i.FLOAT&&(te=i.RG32F),V===i.HALF_FLOAT&&(te=i.RG16F),V===i.UNSIGNED_BYTE&&(te=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RG8UI),V===i.UNSIGNED_SHORT&&(te=i.RG16UI),V===i.UNSIGNED_INT&&(te=i.RG32UI),V===i.BYTE&&(te=i.RG8I),V===i.SHORT&&(te=i.RG16I),V===i.INT&&(te=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RGB8UI),V===i.UNSIGNED_SHORT&&(te=i.RGB16UI),V===i.UNSIGNED_INT&&(te=i.RGB32UI),V===i.BYTE&&(te=i.RGB8I),V===i.SHORT&&(te=i.RGB16I),V===i.INT&&(te=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),V===i.UNSIGNED_INT&&(te=i.RGBA32UI),V===i.BYTE&&(te=i.RGBA8I),V===i.SHORT&&(te=i.RGBA16I),V===i.INT&&(te=i.RGBA32I)),E===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),E===i.RGBA){let ke=re?oa:dt.getTransfer(ne);V===i.FLOAT&&(te=i.RGBA32F),V===i.HALF_FLOAT&&(te=i.RGBA16F),V===i.UNSIGNED_BYTE&&(te=ke===Mt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(D,E){let V;return D?E===null||E===ls||E===Vi?V=i.DEPTH24_STENCIL8:E===_i?V=i.DEPTH32F_STENCIL8:E===Mr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ls||E===Vi?V=i.DEPTH_COMPONENT24:E===_i?V=i.DEPTH_COMPONENT32F:E===Mr&&(V=i.DEPTH_COMPONENT16),V}function A(D,E){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==hn&&D.minFilter!==ei?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function M(D){let E=D.target;E.removeEventListener("dispose",M),L(E),E.isVideoTexture&&c.delete(E)}function T(D){let E=D.target;E.removeEventListener("dispose",T),y(E)}function L(D){let E=n.get(D);if(E.__webglInit===void 0)return;let V=D.source,ne=d.get(V);if(ne){let re=ne[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(D),Object.keys(ne).length===0&&d.delete(V)}n.remove(D)}function b(D){let E=n.get(D);i.deleteTexture(E.__webglTexture);let V=D.source,ne=d.get(V);delete ne[E.__cacheKey],o.memory.textures--}function y(D){let E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let re=0;re<E.__webglFramebuffer[ne].length;re++)i.deleteFramebuffer(E.__webglFramebuffer[ne][re]);else i.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)i.deleteFramebuffer(E.__webglFramebuffer[ne]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let V=D.textures;for(let ne=0,re=V.length;ne<re;ne++){let te=n.get(V[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(V[ne])}n.remove(D)}let R=0;function I(){R=0}function F(){let D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function H(D){let E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Y(D,E){let V=n.get(D);if(D.isVideoTexture&&me(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){let ne=D.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,D,E);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function W(D,E){let V=n.get(D);if(D.version>0&&V.__version!==D.version){K(V,D,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function se(D,E){let V=n.get(D);if(D.version>0&&V.__version!==D.version){K(V,D,E);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function $(D,E){let V=n.get(D);if(D.version>0&&V.__version!==D.version){oe(V,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}let ue={[Kt]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[zl]:i.MIRRORED_REPEAT},ee={[hn]:i.NEAREST,[Up]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[ei]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},ae={[Bp]:i.NEVER,[$p]:i.ALWAYS,[zp]:i.LESS,[Dd]:i.LEQUAL,[Hp]:i.EQUAL,[Wp]:i.GEQUAL,[Vp]:i.GREATER,[Gp]:i.NOTEQUAL};function Ae(D,E){if(E.type===_i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ei||E.magFilter===qa||E.magFilter===Zr||E.magFilter===as||E.minFilter===ei||E.minFilter===qa||E.minFilter===Zr||E.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ue[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ue[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ue[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ee[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==Zr&&E.minFilter!==as||E.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ve(D,E){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",M));let ne=E.source,re=d.get(ne);re===void 0&&(re={},d.set(ne,re));let te=H(E);if(te!==D.__cacheKey){re[te]===void 0&&(re[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[te].usedTimes++;let ke=re[D.__cacheKey];ke!==void 0&&(re[D.__cacheKey].usedTimes--,ke.usedTimes===0&&b(E)),D.__cacheKey=te,D.__webglTexture=re[te].texture}return V}function K(D,E,V){let ne=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=i.TEXTURE_3D);let re=Ve(D,E),te=E.source;t.bindTexture(ne,D.__webglTexture,i.TEXTURE0+V);let ke=n.get(te);if(te.version!==ke.__version||re===!0){t.activeTexture(i.TEXTURE0+V);let Me=dt.getPrimaries(dt.workingColorSpace),Re=E.colorSpace===Qn?null:dt.getPrimaries(E.colorSpace),nt=E.colorSpace===Qn||Me===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let he=v(E.image,!1,s.maxTextureSize);he=Oe(E,he);let Ie=r.convert(E.format,E.colorSpace),ze=r.convert(E.type),je=_(E.internalFormat,Ie,ze,E.colorSpace,E.isVideoTexture);Ae(ne,E);let Le,rt=E.mipmaps,Ze=E.isVideoTexture!==!0,ht=ke.__version===void 0||re===!0,O=te.dataReady,xe=A(E,he);if(E.isDepthTexture)je=x(E.format===Gi,E.type),ht&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,je,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,je,he.width,he.height,0,Ie,ze,null));else if(E.isDataTexture)if(rt.length>0){Ze&&ht&&t.texStorage2D(i.TEXTURE_2D,xe,je,rt[0].width,rt[0].height);for(let Z=0,ie=rt.length;Z<ie;Z++)Le=rt[Z],Ze?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Le.width,Le.height,Ie,ze,Le.data):t.texImage2D(i.TEXTURE_2D,Z,je,Le.width,Le.height,0,Ie,ze,Le.data);E.generateMipmaps=!1}else Ze?(ht&&t.texStorage2D(i.TEXTURE_2D,xe,je,he.width,he.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Ie,ze,he.data)):t.texImage2D(i.TEXTURE_2D,0,je,he.width,he.height,0,Ie,ze,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,je,rt[0].width,rt[0].height,he.depth);for(let Z=0,ie=rt.length;Z<ie;Z++)if(Le=rt[Z],E.format!==Rn)if(Ie!==null)if(Ze){if(O)if(E.layerUpdates.size>0){let Ce=ad(Le.width,Le.height,E.format,E.type);for(let we of E.layerUpdates){let et=Le.data.subarray(we*Ce/Le.data.BYTES_PER_ELEMENT,(we+1)*Ce/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,we,Le.width,Le.height,1,Ie,et)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Le.width,Le.height,he.depth,Ie,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,je,Le.width,Le.height,he.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Le.width,Le.height,he.depth,Ie,ze,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,je,Le.width,Le.height,he.depth,0,Ie,ze,Le.data)}else{Ze&&ht&&t.texStorage2D(i.TEXTURE_2D,xe,je,rt[0].width,rt[0].height);for(let Z=0,ie=rt.length;Z<ie;Z++)Le=rt[Z],E.format!==Rn?Ie!==null?Ze?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Le.width,Le.height,Ie,ze,Le.data):t.texImage2D(i.TEXTURE_2D,Z,je,Le.width,Le.height,0,Ie,ze,Le.data)}else if(E.isDataArrayTexture)if(Ze){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,je,he.width,he.height,he.depth),O)if(E.layerUpdates.size>0){let Z=ad(he.width,he.height,E.format,E.type);for(let ie of E.layerUpdates){let Ce=he.data.subarray(ie*Z/he.data.BYTES_PER_ELEMENT,(ie+1)*Z/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,he.width,he.height,1,Ie,ze,Ce)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ie,ze,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,he.width,he.height,he.depth,0,Ie,ze,he.data);else if(E.isData3DTexture)Ze?(ht&&t.texStorage3D(i.TEXTURE_3D,xe,je,he.width,he.height,he.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ie,ze,he.data)):t.texImage3D(i.TEXTURE_3D,0,je,he.width,he.height,he.depth,0,Ie,ze,he.data);else if(E.isFramebufferTexture){if(ht)if(Ze)t.texStorage2D(i.TEXTURE_2D,xe,je,he.width,he.height);else{let Z=he.width,ie=he.height;for(let Ce=0;Ce<xe;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,je,Z,ie,0,Ie,ze,null),Z>>=1,ie>>=1}}else if(rt.length>0){if(Ze&&ht){let Z=_e(rt[0]);t.texStorage2D(i.TEXTURE_2D,xe,je,Z.width,Z.height)}for(let Z=0,ie=rt.length;Z<ie;Z++)Le=rt[Z],Ze?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ie,ze,Le):t.texImage2D(i.TEXTURE_2D,Z,je,Ie,ze,Le);E.generateMipmaps=!1}else if(Ze){if(ht){let Z=_e(he);t.texStorage2D(i.TEXTURE_2D,xe,je,Z.width,Z.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,ze,he)}else t.texImage2D(i.TEXTURE_2D,0,je,Ie,ze,he);p(E)&&m(ne),ke.__version=te.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function oe(D,E,V){if(E.image.length!==6)return;let ne=Ve(D,E),re=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+V);let te=n.get(re);if(re.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+V);let ke=dt.getPrimaries(dt.workingColorSpace),Me=E.colorSpace===Qn?null:dt.getPrimaries(E.colorSpace),Re=E.colorSpace===Qn||ke===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let nt=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let ie=0;ie<6;ie++)!nt&&!he?Ie[ie]=v(E.image[ie],!0,s.maxCubemapSize):Ie[ie]=he?E.image[ie].image:E.image[ie],Ie[ie]=Oe(E,Ie[ie]);let ze=Ie[0],je=r.convert(E.format,E.colorSpace),Le=r.convert(E.type),rt=_(E.internalFormat,je,Le,E.colorSpace),Ze=E.isVideoTexture!==!0,ht=te.__version===void 0||ne===!0,O=re.dataReady,xe=A(E,ze);Ae(i.TEXTURE_CUBE_MAP,E);let Z;if(nt){Ze&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,rt,ze.width,ze.height);for(let ie=0;ie<6;ie++){Z=Ie[ie].mipmaps;for(let Ce=0;Ce<Z.length;Ce++){let we=Z[Ce];E.format!==Rn?je!==null?Ze?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,we.width,we.height,je,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,rt,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,we.width,we.height,je,Le,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,rt,we.width,we.height,0,je,Le,we.data)}}}else{if(Z=E.mipmaps,Ze&&ht){Z.length>0&&xe++;let ie=_e(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,rt,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(he){Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie[ie].width,Ie[ie].height,je,Le,Ie[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,rt,Ie[ie].width,Ie[ie].height,0,je,Le,Ie[ie].data);for(let Ce=0;Ce<Z.length;Ce++){let et=Z[Ce].image[ie].image;Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,et.width,et.height,je,Le,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,rt,et.width,et.height,0,je,Le,et.data)}}else{Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,je,Le,Ie[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,rt,je,Le,Ie[ie]);for(let Ce=0;Ce<Z.length;Ce++){let we=Z[Ce];Ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,je,Le,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,rt,je,Le,we.image[ie])}}}p(E)&&m(i.TEXTURE_CUBE_MAP),te.__version=re.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function be(D,E,V,ne,re,te){let ke=r.convert(V.format,V.colorSpace),Me=r.convert(V.type),Re=_(V.internalFormat,ke,Me,V.colorSpace),nt=n.get(E),he=n.get(V);if(he.__renderTarget=E,!nt.__hasExternalTextures){let Ie=Math.max(1,E.width>>te),ze=Math.max(1,E.height>>te);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,te,Re,Ie,ze,E.depth,0,ke,Me,null):t.texImage2D(re,te,Re,Ie,ze,0,ke,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,re,he.__webglTexture,0,pe(E)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,re,he.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(D,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){let ne=E.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,te=x(E.stencilBuffer,re),ke=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=pe(E);ve(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,te,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,te,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,D)}else{let ne=E.textures;for(let re=0;re<ne.length;re++){let te=ne[re],ke=r.convert(te.format,te.colorSpace),Me=r.convert(te.type),Re=_(te.internalFormat,ke,Me,te.colorSpace),nt=pe(E);V&&ve(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Re,E.width,E.height):ve(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ne=n.get(E.depthTexture);ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);let re=ne.__webglTexture,te=pe(E);if(E.depthTexture.format===Ls)ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(E.depthTexture.format===Gi)ve(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Fe(D){let E=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){let ne=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){let re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",re)};ne.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ne}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ye(E.__webglFramebuffer,D)}else if(V){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=i.createRenderbuffer(),le(E.__webglDepthbuffer[ne],D,!1);else{let re=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),le(E.__webglDepthbuffer,D,!1);else{let ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(D,E,V){let ne=n.get(D);E!==void 0&&be(ne.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Fe(D)}function ut(D){let E=D.texture,V=n.get(D),ne=n.get(E);D.addEventListener("dispose",T);let re=D.textures,te=D.isWebGLCubeRenderTarget===!0,ke=re.length>1;if(ke||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=E.version,o.memory.textures++),te){V.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[Me]=[];for(let Re=0;Re<E.mipmaps.length;Re++)V.__webglFramebuffer[Me][Re]=i.createFramebuffer()}else V.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)V.__webglFramebuffer[Me]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Me=0,Re=re.length;Me<Re;Me++){let nt=n.get(re[Me]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ve(D)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<re.length;Me++){let Re=re[Me];V.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);let nt=r.convert(Re.format,Re.colorSpace),he=r.convert(Re.type),Ie=_(Re.internalFormat,nt,he,Re.colorSpace,D.isXRRenderTarget===!0),ze=pe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ie,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),le(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,E);for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)be(V.__webglFramebuffer[Me][Re],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Re);else be(V.__webglFramebuffer[Me],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);p(E)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Me=0,Re=re.length;Me<Re;Me++){let nt=re[Me],he=n.get(nt);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Ae(i.TEXTURE_2D,nt),be(V.__webglFramebuffer,D,nt,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),p(nt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ne.__webglTexture),Ae(Me,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)be(V.__webglFramebuffer[Re],D,E,i.COLOR_ATTACHMENT0,Me,Re);else be(V.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,Me,0);p(E)&&m(Me),t.unbindTexture()}D.depthBuffer&&Fe(D)}function z(D){let E=D.textures;for(let V=0,ne=E.length;V<ne;V++){let re=E[V];if(p(re)){let te=S(D),ke=n.get(re).__webglTexture;t.bindTexture(te,ke),m(te),t.unbindTexture()}}}let Q=[],N=[];function fe(D){if(D.samples>0){if(ve(D)===!1){let E=D.textures,V=D.width,ne=D.height,re=i.COLOR_BUFFER_BIT,te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(D),Me=E.length>1;if(Me)for(let Re=0;Re<E.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Re]);let nt=n.get(E[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,V,ne,0,0,V,ne,re,i.NEAREST),l===!0&&(Q.length=0,N.length=0,Q.push(i.COLOR_ATTACHMENT0+Re),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Q.push(te),N.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Re=0;Re<E.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Re]);let nt=n.get(E[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function pe(D){return Math.min(s.maxSamples,D.samples)}function ve(D){let E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function me(D){let E=o.render.frame;c.get(D)!==E&&(c.set(D,E),D.update())}function Oe(D,E){let V=D.colorSpace,ne=D.format,re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==Xs&&V!==Qn&&(dt.getTransfer(V)===Mt?(ne!==Rn||re!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function _e(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=se,this.setTextureCube=$,this.rebindTextures=Be,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ve}function Fy(i,e){function t(n,s=Qn){let r,o=dt.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===ah)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.BYTE;if(n===Td)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===oh)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===wd)return i.ALPHA;if(n===Ad)return i.RGB;if(n===Rn)return i.RGBA;if(n===Rd)return i.LUMINANCE;if(n===Cd)return i.LUMINANCE_ALPHA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===Pd)return i.RED;if(n===ch)return i.RED_INTEGER;if(n===Id)return i.RG;if(n===hh)return i.RG_INTEGER;if(n===uh)return i.RGBA_INTEGER;if(n===So||n===To||n===Eo||n===wo)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Xl)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===lc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ld||n===hc||n===uc||n===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ac=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qe=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Oy={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(h,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,By=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new _n,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:ky,fragmentShader:By,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends Wi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null,v=new Rc,p=t.getContextAttributes(),m=null,S=null,_=[],x=[],A=new Se,M=null,T=new en;T.viewport=new Tt;let L=new en;L.viewport=new Tt;let b=[T,L],y=new Ac,R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=_[K];return oe===void 0&&(oe=new _r,_[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=_[K];return oe===void 0&&(oe=new _r,_[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=_[K];return oe===void 0&&(oe=new _r,_[K]=oe),oe.getHandSpace()};function F(K){let oe=x.indexOf(K.inputSource);if(oe===-1)return;let be=_[oe];be!==void 0&&(be.update(K.inputSource,K.frame,h||o),be.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<_.length;K++){let oe=x[K];oe!==null&&(x[K]=null,_[K].disconnect(oe))}R=null,I=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,S=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){let oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ft(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let oe=null,be=null,le=null;p.depth&&(le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?Gi:Ls,be=p.stencil?Vi:ls);let ye={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ft(d.textureWidth,d.textureHeight,{format:Rn,type:Gn,depthTexture:new Xi(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(K){for(let oe=0;oe<K.removed.length;oe++){let be=K.removed[oe],le=x.indexOf(be);le>=0&&(x[le]=null,_[le].disconnect(be))}for(let oe=0;oe<K.added.length;oe++){let be=K.added[oe],le=x.indexOf(be);if(le===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=x.length){x.push(be),le=Fe;break}else if(x[Fe]===null){x[Fe]=be,le=Fe;break}if(le===-1)break}let ye=_[le];ye&&ye.connect(be)}}let W=new U,se=new U;function $(K,oe,be){W.setFromMatrixPosition(oe.matrixWorld),se.setFromMatrixPosition(be.matrixWorld);let le=W.distanceTo(se),ye=oe.projectionMatrix.elements,Fe=be.projectionMatrix.elements,Be=ye[14]/(ye[10]-1),ut=ye[14]/(ye[10]+1),z=(ye[9]+1)/ye[5],Q=(ye[9]-1)/ye[5],N=(ye[8]-1)/ye[0],fe=(Fe[8]+1)/Fe[0],pe=Be*N,ve=Be*fe,me=le/(-N+fe),Oe=me*-N;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Oe),K.translateZ(me),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let _e=Be+me,D=ut+me,E=pe-Oe,V=ve+(le-Oe),ne=z*ut/D*_e,re=Q*ut/D*_e;K.projectionMatrix.makePerspective(E,V,ne,re,_e,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let oe=K.near,be=K.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(be=v.depthFar)),y.near=L.near=T.near=oe,y.far=L.far=T.far=be,(R!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,I=y.far),T.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,y.layers.mask=T.layers.mask|L.layers.mask;let le=K.parent,ye=y.cameras;ue(y,le);for(let Fe=0;Fe<ye.length;Fe++)ue(ye[Fe],le);ye.length===2?$(y,T,L):y.projectionMatrix.copy(T.projectionMatrix),ee(K,y,le)};function ee(K,oe,be){be===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Po*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ae=null;function Ae(K,oe){if(c=oe.getViewerPose(h||o),g=oe,c!==null){let be=c.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let le=!1;be.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Fe=0;Fe<be.length;Fe++){let Be=be[Fe],ut=null;if(f!==null)ut=f.getViewport(Be);else{let Q=u.getViewSubImage(d,Be);ut=Q.viewport,Fe===0&&(e.setRenderTargetTextures(S,Q.colorTexture,d.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(S))}let z=b[Fe];z===void 0&&(z=new en,z.layers.enable(Fe),z.viewport=new Tt,b[Fe]=z),z.matrix.fromArray(Be.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Be.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(ut.x,ut.y,ut.width,ut.height),Fe===0&&(y.matrix.copy(z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(z)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")){let Fe=u.getDepthInformation(be[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,s.renderState)}}for(let be=0;be<_.length;be++){let le=x[be],ye=_[be];le!==null&&ye!==void 0&&ye.update(le,oe,h||o)}ae&&ae(K,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Ve=new Od;Ve.setAnimationLoop(Ae),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}},ns=new ti,zy=new gt;function Hy(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Fd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,_):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),_=S.envMap,x=S.envMapRotation;_&&(p.envMap.value=_,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),p.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(ns)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let x=_.program;n.uniformBlockBinding(S,x)}function h(S,_){let x=s[S.id];x===void 0&&(g(S),x=c(S),s[S.id]=x,S.addEventListener("dispose",p));let A=_.program;n.updateUBOMapping(S,A);let M=e.render.frame;r[S.id]!==M&&(d(S),r[S.id]=M)}function c(S){let _=u();S.__bindingPointIndex=_;let x=i.createBuffer(),A=S.__size,M=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let _=s[S.id],x=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=x.length;M<T;M++){let L=Array.isArray(x[M])?x[M]:[x[M]];for(let b=0,y=L.length;b<y;b++){let R=L[b];if(f(R,M,b,A)===!0){let I=R.__offset,F=Array.isArray(R.value)?R.value:[R.value],H=0;for(let Y=0;Y<F.length;Y++){let W=F[Y],se=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,I+H,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,H),H+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,_,x,A){let M=S.value,T=_+"_"+x;if(A[T]===void 0)return typeof M=="number"||typeof M=="boolean"?A[T]=M:A[T]=M.clone(),!0;{let L=A[T];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return A[T]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(S){let _=S.uniforms,x=0,A=16;for(let T=0,L=_.length;T<L;T++){let b=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,R=b.length;y<R;y++){let I=b[y],F=Array.isArray(I.value)?I.value:[I.value];for(let H=0,Y=F.length;H<Y;H++){let W=F[H],se=v(W),$=x%A,ue=$%se.boundary,ee=$+ue;x+=ue,ee!==0&&A-ee<se.storage&&(x+=A-ee),I.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=se.storage}}}let M=x%A;return M>0&&(x+=A-M),S.__size=x,S.__cache={},this}function v(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function p(S){let _=S.target;_.removeEventListener("dispose",p);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:m}}var ko=class{constructor(e={}){let{canvas:t=qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),p=null,m=null,S=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Bi,this.toneMappingExposure=1;let x=this,A=!1,M=0,T=0,L=null,b=-1,y=null,R=new Tt,I=new Tt,F=null,H=new Ue(0),Y=0,W=t.width,se=t.height,$=1,ue=null,ee=null,ae=new Tt(0,0,W,se),Ae=new Tt(0,0,W,se),Ve=!1,K=new Tr,oe=!1,be=!1,le=new gt,ye=new gt,Fe=new U,Be=new Tt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function Q(){return L===null?$:1}let N=n;function fe(C,k){return t.getContext(C,k)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",we,!1),N===null){let k="webgl2";if(N=fe(k,C),N===null)throw fe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pe,ve,me,Oe,_e,D,E,V,ne,re,te,ke,Me,Re,nt,he,Ie,ze,je,Le,rt,Ze,ht,O;function xe(){pe=new sv(N),pe.init(),Ze=new Fy(N,pe),ve=new jg(N,pe,e,Ze),me=new Dy(N,pe),ve.reverseDepthBuffer&&d&&me.buffers.depth.setReversed(!0),Oe=new av(N),_e=new xy,D=new Uy(N,pe,me,_e,ve,Ze,Oe),E=new ev(x),V=new iv(x),ne=new p0(N),ht=new Kg(N,ne),re=new rv(N,ne,Oe,ht),te=new cv(N,re,ne,Oe),je=new lv(N,ve,D),he=new Qg(_e),ke=new _y(x,E,V,pe,ve,ht,he),Me=new Hy(x,_e),Re=new My,nt=new Ry(pe),ze=new Zg(x,E,V,me,te,f,l),Ie=new Iy(x,te,ve),O=new Vy(N,Oe,ve,me),Le=new Jg(N,pe,Oe),rt=new ov(N,pe,Oe),Oe.programs=ke.programs,x.capabilities=ve,x.extensions=pe,x.properties=_e,x.renderLists=Re,x.shadowMap=Ie,x.state=me,x.info=Oe}xe();let Z=new Cc(x,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let C=pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(W,se,!1))},this.getSize=function(C){return C.set(W,se)},this.setSize=function(C,k,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,se=k,t.width=Math.floor(C*$),t.height=Math.floor(k*$),X===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(W*$,se*$).floor()},this.setDrawingBufferSize=function(C,k,X){W=C,se=k,$=X,t.width=Math.floor(C*X),t.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,k,X,q){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,k,X,q),me.viewport(R.copy(ae).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(Ae)},this.setScissor=function(C,k,X,q){C.isVector4?Ae.set(C.x,C.y,C.z,C.w):Ae.set(C,k,X,q),me.scissor(I.copy(Ae).multiplyScalar($).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(C){me.setScissorTest(Ve=C)},this.setOpaqueSort=function(C){ue=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(C=!0,k=!0,X=!0){let q=0;if(C){let B=!1;if(L!==null){let ge=L.texture.format;B=ge===uh||ge===hh||ge===ch}if(B){let ge=L.texture.type,Pe=ge===Gn||ge===ls||ge===Mr||ge===Vi||ge===ah||ge===lh,Ge=ze.getClearColor(),We=ze.getClearAlpha(),tt=Ge.r,it=Ge.g,$e=Ge.b;Pe?(g[0]=tt,g[1]=it,g[2]=$e,g[3]=We,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=tt,v[1]=it,v[2]=$e,v[3]=We,N.clearBufferiv(N.COLOR,0,v))}else q|=N.COLOR_BUFFER_BIT}k&&(q|=N.DEPTH_BUFFER_BIT),X&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Re.dispose(),nt.dispose(),_e.dispose(),E.dispose(),V.dispose(),te.dispose(),ht.dispose(),O.dispose(),ke.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ft),Z.removeEventListener("sessionend",_t),kt.stop()};function ie(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let C=Oe.autoReset,k=Ie.enabled,X=Ie.autoUpdate,q=Ie.needsUpdate,B=Ie.type;xe(),Oe.autoReset=C,Ie.enabled=k,Ie.autoUpdate=X,Ie.needsUpdate=q,Ie.type=B}function we(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function et(C){let k=C.target;k.removeEventListener("dispose",et),P(k)}function P(C){G(C),_e.remove(C)}function G(C){let k=_e.get(C).programs;k!==void 0&&(k.forEach(function(X){ke.releaseProgram(X)}),C.isShaderMaterial&&ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,q,B,ge){k===null&&(k=ut);let Pe=B.isMesh&&B.matrixWorld.determinant()<0,Ge=dp(C,k,X,q,B);me.setMaterial(q,Pe);let We=X.index,tt=1;if(q.wireframe===!0){if(We=re.getWireframeAttribute(X),We===void 0)return;tt=2}let it=X.drawRange,$e=X.attributes.position,mt=it.start*tt,At=(it.start+it.count)*tt;ge!==null&&(mt=Math.max(mt,ge.start*tt),At=Math.min(At,(ge.start+ge.count)*tt)),We!==null?(mt=Math.max(mt,0),At=Math.min(At,We.count)):$e!=null&&(mt=Math.max(mt,0),At=Math.min(At,$e.count));let Rt=At-mt;if(Rt<0||Rt===1/0)return;ht.setup(B,q,Ge,X,We);let vn,xt=Le;if(We!==null&&(vn=ne.get(We),xt=rt,xt.setIndex(vn)),B.isMesh)q.wireframe===!0?(me.setLineWidth(q.wireframeLinewidth*Q()),xt.setMode(N.LINES)):xt.setMode(N.TRIANGLES);else if(B.isLine){let qe=q.linewidth;qe===void 0&&(qe=1),me.setLineWidth(qe*Q()),B.isLineSegments?xt.setMode(N.LINES):B.isLineLoop?xt.setMode(N.LINE_LOOP):xt.setMode(N.LINE_STRIP)}else B.isPoints?xt.setMode(N.POINTS):B.isSprite&&xt.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let qe=B._multiDrawStarts,ui=B._multiDrawCounts,bt=B._multiDrawCount,Bn=We?ne.get(We).bytesPerElement:1,ms=_e.get(q).currentProgram.getUniforms();for(let Tn=0;Tn<bt;Tn++)ms.setValue(N,"_gl_DrawID",Tn),xt.render(qe[Tn]/Bn,ui[Tn])}else if(B.isInstancedMesh)xt.renderInstances(mt,Rt,B.count);else if(X.isInstancedBufferGeometry){let qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ui=Math.min(X.instanceCount,qe);xt.renderInstances(mt,Rt,ui)}else xt.render(mt,Rt)};function J(C,k,X){C.transparent===!0&&C.side===An&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,Yr(C,k,X),C.side=zi,C.needsUpdate=!0,Yr(C,k,X),C.side=An):Yr(C,k,X)}this.compile=function(C,k,X=null){X===null&&(X=C),m=nt.get(X),m.init(k),_.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),C!==X&&C.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();let q=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ge=B.material;if(ge)if(Array.isArray(ge))for(let Pe=0;Pe<ge.length;Pe++){let Ge=ge[Pe];J(Ge,X,B),q.add(Ge)}else J(ge,X,B),q.add(ge)}),_.pop(),m=null,q},this.compileAsync=function(C,k,X=null){let q=this.compile(C,k,X);return new Promise(B=>{function ge(){if(q.forEach(function(Pe){_e.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){B(C);return}setTimeout(ge,10)}pe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let de=null;function Ye(C){de&&de(C)}function ft(){kt.stop()}function _t(){kt.start()}let kt=new Od;kt.setAnimationLoop(Ye),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(C){de=C,Z.setAnimationLoop(C),C===null?kt.stop():kt.start()},Z.addEventListener("sessionstart",ft),Z.addEventListener("sessionend",_t),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,L),m=nt.get(C,_.length),m.init(k),_.push(m),ye.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(ye),be=this.localClippingEnabled,oe=he.init(this.clippingPlanes,be),p=Re.get(C,S.length),p.init(),S.push(p),Z.enabled===!0&&Z.isPresenting===!0){let ge=x.xr.getDepthSensingMesh();ge!==null&&jt(ge,k,-1/0,x.sortObjects)}jt(C,k,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(ue,ee),z=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,z&&ze.addToRenderList(p,C),this.info.render.frame++,oe===!0&&he.beginShadows();let X=m.state.shadowsArray;Ie.render(X,C,k),oe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=p.opaque,B=p.transmissive;if(m.setupLights(),k.isArrayCamera){let ge=k.cameras;if(B.length>0)for(let Pe=0,Ge=ge.length;Pe<Ge;Pe++){let We=ge[Pe];su(q,B,C,We)}z&&ze.render(C);for(let Pe=0,Ge=ge.length;Pe<Ge;Pe++){let We=ge[Pe];iu(p,C,We,We.viewport)}}else B.length>0&&su(q,B,C,k),z&&ze.render(C),iu(p,C,k);L!==null&&(D.updateMultisampleRenderTarget(L),D.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(x,C,k),ht.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?(m=_[_.length-1],oe===!0&&he.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function jt(C,k,X,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){q&&Be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);let Pe=te.update(C),Ge=C.material;Ge.visible&&p.push(C,Pe,Ge,X,Be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){let Pe=te.update(C),Ge=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Be.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Be.copy(Pe.boundingSphere.center)),Be.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(Ge)){let We=Pe.groups;for(let tt=0,it=We.length;tt<it;tt++){let $e=We[tt],mt=Ge[$e.materialIndex];mt&&mt.visible&&p.push(C,Pe,mt,X,Be.z,$e)}}else Ge.visible&&p.push(C,Pe,Ge,X,Be.z,null)}}let ge=C.children;for(let Pe=0,Ge=ge.length;Pe<Ge;Pe++)jt(ge[Pe],k,X,q)}function iu(C,k,X,q){let B=C.opaque,ge=C.transmissive,Pe=C.transparent;m.setupLightsView(X),oe===!0&&he.setGlobalState(x.clippingPlanes,X),q&&me.viewport(R.copy(q)),B.length>0&&qr(B,k,X),ge.length>0&&qr(ge,k,X),Pe.length>0&&qr(Pe,k,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function su(C,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Ft(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?un:Gn,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let ge=m.state.transmissionRenderTarget[q.id],Pe=q.viewport||R;ge.setSize(Pe.z,Pe.w);let Ge=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(H),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),z&&ze.render(X);let We=x.toneMapping;x.toneMapping=Bi;let tt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),oe===!0&&he.setGlobalState(x.clippingPlanes,q),qr(C,X,q),D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge),pe.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let $e=0,mt=k.length;$e<mt;$e++){let At=k[$e],Rt=At.object,vn=At.geometry,xt=At.material,qe=At.group;if(xt.side===An&&Rt.layers.test(q.layers)){let ui=xt.side;xt.side=cn,xt.needsUpdate=!0,ru(Rt,X,q,vn,xt,qe),xt.side=ui,xt.needsUpdate=!0,it=!0}}it===!0&&(D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge))}x.setRenderTarget(Ge),x.setClearColor(H,Y),tt!==void 0&&(q.viewport=tt),x.toneMapping=We}function qr(C,k,X){let q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ge=C.length;B<ge;B++){let Pe=C[B],Ge=Pe.object,We=Pe.geometry,tt=q===null?Pe.material:q,it=Pe.group;Ge.layers.test(X.layers)&&ru(Ge,k,X,We,tt,it)}}function ru(C,k,X,q,B,ge){C.onBeforeRender(x,k,X,q,B,ge),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(x,k,X,q,C,ge),B.transparent===!0&&B.side===An&&B.forceSinglePass===!1?(B.side=cn,B.needsUpdate=!0,x.renderBufferDirect(X,k,q,B,C,ge),B.side=zi,B.needsUpdate=!0,x.renderBufferDirect(X,k,q,B,C,ge),B.side=An):x.renderBufferDirect(X,k,q,B,C,ge),C.onAfterRender(x,k,X,q,B,ge)}function Yr(C,k,X){k.isScene!==!0&&(k=ut);let q=_e.get(C),B=m.state.lights,ge=m.state.shadowsArray,Pe=B.state.version,Ge=ke.getParameters(C,B.state,ge,k,X),We=ke.getProgramCacheKey(Ge),tt=q.programs;q.environment=C.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(C.isMeshStandardMaterial?V:E).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",et),tt=new Map,q.programs=tt);let it=tt.get(We);if(it!==void 0){if(q.currentProgram===it&&q.lightsStateVersion===Pe)return au(C,Ge),it}else Ge.uniforms=ke.getUniforms(C),C.onBeforeCompile(Ge,x),it=ke.acquireProgram(Ge,We),tt.set(We,it),q.uniforms=Ge.uniforms;let $e=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=he.uniform),au(C,Ge),q.needsLights=pp(C),q.lightsStateVersion=Pe,q.needsLights&&($e.ambientLightColor.value=B.state.ambient,$e.lightProbe.value=B.state.probe,$e.directionalLights.value=B.state.directional,$e.directionalLightShadows.value=B.state.directionalShadow,$e.spotLights.value=B.state.spot,$e.spotLightShadows.value=B.state.spotShadow,$e.rectAreaLights.value=B.state.rectArea,$e.ltc_1.value=B.state.rectAreaLTC1,$e.ltc_2.value=B.state.rectAreaLTC2,$e.pointLights.value=B.state.point,$e.pointLightShadows.value=B.state.pointShadow,$e.hemisphereLights.value=B.state.hemi,$e.directionalShadowMap.value=B.state.directionalShadowMap,$e.directionalShadowMatrix.value=B.state.directionalShadowMatrix,$e.spotShadowMap.value=B.state.spotShadowMap,$e.spotLightMatrix.value=B.state.spotLightMatrix,$e.spotLightMap.value=B.state.spotLightMap,$e.pointShadowMap.value=B.state.pointShadowMap,$e.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=it,q.uniformsList=null,it}function ou(C){if(C.uniformsList===null){let k=C.currentProgram.getUniforms();C.uniformsList=Ns.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function au(C,k){let X=_e.get(C);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function dp(C,k,X,q,B){k.isScene!==!0&&(k=ut),D.resetTextureUnits();let ge=k.fog,Pe=q.isMeshStandardMaterial?k.environment:null,Ge=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xs,We=(q.isMeshStandardMaterial?V:E).get(q.envMap||Pe),tt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,it=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),$e=!!X.morphAttributes.position,mt=!!X.morphAttributes.normal,At=!!X.morphAttributes.color,Rt=Bi;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let vn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=vn!==void 0?vn.length:0,qe=_e.get(q),ui=m.state.lights;if(oe===!0&&(be===!0||C!==y)){let Ln=C===y&&q.id===b;he.setState(q,C,Ln)}let bt=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ui.state.version||qe.outputColorSpace!==Ge||B.isBatchedMesh&&qe.batching===!1||!B.isBatchedMesh&&qe.batching===!0||B.isBatchedMesh&&qe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&qe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&qe.instancing===!1||!B.isInstancedMesh&&qe.instancing===!0||B.isSkinnedMesh&&qe.skinning===!1||!B.isSkinnedMesh&&qe.skinning===!0||B.isInstancedMesh&&qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&qe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&qe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&qe.instancingMorph===!1&&B.morphTexture!==null||qe.envMap!==We||q.fog===!0&&qe.fog!==ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==he.numPlanes||qe.numIntersection!==he.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==$e||qe.morphNormals!==mt||qe.morphColors!==At||qe.toneMapping!==Rt||qe.morphTargetsCount!==xt)&&(bt=!0):(bt=!0,qe.__version=q.version);let Bn=qe.currentProgram;bt===!0&&(Bn=Yr(q,k,B));let ms=!1,Tn=!1,lr=!1,Ct=Bn.getUniforms(),Jn=qe.uniforms;if(me.useProgram(Bn.program)&&(ms=!0,Tn=!0,lr=!0),q.id!==b&&(b=q.id,Tn=!0),ms||y!==C){me.buffers.depth.getReversed()?(le.copy(C.projectionMatrix),Zp(le),Kp(le),Ct.setValue(N,"projectionMatrix",le)):Ct.setValue(N,"projectionMatrix",C.projectionMatrix),Ct.setValue(N,"viewMatrix",C.matrixWorldInverse);let Ii=Ct.map.cameraPosition;Ii!==void 0&&Ii.setValue(N,Fe.setFromMatrixPosition(C.matrixWorld)),ve.logarithmicDepthBuffer&&Ct.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ct.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Tn=!0,lr=!0)}if(B.isSkinnedMesh){Ct.setOptional(N,B,"bindMatrix"),Ct.setOptional(N,B,"bindMatrixInverse");let Ln=B.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ct.setValue(N,"boneTexture",Ln.boneTexture,D))}B.isBatchedMesh&&(Ct.setOptional(N,B,"batchingTexture"),Ct.setValue(N,"batchingTexture",B._matricesTexture,D),Ct.setOptional(N,B,"batchingIdTexture"),Ct.setValue(N,"batchingIdTexture",B._indirectTexture,D),Ct.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&Ct.setValue(N,"batchingColorTexture",B._colorsTexture,D));let cr=X.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&je.update(B,X,Bn),(Tn||qe.receiveShadow!==B.receiveShadow)&&(qe.receiveShadow=B.receiveShadow,Ct.setValue(N,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Jn.envMap.value=We,Jn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Jn.envMapIntensity.value=k.environmentIntensity),Tn&&(Ct.setValue(N,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&fp(Jn,lr),ge&&q.fog===!0&&Me.refreshFogUniforms(Jn,ge),Me.refreshMaterialUniforms(Jn,q,$,se,m.state.transmissionRenderTarget[C.id]),Ns.upload(N,ou(qe),Jn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ns.upload(N,ou(qe),Jn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ct.setValue(N,"center",B.center),Ct.setValue(N,"modelViewMatrix",B.modelViewMatrix),Ct.setValue(N,"normalMatrix",B.normalMatrix),Ct.setValue(N,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Ln=q.uniformsGroups;for(let Ii=0,Li=Ln.length;Ii<Li;Ii++){let lu=Ln[Ii];O.update(lu,Bn),O.bind(lu,Bn)}}return Bn}function fp(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function pp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,k,X){_e.get(C.texture).__webglTexture=k,_e.get(C.depthTexture).__webglTexture=X;let q=_e.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){let X=_e.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){L=C,M=k,T=X;let q=!0,B=null,ge=!1,Pe=!1;if(C){let We=_e.get(C);if(We.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(We.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(We.__hasExternalTextures)D.rebindTextures(C,_e.get(C.texture).__webglTexture,_e.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let $e=C.depthTexture;if(We.__boundDepthTexture!==$e){if($e!==null&&_e.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}let tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Pe=!0);let it=_e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[k])?B=it[k][X]:B=it[k],ge=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?B=_e.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?B=it[X]:B=it,R.copy(C.viewport),I.copy(C.scissor),F=C.scissorTest}else R.copy(ae).multiplyScalar($).floor(),I.copy(Ae).multiplyScalar($).floor(),F=Ve;if(me.bindFramebuffer(N.FRAMEBUFFER,B)&&q&&me.drawBuffers(C,B),me.viewport(R),me.scissor(I),me.setScissorTest(F),ge){let We=_e.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,We.__webglTexture,X)}else if(Pe){let We=_e.get(C.texture),tt=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,X||0,tt)}b=-1},this.readRenderTargetPixels=function(C,k,X,q,B,ge,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ge=Ge[Pe]),Ge){me.bindFramebuffer(N.FRAMEBUFFER,Ge);try{let We=C.texture,tt=We.format,it=We.type;if(!ve.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&X>=0&&X<=C.height-B&&N.readPixels(k,X,q,B,Ze.convert(tt),Ze.convert(it),ge)}finally{let We=L!==null?_e.get(L).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,k,X,q,B,ge,Pe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ge=Ge[Pe]),Ge){let We=C.texture,tt=We.format,it=We.type;if(!ve.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-q&&X>=0&&X<=C.height-B){me.bindFramebuffer(N.FRAMEBUFFER,Ge);let $e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(k,X,q,B,Ze.convert(tt),Ze.convert(it),0);let mt=L!==null?_e.get(L).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,mt);let At=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yp(N,At,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer($e),N.deleteSync(At),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,X=0){C.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);let q=Math.pow(2,-X),B=Math.floor(C.image.width*q),ge=Math.floor(C.image.height*q),Pe=k!==null?k.x:0,Ge=k!==null?k.y:0;D.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Pe,Ge,B,ge),me.unbindTexture()},this.copyTextureToTexture=function(C,k,X=null,q=null,B=0){C.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],k=arguments[2],B=arguments[3]||0,X=null);let ge,Pe,Ge,We,tt,it,$e,mt,At,Rt=C.isCompressedTexture?C.mipmaps[B]:C.image;X!==null?(ge=X.max.x-X.min.x,Pe=X.max.y-X.min.y,Ge=X.isBox3?X.max.z-X.min.z:1,We=X.min.x,tt=X.min.y,it=X.isBox3?X.min.z:0):(ge=Rt.width,Pe=Rt.height,Ge=Rt.depth||1,We=0,tt=0,it=0),q!==null?($e=q.x,mt=q.y,At=q.z):($e=0,mt=0,At=0);let vn=Ze.convert(k.format),xt=Ze.convert(k.type),qe;k.isData3DTexture?(D.setTexture3D(k,0),qe=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),qe=N.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),qe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);let ui=N.getParameter(N.UNPACK_ROW_LENGTH),bt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Bn=N.getParameter(N.UNPACK_SKIP_PIXELS),ms=N.getParameter(N.UNPACK_SKIP_ROWS),Tn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,tt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,it);let lr=C.isDataArrayTexture||C.isData3DTexture,Ct=k.isDataArrayTexture||k.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Jn=_e.get(C),cr=_e.get(k),Ln=_e.get(Jn.__renderTarget),Ii=_e.get(cr.__renderTarget);me.bindFramebuffer(N.READ_FRAMEBUFFER,Ln.__webglFramebuffer),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Li=0;Li<Ge;Li++)lr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(C).__webglTexture,B,it+Li),C.isDepthTexture?(Ct&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.get(k).__webglTexture,B,At+Li),N.blitFramebuffer(We,tt,ge,Pe,$e,mt,ge,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ct?N.copyTexSubImage3D(qe,B,$e,mt,At+Li,We,tt,ge,Pe):N.copyTexSubImage2D(qe,B,$e,mt,At+Li,We,tt,ge,Pe);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(qe,B,$e,mt,At,ge,Pe,Ge,vn,xt,Rt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(qe,B,$e,mt,At,ge,Pe,Ge,vn,Rt.data):N.texSubImage3D(qe,B,$e,mt,At,ge,Pe,Ge,vn,xt,Rt):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,$e,mt,ge,Pe,vn,xt,Rt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,$e,mt,Rt.width,Rt.height,vn,Rt.data):N.texSubImage2D(N.TEXTURE_2D,B,$e,mt,ge,Pe,vn,xt,Rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ui),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ms),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Tn),B===0&&k.generateMipmaps&&N.generateMipmap(qe),me.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X=null,q=null,B=0){return C.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,C=arguments[2],k=arguments[3],B=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,X,q,B)},this.initRenderTarget=function(C){_e.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),me.unbindTexture()},this.resetState=function(){M=0,T=0,L=null,me.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}},Bo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Hs=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Vs=class extends _n{constructor(e=null,t=1,n=1,s,r,o,a,l,h=hn,c=hn,u,d){super(null,o,a,l,h,c,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=class extends ni{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},zo=new U,Ho=new U,ld=new gt,mr=new ks,vo=new cs,Sl=new U,cd=new U,Pc=class extends nn{constructor(e=new Pt,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zo.fromBufferAttribute(t,s-1),Ho.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zo.distanceTo(Ho);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;ld.copy(s).invert(),mr.copy(e.ray).applyMatrix4(ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=h){let m=c.getX(v),S=c.getX(v+1),_=yo(this,e,mr,l,m,S);_&&t.push(_)}if(this.isLineLoop){let v=c.getX(g-1),p=c.getX(f),m=yo(this,e,mr,l,v,p);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=h){let m=yo(this,e,mr,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=yo(this,e,mr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yo(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(zo.fromBufferAttribute(o,s),Ho.fromBufferAttribute(o,r),t.distanceSqToSegment(zo,Ho,Sl,cd)>n)return;Sl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Sl);if(!(l<e.near||l>e.far))return{distance:l,point:cd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var hd=new U,ud=new U,wr=class extends Pc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)hd.fromBufferAttribute(t,s),ud.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hd.distanceTo(ud);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ar=class extends ni{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dd=new gt,Ic=new ks,_o=new cs,xo=new U,Vo=class extends nn{constructor(e=new Pt,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;dd.copy(s).invert(),Ic.copy(e.ray).applyMatrix4(dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let p=h.getX(g);xo.fromBufferAttribute(u,p),fd(xo,p,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)xo.fromBufferAttribute(u,g),fd(xo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fd(i,e,t,n,s,r,o){let a=Ic.distanceSqToPoint(i);if(a<t){let l=new U;Ic.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ii=class extends _n{constructor(e,t,n,s,r,o,a,l,h){super(e,t,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let c=n[s],d=n[s+1]-c,f=(o-c)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new U,s=[],r=[],o=[],a=new U,l=new gt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Go=class extends $n{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lc=class extends Go{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var bo=new U,Tl=new ph,El=new ph,wl=new ph,qi=class extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),h=bo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(c),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Tl.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,v,p),El.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,v,p),wl.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,v,p)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),El.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),wl.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(Tl.calc(l),El.calc(l),wl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Gy(i,e){let t=1-i;return t*t*e}function Wy(i,e){return 2*(1-i)*i*e}function $y(i,e){return i*i*e}function xr(i,e,t,n){return Gy(i,e)+Wy(i,t)+$y(i,n)}function Xy(i,e){let t=1-i;return t*t*t*e}function qy(i,e){let t=1-i;return 3*t*t*i*e}function Yy(i,e){return 3*(1-i)*i*i*e}function Zy(i,e){return i*i*i*e}function br(i,e,t,n,s){return Xy(i,e)+qy(i,t)+Yy(i,n)+Zy(i,s)}var Dc=class extends $n{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends $n{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y),br(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Uc=class extends $n{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends $n{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends $n{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(e,s.x,r.x,o.x),xr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends $n{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(e,s.x,r.x,o.x),xr(e,s.y,r.y,o.y),xr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(pd(a,l.x,h.x,c.x,u.x),pd(a,l.y,h.y,c.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Ky=Object.freeze({__proto__:null,ArcCurve:Lc,CatmullRomCurve3:qi,CubicBezierCurve:Dc,CubicBezierCurve3:Nc,EllipseCurve:Go,LineCurve:Uc,LineCurve3:Fc,QuadraticBezierCurve:Oc,QuadraticBezierCurve3:Wo,SplineCurve:kc});var $o=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],h=new U,c=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;h.x=e*Math.cos(f),h.y=e*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[d]/e+1)/2,c.y=(o[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pn=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],u=[],d=[],f=[],g=0,v=[],p=n/2,m=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function S(){let x=new U,A=new U,M=0,T=(t-e)/n;for(let L=0;L<=r;L++){let b=[],y=L/r,R=y*(t-e)+e;for(let I=0;I<=s;I++){let F=I/s,H=F*l+a,Y=Math.sin(H),W=Math.cos(H);A.x=R*Y,A.y=-y*n+p,A.z=R*W,u.push(A.x,A.y,A.z),x.set(Y,T,W).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-y),b.push(g++)}v.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){let y=v[b][L],R=v[b+1][L],I=v[b+1][L+1],F=v[b][L+1];(e>0||b!==0)&&(c.push(y,R,F),M+=3),(t>0||b!==r-1)&&(c.push(R,I,F),M+=3)}h.addGroup(m,M,0),m+=M}function _(x){let A=g,M=new Se,T=new U,L=0,b=x===!0?e:t,y=x===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;let R=g;for(let I=0;I<=s;I++){let H=I/s*l+a,Y=Math.cos(H),W=Math.sin(H);T.x=b*W,T.y=p*y,T.z=b*Y,u.push(T.x,T.y,T.z),d.push(0,y,0),M.x=Y*.5+.5,M.y=W*.5*y+.5,f.push(M.x,M.y),g++}for(let I=0;I<s;I++){let F=A+I,H=R+I;x===!0?c.push(H,H+1,F):c.push(H+1,H,F),L+=3}h.addGroup(m,L,x===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hs=class i extends pn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bc=class i extends Pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new U,x=new U,A=new U;for(let M=0;M<t.length;M+=3)f(t[M+0],_),f(t[M+1],x),f(t[M+2],A),l(_,x,A,S)}function l(S,_,x,A){let M=A+1,T=[];for(let L=0;L<=M;L++){T[L]=[];let b=S.clone().lerp(x,L/M),y=_.clone().lerp(x,L/M),R=M-L;for(let I=0;I<=R;I++)I===0&&L===M?T[L][I]=b:T[L][I]=b.clone().lerp(y,I/R)}for(let L=0;L<M;L++)for(let b=0;b<2*(M-L)-1;b++){let y=Math.floor(b/2);b%2===0?(d(T[L][y+1]),d(T[L+1][y]),d(T[L][y])):(d(T[L][y+1]),d(T[L+1][y+1]),d(T[L+1][y]))}}function h(S){let _=new U;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(S),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function c(){let S=new U;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let x=p(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;o.push(x,1-A)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){let _=o[S+0],x=o[S+2],A=o[S+4],M=Math.max(_,x,A),T=Math.min(_,x,A);M>.9&&T<.1&&(_<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,_){let x=S*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){let S=new U,_=new U,x=new U,A=new U,M=new Se,T=new Se,L=new Se;for(let b=0,y=0;b<r.length;b+=9,y+=6){S.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),M.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),A.copy(S).add(_).add(x).divideScalar(3);let R=p(A);v(M,y+0,S,R),v(T,y+2,_,R),v(L,y+4,x,R)}}function v(S,_,x,A){A<0&&S.x===1&&(o[_]=S.x-1),x.x===0&&x.z===0&&(o[_]=A/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Xo=class i extends Bc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var xn=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,c=[],u=new U,d=new U,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let S=[],_=m/n,x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let M=A/t;u.x=-e*Math.cos(s+M*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+M*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(M+x,1-_),S.push(h++)}c.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let _=c[m][S+1],x=c[m][S],A=c[m+1][S],M=c[m+1][S+1];(m!==0||o>0)&&f.push(_,x,M),(m!==n-1||l<Math.PI)&&f.push(x,A,M)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Un=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],h=[],c=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(v,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var qo=class i extends Pt{constructor(e=new Wo(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,h=new Se,c=new U,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function v(){for(let _=0;_<t;_++)p(_);p(r===!1?t:0),S(),m()}function p(_){c=e.getPointAt(_/t,c);let x=o.normals[_],A=o.binormals[_];for(let M=0;M<=s;M++){let T=M/s*Math.PI*2,L=Math.sin(T),b=-Math.cos(T);l.x=b*x.x+L*A.x,l.y=b*x.y+L*A.y,l.z=b*x.z+L*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){let A=(s+1)*(_-1)+(x-1),M=(s+1)*_+(x-1),T=(s+1)*_+x,L=(s+1)*(_-1)+x;g.push(A,M,L),g.push(M,T,L)}}function S(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)h.x=_/t,h.y=x/s,f.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ky[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Yo=class extends yt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ot=class extends ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yi=class extends Ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zo=class extends ni{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Mo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ws=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends Ws{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fu:r=e,a=2*t-n;break;case pu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fu:o=e,l=2*n-t;break;case pu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let h=(n-t)*.5,c=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,S=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*p+(1.5+f)*v+.5*g,x=f*p-f*v;for(let A=0;A!==a;++A)r[A]=m*o[c+A]+S*o[h+A]+_*o[l+A]+x*o[u+A];return r}},Hc=class extends Ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,c=(n-t)/(s-t),u=1-c;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[l+d]*c;return r}},Vc=class extends Ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case fc:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Jy(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=e[a],c=e[a+1];if(h!==c&&(a!==1||h!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=fc;var us=class extends Xn{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ro;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Xn{};Gc.prototype.ValueTypeName="color";var Wc=class extends Xn{};Wc.prototype.ValueTypeName="number";var $c=class extends Ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),h=e*a;for(let c=h+a;h!==c;h+=4)$i.slerpFlat(r,0,o,h-a,o,h,l);return r}},Ko=class extends Xn{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Xn{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Ro;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Xn{};Xc.prototype.ValueTypeName="vector";var qc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},jy=new qc,Yc=class{constructor(e){this.manager=e!==void 0?e:jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Jo=class extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Al=new gt,md=new U,gd=new U,jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;md.setFromMatrixPosition(e.matrixWorld),t.position.copy(md),gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gd),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zc=class extends jo{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Po*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Si=class extends Rr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vd=new gt,gr=new U,Rl=new U,Kc=class extends jo{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),Rl.copy(n.position),Rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rl),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd)}},si=class extends Rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var Qo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=yd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function yd(){return performance.now()}var mh="\\[\\]\\.:\\/",Qy=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",e_="[^"+mh.replace("\\.","")+"]",t_=/((?:WC+[\/:])*)/.source.replace("WC",gh),n_=/(WCOD+)?/.source.replace("WCOD",e_),i_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),s_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),r_=new RegExp("^"+t_+n_+i_+s_+"$"),o_=["material","materials","bones","map"],Jc=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qy,"")}static parseTrackName(e){let t=r_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);o_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[s];if(o===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Jc;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t1=new Float32Array(1);var _d=new gt,ea=class{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _d.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_d),this}intersectObject(e,t=!0,n=[]){return jc(e,this,n,t),n.sort(xd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)jc(e[s],this,n,t);return n.sort(xd),n}};function xd(i,e){return i.distance-e.distance}function jc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)jc(r[o],e,t,!0)}}var ta=class extends wr{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Pt;r.setIndex(new tn(n,1)),r.setAttribute("position",new ct(s,3)),super(r,new Gs({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);function fs(i){let e=i>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296)}function Ei(i,e,t,n){let s=new Float32Array(i*i),r=1,o=0,a=fs(n);for(let l=0;l<t;l++,e*=2,r*=.5){let h=new Float32Array(e*e);for(let u=0;u<h.length;u++)h[u]=a();let c=e/i;for(let u=0;u<i;u++){let d=u*c,f=Math.floor(d)%e,g=(f+1)%e,v=d-Math.floor(d),p=v*v*(3-2*v);for(let m=0;m<i;m++){let S=m*c,_=Math.floor(S)%e,x=(_+1)%e,A=S-Math.floor(S),M=A*A*(3-2*A),T=h[f*e+_]+(h[f*e+x]-h[f*e+_])*M,L=h[g*e+_]+(h[g*e+x]-h[g*e+_])*M;s[u*i+m]+=(T+(L-T)*p)*r}}o+=r}for(let l=0;l<s.length;l++)s[l]/=o;return s}function qn(i,{srgb:e=!0,repeat:t=!0}={}){let n=new ii(i);return e&&(n.colorSpace=zt),t&&(n.wrapS=n.wrapT=Kt),n.anisotropy=8,n}function Yn(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function vh(i,e,t){t(e),e<i*.25&&t(e+i),e>i*.75&&t(e-i)}function yh({base:i=[214,218,221],seed:e=1,size:t=512,grime:n=1}={}){let s=Ei(t,4,5,e),r=Ei(t,64,2,e+7),o=Yn(t),a=o.getContext("2d"),l=a.createImageData(t,t),h=Yn(t),c=h.getContext("2d"),u=c.createImageData(t,t);for(let p=0;p<t*t;p++){let m=.9+.12*s[p]+.025*(r[p]-.5);l.data[p*4]=i[0]*m,l.data[p*4+1]=i[1]*m,l.data[p*4+2]=i[2]*m,l.data[p*4+3]=255;let S=128+40*(r[p]-.5)+50*(s[p]-.5);u.data[p*4]=u.data[p*4+1]=u.data[p*4+2]=S,u.data[p*4+3]=255}a.putImageData(l,0,0),c.putImageData(u,0,0);let d=fs(e*31);for(let p=0;p<7*n;p++){let m=d()*t,S=d()*t*.8,_=20+d()*70;vh(t,m,x=>{let A=a.createRadialGradient(x,S,_*.2,x,S,_);A.addColorStop(0,`rgba(120,98,60,${.05+d()*.06})`),A.addColorStop(.85,"rgba(110,90,55,0.03)"),A.addColorStop(1,"rgba(110,90,55,0)"),a.fillStyle=A,a.fillRect(x-_,S-_,_*2,_*2)})}for(let p=0;p<16*n;p++){let m=d()*t,S=t*(.15+d()*.5),_=1+d()*3,x=a.createLinearGradient(0,0,0,S);x.addColorStop(0,`rgba(90,80,65,${.06+d()*.06})`),x.addColorStop(1,"rgba(90,80,65,0)"),vh(t,m,A=>{a.fillStyle=x,a.fillRect(A,0,_,S)})}let f=a.createLinearGradient(0,t*.8,0,t);f.addColorStop(0,"rgba(60,55,48,0)"),f.addColorStop(1,`rgba(60,55,48,${.22*n})`),a.fillStyle=f,a.fillRect(0,t*.8,t,t*.2);for(let p=0;p<40*n;p++){let m=d()*t,S=t*(.9+d()*.09),_=6+d()*30;a.strokeStyle=`rgba(30,28,26,${.08+d()*.15})`,a.lineWidth=1+d()*2,vh(t,m,x=>{a.beginPath(),a.moveTo(x,S),a.quadraticCurveTo(x+_/2,S-3+d()*6,x+_,S+(d()-.5)*4),a.stroke()})}let g=qn(o),v=qn(h,{srgb:!1});return{map:g,bump:v}}function _h({base:i=[118,124,130],grout:e=[70,72,74],seed:t=2,size:n=512,tiles:s=4}={}){let r=Ei(n,4,5,t),o=Ei(n,128,1,t+3),a=Yn(n),l=a.getContext("2d"),h=l.createImageData(n,n),c=Yn(n),u=c.getContext("2d"),d=u.createImageData(n,n),f=Yn(n),g=f.getContext("2d"),v=g.createImageData(n,n),p=fs(t*17),m=Array.from({length:s*s},()=>.93+p()*.12),S=n/s,_=2.5;for(let x=0;x<n;x++)for(let A=0;A<n;A++){let M=x*n+A,T=A%S,L=x%S,b=T<_||L<_,y=m[Math.floor(x/S)*s+Math.floor(A/S)],R=(.88+.16*r[M]+.08*(o[M]-.5))*(b?1:y),I=b?e:i;h.data[M*4]=I[0]*R,h.data[M*4+1]=I[1]*R,h.data[M*4+2]=I[2]*R,h.data[M*4+3]=255;let F=b?40:170+30*(o[M]-.5);d.data[M*4]=d.data[M*4+1]=d.data[M*4+2]=F,d.data[M*4+3]=255;let H=b?250:120+110*r[M];v.data[M*4]=v.data[M*4+1]=v.data[M*4+2]=H,v.data[M*4+3]=255}l.putImageData(h,0,0),u.putImageData(d,0,0),g.putImageData(v,0,0);for(let x=0;x<55;x++){let A=p()*n,M=p()*n,T=8+p()*40,L=p()*Math.PI;l.strokeStyle=`rgba(20,20,20,${.06+p()*.16})`,l.lineWidth=.8+p()*1.8,l.beginPath(),l.moveTo(A,M),l.quadraticCurveTo(A+Math.cos(L)*T/2+(p()-.5)*10,M+Math.sin(L)*T/2,A+Math.cos(L)*T,M+Math.sin(L)*T),l.stroke()}for(let x=0;x<6;x++){let A=p()*n,M=p()*n,T=10+p()*34,L=l.createRadialGradient(A,M,2,A,M,T);L.addColorStop(0,"rgba(70,60,45,.10)"),L.addColorStop(1,"rgba(70,60,45,0)"),l.fillStyle=L,l.beginPath(),l.ellipse(A,M,T,T*(.5+p()*.5),p()*3,0,Math.PI*2),l.fill()}return{map:qn(a),bump:qn(c,{srgb:!1}),rough:qn(f,{srgb:!1})}}function Vd({seed:i=3,size:e=512,tiles:t=4}={}){let n=Ei(e,128,2,i),s=Ei(e,8,3,i+1),r=Yn(e),o=r.getContext("2d"),a=o.createImageData(e,e);for(let c=0;c<e*e;c++){let u=.82+.1*s[c]+.16*(n[c]-.5);a.data[c*4]=212*u,a.data[c*4+1]=210*u,a.data[c*4+2]=204*u,a.data[c*4+3]=255}o.putImageData(a,0,0);let l=fs(i*13),h=e/t;for(let c=0;c<3;c++){let u=Math.floor(l()*t)*h,d=Math.floor(l()*t)*h,f=o.createRadialGradient(u+h/2,d+h/2,4,u+h/2,d+h/2,h*.6);f.addColorStop(0,"rgba(150,120,70,.28)"),f.addColorStop(.7,"rgba(150,120,70,.12)"),f.addColorStop(1,"rgba(150,120,70,0)"),o.fillStyle=f,o.fillRect(u,d,h,h)}o.fillStyle="#e8e8e4";for(let c=0;c<=t;c++)o.fillRect(c*h-3,0,6,e),o.fillRect(0,c*h-3,e,6);o.fillStyle="rgba(0,0,0,.25)";for(let c=0;c<=t;c++)o.fillRect(c*h+3,0,1.5,e),o.fillRect(0,c*h+3,e,1.5);return{map:qn(r)}}function xh({base:i=[160,168,176],seed:e=4,size:t=256,brushed:n=!0}={}){let s=Ei(t,4,4,e),r=Yn(t),o=r.getContext("2d"),a=o.createImageData(t,t),l=Yn(t),h=l.getContext("2d"),c=h.createImageData(t,t),u=fs(e*7),d=new Float32Array(t);for(let f=0;f<t;f++)d[f]=u();for(let f=0;f<t;f++)for(let g=0;g<t;g++){let v=f*t+g,p=n?d[f]*.08:0,m=.9+.1*s[v]+p;a.data[v*4]=i[0]*m,a.data[v*4+1]=i[1]*m,a.data[v*4+2]=i[2]*m,a.data[v*4+3]=255;let S=90+80*s[v]+(n?d[f]*40:0);c.data[v*4]=c.data[v*4+1]=c.data[v*4+2]=S,c.data[v*4+3]=255}o.putImageData(a,0,0),h.putImageData(c,0,0);for(let f=0;f<30;f++){let g=u()*t,v=u()*t,p=5+u()*40,m=u()*Math.PI;o.strokeStyle=`rgba(255,255,255,${.05+u()*.12})`,o.lineWidth=.6,o.beginPath(),o.moveTo(g,v),o.lineTo(g+Math.cos(m)*p,v+Math.sin(m)*p),o.stroke()}return{map:qn(r),rough:qn(l,{srgb:!1})}}function bh({base:i=[236,239,241],seed:e=5,size:t=256}={}){let n=Ei(t,64,2,e),s=Ei(t,4,3,e+2),r=Yn(t),o=r.getContext("2d"),a=o.createImageData(t,t);for(let h=0;h<t*t;h++){let c=Math.floor(h/t)/t,u=(.93+.06*s[h]+.04*(n[h]-.5))*(c>.9?1-(c-.9)*1.5:1);a.data[h*4]=i[0]*u,a.data[h*4+1]=i[1]*u,a.data[h*4+2]=i[2]*u,a.data[h*4+3]=255}o.putImageData(a,0,0);let l=fs(e*5);for(let h=0;h<14;h++){let c=l()*t,u=l()*t;o.strokeStyle=`rgba(60,60,60,${.05+l()*.1})`,o.lineWidth=.8,o.beginPath(),o.moveTo(c,u),o.lineTo(c+(l()-.5)*30,u+(l()-.5)*8),o.stroke()}return{map:qn(r,{repeat:!1})}}function qt(i,e,t,n=1,s=9){let r=fs(s+e*7+t*13);i.save();for(let u=0;u<e*t*.004*n;u++)i.fillStyle=r()<.5?`rgba(0,0,0,${.03+r()*.06})`:`rgba(255,255,255,${.03+r()*.05})`,i.fillRect(r()*e,r()*t,1+r()*2,1+r()*2);for(let u=0;u<6*n;u++){i.strokeStyle=`rgba(0,0,0,${.05+r()*.07})`,i.lineWidth=.8;let d=r()*e,f=r()*t;i.beginPath(),i.moveTo(d,f),i.lineTo(d+(r()-.5)*e*.3,f+(r()-.5)*t*.1),i.stroke()}let o=Math.min(e,t)*.18;for(let[u,d,f,g]of[[0,0,0,o],[0,t,0,t-o],[0,0,o,0],[e,0,e-o,0]]){let v=i.createLinearGradient(u,d,f,g);v.addColorStop(0,`rgba(40,35,28,${.16*n})`),v.addColorStop(1,"rgba(40,35,28,0)"),i.fillStyle=v,i.fillRect(0,0,e,t)}let a=r()*e,l=r()*t,h=Math.min(e,t)*.12,c=i.createRadialGradient(a,l,1,a,l,h);c.addColorStop(0,`rgba(60,50,40,${.07*n})`),c.addColorStop(1,"rgba(60,50,40,0)"),i.fillStyle=c,i.fillRect(a-h,l-h,h*2,h*2),i.restore()}function Gd(){let i=Yn(128),e=i.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(.55,"rgba(0,0,0,.28)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),qn(i,{srgb:!1,repeat:!1})}function Wd(){let i=Yn(4,64),e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,64);return t.addColorStop(0,"rgba(0,0,0,.5)"),t.addColorStop(.35,"rgba(0,0,0,.18)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,4,64),qn(i,{srgb:!1,repeat:!1})}var Xe={sans:'"Segoe UI", "Helvetica Neue", Roboto, Arial, sans-serif',mono:'Consolas, Menlo, "DejaVu Sans Mono", "Courier New", monospace'};function pt(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=new ii(n);return r.colorSpace=zt,r.anisotropy=4,r.userData.ctx=s,t&&t(s,i,e),r}function Pn(i,e){let t=i.userData.ctx;e(t,t.canvas.width,t.canvas.height),i.needsUpdate=!0}function a_(i,e,t){let n=/(\d+(?:\.\d+)?)px/.exec(i.font);if(!n)return;let s=Number(n[1]);for(;s>8&&i.measureText(e).width>t;)s-=1,i.font=i.font.replace(/\d+(?:\.\d+)?px/,`${s}px`)}function Yt(i,{w:e=512,h:t=256,bg:n="#f2f2ee",fg:s="#111",font:r=`bold 44px ${Xe.sans}`,border:o=null,align:a="center",weathered:l=.6}={}){return pt(e,t,h=>{h.fillStyle=n,h.fillRect(0,0,e,t),o&&(h.strokeStyle=o,h.lineWidth=10,h.strokeRect(5,5,e-10,t-10)),h.textAlign=a,h.textBaseline="middle";let c=t/(i.length+1);i.forEach((u,d)=>{let f=typeof u=="string"?{t:u}:u;h.font=f.font||r,h.fillStyle=f.color||s,a_(h,f.t,e-(o?44:28)),h.fillText(f.t,a==="center"?e/2:24,c*(d+1))}),l&&qt(h,e,t,l,i.length*31+e)})}function $d(){return pt(512,320,(i,e,t)=>{i.fillStyle="#c9ced4",i.fillRect(0,0,e,t);let n=10,s=6,r=8,o=(e-r*2)/n,a=(t-r*2)/s;for(let l=0;l<s;l++)for(let h=0;h<n;h++){let c=r+h*o,u=r+l*a,d=i.createLinearGradient(c,u,c+o,u+a);d.addColorStop(0,"#1a2a6e"),d.addColorStop(1,"#0d1740"),i.fillStyle=d,i.fillRect(c+1.5,u+1.5,o-3,a-3),i.strokeStyle="rgba(200,210,230,.35)",i.lineWidth=1;for(let f=1;f<4;f++)i.beginPath(),i.moveTo(c+f*o/4,u+2),i.lineTo(c+f*o/4,u+a-2),i.stroke()}qt(i,e,t,.7,5)})}function la(){let i=pt(256,64,(e,t,n)=>{e.fillStyle="#f2c200",e.fillRect(0,0,t,n),e.fillStyle="#111";for(let s=-n;s<t+n;s+=48)e.beginPath(),e.moveTo(s,n),e.lineTo(s+24,n),e.lineTo(s+24+n,0),e.lineTo(s+n,0),e.fill()});return i.wrapS=Kt,i}function Xd(i,e,t,n,s=50){let r=s/2;i.beginPath(),e==="AND"||e==="NAND"?(i.moveTo(t,n-r),i.lineTo(t+35,n-r),i.arc(t+35,n,r,-Math.PI/2,Math.PI/2),i.lineTo(t,n+r),i.closePath()):e==="OR"||e==="NOR"||e==="XOR"?(i.moveTo(t,n-r),i.quadraticCurveTo(t+45,n-r,t+70,n),i.quadraticCurveTo(t+45,n+r,t,n+r),i.quadraticCurveTo(t+16,n,t,n-r),i.closePath()):e==="NOT"&&(i.moveTo(t,n-20),i.lineTo(t+48,n),i.lineTo(t,n+20),i.closePath()),i.fill(),i.stroke(),e==="XOR"&&(i.beginPath(),i.moveTo(t-9,n-r),i.quadraticCurveTo(t+7,n,t-9,n+r),i.stroke());let o=e==="NOT"?t+48:t+70;return(e==="NOT"||e==="NAND"||e==="NOR")&&(qd(i,o+6,n),o+=12),o}function qd(i,e,t){i.beginPath(),i.arc(e,t,6,0,Math.PI*2),i.fill(),i.stroke()}function Yd(i,e,t,n,{bg:s="#f3efe2",ink:r="#1c3f94",title:o="FW-BOARD rev.C"}={}){i.fillStyle=s,i.fillRect(0,0,e,t),i.strokeStyle=r,i.fillStyle=r,i.lineWidth=3,i.lineJoin="round",i.font="bold 26px Consolas, monospace",i.textAlign="left",i.fillText(o+"  \u2014  OUT must be 1",24,38),i.save(),i.strokeStyle="rgba(28,63,148,.08)",i.lineWidth=1;for(let _=0;_<e;_+=20)i.beginPath(),i.moveTo(_,50),i.lineTo(_,t),i.stroke();for(let _=50;_<t;_+=20)i.beginPath(),i.moveTo(0,_),i.lineTo(e,_),i.stroke();i.restore();let a={A:70,B:130,C:190,D:250},l=90,h=t-30;i.font="bold 28px Consolas",i.textAlign="center";for(let[_,x]of Object.entries(a))i.fillText(_,x,l-12),i.beginPath(),i.moveTo(x,l),i.lineTo(x,h),i.stroke(),i.beginPath(),i.arc(x,l,5,0,Math.PI*2),i.fill();let c=n.terms,u=c.length,d=430,f=h-l-90,g=[];i.fillStyle=s,c.forEach((_,x)=>{let A=l+30+(u===1?f/2:f*x/(u-1)),M=_.g==="NOT"?[[_.a,A]]:[[_.a,A-12],[_.b,A+12]];for(let[L,b]of M){let y=L[0]==="!",R=y?L[1]:L,I=d+(_.g==="OR"||_.g==="NOR"||_.g==="XOR"?_.g==="XOR"?-9:5:0)-(y?12:0);i.beginPath(),i.moveTo(a[R],b),i.lineTo(I,b),i.stroke(),i.save(),i.fillStyle=r,i.beginPath(),i.arc(a[R],b,5,0,Math.PI*2),i.fill(),i.restore(),y&&qd(i,I+6,b)}let T=Xd(i,_.g,d,A);i.save(),i.fillStyle=r,i.font="15px Consolas",i.fillText(_.g,d+28,A+42),i.restore(),g.push([T,A])});let v=700,p=l+30+f/2,m=Math.max(70,u*26);g.forEach(([_,x],A)=>{let M=p-m/2+m*(A+1)/(u+1),T=600+A*14;i.beginPath(),i.moveTo(_,x),i.lineTo(T,x),i.lineTo(T,M),i.lineTo(v,M),i.stroke()});let S=Xd(i,"AND",v,p,m);i.save(),i.fillStyle=r,i.font="15px Consolas",i.fillText("AND",v+30,p+m/2+18),i.restore(),i.beginPath(),i.moveTo(S,p),i.lineTo(e-90,p),i.stroke(),i.save(),i.fillStyle=r,i.beginPath(),i.moveTo(e-90,p-16),i.lineTo(e-60,p),i.lineTo(e-90,p+16),i.closePath(),i.fill(),i.fillRect(e-58,p-16,4,32),i.font="bold 22px Consolas",i.fillText("OUT",e-62,p-28),i.restore()}var Zd=[{terms:[{g:"AND",a:"A",b:"!B"},{g:"XOR",a:"C",b:"D"},{g:"OR",a:"B",b:"D"}]},{terms:[{g:"XOR",a:"A",b:"B"},{g:"AND",a:"B",b:"D"},{g:"NOT",a:"C"}]},{terms:[{g:"AND",a:"A",b:"C"},{g:"NOR",a:"B",b:"D"}]},{terms:[{g:"NAND",a:"B",b:"C"},{g:"NOR",a:"A",b:"D"},{g:"XOR",a:"B",b:"D"}]},{terms:[{g:"XOR",a:"!A",b:"C"},{g:"NAND",a:"B",b:"C"},{g:"AND",a:"A",b:"D"}]},{terms:[{g:"XOR",a:"B",b:"D"},{g:"NOR",a:"A",b:"D"},{g:"NAND",a:"!C",b:"!D"}]},{terms:[{g:"AND",a:"A",b:"D"},{g:"NOR",a:"C",b:"!D"},{g:"XOR",a:"B",b:"C"}]},{terms:[{g:"AND",a:"C",b:"D"},{g:"XOR",a:"A",b:"C"},{g:"NOR",a:"A",b:"B"}]}],Kd=(i,e)=>e[0]==="!"?1-i["ABCD".indexOf(e[1])]:i["ABCD".indexOf(e)];function l_(i,e){let t=Kd(e,i.a),n=i.b?Kd(e,i.b):0;switch(i.g){case"AND":return t&n;case"NAND":return 1-(t&n);case"OR":return t|n;case"NOR":return 1-(t|n);case"XOR":return t^n;case"NOT":return 1-t}return 0}var Mh=(i,e)=>i.terms.every(t=>l_(t,e)===1)?1:0;function c_(i){let e=[];for(let t=0;t<16;t++){let n=[t>>3&1,t>>2&1,t>>1&1,t&1];Mh(i,n)&&e.push(n.join(""))}return e}function h_(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var u_=["Faraday","Tesla","Kelvin","Ampere","Joule","Hertz","Ohm","Watt"],d_=["GRID","VOLT","WATT","AMPS","OHMS"],f_=["H2","PV","AC","DC"],p_=[10,12,15,18,22,27,33,39,47,56,68,82],Sh=["black","brown","red","orange","yellow","green","blue","violet","grey","white"],ca=["\xD71","\xD710","\xD7100","\xD71 000","\xD710 000","\xD7100 000","\xD71 M","\xD710 M","\xD7100 M","\xD71 G"],Ys=["#111","#6b3a1e","#d0231f","#f07f16","#f5d10f","#2c9a3a","#2455c9","#7b3fb0","#8a8a8a","#f4f4f4"];function Jd(i=0){let e;if(!i)e={seed:0,year:1987,cat:"Faraday",lamps:6,res:47,resMult:2,bin:150,circuit:0,f1:"GRID",f3:"H2",swapped:!0};else{let t=h_(Math.imul(i^2654435769,2654435761)^i>>>16),n=s=>s[Math.floor(t()*s.length)];e={seed:i,year:1975+Math.floor(t()*30),cat:n(u_),lamps:4+Math.floor(t()*5),res:n(p_),resMult:2,bin:129+Math.floor(t()*126),circuit:Math.floor(t()*Zd.length),f1:n(d_),f3:n(f_)},e.swapped=t()<.5,t()<.3&&(e.resMult=1)}return e.drawerCode=String(e.res*10**e.resMult).padStart(4,"0"),e.bands=[Math.floor(e.res/10),e.res%10,e.resMult],e.binStr=e.bin.toString(2).padStart(8,"0"),e.circuitDef=Zd[e.circuit],e.boardSolution=c_(e.circuitDef)[0],e.userPw=e.cat.toLowerCase().split("").reverse().join(""),e.rootPw=`${e.f1}${e.bin}${e.f3}`,e.gridV=i?228+i%6:231,e.gridF=i?Math.round((49.97+i%9/100)*100)/100:50.03,e}var j={PV_KWP:600,PR:.82,BAT_E:1e3,BAT_P:250,BAT_EFF:.95,SOC_MIN:.05,BAT_WEAR:20,ELZ_P:200,ELZ_MIN:20,ELZ_KWH_KG:55,FC_P:150,FC_MIN:15,FC_KWH_KG:18,H2_MAX:150,H2_GREY:2,RFNBO_MAX:20,LIM:300,FEE:40,SOC0:.5,H2_0:20,WIN_RATIO:.55,STAR3:.85};function rf(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ua=(i,e,t)=>Math.max(e,Math.min(t,i)),Zi=i=>{let e=(i+.5-6)/14;return e>0&&e<1?Math.pow(Math.sin(Math.PI*e),1.2):0},ha=i=>1-.75*Math.pow(i,3.4),jd=[{name:"Mostly sunny, passing clouds around noon",base:.15,trend:0,bump:.5},{name:"Cloudy morning, clearing in the afternoon",base:.6,trend:-.55,bump:0},{name:"Bright morning, thunderstorms later",base:.3,trend:.65,bump:0},{name:"Clear skies \u2014 solar flood on the market",base:.05,trend:0,bump:0},{name:"Overcast, windless evening",base:.95,trend:.05,bump:0}];function Qd(i,e){let t=rf(i*7919+17),n=()=>{let p=1-t(),m=t();return Math.sqrt(-2*Math.log(p))*Math.cos(2*Math.PI*m)},s=jd[e??Math.floor(t()*jd.length)],r=[],o=[],a=[],l=[],h=[],c=[],u=[],d=0,f=0;for(let p=0;p<24;p++)d=d*.7+n()*.08,f=.7*f+Math.sqrt(1-.49)*n()*.18,r[p]=ua(s.base+s.trend*(p-12)/12+s.bump*Math.exp(-((p-12.5)**2)/3)+d,0,1),o[p]=ua(r[p]+f,0,1),a[p]=j.PV_KWP*j.PR*Zi(p)*ha(r[p]),l[p]=j.PV_KWP*j.PR*Zi(p)*ha(o[p]),h[p]=Math.round(70+(p>=7&&p<=17?55:0)+(p>=18&&p<=21?20:0)+t()*12);let g=r.slice(8,18).reduce((p,m)=>p+m,0)/10;for(let p=0;p<24;p++){let m=Zi(p)*ha(g),S=95+45*Math.exp(-((p-7.5)**2)/3)+115*Math.exp(-((p-19)**2)/4)-30*Math.exp(-((p-3)**2)/6)-175*m+n()*6;c[p]=Math.round(S*10)/10,u[p]=Math.round((S+n()*10+120*(o[p]-r[p])*Zi(p))*10)/10}if(t()<.75){let p=17+Math.floor(t()*5);u[p]=Math.round((u[p]+120+t()*220)*10)/10}if(t()<.4){let p=10+Math.floor(t()*5);u[p]=Math.round((u[p]-40-t()*60)*10)/10}let v=Math.round((3+t()*5)*2)/2;return{seed:i,kind:s.name,cloudF:r,cloudA:o,pvF:a,pvA:l,load:h,priceF:c,priceA:u,h2Price:v,variant:0}}function m_(i,e){if(!e)return i;let t=rf(i.seed*7919+17+e*104729),n=()=>{let l=1-t(),h=t();return Math.sqrt(-2*Math.log(l))*Math.cos(2*Math.PI*h)},s=[],r=[],o=[],a=0;for(let l=0;l<24;l++)a=.7*a+Math.sqrt(1-.49)*n()*.18,s[l]=ua(i.cloudF[l]+a,0,1),r[l]=j.PV_KWP*j.PR*Zi(l)*ha(s[l]),o[l]=Math.round((i.priceF[l]+n()*10+120*(s[l]-i.cloudF[l])*Zi(l))*10)/10;if(t()<.75){let l=17+Math.floor(t()*5);o[l]=Math.round((o[l]+120+t()*220)*10)/10}if(t()<.4){let l=10+Math.floor(t()*5);o[l]=Math.round((o[l]-40-t()*60)*10)/10}return{...i,cloudA:s,pvA:r,priceA:o,variant:e}}var of=(i,e)=>(i>=0?i*e:i*(e+j.FEE))/1e3,da=(i,e)=>i>0&&i<e?e:i;function af(i,e,t,n,s,r=0){if(e<=0||i.h2Price<=j.H2_GREY)return 0;let o=s<=j.RFNBO_MAX?e:Math.min(e,Math.max(0,t-n-r));return(e-o)/j.ELZ_KWH_KG*(i.h2Price-j.H2_GREY)}function Th(i){let e=i.h2Price/j.ELZ_KWH_KG*1e3,t=i.h2Price/j.FC_KWH_KG*1e3;return{elzEx:e,fcEx:t,fcIm:t-j.FEE}}function Lr(i,e,t,n,s=!1){let r=s?i.pvF[e]:i.pvA[e],o=s?i.priceF[e]:i.priceA[e],a=i.load[e],l=[],h=t.soc*j.BAT_E,c=j.SOC_MIN*j.BAT_E,u=r*(1-n.curt/100),d=n.bat;if(d>0){let A=Math.max(0,(h-c)*j.BAT_EFF);d>A+1e-6&&l.push("battery empty"),d=Math.min(d,A)}if(d<0){let A=Math.max(0,(j.BAT_E-h)/j.BAT_EFF);-d>A+1e-6&&l.push("battery full"),d=-Math.min(-d,A)}let f=Math.min(da(n.fc,j.FC_MIN),t.h2*j.FC_KWH_KG);f<j.FC_MIN&&(f=0),f<n.fc-1e-6&&l.push("H\u2082 low");let g=Math.min(da(n.elz,j.ELZ_MIN),(j.H2_MAX-t.h2)*j.ELZ_KWH_KG);g<j.ELZ_MIN&&(g=0),g<n.elz-1e-6&&l.push("H\u2082 tank full");let v=u+f+d-a-g;if(v<-j.LIM){let A=Math.min(g,-j.LIM-v);g-=A,v+=A,l.push("import limit")}if(v<-j.LIM&&d<0){let A=Math.min(-d,-j.LIM-v);d+=A,v+=A}let p=0;if(v>j.LIM){let A=v-j.LIM,M=Math.min(u,A);u-=M,A-=M,p+=M;let T=Math.min(f,A);if(f-=T,A-=T,A>0&&d>0){let L=Math.min(d,A);d-=L,A-=L}v=j.LIM+A,l.push(`export limit (${p.toFixed(0)} kW PV lost)`)}let m=Math.max(0,d)*j.BAT_WEAR/1e3,S=af(i,g,u,a,i.priceF[e],Math.max(0,-d));S>.5&&l.push(`grey H\u2082 \u2212\u20AC${S.toFixed(0)}`);let _=of(v,o)-m-S,x=d>0?h-d/j.BAT_EFF:h-d*j.BAT_EFF;return{h:e,price:o,pvRaw:r,pv:u,load:a,bat:d,elz:g,fc:f,net:v,eur:_,wear:m,grey:S,notes:l,soc:x/j.BAT_E,h2:t.h2+g/j.ELZ_KWH_KG-f/j.FC_KWH_KG}}var lf=i=>i.reduce((e,t)=>e+t,0)/i.length;function Zs(i,e,t){let n=(t.soc-j.SOC0)*j.BAT_E*j.BAT_EFF*(lf(i.priceF)-j.BAT_WEAR)/1e3,s=(t.h2-j.H2_0)*i.h2Price;return{cash:e,batV:n,h2V:s,total:e+n+s}}function ef(i){let e={soc:j.SOC0,h2:j.H2_0},t=0;for(let n=0;n<24;n++){let s=Lr(i,n,e,{bat:0,elz:0,fc:0,curt:0});t+=s.eur,e=s}return Zs(i,t,e).total}function tf(i,e={pv:i.pvA,price:i.priceA}){let n=j.SOC_MIN*j.BAT_E,s=Math.round((j.BAT_E-n)/25)+1,r=lf(i.priceF),o=Math.floor(j.BAT_P*j.BAT_EFF/25),a=Math.floor(j.BAT_P/j.BAT_EFF/25),l=[0,.25,.5,.75,1].map(_=>_*j.ELZ_P),h=[0,1/3,2/3,1].map(_=>Math.round(_*j.FC_P)),c=_=>_>0?-_*25/j.BAT_EFF:-_*25*j.BAT_EFF,u=[],d=[];for(let _=0;_<24;_++){u[_]={},d[_]={};for(let x=-a;x<=o;x++){let A=c(x),M=-1/0,T=null;for(let L of l)for(let b of h)for(let y of[0,25,50,75,100]){let R=e.pv[_]*(1-y/100)+b+A-i.load[_]-L;if(R<-j.LIM)continue;R>j.LIM&&(R=j.LIM);let I=of(R,e.price[_])-Math.max(0,A)*j.BAT_WEAR/1e3+(L/j.ELZ_KWH_KG-b/j.FC_KWH_KG)*i.h2Price-af(i,L,e.pv[_]*(1-y/100),i.load[_],i.priceF[_],Math.max(0,-A));I>M&&(M=I,T={elz:L,fc:b,curt:y})}u[_][x]=M,d[_][x]=T}}let f=[],g=Array.from({length:s},(_,x)=>(n+x*25-j.SOC0*j.BAT_E)*j.BAT_EFF*(r-j.BAT_WEAR)/1e3);for(let _=23;_>=0;_--){let x=new Array(s).fill(-1/0);f[_]=new Array(s).fill(0);for(let A=0;A<s;A++)for(let M=-a;M<=o;M++){let T=A+M;if(T<0||T>=s||u[_][M]===-1/0)continue;let L=u[_][M]+g[T];L>x[A]&&(x[A]=L,f[_][A]=M)}g=x}let v={soc:j.SOC0,h2:j.H2_0},p=0,m=[],S=[];for(let _=0;_<24;_++){let x=ua(Math.round((v.soc*j.BAT_E-n)/25),0,s-1),A=f[_][x],M={bat:Math.round(c(A)),...d[_][A]},T=Lr(i,_,v,M);p+=T.eur,v=T,m.push(M),S.push(T)}return{value:Zs(i,p,v).total,plan:m,rows:S}}var wi=i=>(i<0?"\u2212":"")+"\u20AC"+Math.abs(i).toFixed(2),Ir=i=>String(i).padStart(2,"0")+":00",nf=(i,e)=>Zi(i)===0?"\u{1F319}":e<.2?"\u2600\uFE0F":e<.45?"\u{1F324}\uFE0F":e<.7?"\u26C5":"\u2601\uFE0F",sf="ple-grid-best",fa=class{constructor(e,t=0){this.el=document.getElementById("grid"),this.onWin=e,this.onClose=null,this.onHint=null,this.dayNo=0,this.built=!1,this.permit=!1,this.newDay(t||2026,t?void 0:0)}newDay(e,t){this.dayNo++,this.seed=e,this.day=Qd(e,t),this.reset(),this.base=ef(this.day),this.bench=tf(this.day)}replay(e=(this.day.variant||0)+1){this.day=m_(Qd(this.seed,this.seed===2026?0:void 0),e),this.reset(),this.base=ef(this.day),this.bench=tf(this.day)}reset(){this.st={soc:j.SOC0,h2:j.H2_0},this.h=0,this.cash=0,this.log=[],this.set={bat:0,elz:0,fc:0,curt:0},this.finished=!1,this.advisorHour=-1,this.advisorUsed=!1}serialize(){return{seed:this.seed,variant:this.day.variant,dayNo:this.dayNo,log:this.log,st:this.st,h:this.h,cash:this.cash,set:this.set,permit:this.permit}}restore(e){e&&(this.dayNo=e.dayNo-1,this.newDay(e.seed,e.seed===2026?0:void 0),e.variant&&this.replay(e.variant),Object.assign(this,{log:e.log,st:e.st,h:e.h,cash:e.cash,set:e.set,permit:e.permit,finished:e.h>=24}))}open(){this.built||this.build(),this.openedAt=performance.now(),this.el.classList.remove("hidden"),this.render(),this.finished&&!this.permit&&this.showResult()}close(){this.el.classList.add("hidden"),this.built&&this.$("gModal").classList.add("hidden")}isOpen(){return!this.el.classList.contains("hidden")}modalOpen(){return this.built&&!this.$("gModal").classList.contains("hidden")}build(){this.built=!0,this.el.innerHTML=`
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
          ${this.sliderHtml("bat","Battery",-j.BAT_P,j.BAT_P,10,"\u25C0 charge","discharge \u25B6")}
          ${this.sliderHtml("elz","Electrolyzer",0,j.ELZ_P,10,`off \xB7 min ${j.ELZ_MIN}`,`${j.ELZ_P} kW`)}
          ${this.sliderHtml("fc","Fuel cell",0,j.FC_P,5,`off \xB7 min ${j.FC_MIN}`,`${j.FC_P} kW`)}
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
        \u2022 Positive grid = export (paid the price). Import pays the price <b>+ \u20AC${j.FEE}/MWh grid fees</b>. Connection limit <b>\xB1${j.LIM} kW</b> \u2014 surplus PV beyond it is lost.<br>
        \u2022 Negative prices happen: exporting then <b>costs</b> money. Curtail, charge, or run the electrolyzer.<br>
        \u2022 Renewable-H\u2082 rule (EU RFNBO, simplified): hydrogen only fetches today's price if it is made from on-site PV surplus or in hours \u2264 ${j.RFNBO_MAX} \u20AC/MWh; otherwise it sells as grey H\u2082 for \u20AC${j.H2_GREY}/kg.<br>
        \u2022 Battery: ${j.BAT_E} kWh, \xB1${j.BAT_P} kW, ${j.BAT_EFF*100} % each way (90 % round trip), wear \u20AC${j.BAT_WEAR}/MWh discharged. Worth cycling when sell &gt; buy / 0.9 + wear.<br>
        \u2022 Electrolyzer ${j.ELZ_MIN}\u2013${j.ELZ_P} kW, ${j.ELZ_KWH_KG} kWh/kg. Fuel cell ${j.FC_MIN}\u2013${j.FC_P} kW, ${j.FC_KWH_KG} kWh/kg. H\u2082 value varies by day (header). Power\u2192H\u2082\u2192power \u2248 33 %.<br>
        \u2022 Result = cash + stored battery energy (after discharge losses, at the average day-ahead price) + H\u2082 change at today's H\u2082 price.<br>
        \u2022 The operator grants the reconnection permit if you reach \u2265 ${j.WIN_RATIO*100} % of the extra profit a perfect-foresight benchmark makes over "do nothing".
      </div></details></div>
      <div class="modal hidden" id="gModal"><div class="card" id="gModalCard" style="min-width:min(440px,92vw);max-height:92vh;overflow:auto"></div></div>
    </div>`;let e=t=>this.el.querySelector("#"+t);this.$=e;for(let t of["bat","elz","fc","curt"])e("s_"+t).addEventListener("input",n=>{this.set[t]=Number(n.target.value),this.renderSide()});e("gRun").addEventListener("click",t=>{t.currentTarget.blur(),this.runHour()}),e("gRun3").addEventListener("click",t=>{t.currentTarget.blur();for(let n=0;n<3&&!this.finished;n++)this.runHour()}),e("gZero").addEventListener("click",()=>{this.set={bat:0,elz:0,fc:0,curt:0},this.renderSide()}),e("gClose").addEventListener("click",()=>this.onClose?.()),this.el.addEventListener("click",t=>{t.target.id==="gAdvisor"&&(this.advisorHour=this.h,this.onHint?.(!this.advisorUsed),this.advisorUsed=!0,this.renderSide()),t.target.id==="gResult"&&this.showResult()}),window.addEventListener("resize",()=>{this.isOpen()&&this.drawChart()}),document.addEventListener("keydown",t=>{if(!(!this.isOpen()||this.modalOpen())&&t.key==="Enter"){if(t.repeat){t.preventDefault();return}performance.now()-this.openedAt<500||t.target.tagName!=="BUTTON"&&(t.preventDefault(),this.runHour())}})}sliderHtml(e,t,n,s,r,o,a){return`<div class="slider"><div class="top"><span>${t}</span><b id="v_${e}"></b></div>
      <input type="range" id="s_${e}" min="${n}" max="${s}" step="${r}" value="0" aria-label="${t}">
      <div class="sub"><span>${o}</span><span>${a}</span></div></div>`}baselineAt(e){let t={soc:j.SOC0,h2:j.H2_0},n=0;for(let s=0;s<e;s++){let r=Lr(this.day,s,t,{bat:0,elz:0,fc:0,curt:0});n+=r.eur,t=r}return Zs(this.day,n,t).total}render(){let e=this.$;if(e("gDay").innerHTML=`Day ${this.dayNo} \xB7 <b style="font-size:13px">${this.day.kind}</b> \xB7 H\u2082 \u20AC${this.day.h2Price.toFixed(1)}/kg`,e("gHour").textContent=this.finished?"done":`${Ir(this.h)}\u2013${Ir(this.h+1)}`,e("gCash").textContent=wi(this.cash),e("gCash").style.color=this.cash>=0?"#6dff9a":"#ff6b77",e("gSoc").textContent=`${(this.st.soc*100).toFixed(0)} %`,e("gH2").textContent=`${this.st.h2.toFixed(1)} kg`,this.h>0){let n=Zs(this.day,this.cash,this.st).total,s=this.bench.rows.slice(0,this.h),r=Zs(this.day,s.reduce((h,c)=>h+c.eur,0),s[s.length-1]).total,o=this.baselineAt(this.h),a=r-o,l=a>1?(n-o)/a:0;e("gPace").innerHTML=`Pace <b style="color:${l>=j.WIN_RATIO?"#6dff9a":"#ffc44a"}">${(l*100).toFixed(0)} %</b> <span style="font-size:11px">of benchmark</span>`}else e("gPace").textContent="";let t=this.finished;e("gBenchH").classList.toggle("hidden",!t),e("gLog").innerHTML=this.log.map(n=>{let s=this.bench.rows[n.h];return`<tr>
      <td>${Ir(n.h)}</td><td>${this.day.priceF[n.h].toFixed(0)}\u2192<b style="color:${Math.abs(n.price-this.day.priceF[n.h])>30?"#ffd24a":"inherit"}">${n.price.toFixed(0)}</b></td>
      <td>${this.day.pvF[n.h].toFixed(0)}\u2192${n.pvRaw.toFixed(0)}</td><td>${n.load}</td><td>${n.bat.toFixed(0)}</td><td>${n.elz.toFixed(0)}</td><td>${n.fc.toFixed(0)}</td>
      <td>${n.net.toFixed(0)}</td><td style="color:${n.eur>=0?"#6dff9a":"#ff6b77"}">${n.eur.toFixed(2)}</td>
      ${t?`<td title="benchmark: batt ${s.bat.toFixed(0)} \xB7 elz ${s.elz.toFixed(0)} \xB7 fc ${s.fc.toFixed(0)} \xB7 curt ${this.bench.plan[n.h].curt}%" style="color:#8ea3b8">${s.eur.toFixed(2)} <span style="font-size:10px">(${s.bat>0?"\u25B2":s.bat<0?"\u25BC":"\xB7"}${Math.abs(s.bat).toFixed(0)}${s.elz?" E"+s.elz.toFixed(0):""}${s.fc?" F"+s.fc.toFixed(0):""})</span></td>`:""}
      <td>${(n.soc*100).toFixed(0)}%</td><td>${n.h2.toFixed(1)}</td>
      <td style="text-align:left;color:#ffc44a">${n.notes.join(", ")}</td></tr>`}).reverse().join(""),this.renderSide(),this.drawChart()}renderSide(){let e=this.$,t=this.day,n=Math.min(this.h,23);for(let r of["bat","elz","fc","curt"]){e("s_"+r).value=this.set[r];let o=this.set[r],a=r==="elz"?da(o,j.ELZ_MIN):r==="fc"?da(o,j.FC_MIN):o;e("v_"+r).textContent=r==="bat"?o===0?"idle":o>0?`+${o} kW discharge`:`${-o} kW charge`:r==="curt"?`${o} %`:`${a} kW`}e("gFcTitle").textContent=this.finished?"Day complete":`Forecast ${Ir(n)}\u2013${Ir(n+1)}`,e("gFc").innerHTML=`
      <span>Price (day-ahead)</span><span style="color:${t.priceF[n]<0?"#7fd4ff":t.priceF[n]>180?"#ff8c42":"inherit"}">${t.priceF[n].toFixed(1)} \u20AC/MWh</span>
      <span>Weather</span><span>${nf(n,t.cloudF[n])} ${(t.cloudF[n]*100).toFixed(0)} % clouds</span>
      <span>PV</span><span>${t.pvF[n].toFixed(0)} kW</span>
      <span>Load</span><span>${t.load[n]} kW</span>
      <span>Next 3 h price</span><span>${[1,2,3].map(r=>n+r<24?t.priceF[n+r].toFixed(0):"\u2014").join(" / ")}</span>
      <span title="today's H\u2082 break-even prices">Break-evens</span><span>ELZ &lt; ${Th(t).elzEx.toFixed(0)} \xB7 FC &gt; ${Th(t).fcIm.toFixed(0)}</span>`;let s=Lr(t,n,this.st,this.set,!0);e("gPrev").innerHTML=`Expected (forecast):<br>grid ${s.net>=0?"export":"import"} <b>${Math.abs(s.net).toFixed(0)} kW</b> \u2192 <b style="color:${s.eur>=0?"#6dff9a":"#ff6b77"}">${wi(s.eur)}</b><br>H\u2082 ${s.elz>0?"+"+(s.elz/j.ELZ_KWH_KG).toFixed(2):""}${s.fc>0?" \u2212"+(s.fc/j.FC_KWH_KG).toFixed(2):""}${s.elz||s.fc?" kg":"\xB10"} (\u2248 ${wi((s.elz/j.ELZ_KWH_KG-s.fc/j.FC_KWH_KG)*t.h2Price)}) \xB7 SOC \u2192 ${(s.soc*100).toFixed(0)} %`+(s.notes.length?`<br><span style="color:#ffc44a">${s.notes.join(", ")}</span>`:""),e("gTip").innerHTML=this.finished?'<button class="btn on" id="gResult">\u{1F4CB} Show the result</button>':this.advisorHour===this.h?"\u{1F4A1} "+this.tip(n):'<button class="btn" id="gAdvisor">\u{1F4A1} Ask the advisor (counts as a hint)</button>',e("gRun").disabled=this.finished,e("gRun3").disabled=this.finished}tip(e){let t=this.day,n=t.priceF[e],s=t.h2Price,{elzEx:r,fcEx:o,fcIm:a}=Th(t),l=t.pvF[e]>t.load[e],h=`<br><span style="color:#6c8196">Break-evens today: electrolyzer below ${r.toFixed(0)} \u20AC/MWh on surplus PV; from grid power only in renewable hours (\u2264 ${j.RFNBO_MAX} \u20AC/MWh), otherwise the H\u2082 is grey (\u20AC${j.H2_GREY}/kg). Fuel cell above ${a.toFixed(0)} \u20AC/MWh when it avoids imports (above ${o.toFixed(0)} when exporting).</span>`;if(n<0)return`Negative price: every exported kWh costs money. Curtail PV, charge the battery, run the electrolyzer.${h}`;if(n>a)return`High price: the fuel cell beats keeping H\u2082 worth \u20AC${s}/kg \u2014 and discharge the battery.${h}`;if(l&&n<r)return`Surplus PV and a price below ${r.toFixed(0)} \u20AC/MWh: turning PV into H\u2082 pays more than exporting.${h}`;let c=t.priceF.slice(e+1),u=c.length?Math.max(...c):0,d=l?n:n+j.FEE;return u>d/j.BAT_EFF**2+j.BAT_WEAR?`Store now? Forecast peak later ${u.toFixed(0)} \u20AC/MWh &gt; ${d.toFixed(0)} / 0.90 + ${j.BAT_WEAR} wear \u2192 charging pays if you hold it until then.${h}`:`No obvious arbitrage this hour. Imports carry \u20AC${j.FEE}/MWh fees.${h}`}runHour(){if(this.finished)return;let e=Lr(this.day,this.h,this.st,this.set,!1);if(this.cash+=e.eur,this.st={soc:e.soc,h2:e.h2},this.log.push(e),this.h++,this.onStep?.(),this.h>=24){this.finished=!0,this.render(),this.showResult();return}this.render()}result(){let e=Zs(this.day,this.cash,this.st),t=e.total-this.base,n=Math.max(1,this.bench.value-this.base),s=t/n,r=s>=j.STAR3?3:s>=j.WIN_RATIO?2:t>0?1:0;return{...e,ratio:s,stars:r,won:s>=j.WIN_RATIO,base:this.base,bench:this.bench.value,day:this.dayNo,seed:this.seed}}showResult(){let e=this.result(),t={};try{t=JSON.parse(localStorage.getItem(sf)||"{}")}catch{}let n=t[this.seed];if(n===void 0||e.ratio>n){t[this.seed]=e.ratio;try{localStorage.setItem(sf,JSON.stringify(t))}catch{}}this.lastResult=e;let s=this.$("gModalCard");s.innerHTML=`<h2 style="margin-top:0;color:#ffd24a">Dispatch validation complete</h2>
      <div class="stars">${[1,2,3].map(o=>`<span class="${o<=e.stars?"":"off"}">\u2605</span>`).join("")}</div>
      <div class="res">
        <span>Cash from trading (incl. wear)</span><span>${wi(e.cash)}</span>
        <span>Battery energy change</span><span>${wi(e.batV)}</span>
        <span>H\u2082 inventory change</span><span>${wi(e.h2V)}</span>
        <span class="tot">Your result</span><span class="tot">${wi(e.total)}</span>
        <span style="color:#8ea3b8">"Do nothing" baseline</span><span style="color:#8ea3b8">${wi(this.base)}</span>
        <span style="color:#8ea3b8">Perfect-foresight benchmark</span><span style="color:#8ea3b8">${wi(this.bench.value)}</span>
        <span>Share of possible extra profit</span><span style="color:${e.won?"#6dff9a":"#ff6b77"}">${(e.ratio*100).toFixed(0)} %</span>
        ${n!==void 0?`<span style="color:#8ea3b8">Previous best on this day</span><span style="color:#8ea3b8">${(n*100).toFixed(0)} %</span>`:""}
      </div>
      <p class="note">${e.won?"\u2714 The grid operator accepts the schedule and issues a <b>reconnection permit</b>. Synchronise the lab with the grid at the tie panel next to the exit.":`The operator needs \u2265 ${j.WIN_RATIO*100} %. "Review the day" compares every hour with the benchmark (Bench \u20AC column, dashed SOC line). "Replay" keeps the forecasts, but the real clouds and intraday prices come out differently.`}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn" id="mReview">Review the day</button>
        <button class="btn" id="mRetry">Replay this day</button>
        <button class="btn" id="mNew">New day</button>
        ${e.won?'<button class="btn big" id="mWin" style="margin:0">Take the permit \u25B6</button>':""}
      </div>`,this.$("gModal").classList.remove("hidden");let r=()=>this.$("gModal").classList.add("hidden");s.querySelector("#mReview").onclick=r,s.querySelector("#mRetry").onclick=()=>{r(),this.replay(),this.render()},s.querySelector("#mNew").onclick=()=>{r(),this.newDay(Math.floor(Math.random()*1e6)),this.render()},e.won&&(s.querySelector("#mWin").onclick=()=>{r(),this.permit=!0,this.onWin(e)})}drawChart(){let e=this.$("gChart"),t=Math.min(devicePixelRatio||1,2),n=e.clientWidth,s=e.clientHeight;if(!n||!s)return;e.width=n*t,e.height=s*t;let r=e.getContext("2d");r.setTransform(t,0,0,t,0,0),r.clearRect(0,0,n,s);let o=this.day,a=n<560,l=a?36:52,h=a?40:58,c=a?44:76,u=26,d=(n-l-h)/24,f=M=>l+M*d,g=600,v=M=>c+(s-c-u)*(1-M/g),p=[...o.priceF,...this.log.map(M=>M.price)],m=Math.min(-50,Math.floor(Math.min(...p)/50)*50),S=Math.max(250,Math.ceil(Math.max(...p)/50)*50),_=M=>c+(s-c-u)*(1-(M-m)/(S-m)),x='Consolas, "Courier New", monospace';r.font=`11px ${x}`,r.strokeStyle="#1a2633",r.lineWidth=1,r.fillStyle="#6c8196";for(let M=0;M<=g;M+=100)r.beginPath(),r.moveTo(l,v(M)),r.lineTo(n-h,v(M)),r.stroke(),r.textAlign="right",r.fillText(M,l-6,v(M)+4);r.strokeStyle="rgba(255,90,74,.35)",r.setLineDash([6,4]),r.beginPath(),r.moveTo(l,v(j.LIM)),r.lineTo(n-h,v(j.LIM)),r.stroke(),r.setLineDash([]),r.fillStyle="rgba(255,120,100,.7)",r.textAlign="left",r.fillText(`grid limit ${j.LIM} kW`,l+4,v(j.LIM)-4),r.fillStyle="#ff8c42";for(let M=m;M<=S;M+=50)r.fillText(M,n-h+6,_(M)+4);r.save(),r.fillStyle="#6c8196",r.translate(12,c+40),r.rotate(-Math.PI/2),r.fillText("kW",0,0),r.restore(),r.fillStyle="#ff8c42",r.fillText("\u20AC/MWh",n-h+6,c-8),m<0&&(r.fillStyle="rgba(80,160,255,.07)",r.fillRect(l,_(0),n-l-h,_(m)-_(0)),r.strokeStyle="rgba(127,212,255,.5)",r.setLineDash([2,3]),r.beginPath(),r.moveTo(l,_(0)),r.lineTo(n-h,_(0)),r.stroke(),r.setLineDash([])),this.finished||(r.fillStyle="rgba(255,210,74,.06)",r.fillRect(f(this.h),4,d,s-u-4),r.strokeStyle="rgba(255,210,74,.5)",r.setLineDash([3,3]),r.strokeRect(f(this.h)+.5,4.5,d-1,s-u-5),r.setLineDash([])),r.textAlign="center";for(let M=0;M<24;M++){let T=M<this.h,L=T?o.cloudA[M]:o.cloudF[M],b=d<20;r.font=`${b?10:15}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`,r.globalAlpha=T?.5:1,r.fillText(nf(M,L),f(M)+d/2,20),r.font=`9px ${x}`,r.fillStyle="#6c8196",Zi(M)>0&&!b&&r.fillText(`${(L*100).toFixed(0)}%`,f(M)+d/2,34),r.globalAlpha=1,r.font=`10px ${x}`,r.fillStyle=M===this.h?"#ffd24a":"#6c8196",(!b||M%3===0||M===this.h)&&r.fillText(String(M).padStart(2,"0"),f(M)+d/2,s-8)}for(let M=0;M<24;M++){let T=d*.7,L=f(M)+d*.15;if(r.fillStyle="rgba(255,210,74,.22)",r.fillRect(L,v(o.pvF[M]),T,v(0)-v(o.pvF[M])),M<this.h){r.fillStyle="#ffd24a",r.fillRect(L+T*.2,v(o.pvA[M]),T*.6,v(0)-v(o.pvA[M]));let b=this.log[M];b&&b.pvRaw-b.pv>1&&(r.fillStyle="rgba(255,90,74,.7)",r.fillRect(L+T*.2,v(b.pvRaw),T*.6,v(b.pv)-v(b.pvRaw)))}}r.strokeStyle="#8ea3b8",r.lineWidth=1.5,r.beginPath();for(let M=0;M<24;M++)r.lineTo(f(M),v(o.load[M])),r.lineTo(f(M+1),v(o.load[M]));r.stroke();let A=(M,T,L)=>{r.strokeStyle=L,r.lineWidth=2,r.setLineDash(T),r.beginPath(),r.moveTo(f(0),v(j.SOC0*g)),M.forEach((b,y)=>r.lineTo(f(y+1),v(b.soc*g))),r.stroke(),r.setLineDash([])};this.finished&&A(this.bench.rows,[4,4],"rgba(62,207,122,.55)"),this.log.length&&(A(this.log,[],"#3ecf7a"),r.fillStyle="#3ecf7a",r.textAlign="left",r.font=`10px ${x}`,r.fillText(`SOC ${(this.st.soc*100).toFixed(0)}%`,f(this.log.length)+4,v(this.st.soc*g)-4)),r.strokeStyle="rgba(255,140,66,.75)",r.lineWidth=1.5,r.setLineDash([5,4]),r.beginPath();for(let M=0;M<24;M++)r.lineTo(f(M)+d/2,_(o.priceF[M]));r.stroke(),r.setLineDash([]),this.log.length&&(r.strokeStyle="#ff8c42",r.lineWidth=2.5,r.beginPath(),this.log.forEach((M,T)=>r.lineTo(f(T)+d/2,_(M.price))),r.stroke(),r.fillStyle="#ff8c42",this.log.forEach((M,T)=>{r.beginPath(),r.arc(f(T)+d/2,_(M.price),3,0,Math.PI*2),r.fill()}))}};var pa={title:"\u26A1 POWER LAB ESCAPE",lead:"Friday, 18:40. You came to the <b>Solar Test Laboratory</b> to certify its island microgrid. Then the storm hit.",body:`The public grid is down, the building is dark, and the booth door \u2014 a motor-driven, fail-secure sliding door \u2014 won't move without power.
    The emergency lights run on a battery that lasts about an hour. Marco Volta, the lab's head, has already left for the weekend.<br><br>
    Bring the lab's own power system to life, get into the control room, and get the building back on the grid.`},cf=[[30,"Volta's Successor"],[40,"Chief Grid Engineer"],[50,"Senior Engineer"],[60,"Engineer"],[1/0,"Intern (overtime)"]];function hf(i){return{rec1:{title:"Voice recorder \xB7 workbench",label:"Voice recorder",text:`"Memo, Friday. Facility management finally installed the fail-secure door drive on the booth. No power, no exit \u2014 very safe, they say.
Note to self: never get locked in here during a grid outage. \u2026Also, somebody feed the cat over the weekend."`},rec2:{title:"Voice recorder \xB7 battery cabinet",label:"Voice recorder",text:`"Changed the sun-simulator PIN again. It's the year we opened \u2014 the one engraved on that pompous brass plaque.
And yes, I wired the simulator to the building's emergency generator. Don't tell facility management."`},rec3:{title:"Voice recorder \xB7 electrolyzer",label:"Voice recorder",text:`"Lesson of the week: our three inverters are single-phase. Each one FORMS its own phase. Power cannot hop from L1 to L2 \u2014
if nothing feeds a phase, nothing on it runs. The intern tried to charge the battery from an empty phase for an hour.
Then he opened the H\u2082 valve with a wrench. The handwheel lives in my bench drawer now."`},rec4:{title:"Voice recorder \xB7 control room",label:"Voice recorder",text:`"If the grid ever drops out: the operator won't let us back on until gridctl has validated a day-ahead schedule.
Then synchronise at the tie panel \u2014 voltage, frequency, rotation, and close at twelve. Don't close out of phase. I've heard that bang once."`}}}function Dr(i){return[["LAB NOTES \u2014 DON'T ERASE!!","#1b3f8f","bold 40px"],["INV-1 \u2500 L?     INV-2 \u2500 L?     INV-3 \u2500 L?","#1b3f8f"],["   (each inverter = its OWN phase \u2192 island!)","#b3261e"],["Door drive: 3~ motor, 3 kW / phase at start","#1b3f8f"],["Sun-sim PIN \u2192 the year we opened \u2713","#1b3f8f"],["H\u2082 handwheel \u2192 locked away (intern-proof)","#1b3f8f"],["BMS min 25 %  \xB7  FC needs \u2592\u2592 % H\u2082","#1b3f8f"],["                                  \u2014 M.V.","#1b3f8f"]]}function uf(i){return[{from:"it-security@solarlab.example",subj:"Your password hygiene (3rd reminder)",body:`Dear Marco,
we noticed that your password is still based on your cat's name. Reversing it does not count as encryption.
Please also stop splitting the root password into "fragments".
\u2014 IT`},{from:"dispatch@tso-grid.example",subj:"RE: Reconnection after outage \u2014 procedure",body:`Hello Solar Test Laboratory,
after the storm outage, reconnection of your site requires:
  1) a validated day-ahead dispatch schedule (gridctl: \u2265 ${Math.round(j.WIN_RATIO*100)} % of the extra profit
     a perfect-foresight plan makes over doing nothing),
  2) manual synchronisation at your tie breaker Q0.
Our side: ${i.gridV} V, ${i.gridF.toFixed(2)} Hz, rotation L1-L2-L3 (clockwise) at the substation.
NB: our storm crew re-terminated your incomer cable at Q0 tonight in a hurry \u2014 check the phase rotation before closing.
The reconnection permit card is issued automatically once the schedule is validated.
\u2014 Grid Dispatch`},{from:"marco.volta@solarlab.example",subj:"Out of office",body:`I'm off for the weekend. For emergencies: don't.
PS for whoever is on duty: the cat sleeps on the battery inverter in the booth. Do not wake him. He bites.`}]}function Eh(){return`SYNC CHECKLIST \u2014 tie breaker Q0
0. Permit card into the interlock
1. Island voltage = grid voltage (\xB1 2 %)
2. Island frequency a hair ABOVE grid
   (needle creeps clockwise, slip \u2264 0.1 Hz)
3. Check phase ro\u2592\u2592\u2592\u2592n \u2014 the three lamps
   must go dark TOGETHER, not chase.
   Chasing? \u2192 swap two incoming phases
4. Close on the SYNCHROSCOPE at 12 (\xB1 10\xB0)
   (lamps look dark over a wide band)
                                   \u2014 M.V.`}var Nr={W:2048,H:768,HORIZON:560.64},Lt={K:2408,R:4,EYE:1.65,WATER:-6,BANK:-5,RAIL:4,X0:-2816,X1:6700},ma=(i,e)=>Nr.HORIZON-(i-Lt.EYE)*Lt.K/(Lt.R+e),wh=[{id:"sky",depth:1/0,w:2048,h:256},{id:"far",depth:2500,w:3072,h:384},{id:"mid",depth:600,w:4096,h:448},{id:"bridge",depth:220,w:3072,h:384}],g_=150;function v_(i,e,t,n,s,r){let o=document.createElement("canvas");o.width=e,o.height=t;let a=o.getContext("2d");a.drawImage(i.canvas,0,0),a.globalCompositeOperation="destination-out",a.drawImage(i.canvas,n,s),a.globalCompositeOperation="source-in",a.fillStyle=r,a.fillRect(0,0,e,t),i.drawImage(o,0,0)}function ga(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function df(i,e,t,n,s){let r=n==="evening",o=n!=="night",a=ga(1248+s.id.length*97+(s.id==="far"?5:0)),l=e/(Lt.X1-Lt.X0),h=t/Nr.H,c=_=>(_-Lt.X0)*l,u=_=>_*h,d=u(Nr.HORIZON);i.clearRect(0,0,e,t);let f=r?"#5d5470":"#141b27",g=r?"#3b3346":"#0d121a",v=r?"#211b26":"#080b11",p=(_,x,A,M,T,L=9,b=11)=>{for(let y=x+6*h;y<x+M-6*h;y+=b*h)for(let R=_+4*l;R<_+A-5*l;R+=L*l)a()<T&&(i.fillStyle=a()<.6?"#ffd58a":"#cfe0ff",i.fillRect(R,y,Math.max(1,4*l),Math.max(1,5*h)))},m=o?.28:.02,S=(_,x)=>{r&&v_(i,e,t,Math.max(1,_*l*2),Math.max(1,x*h),"rgba(255,186,105,.9)")};if(s.id==="sky"){let _=i.createLinearGradient(0,0,0,d);r?(_.addColorStop(0,"#2c4a7c"),_.addColorStop(.5,"#8e7196"),_.addColorStop(.82,"#e59a78"),_.addColorStop(1,"#ffc389")):(_.addColorStop(0,"#070a13"),_.addColorStop(.55,"#172033"),_.addColorStop(1,"#34435e")),i.fillStyle=_,i.fillRect(0,0,e,t);for(let A=0;A<(r?60:90);A++){let M=a()*e,T=d*(.18+a()*(r?.4:.67)),L=(250+a()*450)*l;for(let b=0;b<18;b++){let y=M+(a()-.5)*L,R=T+(a()-.5)*50*h,I=Math.max(3,(30+a()*70)*h),[F,H,Y,W]=r?[255,200+a()*30,180+a()*30,.08+a()*.1]:[50+a()*25,58+a()*25,80+a()*25,.1+a()*.14],se=i.createRadialGradient(0,0,0,0,0,I);se.addColorStop(0,`rgba(${F|0},${H|0},${Y|0},${W})`),se.addColorStop(1,`rgba(${F|0},${H|0},${Y|0},0)`),i.save(),i.translate(y,R),i.scale(2.2,1),i.fillStyle=se,i.fillRect(-I,-I,I*2,I*2),i.restore()}}if(r){let A=c(g_),M=d-30*h,T=i.createRadialGradient(0,0,2,0,0,520*h);T.addColorStop(0,"rgba(255,236,190,.95)"),T.addColorStop(.25,"rgba(255,180,110,.5)"),T.addColorStop(1,"rgba(255,160,100,0)"),i.save(),i.translate(A,M),i.scale(3.2*l/h,1),i.fillStyle=T,i.fillRect(-520*h,-520*h,1040*h,1040*h),i.restore(),i.fillStyle="#fff4d8",i.beginPath(),i.ellipse(A,M,Math.max(2,11*l),Math.max(2,11*h),0,0,Math.PI*2),i.fill()}else if(o){let A=i.createLinearGradient(0,d-160*h,0,d);A.addColorStop(0,"rgba(255,150,70,0)"),A.addColorStop(1,"rgba(255,150,70,.28)"),i.fillStyle=A,i.fillRect(0,d-160*h,e,160*h)}let x=i.createLinearGradient(0,0,0,d*.3);x.addColorStop(0,r?"#2c4a7c":"#070a13"),x.addColorStop(1,r?"rgba(44,74,124,0)":"rgba(7,10,19,0)"),i.fillStyle=x,i.fillRect(0,0,e,d*.3);return}if(s.id==="far"){let _=u(ma(Lt.BANK,s.depth));for(let x=0;x<e;){let A=(30+a()*70)*l,M=(18+a()*60)*h;i.fillStyle=f,i.fillRect(x,_-M,A+1,t-_+M),p(x,_-M,A,M,m*.6),x+=A}i.fillStyle=f,i.fillRect(c(295),u(360),9*l,t),i.beginPath(),i.ellipse(c(299.5),u(408),22*l,6*h,0,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(c(299.5),u(397),17*l,5*h,0,0,Math.PI*2),i.fill(),i.fillRect(c(298),u(307),3*l,56*h),i.fillStyle="#ff3b2f";for(let x of[308,360,440])i.fillRect(c(298),u(x),Math.max(2,3*l),Math.max(2,3*h));for(let x of[-2520,-2440,-2360])i.fillStyle=g,i.fillRect(c(x),u(486),18*l,t),i.fillRect(c(x),u(486),52*l,20*h),i.fillStyle=o?"rgba(170,200,230,.35)":"rgba(80,100,140,.25)",i.fillRect(c(x),u(487),52*l,2*h),p(c(x),u(486),52*l,20*h,m),p(c(x),u(506),18*l,_-u(506),m);S(1,1);return}if(s.id==="mid"){let _=u(ma(Lt.BANK,s.depth));for(let b=0;b<e;){let y=Lt.X0+b/l,R=(40+a()*60)*l,I=(24+a()*40)*h;(y<640||y>1600)&&(i.fillStyle=g,i.fillRect(b,_-I,R+1,t-_+I),p(b,_-I,R,I,m)),b+=R}for(let b=c(660);b<c(1200);){let y=(26+a()*22)*l,R=(48+a()*35)*h;i.fillStyle=r?["#4b3a3c","#56423c","#433b4e","#4e473f"][Math.floor(a()*4)]:g,i.fillRect(b,_-R,y+1,t-_+R),i.beginPath(),i.moveTo(b,_-R),i.lineTo(b+y/2,_-R-(22+a()*10)*h),i.lineTo(b+y,_-R),i.fill(),p(b,_-R,y,R,m*1.6),b+=y}i.fillStyle=r?"#3e3530":"#0a0e14",i.fillRect(c(640),_,c(1600)-c(640),t),i.fillStyle=v,i.fillRect(c(760),_-95*h,130*l,t),i.fillRect(c(795),u(330),52*l,t),i.beginPath(),i.moveTo(c(795),u(330)),i.lineTo(c(821),u(250)),i.lineTo(c(847),u(330)),i.fill();for(let b of[791,843])i.fillRect(c(b),u(318),8*l,30*h),i.beginPath(),i.moveTo(c(b),u(318)),i.lineTo(c(b+4),u(292)),i.lineTo(c(b+8),u(318)),i.fill();let x=(b,y,R,I)=>{i.fillStyle=v,i.fillRect(c(b-I),u(y),2*I*l,t);for(let F=0;F<4;F++){let H=y+40+F*45;i.fillRect(c(b-I-5),u(H),5*l,30*h),i.fillRect(c(b+I),u(H),5*l,30*h)}i.fillRect(c(b-I*.72),u(y-40),I*1.44*l,42*h),i.beginPath(),i.moveTo(c(b-I*.72),u(y-38)),i.lineTo(c(b),u(R)),i.lineTo(c(b+I*.72),u(y-38)),i.fill();for(let F=.1;F<.95;F+=.09){let H=y-38+(R-(y-38))*F,Y=I*.72*(1-F);for(let W of[-1,1])i.beginPath(),i.moveTo(c(b+W*Y),u(H)),i.lineTo(c(b+W*(Y+6)),u(H-4)),i.lineTo(c(b+W*Y),u(H-8)),i.fill()}i.fillRect(c(b-1.5),u(R-16),3*l,18*h),i.fillRect(c(b-6),u(R-10),12*l,3*h),i.strokeStyle=r?"rgba(255,220,180,.18)":"rgba(120,140,170,.14)",i.lineWidth=Math.max(1,1.5*l);for(let F=-1;F<=1;F++)for(let[H,Y]of[[y+30,y+120],[y+150,y+230]]){let W=b+F*I*.5;i.beginPath(),i.moveTo(c(W-5),u(Y)),i.lineTo(c(W-5),u(H+10)),i.lineTo(c(W),u(H)),i.lineTo(c(W+5),u(H+10)),i.lineTo(c(W+5),u(Y)),i.stroke()}};i.fillStyle=v,i.fillRect(c(1170),u(410),340*l,t),i.fillRect(c(1190),u(380),300*l,40*h),i.beginPath(),i.moveTo(c(1190),u(382)),i.lineTo(c(1235),u(318)),i.lineTo(c(1470),u(318)),i.lineTo(c(1510),u(382)),i.fill(),i.beginPath(),i.moveTo(c(1500),u(410)),i.lineTo(c(1552),u(430)),i.lineTo(c(1560),t),i.lineTo(c(1500),t),i.fill(),i.fillRect(c(1300),u(360),46*l,60*h),i.beginPath(),i.moveTo(c(1300),u(362)),i.lineTo(c(1323),u(322)),i.lineTo(c(1346),u(362)),i.fill();for(let b=1205;b<1560;b+=24){let y=b>1495?392:372;i.beginPath(),i.moveTo(c(b-4),u(y+45)),i.lineTo(c(b),u(y)),i.lineTo(c(b+4),u(y+45)),i.fill(),i.fillRect(c(b-4),u(y+45),8*l,30*h)}i.fillRect(c(1352),u(300),12*l,55*h),i.beginPath(),i.moveTo(c(1350),u(302)),i.lineTo(c(1358),u(262)),i.lineTo(c(1366),u(302)),i.fill(),x(1118,230,62,34),x(1205,236,70,34),i.fillStyle=o?"#2d5a9a":"#101a2e",i.beginPath(),i.moveTo(c(1545),_),i.quadraticCurveTo(c(1580),_-55*h,c(1640),_-38*h),i.lineTo(c(1660),_),i.fill();let A=u(ma(Lt.WATER,s.depth)),M=130,T=610,L=A-16*h;i.fillStyle=r?"#8f8a86":"#1c222b",i.beginPath(),i.moveTo(c(M),L),i.lineTo(c(T),L),i.lineTo(c(T+18),L-6*h),i.lineTo(c(T+10),t),i.lineTo(c(M+4),t),i.fill(),i.fillRect(c(M+40),L-14*h,(T-M-90)*l,14*h),i.fillRect(c(M+70),L-25*h,(T-M-170)*l,11*h),i.fillStyle="#ffd9a0";for(let b=M+46;b<T-54;b+=8)a()<.8&&i.fillRect(c(b),L-10*h,Math.max(1,4*l),Math.max(1,4*h));for(let b=M+76;b<T-104;b+=10)a()<.5&&i.fillRect(c(b),L-21*h,Math.max(1,5*l),Math.max(1,4*h));if(i.fillStyle=r?"#1c3f7a":"#0e1622",i.fillRect(c(M),L+4*h,(T-M)*l,4*h),S(1,1),o){let b=i.createRadialGradient(c(1160),_,10*l,c(1160),_-80*h,300*h);b.addColorStop(0,`rgba(255,196,120,${r?.3:.55})`),b.addColorStop(1,"rgba(255,196,120,0)"),i.globalCompositeOperation="source-atop",i.fillStyle=b,i.fillRect(c(880),u(40),620*l,_-u(40)),i.globalCompositeOperation="source-over"}return}if(s.id==="bridge"){let _=u(ma(Lt.WATER,s.depth)),x=r?"#3a3440":"#0a0e15",A=T=>u(547-(T-1180)*.035),M=[1180,1420,1700,2040];i.fillStyle=x,i.beginPath(),i.moveTo(c(1180),A(1180)),i.lineTo(c(2760),A(2760)),i.lineTo(c(2760),A(2760)+16*h),i.lineTo(c(1180),A(1180)+12*h),i.fill();for(let T of M)i.fillRect(c(T)-11*l,A(T),22*l,t);for(let T=2160;T<2760;T+=120)i.fillRect(c(T)-8*l,A(T),16*l,t),i.beginPath(),i.moveTo(c(T-112),A(T-112)+14*h),i.quadraticCurveTo(c(T-60),A(T-60)+40*h,c(T-8),A(T-8)+14*h),i.lineTo(c(T-8),A(T-8)+10*h),i.lineTo(c(T-112),A(T-112)+10*h),i.fill();i.strokeStyle=x;for(let T=0;T<3;T++){let L=M[T],b=M[T+1],y=(L+b)/2,R=A(y)-(b-L)*.62*h;i.lineWidth=Math.max(2,5*l);for(let I of[0,7])i.beginPath(),i.moveTo(c(L),A(L)),i.quadraticCurveTo(c(y),R+I*h,c(b),A(b)),i.stroke();i.lineWidth=Math.max(1,1.6*l);for(let I=.05;I<.96;I+=.05){let F=L+(b-L)*I,H=(1-I)*(1-I)*A(L)+2*(1-I)*I*R+I*I*A(b);i.beginPath(),i.moveTo(c(F),H),i.lineTo(c(F+13*(I<.5?1:-1)),A(F)),i.stroke()}}if(o){i.fillStyle="rgba(255,190,110,.9)";for(let T=1190;T<2760;T+=22)i.fillRect(c(T),A(T)+3*h,Math.max(2,3*l),Math.max(2,3*h))}if(!r){i.fillStyle="#131820";for(let T=0;T<4;T++){let L=1480+T*58;i.fillRect(c(L),A(L)-13*h,55*l,13*h)}i.fillStyle="rgba(160,190,255,.45)";for(let T=1486;T<1706;T+=9)a()<.4&&i.fillRect(c(T),A(T)-10*h,Math.max(1,4*l),Math.max(1,4*h))}if(i.fillStyle=r?"#2e3a4c":"#0b1018",i.fillRect(c(2790),u(250),90*l,t),i.fillStyle=r?"rgba(255,200,140,.45)":"rgba(90,110,150,.2)",i.fillRect(c(2790),u(250),90*l,22*h),r){let T=i.createLinearGradient(c(2790),0,c(2880),0);T.addColorStop(0,"rgba(255,190,120,.35)"),T.addColorStop(1,"rgba(255,190,120,0)"),i.fillStyle=T,i.fillRect(c(2790),u(272),90*l,_-u(272))}p(c(2790),u(280),90*l,_-u(280),m*1.2,8,9);for(let T=c(2900);T<e;){let L=(50+a()*70)*l,b=(60+a()*90)*h;i.fillStyle=r?"#2a2531":"#090c12",i.fillRect(T,_-b-30*h,L+1,t),p(T,_-b-30*h,L,b,m),T+=L}S(1,1)}}function Ah(i,e,t,n){let s=ga(n),r=[],o=(a,l,h,c,u,d)=>{let f=[[a,l]];for(let g=0;g<c&&l<t;g++)a+=(s()-.5)*26+h*4,l+=8+s()*14,(a<24||a>e-24)&&(a=Math.max(24,Math.min(e-24,a)),h=-h),f.push([a,l]),d<2&&s()<.08&&o(a,l,s()<.5?-1.6:1.6,(c-g)*.45,u*.55,d+1);r.push({pts:f,wd:u})};o(e*.5,0,0,60,1,0),i.clearRect(0,0,e,t),i.lineCap="round",i.lineJoin="round",i.shadowColor="rgba(140,170,255,1)";for(let[a,l,h]of[["rgba(120,150,255,.35)",9,18],["rgba(200,215,255,.8)",3.5,6],["#fff",1.4,0]]){i.strokeStyle=a,i.shadowBlur=h;for(let c of r){i.lineWidth=l*c.wd,i.beginPath(),i.moveTo(...c.pts[0]);for(let u of c.pts)i.lineTo(...u);i.stroke()}}i.shadowBlur=0}function ff(i,e,t){i.clearRect(0,0,e,t);let n=ga(11);for(let s=0;s<150;s++){let r=n()*e,o=n()*t,a=1.2+n()*3.2;i.fillStyle="rgba(0,0,0,.12)",i.beginPath(),i.arc(r,o,a,0,Math.PI*2),i.fill(),i.fillStyle="rgba(210,225,255,.16)",i.beginPath(),i.arc(r-a*.3,o-a*.35,a*.35,0,Math.PI*2),i.fill()}}function pf(i,e,t){i.clearRect(0,0,e,t);let n=ga(7);for(let s=0;s<90;s++){let r=n()*e,o=n()*t,a=14+n()*40;i.strokeStyle=`rgba(190,210,240,${.05+n()*.12})`,i.lineWidth=1+n(),i.beginPath(),i.moveTo(r,o),i.bezierCurveTo(r+2,o+a*.3,r-2,o+a*.6,r+(n()-.5)*3,o+a),i.stroke(),i.fillStyle="rgba(210,225,255,.2)",i.beginPath(),i.arc(r,o+a,1.6,0,Math.PI*2),i.fill()}}var Zn=i=>(Number.isFinite(i)?i:1e6).toFixed(3),Rh=Object.fromEntries(wh.map(i=>[i.id,Lt.R+i.depth])),y_=`
varying vec3 vW;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,__=`
uniform sampler2D tSkyN, tFarN, tMidN, tBriN, tSkyD, tFarD, tMidD, tBriD, tBolt;
uniform vec3 uO, uRt, uN;
uniform float uXC, uTime, uFlash, uBoltX, uMix, uRain, uEve, uLamps, uTrees;   // uMix: texture cross-fade \xB7 uEve: evening light
uniform vec3 uRoom;
varying vec3 vW;

#define K ${Zn(Lt.K)}
#define RREF ${Zn(Lt.R)}
#define EYE ${Zn(Lt.EYE)}
#define HZ ${Zn(Nr.HORIZON)}
#define X0 ${Zn(Lt.X0)}
#define XW ${Zn(Lt.X1-Lt.X0)}
#define WATER ${Zn(Lt.WATER)}
#define RAIL ${Zn(Lt.R+Lt.RAIL)}
#define RFAR ${Zn(Rh.far)}
#define RMID ${Zn(Rh.mid)}
#define RBRI ${Zn(Rh.bridge)}
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
}`,mf={night:{eve:0,lamps:0,rain:1,fade:1},restored:{eve:0,lamps:1,rain:.7,fade:5},evening:{eve:1,lamps:1,rain:0,fade:9}},va=class{constructor({scale:e=1}={}){this.scale=e,this.mode="night",this.sets={night:this.makeSet("night")},this.cur="night",this.next=null,this.boltTex=pt(256,512,(n,s,r)=>Ah(n,s,r,1));let t=this.sets.night;this.u={tSkyN:{value:t.sky},tFarN:{value:t.far},tMidN:{value:t.mid},tBriN:{value:t.bridge},tSkyD:{value:t.sky},tFarD:{value:t.far},tMidD:{value:t.mid},tBriD:{value:t.bridge},tBolt:{value:this.boltTex},uTime:{value:0},uFlash:{value:0},uBoltX:{value:1e3},uMix:{value:0},uRain:{value:1},uEve:{value:0},uLamps:{value:0},uRoom:{value:new Ue(.02,.025,.03)}}}get night(){return this.sets.night}makeSet(e){let t={};for(let n of wh)t[n.id]=pt(Math.round(n.w*this.scale),Math.round(n.h*this.scale),(s,r,o)=>df(s,r,o,e,n));return t}material({origin:e,right:t,normal:n,xCenter:s=1024},{trees:r=!0}={}){return new yt({uniforms:{...this.u,uO:{value:e},uRt:{value:t},uN:{value:n},uXC:{value:s},uTrees:{value:r?1:0}},vertexShader:y_,fragmentShader:__,fog:!1})}prepare(e){return this.sets[e]?[]:(this.sets[e]=this.makeSet(e),Object.values(this.sets[e]))}setMode(e,t=!1){if(e===this.mode){t&&this.next&&this.finish();return}this.next&&this.finish(),this.prepare(e),this.mode=e,this.next=e;let n=this.sets[e],s=this.u;s.tSkyD.value=n.sky,s.tFarD.value=n.far,s.tMidD.value=n.mid,s.tBriD.value=n.bridge,s.uMix.value=0,t&&this.finish()}finish(){let e=this.u,t=mf[this.next];e.uEve.value=t.eve,e.uLamps.value=t.lamps,e.uRain.value=t.rain;let n=this.sets[this.cur];this.cur=this.next,this.next=null;let s=this.sets[this.cur];if(e.tSkyN.value=s.sky,e.tFarN.value=s.far,e.tMidN.value=s.mid,e.tBriN.value=s.bridge,e.uMix.value=0,n&&n!==s){for(let r of Object.values(n))r.dispose(),r.image.width=r.image.height=0;for(let r in this.sets)this.sets[r]===n&&delete this.sets[r]}}strike(){this.u.uBoltX.value=250+Math.random()*1600,Pn(this.boltTex,(e,t,n)=>Ah(e,t,n,Math.random()*1e9|0))}update(e,t){let n=this.u;if(n.uTime.value=(n.uTime.value+e)%3600,n.uFlash.value=t,!this.next)return;let s=mf[this.next],r=Math.min(1,e/s.fade);n.uMix.value=Math.min(1,n.uMix.value+r),n.uEve.value+=(s.eve-n.uEve.value)*Math.min(1,r*3),n.uLamps.value+=(s.lamps-n.uLamps.value)*Math.min(1,r*4),n.uRain.value=Math.max(s.rain,n.uRain.value-e/(s.fade*.4)),n.uMix.value>=1&&this.finish()}};var Ks=()=>matchMedia("(pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches,ya=class{constructor(e,t){this.h=t,this.move={x:0,y:0},this.enabled=!1,this.el=document.createElement("div"),this.el.id="touchUi",this.el.className="hidden",this.el.innerHTML=`
      <div class="joy" id="joyBase"><div class="joy-knob" id="joyKnob"></div></div>
      <div class="tbtns">
        <button class="tbtn" data-t="menu" aria-label="Menu">\u2630</button>
        <button class="tbtn" data-t="hint" aria-label="Hint">\u{1F4A1}</button>
        <button class="tbtn" data-t="journal" aria-label="Journal">\u{1F4D3}</button>
      </div>
      <button class="tbtn use" data-t="use">USE</button>
      <button class="tbtn run" data-t="sprint">RUN</button>`,document.body.appendChild(this.el),this.base=this.el.querySelector("#joyBase"),this.knob=this.el.querySelector("#joyKnob"),this.el.querySelectorAll("[data-t]").forEach(n=>{let s=n.dataset.t;if(s==="sprint"){n.addEventListener("pointerdown",o=>{o.preventDefault(),this.h.sprint?.(!0),n.classList.add("on")});let r=()=>{this.h.sprint?.(!1),n.classList.remove("on")};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("pointerleave",r)}else n.addEventListener("click",r=>{r.preventDefault(),this.h[s]?.()})}),this.joyId=null,this.lookId=null,e.addEventListener("pointerdown",n=>this.down(n)),window.addEventListener("pointermove",n=>this.moveEv(n)),window.addEventListener("pointerup",n=>this.up(n)),window.addEventListener("pointercancel",n=>this.up(n))}enable(e){this.enabled=e,this.el.classList.toggle("hidden",!e),e||this.reset()}reset(){this.move.x=this.move.y=0,this.joyId=this.lookId=null,this.base.classList.remove("active"),this.knob.style.transform=""}down(e){!this.enabled||e.pointerType==="mouse"||(e.clientX<innerWidth*.4&&this.joyId===null?(this.joyId=e.pointerId,this.jx=e.clientX,this.jy=e.clientY,this.base.style.left=`${e.clientX-60}px`,this.base.style.top=`${e.clientY-60}px`,this.base.classList.add("active")):this.lookId===null&&(this.lookId=e.pointerId,this.lx=e.clientX,this.ly=e.clientY,this.tapStart={x:e.clientX,y:e.clientY,t:performance.now()}))}moveEv(e){if(this.enabled)if(e.pointerId===this.joyId){let t=e.clientX-this.jx,n=e.clientY-this.jy,s=Math.hypot(t,n),r=50;s>r&&(t*=r/s,n*=r/s),this.knob.style.transform=`translate(${t}px, ${n}px)`,this.move.x=t/r,this.move.y=-n/r}else e.pointerId===this.lookId&&(this.h.look?.(e.clientX-this.lx,e.clientY-this.ly),this.lx=e.clientX,this.ly=e.clientY)}up(e){if(e.pointerId===this.joyId&&(this.joyId=null,this.move.x=this.move.y=0,this.base.classList.remove("active"),this.knob.style.transform=""),e.pointerId===this.lookId){this.lookId=null;let t=this.tapStart;t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<12&&performance.now()-t.t<350&&this.h.tap?.(e.clientX,e.clientY)}}};function gf({scene:i,refs:e,M:t,col:n,box:s,cyl:r,sph:o,plane:a,texMat:l,tag:h,noRay:c}){let u=(z,Q={})=>new Ot({color:z,roughness:.75,...Q}),d=new Ht({map:Gd(),transparent:!0,depthWrite:!1,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-2,fog:!1});for(let[z,Q,N,fe]of[[5.6,3.05,1.3,3.3],[5.75,-2.9,.9,2.4],[-4.7,-4.2,2.1,1.6],[-2.9,-4.35,.9,.9],[3.1,-4.3,1.8,1.4],[-4.95,0,2.1,4.6],[2.6,4.55,2.9,1.3],[0,-11.9,2.9,1.4],[3.9,-12.4,1.3,1.4],[4.8,-10.6,.8,1.8],[0,-11,.8,.8],[-5.35,4.35,1.3,1.3],[-4.45,-12.45,.9,1],[1,4.65,.5,.5],[4.35,-5.75,.6,.6]])c(a(N,fe,d,z,.003,Q,"+y"));let f=new Ht({map:Wd(),transparent:!0,depthWrite:!1,opacity:.75,polygonOffset:!0,polygonOffsetFactor:-2,fog:!1}),g=(z,Q,N,fe,pe=.45)=>{let ve=new Qe;ve.position.set(z,.004,Q),ve.rotation.y=fe;let me=new Ee(new Cn(N,pe),f);me.rotation.x=-Math.PI/2,me.position.z=pe/2,c(me),ve.add(me),i.add(ve)},v=Math.PI;g(0,5,12,v),g(-6,0,10,v/2),g(6,0,10,-v/2),g(-3.4,-5,5.2,0),g(3.4,-5,5.2,0),g(0,-13,10,0),g(-5,-9.1,7.8,v/2),g(5,-10.9,4.2,-v/2),g(5,-6.2,2,-v/2),g(-2.9,-5.2,4.2,v),g(2.9,-5.2,4.2,v),g(7,-7.2,3.8,v),g(7,-8.8,3.8,0);let p=(z,Q,N,fe)=>{z.clearRect(0,0,Q,N),z.fillStyle="#f1efe6",z.beginPath(),z.arc(128,128,124,0,v*2),z.fill(),z.strokeStyle="#222";for(let ve=0;ve<60;ve++){let me=ve/60*v*2,Oe=ve%5?108:94;z.lineWidth=ve%5?2:6,z.beginPath(),z.moveTo(128+Math.sin(me)*Oe,128-Math.cos(me)*Oe),z.lineTo(128+Math.sin(me)*116,128-Math.cos(me)*116),z.stroke()}z.fillStyle="#333",z.font=`bold 15px ${Xe.sans}`,z.textAlign="center",z.fillText("SYNCHRON \xB7 50 Hz",128,172);let pe=(ve,me,Oe,_e)=>{z.strokeStyle=_e,z.lineWidth=Oe,z.lineCap="round",z.beginPath(),z.moveTo(128,128),z.lineTo(128+Math.sin(ve)*me,128-Math.cos(ve)*me),z.stroke()};pe(fe/3600%12/12*v*2,62,9,"#1b1b1b"),pe(fe/60%60/60*v*2,96,6,"#1b1b1b"),pe(fe%60/60*v*2,104,2,"#c21"),z.fillStyle="#1b1b1b",z.beginPath(),z.arc(128,128,8,0,v*2),z.fill(),qt(z,Q,N,.9,21)},m=18*3600+36*60+2,S=pt(256,256,(z,Q,N)=>p(z,Q,N,m));e.setClocks=z=>Pn(S,(Q,N,fe)=>p(Q,N,fe,z)),e.CLOCK_STOPPED=m;let _=l(S,{roughness:.35}),x=(z,Q,N,fe)=>{let pe=new Qe,ve=new Ee(new $o(.16,40),_);ve.position.z=.021,pe.add(ve);let me=new Ee(new pn(.175,.175,.04,40),t.dark);me.rotation.x=v/2,pe.add(me),pe.position.set(z,Q,N),pe.rotation.y=fe,i.add(pe),h(pe,"clock","Wall clock")};x(.55,2.6,4.975,v),x(-4.975,2.93,-9.2,v/2);let A=new Qe;r(.085,.5,u(12588058,{roughness:.4,metalness:.1}),0,.42,0,A),r(.03,.08,t.dark,0,.71,0,A),s(.12,.02,.03,t.dark,.03,.76,0,A);let M=new Ee(new Un(.1,.01,6,16,v*1.2),t.dark);M.position.set(.07,.55,.05),M.rotation.z=-v/2,A.add(M),s(.2,.06,.04,t.metal,0,.55,-.09,A),A.position.set(-2.05,0,-4.86),i.add(A),n(-2.15,-1.95,-5,-4.76),a(.18,.24,l(Yt([{t:"\u{1F9EF}",font:`90px ${Xe.sans}`},{t:"FIRE",font:`bold 34px ${Xe.sans}`}],{w:192,h:256,bg:"#c0141a",fg:"#fff"})),-2.05,1.05,-4.99,"+z"),a(.3,.3,l(Yt([{t:"H\u2082",font:`bold 70px ${Xe.sans}`},{t:"NO FLAMES",font:`bold 30px ${Xe.sans}`}],{w:256,h:256,bg:"#ffd200",fg:"#111",border:"#111"})),-3.9,2.2,-4.99,"+z"),a(.26,.26,l(Yt([{t:"\u26D1",font:`80px ${Xe.sans}`},{t:"PPE",font:`bold 36px ${Xe.sans}`}],{w:256,h:256,bg:"#1b5fa8",fg:"#fff"})),5.99,1.6,-4.4,"-x");let T=pt(256,256,(z,Q,N)=>{z.fillStyle="#a57b4f",z.fillRect(0,0,Q,N);for(let fe=0;fe<400;fe++)z.fillStyle=`rgba(${60+Math.random()*40},${40+Math.random()*30},20,${Math.random()*.08})`,z.fillRect(Math.random()*Q,Math.random()*N,3,1);z.fillStyle="rgba(210,190,140,.75)",z.fillRect(Q*.44,0,Q*.12,N),z.fillStyle="#2a2a2a",z.font=`bold 22px ${Xe.sans}`,z.textAlign="center",z.fillText("PV MODULES",Q/2-55,80),z.fillText("\u2191\u2191 THIS SIDE UP",Q/2,200),qt(z,Q,N,1.5,22)}),L=l(T,{roughness:.95});for(let[z,Q,N,fe,pe,ve,me]of[[.62,.42,.5,-5.4,.21,4.4,.12],[.55,.36,.45,-5.35,.6,4.35,-.18],[.4,.3,.35,-4.75,.15,4.62,.4]]){let Oe=s(z,Q,N,L,fe,pe,ve);Oe.rotation.y=me,h(Oe,"boxes","Cardboard boxes")}n(-5.75,-4.5,4.05,4.85);let b=new Ee(new pn(.17,.14,.44,24,1,!0),u(3817285,{side:An,roughness:.6}));b.position.set(1,.22,4.65),i.add(b),h(b,"bin","Waste-paper bin"),r(.14,.01,u(2764339),1,.005,4.65);let y=(z,Q)=>{let N=new Xo(z,1),fe=N.attributes.position;for(let pe=0;pe<fe.count;pe++){let ve=fe.getX(pe),me=fe.getY(pe),Oe=fe.getZ(pe),_e=Math.sin(Math.round(ve*997)*12.9898+Math.round(me*997)*78.233+Math.round(Oe*997)*37.719+Q)*43758.5453,D=.72+(_e-Math.floor(_e))*.42;fe.setXYZ(pe,ve*D,me*D*.9,Oe*D)}return N.computeVertexNormals(),N},R=u(14078404,{roughness:1,flatShading:!0}),I=.27;a(.31,.31,new Ot({color:10131084,roughness:1,map:pt(64,64,(z,Q,N)=>{let fe=z.createRadialGradient(Q/2,N/2,0,Q/2,N/2,Q/2);fe.addColorStop(0,"#fff"),fe.addColorStop(.95,"#bbb"),fe.addColorStop(1,"rgba(0,0,0,0)"),z.fillStyle=fe,z.fillRect(0,0,Q,N)}),alphaTest:.5}),1,I-.02,4.65,"+y");for(let[z,Q,N,fe]of[[-.05,.03,.05,1],[.05,-.04,.045,2],[.03,.06,.04,3],[-.02,-.06,.042,4],[.07,.03,.035,5],[-.07,-.02,.038,6],[0,0,.05,7]]){let pe=new Ee(y(N,fe),R);pe.position.set(1+z,I+N*(fe===7?1.3:.6),4.65+Q),pe.rotation.set(fe,fe*2,fe*3),i.add(pe)}let F=new Ee(y(.045,9),R);F.position.set(1.26,.04,4.52),i.add(F),n(.83,1.17,4.48,4.82);let H=new Qe,Y=new Ee(new pn(.18,.18,10.8,24),t.alu);Y.rotation.z=v/2,H.add(Y);for(let z=-5.2;z<=5.2;z+=.6){let Q=new Ee(new Un(.183,.008,6,24),t.metal);Q.rotation.y=v/2,Q.position.x=z,H.add(Q)}for(let z of[-2.2,2.2])s(.34,.06,.34,t.white,z,-.21,0,H),a(.3,.3,l(pt(128,128,(Q,N,fe)=>{Q.fillStyle="#ddd",Q.fillRect(0,0,N,fe),Q.fillStyle="#555";for(let pe=8;pe<N;pe+=12)Q.fillRect(pe,8,5,fe-16);qt(Q,N,fe,1,23)})),z,-.245,0,"+y",H).rotation.x=v/2;for(let z of[-4.5,-1,2.5,5])s(.02,.14,.02,t.metal,z,.25,0,H);H.position.set(-.2,3.18,3.6),i.add(H);let W=u(1447963,{roughness:.5}),se=(z,Q=.012,N=W,fe=null)=>{let ve=new qi(z.map(_e=>new U(..._e)),!1,"centripetal").getSpacedPoints(90).map(_e=>(_e.y=Math.max(_e.y,Q+.0015),_e)),me=new qi(ve,!1,"centripetal"),Oe=new Ee(new qo(me,160,Q,8,!1),N);if(Oe.userData.cable=!0,i.add(Oe),fe){let[_e,D]=fe,E=me.getSpacedPoints(400);for(let V=1;V<E.length;V++)if((E[V-1][_e]-D)*(E[V][_e]-D)<=0){let ne=r(Q+.009,.03,t.dark,E[V].x,E[V].y,E[V].z);ne.position[_e]=D,ne.rotation.set(_e==="z"?Math.PI/2:0,0,_e==="x"?Math.PI/2:0);break}}return Oe},$=e.INV_Y-.3;se([[5.9,$,.25],[5.91,$-.25,.3],[5.91,.4,.45],[5.9,.08,.7],[5.9,0,1],[5.9,0,1.5],[5.88,.12,1.66],[5.87,.25,1.78]],.012,W,["z",1.75]),se([[5.94,$,1.05],[5.955,$-.25,1.1],[5.955,.4,1.2],[5.955,.06,1.35],[5.955,0,1.55],[5.945,.2,1.68],[5.93,.36,1.78]],.01,W,["z",1.75]),se([[5.9,$,-.7],[5.92,$-.25,-.8],[5.935,.4,-1.05],[5.94,.06,-1.35],[5.94,0,-1.6],[5.93,.15,-1.85],[5.9,.36,-1.98]],.012,W,["z",-1.95]);let ue=se([[-3.95,.5,-4.45],[-3.84,.4,-4.5],[-3.72,.1,-4.62],[-3.5,0,-4.8],[-3,0,-4.86],[-2,0,-4.87],[-1.3,0,-4.88],[-1.12,.12,-4.93],[-1.1,.4,-4.935]],.014,u(2047866,{roughness:.5}),["x",-3.9]);s(.16,.22,.08,t.dark,-1.1,.46,-4.955),se([[3.49,.97,4.56],[3.56,.941,4.59],[3.72,.94,4.61],[3.79,.942,4.615],[3.814,.937,4.62],[3.824,.9,4.623],[3.834,.82,4.627],[3.845,.5,4.64],[3.86,.1,4.66],[3.95,0,4.76],[4.2,0,4.9],[4.3,.08,4.965],[4.3,.24,4.975]],.007,u(14276300)),s(.09,.09,.03,u(15658730,{roughness:.5}),4.3,.26,4.985),se([[.95,.92,-12.19],[.95,.88,-12.27],[.93,.812,-12.335],[.926,.801,-12.362],[.922,.77,-12.387],[.9,.62,-12.42],[.8,.36,-12.47],[.68,.29,-12.47],[.64,.28,-12.4]],.01),se([[.1,1,-12.17],[.11,.92,-12.2],[.13,.82,-12.24],[.17,.8,-12.28],[.23,.803,-12.32],[.25,.805,-12.337],[.258,.797,-12.357],[.265,.775,-12.376],[.33,.62,-12.42],[.45,.4,-12.46],[.53,.33,-12.47],[.56,.32,-12.4]],.006);let ee=(z,Q,N,fe)=>{let pe=Math.hypot(N-z,fe-Q),ve=la();ve.repeat.set(pe/.3,1);let me=new Qe;me.position.set((z+N)/2,.006,(Q+fe)/2),me.rotation.y=-Math.atan2(fe-Q,N-z);let Oe=new Ee(new Cn(pe,.07),l(ve,{roughness:.6,polygonOffset:!0,polygonOffsetFactor:-3}));Oe.rotation.x=-v/2,c(Oe),me.add(Oe),i.add(me)};ee(-3.85,-2.3,-3.85,2.3),ee(-6,2.3,-3.85,2.3),ee(-6,-2.3,-3.85,-2.3),ee(5.15,-4,5.15,-1.8);let ae=new Qe;s(.5,1.3,.6,t.dark,0,.65,0,ae);for(let z=0;z<4;z++)s(.46,.005,.02,t.metal,0,.3+z*.3,.301,ae),s(.12,.025,.03,t.metal,0,.18+z*.3,.31,ae);ae.position.set(-4.45,0,-12.45),i.add(ae),h(ae,"cabinet","Filing cabinet"),n(-4.72,-4.18,-12.78,-12.12);let Ae=new Qe;r(.04,.09,u(15262936,{roughness:.3}),0,.045,0,Ae),r(.036,.005,u(2824720,{roughness:.1}),0,.075,0,Ae);let Ve=new Ee(new Un(.025,.007,6,12),u(15262936));Ve.position.set(.045,.045,0),Ae.add(Ve),Ae.position.set(-.28,.79,-12.05),i.add(Ae);let K=(z,Q)=>pt(256,362,(N,fe,pe)=>{N.fillStyle="#e4dfd2",N.fillRect(0,0,fe,pe),N.fillStyle="#3b4a63",N.fillRect(22,22,120,10),N.fillStyle="rgba(40,40,40,.55)";for(let ve=52,me=z;ve<pe-30;ve+=11,me++){let Oe=60+me*73%150;N.fillRect(22,ve,Math.min(Oe,fe-44),3),me%7===0&&(ve+=10)}N.strokeStyle="rgba(40,40,40,.4)",N.strokeRect(22,pe-120,fe-44,70),Q&&(N.strokeStyle="rgba(110,70,30,.35)",N.lineWidth=5,N.beginPath(),N.arc(fe*.68,pe*.3,34,.3,Math.PI*1.85),N.stroke()),qt(N,fe,pe,.5,z+40)}),oe=()=>{let z=new Cn(.21,.297,1,8),Q=z.attributes.position;for(let N=0;N<Q.count;N++){let fe=Q.getY(N)/.1485;Q.setZ(N,.004*fe*fe)}return z.computeVertexNormals(),z};for(let[z,Q,N,fe]of[[.25,-11.5,.2,1],[.3,-11.55,-.15,2],[-1,-12.15,.6,3]]){let pe=new Ee(oe(),u(16777215,{map:K(fe,fe===2),roughness:.95}));pe.position.set(z,.7915+fe*4e-4,Q),pe.rotation.set(-Math.PI/2,0,N),i.add(pe),h(pe,"papers","Papers")}let be=new Qe;s(.2,.4,.45,t.dark,0,.2,0,be),s(.05,.02,.01,new Ot({color:1118481,emissive:2162528,emissiveIntensity:2}),0,.33,.226,be),be.position.set(.6,0,-12.2),i.add(be);let le=new Qe,ye=new Ee(new pn(.16,.12,.32,20),u(8014386,{roughness:.9}));ye.position.y=.16,le.add(ye),r(.15,.01,u(2826262),0,.31,0,le);for(let z=0;z<9;z++){let Q=new Ee(new hs(.03,.45,5),u(z%3?7039532:9075258,{roughness:.9})),N=z/9*v*2;Q.position.set(Math.cos(N)*.05,.5,Math.sin(N)*.05),Q.rotation.set(Math.sin(N)*.5,0,Math.cos(N)*.5+z%2*.3),le.add(Q)}le.position.set(4.35,0,-5.75),i.add(le),n(4.17,4.53,-5.93,-5.57);let Fe=pt(384,256,(z,Q,N)=>{z.fillStyle="#b48a5a",z.fillRect(0,0,Q,N);for(let pe=0;pe<2500;pe++)z.fillStyle=`rgba(90,60,30,${Math.random()*.25})`,z.fillRect(Math.random()*Q,Math.random()*N,2,2);[["#fff59d","Fri rota:","M.V."],["#b3e5fc","Wi-Fi:","SolarLab_Guest"],["#ffccbc","PV test","plan Q4"],["#c8e6c9","Lunch?","12:30"]].forEach(([pe,ve,me],Oe)=>{let _e=20+Oe%2*180+Math.random()*20,D=18+Math.floor(Oe/2)*120+Math.random()*10;z.save(),z.translate(_e+70,D+50),z.rotate((Math.random()-.5)*.2),z.fillStyle=pe,z.fillRect(-70,-50,140,100),z.fillStyle="#333",z.font='20px "Segoe Print", "Comic Sans MS", cursive',z.textAlign="center",z.fillText(ve,0,-8),z.fillText(me,0,22),z.fillStyle="#c21",z.beginPath(),z.arc(0,-40,5,0,v*2),z.fill(),z.restore()}),qt(z,Q,N,1,24)});s(.03,.62,.92,u(7032371),-4.985,1.6,-6.3),h(a(.88,.58,l(Fe,{roughness:.95}),-4.968,1.6,-6.3,"+x"),"cork","Cork board");let Be=pt(32,32,(z,Q,N)=>{let fe=z.createRadialGradient(Q/2,N/2,0,Q/2,N/2,Q/2);fe.addColorStop(0,"rgba(255,255,255,1)"),fe.addColorStop(1,"rgba(255,255,255,0)"),z.fillStyle=fe,z.fillRect(0,0,Q,N)}),ut=(z,Q,N,fe)=>{let pe=new Pt,ve=new Float32Array(z*3);for(let _e=0;_e<z;_e++)ve[_e*3]=Q[0]+Math.random()*(Q[1]-Q[0]),ve[_e*3+1]=Q[2]+Math.random()*(Q[3]-Q[2]),ve[_e*3+2]=Q[4]+Math.random()*(Q[5]-Q[4]);pe.setAttribute("position",new tn(ve,3));let me=new Ar({color:N,size:fe,map:Be,transparent:!0,opacity:0,depthWrite:!1,blending:Hi,fog:!1}),Oe=new Vo(pe,me);return Oe.userData.box=Q,Oe.userData.seed=Math.random()*100,c(Oe),i.add(Oe),Oe};e.dustSun=ut(260,[-5.6,-4.3,1.1,2.8,-1.8,1.8],16773590,.014),e.dustBeam=ut(300,[-1.5,3.2,.2,2.4,-12.6,-5.6],16763024,.016)}function _a(i,e,{segs:t=56,ring:n=16,flatten:s=1,floor:r=-1/0}={}){let o=new qi(i.map(m=>new U(...m)),!1,"centripetal"),a=[],l=[],h=[],c=new U(0,1,0),u=new U,d=new U,f=new U,g=new U,v=new U(1,0,0);for(let m=0;m<=t;m++){let S=m/t;o.getPointAt(S,g),o.getTangentAt(S,u),d.crossVectors(u,c),d.lengthSq()<1e-4?d.copy(v):d.normalize(),v.copy(d),f.crossVectors(d,u).normalize();let _=e(S);for(let x=0;x<=n;x++){let A=-Math.PI/2+x/n*Math.PI*2,M=Math.cos(A)*_,T=Math.sin(A)*_*s;a.push(g.x+M*d.x+T*f.x,Math.max(r,g.y+M*d.y+T*f.y),g.z+M*d.z+T*f.z),l.push(S,x/n)}}for(let m=0;m<t;m++)for(let S=0;S<n;S++){let _=m*(n+1)+S,x=_+n+1;h.push(_,x,_+1,x,x+1,_+1)}let p=new Pt;return p.setAttribute("position",new ct(a,3)),p.setAttribute("uv",new ct(l,2)),p.setIndex(h),p.computeVertexNormals(),p}var xa=i=>e=>{for(let t=1;t<i.length;t++)if(e<=i[t][0]){let[n,s]=i[t-1],[r,o]=i[t],a=(e-n)/(r-n);return s+(o-s)*a*a*(3-2*a)}return i[i.length-1][1]};function Ch(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new ii(n);return s.colorSpace=zt,s.anisotropy=4,s.wrapS=s.wrapT=Kt,s}function Ph(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}var yf=[208,136,72],_f=[150,78,30],xf=[238,212,170],ba=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t);function vf(i,e=.62){let t=Ph(77),n=Array.from({length:8},()=>t()*6.28);return Ch(512,256,(s,r,o)=>{let a=s.createImageData(r,o),l=a.data;for(let h=0;h<o;h++)for(let c=0;c<r;c++){let u=c/r,d=1-h/o,f=Math.exp(-(((d-e)/.2)**2)),g=Math.exp(-(((d-.22)/.13)**2))+Math.exp(-(((d-1.02)/.1)**2)),v=Math.sin(d*9+n[0])*.012+Math.sin(d*23+u*40+n[1])*.004,p=Math.sin((u+v)*i*Math.PI*2+Math.sin(u*7+n[2])*.8),m=Math.max(0,p-.15)/.85*(.35+.65*f)*(1-Math.min(1,g*1.4)),S=(t()-.5)*16,_=ba(yf,_f,Math.min(1,m*.9+f*.25));_=ba(_,xf,Math.min(1,g*.9));let x=(h*r+c)*4;l[x]=_[0]+S,l[x+1]=_[1]+S*.8,l[x+2]=_[2]+S*.6,l[x+3]=255}s.putImageData(a,0,0)})}function x_(){return Ch(256,128,(i,e,t)=>{let n=i.createImageData(e,t),s=n.data,r=Ph(5);for(let o=0;o<t;o++)for(let a=0;a<e;a++){let l=a/e,h=1-o/t,c=Math.abs(l-.25),u=0;if(h>.6)for(let p of[0,.045,.09,.14])u=Math.max(u,Math.exp(-(((c-p)/.012)**2))*Math.min(1,(h-.6)/.08));h>.66&&c>.18&&(u=Math.max(u,.5+.5*Math.sin(l*60))),c>.1&&c<.2&&(u=Math.max(u,Math.exp(-(((h-.5+(c-.1)*.6)/.018)**2))*.9));let d=Math.exp(-((c/.085)**2))*Math.exp(-(((h-.36)/.13)**2))+Math.exp(-(((h-.1)/.15)**2)),f=ba(yf,_f,u*.85);f=ba(f,xf,Math.min(1,d));let g=(r()-.5)*14,v=(o*e+a)*4;s[v]=f[0]+g,s[v+1]=f[1]+g*.8,s[v+2]=f[2]+g*.6,s[v+3]=255}i.putImageData(n,0,0)})}function b_(){let i=Ch(128,128,(e,t,n)=>{let s=e.createImageData(t,n),r=s.data,o=Ph(9);for(let a=0;a<t*n;a++){let l=o()**.8*255;r[a*4]=r[a*4+1]=r[a*4+2]=l,r[a*4+3]=255}e.putImageData(s,0,0)});return i.colorSpace=Qn,i}function bf({M:i}){let e=new Qe,t=b_(),n=ee=>new Yi({map:ee,roughness:.92,sheen:1,sheenRoughness:.45,sheenColor:new Ue(.55,.36,.2),bumpMap:t,bumpScale:.4}),s=(ee,ae,Ae,Ve,K=.0035,oe=3)=>{let be=new Ee(ee,ae);Ve.add(be);let le=ee.attributes.normal,ye=ee.attributes.position,Fe=t.clone();Fe.repeat.set(...Ae),Fe.needsUpdate=!0;for(let Be=1;Be<=oe;Be++){let ut=ee.clone(),z=ut.attributes.position;for(let fe=0;fe<z.count;fe++)z.setXYZ(fe,ye.getX(fe)+le.getX(fe)*K*Be/oe,ye.getY(fe)+le.getY(fe)*K*Be/oe,ye.getZ(fe)+le.getZ(fe)*K*Be/oe);ut.computeBoundingSphere();let Q=new Ot({map:ae.map,alphaMap:Fe,alphaTest:.35+Be*.14,roughness:1,color:new Ue().setScalar(.8+Be*.06)}),N=new Ee(ut,Q);N.raycast=()=>{},Ve.add(N)}return be},r=n(vf(9)),o=n(vf(5,.5)),a=n(x_()),l=[-.075,.068,-.028],h=[];for(let ee=-.62;ee<=.93;ee+=.08)h.push([.05*Math.cos(ee*Math.PI),.05,.1*Math.sin(ee*Math.PI)]);h.push([-.07,.058,0],l);let c=new Qe;e.add(c),s(_a(h,xa([[0,.004],[.025,.05],[.07,.072],[.15,.078],[.4,.07],[.62,.068],[.78,.06],[.9,.042],[1,.035]]),{flatten:.74,floor:.002,segs:72}),r,[2,1.8],c);let u=new Yi({color:15324080,roughness:.9,sheen:1,sheenRoughness:.5,sheenColor:new Ue(.4,.34,.28)}),d=(ee,ae)=>{s(_a(ee,xa([[0,ae],[.7,.0145],[1,.012]]),{segs:20,ring:10,floor:.002}),o,[.6,.5],c,.003,2);let[Ae,Ve]=[ee[ee.length-2],ee[ee.length-1]].map(oe=>new U(...oe)),K=new Ee(new xn(.0165,14,10),u);K.position.copy(Ve),K.lookAt(Ve.clone().sub(Ae).add(Ve)),K.scale.set(1.05,.62,1.3),c.add(K)};d([[-.04,.03,.055],[-.078,.021,.022],[-.094,.016,-.012],[-.099,.014,-.034]],.02),d([[-.042,.03,.098],[-.08,.021,.07],[-.097,.016,.034],[-.101,.014,.012]],.02);let f=xa([[0,.018],[.5,.0155],[1,.0145]]);s(_a([[-.03,.035,-.115],[-.07,.026,-.15],[-.105,.02,-.17],[-.13,.008,-.178],[-.14,0,-.18]],f,{segs:24,ring:10,floor:.002}),o,[.7,.35],e,.003,2);let g=new Qe;g.position.set(-.14,0,-.18),e.add(g);let v=new Ee(new xn(.0145,12,10),o);g.add(v),s(_a([[0,0,0],[-.006,-.04,.002],[-.008,-.08,.01],[-.001,-.1,.028],[.006,-.102,.042]],xa([[0,.0145],[.75,.012],[1,.003]]),{segs:24,ring:10}),o,[.5,.35],g,.003,2);let p=new Qe;p.position.set(...l),e.add(p),p.lookAt(new U(l[0]-1,l[1]-.35,l[2]-.3).add(e.position)),p.rotateZ(.3);let m=new xn(.05,32,20);m.scale(1.05,.86,.95),s(m,a,[1.2,.6],p,.004,3);let S=new Yi({color:15653044,roughness:.9,sheen:1,sheenRoughness:.5,sheenColor:new Ue(.4,.34,.28)});for(let ee of[-1,1]){let ae=new Ee(new xn(.0145,14,10),S);ae.position.set(ee*.0115,-.017,.038),ae.scale.set(1,.85,.9),p.add(ae)}let _=new Ee(new xn(.014,12,8),S);_.position.set(0,-.032,.03),p.add(_);let x=new Ee(new xn(.0075,12,8),new Ot({color:12745328,roughness:.35}));x.position.set(0,-.004,.047),x.scale.set(1.2,.75,.7),p.add(x);let A=new Ot({color:2758412,roughness:.6}),M=[-1,1].map(ee=>{let ae=new Ee(new Un(.0105,.0016,6,16,Math.PI*.8),A);return ae.position.set(ee*.021,.014,.041),ae.rotation.set(-.35,ee*.45,Math.PI+Math.PI*.1),p.add(ae),ae}),T=new Qe;p.add(T),T.visible=!1;let L=new Ee(new xn(.0095,16,12),new Yi({color:14263345,roughness:.15,clearcoat:1,emissive:3810304}));L.position.set(.021,.013,.041),L.scale.set(1,.8,.6),T.add(L);let b=new Ee(new xn(.0095,12,8),new Ht({color:328965}));b.position.set(.021,.013,.0437),b.scale.set(.22,.75,.5),T.add(b);let y=new Yi({map:a.map,roughness:.9,sheen:1,sheenRoughness:.4,sheenColor:new Ue(.5,.33,.2)}),R=new Ot({color:13209736,roughness:.8}),I=[-1,1].map(ee=>{let ae=new Qe;ae.position.set(ee*.029,.034,-.004),ae.rotation.set(-.25,ee*.2,-ee*.42),p.add(ae);let Ae=new Ee(new hs(.02,.036,3,1),y);Ae.position.y=.016,Ae.scale.set(1,1,.45),Ae.rotation.y=Math.PI/6,ae.add(Ae);let Ve=new Ee(new hs(.014,.027,3,1),R);return Ve.position.set(0,.013,.005),Ve.scale.set(1,1,.3),Ve.rotation.y=Math.PI/6,ae.add(Ve),ae}),F=[];for(let ee of[-1,1])for(let ae=0;ae<4;ae++){let Ae=-.012-ae*.004,Ve=(ae-1.5)*.12;F.push(ee*.018,Ae,.04,ee*(.018+Math.cos(Ve)*.055),Ae-.006-Math.sin(Ve)*.02,.04-.012)}let H=new Pt;H.setAttribute("position",new ct(F,3));let Y=new wr(H,new Gs({color:9407104,transparent:!0,opacity:.4}));Y.raycast=()=>{},p.add(Y);let W=new Ee(new Un(.037,.0055,8,24),i.red);W.position.set(-.064,.058,.004),W.lookAt(new U(-.075,.068,-.028).add(e.position)),e.add(W);let se=new Ee(new pn(.009,.009,.002,16),new Ot({color:14198840,metalness:.85,roughness:.3}));se.position.set(-.098,.03,.01),se.rotation.z=Math.PI/2,e.add(se),e.traverse(ee=>{ee.isMesh&&(ee.castShadow=!1)});let $=p.quaternion.clone();return{group:e,body:c,tail:g,ears:I,head:p,eyeOpen:T,lids:M,lift:ee=>{p.quaternion.copy($),p.rotateX(-.28*ee),p.rotateY(.12*ee)}}}var Ke=3.5,at=(i,e={})=>new Ot({color:i,roughness:.7,metalness:.05,...e});function Ma(i,e,t,n){i.fillStyle="#2a2f36",i.fillRect(0,0,e,t),i.fillStyle="#ffd24a",i.font=`bold 30px ${Xe.sans}`,i.textAlign="center",i.fillText("SUN-SIM",e/2,40),i.fillStyle="#081a0e",i.fillRect(24,60,e-48,50),i.fillStyle=n?"#3eff7a":"#ff4a4a",i.font=`24px ${Xe.mono}`,i.fillText(n?"UNLOCKED":"LOCKED",e/2,94);for(let s=0;s<4;s++)for(let r=0;r<3;r++)i.fillStyle="#ccd",i.fillRect(40+r*64,130+s*56,48,42),i.fillStyle="#222",i.font=`bold 22px ${Xe.sans}`,i.fillText("123456789C0\u2713"[s*3+r],64+r*64,159+s*56);qt(i,e,t,.8,3)}function Ih(i,e,t,n,s){i.fillStyle="#100404",i.fillRect(0,0,e,t),i.fillStyle=s?"#ff3b2f":"#3a1210",i.font=`bold ${t*.75}px ${Xe.mono}`,i.textAlign="center",i.textBaseline="middle",i.fillText(s?n:"--",e/2,t/2+2),i.textBaseline="alphabetic"}function Mf(i,e){let t=[],n={interactables:[]},s=(P,G,J,de)=>{let Ye={minX:P,maxX:G,minZ:J,maxZ:de,enabled:!0};return t.push(Ye),Ye},r=(P,G,J,de,Ye,ft,_t,kt=i)=>{let jt=new Ee(new Mi(P,G,J),de);return jt.position.set(Ye,ft,_t),kt.add(jt),jt},o=(P,G,J,de,Ye,ft,_t=i,kt=24)=>{let jt=new Ee(new pn(P,P,G,kt),J);return jt.position.set(de,Ye,ft),_t.add(jt),jt},a=(P,G,J,de,Ye,ft=i)=>{let _t=new Ee(new xn(P,20,14),G);return _t.position.set(J,de,Ye),ft.add(_t),_t},l=(P,G,J,de,Ye,ft,_t="+z",kt=i)=>{let jt=new Ee(new Cn(P,G),J);return jt.position.set(de,Ye,ft),jt.rotation.y={"+z":0,"-z":Math.PI,"+x":Math.PI/2,"-x":-Math.PI/2}[_t]??0,_t==="+y"&&jt.rotation.set(-Math.PI/2,0,0),kt.add(jt),jt},h=(P,G={})=>new Ot({map:P,roughness:.6,...G}),c=(P,G=.6)=>h(P,{emissive:16777215,emissiveMap:P,emissiveIntensity:G}),u=(P,G=1)=>new Ot({color:1118481,emissive:new Ue(P),emissiveIntensity:G}),d=(P,G,J)=>(P.traverse(de=>{de.userData.id=G,de.userData.label=J,de.userData.root=P}),n.interactables.push(P),P),f=(P,G,J,de)=>{let Ye=new U(...P),ft=new U(...G),_t=new Ee(new pn(J,J,Ye.distanceTo(ft),12),de);return _t.position.copy(Ye).add(ft).multiplyScalar(.5),_t.quaternion.setFromUnitVectors(new U(0,1,0),ft.clone().sub(Ye).normalize()),i.add(_t),_t},g=P=>(P.raycast=()=>{},P),v=yh({base:[214,218,221],seed:11}),p=yh({base:[86,100,118],seed:23,grime:.8}),m=_h({seed:5}),S=_h({base:[70,78,90],grout:[42,46,52],seed:9}),_=Vd({seed:7}),x=xh({seed:3}),A=xh({base:[196,202,208],seed:8}),M=bh({seed:4}),T=bh({base:[48,53,59],seed:6}),L=(P,G,J,de=0)=>{let Ye=P.clone();return Ye.repeat.set(G,J),Ye.offset.set(0,de),Ye.needsUpdate=!0,Ye},b=(P,G,J=Ke)=>{let de=J/Ke,Ye=1-de;return at(16777215,{map:L(P.map,G/3.5,de,Ye),bumpMap:L(P.bump,G/3.5,de,Ye),bumpScale:.7,roughness:.93})},y=(P,G,J)=>at(16777215,{map:L(P.map,G/2.4,J/2.4),bumpMap:L(P.bump,G/2.4,J/2.4),bumpScale:1.5,roughnessMap:L(P.rough,G/2.4,J/2.4),roughness:1}),R=(P,G)=>at(16777215,{map:L(_.map,P/2.4,G/2.4),roughness:1}),I={wall:b(v,3.5),metal:at(16777215,{map:x.map,roughnessMap:x.rough,metalness:.75,roughness:.85}),dark:at(16777215,{map:T.map,roughness:.62}),white:at(16777215,{map:M.map,roughness:.55}),alu:at(16777215,{map:A.map,roughnessMap:A.rough,metalness:.8,roughness:.7}),pipeY:at(14725658,{metalness:.3,roughness:.4}),pipeB:at(3833808,{metalness:.3,roughness:.4}),ctrlWall:at(5596538,{roughness:.9}),wood:at(7032371,{roughness:.8}),red:at(13639712,{metalness:.4})};l(12,10,y(m,12,10),0,0,0,"+y"),l(10,8,y(S,10,8),0,0,-9,"+y"),l(12,10,R(12,10),0,Ke,0,"+y").rotation.x=Math.PI/2,l(10,8,R(10,8),0,Ke,-9,"+y").rotation.x=Math.PI/2,r(12.4,Ke,.2,b(v,12.4),0,Ke/2,5.1),s(-6.2,6.2,5,5.2),r(.2,Ke,10.4,b(v,10.4),-6.1,Ke/2,0),s(-6.2,-6,-5.2,5.2),r(.2,Ke,10.4,b(v,10.4),6.1,Ke/2,0),s(6,6.2,-5.2,5.2),r(5.4,Ke,.2,b(v,5.4),-3.5,Ke/2,-5.1),s(-6.2,-.8,-5.2,-5),r(5.4,Ke,.2,b(v,5.4),3.5,Ke/2,-5.1),s(.8,6.2,-5.2,-5),r(1.6,Ke-2.4,.2,b(v,1.6,Ke-2.4),0,2.4+(Ke-2.4)/2,-5.1),l(4.2,Ke,b(p,4.2),-2.9,Ke/2,-5.205,"-z"),l(4.2,Ke,b(p,4.2),2.9,Ke/2,-5.205,"-z"),l(1.6,Ke-2.4,b(p,1.6,Ke-2.4),0,2.4+(Ke-2.4)/2,-5.205,"-z"),r(.2,Ke,8,b(p,8),-5.1,Ke/2,-9.2),s(-5.2,-5,-13.2,-5.2);let F=(P,G,J,de)=>{let Ye=at(16777215,{roughness:.93,bumpScale:.7});for(let[ft,_t]of[["map",p.map],["bumpMap",p.bump]]){let kt=_t.clone();kt.repeat.set((G-P)/3.5,(de-J)/Ke),kt.offset.set((P+5.2)/3.5,J/Ke),kt.needsUpdate=!0,Ye[ft]=kt}r(G-P,de-J,.2,Ye,(P+G)/2,(J+de)/2,-13.1)};F(-5.2,-4,0,Ke),F(-.6,5.2,0,Ke),F(-4,-.6,0,1.35),F(-4,-.6,2.65,Ke),s(-5.2,5.2,-13.2,-13),r(.2,Ke,4.4,b(p,4.4),5.1,Ke/2,-11),s(5,5.2,-13.2,-8.8),r(.2,Ke,2,b(p,2),5.1,Ke/2,-6.2),s(5,5.2,-7.2,-5.2),r(.2,Ke-2.4,1.6,b(p,1.6,Ke-2.4),5.1,2.4+(Ke-2.4)/2,-8),l(4,1.6,y(S,4,1.6),7,0,-8,"+y"),l(4,1.6,R(4,1.6),7,Ke,-8,"+y").rotation.x=Math.PI/2,r(3.8,Ke,.2,b(p,3.8),7.1,Ke/2,-7.1),s(5.2,9.2,-7.2,-7),r(3.8,Ke,.2,b(p,3.8),7.1,Ke/2,-8.9),s(5.2,9.2,-9,-8.8),n.outside=new va({scale:Ks()?.5:1}),n.doorFrame={origin:new U(9,0,-8),right:new U(0,0,1),normal:new U(-1,0,0),xCenter:1024+Lt.K*Math.PI/2},n.doorView=l(1.6,2.4,n.outside.material(n.doorFrame),9,1.2,-8,"-x"),r(.2,Ke-2.4,1.6,b(p,1.6,Ke-2.4),9.1,2.4+(Ke-2.4)/2,-8),s(9,9.2,-8.8,-7.2);for(let P of[-8.77,-7.23])r(.12,2.4,.06,I.alu,8.96,1.2,P);r(.12,.06,1.6,I.alu,8.96,2.37,-8),r(.14,.02,1.6,I.metal,8.95,.01,-8),n.skyLight=new Si(16761996,0,9,1,.8,1),n.skyLight.position.set(8.9,2.3,-8),n.skyLight.target.position.set(6.2,0,-8),i.add(n.skyLight,n.skyLight.target),n.exitTrigger={minX:7.6,maxX:9,minZ:-8.8,maxZ:-7.2},r(11.9,.1,.02,I.dark,0,.05,4.99),r(.02,.1,9.9,I.dark,-5.99,.05,0),r(.02,.1,9.9,I.dark,5.99,.05,0),n.hemi=new Jo(14674175,9077368,.25),i.add(n.hemi),n.labLights=[];for(let[P,G]of[[-3,-2.2],[3,-2.2],[-3,2.5],[3,2.5]]){let J=u(16054271,.05);r(1.4,.06,.35,J,P,Ke-.03,G);let de=new si(16054271,0,0,2);de.position.set(P,Ke-.25,G),i.add(de),n.labLights.push({light:de,mat:J})}n.ctrlLights=[];for(let[P,G]of[[-2.5,-9],[2.5,-9]]){let J=u(12375295,.05);r(1.2,.06,.3,J,P,Ke-.03,G);let de=new si(16773596,0,0,2);de.position.set(P,Ke-.3,G),i.add(de),n.ctrlLights.push({light:de,mat:J})}r(1.2,.06,.3,u(12375295,.02),7,Ke-.03,-8),n.emergency=[];for(let[P,G,J]of[[0,3.2,4.8],[-5.8,3.2,-4.6],[5.8,3.2,-4.6],[4.8,3.2,-12.8]]){r(.4,.1,.12,u(15266047,1.2),P,G,J);let de=new Si(13623551,2.6,0,1.05,.75,2);de.position.set(P,G-.08,J+(J>0?-.2:.2)),de.target.position.set(P,0,J+(J>0?-1.2:1.2)),i.add(de,de.target),n.emergency.push(de)}let H=Yt([{t:"\u{1F3C3} EXIT",font:`bold 72px ${Xe.sans}`}],{w:256,h:96,bg:"#0c7a35",fg:"#fff"});l(.6,.22,c(H,1.1),4.98,2.7,-8,"-x");let Y=h($d(),{roughness:.25,metalness:.3});for(let P of[-1.3,0,1.3]){let G=new Qe;G.position.set(-4.95,1.05,P),G.rotation.z=-.5,r(1.75,.05,1.15,I.alu,0,0,0,G),l(1.68,1.08,Y,0,.03,0,"+y",G),i.add(G),d(G,"pv","III-V PV test modules")}r(1.5,.06,3.9,I.metal,-4.95,.62,0);for(let P of[-1.9,1.9])for(let G of[-5.6,-4.3])r(.06,G<-5?1.35:.62,.06,I.metal,G,G<-5?.67:.31,P);s(-5.75,-4.15,-2,2),r(1.7,.18,4,I.dark,-4.95,3.05,0),r(.05,.4,.05,I.metal,-4.95,3.3,-1.8),r(.05,.4,.05,I.metal,-4.95,3.3,1.8);let W=u(16773832,.05),se=e.lamps,$=se>5?2:1,ue=Math.ceil(se/$),ee=0;for(let P=0;P<$;P++){let G=P===$-1?se-ee:ue;for(let J=0;J<G;J++){let de=G===1?0:-1.5+3*J/(G-1),Ye=$===1?-4.95:P===0?-5.35:-4.55;o(.2,.05,W,Ye,2.94,de),o(.23,.08,I.dark,Ye,3,de),ee++}}n.sunLampMat=W,n.sunLight=new Si(16773324,0,0,1.15,.6,2),n.sunLight.position.set(-4.95,2.85,0),n.sunLight.target.position.set(-4.95,0,0),i.add(n.sunLight,n.sunLight.target);let ae=new yt({uniforms:{opacity:{value:0}},transparent:!0,depthWrite:!1,blending:Hi,side:An,vertexShader:"varying vec3 vN, vV; varying float vY; void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vY = uv.y; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float opacity; varying vec3 vN, vV; varying float vY; void main() { float edge = pow(abs(dot(normalize(vN), normalize(vV))), 2.0); gl_FragColor = vec4(vec3(1.0, 0.94, 0.78) * opacity * edge * smoothstep(0.0, 0.8, vY), 1.0); }"}),Ae=new Ee(new pn(.85,1.25,1.9,32,1,!0),ae);Ae.scale.set(1,1,1.6),Ae.position.set(-4.95,1.95,0),i.add(g(Ae)),n.sunCone={get opacity(){return ae.uniforms.opacity.value},set opacity(P){ae.uniforms.opacity.value=P}},n.keypadTex=pt(256,360,(P,G,J)=>Ma(P,G,J,!1));let Ve=new Qe;r(.06,.5,.36,I.dark,-5.97,1.45,2.85,Ve),l(.34,.48,c(n.keypadTex,.35),-5.935,1.45,2.85,"+x",Ve),i.add(Ve),d(Ve,"sunsim","Sun-simulator keypad"),l(.8,.4,h(Yt(["PV TEST RIG",{t:"Sun simulator \xB7 3 suns",font:`30px ${Xe.sans}`}],{bg:"#1b3a6b",fg:"#fff"})),-5.99,2,-2.75,"+x");let K=pt(256,420,(P,G,J)=>{P.fillStyle="#e9ecef",P.fillRect(0,0,G,J),P.fillStyle="#2d7a3e",P.fillRect(0,0,G,50),P.fillStyle="#fff",P.font=`bold 26px ${Xe.sans}`,P.textAlign="center",P.fillText("Li-ion BESS",G/2,34);for(let de=0;de<6;de++)P.fillStyle="#c5cad0",P.fillRect(20,70+de*56,G-40,46),P.fillStyle="#8b9299",P.fillRect(30,80+de*56,60,8),P.fillStyle="#3a3",P.fillRect(G-50,82+de*56,10,10);qt(P,G,J,1.2,11)});n.socLeds=[];for(let[P,G]of[[0,2.35],[1,3.75]]){let J=new Qe;if(r(.7,2,1.2,I.white,5.6,1,G,J),l(1.1,1.8,h(K),5.245,1,G,"-x",J),P===0){r(.04,1.1,.14,I.dark,5.23,1.1,G+.48,J);for(let de=0;de<10;de++)n.socLeds.push(r(.02,.07,.09,u(2236962,1),5.2,.63+de*.105,G+.48,J))}i.add(J),d(J,"battery","Battery storage 10 kWh")}s(5.2,6,1.7,4.4),n.invLeds={};let oe=[["inv_pv","INV-1","PV \xB7 HYBRID",.95],["inv_bat","INV-2","BATTERY",.15],["inv_fc","INV-3","FUEL CELL",-.65]],be=n.INV_Y=1.25,le=be+.36;for(let[P,G,J,de]of oe){let Ye=new Qe;r(.22,.72,.56,I.white,5.88,be,de,Ye);let ft=Yt([{t:G,font:`bold 64px ${Xe.sans}`},{t:J,font:`bold 36px ${Xe.sans}`,color:"#1b5fa8"},{t:"~ / =",font:`46px ${Xe.mono}`,color:"#666"}],{w:256,h:320,bg:"#f5f6f7"});l(.5,.64,h(ft),5.765,be,de,"-x",Ye),n.invLeds[P]=r(.03,.05,.05,u(1118481,1),5.75,be+.28,de+.18,Ye),i.add(Ye),d(Ye,P,`${G} \xB7 ${J.toLowerCase()} inverter`),r(.08,3.1-le,.08,I.dark,5.93,le+(3.1-le)/2,de-.2)}n.cat=bf({M:I}),n.cat.group.position.set(5.873,le,.22),i.add(n.cat.group),d(n.cat.group,"cat","A sleeping cat");let ye=new Qe;r(.4,2,1.9,at(9081756,{metalness:.4,roughness:.5}),5.8,1.2,-2.9,ye),r(.02,1.85,1.75,at(1777959),5.595,1.2,-2.9,ye),n.busbars=[],[1.75,1.5,1.25].forEach((P,G)=>{n.busbars.push(r(.05,.07,1.4,u(3355443,.15),5.55,P,-2.95,ye)),l(.16,.12,h(Yt([`L${G+1}`],{w:128,h:96,bg:"#1b2127",fg:"#e6edf3",font:`bold 64px ${Xe.sans}`})),5.575,P,-2.1,"-x",ye)}),r(.05,.07,1.4,at(3828432,{metalness:.5}),5.55,1,-2.95,ye),l(.16,.12,h(Yt(["N"],{w:128,h:96,bg:"#1b2127",fg:"#7aa0ff",font:`bold 64px ${Xe.sans}`})),5.575,1,-2.1,"-x",ye),n.breakers=[];for(let P=0;P<3;P++)r(.1,.3,.16,I.white,5.55,.55,-3.3+P*.3,ye),n.breakers.push(r(.06,.08,.06,at(2763306),5.49,.6,-3.3+P*.3,ye));let Fe=new Ee(new Cn(1.75,1.85),new Ot({color:11193582,transparent:!0,opacity:.12,roughness:.05}));Fe.position.set(5.44,1.2,-2.9),Fe.rotation.y=-Math.PI/2,ye.add(Fe),i.add(ye),d(ye,"bus","Main bus panel"),l(1.2,.3,h(Yt(["MAIN BUS  3~ 230/400 V"],{w:512,h:128,bg:"#ffd200",fg:"#111",font:`bold 48px ${Xe.sans}`})),5.99,2.45,-2.9,"-x"),l(.4,.4,h(pt(256,256,P=>{P.fillStyle="#ffd200",P.beginPath(),P.moveTo(128,16),P.lineTo(244,230),P.lineTo(12,230),P.closePath(),P.fill(),P.strokeStyle="#111",P.lineWidth=12,P.stroke(),P.fillStyle="#111",P.font=`bold 130px ${Xe.sans}`,P.textAlign="center",P.fillText("\u26A1",128,200)}),{transparent:!0}),5.99,2.4,-1.7,"-x"),s(5.5,6,-3.9,-1.9),r(.35,.08,7.8,I.metal,5.75,3.12,.4),r(10.8,.08,.35,I.metal,.4,3.12,-4.75),r(.08,.9,.08,I.dark,5.93,2.65,-3.75),n.recorders={};let Be=(P,G,J,de,Ye=0)=>{let ft=new Qe;r(.14,.035,.07,at(1777444),0,0,0,ft),r(.05,.01,.04,I.alu,.03,.022,0,ft);let _t=r(.012,.012,.012,u(16719904,1.5),-.05,.022,.02,ft);ft.position.set(G,J,de),ft.rotation.y=Ye,i.add(ft),d(ft,P,"Voice recorder"),n.recorders[P]=_t};Be("rec2",5.6,2.02,3.8,.4);let ut=pt(512,512,(P,G,J)=>{P.fillStyle="#f2f4f6",P.fillRect(0,0,G,J),P.fillStyle="#1b5fa8",P.fillRect(0,60,G,60),P.fillStyle="#fff",P.font=`bold 44px ${Xe.sans}`,P.textAlign="center",P.fillText("PEM ELECTROLYZER",G/2,105),P.fillStyle="#333",P.font=`32px ${Xe.sans}`,P.fillText("3 kW \xB7 H\u2082O \u2192 H\u2082 + \xBD O\u2082 \xB7 30 bar",G/2,170);for(let de=0;de<18;de++)P.fillStyle=de%2?"#9aa4ad":"#6f7a84",P.fillRect(70+de*20,220,16,180);P.fillStyle="#081a0e",P.fillRect(140,420,232,56),qt(P,G,J,1.2,12)}),z=new Qe;r(1.6,1.6,1.1,I.white,-4.7,.8,-4.2,z),l(1.5,1.5,h(ut),-4.7,.8,-3.645,"+z",z),n.elzGlow=r(1.5,.05,.02,u(3842303,.05),-4.7,1.57,-3.64,z),o(.28,.7,at(13625599,{transparent:!0,opacity:.7,roughness:.1}),-5.15,1.95,-4.3,z),i.add(z),d(z,"electrolyzer","PEM electrolyzer"),s(-5.55,-3.85,-4.8,-3.6),Be("rec3",-4.3,1.62,-3.95,-.3);let Q=new Qe;o(.24,1.3,I.white,-2.9,.75,-4.35,Q);let N=new Ee(new xn(.24,24,12,0,Math.PI*2,0,Math.PI/2),I.white);N.position.set(-2.9,1.4,-4.35),Q.add(N);let fe=new Ee(new pn(.243,.243,.3,24,1,!0,-.65,1.3),h(Yt([{t:"H\u2082",font:`bold 120px ${Xe.sans}`,color:"#c21"},{t:"30 bar \xB7 90 L",font:`36px ${Xe.sans}`}],{w:256,h:256,bg:"#ffffff"})));fe.position.set(-2.9,1,-4.35),Q.add(fe),n.valve=new Ee(new Un(.11,.022,8,20),I.red),n.valve.position.set(-2.9,.45,-3.98),n.valve.visible=!1,Q.add(n.valve),o(.02,.14,I.metal,-2.9,.45,-4.05,Q).rotation.x=Math.PI/2,n.valveTag=new Qe,l(.1,.075,h(Yt(["NO WHEEL","\u2014 M.V."],{w:128,h:96,bg:"#fff6c8",fg:"#b3261e",font:`bold 22px ${Xe.sans}`})),-2.9,.37,-3.985,"+z",n.valveTag),o(.002,.045,I.dark,-2.9,.428,-3.985,n.valveTag),Q.add(n.valveTag),o(.05,1.3,at(13428479,{transparent:!0,opacity:.3}),-2.52,.75,-4.15,Q),r(.12,.1,.12,I.metal,-2.52,.05,-4.15,Q);for(let P of[.3,1.2])r(.16,.03,.04,I.metal,-2.6,P,-4.18,Q);n.h2Bar=o(.038,1.26,u(7327999,.8),-2.52,.12,-4.15,Q),n.h2Bar.geometry.translate(0,.63,0),n.h2Bar.scale.y=.001,i.add(Q),d(Q,"h2tank","H\u2082 tank & valve"),s(-3.2,-2.4,-4.7,-3.9),f([-3.9,1.4,-4.35],[-3.14,1.4,-4.35],.035,I.pipeY),f([-2.9,1.64,-4.35],[-2.9,2.75,-4.35],.035,I.pipeY),f([-2.9,2.75,-4.35],[-2.9,2.75,-4.85],.035,I.pipeY),f([-2.9,2.75,-4.85],[3.1,2.75,-4.85],.035,I.pipeY),f([3.1,2.75,-4.85],[3.1,1.3,-4.85],.035,I.pipeY),f([-5.15,2.3,-4.3],[-5.15,3.1,-4.3],.03,I.pipeB);let pe=pt(512,512,(P,G,J)=>{P.fillStyle="#5b6570",P.fillRect(0,0,G,J),P.fillStyle="#2e8b57",P.fillRect(0,40,G,70),P.fillStyle="#fff",P.font=`bold 46px ${Xe.sans}`,P.textAlign="center",P.fillText("PEM FUEL CELL",G/2,92),P.fillStyle="#e6edf3",P.font=`32px ${Xe.sans}`,P.fillText("3.4 kW \xB7 H\u2082 + \xBD O\u2082 \u2192 H\u2082O",G/2,160),P.strokeStyle="#333",P.lineWidth=6,P.beginPath(),P.arc(G/2,330,120,0,Math.PI*2),P.stroke();for(let de=-100;de<=100;de+=20)P.beginPath(),P.moveTo(G/2-Math.sqrt(120*120-de*de),330+de),P.lineTo(G/2+Math.sqrt(120*120-de*de),330+de),P.stroke();qt(P,G,J,1.4,13)}),ve=new Qe;r(1.3,1.3,.9,at(5989744,{metalness:.3}),3.1,.65,-4.3,ve),l(1.25,1.25,h(pe),3.1,.65,-3.845,"+z",ve),n.fcGlow=r(1.2,.05,.02,u(4116346,.05),3.1,1.27,-3.84,ve),i.add(ve),d(ve,"fuelcell","PEM fuel cell"),s(2.4,3.8,-4.8,-3.8);let me=pt(256,384,(P,G,J)=>{P.fillStyle="#7d8790",P.fillRect(0,0,G,J),P.strokeStyle="#5d666e",P.lineWidth=4,P.strokeRect(16,16,G-32,J-32),P.fillStyle="#1b2530",P.fillRect(70,50,116,90),P.fillStyle="#ffd200",P.fillRect(16,250,G-32,38),P.fillStyle="#111",P.font=`bold 20px ${Xe.sans}`,P.textAlign="center",P.fillText("CONTROL ROOM",G/2,276),qt(P,G,J,1.5,14)});n.door=r(1.62,2.4,.08,[I.metal,I.metal,I.metal,I.metal,h(me,{metalness:.4}),h(me,{metalness:.4})],0,1.2,-4.93),d(n.door,"door","Booth door (motor drive)"),n.doorCollider=s(-.85,.85,-5.2,-4.85),n.doorLed=r(.5,.06,.04,u(16719904,1.5),0,2.55,-4.98),n.doorScreenTex=pt(256,320);let Oe=new Qe;r(.42,.52,.05,I.dark,-1.3,1.45,-4.98,Oe),l(.36,.45,c(n.doorScreenTex),-1.3,1.45,-4.95,"+z",Oe),i.add(Oe),d(Oe,"door","Door drive controller");for(let P of[-4.7,-5.45]){let G=la();G.repeat.set(3,1),l(1.6,.25,h(G),0,.012,P,"+y")}let _e=pt(1024,512,(P,G,J)=>{P.fillStyle="#f7f7f2",P.fillRect(0,0,G,J);for(let Ye=0;Ye<14;Ye++)P.fillStyle="rgba(120,130,160,.07)",P.beginPath(),P.ellipse(80+Math.random()*860,60+Math.random()*400,120,22,Math.random()-.5,0,Math.PI*2),P.fill();let de='"Segoe Print", "Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive';Dr(e).forEach(([Ye,ft,_t],kt)=>{P.fillStyle=ft,P.font=`${_t||"28px"} ${de}`,P.fillText(Ye,40,64+kt*58)}),qt(P,G,J,.5,15)}),D=new Qe;r(2.7,1.4,.05,I.alu,-1.8,1.75,4.97,D),l(2.6,1.3,h(_e,{roughness:.3}),-1.8,1.75,4.94,"-z",D),r(2,.04,.08,I.alu,-1.8,1.03,4.93,D),i.add(D),d(D,"whiteboard","Whiteboard");let E=new Qe,V=Yt([{t:"SOLAR TEST LABORATORY",font:"bold 38px Georgia, serif"},{t:`EST. ${e.year}`,font:"bold 64px Georgia, serif"},{t:'"Power to the people."',font:"italic 30px Georgia, serif"}],{w:512,h:300,bg:"#b8923a",fg:"#3b2a08",border:"#8a6a22"});r(.74,.44,.03,at(9071138,{metalness:.25,roughness:.5}),2.6,1.95,4.98,E),l(.7,.41,h(V,{metalness:.1,roughness:.45}),2.6,1.95,4.96,"-z",E),i.add(E),d(E,"plaque","Brass plaque"),r(2.4,.06,.8,I.wood,2.6,.9,4.55);for(let[P,G]of[[1.5,4.25],[3.7,4.25],[1.5,4.85],[3.7,4.85]])r(.06,.9,.06,I.metal,P,.45,G);r(.45,.3,.35,I.dark,2,1.08,4.6),l(.22,.16,u(2817898,.6),1.95,1.1,4.42,"-z"),r(.12,.2,.05,at(15909376),3.45,1.03,4.55),s(1.35,3.85,4.1,5),r(.72,.2,.62,at(5980976),2.4,.76,4.55),n.drawer=new Qe,r(.66,.16,.56,at(8018494),0,0,0,n.drawer),r(.7,.18,.02,at(9201736),0,0,-.325,n.drawer),r(.16,.025,.03,I.alu,0,.045,-.345,n.drawer);let ne=pt(160,48,(P,G,J)=>{P.fillStyle="#222",P.fillRect(0,0,G,J),P.fillStyle="#ddd",P.font=`bold 34px ${Xe.mono}`,P.textAlign="center",P.fillText("0 0 0 0",G/2,36)});n.drawerLockTex=ne,l(.16,.05,c(ne,.3),0,-.03,-.337,"-z",n.drawer),n.drawerWheel=new Ee(new Un(.1,.02,8,20),I.red),n.drawerWheel.rotation.x=Math.PI/2,n.drawerWheel.position.set(.05,0,.05),n.drawer.add(n.drawerWheel),n.drawer.position.set(2.4,.76,4.55),i.add(n.drawer),d(n.drawer,"drawer","Bench drawer (combination lock)");let re=new Qe,te=o(.03,.2,at(15259568),0,0,0,re);te.rotation.z=Math.PI/2;let ke=P=>at(P,{emissive:new Ue(P),emissiveIntensity:.25,roughness:.5});[.075,.04,.005].forEach((P,G)=>{let J=o(.032,.018,ke(Ys[e.bands[G]]),P,0,0,re);J.rotation.z=Math.PI/2});let Me=o(.032,.014,at(13148224,{metalness:.2,roughness:.4,emissive:new Ue(13148224),emissiveIntensity:.15}),-.06,0,0,re);Me.rotation.z=Math.PI/2;for(let P of[-1,1]){let G=o(.004,.1,I.alu,P*.15,0,0,re);G.rotation.z=Math.PI/2}l(.16,.08,h(Yt(["DRAWER =","MY VALUE IN \u03A9"],{w:256,h:128,bg:"#fff6c8",fg:"#1b3f8f",font:`bold 30px ${Xe.sans}`})),0,.012,-.07,"-z",re).rotation.x=.6,re.position.set(3.05,.97,4.35),re.rotation.y=.15,i.add(re),d(re,"resistor","Resistor with a sticky note"),Be("rec1",1.55,.95,4.35,.2);let Re=pt(512,720,(P,G,J)=>{P.fillStyle="#fbfaf5",P.fillRect(0,0,G,J),P.fillStyle="#111",P.font=`bold 34px ${Xe.sans}`,P.textAlign="center",P.fillText("RESISTOR COLOUR CODE",G/2,44),P.font=`bold 20px ${Xe.sans}`,P.fillText("bands 1 + 2 = DIGITS  \xB7  band 3 = MULTIPLIER",G/2,76),P.font=`italic 18px ${Xe.sans}`,P.fillStyle="#b3261e",P.fillText("band 3 is NOT a digit \u2014 it adds zeros!",G/2,100),P.fillStyle="#555",P.font=`bold 17px ${Xe.sans}`,P.textAlign="left",P.fillText("colour",150,132),P.fillText("digit",262,132),P.fillText("multiplier",340,132),["black","brown","red","orange","yellow","green","blue","violet","grey","white"].forEach((Ye,ft)=>{let _t=142+ft*46;P.fillStyle=Ys[ft],P.fillRect(40,_t,90,36),P.strokeStyle="#999",P.strokeRect(40,_t,90,36),P.fillStyle="#111",P.font=`bold 24px ${Xe.sans}`,P.fillText(Ye,150,_t+26),P.fillText(String(ft),272,_t+26),P.fillText(ca[ft],340,_t+26)});let de=142+10*46;P.fillStyle="#c8a040",P.fillRect(40,de,90,36),P.strokeRect(40,de,90,36),P.fillStyle="#111",P.fillText("gold",150,de+26),P.fillText("\u2014",272,de+26),P.fillText("\xB15 % tol.",340,de+26),P.font=`18px ${Xe.sans}`,P.fillStyle="#1b3f8f",P.textAlign="center",P.fillText("e.g. brown \xB7 black \xB7 orange \xB7 gold",G/2,680),P.fillText("= 1, 0, \xD71 000  \u2192  10 \xD7 1 000 = 10 000 \u03A9",G/2,704),qt(P,G,J,.7,16)}),nt=new Qe;l(.64,.9,h(Re),4.6,1.85,4.985,"-z",nt),i.add(nt),d(nt,"colorcode","Colour-code poster"),r(2.4,.06,.9,I.dark,0,.76,-11.9);for(let P of[-1.1,1.1])r(.06,.76,.8,I.dark,P,.38,-11.9);s(-1.25,1.25,-12.4,-11.4),n.pcScreenTex=pt(512,320);let he=new Qe;r(1,.6,.05,I.dark,0,1.22,-12.15,he),l(.94,.54,new Ht({map:n.pcScreenTex}),0,1.22,-12.12,"+z",he),r(.08,.2,.08,I.dark,0,.88,-12.15,he),r(.6,.03,.2,at(1777444),0,.8,-11.7,he),r(.45,.45,.2,I.dark,.85,1.02,-12.1,he),i.add(he),d(he,"pc","Control PC");let Ie=new si(6160271,.55,3,2);Ie.position.set(0,1.22,-12),i.add(Ie),r(.5,.08,.5,at(1777444),0,.48,-11),r(.5,.6,.06,at(1777444),0,.82,-10.73),o(.04,.44,I.metal,0,.22,-11),s(-.28,.28,-11.28,-10.7),Be("rec4",.55,.81,-11.55,-.3);let ze=new Qe;r(.5,.02,.3,at(1927994,{roughness:.5}),0,0,0,ze);let je=Yt([{t:"FW-BOARD  A   B   C   D",font:`bold 30px ${Xe.mono}`}],{w:512,h:64,bg:"#1d6b3a",fg:"#e8f5e0"});l(.46,.06,h(je),0,.014,.1,"+y",ze),n.boardToggles=[];for(let P=0;P<4;P++){let G=-.02+P*.06;r(.035,.02,.04,at(2236962),G,.02,.03,ze);let J=r(.01,.04,.01,I.alu,G,.045,.03,ze);J.rotation.x=.5,n.boardToggles.push(J)}n.boardLed=a(.014,u(3342336,1),.2,.02,.05,ze),n.boardSegTex=pt(128,64,(P,G,J)=>Ih(P,G,J,"",!1)),r(.16,.07,.02,at(1118481),-.14,.04,-.1,ze),l(.14,.06,c(n.boardSegTex,1),-.14,.04,-.086,"+z",ze),ze.position.set(-.7,.8,-11.72),i.add(ze),d(ze,"board","FW-BOARD logic board"),n.circuitCanvas=document.createElement("canvas"),n.circuitCanvas.width=900,n.circuitCanvas.height=460,Yd(n.circuitCanvas.getContext("2d"),900,460,e.circuitDef);let Le=new ii(n.circuitCanvas);Le.colorSpace=zt;let rt=new Qe;l(1.3,.665,h(Le),1.9,1.9,-12.985,"+z",rt),i.add(rt),d(rt,"circuit","Circuit poster (FW-BOARD)"),r(.8,2,.9,at(1119256),3.9,1,-12.4),n.rackLeds=[];for(let P=0;P<12;P++)n.rackLeds.push(r(.03,.03,.01,u(P%3?2817898:16752672,1),3.65+P%2*.1,.3+P*.1,-11.94));let Ze=new Qe;r(.78,.2,.02,at(1777959),3.9,1.72,-11.945,Ze),n.diagLeds=[];for(let P=0;P<8;P++)n.diagLeds.push(r(.045,.045,.015,u(2228224,1),3.585+P*.09,1.7,-11.93,Ze));l(.78,.07,h(Yt([{t:"DIAG   \u25C0 MSB  \xB7  lit = 1",font:`bold 34px ${Xe.mono}`}],{w:512,h:48,bg:"#1b2127",fg:"#e6edf3"})),3.9,1.86,-11.93,"+z",Ze),i.add(Ze),d(Ze,"rack","Server rack \xB7 DIAG LEDs"),s(3.45,4.35,-12.9,-11.9),n.wallScreenTex=pt(768,400),l(3,1.56,new Ht({map:n.wallScreenTex}),-4.965,1.9,-9.2,"+x"),r(.04,1.66,3.1,I.dark,-5,1.9,-9.2),l(3.4,1.3,n.outside.material({origin:new U(-2.3,0,-13.16),right:new U(1,0,0),normal:new U(0,0,1)}),-2.3,2,-13.16,"+z");let ht=pt(512,512,ff);ht.wrapS=ht.wrapT=Kt,ht.repeat.set(3,1.2),n.rainTex=pt(512,512,pf),n.rainTex.wrapS=n.rainTex.wrapT=Kt,n.rainTex.repeat.set(3,1.2),n.dropMat=new Ht({map:ht,transparent:!0,depthWrite:!1,fog:!1}),n.rainMat=new Ht({map:n.rainTex,transparent:!0,depthWrite:!1,fog:!1}),g(l(3.4,1.3,n.dropMat,-2.3,2,-13.156,"+z")),g(l(3.4,1.3,n.rainMat,-2.3,2,-13.154,"+z"));let O=at(14278112,{roughness:.9});l(.2,1.3,O,-3.999,2,-13.1,"+x"),l(.2,1.3,O,-.601,2,-13.1,"-x"),l(3.4,.2,O,-2.3,2.649,-13.1,"+y").rotation.x=Math.PI/2,r(3.56,.035,.3,at(9276036,{roughness:.45}),-2.3,1.335,-13.02);for(let P of[-3.97,-.63,-2.3])r(.06,1.3,.07,I.alu,P,2,-13.16);for(let P of[1.38,2.62])r(3.4,.06,.07,I.alu,-2.3,P,-13.16);let xe=new U(-Math.sin(.37)*Math.cos(.18),Math.sin(.18),-Math.cos(.37)*Math.cos(.18)),Z=new U(-2.3,2,-13.15);n.windowLight=new Si(16756848,0,0,.24,.35,0),n.windowLight.position.copy(Z).addScaledVector(xe,10),n.windowLight.target.position.copy(Z).addScaledVector(xe,-10),n.windowLight.castShadow=!0,Object.assign(n.windowLight.shadow,{autoUpdate:!1,needsUpdate:!0,bias:-6e-4,normalBias:.02}),n.windowLight.shadow.mapSize.set(1024,1024),n.windowLight.shadow.camera.near=6,n.windowLight.shadow.camera.far=24,i.add(n.windowLight,n.windowLight.target),l(1.2,.26,h(Yt(["CONTROL ROOM \u25B8"],{w:592,h:128,bg:"#1b2530",fg:"#ffd24a",font:`bold 60px ${Xe.sans}`})),0,2.93,-4.99,"+z");let ie=new Qe;r(.35,1.9,1.3,at(9081756,{metalness:.4,roughness:.5}),4.82,1.05,-10.6,ie),n.syncTex=pt(512,512),l(.5,.5,c(n.syncTex,.9),4.64,1.45,-10.6,"-x",ie),n.syncLamps=[-10.95,-10.6,-10.25].map(P=>a(.045,u(5579264,.2),4.62,1.86,P,ie)),n.syncHandle=r(.06,.25,.08,I.red,4.6,.85,-10.6,ie),l(1,.25,h(Yt(["GRID TIE \xB7 Q0 \xB7 SYNC"],{w:512,h:128,bg:"#ffd200",fg:"#111",font:`bold 50px ${Xe.sans}`})),4.985,2.25,-10.6,"-x",ie),i.add(ie),d(ie,"sync","Grid tie panel (Q0)"),s(4.6,5.05,-11.3,-9.9);let Ce=pt(320,400,(P,G,J)=>{P.fillStyle="#f7f3e3",P.fillRect(0,0,G,J),P.fillStyle="#1b3f8f",P.font=`bold 22px ${Xe.sans}`,P.fillText("SYNC CHECKLIST",16,34),P.font=`17px ${Xe.sans}`,["0. permit card in","1. V island = V grid \xB12%","2. f island a hair ABOVE","3. phase ro\u2592\u2592\u2592n: lamps","    dark TOGETHER","4. close on scope at 12","\u2014 M.V."].forEach((de,Ye)=>P.fillText(de,16,76+Ye*44)),P.fillStyle="#e8e0c8",P.beginPath(),P.moveTo(G,J-60),P.lineTo(G-70,J),P.lineTo(G,J),P.fill(),qt(P,G,J,.9,17)}),we=new Qe;l(.26,.32,h(Ce),4.985,1.55,-11.7,"-x",we),i.add(we),d(we,"checklist","Sync checklist (pinned)");let et=pt(256,384,(P,G,J)=>{P.fillStyle="#7d8790",P.fillRect(0,0,G,J),P.strokeStyle="#5d666e",P.lineWidth=4,P.strokeRect(16,16,G-32,J-32),P.fillStyle="#1b2530",P.fillRect(70,50,116,90),P.fillStyle="#0c7a35",P.fillRect(16,250,G-32,38),P.fillStyle="#fff",P.font=`bold 22px ${Xe.sans}`,P.textAlign="center",P.fillText("EXIT \u25B8 OUTSIDE",G/2,276),qt(P,G,J,1.3,18)});return n.exitDoor=r(.08,2.4,1.62,[h(et,{metalness:.4}),h(et,{metalness:.4}),I.metal,I.metal,I.metal,I.metal],5.07,1.2,-8),d(n.exitDoor,"exit","Exit door"),n.exitCollider=s(4.95,5.25,-8.85,-7.15),n.exitLed=r(.04,.06,.5,u(16719904,1.5),4.98,2.52,-8),gf({scene:i,P:e,refs:n,M:I,col:s,box:r,cyl:o,sph:a,plane:l,texMat:h,glowMat:u,tag:d,noRay:g}),i.fog=new Bo(724499,.028),{colliders:t,refs:n}}var Vt=["L1","L2","L3"],Sf={standard:["#ff5a4a","#ffd23f","#4aa8ff"],colorblind:["#e69f00","#56b4e9","#cc79a7"]},Ai=[...Sf.standard];function Lh(i){Sf[i].forEach((e,t)=>{Ai[t]=e})}var De={TL:360,PV_DC:5.4,LAMP_KW:60,INV_EFF:.97,BAT_KWH:10,BAT_CH:2,BAT_DIS:3.5,BAT_EFF:.95,BAT_MIN:.25,ELZ_P:3,ELZ_KWH_KG:55,FC_P:3.4,FC_KWH_KG:18,FC_RAMP:3,FC_START:.3,H2_KG:.22,H2_BAR:30,AUX:.2,DOOR_P:3,DOOR_T:5},M_=De.TL/3600,S_=De.PV_DC*De.INV_EFF,mn=i=>i.toFixed(2),Sa=class{constructor(e){this.puzzle=e,this.s={t:0,sun:{unlocked:!1,on:!1,pin:""},inv:{pv:{on:!1,ph:-1},bat:{on:!1,ph:-1,mode:"idle"},fc:{on:!1,ph:-1}},bat:{soc:.08},elz:{on:!1,ph:-1},h2:{level:0,valve:!1,wheel:!1},fc:{running:!1,rt:0},trip:[!1,!1,!1],door:{state:"locked",t:0},stats:{trips:0}},this.version=0,this.events=[],this.f=this.compute()}emit(e,t="info",n){this.events.push({msg:e,kind:t,sfx:n}),this.version++}compute(){let e=this.s,t=[0,0,0],n=[0,0,0],s=[[],[],[]],r={cap:t,load:n,head:[0,0,0],live:[!1,!1,!1],pv:0,bat:0,fc:0,elz:0,door:0,pvAvail:0,fcAvail:0},o=c=>c>=0&&!e.trip[c];r.pvAvail=e.sun.on?S_*(.998+.002*Math.sin(e.t*.9)):0,r.fcAvail=e.fc.running&&e.fc.rt>=De.FC_RAMP?De.FC_P:0;let a=e.inv.pv,l=e.inv.bat,h=e.inv.fc;if(a.on&&o(a.ph)&&r.pvAvail>0&&s[a.ph].push(["pv",r.pvAvail]),e.grid)for(let c=0;c<3;c++)s[c].push(["grid",1e3]);l.on&&l.mode==="discharge"&&o(l.ph)&&e.bat.soc>De.BAT_MIN&&s[l.ph].push(["bat",De.BAT_DIS]),h.on&&o(h.ph)&&r.fcAvail>0&&s[h.ph].push(["fc",r.fcAvail]);for(let c=0;c<3;c++)t[c]=s[c].reduce((u,[,d])=>u+d,0),r.live[c]=t[c]>0;for(let c=0;c<3;c++)r.live[c]&&(n[c]+=De.AUX);if(e.elz.on&&o(e.elz.ph)&&r.live[e.elz.ph]&&e.h2.level<1&&(n[e.elz.ph]+=De.ELZ_P,r.elz=De.ELZ_P),l.on&&l.mode==="charge"&&o(l.ph)&&r.live[l.ph]&&e.bat.soc<1&&(n[l.ph]+=De.BAT_CH,r.bat=-De.BAT_CH),e.door.state==="opening"){for(let c=0;c<3;c++)n[c]+=De.DOOR_P;r.door=De.DOOR_P}for(let c=0;c<3;c++){let u=n[c];for(let[d,f]of s[c]){let g=Math.min(f,u);u-=g,d==="pv"?r.pv+=g:d==="bat"?r.bat+=g:d==="fc"&&(r.fc+=g)}r.head[c]=t[c]-n[c]}return r}tick(e){let t=this.s;t.t+=e,t.fc.running&&(t.fc.rt+=e);let n=this.compute(),s=(t.door.state==="opening"?1/3600:M_)*e;for(let r=0;r<3;r++)n.load[r]>n.cap[r]+1e-6&&(n.cap[r]>0||n.door)&&(t.trip[r]=!0,t.stats.trips++,this.emit(n.cap[r]>0?`\u26A0 ${Vt[r]}: demand ${mn(n.load[r])} kW > ${mn(n.cap[r])} kW available \u2014 inverter current limit, voltage collapse, under-voltage relay TRIPPED. Reset at the main bus panel.`:`\u26A0 ${Vt[r]} has no voltage \u2014 the door motor is single-phasing and hums. Drive stopped.`,"bad","clack"));if(t.trip.some(Boolean)&&(t.door.state==="opening"&&(t.door.state="locked",t.door.t=0,this.emit("Door drive stalled \u2014 the bolt re-engages.","bad")),n=this.compute()),n.bat<0&&(t.bat.soc=Math.min(1,t.bat.soc-n.bat*De.BAT_EFF*s/De.BAT_KWH)),n.bat>0&&(t.bat.soc=Math.max(0,t.bat.soc-n.bat/De.BAT_EFF*s/De.BAT_KWH),t.bat.soc<=De.BAT_MIN&&this.emit("Battery BMS: SOC reached 25 % \u2014 discharge blocked.","bad")),n.elz>0){let r=t.h2.level;t.h2.level=Math.min(1,t.h2.level+De.ELZ_P/De.ELZ_KWH_KG*s/De.H2_KG),r<De.FC_START&&t.h2.level>=De.FC_START&&this.emit("H\u2082 tank above 30 % \u2014 enough to start the fuel cell.","good"),t.h2.level>=1&&this.emit("H\u2082 tank full (30 bar) \u2014 electrolyzer idles.")}n.fc>0&&(t.h2.level=Math.max(0,t.h2.level-n.fc/De.FC_KWH_KG*s/De.H2_KG),t.h2.level<=0&&(t.fc.running=!1,t.fc.rt=0,this.emit("Fuel cell shut down: H\u2082 tank empty.","bad"))),t.fc.running&&!t.h2.valve&&(t.fc.running=!1,t.fc.rt=0,this.emit("Fuel cell shut down: H\u2082 valve closed.","bad")),t.door.state==="opening"&&(t.door.t+=e,t.door.t>=De.DOOR_T&&(t.door.state="open",this.emit("\u{1F513} Door open!","good","thunk"))),this.f=n}doorReady(){return this.f.head.every(e=>e>=De.DOOR_P-1e-6)}hintTopic(){let e=this.s,t=this.f,n=this.puzzle,s=e.inv.pv.ph>=0?Vt[e.inv.pv.ph]:"the PV phase";if(e.trip.some(Boolean))return{id:"trip",tiers:["Something clicked off. The main bus panel will tell you what.","A phase tripped because its demand exceeded what the inverters on that phase can deliver.","Remove load from the tripped phase (or add a source), then press RESET at the main bus panel on the right wall."]};if(!e.sun.unlocked)return{id:"pin",tiers:["The test rig on the left wall is dark. Something must control those lamps.","The sun-simulator keypad wants a 4-digit year. Marco's notes mention when the lab opened \u2014 look for something engraved.",`PIN ${n.year} \u2014 it is on the brass plaque above the workbench.`]};if(!e.sun.on)return{id:"sun",tiers:["The keypad is unlocked now.","Switch the lamp array on.","Keypad \u2192 Lamp array ON."]};if(t.pvAvail>0&&!(e.inv.pv.on&&e.inv.pv.ph>=0))return{id:"inv1",tiers:["Light on the modules makes DC. The lab bus is AC.","Something has to convert the PV power \u2014 look at the inverters on the right wall.","INV-1: power ON, output phase L1."]};let r=e.bat.soc<.35,o=e.h2.level<.45,a=e.inv.bat.on&&e.inv.bat.mode==="charge"&&e.inv.bat.ph===e.inv.pv.ph,l=e.elz.on&&e.elz.ph===e.inv.pv.ph;return r&&!a||o&&!l?{id:"store",tiers:["The door motor needs all three phases. One PV inverter can only energize one of them \u2014 and the other two sources are empty.","Loads only run from a source on the SAME phase. Use PV power to fill the battery and the H\u2082 tank.",`INV-2: ON, CHARGE, phase ${s}. Electrolyzer: ON, phase ${s}. 2 + 3 + 0.2 kW aux = 5.2 kW \u2264 5.24 kW PV. Fill the battery to \u2265 35 % and the tank to \u2265 45 % \u2014 a margin above the 25 % / 30 % limits.`]}:r||o?{id:"wait",tiers:["Storage takes time \u2014 even at \xD7360 time-lapse.",`Battery ${(e.bat.soc*100).toFixed(0)} % (aim \u2265 35 %), H\u2082 ${(e.h2.level*100).toFixed(0)} % (aim \u2265 45 %). The 5 s motor start itself is cheap, but idle phases keep draining their storage through the 0.2 kW aux load at \xD7360.`,"Meanwhile, solve the valve problem: the H\u2082 tank has no handwheel."]}:e.h2.wheel?!e.fc.running||!(e.inv.fc.on&&e.inv.fc.ph>=0)?{id:"fc",tiers:["Hydrogen in a tank does not make electricity by itself.","Open the H\u2082 valve, start the fuel cell stack, and give its inverter (INV-3) a phase.","H\u2082 tank: valve OPEN. Fuel cell: START. INV-3: ON, a phase not used by PV."]}:this.doorReady()?{id:"open",tiers:["All three phases have enough headroom.","The door controller next to the door has an OPEN button.","Door controller \u2192 OPEN, and keep the sources running for 5 s."]}:{id:"split",tiers:["Three sources, three phases. The door motor draws 3 kW on EVERY phase at once.",'Give each source its own phase and switch the loads off. Check "headroom" on the bus panel or the door controller.',"Electrolyzer OFF, INV-2 \u2192 DISCHARGE. PV on L1, battery on L2, fuel cell on L3. Every phase then has \u2265 3 kW headroom."]}:{id:"wheel",tiers:["The fuel cell needs hydrogen from the tank \u2014 but can you actually open the valve?",'The handwheel was removed ("M.V."). The workbench drawer has a 4-digit lock: the sticky note on the bench resistor says the code is its value in \u03A9, and the colour-code poster on the back wall decodes the bands.',(()=>{let h=["black","brown","red","orange","yellow","green","blue","violet","grey","white"],[c,u,d]=n.bands;return`The resistor on the bench: ${h[c]} (${c}), ${h[u]} (${u}), ${h[d]} = multiplier \xD7${10**d} \u2192 ${c}${u} \xD7 ${10**d} = ${n.drawerCode} \u03A9. Drawer code ${n.drawerCode}. Then use the handwheel on the tank.`})()]}}objective(){let e=this.s;return e.door.state==="open"?null:e.door.state==="opening"?`Door drive running\u2026 ${(De.DOOR_T-e.door.t).toFixed(1)} s`:"Get out of the booth. The door is driven by a <b>3-phase motor</b> \u2014 and the lab is dark."}panel(e){let t=this.s,n=this.f,s=(c,u)=>`<div class="seg"><button class="btn ${u?"on":""}" data-act="${c}:1">ON</button><button class="btn ${u?"":"danger"}" data-act="${c}:0">OFF</button></div>`,r=(c,u)=>`<div class="seg">${Vt.map((d,f)=>`<button class="btn ${u===f?"on":""}" data-act="${c}:${f}" style="${u===f?"":`border-color:${Ai[f]}88`}">${d}</button>`).join("")}</div>`,o=(c,u=!1)=>`<div class="lcd ${u?"red":""}">${c}</div>`,a='<p class="note">\u23E9 Lab time-lapse \xD7360 \u2014 10 s \u2248 1 h.</p>',l={};l.sunsim={title:"Sun Simulator \xB7 Control Keypad",controls:()=>t.sun.unlocked?`<div class="ctl"><label>Lamp array</label>${s("sun",t.sun.on)}</div>
           <p class="note">Xenon arc lamps giving 3 suns (3000 W/m\xB2) on the test rig. Lamp input \u2248 ${De.LAMP_KW} kW from the building's emergency generator ("temporarily" \u2014 M.V.). Lamp \u2192 light \u2192 PV \u2192 AC is only \u2248 9 % efficient; the water-cooled rig has to shed the other \u2248 12 kW as heat.</p>`:`<p class="note">SYSTEM LOCKED \u2014 enter 4-digit PIN.<span class="kbd-hint"> (Number keys work too.)</span></p>
           <div class="keypad">${[1,2,3,4,5,6,7,8,9].map(c=>`<button class="btn" data-act="pin:${c}">${c}</button>`).join("")}
           <button class="btn warn" data-act="pin:C">C</button><button class="btn" data-act="pin:0">0</button><button class="btn on" data-act="pin:OK">OK</button></div>`,live:()=>t.sun.unlocked?o(`LAMPS ${t.sun.on?"ON ":"OFF"}   IRRADIANCE ${t.sun.on?"3000":"   0"} W/m\xB2
LAMP INPUT ${t.sun.on?De.LAMP_KW:0} kW (emergency generator)`):o(`PIN: ${(t.sun.pin+"____").slice(0,4).split("").join(" ")}`,!0)},l.pv={title:"PV Test Rig \xB7 III-V modules",controls:()=>`<div class="kv"><span>Modules</span><span>3 \xD7 2 m\xB2 III-V multi-junction modules (\u03B7 \u2248 30 %)</span>
        <span>Output at 3 suns</span><span>${De.PV_DC} kW DC</span><span>Connected to</span><span>INV-1 (hybrid inverter)</span></div>
        <p class="note">6 m\xB2 \xD7 3000 W/m\xB2 \xD7 0.30 = 5.4 kW. The modules make DC; only an inverter can put it on the 230 V AC bus.</p>`,live:()=>o(`IRRADIANCE  ${t.sun.on?"3000":"0"} W/m\xB2
DC POWER    ${mn(n.pvAvail/De.INV_EFF)} kW available
AC FEED-IN  ${mn(n.pv)} kW (as much as the phase consumes)`)};let h=(c,u,d,f,g="")=>{let v="OFF";return f.on&&(f.ph<0?v="NO PHASE SELECTED":t.trip[f.ph]?v=`FAULT: ${Vt[f.ph]} UNDER-VOLTAGE TRIP`:v=u>0?`FORMING ${Vt[f.ph]} \xB7 230 V 50 Hz`:"STANDBY (no DC source)"),o(`${c}
STATUS     ${v}
AVAILABLE  ${mn(u)} kW
DELIVERING ${mn(d)} kW${g}`,f.on&&f.ph>=0&&t.trip[f.ph])};return l.inv_pv={title:"INV-1 \xB7 Hybrid PV Inverter (6 kVA, \u03B7 97 %)",controls:()=>`<div class="ctl"><label>Power</label>${s("invpv",t.inv.pv.on)}</div>
        <div class="ctl"><label>Output phase</label>${r("invpvph",t.inv.pv.ph)}</div>
        <p class="note">Backup (EPS) mode: grid-forming on one phase. It throttles PV down to exactly what that phase consumes. As cluster master it sets the clock the other two inverters follow, 120\xB0 apart.</p>`,live:()=>h("INV-1 PV",t.inv.pv.on?n.pvAvail:0,n.pv,t.inv.pv)},l.inv_bat={title:"INV-2 \xB7 Battery Inverter (bidirectional)",controls:()=>`<div class="ctl"><label>Power</label>${s("invbat",t.inv.bat.on)}</div>
        <div class="ctl"><label>Mode</label><div class="seg">${["idle","charge","discharge"].map(c=>`<button class="btn ${t.inv.bat.mode===c?"on":""}" data-act="batmode:${c}">${c.toUpperCase()}</button>`).join("")}</div></div>
        <div class="ctl"><label>AC phase</label>${r("invbatph",t.inv.bat.ph)}</div>
        <p class="note">CHARGE draws ${De.BAT_CH} kW from its phase \u2014 something else must be feeding that phase.<br>DISCHARGE forms the phase and supplies up to ${De.BAT_DIS} kW while SOC &gt; 25 %.</p>${a}`,live:()=>h("INV-2 BATTERY",t.inv.bat.on&&t.inv.bat.mode==="discharge"&&t.bat.soc>De.BAT_MIN?De.BAT_DIS:0,n.bat,t.inv.bat,`
SOC        ${(t.bat.soc*100).toFixed(1)} %`+(t.inv.bat.on&&t.inv.bat.mode==="discharge"&&t.bat.soc<=De.BAT_MIN?`
BMS        DISCHARGE BLOCKED (SOC < 25 %)`:""))},l.inv_fc={title:"INV-3 \xB7 Fuel Cell Inverter",controls:()=>`<div class="ctl"><label>Power</label>${s("invfc",t.inv.fc.on)}</div>
        <div class="ctl"><label>Output phase</label>${r("invfcph",t.inv.fc.ph)}</div>
        <p class="note">Converts the fuel cell's DC stack voltage to AC. The stack itself must be running.</p>`,live:()=>h("INV-3 FUEL CELL",t.inv.fc.on?n.fcAvail:0,n.fc,t.inv.fc)},l.battery={title:"Battery Storage \xB7 Li-ion (LFP) 10 kWh",controls:()=>`<div class="kv"><span>Capacity</span><span>10 kWh, 95 % one-way efficiency</span><span>BMS discharge limit</span><span>SOC \u2265 25 %</span>
        <span>Controlled by</span><span>INV-2 (right wall)</span></div>${a}`,live:()=>{let c=t.bat.soc*100,u=c<25?"#ff5a4a":c<50?"#ffc44a":"#3ecf7a";return`<div style="font:28px Consolas,monospace;margin:4px 0">${c.toFixed(1)} % <span style="font-size:15px;color:#8ea3b8">= ${(t.bat.soc*De.BAT_KWH).toFixed(2)} kWh</span></div><div class="bar" style="height:16px"><i style="width:${c}%;background:${u}"></i><span class="mark" style="left:25%"></span><span class="mark" style="left:50%;opacity:.35"></span></div>`+o(`STATE  ${n.bat>0?"DISCHARGING":n.bat<0?"CHARGING":"IDLE"}
POWER  ${mn(n.bat)} kW (AC)`)}},l.electrolyzer={title:"PEM Electrolyzer \xB7 3 kW",controls:()=>`<div class="ctl"><label>Power</label>${s("elz",t.elz.on)}</div>
        <div class="ctl"><label>Supply phase</label>${r("elzph",t.elz.ph)}</div>
        <p class="note">Splits water into H\u2082 and O\u2082: 55 kWh per kg of H\u2082, delivered at 30 bar straight into the tank (no compressor).</p>${a}`,live:()=>{let c="OFF";return t.elz.on&&(t.elz.ph<0?c="NO SUPPLY PHASE":t.trip[t.elz.ph]?c=`NO VOLTAGE (${Vt[t.elz.ph]} TRIPPED)`:n.live[t.elz.ph]?t.h2.level>=1?c="TANK FULL":c=`PRODUCING ${(De.ELZ_P/De.ELZ_KWH_KG*1e3).toFixed(0)} g/h`:c=`NO VOLTAGE ON ${Vt[t.elz.ph]}`),o(`STATUS   ${c}
POWER    ${mn(n.elz)} kW
H\u2082 TANK  ${(t.h2.level*De.H2_KG*1e3).toFixed(0)} g \xB7 ${(t.h2.level*De.H2_BAR).toFixed(1)} bar`,c.startsWith("NO"))}},l.h2tank={title:"H\u2082 Buffer Tank \xB7 30 bar, 90 L",controls:()=>(t.h2.wheel?`<div class="ctl"><label>Manual valve</label><div class="seg"><button class="btn ${t.h2.valve?"on":""}" data-act="valve:1">OPEN</button><button class="btn ${t.h2.valve?"":"danger"}" data-act="valve:0">CLOSE</button></div></div>`:`<div class="lcd red">The valve spindle is bare \u2014 the handwheel has been removed.
Tag: "HANDWHEEL REMOVED AFTER THE INTERN INCIDENT \u2014 M.V."</div>
           <div class="ctl"><button class="btn" data-act="usewheel:1">Use handwheel from inventory</button></div>`)+`<p class="note">Holds up to ${De.H2_KG*1e3} g of H\u2082 (\u2248 7.3 kWh chemical energy, but a fuel cell turns only ~\u2153 of the electricity back into electricity).</p>`,live:()=>`<div style="font:28px Consolas,monospace;margin:4px 0">${(t.h2.level*De.H2_KG*1e3).toFixed(0)} g <span style="font-size:15px;color:#8ea3b8">${(t.h2.level*De.H2_BAR).toFixed(1)} bar \xB7 ${(t.h2.level*100).toFixed(0)} %</span></div><div class="bar" style="height:16px"><i style="width:${t.h2.level*100}%;background:#7fd4ff"></i><span class="mark" style="left:30%"></span><span class="mark" style="left:60%;opacity:.35"></span></div>`+o(`VALVE  ${t.h2.wheel?t.h2.valve?"OPEN":"CLOSED":"NO HANDWHEEL"}`,!t.h2.wheel)},l.fuelcell={title:"PEM Fuel Cell \xB7 3.4 kW",controls:()=>`<div class="ctl"><label>Stack</label><div class="seg"><button class="btn ${t.fc.running?"on":""}" data-act="fc:1">START</button><button class="btn ${t.fc.running?"":"danger"}" data-act="fc:0">STOP</button></div></div>
        <p class="note">Start conditions: H\u2082 valve open, tank \u2265 30 %. Warm-up ramp ${De.FC_RAMP} s. 18 kWh of electricity per kg H\u2082. Output goes through INV-3.</p>${a}`,live:()=>o(`STACK      ${t.fc.running?n.fcAvail===0?`WARMING UP ${Math.max(0,De.FC_RAMP-t.fc.rt).toFixed(1)} s`:"RUNNING":"STOPPED"}
AVAILABLE  ${mn(n.fcAvail)} kW
DELIVERING ${mn(n.fc)} kW (via INV-3)
H\u2082         ${(t.h2.level*De.H2_KG*1e3).toFixed(0)} g \xB7 valve ${t.h2.valve?"OPEN":"CLOSED"}`)},l.bus={title:"Main Bus \xB7 3~ 230/400 V island",controls:()=>`<div class="ctl"><label>Under-voltage relays</label><div class="seg">${Vt.map((c,u)=>`<button class="btn ${t.trip[u]?"danger":"on"}" data-act="reset:${u}">${c} ${t.trip[u]?"RESET":"OK"}</button>`).join("")}</div></div>
        <p class="note">Each phase is formed by its own single-phase inverter \u2014 power cannot hop from one phase to another.
        <b>Headroom</b> = what the sources on a phase could still deliver. Negative headroom \u2192 current limit \u2192 voltage collapse \u2192 trip.</p>`,live:()=>{let c=f=>{let g=[];return t.inv.pv.ph===f&&t.inv.pv.on&&g.push("PV"),t.inv.bat.ph===f&&t.inv.bat.on&&g.push(`BAT(${t.inv.bat.mode})`),t.inv.fc.ph===f&&t.inv.fc.on&&g.push("FC"),t.elz.ph===f&&t.elz.on&&g.push("ELZ"),g.join(", ")||"\u2014"},u=n.load.reduce((f,g)=>f+g,0),d=Math.sqrt(n.load.reduce((f,g)=>f+g*g,0)-n.load[0]*n.load[1]-n.load[1]*n.load[2]-n.load[0]*n.load[2])*1e3/230;return`<table class="phase-table"><tr><th>Phase</th><th>Avail kW</th><th>Load kW</th><th>Headroom</th><th>Devices</th></tr>${Vt.map((f,g)=>`<tr><td style="color:${Ai[g]}">${f}${t.trip[g]?' <span class="bad">TRIP</span>':n.live[g]?"":' <span style="color:#667">dead</span>'}</td><td>${mn(n.cap[g])}</td><td>${mn(n.load[g])}</td><td class="${n.head[g]>=De.DOOR_P?"ok":""}">${mn(n.head[g])}${n.head[g]>=De.DOOR_P?" \u2714":""}</td><td>${c(g)}</td></tr>`).join("")}</table>
          <div class="note">Total load ${mn(u)} kW \xB7 neutral current ${d.toFixed(1)} A ${d<1?"(balanced)":"(unbalanced)"}</div>`}},l.door={title:"Door Drive Controller",controls:()=>t.door.state==="open"?"":`<p class="note">Sliding door, fail-secure. Drive: 3-phase induction motor \u2014 starting current loads <b>\u2248 ${De.DOOR_P} kVA on EACH phase</b> for ${De.DOOR_T} s (inrush at a low power factor \u2014 the inverters' current limit is what counts) (real time \u2014 the \xD7360 time-lapse pauses while the motor starts). A missing phase makes the motor hum and stall ("single-phasing").</p>
        <div class="ctl"><button class="btn big" data-act="door:open" style="margin:0" ${t.door.state==="opening"?"disabled":""}>OPEN DOOR</button></div>`,live:()=>t.door.state==="open"?o("STATUS  OPEN \u2714"):o(Vt.map((c,u)=>`${c}  headroom ${mn(n.head[u]).padStart(5)} kW  ${n.head[u]>=De.DOOR_P-1e-6?"\u2714 ready":"\u2718"}`).join(`
`)+(t.door.state==="opening"?`

DRIVE RUNNING  ${t.door.t.toFixed(1)} / ${De.DOOR_T}.0 s`:`

STATUS  ${this.doorReady()?"READY":"LOCKED"}`),!this.doorReady()&&t.door.state!=="opening")},l[e]}action(e){let[t,n]=e.split(":"),s=this.s,r=Number(n),o=null;switch(t){case"pin":if(s.sun.unlocked)break;n==="C"?s.sun.pin=s.sun.pin.slice(0,-1):n==="OK"?s.sun.pin===String(this.puzzle.year)?(s.sun.unlocked=!0,o=["Sun simulator unlocked.","good"]):(s.sun.pin="",o=["Wrong PIN.","bad"]):s.sun.pin.length<4&&(s.sun.pin+=n);break;case"sun":s.sun.on=!!r;break;case"invpv":s.inv.pv.on=!!r;break;case"invpvph":s.inv.pv.ph=r;break;case"invbat":s.inv.bat.on=!!r;break;case"invbatph":s.inv.bat.ph=r;break;case"batmode":s.inv.bat.mode=n;break;case"invfc":s.inv.fc.on=!!r;break;case"invfcph":s.inv.fc.ph=r;break;case"elz":s.elz.on=!!r;break;case"elzph":s.elz.ph=r;break;case"wheel":s.h2.wheel=!0,o=["Handwheel attached to the H\u2082 valve.","good"];break;case"valve":s.h2.wheel&&(s.h2.valve=!!r);break;case"fc":r?s.h2.valve?s.h2.level<De.FC_START?o=["Fuel cell: start failed \u2014 H\u2082 tank below 30 %.","bad"]:s.fc.running||(s.fc.running=!0,s.fc.rt=0,o=["Fuel cell stack started \u2014 warming up.","good"]):o=["Fuel cell: start failed \u2014 H\u2082 valve is closed.","bad"]:(s.fc.running=!1,s.fc.rt=0);break;case"reset":if(s.trip[r]){s.trip[r]=!1;let a=this.compute();a.load[r]>a.cap[r]+1e-6&&a.cap[r]>0?(s.trip[r]=!0,o=[`${Vt[r]} trips again \u2014 reduce the load first!`,"bad"]):o=[`${Vt[r]} relay reset.`,"good"]}break;case"door":{if(s.door.state!=="locked")break;let a=this.compute(),l=Vt.filter((h,c)=>!a.live[c]);if(l.length){o=[`Motor hums and won't turn \u2014 single-phasing (${l.join(", ")} ${l.length>1?"have":"has"} no voltage).`,"bad"];break}s.door.state="opening",s.door.t=0,o=["Door drive starting\u2026","info"];break}}this.version++,o&&this.events.push({msg:o[0],kind:o[1]}),this.f=this.compute()}};var Fn=["guest","mvolta","root"],Js=["mvolta","root"],Tf=(i,e)=>i.replace(/[a-z]/gi,t=>{let n=t<="Z"?65:97;return String.fromCharCode(((t.charCodeAt(0)-n+e)%26+26)%26+n)});function T_(i){return{"/":{dir:!0,r:Fn},"/home":{dir:!0,r:Fn},"/home/guest":{dir:!0,r:Fn},"/home/guest/readme.txt":{r:Fn,c:`Welcome to labctl-01, guest.

Grid reconnection (gridctl) requires ROOT privileges.

Our admin Marco Volta (user: mvolta) keeps "forgetting" the root password,
so he split it into three fragments and hid them. Classic Marco.

PS: Marco uses this guest account way too often.
    Real hackers also look at hidden files (ls -a).`},"/home/guest/.bash_history":{r:Fn,c:`ls
cd pics
cat IMG_0413.jpg
cd ..
su mvolta
su mvolta
# argh. why did I make my password my cat's name BACKWARDS and lowercase
exit`},"/home/guest/pics":{dir:!0,r:Fn},"/home/guest/pics/IMG_0413.jpg":{r:Fn,c:`\xFF\xD8\xFF\xE0 JFIF  \xFF\xDB C \u2591\u2592\u2593\u2588\u2593\u2592\u2591 \xA4\xA4\xA4 binary data \xA4\xA4\xA4 \u2592\u2593\u2588\u2593\u2592\u2591 \xFF\xC4
--- EXIF ---
Camera   : LabCam 3000
Author   : mvolta
Title    : "Napping on his favourite inverter again. Best cat. (Name's on the collar.)"
Date     : 2026:04:01 12:00:00`},"/home/guest/pics/inverter_bench.jpg":{r:Fn,c:`\xFF\xD8\xFF\xE0 JFIF \u2592\u2593\u2588 binary data \u2588\u2593\u2592
--- EXIF ---
Author   : mvolta
Title    : "Three phases, 120\xB0 apart, rotating clockwise. Beautiful."`},"/home/mvolta":{dir:!0,r:Js},"/home/mvolta/notes.txt":{r:Js,c:`ROOT PASSWORD = FRAGMENT1 + FRAGMENT2 + FRAGMENT3   (no spaces)

F1 -> ~/fragment1.enc   Caesar cipher.
      Shift = number of lamps above our PV test rig.
      (decode <file> <shift>)
F2 -> run "scada diag" and look at the DIAG LED row on the server rack.
      Lit = 1, MSB on the left. I want it in decimal.
F3 -> the logic board on my desk shows it when its output is 1.
      (Wrong guesses set off the alarm. Sorry.)`},"/home/mvolta/todo.txt":{r:Js,c:`[ ] buy cat food
[x] lock away the H2 valve handwheel (intern!!)
[ ] fix sun simulator lamp driver
[ ] stop writing passwords in text files
[ ] answer the grid operator about the reconnection procedure (see mail)`},"/home/mvolta/fragment1.enc":{r:Js,c:Tf(`The first fragment is: ${i.f1}`,i.lamps)},"/opt":{dir:!0,r:Fn},"/opt/scada":{dir:!0,r:Js},"/opt/scada/scada.log":{r:Js,c:`18:02:11 GRID  L1 ${i.gridV}.0V  L2 ${i.gridV-1}.8V  L3 ${i.gridV}.2V  f=${i.gridF.toFixed(2)}Hz  rot L1-L2-L3
18:02:11 INFO phase angles L1 0\xB0  L2 -120\xB0  L3 -240\xB0
18:31:47 WARN storm front, wind gusts 110 km/h
18:36:02 ALRM GRID LOST \u2014 tie breaker Q0 opened by under-voltage protection
18:36:02 INFO building on emergency supply (life safety only)
18:36:05 INFO booth door drive: no supply \u2192 fail-secure LOCKED
18:37:40 INFO cluster INV-1..3 standby \u2014 manual start required`},"/etc":{dir:!0,r:Fn},"/etc/passwd":{r:Fn,c:`root:x:0:0:root:/root:/bin/bash
mvolta:x:1000:1000:Marco Volta,,,:/home/mvolta:/bin/bash
guest:x:1001:1001:Guest:/home/guest:/bin/bash`},"/etc/motd":{r:Fn,c:"labctl-01 \xB7 Solar Test Laboratory \xB7 authorized use only \xB7 running on UPS"},"/root":{dir:!0,r:["root"]},"/root/README":{r:["root"],c:`You made it, root.

1. gridctl  \u2014 validate a day-ahead dispatch schedule. The grid operator issues
              the reconnection permit when it is good enough.
2. Then synchronise the lab with the grid at the tie panel (Q0) next to the exit.`}}}var Ta=class{constructor(e,t={}){this.P=e,this.hooks=t,this.fs=T_(e),this.users={guest:null,mvolta:e.userPw,root:e.rootPw.toLowerCase()},this.el=document.getElementById("terminal"),this.out=document.getElementById("termOut"),this.inp=document.getElementById("termIn"),this.promptEl=document.getElementById("termPrompt"),this.stack=[{user:"guest",cwd:"/home/guest"}],this.hist=[],this.hi=0,this.pw=null,this.booted=!1,this.pending=null,this.decodeLock=0,this.progress={mv:!1,f1:!1,diag:!1,root:!1,mail:!1},this.inp.addEventListener("keydown",n=>this.key(n)),this.el.addEventListener("mousedown",n=>{n.target!==this.inp&&!n.target.closest("button")&&setTimeout(()=>this.inp.focus(),0)}),this.el.querySelectorAll("[data-cmd]").forEach(n=>n.addEventListener("click",()=>{this.inp.value=n.dataset.cmd+(n.dataset.cmd.endsWith(" "),""),n.dataset.cmd.endsWith(" ")?this.inp.focus():this.submit()}))}serialize(){return{stack:this.stack,progress:this.progress,hist:this.hist.slice(-50)}}restore(e){e&&(this.stack=e.stack,this.progress=e.progress,this.hist=e.hist||[],this.hi=this.hist.length)}get cur(){return this.stack[this.stack.length-1]}open(){this.el.classList.remove("hidden"),this.booted||(this.booted=!0,this.print("labctl-01 login: guest (auto-login)","dim"),this.print(this.fs["/etc/motd"].c,"hi"),this.cur.user!=="guest"&&this.print(`session restored: ${this.cur.user}`,"dim"),this.print(`Type "help" for commands. Stuck? Press the \u{1F4A1} button (or F1).
`,"dim")),this.updPrompt(),setTimeout(()=>this.inp.focus(),30)}close(){this.el.classList.add("hidden"),this.inp.blur(),this.pending&&(clearTimeout(this.pending),this.pending=null)}isOpen(){return!this.el.classList.contains("hidden")}print(e,t=""){let n=document.createElement("div");for(t&&(n.className=t),n.textContent=e,this.out.appendChild(n);this.out.childElementCount>400;)this.out.firstChild.remove();this.out.scrollTop=this.out.scrollHeight}updPrompt(){if(this.pw){this.promptEl.textContent="Password: ",this.inp.type="password";return}this.inp.type="text";let{user:e,cwd:t}=this.cur,n=e==="root"?"/root":`/home/${e}`,s=t===n?"~":t.startsWith(n+"/")?"~"+t.slice(n.length):t;this.promptEl.textContent=`${e}@labctl-01:${s}${e==="root"?"#":"$"} `}submit(){let e=this.inp.value;this.inp.value="",this.pw?(this.print("Password: ","dim"),this.checkPw(e)):(this.print(this.promptEl.textContent+e),e.trim()&&(this.hist.push(e),this.hi=this.hist.length),this.run(e.trim())),this.updPrompt()}key(e){if(e.stopPropagation(),e.key==="Escape"){e.preventDefault(),this.hooks.onEscape?.();return}if(e.key==="F1"){e.preventDefault(),this.hooks.onHint?.();return}(e.key.length===1||e.key==="Backspace")&&this.hooks.onKey?.(),e.key==="Enter"?(e.preventDefault(),this.submit()):e.key==="ArrowUp"&&!this.pw?(e.preventDefault(),this.hi>0&&(this.hi--,this.inp.value=this.hist[this.hi])):e.key==="ArrowDown"&&!this.pw?(e.preventDefault(),this.hi<this.hist.length&&(this.hi++,this.inp.value=this.hist[this.hi]??"")):e.key==="Tab"?(e.preventDefault(),this.complete()):e.key==="l"&&e.ctrlKey&&(e.preventDefault(),this.out.innerHTML="")}resolve(e){let{user:t,cwd:n}=this.cur;if(!e)return n;(e==="~"||e.startsWith("~/"))&&(e=(t==="root"?"/root":`/home/${t}`)+e.slice(1));let s=(e.startsWith("/")?e:n+"/"+e).split("/"),r=[];for(let o of s)!o||o==="."||(o===".."?r.pop():r.push(o));return"/"+r.join("/")}node(e){return Object.hasOwn(this.fs,e)?this.fs[e]:null}canRead(e){let t=e.split("/").filter(Boolean),n="";for(let s=0;s<=t.length;s++){let r=s===0?"/":n+="/"+t[s-1],o=this.node(r);if(o&&!o.r.includes(this.cur.user))return!1}return!0}children(e){let t=e==="/"?"/":e+"/";return Object.keys(this.fs).filter(n=>n!==e&&n.startsWith(t)&&!n.slice(t.length).includes("/")).map(n=>n.slice(t.length))}readFile(e){let t=this.resolve(e),n=this.node(t);return n?this.canRead(t)?n.dir?{err:`${e}: Is a directory`}:{c:n.c,p:t}:{err:`${e}: Permission denied`}:{err:`${e}: No such file or directory`}}complete(){let t=this.inp.value.split(" "),n=t[t.length-1],s;if(t.length===1)s=Object.keys(this.cmds()).filter(r=>r.startsWith(n));else{let r=n.lastIndexOf("/"),o=r>=0?n.slice(0,r+1):"",a=this.resolve(o||".");if(!this.node(a)?.dir||!this.canRead(a))return;s=this.children(a).filter(l=>l.startsWith(n.slice(r+1))).map(l=>o+l+(this.node(this.resolve(o+l))?.dir?"/":""))}s.length===1?(t[t.length-1]=s[0]+(s[0].endsWith("/")?"":" "),this.inp.value=t.join(" ")):s.length>1&&this.print(s.join("  "),"dim")}cmds(){let e=this.hooks.getState?.()||{};return{help:()=>this.print(`Commands:
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
  clear \xB7 history \xB7 hint`),ls:t=>{let n=t.some(h=>/^-\w*a/.test(h)),s=t.find(h=>!h.startsWith("-")),r=this.resolve(s),o=this.node(r);if(!o)return this.print(`ls: cannot access '${s}': No such file or directory`,"err");if(!this.canRead(r))return this.print(`ls: cannot open directory '${s}': Permission denied`,"err");if(!o.dir)return this.print(s);let l=this.children(r).filter(h=>n||!h.startsWith(".")).sort().map(h=>this.node((r==="/"?"":r)+"/"+h).dir?h+"/":h);this.print((n?["./","../",...l]:l).join("   ")||"")},cd:t=>{let n=this.resolve(t[0]||"~"),s=this.node(n);if(!s)return this.print(`cd: ${t[0]}: No such file or directory`,"err");if(!s.dir)return this.print(`cd: ${t[0]}: Not a directory`,"err");if(!this.canRead(n))return this.print(`cd: ${t[0]}: Permission denied`,"err");this.cur.cwd=n},cat:t=>{if(!t.length)return this.print("cat: missing file operand","err");for(let n of t){let s=this.readFile(n);s.err?this.print("cat: "+s.err,"err"):this.print(s.c)}},pwd:()=>this.print(this.cur.cwd),whoami:()=>this.print(this.cur.user),id:()=>this.print(`uid=${{root:0,mvolta:1e3,guest:1001}[this.cur.user]}(${this.cur.user}) groups=${this.cur.user}${this.cur.user!=="guest"?",scada":""}`),clear:()=>{this.out.innerHTML=""},history:()=>this.print(this.hist.map((t,n)=>`${String(n+1).padStart(4)}  ${t}`).join(`
`)),su:t=>{let n=t[0]||"root";if(!Object.hasOwn(this.users,n))return this.print(`su: user ${n} does not exist`,"err");if(n!==this.cur.user){if(this.users[n]===null){this.stack.push({user:n,cwd:`/home/${n}`});return}this.pw={user:n}}},exit:()=>{this.stack.length>1?(this.stack.pop(),this.print("logout","dim")):this.hooks.onEscape?.()},logout:()=>this.cmds().exit(),decode:t=>{if(t.length<2)return this.print("usage: decode <file> <shift>","err");let n=this.readFile(t[0]);if(n.err)return this.print("decode: "+n.err,"err");let s=parseInt(t[1],10);if(Number.isNaN(s))return this.print("decode: shift must be a number","err");let r=Math.ceil((this.decodeLock-Date.now())/1e3);if(r>0)return this.print(`decode: key schedule cooling down \u2014 retry in ${r} s`,"err");let o=Tf(n.c,-s),a=o.includes("fragment");this.print(o,a?"hi":""),a?this.progress.f1=!0:this.decodeLock=Date.now()+5e3},scada:t=>{if(this.cur.user==="guest")return this.print("scada: permission denied (requires group scada)","err");t[0]==="diag"?(this.progress.diag=!0,this.hooks.onDiag?.(!0),this.print(`DIAG: LED self-test pattern latched on rack LED row "DIAG" (server rack, right of the desk).
Pattern stays until reboot.`,"hi")):this.print(`SCADA status
  grid         : ${e.synced?"CONNECTED":"LOST (tie breaker Q0 open)"}
  island       : cluster INV-1..3 ${e.labOn?"online":"standby"}
  permit       : ${e.permit?"GRANTED":"none"}
  see also     : scada diag`)},mail:t=>{if(this.cur.user==="guest")return this.print("mail: no mailbox for guest","err");let n=uf(this.P),s=parseInt(t[0],10);if(!t[0])return this.print(n.map((r,o)=>`${o+1}  ${r.from.padEnd(34)} ${r.subj}`).join(`
`)+`

read with: mail <n>`);if(!(s>=1&&s<=n.length))return this.print("mail: no such message","err");this.progress.mail=!0,this.print(`From: ${n[s-1].from}
Subject: ${n[s-1].subj}

${n[s-1].body}`)},firewall:()=>this.print("firewall: moved to hardware \u2014 use the FW-BOARD logic board on the desk.","warn"),bin2dec:()=>this.print('bin2dec: command removed by IT ("do it in your head, Marco").',"err"),gridctl:()=>{if(this.cur.user!=="root")return this.print("gridctl: Operation not permitted (root only)","err");if(e.synced)return this.print("gridctl: site connected. Nothing left to validate.","hi");this.print("Starting gridctl dispatch console\u2026","hi"),this.pending&&clearTimeout(this.pending),this.pending=setTimeout(()=>{this.pending=null,this.isOpen()&&this.hooks.onGridctl?.()},450)},sudo:()=>this.print(`${this.cur.user} is not in the sudoers file. This incident will be reported.`,"err"),rm:()=>this.print("rm: Permission denied. And please don't.","err"),hint:()=>this.hooks.onHint?.(),echo:t=>this.print(t.join(" ")),uname:()=>this.print("Linux labctl-01 6.8.0-scada #1 SMP x86_64 GNU/Linux"),man:()=>this.print('No manual entry. Try "help".')}}hintTopic(e){let t=this.progress,n=this.P,s=this.cur.user;return!t.mv&&s==="guest"?{id:"mv",tiers:[`You are "guest". Marco's own account would be more useful.`,"readme.txt \u2192 hidden files (ls -a) \u2192 the photo in ~/pics. Whose name is it, and where is he napping?",`su mvolta \u2014 password "${n.userPw}": the cat's name from his collar tag (${n.cat}, on INV-2 in the booth), reversed, lowercase.`]}:t.f1?t.diag?e.f2seen?e.f3?s!=="root"?{id:"root",tiers:["You have all three fragments.","Root password = fragment 1 + fragment 2 + fragment 3, no spaces.",`su root \u2192 ${n.rootPw}`]}:null:{id:"f3",tiers:["Fragment 3 comes from hardware on the desk.","The FW-BOARD: set switches A\u2013D so the circuit on the poster outputs 1, then press TEST. Every AND input must be 1.",`Switches A B C D = ${n.boardSolution.split("").join(" ")} \u2192 fragment ${n.f3}.`]}:{id:"f2",tiers:["The DIAG row is a binary number.","Lit = 1, dark = 0, most significant bit on the left. Place values 128 64 32 16 8 4 2 1.",`${n.binStr} = ${n.bin}`]}:{id:"f2a",tiers:["Fragment 2 is on the server rack.",'Run "scada diag".',"scada diag \u2014 then look at the DIAG LED row on the rack."]}:{id:"f1",tiers:["As mvolta, read notes.txt.","Fragment 1 is a Caesar cipher. The shift is the number of lamps above the PV test rig in the booth.",`decode fragment1.enc ${n.lamps} \u2192 ${n.f1}`]}}checkPw(e){let t=this.pw.user;this.pw=null,e.trim().toLowerCase()===this.users[t]?(this.stack.push({user:t,cwd:t==="root"?"/root":`/home/${t}`}),t==="mvolta"&&(this.progress.mv=!0,this.print("Welcome back, Marco. You have 3 unread messages (mail).","hi")),t==="root"&&(this.progress.root=!0,this.print("# root shell. Try: cat README","hi"),this.hooks.onRoot?.())):this.print("su: Authentication failure","err")}run(e){if(!e)return;let[t,...n]=e.split(/\s+/),s=this.cmds();Object.hasOwn(s,t)?s[t](n):this.print(`${t}: command not found`,"err")}};var Ef={CW:[0,-120,-240],CCW:[0,-240,-120]},Ur=i=>i*Math.PI/180,E_=i=>((i+180)%360+360)%360-180,Fr={V_REL:.02,F:.1,PHI:10},Ea=class{constructor(e){this.grid={V:e.gridV,f:e.gridF},this.isl={V:222,f:49.8},this.swapped=e.swapped??!0,this.islandOn=!0,this.phi=140,this.closed=!1,this.flash=0}serialize(){return{isl:{V:this.isl.V,f:this.isl.f},swapped:this.swapped,closed:this.closed}}restore(e){e&&(this.isl.V=e.isl.V,this.isl.f=e.isl.f,this.closed=e.closed,this.swapped=e.swapped??(e.isl.seq?e.isl.seq!=="CW":!0))}tick(e){if(this.closed){this.phi=0;return}this.flash=Math.max(0,this.flash-e),this.islandOn&&(this.phi=E_(this.phi+360*(this.isl.f-this.grid.f)*e))}lamps(){if(this.closed)return[0,0,0];let e=Ef[this.swapped?"CCW":"CW"],t=Ef.CW,n=this.islandOn?this.isl.V:0;return[0,1,2].map(s=>{let r=Ur(this.phi+t[s]-e[s]),o=Math.sqrt(n**2+this.grid.V**2-2*n*this.grid.V*Math.cos(r)),a=Math.min(1,o/(2*230));return Math.max(0,(a*a-.0625)/.9375)})}check(){let e=this.isl.V-this.grid.V,t=this.isl.f-this.grid.f;return this.islandOn?this.swapped?{ok:!1,why:"PHASE ROTATION MISMATCH \u2014 the incomer arrives as L1-L3-L2. Two poles closed onto 400 V: the inverters hit their current limit within milliseconds and Q0 tripped. (The lamps were chasing each other instead of going dark together.)"}:Math.abs(e)>Fr.V_REL*this.grid.V?{ok:!1,why:`VOLTAGE MISMATCH ${e>0?"+":""}${e.toFixed(0)} V \u2014 a reactive-current surge drove the island inverters into current limit; Q0 tripped.`}:Math.abs(t)>Fr.F?{ok:!1,why:`SLIP TOO LARGE (${t>0?"+":""}${t.toFixed(2)} Hz) \u2014 the island inverters could not be pulled into step; overcurrent trip.`}:t<=0?{ok:!1,why:`ISLAND ${t<0?"SLOWER THAN":"EXACTLY AT"} GRID FREQUENCY (${t.toFixed(2)} Hz) \u2014 the grid would push power INTO the island inverters the moment Q0 closes. Reverse-power relay tripped. (Checklist: a hair ABOVE the grid.)`}:Math.abs(this.phi)>Fr.PHI?{ok:!1,why:`OUT OF PHASE by ${Math.abs(this.phi).toFixed(0)}\xB0 \u2014 ${(460*Math.sin(Math.abs(this.phi)*Math.PI/360)).toFixed(0)} V across each pole, inverters at current limit, Q0 tripped instantly. BANG.`}:{ok:!0}:{ok:!1,why:"NO ISLAND VOLTAGE \u2014 Q0 cannot synchronise a dead bus. Energise the lab cluster first."}}};function Dh(i,e,t,n,{compact:s=!1}={}){i.fillStyle="#10161d",i.fillRect(0,0,e,t);let r=s?e/2:e*.3,o=s?t*.42:t/2,a=Math.min(s?e*.38:e*.25,t*.38),l='Consolas, "Courier New", monospace';i.fillStyle="#e9e6dc",i.beginPath(),i.arc(r,o,a,0,Math.PI*2),i.fill(),i.fillStyle="rgba(40,180,90,.45)",i.beginPath(),i.moveTo(r,o),i.arc(r,o,a,-Math.PI/2-Ur(Fr.PHI),-Math.PI/2+Ur(Fr.PHI)),i.closePath(),i.fill(),i.strokeStyle="#222",i.lineWidth=2;for(let p=0;p<36;p++){let m=Ur(p*10)-Math.PI/2,S=p%9===0?a*.78:a*.88;i.beginPath(),i.moveTo(r+Math.cos(m)*S,o+Math.sin(m)*S),i.lineTo(r+Math.cos(m)*a*.97,o+Math.sin(m)*a*.97),i.stroke()}i.fillStyle="#222",i.font=`bold ${Math.round(a*.15)}px ${l}`,i.textAlign="center",i.fillText("SLOW",r-a*.45,o+a*.55),i.fillText("FAST",r+a*.45,o+a*.55),i.fillText("\u21BA",r-a*.45,o+a*.35),i.fillText("\u21BB",r+a*.45,o+a*.35);let h=Ur(n.phi)-Math.PI/2;i.strokeStyle=n.closed?"#1a8f4a":"#c21",i.lineWidth=Math.max(3,a*.05),i.lineCap="round",i.beginPath(),i.moveTo(r-Math.cos(h)*a*.15,o-Math.sin(h)*a*.15),i.lineTo(r+Math.cos(h)*a*.85,o+Math.sin(h)*a*.85),i.stroke(),i.fillStyle="#222",i.beginPath(),i.arc(r,o,a*.07,0,Math.PI*2),i.fill(),i.lineCap="butt",n.flash>0&&(i.fillStyle=`rgba(255,255,255,${n.flash})`,i.fillRect(0,0,e,t));let c=n.lamps(),u=s?t*.88:t*.12,d=s?e/2-a*.6:e*.62;if(c.forEach((p,m)=>{let S=s?d+m*a*.6:d+m*e*.12,_=i.createRadialGradient(S,u,2,S,u,t*.07);_.addColorStop(0,`rgba(255,${200+55*p},${120+100*p},${.15+.85*p})`),_.addColorStop(1,"rgba(255,200,120,0)"),i.fillStyle="#2a2f36",i.beginPath(),i.arc(S,u,t*.04,0,Math.PI*2),i.fill(),i.fillStyle=_,i.beginPath(),i.arc(S,u,t*.07,0,Math.PI*2),i.fill(),s||(i.fillStyle="#8ea3b8",i.font=`${Math.round(t*.04)}px ${l}`,i.fillText(`L${m+1}`,S,u+t*.1))}),s)return;i.textAlign="left",i.font=`${Math.round(t*.062)}px ${l}`;let f=n.isl.V-n.grid.V,g=n.isl.f-n.grid.f;[["","GRID","ISLAND"],["V",`${n.grid.V} V`,n.islandOn?`${n.isl.V} V`:"\u2014 V"],["f",`${n.grid.f.toFixed(2)} Hz`,n.islandOn?`${n.isl.f.toFixed(2)} Hz`:"\u2014 Hz"]].forEach((p,m)=>{let S=t*.34+m*t*.11;i.fillStyle="#8ea3b8",i.fillText(p[0],e*.56,S),i.fillStyle=m===0?"#8ea3b8":"#e6edf3",i.fillText(p[1],e*.6,S),i.fillText(p[2],e*.8,S)}),i.fillStyle="#c8d4e0",i.fillText(n.islandOn?`\u0394V ${f>=0?"+":""}${f} V`:"\u0394V \u2014",e*.56,t*.72),i.fillText(n.islandOn?`\u0394f ${g>=0?"+":""}${g.toFixed(2)} Hz`:"\u0394f \u2014",e*.78,t*.72),i.fillStyle=n.closed?"#3ecf7a":"#ffd24a",i.fillText(n.closed?"Q0 CLOSED \u2014 CONNECTED":n.islandOn?`\u0394\u03C6 ${n.phi>=0?"+":""}${n.phi.toFixed(0)}\xB0`:"ISLAND BUS DEAD",e*.56,t*.9)}var wa=class{constructor(){this.ctx=null,this.volume=.7,this.loops={}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(e.destination);let t=e.sampleRate*2;this.noise=e.createBuffer(1,t,e.sampleRate);let n=this.noise.getChannelData(0),s=0;for(let r=0;r<t;r++){let o=Math.random()*2-1;s=(s+.02*o)/1.02,n[r]=r%2?o:s*3.5}this.buildLoops()}catch{this.ctx=null}}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e}panner([e,t,n]){let s=this.ctx.createPanner();return s.panningModel="HRTF",s.distanceModel="inverse",s.refDistance=1.2,s.rolloffFactor=1.4,s.positionX?(s.positionX.value=e,s.positionY.value=t,s.positionZ.value=n):s.setPosition(e,t,n),s.connect(this.master),s}buildLoops(){let e=this.ctx,t=this.noiseSrc(),n=e.createBiquadFilter(),s=e.createGain();n.type="lowpass",n.frequency.value=260,s.gain.value=.035,t.connect(n).connect(s).connect(this.master),t.start(),this.loops.room=s;let r=e.createGain();r.gain.value=0,r.connect(this.panner([5.6,1.2,-2.9]));for(let[be,le]of[[50,.6],[100,1],[150,.35],[300,.12]]){let ye=e.createOscillator(),Fe=e.createGain();ye.frequency.value=be,Fe.gain.value=le,ye.connect(Fe).connect(r),ye.start()}this.loops.hum=r;let o=this.noiseSrc(),a=e.createBiquadFilter(),l=e.createGain();a.type="bandpass",a.frequency.value=700,a.Q.value=.8,l.gain.value=0,o.connect(a).connect(l).connect(this.panner([3.1,.8,-4.2])),o.start(),this.loops.fan=l;let h=this.noiseSrc(),c=e.createBiquadFilter(),u=e.createGain();c.type="bandpass",c.frequency.value=1400,c.Q.value=9,u.gain.value=0,h.connect(c).connect(u).connect(this.panner([-4.7,1,-4.1])),h.start(),this.loops.bub=u,this.loops.bubF=c;let d=e.createOscillator(),f=e.createBiquadFilter(),g=e.createGain();d.type="sawtooth",d.frequency.value=100,f.type="lowpass",f.frequency.value=500,g.gain.value=0,d.connect(f).connect(g).connect(this.panner([-4.95,2.9,0])),d.start(),this.loops.ballast=g;let v=e.createOscillator(),p=e.createBiquadFilter(),m=e.createGain();v.type="sawtooth",v.frequency.value=40,p.type="lowpass",p.frequency.value=380,m.gain.value=0,v.connect(p).connect(m).connect(this.panner([0,2.2,-4.9])),v.start(),this.loops.motor=m,this.loops.motorOsc=v;let S=this.noiseSrc(),_=e.createBiquadFilter(),x=e.createGain();_.type="lowpass",_.frequency.value=1800,x.gain.value=0,S.connect(_).connect(x).connect(this.master),S.start();let A=this.noiseSrc(),M=e.createBiquadFilter(),T=e.createGain(),L=e.createOscillator(),b=e.createGain();M.type="bandpass",M.frequency.value=320,M.Q.value=.7,T.gain.value=0,L.frequency.value=.09,b.gain.value=140,L.connect(b).connect(M.frequency),L.start(),A.connect(M).connect(T).connect(this.master),A.start(0,.7);let y=this.noiseSrc(),R=e.createBiquadFilter(),I=e.createGain();R.type="highpass",R.frequency.value=2400,I.gain.value=0;let F=this.panner([-2.3,2,-13]);F.refDistance=1.5,F.rolloffFactor=1.2,y.connect(R).connect(I).connect(F),y.start(0,1.3),this.loops.rain=x,this.loops.rainF=_,this.loops.wind=T,this.loops.pat=I;let H=this.noiseSrc(),Y=e.createBiquadFilter(),W=e.createGain(),se=e.createOscillator(),$=e.createGain(),ue=e.createGain();Y.type="lowpass",Y.frequency.value=260,W.gain.value=.5,se.frequency.value=24,$.gain.value=.5,se.connect($).connect(W.gain),se.start();let ee=this.panner([5.8,1.7,.2]);ee.refDistance=.4,ee.rolloffFactor=3.5,ue.gain.value=0,H.connect(Y).connect(W).connect(ue).connect(ee),H.start(0,.4),this.loops.purr=ue;let ae=e.createGain(),Ae=e.createBiquadFilter();Ae.type="lowpass",Ae.frequency.value=220,ae.gain.value=0,Ae.connect(ae).connect(this.master);for(let be of[55,58.3,82.4]){let le=e.createOscillator();le.type="sawtooth",le.frequency.value=be;let ye=e.createGain();ye.gain.value=be>80?.25:.5,le.connect(ye).connect(Ae),le.start()}this.loops.drone=ae;let Ve=this.noiseSrc(),K=e.createBiquadFilter(),oe=e.createGain();K.type="lowpass",K.frequency.value=420,oe.gain.value=0,Ve.connect(K).connect(oe).connect(this.master),Ve.start(0,.2),this.loops.traffic=oe}update(e,t,n){if(!this.ctx)return;let s=this.ctx.listener,r=this.ctx.currentTime,o=e.getWorldDirection(this._v||(this._v=e.position.clone()));s.positionX?(s.positionX.value=e.position.x,s.positionY.value=e.position.y,s.positionZ.value=e.position.z,s.forwardX.value=o.x,s.forwardY.value=o.y,s.forwardZ.value=o.z,s.upX.value=0,s.upY.value=1,s.upZ.value=0):(s.setPosition(e.position.x,e.position.y,e.position.z),s.setOrientation(o.x,o.y,o.z,0,1,0));let a=(l,h)=>l.gain.setTargetAtTime(h,r,.15);a(this.loops.hum,t.hum*.07),a(this.loops.fan,t.fan*.5),a(this.loops.ballast,t.ballast*.035),a(this.loops.motor,t.motor*.16),this.loops.motorOsc.frequency.setTargetAtTime(35+t.motor*55,r,.2),a(this.loops.rain,t.rain*(.05+.05*(1-t.inside))),this.loops.rainF.frequency.setTargetAtTime(t.inside>.5?900:1800,r,.5),a(this.loops.wind,t.rain*.09),a(this.loops.pat,t.rain*.05),a(this.loops.purr,t.purr*.5),a(this.loops.drone,t.drone*.022),a(this.loops.traffic,t.evening*.03),t.evening>.5&&Math.random()<n*.35&&this.bird(),t.bubbles>0&&Math.random()<n*14&&(this.loops.bubF.frequency.setValueAtTime(900+Math.random()*1600,r),this.loops.bub.gain.setValueAtTime(.5*t.bubbles,r),this.loops.bub.gain.setTargetAtTime(0,r+.02,.03))}beep(e,t,n="sine",s=.08,r=0){if(!this.ctx)return;let o=this.ctx.currentTime+r,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=n,a.frequency.value=e,l.gain.setValueAtTime(s,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(this.master),a.start(o),a.stop(o+t+.02)}burst(e,t,n,s="lowpass",r=0){if(!this.ctx)return;let o=this.ctx.currentTime+r,a=this.noiseSrc(),l=this.ctx.createBiquadFilter(),h=this.ctx.createGain();l.type=s,l.frequency.value=t,h.gain.setValueAtTime(n,o),h.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(h).connect(this.master),a.start(o,Math.random()),a.stop(o+e+.02)}click(){this.beep(1800,.03,"square",.025),this.burst(.03,3e3,.05,"highpass")}good(){this.beep(660,.12),this.beep(990,.18,"sine",.08,.09)}bad(){this.beep(140,.35,"sawtooth",.06)}step(){this.burst(.07,380+Math.random()*260,.22)}clack(){this.burst(.09,2500,.5,"bandpass"),this.beep(90,.25,"square",.08)}thunk(){this.beep(55,.4,"sine",.35),this.burst(.15,200,.4)}keyType(){this.burst(.025,4e3,.06,"highpass")}pickup(){this.beep(880,.08,"triangle",.08),this.beep(1320,.12,"triangle",.07,.07)}fanfare(){[523,659,784,1047].forEach((e,t)=>this.beep(e,.35,"triangle",.09,t*.12))}thunder(e=1,t=4){let n=Math.max(0,Math.min(1,(5-t)/3));n>0&&(this.burst(.25,2600,.4*e*n,"bandpass"),this.burst(.6,900,.3*e*n,"lowpass",.05)),this.burst(3.2,110,.55*e),this.burst(1.6,320,.22*e,"lowpass",.08),this.burst(2.4,90,.35*e,"lowpass",.6),this.beep(36,2.2,"sine",.22*e,.05)}tink(e=0){this.beep(3100+Math.random()*600,.05,"triangle",.035,e),this.beep(100,.12,"sawtooth",.025,e)}purrLoud(e=2.4){if(!this.ctx)return;let t=this.ctx,n=t.currentTime,s=this.noiseSrc(),r=t.createBiquadFilter(),o=t.createGain(),a=t.createOscillator(),l=t.createGain(),h=t.createGain();r.type="lowpass",r.frequency.value=320,o.gain.value=.5,a.frequency.value=25,l.gain.value=.5,a.connect(l).connect(o.gain),h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(.6,n+.3),h.gain.setValueAtTime(.6,n+e*.45),h.gain.linearRampToValueAtTime(.25,n+e*.55),h.gain.linearRampToValueAtTime(.5,n+e*.7),h.gain.linearRampToValueAtTime(0,n+e),s.connect(r).connect(o).connect(h).connect(this.master),s.start(n,Math.random()),a.start(n),s.stop(n+e+.05),a.stop(n+e+.05)}resolve(){[110,164.8,220,277.2,329.6].forEach((e,t)=>{this.beep(e,4.5,"triangle",.035,.05+t*.07),this.beep(e*2,3.5,"sine",.012,.3+t*.07)})}bird(){if(!this.ctx)return;let e=this.ctx.currentTime,t=2+Math.floor(Math.random()*4),n=2200+Math.random()*1400;for(let s=0;s<t;s++){let r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=e+s*(.09+Math.random()*.08),l=.05+Math.random()*.08;r.frequency.setValueAtTime(n*(.8+Math.random()*.5),a),r.frequency.exponentialRampToValueAtTime(n*(.9+Math.random()*.7),a+l),o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.012,a+.01),o.gain.exponentialRampToValueAtTime(1e-4,a+l),r.connect(o).connect(this.master),r.start(a),r.stop(a+l+.02)}}bell(e=98,t=0,n=.05){if(!this.ctx)return;let s=this.ctx.currentTime+t;for(let[r,o,a]of[[.5,.6,6],[1,1,4.5],[1.19,.5,3.5],[1.5,.45,3],[2,.35,2.5],[2.51,.25,2],[3.01,.15,1.6],[4.17,.08,1.2]]){let l=this.ctx.createOscillator(),h=this.ctx.createGain();l.frequency.value=e*r,h.gain.setValueAtTime(n*o,s),h.gain.exponentialRampToValueAtTime(1e-4,s+a),l.connect(h).connect(this.master),l.start(s),l.stop(s+a+.05)}}};var Rf="ple-settings",wf=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Af={sens:1,invertY:!1,fov:72,volume:.7,uiScale:1,reducedMotion:wf,reduceFlashing:wf,brightness:1,palette:"standard",quality:"auto"};function Cf(){try{return{...Af,...JSON.parse(localStorage.getItem(Rf)||"{}")}}catch{return{...Af}}}function w_(i){try{localStorage.setItem(Rf,JSON.stringify(i))}catch{}}function Pf(i){let e=(s,r,o,a,l,h=c=>c)=>`<div class="setrow"><label for="set_${s}">${r}</label>
    <input type="range" id="set_${s}" data-set="${s}" min="${o}" max="${a}" step="${l}" value="${i[s]}"><output>${h(i[s])}</output></div>`,t=(s,r)=>`<div class="setrow"><label for="set_${s}">${r}</label><input type="checkbox" id="set_${s}" data-set="${s}" ${i[s]?"checked":""}></div>`,n=(s,r,o)=>`<div class="setrow"><label for="set_${s}">${r}</label><select id="set_${s}" data-set="${s}">${o.map(([a,l])=>`<option value="${a}" ${i[s]===a?"selected":""}>${l}</option>`).join("")}</select></div>`;return`<div class="settings">
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
  </div>`}function If(i,e,t){i.querySelectorAll("[data-set]").forEach(n=>{n.addEventListener("input",()=>{let s=n.dataset.set;e[s]=n.type==="checkbox"?n.checked:n.tagName==="SELECT"?n.value:Number(n.value);let r=n.parentElement.querySelector("output");r&&(r.textContent={sens:o=>o.toFixed(1)+"\xD7",fov:o=>o+"\xB0",volume:o=>Math.round(o*100)+" %",uiScale:o=>Math.round(o*100)+" %",brightness:o=>Math.round(o*100)+" %"}[s]?.(e[s])??e[s]),w_(e),t(e)})})}var Aa=class extends Hs{constructor(){super();let e=new Mi;e.deleteAttribute("uv");let t=new Ot({side:cn}),n=new Ot,s=new si(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ee(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ee(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ee(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Ee(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let h=new Ee(e,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let c=new Ee(e,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);let u=new Ee(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Ee(e,js(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Ee(e,js(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Ee(e,js(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new Ee(e,js(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let p=new Ee(e,js(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new Ee(e,js(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function js(i){let e=new Ht;return e.color.setScalar(i),e}var Ki={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},A_=new Er(-1,1,1,-1,0,1),Nh=class extends Pt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},R_=new Nh,On=class{constructor(e){this._mesh=new Ee(R_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,A_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Qs=class extends sn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new On(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Or=class extends sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ra=class extends sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ca=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qs(Ki),this.copyPass.material.blending=Wt,this.clock=new Qo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Or!==void 0&&(o instanceof Or?n=!0:o instanceof Ra&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pa=class extends sn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Lf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var er=class i extends sn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ft(r,o,{type:un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ft(r,o,{type:un});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Lf;this.highPassUniforms=bn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=Ki;this.copyUniforms=bn.clone(c.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Hi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Ht,this.fsQuad=new On(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};er.BlurDirectionX=new Se(1,0);er.BlurDirectionY=new Se(0,1);var Df={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ia=class extends sn{constructor(){super();let e=Df;this.uniforms=bn.clone(e.uniforms),this.material=new Yo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new On(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===th?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var kr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new gt},cameraProjectionMatrixInverse:{value:new gt},cameraWorldMatrix:{value:new gt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},Br={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},La={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Nf(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=C_(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,h=new U(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(h.x*.5+.5)*255,s[o*4+1]=(h.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Vs(s,e,e);return r.wrapS=Kt,r.wrapT=Kt,r.needsUpdate=!0,r}function C_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var zr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Uh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraProjectionMatrixInverse:{value:new gt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Uh(i,e,t){let n=P_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function P_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var Da=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),h=Math.floor(t+a),c=(3-Math.sqrt(3))/6,u=(l+h)*c,d=l-u,f=h-u,g=e-d,v=t-f,p,m;g>v?(p=1,m=0):(p=0,m=1);let S=g-p+c,_=v-m+c,x=g-1+2*c,A=v-1+2*c,M=l&255,T=h&255,L=this.perm[M+this.perm[T]]%12,b=this.perm[M+p+this.perm[T+m]]%12,y=this.perm[M+1+this.perm[T+1]]%12,R=.5-g*g-v*v;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[L],g,v));let I=.5-S*S-_*_;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[b],S,_));let F=.5-x*x-A*A;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[y],x,A)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,h=(e+t+n)*.3333333333333333,c=Math.floor(e+h),u=Math.floor(t+h),d=Math.floor(n+h),f=1/6,g=(c+u+d)*f,v=c-g,p=u-g,m=d-g,S=e-v,_=t-p,x=n-m,A,M,T,L,b,y;S>=_?_>=x?(A=1,M=0,T=0,L=1,b=1,y=0):S>=x?(A=1,M=0,T=0,L=1,b=0,y=1):(A=0,M=0,T=1,L=1,b=0,y=1):_<x?(A=0,M=0,T=1,L=0,b=1,y=1):S<x?(A=0,M=1,T=0,L=0,b=1,y=1):(A=0,M=1,T=0,L=1,b=1,y=0);let R=S-A+f,I=_-M+f,F=x-T+f,H=S-L+2*f,Y=_-b+2*f,W=x-y+2*f,se=S-1+3*f,$=_-1+3*f,ue=x-1+3*f,ee=c&255,ae=u&255,Ae=d&255,Ve=this.perm[ee+this.perm[ae+this.perm[Ae]]]%12,K=this.perm[ee+A+this.perm[ae+M+this.perm[Ae+T]]]%12,oe=this.perm[ee+L+this.perm[ae+b+this.perm[Ae+y]]]%12,be=this.perm[ee+1+this.perm[ae+1+this.perm[Ae+1]]]%12,le=.6-S*S-_*_-x*x;le<0?s=0:(le*=le,s=le*le*this.dot3(this.grad3[Ve],S,_,x));let ye=.6-R*R-I*I-F*F;ye<0?r=0:(ye*=ye,r=ye*ye*this.dot3(this.grad3[K],R,I,F));let Fe=.6-H*H-Y*Y-W*W;Fe<0?o=0:(Fe*=Fe,o=Fe*Fe*this.dot3(this.grad3[oe],H,Y,W));let Be=.6-se*se-$*$-ue*ue;return Be<0?a=0:(Be*=Be,a=Be*Be*this.dot3(this.grad3[be],se,$,ue)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20,c,u,d,f,g,v=(e+t+n+s)*l,p=Math.floor(e+v),m=Math.floor(t+v),S=Math.floor(n+v),_=Math.floor(s+v),x=(p+m+S+_)*h,A=p-x,M=m-x,T=S-x,L=_-x,b=e-A,y=t-M,R=n-T,I=s-L,F=b>y?32:0,H=b>R?16:0,Y=y>R?8:0,W=b>I?4:0,se=y>I?2:0,$=R>I?1:0,ue=F+H+Y+W+se+$,ee=o[ue][0]>=3?1:0,ae=o[ue][1]>=3?1:0,Ae=o[ue][2]>=3?1:0,Ve=o[ue][3]>=3?1:0,K=o[ue][0]>=2?1:0,oe=o[ue][1]>=2?1:0,be=o[ue][2]>=2?1:0,le=o[ue][3]>=2?1:0,ye=o[ue][0]>=1?1:0,Fe=o[ue][1]>=1?1:0,Be=o[ue][2]>=1?1:0,ut=o[ue][3]>=1?1:0,z=b-ee+h,Q=y-ae+h,N=R-Ae+h,fe=I-Ve+h,pe=b-K+2*h,ve=y-oe+2*h,me=R-be+2*h,Oe=I-le+2*h,_e=b-ye+3*h,D=y-Fe+3*h,E=R-Be+3*h,V=I-ut+3*h,ne=b-1+4*h,re=y-1+4*h,te=R-1+4*h,ke=I-1+4*h,Me=p&255,Re=m&255,nt=S&255,he=_&255,Ie=a[Me+a[Re+a[nt+a[he]]]]%32,ze=a[Me+ee+a[Re+ae+a[nt+Ae+a[he+Ve]]]]%32,je=a[Me+K+a[Re+oe+a[nt+be+a[he+le]]]]%32,Le=a[Me+ye+a[Re+Fe+a[nt+Be+a[he+ut]]]]%32,rt=a[Me+1+a[Re+1+a[nt+1+a[he+1]]]]%32,Ze=.6-b*b-y*y-R*R-I*I;Ze<0?c=0:(Ze*=Ze,c=Ze*Ze*this.dot4(r[Ie],b,y,R,I));let ht=.6-z*z-Q*Q-N*N-fe*fe;ht<0?u=0:(ht*=ht,u=ht*ht*this.dot4(r[ze],z,Q,N,fe));let O=.6-pe*pe-ve*ve-me*me-Oe*Oe;O<0?d=0:(O*=O,d=O*O*this.dot4(r[je],pe,ve,me,Oe));let xe=.6-_e*_e-D*D-E*E-V*V;xe<0?f=0:(xe*=xe,f=xe*xe*this.dot4(r[Le],_e,D,E,V));let Z=.6-ne*ne-re*re-te*te-ke*ke;return Z<0?g=0:(Z*=Z,g=Z*Z*this.dot4(r[rt],ne,re,te,ke)),27*(c+u+d+f+g)}};var Hr=class i extends sn{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Nf(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ft(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},kr.defines),uniforms:bn.clone(kr.uniforms),vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,blending:Wt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Zo,this.normalMaterial.blending=Wt,this.pdMaterial=new yt({defines:Object.assign({},zr.defines),uniforms:bn.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},Br.defines),uniforms:bn.clone(Br.uniforms),vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader,blending:Wt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:bn.clone(Ki.uniforms),vertexShader:Ki.vertexShader,fragmentShader:Ki.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:sa,blendDst:$s,blendEquation:Nn,blendSrcAlpha:ia,blendDstAlpha:$s,blendEquationAlpha:Nn}),this.blendMaterial=new yt({uniforms:bn.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:eh,blendSrc:sa,blendDst:$s,blendEquation:Nn,blendSrcAlpha:ia,blendDstAlpha:$s,blendEquationAlpha:Nn}),this.fsQuad=new On(null),this.originalClearColor=new Ue,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Xi,this.depthTexture.format=Gi,this.depthTexture.type=Vi,this.normalRenderTarget=new Ft(this.width,this.height,{minFilter:hn,magFilter:hn,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Uh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new Da,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,h=a;s[(o*e+a)*4]=(t.noise(l,h)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,h)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,h+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,h+e)*.5+.5)*255}let r=new Vs(s,e,e,Rn,Gn);return r.wrapS=Kt,r.wrapT=Kt,r.needsUpdate=!0,r}};Hr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var I_={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.045},vignette:{value:.4},aberration:{value:.0025}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},Fh=class extends sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.selected=[],this.enabled=!1,this.mask=new Ft(1,1),this.maskMat=new Ht({color:16777215}),this.clear=new Ue,this.quad=new On(new yt({uniforms:{tDiffuse:{value:null},tMask:{value:null},texel:{value:new Se(1,1)},color:{value:new Ue(16763210)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse, tMask; uniform vec2 texel; uniform vec3 color; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tDiffuse, vUv);
          float m = texture2D(tMask, vUv).r, d = 0.0;
          for (int i = 0; i < 8; i++) {
            vec2 o = vec2(cos(float(i) * 0.7853982), sin(float(i) * 0.7853982)) * texel * 1.5;
            d = max(d, texture2D(tMask, vUv + o).r); d = max(d, texture2D(tMask, vUv + o * 2.2).r * 0.55);
          }
          gl_FragColor = vec4(c.rgb + color * (clamp(d - m, 0.0, 1.0) * 1.3 + m * 0.04), c.a);
        }`}))}setSize(e,t){let n=Math.max(1,Math.round(e/2)),s=Math.max(1,Math.round(t/2));this.mask.setSize(n,s),this.quad.material.uniforms.texel.value.set(1/n,1/s)}render(e,t,n){let s=this.camera,r=this.scene,o=s.layers.mask,a=r.background,l=r.overrideMaterial,h=e.getClearAlpha();e.getClearColor(this.clear);for(let u of this.selected)u.traverse(d=>d.layers.enable(31));s.layers.set(31),r.background=null,r.overrideMaterial=this.maskMat,e.setRenderTarget(this.mask),e.setClearColor(0,1),e.clear(),e.render(r,s);for(let u of this.selected)u.traverse(d=>d.layers.disable(31));s.layers.mask=o,r.background=a,r.overrideMaterial=l,e.setClearColor(this.clear,h);let c=this.quad.material.uniforms;c.tDiffuse.value=n.texture,c.tMask.value=this.mask.texture,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.mask.dispose(),this.maskMat.dispose(),this.quad.material.dispose(),this.quad.dispose()}},Na=class{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,this.enabled=!1,this.composer=null,this.aoOff=!1}configure(e,{touch:t=!1}={}){if(this.composer){for(let c of this.composer.passes)c.dispose?.();this.composer.renderTarget1.depthTexture?.dispose(),this.composer.renderTarget2.depthTexture?.dispose(),this.composer.dispose()}if(this.composer=null,this.highlight=null,this.aoOff=!1,this.enabled=e!=="low",!this.enabled)return;let n=this.renderer,s=n.getSize(new Se),r=n.getPixelRatio(),o=t?2:e==="high"||r<=1.2?4:2,a=new Ft(s.x*r,s.y*r,{type:un,samples:o,depthTexture:new Xi(s.x*r,s.y*r)}),l=this.composer=new Ca(n,a);if(l.setPixelRatio(r),l.setSize(s.x,s.y),l.addPass(new Pa(this.scene,this.camera)),e==="high"||e==="auto"&&!t){let c=this.ao=new Hr(this.scene,this.camera,s.x,s.y);c.setGBuffer(a.depthTexture);let u=c.render.bind(c);if(c.render=(d,f,g,v,p)=>{g.depthTexture&&c.depthTexture!==g.depthTexture&&(c.depthTexture=g.depthTexture,c.gtaoMaterial.uniforms.tDepth.value=c.pdMaterial.uniforms.tDepth.value=g.depthTexture),u(d,f,g,v,p)},e!=="high"){let d=c.setSize.bind(c);c.setSize=(f,g)=>d(Math.max(1,Math.round(f/2)),Math.max(1,Math.round(g/2))),c.setSize(s.x*r,s.y*r)}c.updateGtaoMaterial({radius:.45,distanceExponent:1.5,thickness:1.2,scale:1.1,samples:e==="high"?16:10}),c.updatePdMaterial({samples:e==="high"?12:8,radius:6}),c.blendIntensity=.9,l.addPass(c)}else this.ao=null;this.highlight=new Fh(this.scene,this.camera),l.addPass(this.highlight),this.bloom=new er(new Se(s.x,s.y),.55,.45,1),l.addPass(this.bloom),l.addPass(new Ia),this.film=new Qs(I_),l.addPass(this.film)}setSize(e,t){this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t))}select(e){return this.highlight?(this.highlight.selected=e,this.highlight.enabled=e.length>0,!0):!1}render(e,t=!1){if(!this.enabled){this.renderer.render(this.scene,this.camera);return}this.film.uniforms.time.value=(this.film.uniforms.time.value+e)%100,this.ao&&(this.ao.enabled=!t&&!this.aoOff),this.composer.render(e)}};function Ff(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Pt,h=0;for(let c=0;c<i.length;++c){let u=i[c],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(t){let c=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=i[d].attributes.position.count}l.setIndex(u)}for(let c in r){let u=Uf(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in o){let u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[c].length;++v)f.push(o[c][v][d]);let g=Uf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Uf(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){let c=i[h];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}let o=new e(r),a=new tn(o,t,n),l=0;for(let h=0;h<i.length;++h){let c=i[h];if(c.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<t;g++){let v=c.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(c.array,l);l+=c.count*t}return s!==void 0&&(a.gpuType=s),a}function Of(i,{points:e=4,spots:t=4}={}){let n={PointLight:[],SpotLight:[]};for(let l of[...i.children])(l.isPointLight||l.isSpotLight)&&!l.castShadow&&(n[l.type].push(l),i.remove(l));let s=(l,h)=>Array.from({length:h},()=>{let c=l==="PointLight"?new si(16777215,0):new Si(16777215,0);return i.add(c),c.isSpotLight&&i.add(c.target),c.userData.src=null,c}),r={PointLight:s("PointLight",e),SpotLight:s("SpotLight",t)},o=new U;function a(l){for(let h of["PointLight","SpotLight"]){let c=r[h],u=n[h],d=new Set(c.map(v=>v.userData.src)),f=u.filter(v=>v.intensity>0).map(v=>{let p=o.copy(v.position).sub(l).lengthSq();return[v,v.intensity/(1+p)*(d.has(v)?1.6:1)]}).sort((v,p)=>p[1]-v[1]).slice(0,c.length).map(v=>v[0]),g=c.filter(v=>!f.includes(v.userData.src));for(let v of f)c.some(p=>p.userData.src===v)||(g.shift().userData.src=v);for(let v of g)v.userData.src=null;for(let v of c){let p=v.userData.src;if(!p){v.intensity=0;continue}v.position.copy(p.position),v.color.copy(p.color),v.intensity=p.intensity,v.distance=p.distance,v.decay=p.decay,v.isSpotLight&&(v.angle=p.angle,v.penumbra=p.penumbra,v.target.position.copy(p.target.position))}}}return{update:a,virtual:n}}function kf(i,e){let t=new Map;for(let s of i.children){if(!s.isMesh||e.has(s)||s.userData.id||s.children.length||!s.visible||Array.isArray(s.material))continue;let r=s.material;if(r.transparent||r.isShaderMaterial||s.raycast!==Ee.prototype.raycast||!s.geometry.index)continue;let o=`${r.uuid}|${s.castShadow}|${s.receiveShadow}|${Object.keys(s.geometry.attributes).sort().join()}`;t.has(o)||t.set(o,[]),t.get(o).push(s)}let n=0;for(let s of t.values()){if(s.length<2)continue;let r=s.map(l=>{l.updateMatrixWorld();let h=l.geometry.clone();return h.applyMatrix4(l.matrixWorld),h.clearGroups(),h}),o=Ff(r,!1);if(r.forEach(l=>l.dispose()),!o)continue;let a=new Ee(o,s[0].material);a.castShadow=s[0].castShadow,a.receiveShadow=s[0].receiveShadow,a.name="merged",i.add(a);for(let l of s)i.remove(l),l.geometry.dispose();n+=s.length-1}return n}function Bf(i){let e=new Set,t=(n,s)=>{if(!(!n||s>3||typeof n!="object")){if(n.isObject3D){n.traverse(r=>e.add(r));return}if(!(n.isMaterial||n.isTexture||n.isColor||n.isVector3))for(let r of Array.isArray(n)?n:Object.values(n))t(r,s+1)}};return t(i,0),e}var Oa=new URLSearchParams(location.search),$h="ple-best-v2",qf=60*60,ka=i=>`ple-save-v2-${i}`,on={get(i){try{return JSON.parse(localStorage.getItem(i)||"null")}catch{return null}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}},del(i){try{localStorage.removeItem(i)}catch{}}},Yf=()=>{let i=new Date;return i.getFullYear()*1e4+(i.getMonth()+1)*100+i.getDate()},dn=Number(Oa.get("seed"))||0,sr=ka(dn);{let i=on.get("ple-save-v2");i&&(on.set(ka(i.seed||0),i),on.del("ple-save-v2"))}var vt=Jd(dn),wt=Cf();Lh(wt.palette);var St=i=>document.getElementById(i),Gt;try{Gt=new ko({antialias:wt.quality==="low",powerPreference:"high-performance"})}catch{throw document.body.insertAdjacentHTML("beforeend",'<div class="overlay"><div class="card"><h2>WebGL unavailable</h2><p>This game needs a browser with WebGL enabled.</p></div></div>'),new Error("WebGL unavailable")}var Zh=()=>Math.min(devicePixelRatio||1,{low:1,auto:1.5,high:2}[wt.quality]??1.5),Nt={ema:16.7,t:0,scale:1,good:0};Gt.setPixelRatio(Zh());Gt.setSize(innerWidth,innerHeight);Gt.toneMapping=Cr;Gt.toneMappingExposure=1.15;Gt.shadowMap.enabled=!Ks();Gt.shadowMap.type=na;St("app").appendChild(Gt.domElement);var Ri=Gt.domElement;Ri.setAttribute("aria-label","3D view of the laboratory");var Sn=new Hs;Sn.background=new Ue(329740);var Dt=new en(wt.fov,innerWidth/innerHeight,.05,100);Dt.rotation.order="YXZ";{let i=new zs(Gt);Sn.environment=i.fromScene(new Aa,.04).texture,i.dispose()}Sn.environmentIntensity=.08;var Ci=new Na(Gt,Sn,Dt),zf=null;addEventListener("resize",()=>{Dt.aspect=innerWidth/innerHeight,Dt.updateProjectionMatrix(),Gt.setSize(innerWidth,innerHeight),Ci.setSize(innerWidth,innerHeight)});var{colliders:L_,refs:ce}=Mf(Sn,vt);for(let i of Object.values(ce.outside.night))Gt.initTexture(i);var Oh=new Wn;Sn.traverse(i=>{!i.isMesh||i.material.transparent||i.material.isShaderMaterial||(Oh.setFromObject(i),i.castShadow=!0,i.receiveShadow=Oh.min.z<-1&&Oh.min.y<3.3)});var Zf=Of(Sn,{points:4,spots:4});kf(Sn,Bf(ce));ce.cat.eyeOpen.visible=!0;Gt.compile(Sn,Dt);ce.cat.eyeOpen.visible=!1;var hi=new Ee(new Cn(4,4),ce.outside.material(ce.doorFrame,{trees:!1}));Object.assign(hi.material,{depthTest:!1,depthWrite:!1});hi.raycast=()=>{};hi.renderOrder=1e3;hi.frustumCulled=!1;hi.position.z=-.2;hi.visible=!1;Dt.add(hi);Sn.add(Dt);var Ba=document.createElement("div");Ba.id="fade";document.body.appendChild(Ba);var ir=document.createElement("div");ir.id="caption";document.body.appendChild(ir);function za(i,e=4){ir.textContent=i,ir.classList.add("show"),clearTimeout(za.t),za.t=setTimeout(()=>ir.classList.remove("show"),e*1e3)}var Je=new Sa(vt),Et=new Ea(vt),lt=new wa;lt.setVolume(wt.volume);var Ua=hf(vt),ci=new ta(new Wn,16765514);ci.material.depthTest=!1;ci.material.transparent=!0;ci.material.opacity=.7;ci.renderOrder=10;ci.visible=!1;Sn.add(ci);var Kh=[];Sn.traverse(i=>{i.isMesh&&Kh.push(i)});var He={hud:St("hud"),start:St("start"),resume:St("resume"),menu:St("menu"),panel:St("panel"),panelTitle:St("panelTitle"),panelBody:St("panelBody"),prompt:St("prompt"),cross:St("crosshair"),objective:St("objective"),busHud:St("busHud"),toast:St("toast"),end:St("end"),timer:St("timer"),inv:St("inv"),hint:St("hintBox"),journal:St("journal")};function Kf(){let i=Dt.aspect;return i>=1?wt.fov:Math.max(wt.fov,Math.min(100,2*Math.atan(Math.tan(62*Math.PI/360)/i)*180/Math.PI))}function Jf(){Dt.fov=Kf(),Dt.updateProjectionMatrix(),Gt.toneMappingExposure=1.15*wt.brightness,lt.setVolume(wt.volume),document.documentElement.style.setProperty("--ui",wt.uiScale),Lh(wt.palette),wt.quality!=="auto"&&(Nt.scale=1),Gt.setPixelRatio(Zh()*Nt.scale),zf!==wt.quality&&(zf=wt.quality,Ci.configure(wt.quality,{touch:Ks()})),Ci.setSize(innerWidth,innerHeight),Je.version++}Jf();var w={mode:"start",stage:"lab",panelId:null,panelVersion:-1,pver:0,target:null,inventory:[],journal:{},heard:{},hints:{used:0,revealed:{}},time:{elapsed:0,penalty:0,splits:{}},drawer:{code:[0,0,0,0],open:!1,taken:!1},board:{bits:[0,0,0,0],solved:!1,fails:0},diag:!1,f2seen:!1,exitOpen:!1,catPets:0,termOpened:!1,busSeen:!1,shake:0,shakeDir:new U(0,1,0)};function Xh(i){wt.reducedMotion||(w.shake=i,w.shakeDir.set(Math.random()-.5,1,Math.random()-.5).normalize())}var Ne={x:0,z:2.6,yaw:0,pitch:-.05,eye:1.65,r:.3,vx:0,vz:0,bob:0,stepAcc:0},Mn={},Jh=!1,li=null,Wr=()=>{for(let i in Mn)Mn[i]=!1;li?.reset(),Jh=!1},Kn=i=>{let e=Math.abs(Math.round(i));return`${i<0?"+":""}${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},rr=()=>w.time.elapsed+w.time.penalty,nr=[],Vr=0;function Ut(i,e="info"){nr.length&&nr[nr.length-1].msg===i||(nr.push({msg:i,kind:e}),Vr<=0&&jh())}function jh(){let i=nr.shift();if(!i){He.toast.classList.remove("show");return}He.toast.textContent=i.msg,He.toast.className="show "+(i.kind==="bad"?"bad":i.kind==="good"?"good":""),Vr=Math.min(6,2.2+i.msg.length/30)}function Va(i,e){w.time.penalty+=i,Ut(`\u23F1 +${Kn(i)} \u2014 ${e}`,"bad"),He.timer.classList.remove("pen"),He.timer.offsetWidth,He.timer.classList.add("pen")}var Qh={handwheel:"\u{1F534} Valve handwheel",permit:"\u{1FAAA} Reconnection permit card"};function jf(i){w.inventory.includes(i)||(w.inventory.push(i),lt.pickup(),Ut(`Picked up: ${Qh[i]}`,"good"),Ga())}function Qf(i){w.inventory=w.inventory.filter(e=>e!==i),Ga()}function Ga(){He.inv.innerHTML=w.inventory.map(i=>`<span class="chip">${Qh[i]}</span>`).join("")}function In(i,e,t){w.journal[i]||(w.journal[i]={title:e,text:t,t:rr()},St("jBadge")?.classList.add("new"))}var Hf={control:"Booth door",root:"Root access",permit:"Reconnection permit",synced:"Grid synchronised",won:"Escaped"};function oi(i){if(w.stage!==i){if(w.stage=i,w.time.splits[i]=rr(),i==="control"&&(w.boltIn=.6,ce.windowLight.shadow.needsUpdate=!0),i==="permit"){jf("permit");for(let e of["restored","evening"])for(let t of ce.outside.prepare(e))Gt.initTexture(t);ce.outside.setMode("restored"),setTimeout(()=>za("Across the river the city lights come back on. The grid is live again \u2014 only this building is still dark.",6),1200)}i==="synced"&&(ce.outside.setMode("evening"),w.exitOpen=!0,w.syncT=0,Je.s.grid=!0,ce.windowLight.shadow.needsUpdate=!0),ar()}}function D_(){return w.stage==="lab"?Je.objective()||"The door is open. Go through.":{control:"Get the building back on the grid. The <b>control PC</b> is on the desk.",root:"You are root. Get the <b>reconnection permit</b>: run <b>gridctl</b>.",permit:"Permit granted. <b>Synchronise</b> the lab with the grid at the tie panel (Q0) next to the exit.",synced:"The exit is open. <b>Get out!</b>",won:"You escaped. Feel free to look around."}[w.stage]}function N_(){return w.stage==="lab"?Je.hintTopic():w.stage==="control"?w.termOpened?kn.hintTopic({f2seen:w.f2seen,f3:w.board.solved})||{id:"root",tiers:["You have everything.","Combine the fragments.",`su root \u2192 ${vt.rootPw}`]}:{id:"pc",tiers:["There is a computer in this room.","The PC on the desk runs on the UPS.","Walk to the desk and use the PC."]}:w.stage==="root"?{id:"gridctl",tiers:["Marco's mail (mail) and /root/README describe the reconnection procedure.",`Run gridctl as root and validate a 24-h dispatch: reach \u2265 ${j.WIN_RATIO*100} % of the benchmark's extra profit.`,"At negative prices: curtail, charge, electrolyze. At the evening peak: discharge (fuel cell above its break-even). The \u{1F4A1} advisor gives per-hour advice."]}:w.stage==="permit"?{id:"sync",tiers:["The tie panel (Q0) is on the east wall next to the exit. Marco pinned a checklist nearby, and the grid operator's e-mail lists their values.","Insert the permit card. Match the voltage, run the island slightly FASTER than the grid, and watch the three lamps: if they chase each other instead of going dark together, the incoming phases are swapped. Close on the synchroscope at 12 o'clock.",`Insert the permit card. Island ${vt.gridV} V, ${(vt.gridF+.04).toFixed(2)} Hz. ${vt.swapped?'In this room the lamps chase \u2192 press "Swap L2 \u2194 L3" once.':"In this room the lamps already go dark together \u2192 leave the jumper as found."} Press CLOSE (or Space) when the needle is in the green sector.`]}:{id:"exit",tiers:["Walk out!","The exit door is in the east wall of the control room.","Go through the open exit door and down the corridor."]}}var kn=new Ta(vt,{onGridctl:()=>{kn.close(),tu()},onDiag:i=>{w.diag=i,In("diag","SCADA diag","scada diag latched a pattern on the rack's DIAG LED row.")},onKey:()=>lt.keyType(),onEscape:()=>ai(),onHint:()=>Xa(),onRoot:()=>oi("root"),getState:()=>({permit:Jt.permit,synced:w.stage==="synced"||w.stage==="won",labOn:Je.f.live.some(Boolean)})}),Jt=new fa(i=>{w.gridResult=i,Jt.close(),oi("permit"),ai(),Ut("\u{1FAAA} Reconnection permit card issued. Take it to the tie panel (Q0) next to the exit and synchronise.","good")},dn);Jt.onClose=()=>ai();Jt.onHint=i=>{i&&w.hints.used++,Va(15,"advisor consulted")};var gn=Ks();document.body.classList.toggle("touch",gn);li=new ya(Ri,{look:(i,e)=>{w.mode==="play"&&op(i*1.6,e*1.6)},tap:(i,e)=>{w.mode==="play"&&B_(i,e)},use:()=>{w.mode==="play"&&Xr(w.target)},menu:()=>or(),hint:()=>Xa(),journal:()=>nu(),sprint:i=>{Jh=i}});var ep=0;function Wa(){if(gn){$r();return}let i=()=>{w.mode==="paused"&&He.resume.classList.remove("hidden")};try{let e=Ri.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>{try{let t=Ri.requestPointerLock();t&&t.catch&&t.catch(i)}catch{i()}})}catch{try{Ri.requestPointerLock()}catch{i()}}}function $r(){w.mode="play",w.coldPending&&(w.coldPending=!1,w.cold=0),He.resume.classList.add("hidden"),ep=performance.now()}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Ri?$r():(Wr(),w.mode==="play"&&or())});document.addEventListener("pointerlockerror",()=>{w.mode==="paused"&&He.resume.classList.remove("hidden")});He.resume.addEventListener("click",()=>{lt.init(),gn?$r():Wa()});Ri.addEventListener("click",()=>{w.mode==="paused"&&!gn&&(lt.init(),Wa())});addEventListener("blur",()=>{Wr(),w.mode==="play"&&gn&&or()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Wr(),ar(),w.mode==="play"&&gn&&or())});var U_=["panel","terminal","grid","hint","journal","menu"];function Pi(i){w.mode=i,Wr(),document.pointerLockElement&&document.exitPointerLock(),He.resume.classList.add("hidden"),He.prompt.style.display="none",He.cross.classList.remove("active"),ci.visible=!1,li.enable(!1)}function ai(){if(He.panel.classList.add("hidden"),He.hint.classList.add("hidden"),He.journal.classList.add("hidden"),He.menu.classList.add("hidden"),kn.close(),Jt.close(),w.panelId=null,document.activeElement?.blur?.(),!(w.mode==="end"||w.mode==="start")){if(w.returnTo&&["hint","journal"].includes(w.mode)){let i=w.returnTo;w.returnTo=null,i==="terminal"?(Pi("terminal"),kn.open()):tu();return}w.returnTo=null,w.mode="paused",li.enable(gn),gn?$r():Wa()}}document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",ai));var ps=(i,e=!1)=>`<div class="lcd ${e?"red":""}">${i}</div>`,F_=null,Vf=()=>F_??(F_=ce.circuitCanvas.toDataURL()),tp=()=>Pn(ce.drawerLockTex,(i,e,t)=>{i.fillStyle="#222",i.fillRect(0,0,e,t),i.fillStyle="#ddd",i.font=`bold 34px ${Xe.mono}`,i.textAlign="center",i.fillText(w.drawer.code.join(" "),e/2,36)});function np(i){let e={};e.cat={title:"A sleeping cat",controls:()=>`<p>A ginger cat is curled up on top of INV-2, enjoying the warm fan exhaust.</p>
      <div class="lcd" style="font-size:18px">Collar tag: \u201C${vt.cat.toUpperCase()}\u201D</div>
      <button class="btn" data-act="pet">Pet the cat</button>`,onOpen:()=>In("cat","The cat on INV-2",`Collar tag: "${vt.cat.toUpperCase()}"`),onAct:()=>{w.catPets++,lt.purrLoud(),w.catPets>3?w.catEye=2.5:w.earFlick={ear:w.catPets%2,t:.35},Ut(w.catPets>3?"He opens one eye. Judging you.":"Prrrrr. (He did not bite.)")}},e.drawer={title:"Bench drawer \xB7 4-wheel combination lock",controls:()=>w.drawer.open?w.drawer.taken?"<p>Empty \u2014 cable ties, a multimeter fuse and half a cookie.</p>":'<p>Inside: the missing <b>handwheel</b> of the H\u2082 valve.</p><button class="btn on" data-act="take">Take the handwheel</button>':`<p class="note">Four number wheels.<span class="kbd-hint"> (You can also type the digits and press Enter.)</span></p>
        <div class="wheels">${w.drawer.code.map((t,n)=>`<div class="wheel"><button class="btn" data-act="dw:${n}:1" aria-label="wheel ${n+1} up">\u25B2</button><div class="digit">${t}</div><button class="btn" data-act="dw:${n}:-1" aria-label="wheel ${n+1} down">\u25BC</button></div>`).join("")}</div>
        <button class="btn on" data-act="dopen">Pull the drawer</button>`,onAct:t=>{let[n,s,r]=t.split(":");n==="dw"&&(w.drawer.code[s]=(w.drawer.code[s]+Number(r)+10)%10),n==="digit"&&(w.drawer.code.shift(),w.drawer.code.push(Number(s))),n==="dopen"&&(w.drawer.code.join("")===vt.drawerCode?(w.drawer.open=!0,lt.clack(),Ut("Click \u2014 the drawer slides open.","good"),In("drawer","Bench drawer",`Code ${vt.drawerCode}. It held the H\u2082 valve handwheel.`)):[`${vt.bands.join("")}0`,`0${vt.bands.join("")}`].includes(w.drawer.code.join(""))?(lt.bad(),Ut("The wheels almost give\u2026 Is the third band really a digit? Check the colour-code poster.","bad")):(lt.bad(),Ut("The lock doesn't budge.","bad"))),n==="take"&&(w.drawer.taken=!0,jf("handwheel")),tp()}},e.resistor={title:"A display resistor with a sticky note",controls:()=>`<div class="resistor"><span class="lead"></span><span class="rbody">${vt.bands.map(t=>`<i style="background:${Ys[t]}"></i>`).join("")}<i class="gap"></i><i style="background:#c8a040"></i></span><span class="lead"></span></div>
      <div class="board" style="font-size:18px">"Drawer = my value in \u03A9." <span style="float:right">\u2014 M.V.</span></div>
      <p class="note">Bands are read from the end they are closest to. The separate gold band is the tolerance.</p>`,onOpen:()=>In("resistor","Resistor sticky note",`"Drawer = my value in \u03A9." Bands: ${vt.bands.map(t=>Sh[t]).join(", ")}, gold.`)},e.colorcode={title:"Resistor colour code (poster)",controls:()=>`<p><b>Bands 1 + 2 = digits \xB7 band 3 = multiplier</b> <span class="bad">(band 3 is not a digit \u2014 it adds zeros)</span> \xB7 band 4 = tolerance</p>
      <table class="phase-table"><tr><th>Colour</th><th>Digit (bands 1\u20132)</th><th>Multiplier (band 3)</th></tr>${Sh.map((t,n)=>`<tr><td><i class="sw" style="background:${Ys[n]}"></i> ${t}</td><td>${n}</td><td>${ca[n]} <span class="note">(${n?`+${n} zero${n>1?"s":""}`:"no zeros"})</span></td></tr>`).join("")}<tr><td><i class="sw" style="background:#c8a040"></i> gold</td><td>\u2014</td><td>tolerance \xB15 %</td></tr></table>
      <p class="note">Example: brown \xB7 black \xB7 orange \xB7 gold = 1, 0, \xD71 000 \u2192 10 \xD7 1 000 = 10 000 \u03A9.</p>`,onOpen:()=>In("colorcode","Resistor colour code","Bands 1+2 = digits, band 3 = MULTIPLIER (number of zeros), band 4 = tolerance. black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9. Example: brown\xB7black\xB7orange = 10 \xD7 1 000 = 10 000 \u03A9.")},e.whiteboard={title:"Whiteboard (half erased)",controls:()=>`<div class="board">${Dr(vt).map(([t,n])=>`<div style="color:${n};white-space:pre-wrap">${t}</div>`).join("")}</div>`,onOpen:()=>In("whiteboard","Whiteboard",Dr(vt).map(t=>t[0].trim()).join(`
`))},e.plaque={title:"Brass plaque",controls:()=>`<div class="board" style="background:#b8923a;color:#3b2a08;text-align:center;font-family:Georgia,serif">SOLAR TEST LABORATORY<br><b style="font-size:26px">EST. ${vt.year}</b><br><i>"Power to the people."</i></div>`,onOpen:()=>In("plaque","Brass plaque",`Solar Test Laboratory \u2014 est. ${vt.year}`)};for(let t of["rec1","rec2","rec3","rec4"])e[t]={title:Ua[t].title,controls:()=>`<div class="memo">\u25B6 ${Ua[t].text.replace(/\n/g,"<br>")}</div><button class="btn" data-act="replay">\u21BB Replay</button>`,onOpen:()=>{Gf(),w.heard[t]=!0,In(t,Ua[t].title,Ua[t].text)},onAct:()=>Gf()};return e.rack={title:"Server rack \xB7 DIAG LED row",controls:()=>w.diag?`<div class="leds">${vt.binStr.split("").map(t=>`<span class="led ${t==="1"?"on":""}"></span>`).join("")}</div><p class="note">\u25C0 MSB \xB7 lit = 1 \xB7 8 bits</p>`:"<p>The DIAG row is dark. Some SCADA diagnostic must drive it.</p>",onOpen:()=>{w.diag&&(w.f2seen=!0,In("rackdiag","DIAG LED pattern",`${vt.binStr.replace(/1/g,"\u25CF").replace(/0/g,"\u25CB")}  (lit = 1, MSB left)`))}},e.circuit={title:"Poster: FW-BOARD circuit",controls:()=>`<img class="circuit-img" src="${Vf()}" alt="Logic circuit: inputs A to D feed gates whose outputs are ANDed into the output LED">`},e.board={title:"FW-BOARD \xB7 logic board",controls:()=>`<img class="circuit-img" src="${Vf()}" alt="Logic circuit">
      <div class="seg" style="margin:10px 0">${"ABCD".split("").map((t,n)=>`<button class="btn tog ${w.board.bits[n]?"on":""}" data-act="bt:${n}" ${w.board.solved?"disabled":""}>${t} = ${w.board.bits[n]}</button>`).join("")}
      <button class="btn big" data-act="btest" style="margin:0 0 0 8px" ${w.board.solved?"disabled":""}>TEST</button></div>
      <p class="note"><span class="kbd-hint">Keys 1\u20134 toggle A\u2013D, Enter tests. </span>A wrong TEST trips the security alarm (+0:30).</p>`,live:()=>w.board.solved?ps(`OUT = 1  \u2714
DISPLAY: ${vt.f3}   (fragment 3)`):ps(`OUT = ?   inputs ${w.board.bits.join(" ")}`),onAct:t=>{let[n,s]=t.split(":");w.board.solved||(n==="bt"&&(w.board.bits[s]^=1),n==="btest"&&(Mh(vt.circuitDef,w.board.bits)?(w.board.solved=!0,lt.good(),Ut(`FW-BOARD: OUT = 1 \u2014 the display shows "${vt.f3}".`,"good"),In("f3","Fragment 3",`FW-BOARD display: ${vt.f3}`)):(w.board.fails++,lt.bad(),lt.beep(880,.5,"square",.06,.1),Va(30,"FW-BOARD alarm: output 0"))))}},e.checklist={title:"Sync checklist (pinned to the wall)",controls:()=>`<div class="board" style="white-space:pre-wrap;font-size:16px">${Eh()}</div>`,onOpen:()=>In("checklist","Sync checklist",Eh())},e.sync={title:"Grid tie panel \xB7 breaker Q0",controls:()=>`<canvas id="syncCv" class="synccv" width="720" height="420"></canvas>
      ${!Et.closed&&!Et.islandOn?ps("ISLAND BUS DEAD \u2014 the lab cluster has no voltage. Energise it again in the booth (e.g. PV on INV-1).",!0):""}
      ${Et.closed?ps("Q0 CLOSED \u2014 the lab is connected to the grid \u2714"):Jt.permit?w.permitIn?ps("Permit card accepted \u2014 interlock released."):`${ps("Q0 INTERLOCKED \u2014 insert the operator's permit card.",!0)}<button class="btn on" data-act="permit">\u{1FAAA} Insert the permit card</button>`:ps("Q0 INTERLOCKED \u2014 no reconnection permit from the grid operator yet (gridctl).",!0)}
      <div class="ctl"><label>Island voltage</label><div class="seg">${[-5,-1,1,5].map(t=>`<button class="btn" data-act="sv:${t}">${t>0?"+":"\u2212"}${Math.abs(t)} V</button>`).join("")}</div></div>
      <div class="ctl"><label>Island frequency</label><div class="seg">${[-.1,-.01,.01,.1].map(t=>`<button class="btn" data-act="sf:${t}">${t>0?"+":"\u2212"}${Math.abs(t)} Hz</button>`).join("")}</div></div>
      <div class="ctl"><label>Incomer terminals</label><div class="seg"><button class="btn" data-act="swap">\u21C4 Swap L2 \u2194 L3</button></div><span class="note">jumper position ${Et.swapped===vt.swapped?"A (as found)":"B (L2 \u2194 L3 exchanged)"}</span></div>
      ${Et.closed?"":'<button class="btn big danger" data-act="sclose" style="margin-top:4px">CLOSE Q0 <span class="kbd-hint" style="font-size:12px">(Space)</span></button>'}`,anim:()=>{let t=St("syncCv");t&&Dh(t.getContext("2d"),t.width,t.height,Et)},onAct:t=>{let[n,s]=t.split(":");Et.closed||(n==="sv"&&(Et.isl.V=Math.max(200,Math.min(260,Et.isl.V+Number(s)))),n==="sf"&&(Et.isl.f=Math.round(Math.max(49,Math.min(51,Et.isl.f+Number(s)))*100)/100),n==="swap"&&(Et.swapped=!Et.swapped,lt.clack()),n==="permit"&&(w.inventory.includes("permit")?(Qf("permit"),w.permitIn=!0,lt.clack(),Ut("The interlock key turns \u2014 Q0 can now be closed.","good")):Ut("You have no permit card.","bad")),n==="sclose"&&O_())}},e.clock={title:"Wall clock",controls:()=>w.stage==="synced"||w.stage==="won"?"<p>It is ticking again \u2014 the 50 Hz are back. Somebody will have to set it right: it still lags by the length of the blackout.</p>":"<p>A mains-synchronous clock: its motor counts the 50 Hz of the grid. It stopped at <b>18:36:02</b> \u2014 the moment the grid went down.</p>",onOpen:()=>In("clock","Wall clock","Mains-synchronous clock, stopped at 18:36:02 when the grid went down.")},e.cabinet={say:()=>'Expense reports 2019\u20132023 and a folder marked "DO NOT OPEN \u2014 M.V.". It is empty.'},e.bin={say:()=>`Crumpled drafts. One says: "${vt.bands.join("-")}?? NO \u2014 the third band is the number of ZEROS. \u2014 M.V."`},e.boxes={say:()=>'Spare III-V test modules, still in their foam. The "THIS SIDE UP" arrows point down.'},e.papers={say:()=>"Test protocols for the PV rig. Somebody drew a cat in the margin."},e.cork={say:()=>"The duty rota, the guest Wi-Fi name, a lunch invite for 12:30. None of it opens anything. Probably."},e.exit={title:"Exit door",controls:()=>w.exitOpen?"<p>The door is open. Fresh air!</p>":"<p>The access control is dead: the building has no grid supply. Only the life-safety circuits run on the emergency generator.</p>"},e[i]}function Gf(){for(let i=0;i<9;i++)lt.beep(140+Math.random()*120,.09,"triangle",.05,i*.11)}function O_(){if(!Et.closed&&!Et.islandOn){lt.bad(),Ut("Q0 refuses: the island bus is dead \u2014 energise the lab cluster first.","bad");return}if(!Jt.permit||!w.permitIn){lt.bad(),Ut(Jt.permit?"Q0 is interlocked: insert the permit card first.":"Q0 is interlocked: no reconnection permit yet (gridctl).","bad");return}let i=Et.check();i.ok?(Et.closed=!0,lt.thunk(),lt.resolve(),oi("synced")):(Et.flash=wt.reduceFlashing?.3:1,Xh(.5),lt.clack(),lt.thunk(),Va(30,i.why))}function $a(i){let e=Je.panel(i);return e?{...e,lab:!0}:np(i)}function ip(i){let e=$a(i);e&&(Pi("panel"),w.panelId=i,w.panelVersion=-1,Je.panel(i)&&(w.busSeen=!0),He.panelTitle.textContent=e.title,He.panel.classList.remove("hidden"),e.onOpen?.(),eu(!0))}function eu(i=!1){if(!w.panelId)return;let e=$a(w.panelId),t=Je.version*1e3+w.pver;if(i||w.panelVersion!==t)w.panelVersion=t,He.panelBody.innerHTML=`<div id="panelLive">${e.live?e.live():""}</div>${e.controls()}`;else if(e.live){let n=St("panelLive");n&&(n.innerHTML=e.live())}}function ri(i){let e=$a(w.panelId);e&&(lt.click(),i.startsWith("usewheel")?w.inventory.includes("handwheel")?(Qf("handwheel"),Je.action("wheel:1")):Ut("You have nothing that fits the spindle.","bad"):e.lab?(Je.action(i),i==="pin:OK"&&Je.s.sun.unlocked&&Pn(ce.keypadTex,(t,n,s)=>Ma(t,n,s,!0))):e.onAct?.(i),w.pver++,eu(!0))}He.panelBody.addEventListener("click",i=>{let e=i.target.closest("[data-act]");!e||e.disabled||ri(e.dataset.act)});function Xr(i){if(!i)return;lt.init(),lt.click();let e=np(i)?.say;if(e){Ut(e());return}if(i==="pc"){w.termOpened=!0,Pi("terminal"),kn.open();return}i==="door"&&Je.s.door.state==="open"||ip(i)}var Gr=new ea;Gr.far=3.2;var k_=new Se(0,0);function B_(i,e){let t=new Se(i/innerWidth*2-1,-(e/innerHeight)*2+1);Gr.setFromCamera(t,Dt);let n=Gr.intersectObjects(Kh,!1)[0];n?.object.userData.id&&Xr(n.object.userData.id)}function tu(){Pi("grid"),Jt.open()}function Xa(){w.mode==="start"||w.mode==="end"||(w.returnTo=["terminal","grid"].includes(w.mode)?w.mode:w.returnTo,w.mode==="terminal"&&kn.close(),w.mode==="grid"&&Jt.close(),Pi("hint"),sp(),He.hint.classList.remove("hidden"))}function sp(){let i=N_(),e=w.hints.revealed[i.id]??0,t=[0,60,180];He.hint.querySelector(".hint-body").innerHTML=`
    ${i.tiers.slice(0,e).map((s,r)=>`<div class="hint-tier t${r}"><b>${["Nudge","Pointer","Solution"][r]}</b> ${s}</div>`).join("")||'<p class="note">Stuck? Reveal a hint for your current problem. Nudges are free; pointers and solutions cost time.</p>'}
    ${e<3?`<button class="btn ${e===2?"danger":""}" id="hintMore">${["Show a nudge (free)","Show a pointer (+1:00)","Show the solution (+3:00)"][e]}</button>`:""}`;let n=St("hintMore");n&&(n.onclick=()=>{w.hints.revealed[i.id]=e+1,w.hints.used++,t[e]&&Va(t[e],"hint"),sp()})}function nu(){if(w.mode==="start"||w.mode==="end")return;w.returnTo=["terminal","grid"].includes(w.mode)?w.mode:w.returnTo,w.mode==="terminal"&&kn.close(),w.mode==="grid"&&Jt.close(),Pi("journal");let i=Object.values(w.journal).sort((e,t)=>e.t-t.t);St("jBadge")?.classList.remove("new"),He.journal.querySelector(".journal-body").innerHTML=`
    <div class="kv"><span>Time</span><span>${Kn(rr())} (${Kn(w.time.penalty)} penalties)</span><span>Hints used</span><span>${w.hints.used}</span>
    <span>Inventory</span><span>${w.inventory.map(e=>Qh[e]).join(", ")||"\u2014"}</span></div>
    ${i.length?i.map(e=>`<div class="jentry"><b>${e.title}</b><div>${e.text.replace(/\n/g,"<br>")}</div></div>`).join(""):'<p class="note">Clues you read or hear are collected here automatically.</p>'}`,He.journal.classList.remove("hidden")}function or(i=!1){w.mode!=="end"&&(i||Pi("menu"),w.menuAt=performance.now(),He.menu.querySelector(".menu-actions").classList.toggle("hidden",i),He.menu.querySelector("h2").textContent=i?"Settings":"Menu",He.menu.querySelector("h3").classList.toggle("hidden",i),He.menu.querySelector(".settings-wrap").innerHTML=Pf(wt),If(He.menu,wt,Jf),He.menu.classList.remove("hidden"),He.menu.dataset.fromStart=i?"1":"")}He.menu.addEventListener("click",i=>{let e=i.target.closest("[data-menu]")?.dataset.menu;if(e){if(e==="resume"){if(He.menu.dataset.fromStart){He.menu.classList.add("hidden");return}lt.init(),ai()}e==="hint"&&(He.menu.classList.add("hidden"),Xa()),e==="journal"&&(He.menu.classList.add("hidden"),nu()),e==="restart"&&confirm("Restart this room from the beginning? Your progress will be lost.")&&(on.del(sr),location.search=dn?`?seed=${dn}&autostart=1`:"?autostart=1"),e==="title"&&(ar(),location.href=location.pathname)}});var z_={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",e:"KeyE",h:"KeyH",j:"KeyJ"," ":"Space",escape:"Escape",enter:"Enter",backspace:"Backspace",shift:"ShiftLeft",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"},rp=i=>i.code||z_[i.key?.toLowerCase()]||i.key,H_=i=>/^\d$/.test(i.key)?Number(i.key):/^(?:Digit|Numpad)(\d)$/.test(i.code)?Number(i.code.slice(-1)):null;addEventListener("keydown",i=>{let e=rp(i);if(!((i.target.tagName==="INPUT"||i.target.tagName==="SELECT")&&e!=="Escape")){if(w.mode==="start"&&e==="Escape"&&!He.menu.classList.contains("hidden")){He.menu.classList.add("hidden");return}if(!(w.mode==="start"||w.mode==="end")){if(e==="Escape"){if(w.mode==="menu"&&performance.now()-(w.menuAt||0)<200)return;if(w.mode==="grid"&&Jt.modalOpen()){Jt.$("gModal").classList.add("hidden");return}U_.includes(w.mode)?(i.preventDefault(),ai()):(w.mode==="paused"||w.mode==="play"&&!document.pointerLockElement)&&or();return}if(w.mode==="panel"){let t=w.panelId;if(e==="KeyE"&&!i.repeat){ai();return}let n=H_(i),s=e==="Enter"||e==="NumpadEnter";t==="sunsim"&&!Je.s.sun.unlocked&&(n!==null&&ri(`pin:${n}`),e==="Backspace"&&ri("pin:C"),s&&ri("pin:OK")),t==="drawer"&&!w.drawer.open&&(n!==null&&ri(`digit:${n}`),s&&ri("dopen")),t==="board"&&!w.board.solved&&(n>=1&&n<=4&&ri(`bt:${n-1}`),s&&ri("btest")),t==="sync"&&e==="Space"&&(i.preventDefault(),i.repeat||ri("sclose")),t==="door"&&s&&ri("door:open");return}if(e==="KeyH"&&["play","paused","hint"].includes(w.mode)){w.mode==="hint"?ai():Xa();return}if(e==="KeyJ"&&["play","paused","journal"].includes(w.mode)){w.mode==="journal"?ai():nu();return}w.mode==="play"&&(Mn[e]=!0,e==="Space"&&i.preventDefault(),e==="KeyE"&&!i.repeat&&Xr(w.target))}}});addEventListener("keyup",i=>{Mn[rp(i)]=!1});function op(i,e){let t=.0022*wt.sens;Ne.yaw-=i*t,Ne.pitch=Math.max(-1.45,Math.min(1.45,Ne.pitch-e*t*(wt.invertY?-1:1)))}addEventListener("mousemove",i=>{if(w.mode!=="play"||gn||document.pointerLockElement!==Ri||(Math.abs(i.movementX)>150||Math.abs(i.movementY)>150)&&performance.now()-ep<150)return;let t=n=>Math.max(-400,Math.min(400,n));op(t(i.movementX),t(i.movementY))});Ri.addEventListener("mousedown",i=>{w.mode==="play"&&!gn&&i.button===0&&Xr(w.target)});function Wf(i,e){let t=Ne.r,n=(s,r,o)=>r>s.minX-t&&r<s.maxX+t&&o>s.minZ-t&&o<s.maxZ+t;for(let s of L_)if(s.enabled!==!1&&n(s,i,e)&&!n(s,Ne.x,Ne.z))return!0;return!1}function V_(i){let e=0,t=0;w.mode==="play"&&((Mn.KeyW||Mn.ArrowUp)&&(e+=1),(Mn.KeyS||Mn.ArrowDown)&&(e-=1),(Mn.KeyD||Mn.ArrowRight)&&(t+=1),(Mn.KeyA||Mn.ArrowLeft)&&(t-=1),li.enabled&&(e+=li.move.y,t+=li.move.x));let n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let s=Mn.ShiftLeft||Mn.ShiftRight||Jh,r=s?5.2:3,o=Math.sin(Ne.yaw),a=Math.cos(Ne.yaw),l=(-o*e+a*t)*r,h=(-a*e-o*t)*r,c=1-Math.exp(-12*i);Ne.vx+=(l-Ne.vx)*c,Ne.vz+=(h-Ne.vz)*c;let u=Ne.vx*i,d=Ne.vz*i;Wf(Ne.x+u,Ne.z)?Ne.vx=0:Ne.x+=u,Wf(Ne.x,Ne.z+d)?Ne.vz=0:Ne.z+=d;let f=Math.hypot(Ne.vx,Ne.vz);f>.3&&(Ne.bob+=i*f*2.6,Ne.stepAcc+=f*i,Ne.stepAcc>(s?.8:.65)&&(Ne.stepAcc=0,lt.step()));let g=Kf()+(s&&f>3.5&&!wt.reducedMotion?6:0);Math.abs(Dt.fov-g)>.05&&(Dt.fov+=(g-Dt.fov)*Math.min(1,i*6),Dt.updateProjectionMatrix())}var kh=new Wn;function G_(i){let e=Je.s,t=Je.f,n=(s,r,o)=>s.on?s.ph<0?"no phase":e.trip[s.ph]?`${Vt[s.ph]} TRIPPED`:o?`${Vt[s.ph]} \xB7 ${r.toFixed(1)} kW`:"standby":"off";switch(i){case"inv_pv":return n(e.inv.pv,t.pv,t.pvAvail>0);case"inv_bat":return n(e.inv.bat,t.bat,e.inv.bat.ph>=0&&t.live[e.inv.bat.ph])+` \xB7 ${e.inv.bat.mode}`;case"inv_fc":return n(e.inv.fc,t.fc,t.fcAvail>0);case"battery":return`SOC ${(e.bat.soc*100).toFixed(0)} %`;case"h2tank":return e.h2.wheel?`${(e.h2.level*De.H2_KG*1e3).toFixed(0)} g \xB7 valve ${e.h2.valve?"open":"closed"}`:"handwheel missing";case"fuelcell":return e.fc.running?`running \xB7 ${t.fc.toFixed(1)} kW`:"stopped";case"electrolyzer":return e.elz.on?t.elz>0?"producing H\u2082":"no voltage":"off";case"sunsim":return e.sun.unlocked?e.sun.on?"lamps on":"unlocked":"locked";case"door":return{locked:Je.doorReady()?"READY":"locked",opening:"opening\u2026",open:"open"}[e.door.state];case"bus":return e.trip.some(Boolean)?"TRIP!":`${t.live.filter(Boolean).length}/3 phases live`;case"drawer":return w.drawer.open?w.drawer.taken?"empty":"open":"locked";case"board":return w.board.solved?"OUT = 1":"";case"sync":return Et.closed?"closed \u2714":w.permitIn?"armed":Jt.permit?"insert permit":"interlocked";case"exit":return w.exitOpen?"open":"locked";case"rec1":case"rec2":case"rec3":case"rec4":return w.heard[i]?"played":"new";default:return""}}function W_(){let i=w.target;if(w.target=null,w.mode==="play"){Gr.setFromCamera(k_,Dt);let t=Gr.intersectObjects(Kh,!1)[0],n=t?.object.userData.id;if(n&&!(n==="door"&&Je.s.door.state==="open"&&t.object===ce.door)&&!(n==="exit"&&w.exitOpen)){w.target=n;let s=G_(n);He.prompt.innerHTML=`<b>${li.enabled?"USE":"E"}</b> \xB7 ${t.object.userData.label}${s?` <span class="st">\xB7 ${s}</span>`:""}`,w.targetRoot=t.object.userData.root,kh.setFromObject(w.targetRoot),kh.expandByScalar(.02),ci.box.copy(kh)}}let e=Ci.select(w.target?[w.targetRoot]:[]);ci.visible=!!w.target&&!e,He.prompt.style.display=w.target?"block":"none",He.cross.classList.toggle("active",!!w.target),i!==w.target&&w.target&&lt.beep(2400,.015,"sine",.012)}var Bh=0,zh=0,rn=0,$_=[0,1,2,0],X_=ce.labLights.map(()=>({on:!1,flicker:0})),qh=Je.s.door.state;function q_(i){let e=Je.s,t=Je.f;rn+=i;let n=w.stage==="synced"||w.stage==="won",s=(y,R,I)=>y+(R-y)*Math.min(1,i*I);ce.sunLampMat.emissiveIntensity=s(ce.sunLampMat.emissiveIntensity,e.sun.on?3:.05,3),ce.sunLight.intensity=s(ce.sunLight.intensity,e.sun.on?18:0,3),ce.sunCone.opacity=s(ce.sunCone.opacity,e.sun.on?.1:0,3);let r=wt.reduceFlashing,o=w.cold??99;o<99&&(w.cold=o+i,o<1.2&&w.cold>=1.2&&(w.boltT=0,w.thunderIn=.35,w.thunderKm=1.2,Xh(.4)),o<2.4&&w.cold>=2.4&&lt.clack(),o<3.2&&w.cold>=3.2&&za("18:36:02 \u2014 the grid is gone.",4),w.cold>12&&(w.cold=99));let a=[[.07,1],[.18,0],[.06,1],[.3,0]],l=(y,R)=>{if(R&&!y.on&&(y.t=0,y.step=-1),y.on=R,!R)return 0;if(y.t=(y.t??9)+i,r)return 1;let I=0;for(let F=0;F<a.length;F++)if(I+=a[F][0],y.t<I)return a[F][1]&&y.step!==F&&(y.step=F,lt.tink()),a[F][1];return 1},h=0;ce.labLights.forEach((y,R)=>{let I;o<1.2?I=1:o<1.6?I=!r&&o>1.32&&o<1.42?1:0:I=l(X_[R],n||t.live[$_[R]]),y.light.intensity=I?s(y.light.intensity,7,25):s(y.light.intensity,0,30),y.mat.emissiveIntensity=I?1.6:.05,I&&h++}),w.syncT!==void 0&&(w.syncT+=i),ce.ctrlLights.forEach((y,R)=>{let I=n&&(w.syncT===void 0||w.syncT>.9+R*.8),F=l(y,I);y.light.intensity=F?s(y.light.intensity,3.2,20):0,y.mat.emissiveIntensity=F?1.2:.05}),n&&Math.floor(rn)!==w.clockSec&&(w.clockSec=Math.floor(rn),ce.setClocks(ce.CLOCK_STOPPED+(w.syncT??0)));let c=qf-rr()<0;ce.emergency.forEach((y,R)=>{!r&&Math.random()<.0015&&(y.userData.stutter=.12),y.userData.stutter=Math.max(0,(y.userData.stutter||0)-i);let I=o<2.4+R*.12;y.intensity=I?0:y.userData.stutter>0?.8:c?Math.sin(rn*7+R)>.6?.5:1.3:2.6}),ce.hemi.intensity=s(ce.hemi.intensity,.08+.35*(h/4)+(n?.3:0),3),Sn.environmentIntensity=s(Sn.environmentIntensity,.04+.18*(h/4)+(n?.12:0),3);let u=ce.outside.u,d=u.uEve.value;!n&&w.mode!=="start"&&(w.boltIn=(w.boltIn??5)-i,w.boltIn<=0&&(w.boltIn=7+Math.random()*16,w.boltT=0,ce.outside.strike(),w.thunderKm=2+Math.random()*6,w.thunderIn=w.thunderKm*1e3/343)),w.boltT!==void 0&&(w.boltT+=i);let f=w.boltT??99,g=(y,R)=>f<y?0:R*Math.exp(-(f-y)/.08),v=f>3?0:r?.3*Math.min(1,f/.15)*Math.exp(-f/.5):Math.min(1,g(0,1)+g(.24,.6));w.thunderIn>0&&(w.thunderIn-=i)<=0&&lt.thunder(Math.min(1,2.6/w.thunderKm)*(Ne.z>-5?.6:1),w.thunderKm),ce.outside.update(i,v),ce.dropMat.opacity=Math.min(1,u.uRain.value*1.4),ce.rainMat.opacity=u.uRain.value,ce.rainTex.offset.y=(ce.rainTex.offset.y+i*.03)%1;let p=ce.ctrlLights[0].light.intensity/3.2;u.uRoom.value.setRGB(.012+.08*p,.016+.07*p,.02+.06*p);let m=d*5,S=v*3.5;ce.windowLight.intensity=m+S,m+S>0&&ce.windowLight.color.setRGB((1*m+.75*S)/(m+S),(.6*m+.82*S)/(m+S),(.3*m+1*S)/(m+S)),ce.skyLight.intensity=d*7,w.syncT>3&&!w.shadowRedone&&(w.shadowRedone=!0,ce.windowLight.shadow.needsUpdate=!0);let _=(w.catEye=Math.max(0,(w.catEye||0)-i))>0;ce.cat.eyeOpen.visible=_,ce.cat.lids.forEach(y=>{y.visible=!_}),w.catLift=s(w.catLift||0,_?1:0,4),ce.cat.lift(w.catLift);for(let[y,R]of[[ce.dustSun,e.sun.on?.7:0],[ce.dustBeam,d*.8]]){if(y.material.opacity=s(y.material.opacity,R,2),y.material.opacity<.01)continue;let I=y.geometry.attributes.position.array,F=y.userData.box,H=y.userData.seed;for(let Y=0;Y<I.length;Y+=3)I[Y]+=Math.sin(rn*.25+Y*.37+H)*.012*i,I[Y+1]-=(.012+Y%11*.002)*i,I[Y+2]+=Math.cos(rn*.21+Y*.29+H)*.012*i,I[Y+1]<F[2]&&(I[Y+1]=F[3]);y.geometry.attributes.position.needsUpdate=!0}ce.busbars.forEach((y,R)=>{y.material.emissive.set(e.trip[R]?Math.sin(rn*10)>0?"#ff0000":"#330000":Ai[R]),y.material.emissiveIntensity=e.trip[R]?1.5:.05+Math.min(3,t.load[R]*.6)}),ce.breakers.forEach((y,R)=>{y.position.y=e.trip[R]?.5:.6,y.material.color.set(e.trip[R]?13639712:2763306)});let x=(y,R)=>{y.material.emissive.set({off:"#111",idle:"#ffa020",run:"#20ff60",fault:"#ff2020"}[R]),y.material.emissiveIntensity=R==="off"?0:R==="fault"&&Math.sin(rn*8)<0?.2:2},A=(y,R)=>y.on?y.ph>=0&&e.trip[y.ph]?"fault":R?"run":"idle":"off";x(ce.invLeds.inv_pv,A(e.inv.pv,t.pvAvail>0&&e.inv.pv.ph>=0)),x(ce.invLeds.inv_bat,A(e.inv.bat,e.inv.bat.ph>=0&&t.live[e.inv.bat.ph])),x(ce.invLeds.inv_fc,A(e.inv.fc,t.fcAvail>0&&e.inv.fc.ph>=0));let M=Math.ceil(e.bat.soc*10-.001);ce.socLeds.forEach((y,R)=>{let I=R<M||t.bat<0&&R===M&&Math.sin(rn*6)>0;y.material.emissive.set(I?e.bat.soc<.25?"#ff3020":e.bat.soc<.5?"#ffb020":"#20ff60":"#111"),y.material.emissiveIntensity=I?1.8:0}),ce.elzGlow.material.emissiveIntensity=t.elz>0?1.5+Math.sin(rn*5)*.8:.05,ce.fcGlow.material.emissiveIntensity=t.fc>0?2:e.fc.running?.6:.05,ce.h2Bar.scale.y=Math.max(.001,e.h2.level),ce.valve.visible=e.h2.wheel,ce.valveTag.visible=!e.h2.wheel,ce.valve.rotation.z=s(ce.valve.rotation.z,e.h2.valve?Math.PI*1.5:0,4);let T=Math.sin(rn*1.9);ce.cat.body.scale.set(1+T*.012,1+T*.035,1),ce.cat.tail.rotation.x=Math.sin(rn*.55)*.1+Math.sin(rn*1.7)*.025,Math.random()<i*.12&&(w.earFlick={ear:Math.random()<.5?0:1,t:.35}),ce.cat.ears.forEach((y,R)=>{y.rotation.x=-.25+(w.earFlick&&w.earFlick.ear===R?Math.sin((.35-w.earFlick.t)*36)*.35*(w.earFlick.t/.35):0)}),w.earFlick&&(w.earFlick.t-=i)<=0&&(w.earFlick=null);let L=e.door.state==="open"?1.65:e.door.state==="opening"?1.65*Math.min(1,e.door.t/De.DOOR_T):0;ce.door.position.x=s(ce.door.position.x,L,4),ce.doorCollider.enabled=ce.door.position.x<1.35,ce.doorLed.material.emissive.set(e.door.state==="open"?"#20ff60":e.door.state==="opening"?Math.sin(rn*12)>0?"#ffb020":"#ff2020":Je.doorReady()?"#ffb020":"#ff2020"),qh!=="open"&&e.door.state==="open"&&Xh(.35),qh=e.door.state,ce.exitDoor.position.z=s(ce.exitDoor.position.z,w.exitOpen?-6.4:-8,1.2),ce.exitCollider.enabled=ce.exitDoor.position.z<-6.7,ce.exitLed.material.emissive.set(w.exitOpen?"#20ff60":"#ff2020"),ce.drawer.position.z=s(ce.drawer.position.z,w.drawer.open?4.15:4.55,5),ce.drawerWheel.visible=!w.drawer.taken;for(let[y,R]of Object.entries(ce.recorders))R.material.emissive.set(w.heard[y]?"#20ff60":"#ff2020"),R.material.emissiveIntensity=w.heard[y]?.6:Math.sin(rn*4)>0?2:.2;ce.boardToggles.forEach((y,R)=>{y.rotation.x=w.board.bits[R]?-.5:.5}),ce.boardLed.material.emissive.set(w.board.solved?"#20ff60":"#330000"),ce.diagLeds.forEach((y,R)=>{let I=w.diag&&vt.binStr[R]==="1";y.material.emissive.set(I?"#ff3020":"#200505"),y.material.emissiveIntensity=I?2.2:1}),ce.rackLeds.forEach((y,R)=>{y.material.emissiveIntensity=Math.sin(rn*(3+R*.7)+R)>.2?1.5:.1});let b=Et.lamps();ce.syncLamps.forEach((y,R)=>{y.material.emissive.set("#ffb060"),y.material.emissiveIntensity=.05+b[R]*3}),ce.syncHandle.rotation.x=Et.closed?.6:0,zh-=i,Ne.z<-5&&zh<=0&&Math.hypot(Ne.x-4.6,Ne.z+10.6)<7&&(zh=.1,Pn(ce.syncTex,(y,R,I)=>Dh(y,R,I,Et,{compact:!0}))),Bh-=i,Bh<=0&&(Bh=.25,Y_())}var tr={};function Y_(){let i=Je.s,e=Je.f,t=JSON.stringify([i.door.state,e.head.map(o=>o.toFixed(1)),i.door.t.toFixed(1),wt.palette]);tr.door!==t&&(tr.door=t,Pn(ce.doorScreenTex,(o,a)=>{o.fillStyle="#061009",o.fillRect(0,0,a,320),o.font=`bold 26px ${Xe.mono}`,o.textAlign="center";let l=Je.doorReady();o.fillStyle=i.door.state==="open"?"#3eff7a":l?"#ffd24a":"#ff4a4a",o.fillText(i.door.state==="open"?"OPEN":i.door.state==="opening"?"OPENING":l?"READY":"LOCKED",a/2,36),o.font=`17px ${Xe.mono}`,o.fillStyle="#7fbf8f",o.fillText(`drive: ${De.DOOR_P} kW / phase`,a/2,64),Vt.forEach((h,c)=>{let u=100+c*56;o.textAlign="left",o.fillStyle=Ai[c],o.font=`bold 22px ${Xe.mono}`,o.fillText(h,14,u+16),o.fillStyle="#1a2a1e",o.fillRect(60,u,180,22),o.fillStyle=e.head[c]>=De.DOOR_P?"#3eff7a":"#ff9a4a",o.fillRect(60,u,180*Math.max(0,Math.min(1,e.head[c]/6)),22),o.fillStyle="#fff",o.fillRect(60+180*De.DOOR_P/6,u-3,2,28),o.fillStyle="#cfe",o.font=`15px ${Xe.mono}`,o.fillText(`${e.head[c].toFixed(1)} kW ${e.head[c]>=De.DOOR_P?"\u2714":""}`,64,u+42)}),o.textAlign="center",o.fillStyle="#ffd24a",o.font=`18px ${Xe.mono}`,i.door.state==="opening"&&o.fillText(`${i.door.t.toFixed(1)} / ${De.DOOR_T} s`,a/2,300)}));let n=Math.sin(rn*4)>0,s=w.stage+n;tr.pc!==s&&(tr.pc=s,Pn(ce.pcScreenTex,o=>{o.fillStyle="#020c05",o.fillRect(0,0,512,320),o.fillStyle="#5dff8f",o.font=`20px ${Xe.mono}`,o.textAlign="left";let a=w.stage==="won"||w.stage==="synced"?["gridctl \u25B8 connected","","Q0: CLOSED","EXIT: UNLOCKED \u2714"]:w.stage==="permit"?["gridctl \u25B8 schedule OK","","reconnection permit \u2714","sync at tie panel Q0"]:["labctl-01 login:","","Solar Test Laboratory","running on UPS","",w.stage==="root"?"# root session active":"grid reconnection: root required"];a.forEach((l,h)=>o.fillText(l,24,40+h*30)),n&&o.fillRect(24+o.measureText(a[0]).width+8,24,11,20)}));let r=JSON.stringify([e.pv.toFixed(1),(i.bat.soc*100).toFixed(0),(i.h2.level*100).toFixed(0),i.fc.running,w.stage,e.load.map(o=>o.toFixed(1)),wt.palette]);tr.wall!==r&&(tr.wall=r,Pn(ce.wallScreenTex,o=>{o.fillStyle="#07111c",o.fillRect(0,0,768,400),o.fillStyle="#ffd24a",o.font=`bold 34px ${Xe.sans}`,o.textAlign="left",o.fillText("SOLAR TEST LAB \xB7 GRID STATUS",30,52),o.font=`24px ${Xe.mono}`;let a=w.stage==="synced"||w.stage==="won";[["Public grid",a?"CONNECTED \u2714":w.stage==="permit"?"LIVE at incomer \xB7 site OFF":"LOST (storm)"],["PV (test rig)",`${e.pv.toFixed(2)} kW`],["Battery",`${(i.bat.soc*100).toFixed(0)} % SOC`],["H\u2082 tank",`${(i.h2.level*De.H2_KG*1e3).toFixed(0)} g`],["Fuel cell",i.fc.running?"RUNNING":"STOPPED"],["Reconnection",a?"DONE":w.stage==="permit"?"PERMIT \u2714 \u2014 sync Q0":"root required"]].forEach(([h,c],u)=>{o.fillStyle="#9fb0c0",o.fillText(h,30,105+u*44),o.fillStyle=a||u?"#5dff8f":"#ff6b77",o.fillText(c,300,105+u*44)}),Vt.forEach((h,c)=>{let u=Math.min(200,e.load[c]*35);o.fillStyle=Ai[c],o.fillRect(600+c*50,330-u,40,u+2),o.fillText(h,602+c*50,370)})}))}function Z_(){let i=Je.s,e=Je.f;He.objective.innerHTML=`<span class="lbl">Objective</span>${D_()}`;let t=w.stage==="lab"&&w.busSeen;He.busHud.style.display=t?"":"none",t&&(He.busHud.innerHTML='<div style="color:#ffd24a;margin-bottom:4px">MAIN BUS \xB7 headroom</div>'+Vt.map((s,r)=>`<div class="row"><span style="color:${Ai[r]}">${s}${i.trip[r]?' <span class="bad">TRIP</span>':e.live[r]?"":' <span style="color:#778">dead</span>'}</span><span>${e.live[r]?e.head[r].toFixed(2)+" kW":"\u2014"} ${e.head[r]>=De.DOOR_P?"\u2714":""}</span></div>
        <div class="bar"><i style="width:${Math.max(0,Math.min(100,e.head[r]/6*100))}%;background:${e.head[r]>=De.DOOR_P?"#3ecf7a":Ai[r]}"></i><span class="mark" style="left:50%"></span></div>`).join("")+`<div class="row"><span>Battery</span><span>${(i.bat.soc*100).toFixed(0)} %</span></div><div class="row"><span>H\u2082 tank</span><span>${(i.h2.level*De.H2_KG*1e3).toFixed(0)} g</span></div>`);let n=qf-rr();He.timer.innerHTML=`\u23F1 ${n>=0?Kn(n):'<span class="bad">'+Kn(n)+"</span>"} <span class="sub">${w.stage==="synced"||w.stage==="won"?"grid restored":n>=0?"emergency light":"overtime"}</span>`}function K_(i){let e=Je.s,t=Je.f,n=w.stage==="synced"||w.stage==="won",s=Ne.z>-5?1:Ne.x>5&&w.exitOpen?.2:.55;lt.update(Dt,{rain:w.mode==="start"?.4:ce.outside.u.uRain.value,inside:w.outro?0:s,purr:1,drone:!n&&w.mode!=="start"&&(w.cold??99)>3?1:0,evening:ce.outside.u.uEve.value,hum:(w.cold??99)<1.2?1:Math.min(1,t.load.reduce((r,o)=>r+o,0)/9)+(n?.5:0),fan:t.fc>0?1:e.fc.running?.4:0,bubbles:t.elz>0?1:0,ballast:e.sun.on?1:0,motor:e.door.state==="opening"?1:Math.abs(ce.exitDoor.position.z-(w.exitOpen?-6.4:-8))>.05?.8:0},i)}function ar(){w.mode==="start"||w.stage==="won"||w.noSave||on.set(sr,{v:2,seed:dn,stage:w.stage,at:Date.now(),player:{x:Ne.x,z:Ne.z,yaw:Ne.yaw,pitch:Ne.pitch},sim:Je.s,term:kn.serialize(),grid:Jt.serialize(),sync:Et.serialize(),G:{inventory:w.inventory,journal:w.journal,heard:w.heard,hints:w.hints,time:w.time,drawer:w.drawer,board:w.board,diag:w.diag,f2seen:w.f2seen,exitOpen:w.exitOpen,catPets:w.catPets,termOpened:w.termOpened,gridResult:w.gridResult,permitIn:w.permitIn,busSeen:w.busSeen}})}function ap(i){if(Object.assign(Je.s,JSON.parse(JSON.stringify(i.sim))),Je.s.door.state==="opening"&&(Je.s.door.state="locked",Je.s.door.t=0),Je.version++,Je.f=Je.compute(),qh=Je.s.door.state,Ha=Je.s.door.state==="open",Object.assign(Ne,i.player),kn.restore(i.term),Jt.restore(i.grid),Et.restore(i.sync),Object.assign(w,i.G),w.stage=i.stage,Je.s.sun.unlocked&&Pn(ce.keypadTex,(e,t,n)=>Ma(e,t,n,!0)),ce.door.position.x=Je.s.door.state==="open"?1.65:0,ce.exitDoor.position.z=w.exitOpen?-6.4:-8,ce.drawer.position.z=w.drawer.open?4.15:4.55,tp(),w.stage==="permit"){for(let e of["restored","evening"])for(let t of ce.outside.prepare(e))Gt.initTexture(t);ce.outside.setMode("restored",!0)}(w.stage==="synced"||w.stage==="won")&&(ce.outside.setMode("evening",!0),w.syncT=99),ce.windowLight.shadow.needsUpdate=!0,Ga()}addEventListener("pagehide",ar);function J_(){let i=on.get($h)||{},e=Yf(),t=c=>{let u=on.get(ka(c));return u&&u.stage!=="won"?u:null},n=t(0),s=t(e),r=(c,u)=>c?`<button class="btn big" data-start="${u}">Continue ${u==="cont-classic"?"classic":"daily"} <span class="small">(${Kn(c.G.time.elapsed+c.G.time.penalty)})</span></button>`:"",o=St("startCard"),a=on.get(Yh)||[],l=0;for(let c=new Date,u=0;u<400;u++,c.setDate(c.getDate()-1)){let d=c.getFullYear()*1e4+(c.getMonth()+1)*100+c.getDate();if(i[d])l++;else if(u>0)break}let h=Object.entries(i).sort((c,u)=>c[0]==="0"?-1:u[0]==="0"?1:u[0]-c[0]).slice(0,4);o.innerHTML=`<h1>${pa.title}</h1>
    <p class="lead">${pa.lead}</p>
    <div class="controls-help">${gn?"<div>Left thumb: move</div><div>Right thumb: look</div><div>Tap an object / USE: interact</div><div>\u{1F4A1} hints \xB7 \u{1F4D3} journal</div>":"<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move \xB7 <kbd>Shift</kbd> run</div><div><kbd>Mouse</kbd> look</div><div><kbd>E</kbd>/<kbd>Click</kbd> use</div><div><kbd>H</kbd> hint</div><div><kbd>J</kbd> journal</div><div><kbd>Esc</kbd> menu</div>"}</div>
    <div class="start-btns">
      ${r(n,"cont-classic")}${r(s,"cont-daily")}
      <button class="btn big ${n||s?"alt":""}" data-start="classic">New game \xB7 Classic room</button>
      <button class="btn big alt" data-start="daily">${s?"Restart":"Play"} daily room \xB7 ${String(e).slice(6)}.${String(e).slice(4,6)}.</button>
      <button class="btn" data-start="settings">\u2699 Settings</button>
    </div>
    ${h.length?`<p class="note">Best: ${h.map(([c,u])=>`${c==="0"?"Classic":"Daily "+String(c).slice(6)+"."+String(c).slice(4,6)+"."} ${Kn(u.time)} (${u.rank})`).join(" \xB7 ")}${l>1?` \xB7 \u{1F525} daily streak ${l}`:""}</p>`:""}
    ${a.length?`<p class="note trophies">\u{1F3C6} ${a.length}/${lp.length}: ${a.join(" \xB7 ")}</p>`:""}
    <p class="note">Every code in a daily room is different. Progress is saved automatically in this browser.</p>`,o.querySelectorAll("[data-start]").forEach(c=>c.addEventListener("click",()=>{let u=c.dataset.start;if(lt.init(),u==="settings"){or(!0);return}if(u==="cont-classic"||u==="cont-daily"){let f=u==="cont-daily"?e:0;if(f!==dn){location.search=f?`?seed=${f}&continue=1`:"?continue=1";return}ap(on.get(sr)),$f(!1);return}let d=u==="daily"?e:0;if(!((d?s:n)&&!confirm("Start this room over? The run in progress will be lost."))){if(on.del(ka(d)),d!==dn){location.search=d?`?seed=${d}&autostart=1`:"?autostart=1";return}$f(!0)}})),He.start.classList.remove("hidden")}function $f(i){He.start.classList.add("hidden"),He.hud.classList.remove("hidden"),w.mode="paused",i&&cp(),li.enable(gn),gn?$r():Wa(),lt.init(),Ut(i&&dn?`Daily room ${dn}: every code is different today.`:"Welcome back."),Ga()}var Yh="ple-achievements",lp=["No hints","No breaker trips","Grid wizard (3\u2605)","Under 30 minutes","Cat person","Heard every memo","Clean logic"];function cp(){w.coldPending=!0,In("brief","Briefing",pa.body.replace(/<br>/g,`
`))}function j_(){w.outro={t:0,x0:Ne.x,z0:Ne.z,yaw0:Ne.yaw,pitch0:Ne.pitch,bells:!1},w.mode="outro",document.pointerLockElement&&document.exitPointerLock(),Wr(),He.hud.classList.add("hidden"),He.prompt.style.display="none",ci.visible=!1,Ci.select([]),nr.length=0,jh(),ir.classList.remove("show")}function Q_(i){let e=w.outro;e.t+=i;let t=(o,a)=>{let l=Math.max(0,Math.min(1,(e.t-o)/(a-o)));return l*l*(3-2*l)},n=t(0,3),s=t(2.8,7.2);Ne.x=e.x0+(10.4-e.x0)*n+.3*s,Ne.z=e.z0+(-8-e.z0)*n;let r=(-Math.PI/2-e.yaw0+Math.PI*3)%(Math.PI*2)-Math.PI;Ne.yaw=e.yaw0+r*Math.min(1,n*1.6)+(.24+Math.PI/2)*s,Ne.pitch=e.pitch0+(.03-e.pitch0)*n,hi.visible=Dt.position.x>8.93,!e.bells&&e.t>3.4&&(e.bells=!0,[0,2.1,4.2,6.3].forEach((o,a)=>lt.bell(a%2?110:98,o,.045))),e.t>9.5&&!e.faded&&(e.faded=!0,Ba.classList.add("on")),e.t>11&&!e.done&&(e.done=!0,hp(),setTimeout(()=>Ba.classList.remove("on"),300))}function hp(){oi("won"),Pi("end");let i=rr(),e=cf.find(([h])=>i/60<h)[1],t=on.get($h)||{},n=String(dn),s=!w.noSave&&(!t[n]||i<t[n].time);s&&(t[n]={time:i,rank:e},on.set($h,t)),on.del(sr);let r=w.gridResult,o=[[w.hints.used===0,"No hints"],[Je.s.stats.trips===0,"No breaker trips"],[r?.stars===3,"Grid wizard (3\u2605)"],[i<30*60,"Under 30 minutes"],[w.catPets>0,"Cat person"],[Object.keys(w.heard).length===4,"Heard every memo"],[w.board.fails===0,"Clean logic"]];w.noSave||on.set(Yh,lp.filter(h=>(on.get(Yh)||[]).includes(h)||o.some(([c,u])=>c&&u===h)));let a=Object.entries(w.time.splits).filter(([h])=>Hf[h]).map(([h,c])=>`<span>${Hf[h]}</span><span>${Kn(c)}</span>`).join(""),l=`\u26A1 Power Lab Escape \xB7 ${dn?"Daily "+dn:"Classic"} \xB7 ${Kn(i)} \xB7 ${w.hints.used} hints \xB7 grid ${r?"\u2605".repeat(r.stars):"\u2013"} \xB7 "${e}"`;St("endCard").innerHTML=`<h1>\u{1F307} YOU ESCAPED</h1>
    <p class="lead">Evening. The storm has passed, the sun is going down behind the Dom, and the lab hums on the grid again. Rank: <b>${e}</b>${s?" \xB7 new personal best!":""}</p>
    <div class="res">${a}<span class="tot">Total (incl. ${Kn(w.time.penalty)} penalties)</span><span class="tot">${Kn(i)}</span>
      <span>Hints used</span><span>${w.hints.used}</span><span>Breaker trips</span><span>${Je.s.stats.trips}</span>
      ${r?`<span>Dispatch score</span><span>${"\u2605".repeat(r.stars)}${"\u2606".repeat(3-r.stars)} ${(r.ratio*100).toFixed(0)} %</span>`:""}</div>
    <div class="ach">${o.map(([h,c])=>`<span class="${h?"got":""}">${h?"\u{1F3C6}":"\xB7"} ${c}</span>`).join("")}</div>
    <div class="start-btns">
      <button class="btn big" id="shareBtn">Copy result</button>
      <button class="btn big alt" id="dailyBtn">Play the daily room</button>
      <button class="btn" id="againBtn">Play classic again</button>
      <button class="btn" id="keepBtn">Keep exploring</button>
    </div>`,He.end.classList.remove("hidden"),lt.fanfare(),St("shareBtn").onclick=()=>{navigator.clipboard?.writeText(l).then(()=>Ut("Result copied!","good"),()=>Ut(l))},St("dailyBtn").onclick=()=>{location.search=`?seed=${Yf()}&autostart=1`},St("againBtn").onclick=()=>{location.search="?autostart=1"},St("keepBtn").onclick=()=>{He.end.classList.add("hidden"),He.hud.classList.remove("hidden"),hi.visible=!1,Object.assign(Ne,{x:7.2,z:-8,yaw:Math.PI/2}),w.outro=null,w.mode="paused",ai()}}function e1(i){if(wt.quality!=="auto"||document.hidden||i>.25||w.mode==="grid"||w.mode==="start"||(Nt.ema+=(i*1e3-Nt.ema)*.06,(Nt.t+=i)<1))return;Nt.t=0;let e=Nt.scale;Nt.ema>20.5?(Nt.scale>.55?Nt.scale=Math.max(.55,Nt.scale-.15):Ci.aoOff=!0,Nt.good=0):Nt.ema<17.8?++Nt.good>=4&&Nt.scale<1&&(Nt.scale=Math.min(1,Nt.scale+.1),Nt.good=0):Nt.good=0,Nt.scale!==e&&(Gt.setPixelRatio(Zh()*Nt.scale),Ci.setSize(innerWidth,innerHeight))}var Xf=performance.now(),Hh=0,Vh=5,Ha=Je.s.door.state==="open";function up(i){let e=(i-Xf)/1e3,t=Math.min(.1,e);Xf=i,e1(e),["play","panel","terminal","grid","hint","journal"].includes(w.mode)&&(Je.tick(t),Et.islandOn=Je.s.grid||Je.f.live.some(Boolean),Et.tick(t),w.stage!=="won"&&(w.time.elapsed+=t));for(let o of Je.events.splice(0))w.stage!=="lab"&&Ne.z<-5||(Ut(o.msg,o.kind),o.sfx?lt[o.sfx]?.():o.kind==="bad"?lt.bad():o.kind==="good"&&lt.good());if(Je.s.door.state==="open"&&!Ha&&(Ha=!0,oi("control"),Ut("The booth door slides open. On to the control room!","good")),w.board.solved&&!w.boardDrawn&&(w.boardDrawn=!0,Pn(ce.boardSegTex,(o,a,l)=>Ih(o,a,l,vt.f3,!0))),(w.mode==="play"||w.mode==="paused")&&V_(t),w.stage==="synced"&&w.mode==="play"){let o=ce.exitTrigger;Ne.x>o.minX&&Ne.x<o.maxX&&Ne.z>o.minZ&&Ne.z<o.maxZ&&j_()}(w.mode==="outro"||w.outro&&!w.outro.done)&&Q_(t);let s=wt.reducedMotion?0:Math.sin(Ne.bob)*.03*Math.min(1,Math.hypot(Ne.vx,Ne.vz)/3);w.shake=Math.max(0,w.shake-t);let r=w.shake>0?Math.sin(w.shake*45)*w.shake*.09:0;Dt.position.set(Ne.x+w.shakeDir.x*r,Ne.eye+s+w.shakeDir.y*r,Ne.z+w.shakeDir.z*r),Dt.rotation.set(Ne.pitch,Ne.yaw,0),w.mode==="start"&&(Dt.position.set(Math.sin(i/9e3)*2,1.9,2.8),Dt.rotation.set(-.12,Math.sin(i/9e3)*.5,0)),W_(),q_(t),K_(t),w.mode==="panel"&&$a(w.panelId)?.anim?.(t),Hh-=t,Hh<=0&&(Hh=.2,Z_(),w.mode==="panel"&&eu()),Vr>0&&(Vr-=t,Vr<=0&&jh()),Vh-=t,Vh<=0&&(Vh=5,ar()),Zf.update(Dt.position),w.mode!=="grid"&&Ci.render(t,hi.visible||["panel","terminal","journal","hint","menu"].includes(w.mode)),requestAnimationFrame(up)}requestAnimationFrame(up);function Gh(){He.start.classList.add("hidden"),He.hud.classList.remove("hidden"),w.mode="paused",li.enable(gn),He.resume.classList.remove("hidden")}He.resume.textContent=gn?"\u25B6 Tap to play":"\u25B6 Click to play";var Wh=on.get(sr),Fa=Oa.get("skip");if(Fa){w.noSave=!0;let i=Je.s;Object.assign(i.sun,{unlocked:!0,on:!0}),i.door.state="open",Ha=!0,ce.door.position.x=1.65,oi("control"),Ne.z=-7,Ne.yaw=0,Gh(),Fa==="terminal"&&(Pi("terminal"),kn.open()),Fa==="grid"&&(kn.stack.push({user:"root",cwd:"/root"}),oi("root"),tu()),Fa==="sync"&&(oi("root"),Jt.permit=!0,oi("permit"),Ne.x=3.6,Ne.z=-10.6,Ne.yaw=-Math.PI/2)}else Oa.get("continue")&&Wh&&(Wh.seed||0)===dn?(ap(Wh),Gh(),Ut("Welcome back.")):Oa.get("autostart")?(on.del(sr),Gh(),cp(),dn&&Ut(`Daily room ${dn}: every code is different today.`)):J_();window.__game={player:Ne,sim:Je,G:w,P:vt,interact:Xr,terminal:kn,grid:Jt,sync:Et,refs:ce,openPanel:ip,setStage:oi,win:hp,save:ar,postfx:Ci,renderer:Gt,perf:Nt,lightPool:Zf};St("loading")?.remove();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

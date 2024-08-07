import type { Config } from "tailwindcss/types/config";
import { backdropFilter } from "./customPlugins/backdropFilter";
import { borderSpacing } from "./customPlugins/borderSpacing";
import { boxShadow } from "./customPlugins/boxShadow";
import { contain } from "./customPlugins/contain";
import { filter } from "./customPlugins/filter";
import { fontVariantNumeric } from "./customPlugins/fontVariantNumeric";
import { gradientColorStops } from "./customPlugins/gradientColorStops";
import { preflight } from "./customPlugins/preflight";
import { ringWidth } from "./customPlugins/ringWidth";
import { scrollSnapType } from "./customPlugins/scrollSnapType";
import { touchAction } from "./customPlugins/touchAction";
import { transform } from "./customPlugins/transform";
// https://tailwindcss.com/docs
export const preset: Config = {
  content: [],
  separator: "_", // 3.4.4开始Tailwind CSS IntelliSense插件支持 `_` 分隔符
  corePlugins: {
    preflight: false, // 不支持 `*` 选择器等不兼容的基础样式
    container: false, //  不符合小程序的设计规范,如需要使用可自定义的媒体查询
    placeholderColor: false, // 不支持::placeholder选择器,小程序中使用placeholder-class代替
    placeholderOpacity: false, // 不支持::placeholder选择器,小程序中使用placeholder-class代替
    divideColor: false, //   不支持 :not 选择器
    divideOpacity: false, //   不支持 :not 选择器
    divideStyle: false, //   不支持 :not 选择器
    divideWidth: false, //   不支持 :not 选择器
    backdropFilter: false, // 不支持 `*` 选择器,通过 backdropFilterPlugin 重新定义
    filter: false, // 不支持 `*` 选择器,通过 filterPlugin 重新定义
    ringWidth: false, // 不支持 `*` 选择器,通过 ringWidthPlugin 重新定义
    boxShadow: false, // 不支持 `*` 选择器,通过 boxShadowPlugin 重新定义
    fontVariantNumeric: false, // 不支持 `*` 选择器,通过 fontVariantNumericPlugin 重新定义
    gradientColorStops: false, // 不支持 `*` 选择器,通过 gradientColorStopsPlugin 重新定义
    scrollSnapType: false, // 不支持 `*` 选择器,通过 scrollSnapTypePlugin 重新定义
    touchAction: false, // 不支持 `*` 选择器,通过 touchActionPlugin 重新定义
    transform: false, // 不支持 `*` 选择器,通过 transformPlugin 重新定义
    borderSpacing: false, // 不支持 `*` 选择器,通过 borderSpacingPlugin 重新定义
    contain: false, //  不支持 `*` 选择器,通过 containPlugin 重新定义
  },
  theme: {
    percents: {
      "1F2": "50%",
      "1F3": "33.333333%",
      "2F3": "66.666667%",
      "1F4": "25%",
      "2F4": "50%",
      "3F4": "75%",
      "1F5": "20%",
      "2F5": "40%",
      "3F5": "60%",
      "4F5": "80%",
      "1F6": "16.666667%",
      "2F6": "33.333333%",
      "3F6": "50%",
      "4F6": "66.666667%",
      "5F6": "83.333333%",
      "1F10": "10%",
      "2F10": "20%",
      "3F10": "30%",
      "4F10": "40%",
      "5F10": "50%",
      "6F10": "60%",
      "7F10": "70%",
      "8F10": "80%",
      "9F10": "90%",
      "1F12": "8.333333%",
      "2F12": "16.666667%",
      "3F12": "25%",
      "4F12": "33.333333%",
      "5F12": "41.666667%",
      "6F12": "50%",
      "7F12": "58.333333%",
      "8F12": "66.666667%",
      "9F12": "75%",
      "10F12": "83.333333%",
      "11F12": "91.666667%",
      "1F20": "5%",
      "1vw": "1vw",
      "2vw": "2vw",
      "3vw": "3vw",
      "4vw": "4vw",
      "5vw": "5vw",
      "6vw": "6vw",
      "7vw": "7vw",
      "8vw": "8vw",
      "9vw": "9vw",
      "10vw": "10vw",
      "11vw": "11vw",
      "12vw": "12vw",
      "13vw": "13vw",
      "14vw": "14vw",
      "15vw": "15vw",
      "16vw": "16vw",
      "17vw": "17vw",
      "18vw": "18vw",
      "19vw": "19vw",
      "20vw": "20vw",
      "21vw": "21vw",
      "22vw": "22vw",
      "23vw": "23vw",
      "24vw": "24vw",
      "25vw": "25vw",
      "26vw": "26vw",
      "27vw": "27vw",
      "28vw": "28vw",
      "29vw": "29vw",
      "30vw": "30vw",
      "31vw": "31vw",
      "32vw": "32vw",
      "33vw": "33vw",
      "34vw": "34vw",
      "35vw": "35vw",
      "36vw": "36vw",
      "37vw": "37vw",
      "38vw": "38vw",
      "39vw": "39vw",
      "40vw": "40vw",
      "41vw": "41vw",
      "42vw": "42vw",
      "43vw": "43vw",
      "44vw": "44vw",
      "45vw": "45vw",
      "46vw": "46vw",
      "47vw": "47vw",
      "48vw": "48vw",
      "49vw": "49vw",
      "50vw": "50vw",
      "51vw": "51vw",
      "52vw": "52vw",
      "53vw": "53vw",
      "54vw": "54vw",
      "55vw": "55vw",
      "56vw": "56vw",
      "57vw": "57vw",
      "58vw": "58vw",
      "59vw": "59vw",
      "60vw": "60vw",
      "61vw": "61vw",
      "62vw": "62vw",
      "63vw": "63vw",
      "64vw": "64vw",
      "65vw": "65vw",
      "66vw": "66vw",
      "67vw": "67vw",
      "68vw": "68vw",
      "69vw": "69vw",
      "70vw": "70vw",
      "71vw": "71vw",
      "72vw": "72vw",
      "73vw": "73vw",
      "74vw": "74vw",
      "75vw": "75vw",
      "76vw": "76vw",
      "77vw": "77vw",
      "78vw": "78vw",
      "79vw": "79vw",
      "80vw": "80vw",
      "81vw": "81vw",
      "82vw": "82vw",
      "83vw": "83vw",
      "84vw": "84vw",
      "85vw": "85vw",
      "86vw": "86vw",
      "87vw": "87vw",
      "88vw": "88vw",
      "89vw": "89vw",
      "90vw": "90vw",
      "91vw": "91vw",
      "92vw": "92vw",
      "93vw": "93vw",
      "94vw": "94vw",
      "95vw": "95vw",
      "96vw": "96vw",
      "97vw": "97vw",
      "98vw": "98vw",
      "99vw": "99vw",
      "100vw": "100vw",
      "1vh": "1vh",
      "2vh": "2vh",
      "3vh": "3vh",
      "4vh": "4vh",
      "5vh": "5vh",
      "6vh": "6vh",
      "7vh": "7vh",
      "8vh": "8vh",
      "9vh": "9vh",
      "10vh": "10vh",
      "11vh": "11vh",
      "12vh": "12vh",
      "13vh": "13vh",
      "14vh": "14vh",
      "15vh": "15vh",
      "16vh": "16vh",
      "17vh": "17vh",
      "18vh": "18vh",
      "19vh": "19vh",
      "20vh": "20vh",
      "21vh": "21vh",
      "22vh": "22vh",
      "23vh": "23vh",
      "24vh": "24vh",
      "25vh": "25vh",
      "26vh": "26vh",
      "27vh": "27vh",
      "28vh": "28vh",
      "29vh": "29vh",
      "30vh": "30vh",
      "31vh": "31vh",
      "32vh": "32vh",
      "33vh": "33vh",
      "34vh": "34vh",
      "35vh": "35vh",
      "36vh": "36vh",
      "37vh": "37vh",
      "38vh": "38vh",
      "39vh": "39vh",
      "40vh": "40vh",
      "41vh": "41vh",
      "42vh": "42vh",
      "43vh": "43vh",
      "44vh": "44vh",
      "45vh": "45vh",
      "46vh": "46vh",
      "47vh": "47vh",
      "48vh": "48vh",
      "49vh": "49vh",
      "50vh": "50vh",
      "51vh": "51vh",
      "52vh": "52vh",
      "53vh": "53vh",
      "54vh": "54vh",
      "55vh": "55vh",
      "56vh": "56vh",
      "57vh": "57vh",
      "58vh": "58vh",
      "59vh": "59vh",
      "60vh": "60vh",
      "61vh": "61vh",
      "62vh": "62vh",
      "63vh": "63vh",
      "64vh": "64vh",
      "65vh": "65vh",
      "66vh": "66vh",
      "67vh": "67vh",
      "68vh": "68vh",
      "69vh": "69vh",
      "70vh": "70vh",
      "71vh": "71vh",
      "72vh": "72vh",
      "73vh": "73vh",
      "74vh": "74vh",
      "75vh": "75vh",
      "76vh": "76vh",
      "77vh": "77vh",
      "78vh": "78vh",
      "79vh": "79vh",
      "80vh": "80vh",
      "81vh": "81vh",
      "82vh": "82vh",
      "83vh": "83vh",
      "84vh": "84vh",
      "85vh": "85vh",
      "86vh": "86vh",
      "87vh": "87vh",
      "88vh": "88vh",
      "89vh": "89vh",
      "90vh": "90vh",
      "91vh": "91vh",
      "92vh": "92vh",
      "93vh": "93vh",
      "94vh": "94vh",
      "95vh": "95vh",
      "96vh": "96vh",
      "97vh": "97vh",
      "98vh": "98vh",
      "99vh": "99vh",
      "100vh": "100vh",
      full: "100%",
    },
    spacing: {
      px: "1px",
      0: "0rpx",
      1: "1rpx",
      2: "2rpx",
      3: "3rpx",
      4: "4rpx",
      5: "5rpx",
      6: "6rpx",
      7: "7rpx",
      8: "8rpx",
      9: "9rpx",
      10: "10rpx",
      11: "11rpx",
      12: "12rpx",
      13: "13rpx",
      14: "14rpx",
      15: "15rpx",
      16: "16rpx",
      17: "17rpx",
      18: "18rpx",
      19: "19rpx",
      20: "20rpx",
      21: "21rpx",
      22: "22rpx",
      23: "23rpx",
      24: "24rpx",
      25: "25rpx",
      26: "26rpx",
      27: "27rpx",
      28: "28rpx",
      29: "29rpx",
      30: "30rpx",
      31: "31rpx",
      32: "32rpx",
      33: "33rpx",
      34: "34rpx",
      35: "35rpx",
      36: "36rpx",
      37: "37rpx",
      38: "38rpx",
      39: "39rpx",
      40: "40rpx",
      41: "41rpx",
      42: "42rpx",
      43: "43rpx",
      44: "44rpx",
      45: "45rpx",
      46: "46rpx",
      47: "47rpx",
      48: "48rpx",
      49: "49rpx",
      50: "50rpx",
      51: "51rpx",
      52: "52rpx",
      53: "53rpx",
      54: "54rpx",
      55: "55rpx",
      56: "56rpx",
      57: "57rpx",
      58: "58rpx",
      59: "59rpx",
      60: "60rpx",
      61: "61rpx",
      62: "62rpx",
      63: "63rpx",
      64: "64rpx",
      65: "65rpx",
      66: "66rpx",
      67: "67rpx",
      68: "68rpx",
      69: "69rpx",
      70: "70rpx",
      71: "71rpx",
      72: "72rpx",
      73: "73rpx",
      74: "74rpx",
      75: "75rpx",
      76: "76rpx",
      77: "77rpx",
      78: "78rpx",
      79: "79rpx",
      80: "80rpx",
      81: "81rpx",
      82: "82rpx",
      83: "83rpx",
      84: "84rpx",
      85: "85rpx",
      86: "86rpx",
      87: "87rpx",
      88: "88rpx",
      89: "89rpx",
      90: "90rpx",
      91: "91rpx",
      92: "92rpx",
      93: "93rpx",
      94: "94rpx",
      95: "95rpx",
      96: "96rpx",
      97: "97rpx",
      98: "98rpx",
      99: "99rpx",
      100: "100rpx",
      101: "101rpx",
      102: "102rpx",
      103: "103rpx",
      104: "104rpx",
      105: "105rpx",
      106: "106rpx",
      107: "107rpx",
      108: "108rpx",
      109: "109rpx",
      110: "110rpx",
      111: "111rpx",
      112: "112rpx",
      113: "113rpx",
      114: "114rpx",
      115: "115rpx",
      116: "116rpx",
      117: "117rpx",
      118: "118rpx",
      119: "119rpx",
      120: "120rpx",
      121: "121rpx",
      122: "122rpx",
      123: "123rpx",
      124: "124rpx",
      125: "125rpx",
      126: "126rpx",
      127: "127rpx",
      128: "128rpx",
      129: "129rpx",
      130: "130rpx",
      131: "131rpx",
      132: "132rpx",
      133: "133rpx",
      134: "134rpx",
      135: "135rpx",
      136: "136rpx",
      137: "137rpx",
      138: "138rpx",
      139: "139rpx",
      140: "140rpx",
      141: "141rpx",
      142: "142rpx",
      143: "143rpx",
      144: "144rpx",
      145: "145rpx",
      146: "146rpx",
      147: "147rpx",
      148: "148rpx",
      149: "149rpx",
      150: "150rpx",
      151: "151rpx",
      152: "152rpx",
      153: "153rpx",
      154: "154rpx",
      155: "155rpx",
      156: "156rpx",
      157: "157rpx",
      158: "158rpx",
      159: "159rpx",
      160: "160rpx",
      161: "161rpx",
      162: "162rpx",
      163: "163rpx",
      164: "164rpx",
      165: "165rpx",
      166: "166rpx",
      167: "167rpx",
      168: "168rpx",
      169: "169rpx",
      170: "170rpx",
      171: "171rpx",
      172: "172rpx",
      173: "173rpx",
      174: "174rpx",
      175: "175rpx",
      176: "176rpx",
      177: "177rpx",
      178: "178rpx",
      179: "179rpx",
      180: "180rpx",
      181: "181rpx",
      182: "182rpx",
      183: "183rpx",
      184: "184rpx",
      185: "185rpx",
      186: "186rpx",
      187: "187rpx",
      188: "188rpx",
      189: "189rpx",
      190: "190rpx",
      191: "191rpx",
      192: "192rpx",
      193: "193rpx",
      194: "194rpx",
      195: "195rpx",
      196: "196rpx",
      197: "197rpx",
      198: "198rpx",
      199: "199rpx",
      200: "200rpx",
      201: "201rpx",
      202: "202rpx",
      203: "203rpx",
      204: "204rpx",
      205: "205rpx",
      206: "206rpx",
      207: "207rpx",
      208: "208rpx",
      209: "209rpx",
      210: "210rpx",
      211: "211rpx",
      212: "212rpx",
      213: "213rpx",
      214: "214rpx",
      215: "215rpx",
      216: "216rpx",
      217: "217rpx",
      218: "218rpx",
      219: "219rpx",
      220: "220rpx",
      221: "221rpx",
      222: "222rpx",
      223: "223rpx",
      224: "224rpx",
      225: "225rpx",
      226: "226rpx",
      227: "227rpx",
      228: "228rpx",
      229: "229rpx",
      230: "230rpx",
      231: "231rpx",
      232: "232rpx",
      233: "233rpx",
      234: "234rpx",
      235: "235rpx",
      236: "236rpx",
      237: "237rpx",
      238: "238rpx",
      239: "239rpx",
      240: "240rpx",
      241: "241rpx",
      242: "242rpx",
      243: "243rpx",
      244: "244rpx",
      245: "245rpx",
      246: "246rpx",
      247: "247rpx",
      248: "248rpx",
      249: "249rpx",
      250: "250rpx",
      251: "251rpx",
      252: "252rpx",
      253: "253rpx",
      254: "254rpx",
      255: "255rpx",
      256: "256rpx",
      257: "257rpx",
      258: "258rpx",
      259: "259rpx",
      260: "260rpx",
      261: "261rpx",
      262: "262rpx",
      263: "263rpx",
      264: "264rpx",
      265: "265rpx",
      266: "266rpx",
      267: "267rpx",
      268: "268rpx",
      269: "269rpx",
      270: "270rpx",
      271: "271rpx",
      272: "272rpx",
      273: "273rpx",
      274: "274rpx",
      275: "275rpx",
      276: "276rpx",
      277: "277rpx",
      278: "278rpx",
      279: "279rpx",
      280: "280rpx",
      281: "281rpx",
      282: "282rpx",
      283: "283rpx",
      284: "284rpx",
      285: "285rpx",
      286: "286rpx",
      287: "287rpx",
      288: "288rpx",
      289: "289rpx",
      290: "290rpx",
      291: "291rpx",
      292: "292rpx",
      293: "293rpx",
      294: "294rpx",
      295: "295rpx",
      296: "296rpx",
      297: "297rpx",
      298: "298rpx",
      299: "299rpx",
      300: "300rpx",
      301: "301rpx",
      302: "302rpx",
      303: "303rpx",
      304: "304rpx",
      305: "305rpx",
      306: "306rpx",
      307: "307rpx",
      308: "308rpx",
      309: "309rpx",
      310: "310rpx",
      311: "311rpx",
      312: "312rpx",
      313: "313rpx",
      314: "314rpx",
      315: "315rpx",
      316: "316rpx",
      317: "317rpx",
      318: "318rpx",
      319: "319rpx",
      320: "320rpx",
      321: "321rpx",
      322: "322rpx",
      323: "323rpx",
      324: "324rpx",
      325: "325rpx",
      326: "326rpx",
      327: "327rpx",
      328: "328rpx",
      329: "329rpx",
      330: "330rpx",
      331: "331rpx",
      332: "332rpx",
      333: "333rpx",
      334: "334rpx",
      335: "335rpx",
      336: "336rpx",
      337: "337rpx",
      338: "338rpx",
      339: "339rpx",
      340: "340rpx",
      341: "341rpx",
      342: "342rpx",
      343: "343rpx",
      344: "344rpx",
      345: "345rpx",
      346: "346rpx",
      347: "347rpx",
      348: "348rpx",
      349: "349rpx",
      350: "350rpx",
      351: "351rpx",
      352: "352rpx",
      353: "353rpx",
      354: "354rpx",
      355: "355rpx",
      356: "356rpx",
      357: "357rpx",
      358: "358rpx",
      359: "359rpx",
      360: "360rpx",
      361: "361rpx",
      362: "362rpx",
      363: "363rpx",
      364: "364rpx",
      365: "365rpx",
      366: "366rpx",
      367: "367rpx",
      368: "368rpx",
      369: "369rpx",
      370: "370rpx",
      371: "371rpx",
      372: "372rpx",
      373: "373rpx",
      374: "374rpx",
      375: "375rpx",
      376: "376rpx",
      377: "377rpx",
      378: "378rpx",
      379: "379rpx",
      380: "380rpx",
      381: "381rpx",
      382: "382rpx",
      383: "383rpx",
      384: "384rpx",
      385: "385rpx",
      386: "386rpx",
      387: "387rpx",
      388: "388rpx",
      389: "389rpx",
      390: "390rpx",
      391: "391rpx",
      392: "392rpx",
      393: "393rpx",
      394: "394rpx",
      395: "395rpx",
      396: "396rpx",
      397: "397rpx",
      398: "398rpx",
      399: "399rpx",
      400: "400rpx",
      401: "401rpx",
      402: "402rpx",
      403: "403rpx",
      404: "404rpx",
      405: "405rpx",
      406: "406rpx",
      407: "407rpx",
      408: "408rpx",
      409: "409rpx",
      410: "410rpx",
      411: "411rpx",
      412: "412rpx",
      413: "413rpx",
      414: "414rpx",
      415: "415rpx",
      416: "416rpx",
      417: "417rpx",
      418: "418rpx",
      419: "419rpx",
      420: "420rpx",
      421: "421rpx",
      422: "422rpx",
      423: "423rpx",
      424: "424rpx",
      425: "425rpx",
      426: "426rpx",
      427: "427rpx",
      428: "428rpx",
      429: "429rpx",
      430: "430rpx",
      431: "431rpx",
      432: "432rpx",
      433: "433rpx",
      434: "434rpx",
      435: "435rpx",
      436: "436rpx",
      437: "437rpx",
      438: "438rpx",
      439: "439rpx",
      440: "440rpx",
      441: "441rpx",
      442: "442rpx",
      443: "443rpx",
      444: "444rpx",
      445: "445rpx",
      446: "446rpx",
      447: "447rpx",
      448: "448rpx",
      449: "449rpx",
      450: "450rpx",
      451: "451rpx",
      452: "452rpx",
      453: "453rpx",
      454: "454rpx",
      455: "455rpx",
      456: "456rpx",
      457: "457rpx",
      458: "458rpx",
      459: "459rpx",
      460: "460rpx",
      461: "461rpx",
      462: "462rpx",
      463: "463rpx",
      464: "464rpx",
      465: "465rpx",
      466: "466rpx",
      467: "467rpx",
      468: "468rpx",
      469: "469rpx",
      470: "470rpx",
      471: "471rpx",
      472: "472rpx",
      473: "473rpx",
      474: "474rpx",
      475: "475rpx",
      476: "476rpx",
      477: "477rpx",
      478: "478rpx",
      479: "479rpx",
      480: "480rpx",
      481: "481rpx",
      482: "482rpx",
      483: "483rpx",
      484: "484rpx",
      485: "485rpx",
      486: "486rpx",
      487: "487rpx",
      488: "488rpx",
      489: "489rpx",
      490: "490rpx",
      491: "491rpx",
      492: "492rpx",
      493: "493rpx",
      494: "494rpx",
      495: "495rpx",
      496: "496rpx",
      497: "497rpx",
      498: "498rpx",
      499: "499rpx",
      500: "500rpx",
      501: "501rpx",
      502: "502rpx",
      503: "503rpx",
      504: "504rpx",
      505: "505rpx",
      506: "506rpx",
      507: "507rpx",
      508: "508rpx",
      509: "509rpx",
      510: "510rpx",
      511: "511rpx",
      512: "512rpx",
      513: "513rpx",
      514: "514rpx",
      515: "515rpx",
      516: "516rpx",
      517: "517rpx",
      518: "518rpx",
      519: "519rpx",
      520: "520rpx",
      521: "521rpx",
      522: "522rpx",
      523: "523rpx",
      524: "524rpx",
      525: "525rpx",
      526: "526rpx",
      527: "527rpx",
      528: "528rpx",
      529: "529rpx",
      530: "530rpx",
      531: "531rpx",
      532: "532rpx",
      533: "533rpx",
      534: "534rpx",
      535: "535rpx",
      536: "536rpx",
      537: "537rpx",
      538: "538rpx",
      539: "539rpx",
      540: "540rpx",
      541: "541rpx",
      542: "542rpx",
      543: "543rpx",
      544: "544rpx",
      545: "545rpx",
      546: "546rpx",
      547: "547rpx",
      548: "548rpx",
      549: "549rpx",
      550: "550rpx",
      551: "551rpx",
      552: "552rpx",
      553: "553rpx",
      554: "554rpx",
      555: "555rpx",
      556: "556rpx",
      557: "557rpx",
      558: "558rpx",
      559: "559rpx",
      560: "560rpx",
      561: "561rpx",
      562: "562rpx",
      563: "563rpx",
      564: "564rpx",
      565: "565rpx",
      566: "566rpx",
      567: "567rpx",
      568: "568rpx",
      569: "569rpx",
      570: "570rpx",
      571: "571rpx",
      572: "572rpx",
      573: "573rpx",
      574: "574rpx",
      575: "575rpx",
      576: "576rpx",
      577: "577rpx",
      578: "578rpx",
      579: "579rpx",
      580: "580rpx",
      581: "581rpx",
      582: "582rpx",
      583: "583rpx",
      584: "584rpx",
      585: "585rpx",
      586: "586rpx",
      587: "587rpx",
      588: "588rpx",
      589: "589rpx",
      590: "590rpx",
      591: "591rpx",
      592: "592rpx",
      593: "593rpx",
      594: "594rpx",
      595: "595rpx",
      596: "596rpx",
      597: "597rpx",
      598: "598rpx",
      599: "599rpx",
      600: "600rpx",
      601: "601rpx",
      602: "602rpx",
      603: "603rpx",
      604: "604rpx",
      605: "605rpx",
      606: "606rpx",
      607: "607rpx",
      608: "608rpx",
      609: "609rpx",
      610: "610rpx",
      611: "611rpx",
      612: "612rpx",
      613: "613rpx",
      614: "614rpx",
      615: "615rpx",
      616: "616rpx",
      617: "617rpx",
      618: "618rpx",
      619: "619rpx",
      620: "620rpx",
      621: "621rpx",
      622: "622rpx",
      623: "623rpx",
      624: "624rpx",
      625: "625rpx",
      626: "626rpx",
      627: "627rpx",
      628: "628rpx",
      629: "629rpx",
      630: "630rpx",
      631: "631rpx",
      632: "632rpx",
      633: "633rpx",
      634: "634rpx",
      635: "635rpx",
      636: "636rpx",
      637: "637rpx",
      638: "638rpx",
      639: "639rpx",
      640: "640rpx",
      641: "641rpx",
      642: "642rpx",
      643: "643rpx",
      644: "644rpx",
      645: "645rpx",
      646: "646rpx",
      647: "647rpx",
      648: "648rpx",
      649: "649rpx",
      650: "650rpx",
      651: "651rpx",
      652: "652rpx",
      653: "653rpx",
      654: "654rpx",
      655: "655rpx",
      656: "656rpx",
      657: "657rpx",
      658: "658rpx",
      659: "659rpx",
      660: "660rpx",
      661: "661rpx",
      662: "662rpx",
      663: "663rpx",
      664: "664rpx",
      665: "665rpx",
      666: "666rpx",
      667: "667rpx",
      668: "668rpx",
      669: "669rpx",
      670: "670rpx",
      671: "671rpx",
      672: "672rpx",
      673: "673rpx",
      674: "674rpx",
      675: "675rpx",
      676: "676rpx",
      677: "677rpx",
      678: "678rpx",
      679: "679rpx",
      680: "680rpx",
      681: "681rpx",
      682: "682rpx",
      683: "683rpx",
      684: "684rpx",
      685: "685rpx",
      686: "686rpx",
      687: "687rpx",
      688: "688rpx",
      689: "689rpx",
      690: "690rpx",
      691: "691rpx",
      692: "692rpx",
      693: "693rpx",
      694: "694rpx",
      695: "695rpx",
      696: "696rpx",
      697: "697rpx",
      698: "698rpx",
      699: "699rpx",
      700: "700rpx",
      701: "701rpx",
      702: "702rpx",
      703: "703rpx",
      704: "704rpx",
      705: "705rpx",
      706: "706rpx",
      707: "707rpx",
      708: "708rpx",
      709: "709rpx",
      710: "710rpx",
      711: "711rpx",
      712: "712rpx",
      713: "713rpx",
      714: "714rpx",
      715: "715rpx",
      716: "716rpx",
      717: "717rpx",
      718: "718rpx",
      719: "719rpx",
      720: "720rpx",
      721: "721rpx",
      722: "722rpx",
      723: "723rpx",
      724: "724rpx",
      725: "725rpx",
      726: "726rpx",
      727: "727rpx",
      728: "728rpx",
      729: "729rpx",
      730: "730rpx",
      731: "731rpx",
      732: "732rpx",
      733: "733rpx",
      734: "734rpx",
      735: "735rpx",
      736: "736rpx",
      737: "737rpx",
      738: "738rpx",
      739: "739rpx",
      740: "740rpx",
      741: "741rpx",
      742: "742rpx",
      743: "743rpx",
      744: "744rpx",
      745: "745rpx",
      746: "746rpx",
      747: "747rpx",
      748: "748rpx",
      749: "749rpx",
      750: "750rpx",
    },
    width: ({ theme }) => ({
      ...theme("spacing"),
      ...theme("percents"),
      auto: "auto",
      screen: "100vw",
      svw: "100svw",
      lvw: "100lvw",
      dvw: "100dvw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    height: ({ theme }) => ({
      ...theme("spacing"),
      ...theme("percents"),
      auto: "auto",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    borderWidth: ({ theme }) => ({
      ...theme("spacing"),
    }),
    ringWidth: {
      DEFAULT: "6rpx",
      0: "0px",
      1: "2rpx",
      2: "4rpx",
      4: "8rpx",
      8: "16rpx",
    },
    fontSize: ({ theme }) => ({
      ...theme("spacing"),
      ...theme("percents"),
    }),
    borderRadius: ({
      theme,
    }) => ({
      ...theme("spacing"),
      ...theme("percents"),
    }),
    flexBasis: ({ theme }) => ({
      ...theme("spacing"),
      ...theme("percents"),
      auto: "auto",
    }),
    translate: ({ theme }) => ({
      ...theme("spacing"),
      ...theme("percents"),
    }),
    backdropBlur: ({
      theme,
    }) => ({
      ...theme("spacing"),
    }),
    blur: ({
      theme,
    }) => ({
      ...theme("spacing"),
    }),
    inset: ({ theme }) => ({
      ...theme("spacing"),
    }),
    lineHeight: ({
      theme,
    }) => ({
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      ...theme("spacing"),
    }),
    gradientColorStopPositions: {
      "0": "0%",
      "1P": "1%",
      "2P": "2%",
      "3P": "3%",
      "4P": "4%",
      "5P": "5%",
      "6P": "6%",
      "7P": "7%",
      "8P": "8%",
      "9P": "9%",
      "10P": "10%",
      "11P": "11%",
      "12P": "12%",
      "13P": "13%",
      "14P": "14%",
      "15P": "15%",
      "16P": "16%",
      "17P": "17%",
      "18P": "18%",
      "19P": "19%",
      "20P": "20%",
      "21P": "21%",
      "22P": "22%",
      "23P": "23%",
      "24P": "24%",
      "25P": "25%",
      "26P": "26%",
      "27P": "27%",
      "28P": "28%",
      "29P": "29%",
      "30P": "30%",
      "31P": "31%",
      "32P": "32%",
      "33P": "33%",
      "34P": "34%",
      "35P": "35%",
      "36P": "36%",
      "37P": "37%",
      "38P": "38%",
      "39P": "39%",
      "40P": "40%",
      "41P": "41%",
      "42P": "42%",
      "43P": "43%",
      "44P": "44%",
      "45P": "45%",
      "46P": "46%",
      "47P": "47%",
      "48P": "48%",
      "49P": "49%",
      "50P": "50%",
      "51P": "51%",
      "52P": "52%",
      "53P": "53%",
      "54P": "54%",
      "55P": "55%",
      "56P": "56%",
      "57P": "57%",
      "58P": "58%",
      "59P": "59%",
      "60P": "60%",
      "61P": "61%",
      "62P": "62%",
      "63P": "63%",
      "64P": "64%",
      "65P": "65%",
      "66P": "66%",
      "67P": "67%",
      "68P": "68%",
      "69P": "69%",
      "70P": "70%",
      "71P": "71%",
      "72P": "72%",
      "73P": "73%",
      "74P": "74%",
      "75P": "75%",
      "76P": "76%",
      "77P": "77%",
      "78P": "78%",
      "79P": "79%",
      "80P": "80%",
      "81P": "81%",
      "82P": "82%",
      "83P": "83%",
      "84P": "84%",
      "85P": "85%",
      "86P": "86%",
      "87P": "87%",
      "88P": "88%",
      "89P": "89%",
      "90P": "90%",
      "91P": "91%",
      "92P": "92%",
      "93P": "93%",
      "94P": "94%",
      "95P": "95%",
      "96P": "96%",
      "97P": "97%",
      "98P": "98%",
      "99P": "99%",
      "100P": "100%",
    },
    removeAddDefaultsgradientColorStops: ({
      theme,
    }: { theme: Function }) => ({
      ...theme("colors").bg,
    }),
    ringOffsetWidth: ({
      theme,
    }) => ({
      DEFAULT: "6rpx",
      ...theme("spacing"),
    }),
    ringOffsetColor: ({
      theme,
    }) => {
      const themeColors = theme("colors");
      return {
        ...themeColors.common,
        ...themeColors.bg,
      };
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      4: "4deg",
      5: "5deg",
      6: "6deg",
      7: "7deg",
      8: "8deg",
      9: "9deg",
      10: "10deg",
      11: "11deg",
      12: "12deg",
      13: "13deg",
      14: "14deg",
      15: "15deg",
      16: "16deg",
      17: "17deg",
      18: "18deg",
      19: "19deg",
      20: "20deg",
      21: "21deg",
      22: "22deg",
      23: "23deg",
      24: "24deg",
      25: "25deg",
      26: "26deg",
      27: "27deg",
      28: "28deg",
      29: "29deg",
      30: "30deg",
      31: "31deg",
      32: "32deg",
      33: "33deg",
      34: "34deg",
      35: "35deg",
      36: "36deg",
      37: "37deg",
      38: "38deg",
      39: "39deg",
      40: "40deg",
      41: "41deg",
      42: "42deg",
      43: "43deg",
      44: "44deg",
      45: "45deg",
      46: "46deg",
      47: "47deg",
      48: "48deg",
      49: "49deg",
      50: "50deg",
      51: "51deg",
      52: "52deg",
      53: "53deg",
      54: "54deg",
      55: "55deg",
      56: "56deg",
      57: "57deg",
      58: "58deg",
      59: "59deg",
      60: "60deg",
      61: "61deg",
      62: "62deg",
      63: "63deg",
      64: "64deg",
      65: "65deg",
      66: "66deg",
      67: "67deg",
      68: "68deg",
      69: "69deg",
      70: "70deg",
      71: "71deg",
      72: "72deg",
      73: "73deg",
      74: "74deg",
      75: "75deg",
      76: "76deg",
      77: "77deg",
      78: "78deg",
      79: "79deg",
      80: "80deg",
      81: "81deg",
      82: "82deg",
      83: "83deg",
      84: "84deg",
      85: "85deg",
      86: "86deg",
      87: "87deg",
      88: "88deg",
      89: "89deg",
      90: "90deg",
      91: "91deg",
      92: "92deg",
      93: "93deg",
      94: "94deg",
      95: "95deg",
      96: "96deg",
      97: "97deg",
      98: "98deg",
      99: "99deg",
      100: "100deg",
      101: "101deg",
      102: "102deg",
      103: "103deg",
      104: "104deg",
      105: "105deg",
      106: "106deg",
      107: "107deg",
      108: "108deg",
      109: "109deg",
      110: "110deg",
      111: "111deg",
      112: "112deg",
      113: "113deg",
      114: "114deg",
      115: "115deg",
      116: "116deg",
      117: "117deg",
      118: "118deg",
      119: "119deg",
      120: "120deg",
      121: "121deg",
      122: "122deg",
      123: "123deg",
      124: "124deg",
      125: "125deg",
      126: "126deg",
      127: "127deg",
      128: "128deg",
      129: "129deg",
      130: "130deg",
      131: "131deg",
      132: "132deg",
      133: "133deg",
      134: "134deg",
      135: "135deg",
      136: "136deg",
      137: "137deg",
      138: "138deg",
      139: "139deg",
      140: "140deg",
      141: "141deg",
      142: "142deg",
      143: "143deg",
      144: "144deg",
      145: "145deg",
      146: "146deg",
      147: "147deg",
      148: "148deg",
      149: "149deg",
      150: "150deg",
      151: "151deg",
      152: "152deg",
      153: "153deg",
      154: "154deg",
      155: "155deg",
      156: "156deg",
      157: "157deg",
      158: "158deg",
      159: "159deg",
      160: "160deg",
      161: "161deg",
      162: "162deg",
      163: "163deg",
      164: "164deg",
      165: "165deg",
      166: "166deg",
      167: "167deg",
      168: "168deg",
      169: "169deg",
      170: "170deg",
      171: "171deg",
      172: "172deg",
      173: "173deg",
      174: "174deg",
      175: "175deg",
      176: "176deg",
      177: "177deg",
      178: "178deg",
      179: "179deg",
      180: "180deg",
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      4: "4deg",
      5: "5deg",
      6: "6deg",
      7: "7deg",
      8: "8deg",
      9: "9deg",
      10: "10deg",
      11: "11deg",
      12: "12deg",
      13: "13deg",
      14: "14deg",
      15: "15deg",
      16: "16deg",
      17: "17deg",
      18: "18deg",
      19: "19deg",
      20: "20deg",
      21: "21deg",
      22: "22deg",
      23: "23deg",
      24: "24deg",
      25: "25deg",
      26: "26deg",
      27: "27deg",
      28: "28deg",
      29: "29deg",
      30: "30deg",
      31: "31deg",
      32: "32deg",
      33: "33deg",
      34: "34deg",
      35: "35deg",
      36: "36deg",
      37: "37deg",
      38: "38deg",
      39: "39deg",
      40: "40deg",
      41: "41deg",
      42: "42deg",
      43: "43deg",
      44: "44deg",
      45: "45deg",
      46: "46deg",
      47: "47deg",
      48: "48deg",
      49: "49deg",
      50: "50deg",
      51: "51deg",
      52: "52deg",
      53: "53deg",
      54: "54deg",
      55: "55deg",
      56: "56deg",
      57: "57deg",
      58: "58deg",
      59: "59deg",
      60: "60deg",
      61: "61deg",
      62: "62deg",
      63: "63deg",
      64: "64deg",
      65: "65deg",
      66: "66deg",
      67: "67deg",
      68: "68deg",
      69: "69deg",
      70: "70deg",
      71: "71deg",
      72: "72deg",
      73: "73deg",
      74: "74deg",
      75: "75deg",
      76: "76deg",
      77: "77deg",
      78: "78deg",
      79: "79deg",
      80: "80deg",
      81: "81deg",
      82: "82deg",
      83: "83deg",
      84: "84deg",
      85: "85deg",
      86: "86deg",
      87: "87deg",
      88: "88deg",
      89: "89deg",
      90: "90deg",
      91: "91deg",
      92: "92deg",
      93: "93deg",
      94: "94deg",
      95: "95deg",
      96: "96deg",
      97: "97deg",
      98: "98deg",
      99: "99deg",
      100: "100deg",
      101: "101deg",
      102: "102deg",
      103: "103deg",
      104: "104deg",
      105: "105deg",
      106: "106deg",
      107: "107deg",
      108: "108deg",
      109: "109deg",
      110: "110deg",
      111: "111deg",
      112: "112deg",
      113: "113deg",
      114: "114deg",
      115: "115deg",
      116: "116deg",
      117: "117deg",
      118: "118deg",
      119: "119deg",
      120: "120deg",
      121: "121deg",
      122: "122deg",
      123: "123deg",
      124: "124deg",
      125: "125deg",
      126: "126deg",
      127: "127deg",
      128: "128deg",
      129: "129deg",
      130: "130deg",
      131: "131deg",
      132: "132deg",
      133: "133deg",
      134: "134deg",
      135: "135deg",
      136: "136deg",
      137: "137deg",
      138: "138deg",
      139: "139deg",
      140: "140deg",
      141: "141deg",
      142: "142deg",
      143: "143deg",
      144: "144deg",
      145: "145deg",
      146: "146deg",
      147: "147deg",
      148: "148deg",
      149: "149deg",
      150: "150deg",
      151: "151deg",
      152: "152deg",
      153: "153deg",
      154: "154deg",
      155: "155deg",
      156: "156deg",
      157: "157deg",
      158: "158deg",
      159: "159deg",
      160: "160deg",
      161: "161deg",
      162: "162deg",
      163: "163deg",
      164: "164deg",
      165: "165deg",
      166: "166deg",
      167: "167deg",
      168: "168deg",
      169: "169deg",
      170: "170deg",
      171: "171deg",
      172: "172deg",
      173: "173deg",
      174: "174deg",
      175: "175deg",
      176: "176deg",
      177: "177deg",
      178: "178deg",
      179: "179deg",
      180: "180deg",
    },
    stroke: ({ theme }) => ({
      none: "none",
      ...theme("colors").bg,
    }),
  },
  plugins: [
    preflight,
    backdropFilter,
    filter,
    ringWidth,
    boxShadow,
    fontVariantNumeric,
    gradientColorStops,
    scrollSnapType,
    touchAction,
    transform,
    borderSpacing,
    contain,
  ],
};

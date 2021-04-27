/*
	*	Original script by: Shafiul Azam
	*	ishafiul@gmail.com
	*	Version 3.0
	*	Modified by: Luigi Balzano

	*	Description:
	*	Inserts Countries and/or States as Dropdown List
	*	How to Use:

		In Head section:
		<script type= "text/javascript" src = "countries.js"></script>
		In Body Section:
		Select Country:   <select onchange="print_state('state',this.selectedIndex);" id="country" name ="country"></select>
		<br />
		City/District/State: <select name ="state" id ="state"></select>
		<script language="javascript">print_country("country");</script>	

	*
	*	License: OpenSource, Permission for modificatin Granted, KEEP AUTHOR INFORMATION INTACT
	*	Aurthor's Website: http://shafiul.progmaatic.com
	*
*/

var wilaya_arr = wilaya2_arr = wilaya3_arr = wilaya4_arr = new Array(
"Adrar",
"Chlef",
"Laghouat"  ,
"Oum el Bouaghi" ,
"Batna",
"Bejaia", 
"Biskra"  ,
"Bechar" ,
"Blida",
"Bouira" ,
"Tamanghasset",
"Tebessa",
"Tlemcen",
"Tiaret" ,
"Tizi Ouzou",
"Alger",
"Djelfa" ,
"Jijel",
"Setif" ,
"Saida",
"Skikda" ,
"Sidi Bel Abbes" ,
"Annaba" ,
"Guelma" ,
"Constantine" ,
"Medea" ,
"Mostaganem" ,
"MSila" ,
"Mascara" ,
"Ouargla" ,
"Oran" ,
"El Bayadh" ,
"Illizi" ,
"Bordj Bou Arreridj" ,
"Boumerdes" ,
"El Tarf" ,
"Tindouf" ,
"Tissemsilt" ,
"El Oued" ,
"Khenchela" ,
"Souk Ahras" ,
"Tipaza" ,
"Mila" ,
"Ain Defla" ,
"Naama" ,
"Ain Temouchent" ,
"Ghardaia" ,
"Relizane");

var s_a = new Array();
s_a[0]="";
s_a[1]="Adrar|Akabli|Aougrout|Aoulef|Bordj Badji Mokhtar|Bouda|Charouine|Deldoul|Fenoughil|In Zghmir|Ksar Kaddour|Metarfa|Ouled Ahmed Tammi|Ouled Aissa|Ouled Said|Reggane|Sali|Sebaa|Talmine|Tamantit|Tamekten|Tamest|Timiaouine|Timimoun|Tinerkouk|Tit|Tsabit|Zaouiet Kounta ";
s_a[2]="Abou El Hassan|Ain Merane|Bénairia|Beni Bouateb|Beni Haoua|Beni Rached|Boukadir|Bouzeghaia|Breira|Chettia|Chlef|Dahra|El Hadjadj|El Karimia|El Marsa|Harchoun|Harenfa|Labiod Medjadja|Moussadek|Oued Fodda|Oued Goussine|Oued Sly|Ouled Abbes|Ouled Ben Abdelkader|Ouled Fares|Oum Drou|Sendjas|Sidi Abderrahmane|Sidi Akkacha|Sobha|Tadjena|Talassa|Taougrite|Ténès|Zeboudja ";
s_a[3]="Aflou|Ain Madhi|Ain Sidi Ali|Beidha|Bennasser Benchohra|Brida|El Assafia|El Ghicha|El Houaita|Gueltat Sidi Saad|Hadj Mechri|Hassi Delaa|Hassi R'Mel|Kheneg|Ksar El Hirane|Laghouat|Oued M'Zi|Oued Morra|Sebgag|Sidi Bouzid|Sidi Makhlouf|Tadjemout|Tadjrouna|Taouila ";
s_a[4]="Ain Babouche|Ain Béida|Ain Diss|Ain Fakroun|Ain Kercha|Ain M'lila|Ain Zitoun|Behir Chergui|Berriche|Bir Chouhada|Dhalaa|El Amiria|El Belala|El Djazia|El Fedjouz Boughrara Saoudi|El Harmilia|Fkirina|Hanchir Toumghani|Ksar Sbahi|Meskiana|Oued Nini|Ouled Gacem|Ouled Hamla|Ouled Zouai|Oum el Bouaghi|Rahia|Sigus|Souk Naamane|Zorg";
s_a[5]="Abdelkader Azil|Arris|Ain Djasser|Ain Touta|Ain Yagout|Barika|Batna|Ben Foudhala El Hakania|Bitam|Boulhilat|Boumagueur|Boumia|Bouzina|Chemora|Chir|Djerma|Djezar|El Hassi|El Madher|Fesdis|Foum Toub|Ghassira|Gosbat|Guigba|Hidoussa|Ichmoul|Inoughissen|Kimmel|Ksar Bellezma|Larbaâ|Lazrou|Lemsane|M'doukel|Maafa|Menaa|Merouana|N'Gaous|Oued Chaaba|Oued El Ma|Oued Taga|Ouled Ammar|Ouled Aouf|Ouled Fadel|Ouled Sellam|Ouled Si Slimane|Ouyoun El Assafir|Rahbat|Ras El Aioun|Sefiane|Seggana|Seriana|T'Kout|Talkhamt|Taxlent|Tazoult|Teniet El Abed|Tighanimine|Tigherghar|Tilatou|Timgad|Zanat El Beida";
s_a[6]="Adekar|Akbou|Akfadou|Amalou|Amizour|Aokas|Ait-R'zine|Ait-Smail|Barbacha|Beni Djellil|Beni Ksila|Beni Maouche|Beni Mellikeche|Beni Ourtilane|Bouhamza|Boukhelifa|Bouklawi|Béjaia|Chellata|Chemini|Darguina|Draâ El-Kaid|El Kseur|Fenaia Ilmaten|Ferraoun|Ighil Ali|Ighram|Kendira|Kherrata|Leflaye|M'cisna|Melbou|Oued Ghir|Ouzellaguen|Seddouk|Semaoun|Sidi-Ayad|Sidi-Aich|Souk El Ténine|Souk-Oufella|Tala Hamza|Tamokra|Tamridjet|Taourirt Ighil|Tazmalt|Tibane|Tichy|Tifra|Timezrit|Tinabdher|Tizi N'Berber|Toudja";
s_a[7]="Ain Naga|Ain Zaatout|Besbes|Biskra|Bordj Ben Azzouz|Bouchagroune|Branis|Chetma|Djemorah|Doucen|Ech Chaiba|El Feidh|El Ghrous|El Hadjeb|El Haouch|El Kantara|El Mizaraa|El Outaya|Foughala|Khenguet Sidi Nadji|Lichana|Lioua|M'Chouneche|Mekhadma|M'Lili|Ouled Djellal|Oumache|Ourlal|Ras El Miaad|Sidi Khaled|Sidi Okba|Tolga|Zeribet El Oued";
s_a[8]="Abadla|Beni Ikhlef|Beni Ounif|Boukais|Béchar|Béni Abbès|El Ouata|Erg Ferradj|Igli|Kenadsa|Kerzaz|Ksabi|Lahmar|Mechraa Houari Boumedienne|Meridja|Mougheul|Ouled Khoudir|Tabelbala|Taghit|Tamtert|Timoudi ";
s_a[9]="Ain Romana|Beni Mered|Beni Tamou|Benkhelil|Blida|Bouarfa|Boufarik|Bougara|Bouinan|Chebli|Chiffa|Chréa|Djebabra|El Affroun|Guerouaou|Hammam Melouane|Larbaa|Meftah|Mouzaia|Oued Alleug|Oued Djer|Ouled Slama|Ouled Yaich|Souhane|Soumaa ";
s_a[10]="Ain Bessem|Hanif|Aghbalou|Ain El Hadjar|Ahl El Ksar|Ain Laloui|Ath Mansour|Aomar|Ain El Turc|Ait Laziz|Bouderbala|Bechloul|Bir Ghbalou|Boukram|Bordj Okhriss|Bouira|Chorfa|Dechmia|Dirrah|Djebahia|El Hakimia|El Hachimia|El Adjiba|El Khabouzia|El Mokrani|El Asnam|Guerrouma|Haizer|Hadjera Zerga|Kadiria|Lakhdaria|M'Chedallah|Mezdour|Maala|Maamora|Oued El Berdi|Ouled Rached|Raouraoua|Ridane|Saharidj|Sour El Ghouzlane|Souk El Khemis|Taguedit|Taghzout|Zbarbar";
s_a[11]=" Abalessa|Foggaret Ezzaouia|Idles|In Amguel|In Ghar|In Guezzam|In Salah|Tamanrasset|Tazrouk|Tin Zaouatine";
s_a[12]="Ain Zerga|Bedjene|Bekkaria|Bir Dheb|Bir el-Ater|Bir Mokkadem|Boukhadra|Boulhaf Dir|Cheria|El Aouinet|El Houidjbet|El Kouif|El Ma Labiodh|El Meridj|El Mezeraa|El Ogla|Ferkane|Guorriguer|Hammamet|Morsott|Negrine|Ogla Melha|Ouenza|Oum Ali|Safsaf El Ouesra|Stah Guentis|Tlidjene|Tébessa ";
s_a[13]="Amieur|Azails|Ain Fetah|Ain Fezza|Ain Ghoraba|Ain Kebira|Ain Nehala|Ain Tallout|Ain Youcef|Bab El Assa|Beni Bahdel|Beni Boussaid|Beni Khellad|Beni Mester|Beni Ouarsous|Beni Semiel|Beni Snous|Bensekrane|Bouhlou|Chetouane|Dar Yaghmouracene|Djebala|El Aricha|El Bouihi|El Fehoul|El Gor|Fellaoucene|Ghazaouet|Hammam Boughrara|Hennaya|Honaine|Maghnia|Mansourah|Marsa Ben M'Hidi|MSirda Fouaga|Nedroma|Oued Lakhdar|Ouled Mimoun|Ouled Riyah|Remchi|Sabra|Sebaa Chioukh|Sebdou|Sidi Abdelli|Sidi Djillali|Sidi Medjahed|Souahlia|Souani|Souk Tlata|Terny (Beni-Warnide)|Tienet|Tlemcen|Zenata";
s_a[14]="Ain Bouchekif|Ain Deheb|Ain El Hadid|Ain Kermes|Ain Zarit|Bougara|Chehaima|Dahmouni|Djebilet Rosfa|Djillali Ben Amar|Faidja|Frenda|Guertoufa|Hamadia|Ksar Chellala|Madna|Mahdia|Mechraa Safa|Medrissa|Medroussa|Meghila|Mellakou|Nadorah|Naima|Oued Lilli|Rahouia|Rechaiga|Sebaine|Sebt|Serghine|Si Abdelghani|Sidi Abderahmane|Sidi Ali Mellal|Sidi Bakhti|Sidi Hosni|Sougueur|Tagdemt|Takhemaret|Tiaret|Tidda|Tousnina|Zmalet El Emir Abdelkader ";
s_a[15]="Abi Youcef|Aghribs|Agouni Gueghrane|Ain El Hammam|Akbil|Akerrou|Assi Youcef|Azazga|Azeffoun|Ain Zaouia|Ait Aggouacha|Ait Bouadou|Ait Boumahdi|Ait Chafâa|Ait Khellili|Ait Mahmoud|Ait Oumalou|Ait Toudert|Ait Yahia|Ait Yahia Moussa|Beni Aissi|Beni Douala|Beni Yenni|Beni Ziki|Beni Zmenzer|Boghni|Boudjima|Bounouh|Bouzguen|Djebel Aissa Mimoun|Draâ Ben Khedda|Draâ El Mizan|Freha|Frikat|Iboudraren|Idjeur|Iferhounène|Ifigha|Iflissen|Illilten|Illoula Oumalou|Imsouhel|Irdjen|Larbaâ Nath Irathen|M'Kira|Makouda|Mechtras|Mekla|Mizrana|Mâatkas|Ouacif|Ouadhia|Ouaguenoun|Sidi Namane|Souamaâ|Souk El Thenine|Tadmait|Tigzirt|Timizart|Tirmitine|Tizi Gheniff|Tizi N'Tleta|Tizi Ouzou|Tizi Rached|Yakouren|Yatafen|Zekri";
s_a[16]="Alger-Centre|Ain Benian|Ain Taya|Bab El Oued|Bab Ezzouar|Baba Hassen|Bachdjerrah|Baraki|Belouizdad|Ben Aknoun|Beni Messous|Bir Mourad Rais|Birkhadem|Birtouta|Bologhine|Bordj El Bahri|Bordj El Kiffan|Bourouba|Bouzareah|Casbah|Cheraga|Dar El Beida|Dely Ibrahim|Djasr KasentinaNote|Douera|Draria|El Achour|El Biar|El Hammamet|El Harrach|El Madania|El Magharia|El Marsa|El Mouradia|H'raoua|Hussein Dey|Hydra|Khraicia|Kouba|Les Eucalyptus|Mahelma|Mohammadia|Oued Koriche|Oued Smar|Ouled Chebel|Ouled Fayet|Rahmania|Rais Hamidou|Reghaia|Rouiba|Saoula|Sidi M'Hamed|Sidi Moussa|Souidania|Staoueli|Tessala El Merdja|Zeralda ";
s_a[17]="Ain Chouhada|Ain El Ibel|Ain Feka|Ain Maabed|Ain Oussara|Amourah|Benhar|Beni Yagoub|Birine|Bouira Lahdab|Charef|Dar Chioukh|Deldoul|Djelfa|Douis|El Guedid|El Idrissia|El Khemis|Faidh El Botma|Guernini|Guettara|Had-Sahary|Hassi Bahbah|Hassi El Euch|Hassi Fedoul|Messaad|M'Liliha|Moudjebara|Oum Laadham|Sed Rahal|Selmana|Sidi Baizid|Sidi Ladjel|Tadmit|Zaafrane|Zaccar";
s_a[18]="Bordj Tahar|Boucif Ouled Askeur|Boudriaa Ben Yadjis|Bouraoui Belhadef|Chahna|Chekfa|Djemaa Beni Habibi|Djimla|El Ancer|El Aouana|El Kennar Nouchfi|El Milia|Emir Abdelkader|Eraguene|Ghebala|Jijel|Kaous|Kheiri Oued Adjoul|Ouadjana|Ouled Rabah|Ouled Yahia Khedrouche|Selma Benziada|Settara|Sidi Abdelaziz|Sidi Maarouf|Taher|Texenna|Ziama Mansouriah ";
s_a[19]="Ain Abessa|Ain Arnat|Ain Azel|Ain El Kebira|Ain Lahdjar|Ain Legraj|Ain Oulmene|Ain Roua|Ain Sebt|Ait Naoual Mezada|Ait Tizi|Amoucha|Babor|Bazer Sakhra|Beidha Bordj|Belaa|Beni Aziz|Beni Chebana|Beni Fouda|Beni Hocine|Beni Mouhli|Beni Ouartilene|Bir El Arch|Bir Haddada|Bouandas|Bougaa|Bousselam|Boutaleb|Dehamcha|Djemila|Draa Kebila|El Eulma|El Ouldja|El Ouricia|Guellal|Guelta Zerka|Guenzet|Guidjel|Hamma|Hammam Guergour|Hammam Soukhna|Harbil|Ksar El Abtal|Maaouia|Maoklane|Mezloug|Oued El Barad|Ouled Addouane|Ouled Sabor|Ouled Si Ahmed|Ouled Tebben|Rasfa|Salah Bey|Serdj El Ghoul|Sétif|Tachouda|Tamazirt_(city)|Talaifacene|Taya|Tella|Tizi N'Becha";
s_a[20]="Ain El Hadjar|Ain Sekhouna|Ain Soltane|Doui Thabet|El Hassasna|Hounet|Maamora|Moulay Larbi|Ouled Brahim|Ouled Khaled|Saida|Sidi Ahmed|Sidi Amar|Sidi Boubekeur|Tircine|Youb ";
s_a[21]=" Ain Bouziane|Ain Charchar|Ain Kechra|Ain Zouit|Azzaba|Bekkouche Lakhdar|Bin El Ouiden|Ben Azzouz|Beni Bechir|Beni Oulbane|Beni Zid|Bouchtata|Cheraia|Collo|Djendel Saadi Mohamed|El Ghedir|El Hadaiek|El Harrouch|El Marsa|Emdjez Edchich|Es Sebt|Filfila|Hamadi Krouma|Kanoua|Kerkera|Kheneg Mayoum|Oued Zehour|Ouldja Boulballout|Ouled Attia|Ouled Hbaba|Oum Toub|Ramdane Djamel|Salah Bouchaour|Sidi Mezghiche|Skikda|Tamalous|Zerdaza|Zitouna";
s_a[22]="Ain Adden|Ain El Berd|Ain Kada|Ain Thrid|Ain Tindamine|Amarnas|Badredine El Mokrani|Belarbi|Ben Badis|Benachiba Chelia|Bir El Hammam|Boudjebaa El Bordj|Boukhanafis|Chettouane Belaila|Dhaya|El Haçaiba|Hassi Dahou|Hassi Zehana|Lamtar|Makedra|Marhoum|M'Cid|Merine|Mezaourou|Mostefa Ben Brahim|Moulay Slissen|Oued Sebaa|Oued Sefioun|Oued Taourira|Ras El Ma|Redjem Demouche|Sehala Thaoura|Sfisef|Sidi Ali Benyoub|Sidi Ali Boussidi|Sidi Bel Abbes|Sidi Brahim|Sidi Chaib|Sidi Dahou de Zairs|Sidi Hamadouche|Sidi Khaled|Sidi Lahcene|Sidi Yacoub|Tabia|Tafissour|Taoudmout|Teghalimet|Telagh|Tenira|Tessala|Tilmouni|Zerouala";
s_a[23]="Annaba|Ain Berda|Barrahel|Chetaibi|Cheurfa|El Bouni|El Hadjar|Eulma|Oued El Aneb|Seraidi|Sidi Amar|Treat";
s_a[24]="    Ain Ben Beida|Ain Larbi|Ain Makhlouf|Ain Reggada|Ain Sandel|Belkheir|Ben Djerrah|Beni Mezline|Bordj Sabath|Bouhachana|Bouhamdane|Bouati Mahmoud|Bouchegouf|Boumahra Ahmed|Dahouara|Djeballah Khemissi|El Fedjoudj|Guellat Bou Sbaa|Guelma|Hammam Debagh|Hammam N'Bail|Héliopolis|Houari Boumédiène|Khezarra|Medjez Amar|Medjez Sfa|Nechmaya|Oued Cheham|Oued Fragha|Oued Zenati|Ras El Agba|Roknia|Sellaoua Announe|Tamlouka";
s_a[25]=" Ain Abid|Ain Smara|Beni Hamiden|Constantine|Didouche Mourad|El Khroub|Hamma Bouziane|Ibn Badis|Ibn Ziad|Messaoud Boudjriou|Ouled Rahmoune|Zighoud Youcef";
s_a[26]=" Ain Boucif|Ain Ouksir|Aissaouia|Aziz|Baata|Benchicao|Beni Slimane|Berrouaghia|Bir Ben Laabed|Boghar|Bou Aiche|Bouaichoune|Bouchrahil|Boughezoul|Bouskene|Chahbounia|Chellalet El Adhaoura|Cheniguel|Derrag|Deux Bassins|Djouab|Draa Essamar|El Azizia|El Guelb El Kebir|El Hamdania|El Omaria|El Ouinet|Hannacha|Kef Lakhdar|Khams Djouamaa|Ksar Boukhari|Meghraoua|Médéa|Moudjbar|Meftaha|Mezerana|Mihoub|Ouamri|Oued Harbil|Ouled Antar|Ouled Bouachra|Ouled Brahim|Ouled Deide|Ouled Hellal|Ouled Maaref|Oum El Djalil|Ouzera|Rebaia|Saneg|Sedraia|Seghouane|Si Mahdjoub|Sidi Damed|Sidi Errabia|Sidi Naamane|Sidi Zahar|Sidi Ziane|Souagui|Tablat|Tafraout|Tamesguida|Tizi Mahdi|Tlatet Eddouar|Zoubiria";
s_a[27]=" Abdelmalek Ramdane|Achaacha|Ain Boudinar|Ain Nouissy|Ain Sidi Cherif|Ain Tedles|Blad Touahria|Bouguirat|El Hassaine|Fornaka|Hadjadj|Hassi Mameche|Khadra|Kheireddine|Mansourah|Mesra|Mazagran|Mostaganem|Nekmaria|Oued El Kheir|Ouled Boughalem|Ouled Maallah|Safsaf|Sayada|Sidi Ali|Sidi Belattar|Sidi Lakhdar|Sirat|Souaflia|Sour|Stidia|Tazgait";
s_a[28]="Ain El Hadjel|Ain El Melh|Ain Errich|Ain Fares|Ain Khadra|Belaiba|Ben Srour|Beni Ilmane|Benzouh|Berhoum|Bir Foda|Bou-Saâda|Bouti Sayah|Chellal|Dehahna|Djebel Messaad|El Hamel|El Houamed|Hammam Dhalaa|Khettouti Sed El Djir|Khoubana|Maadid|Maarif|Magra|M'Cif|Medjedel|Mohammed Boudiaf|M'Sila|M'Tarfa|Ouanougha|Ouled Addi Guebala|Ouled Atia|Ouled Derradj|Ouled Madhi|Ouled Mansour|Ouled Sidi Brahim|Ouled Slimane|Oultem|Sidi Aissa|Sidi Ameur|Sidi Hadjeres|Sidi M'Hamed|Slim|Souamaa|Tamsa|Tarmount|Zarzour";
s_a[29]=" Ain Fares|Ain Fekan|Ain Ferah|Ain Fras|Alaimia|Aouf|Beniane|Bou Hanifia|Bou Henni|Chorfa|El Bordj|El Gaada|El Ghomri|El Guettana|El Keurt|El Menaouer|Ferraguig|Froha|Gharrous|Guerdjoum|Ghriss|Hachem|Hacine|Khalouia|Makdha|Mamounia|Maoussa|Mascara|Matemore|Mocta Douz|Mohammadia|Nesmoth|Oggaz|Oued El Abtal|Oued Taria|Ras Ain Amirouche|Sedjerara|Sehailia|Sidi Abdeldjebar|Sidi Abdelmoumen|Sidi Kada|Sidi Boussaid|Sig|Tighennif|Tizi|Zahana|Zelmata";
s_a[30]=" Ain Beida|Benaceur|Blidet Amor|El Allia|El Borma|El Hadjira|Hassi Ben Abdellah|Hassi Messaoud|Megarine|M'Naguer|Nezla|N'Goussa|Ouargla|Rouissat|Sidi Khouiled|Sidi Slimane|Taibet|Tamacine|Tebesbest|Touggourt|Zaouia El Abidia";
s_a[31]="Arzew|Ain El Bia|Ain El Kerma|Ain El Turk|Ben Freha|Bethioua|Bir El Djir|Bou-Sfer|Boufatis|Boutlelis|El Ançor|El Braya|El Kerma|Es Senia|Gdyel|Hassi Ben Okba|Hassi Bounif|Hassi Mefsoukh|Marsat El Hadjadj|Mers El Kébir|Misserghin|Oran|Oued Tlelat|Sidi Benyebka|Sidi Chami|Tafraoui";
s_a[32]="Arbaouat|Ain El Orak|Boualem|Bougtoub|Boussemghoun|Brezina|Cheguig|Chellala|El Abiodh Sidi Cheikh|El Bayadh|El Bnoud|El Kheiter|El Mehara|Ghassoul|Kef El Ahmar|Kraakda|Rogassa|Sidi Ameur|Sidi Slimane|Sidi Tifour|Stitten|Tousmouline";
s_a[33]="Bordj El Haouas|Bordj Omar Driss|Debdeb|Djanet|Illizi|In Amenas";
s_a[34]="Ain Taghrout|Ain Tesra|Belimour|Ben Daoud|Bir Kasdali|Bordj Bou Arreridj|Bordj Ghédir|Bordj Zemoura|Colla|Djaafra|El Ach|El Achir|El Anseur|El Hamadia|El Main|El M'hir|Ghilassa|Haraza|Hasnaoua|Khelil|Ksour|Mansoura|Medjana|Ouled Brahem|Ouled Dahmane|Ouled Sidi Brahim|Rabta|Ras El Oued|Sidi Embarek|Tefreg|Taglait|Teniet En Nasr|Tassameurt|Tixter";
s_a[35]="Afir|Ammal|Baghlia|Ben Choud|Beni Amrane|Bordj Menaiel|Boudouaou|Boudouaou-El-Bahri|Boumerdes|Bouzegza Keddara|Chabet el Ameur|Corso|Dellys|Djinet|El Kharrouba|Hammedi|Issers|Khemis El-Khechna|Larbatache|Leghata|Naciria|Ouled Aissa|Ouled Hedadj|Ouled Moussa|Si Mustapha|Sidi Daoud|Souk El Had|Taourga|Thenia|Tidjelabine|Timezrit|Zemmouri";
s_a[36]="Ain El Assel|Ain Kerma|Asfour|Ben Mehidi|Berrihane|Besbes|Bougous|Bouhadjar|Bouteldja|Chebaita Mokhtar|Chefia|Chihani|Dréan|Echatt|El Aioun|El Kala|El Tarf|Hammam Beni Salah|Lac des Oiseaux|Oued Zitoun|Raml Souk|Souarekh|Zerizer|Zitouna";
s_a[37]="Oum el Assel|Tindouf";
s_a[38]="    Ammari|Beni Chaib|Beni Lahcene|Boucaid|Bordj Bou Naama|Bordj El Emir Abdelkader|Khemisti|Larbaa|Lardjem|Layoune|Lazharia|Maacem|Melaab|Ouled Bessem|Sidi Abed|Sidi Boutouchent|Sidi Lantri|Sidi Slimane|Tamalaht|Theniet El Had|Tissemsilt|Youssoufia";
s_a[39]="Bayadha|Beni Guecha|Debila|Djamaa|Douar El Ma|El M'Ghair|El Ogla|El Oued|Guemar|Hamraia|Hassani Abdelkrim|Hassi Khalifa|Kouinine|M'Rara|Magrane|Mih Ouansa|Nakhla|Oued El Alenda|Oum Touyour|Ourmas|Reguiba|Robbah|Sidi Amrane|Sidi Aoun|Sidi Khellil|Still|Taghzout|Taleb Larbi|Tendla|Trifaoui";
s_a[40]="Ain Touila|Babar|Baghai|Bouhmama|Chechar|Chelia|Djellal|El Hamma|El Mahmal|El Oueldja|Ensigha|Kais|Khenchela|Khirane|M'Sara|M'Toussa|Ouled Rechache|Remila|Tamza|Taouzient|Yabous";
s_a[41]="Ain Soltane|Ain Zana|Bir Bou Haouch|Drea|Hanancha|Heddada|Khedara|Khemissa|M'daourouch|Mechroha|Merahna|Oued Keberit|Ouillen|Ouled Driss|Ouled Moumene|Oum El Adhaim|Ragouba|Safel El Ouiden|Sedrata|Sidi Fredj|Souk Ahras|Taoura|Terraguelt|Tiffech|Zaarouria|Zouabi";
s_a[42]="Aghbal|Ahmar El Ain|Attatba|Ain Tagourait|Beni Milleuk|Bou Ismail|Bouharoun|Bourkika|Chaiba|Cherchell|Damous|Douaouda|Fouka|Gouraya|Hadjeret Ennous|Hadjout|Khemisti|Koléa|Larhat|Menaceur|Merad|Messelmoun|Nador|Sidi Amar|Sidi Ghiles|Sidi Rached|Sidi Semiane|Tipaza";
s_a[43]="Ahmed Rachedi|Ain Beida Harriche|Ain Mellouk|Ain Tine|Amira Arrès|Benyahia Abderrahmane|Bouhatem|Chelghoum Laid|Chigara|Derradji Bousselah|El Mechira|Elayadi Barbes|Ferdjioua|Grarem Gouga|Hamala|Mila|Minar Zarza|Oued Athmania|Oued Endja|Oued Seguen|Ouled Khalouf|Rouached|Sidi Khelifa|Sidi Merouane|Tadjenanet|Tassadane Haddada|Teleghma|Terrai Bainen|Tessala Lemtai|Tiberguent|Yahia Beni Guecha|Zeghaia";
s_a[44]="Ain Benian|Ain Bouyahia|Ain Defla|Ain Lechiekh|Ain Soltane|Ain Torki|Arib|Bathia|Belaas|Ben Allal|Birbouche|Bir Ould Khelifa|Bordj Emir Khaled|Boumedfaa|Bourached|Djelida|Djemaa Ouled Cheikh|Djendel|El Abadia|El Amra|El Attaf|El Hassania|El Maine|Hammam Righa|Hoceinia|Khemis Miliana|Mekhatria|Miliana|Oued Chorfa|Oued Djemaa|Rouina|Sidi Lakhdar|Tacheta Zougagha|Tarik Ibn Ziad|Tiberkanine|Zeddine";
s_a[45]="Naâma|Mecheria|Ain Sefra|Tiout|Sfissifa|Moghrar|Assela|Djeniene Bourezg|Ain Ben Khelil|Makman Ben Amer|Kasdir|El Biod";
s_a[46]="Aghlal|Ain El Arbaa|Ain Kihal|Ain Témouchent|Ain Tolba|Aoubellil|Beni Saf|Bouzedjar|Chaabat El Leham|Chentouf|El Amria|El Emir Abdelkader|El Malah|El Messaid|Hammam Bouhadjar|Hassasna|Hassi El Ghella|Oued Berkeche|Oued Sabah|Ouled Boudjemaa|Ouled Kihal|Oulhaça El Gheraba|Sidi Ben Adda|Sidi Boumedienne|Sidi Ouriache (Tadmaya)|Sidi Safi|Tamzoura|Terga";
s_a[47]="Berriane (Bergan)|Bounoura (At Bounour)|Dhayet Bendhahoua|El Atteuf (Tajnint)|El Guerrara (Aguerrar)|El Golea (El Menia ou Tawrirt)|Ghardaia (Tagherdayt)|Hassi Fehal|Hassi Gara|Mansoura|Metlili|Sebseb|Zelfana";
s_a[48]="Ain Rahma|Ain Tarek|Ammi Moussa|Belassel Bouzegza|Bendaoud|Beni Dergoun|Beni Zentis|Dar Ben Abdellah|Djidioua|El Guettar|El Hamadna|El Hassi|El Matmar|El Ouldja|Had Echkalla|Hamri|Kalaa|Lahlef|Mazouna|Mediouna|Mendes|Merdja Sidi Abed|Ouarizane|Oued Essalem|Oued Rhiou|Ouled Aiche|Oued El Djemaa|Ouled Sidi Mihoub|Ramka|Relizane|Sidi Khettab|Sidi Lazreg|Sidi M'Hamed Ben Ali|Sidi M'Hamed Benaouda|Sidi Saada|Souk El Had|Yellel|Zemmora";









function print_wilaya(wilaya_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(wilaya_id);
	option_str.length=0;
	option_str.options[0] = new Option('Tout','');
	option_str.selectedIndex = 0;
	for (var i=0; i<wilaya_arr.length; i++) {
		option_str.options[option_str.length] = new Option(wilaya_arr[i],wilaya_arr[i]);
	}
}

function print_commune(commune_id, commune_index){
	var option_str = document.getElementById(commune_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Tout','');
	option_str.selectedIndex = 0;
	var commune_arr = s_a[commune_index].split("|");
	for (var i=0; i<commune_arr.length; i++) {
		option_str.options[option_str.length] = new Option(commune_arr[i],commune_arr[i]);
	}
}



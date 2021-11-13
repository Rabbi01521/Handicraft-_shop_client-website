import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const bannerBg = {
  background: `url("https://akkaara.co.in/wp-content/uploads/2019/01/akaara-intro.jpg")`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: " no-repeat",
  width: "100%",
  "&:hover": {
    background: "#19D3AE !important",
    color: "#fff !important",
  },
};

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Box
        style={{
          ...bannerBg,
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", color: "white" }}>
          About Us
        </Typography>
      </Box>

      <Box sx={{ height: "85vh", my: 5 }}>
        <Container>
          <Grid
            container
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 817.1105 424.48358"
              >
                <path
                  d="M566.91576,445.31951c19.93359,29.55265,14.11018,73.61729-12.81612,96.97712-22.80541,19.78476-24.29239,59.29235-3.03872,80.7354s60.7729,20.30659,80.75918-2.32242,16.23136-61.98584-7.67333-80.42735c-13.07937-10.0902-19.01067-27.334-19.264-43.85116s4.41892-32.66672,9.04947-48.52359C598.99173,448.69616,584.05119,449.48481,566.91576,445.31951Z"
                  transform="translate(-191.44475 -237.75821)"
                  fill="#a0fff0"
                />
                <path
                  d="M676.36009,298.353c-4.5841-.54352-9.14189.99792-13.45354,2.39686-5.94044,2.101-8.72379,3.24277-16.72132,6.75278-14.24889,6.48671-28.49582,14.84874-40.37591,25.53394.453-1.44438.952-2.87443,1.51769-4.2825,3.27682-7.59907,8.05171-14.43527,12.617-21.30277a239.05116,239.05116,0,0,1,17.77185-23.49324,6.41765,6.41765,0,0,0,4.37289,1.722c8.47844-.21012,8.45606-12.6307-.00039-12.86388-5.85093.145-7.64932,6.10355-5.425,9.86029a139.109,139.109,0,0,0-13.90539,11.48929c-9.41472,9.15984-18.79922,18.94457-24.96146,30.64928a100.22313,100.22313,0,0,0-11.72424-24.443c-6.037-8.84137-13.93208-17.38713-24.20105-21.11257-6.94622-2.00988-14.00078,2.27124-12.04773,10.06434,2.72722,8.96886,4.59823,12.934,7.08755,19.93592,4.15815,11.56977,7.88525,20.93679,14.73293,32.17061,4.14049,6.00639,9.77746,10.673,15.48079,15.21217a9.21933,9.21933,0,0,0,.1586,2.34387,5.77056,5.77056,0,0,0,1.81762,2.85215c-1.05917,22.04954,3.86961,44.64487,10.70473,65.47389-5.8211,1.03876-16.90113,3.36113-23.90387,4.70953-9.24121,1.48844-17.78874,2.38822-27.37659,3.54465-.58258-1.11138-1.57854-2.28017-2.00606-3.05423.38,1.04719.70585,2.11107,1.038,3.17318-1.07683.13092-2.15523.26214-3.2619.40131,1.1577.09059,2.31619.16576,3.47468.24879.52251,1.73008.99949,3.47429,1.39246,5.24441,2.44731,11.67272,2.51719,24.57085,3.075,37.37654-.07616,11.92387-2.74135,25.08523-6.56346,36.27772-5.76182,12.78646-11.53816,15.95031-18.34855,28.17754-10.09427,18.24962-20.7142,37.55183-21.49189,58.86a57.206,57.206,0,0,0,10.29763,31.58793c5.5459,8.09656,14.06948,13.43989,23.07907,16.97081a144.126,144.126,0,0,0,51.52189,11.40518c20.63686.28275,41.21994-9.50021,53.07491-26.5619,17.07935-23.5902,24.883-62.94915,16.29342-90.96671-4.45965-12.94721-8.93147-20.03416-16.17133-28.06271-4.33952-4.82808-9.66479-8.68885-13.8096-13.69693a19.23853,19.23853,0,0,1-2.59727-4.4991,61.50559,61.50559,0,0,1-2.56-10.49156l.22024,1.63881c-.9626-5.18837.00667-13.7041.15938-13.7513,2.31109-11.99983,5.00336-21.2008,9.339-28.98163a96.524,96.524,0,0,1,5.34412-8.44261,15.69206,15.69206,0,0,0,3.05894-4.93143,6.56881,6.56881,0,0,0-2.91487-7.15418c-1.19892-.80939-2.95412-.87181-4.54758-.92118-11.08435.1378-22.2425-.03533-33.24676,1.4753-.53311.07439-1.21541.1853-2.01508.32476-2.12854-24.00751-2.803-49.93049.45107-71.25093a25.51216,25.51216,0,0,1,2.55016-3.51521c10.5634-12.03192,17.70355-17.43159,30.123-25.27366,13.42841-8.06652,21.38707-10.94155,36.70848-15.92489.64068-.18117,1.14828-.31445,1.60366-.429-.84717,1.54694-1.84785,3.00869-2.83556,4.4675A112.91316,112.91316,0,0,1,641.388,340.686c-7.85189,5.26521-18.4094,9.59973-26.16746,12.90619-3.70159,1.56284-7.44792,3.02066-11.16364,4.54729,1.71319-.33673,3.42953-.65688,5.14508-.98213,25.57742-4.58576,47.09522-11.81423,65.388-31.23294,3.76518-4.3619,7.99046-8.82714,9.54741-14.51123C685.46821,305.86648,682.57022,298.94568,676.36009,298.353Zm-49.54135,138.394c-5.64837,8.48-9.09478,18.24373-11.54719,28.09794-3.23953,11.64985-3.9705,24.08033-.06674,35.666,2.88464,9.91418,11.358,16.43014,18.11614,23.70248,5.69076,5.713,11.14716,15.297,13.3919,21.77131,6.46178,20.29935,5.0281,34.09354-.90724,56.2688-3.05541,9.53721-3.56419,11.4095-8.90634,20.4079-5.38338,8.22728-2.03589,3.79806-7.27834,9.75322-5.06892,4.914-4.53306,4.38094-11.29947,8.66412-5.42224,3.3681-15.85766,7.07518-25.96528,7.1321-19.12388-.3645-41.00953-6.30455-57.64527-15.80083-8.44153-4.89276-14.66541-18.19918-15.74028-28.92068.03769-11.08553.07263-7.79025,1.65824-15.82567a142.48732,142.48732,0,0,1,6.27177-17.66527c.46324-1.09244,1.05524-2.49353.10207-.25321,3.29566-8.3109,7.497-13.81352,13.13515-23.92909,2.93057-4.49655,6.02485-7.1744,10.77657-14.07861.855-1.20491-.29443.31877-.61634.73215,9.52307-13.0643,10.54691-29.74273,11.71678-37.8758,1.33279-7.25389-1.06623-21.62065-4.146-32.843-2.21373-8.97259-4.35994-17.45348-8.86826-25.327,16.856,1.16653,33.74493,1.456,50.553-.65128C606.25254,435.10264,616.76726,435.96346,626.81874,436.74694ZM577.699,342.54139c-7.79967-13.64825-10.46408-32.74907-15.81762-49.356-.27637-.91175-.59985-1.811-.92255-2.71053.2701.16812.54647.32613.80714.5076q.52173.38113,1.04385.7615c.16135.12758.34979.27607.58062.45587a57.84647,57.84647,0,0,1,9.59139,9.9239l-.20022-.25959c1.1789,1.16457,6.43352,9.2096,9.06337,14.74186,3.49156,7.16115,5.89922,13.34774,6.18737,20.57759a105.40212,105.40212,0,0,1-.4707,14.92971c-.0369.82745-.14643,1.65509-.24889,2.48205A112.70812,112.70812,0,0,1,577.699,342.54139Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M632.86282,256.20981c-8.47805.21012-8.45606,12.63069,0,12.86388C641.34125,268.86357,641.31887,256.4429,632.86282,256.20981Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M647.624,237.75821c-8.478.21013-8.45605,12.6307.0004,12.86389C656.10245,250.412,656.08047,237.9913,647.624,237.75821Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M664.23032,245.13881c-8.47805.21013-8.45567,12.63079.00039,12.86389C672.70914,257.79257,672.68677,245.372,664.23032,245.13881Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M677.14681,261.74531c-8.478.21-8.45606,12.63069,0,12.86388C685.62485,274.39907,685.60286,261.9784,677.14681,261.74531Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M656.84991,276.50651c-8.478.21012-8.45606,12.63079,0,12.86388C665.32835,289.16036,665.306,276.73969,656.84991,276.50651Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M651.31422,259.90011c-8.478.21012-8.45567,12.63079.00039,12.86388C659.79265,272.55387,659.77067,260.1332,651.31422,259.90011Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M588.92468,623.28849c-8.74891-.64127-15.98328-3.204-21.181-8.75039-3.51668-4.83485-4.77331-8.44594-6.91913-15.23611-3.09074-11.72444-2.90623-11.03223-3.40166-21.89723.358-9.616,1.31513-15.39668,4.35209-25.8528,1.90359-5.36336,5.7944-12.16825,9.275-18.5943-5.25344,5.18689-10.55673,10.45966-14.46795,16.76882-8.03286,14.57915-11.88441,32.43658-6.27884,48.52292,3.534,9.8917,8.77718,21.11551,19.43833,24.723a31.15207,31.15207,0,0,0,17.60933,1.13278C588.72879,623.77205,592.21446,623.425,588.92468,623.28849Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M1007.46728,501.95719c-3.02387-4.98225-9.27351-3.98605-14.2538-3.66649-5.03217.324-10.07771.43766-15.11768.58643-21.86869.60315-43.7346,1.81281-65.61946,1.84823-5.6685-.25808-11.33533-.38314-16.99937-.41438,1.11373-.999,2.23193-1.99365,3.3267-3.01425,9.84236-8.87711,17.68814-19.62142,26.09553-29.80021,11.68836-14.16178,24.33318-31.86108,33.14491-51.17688,6.41136-15.65921,21.2686-52.42389-2.95026-58.9659-13.2226-2.26093-21.22677,11.86334-26.922,21.60824-2.46059,4.32932-4.982,9.3375-7.4197,14.47228.33128-12.94863-.02788-25.9964-2.57436-38.72613a145.306,145.306,0,0,0-8.12854-22.779c-6.50394-15.63119-25.19706-34.901-40.93659-18.14909a58.77485,58.77485,0,0,0-8.87641,11.67721,72.42646,72.42646,0,0,0-5.37627,18.66134c-3.43267,21.82644-1.98933,43.77335.50863,65.64761-4.18557-7.88788-8.82009-15.74719-15.87784-21.28714-8.87474-7.39655-24.4687-11.13163-32.99656-1.37878a25.72193,25.72193,0,0,0-5.3428,10.67584c-.2097.53122-.09035.33072.10541-.07138-1.30392,3.44326-1.5164,7.14628-2.02614,10.7839a47.74927,47.74927,0,0,0,.57666,13.329c.06191.31719.097.4912.12214.60915.02454.17847.04741.35707.06971.53568,1.06578,5.754,2.44777,11.54168,5.25748,16.719,7.63552,12.93692,16.9436,25.321,28.66487,34.83447,4.73323,3.9102,9.90036,7.24025,14.82433,10.89558,4.76614,3.68308,9.21773,7.7295,13.5918,11.86348.1333,1.293.27495,2.58538.38817,3.88051-24.60479,1.30349-49.16886,3.87576-73.68665,6.1841q-3.12034.3961-6.2223.92858,3.95106.05185,7.89765.272c21.87259,1.61246,43.73626,3.40548,65.67076,3.92651,2.71323.01394,5.42311.08868,8.13188.19366a9.08714,9.08714,0,0,0,1.435,2.06658,8.98735,8.98735,0,0,0,10.20989,1.70713,9.51108,9.51108,0,0,0,9.887-2.34989c13.265,1.10161,26.51827,2.33818,39.8368,2.22552,25.955-.109,44.37539-2.01024,67.07-3.98926-3.97755,15.20162-8.66338,30.23077-13.15568,45.28794-4.64121,14.8801-10.76759,29.23889-16.13828,43.86147-6.34444,16.10649-9.8524,25.96684-19.17833,41.60332-3.0116,4.47167-5.22568,5.59182-12.06816,6.07242-25.45863,2.5844-43.61747-2.31837-70.32814-1.96521-10.18256-.19185-18.32-2.97437-31.59282-4.5259-13.71339-1.42354-25.95889-1.63226-33.34512-5.14845-.087-.09439-.17066-.1853-.2387-.25961-.1082-.16745-.20468-.34034-.30116-.51448-.10485-.3317-.24037-.77605-.36864-1.279-2.146-9.2445-4.31106-18.48537-6.90159-27.6182-10.00354-35.38283-19.81913-70.816-31.25764-105.76842,6.99584,40.26623,12.62475,80.829,22.37118,120.55636,1.068,4.65906,1.98822,9.34894,2.8811,14.04452a18.26246,18.26246,0,0,0,4.04782,9.48446c3.58492,4.13426,9.22,5.44737,14.36422,6.52667,8.24343,1.70811,16.66308,2.24546,25.04984,2.73665,11.7129.7596,12.73015,1.7505,25.90758,3.746,8.29138,1.3799,16.69933,1.00206,25.0621,1.35885,15.89958,1.26445,24.713,1.9376,38.40685,1.66,8.9333-.17637,18.08076.02426,26.801-2.14674,7.91326-2.42155,12.29235-10.18019,15.87226-17.09544a250.39668,250.39668,0,0,0,10.2729-23.20077q10.0094-26.63823,20.34505-53.15156c5.6791-15.44784,10.33983-31.23561,15.44394-46.87628.67705-2.23778,1.474-4.43583,2.23527-6.64615a4.45384,4.45384,0,0,0,.44282-1.20715C1008.5152,508.62273,1009.24747,505.02763,1007.46728,501.95719Zm-64.57209-110.411c3.46223-6.39965,5.52071-10.18939,7.39069-12.695.30674,5.45392-1.45337,11.10653-4.045,22.05175-7.75822,27.38327-25.92934,54.77309-42.14793,83.77007-2.09864,3.50266-4.40251,6.86813-6.77945,10.183a301.65386,301.65386,0,0,0,12.55-31.14275c.47795-1.531.89121-3.07978,1.33068-4.62127,3.89612-7.96039,7.84132-15.89764,11.74915-23.85217C929.83209,420.78448,935.41192,405.72048,942.89519,391.54615ZM875.427,339.74172c1.46286-5.66948,2.03841-5.95237,2.672-7.00016,2.93352-3.98117,1.60674-2.84471,5.09741-6.10616,1.58556.99048,2.65244,1.92241,5.84251,5.77335.08867.13357.1701.256.29558.447,5.35842,8.46274,5.97413,11.78317,9.92267,24.32357,3.267,12.85159,2.66025,34.84228.65029,54.85995-1.50692,14.46433-2.34961,23.13119-7.0505,41.08354-.63076,2.09348-1.22974,4.02481-1.81421,5.86984-2.26595,4.77436-4.51127,9.55807-6.67014,14.38165-.86946,1.95935-1.72219,3.926-2.58384,5.88852C879.70286,430.89329,866.67825,378.55472,875.427,339.74172Zm-42.2182,117.22451c-4.29264-6.58481-7.97684-13.5412-11.93319-20.32873-3.5838-6.90995-3.04562-4.46819-4.692-11.87087-2.25647-8.04321-.11656-20.87667,1.14552-23.63536.063-.14416.10039-.23493.15-.3501a14.97859,14.97859,0,0,1,.92523-1.641c.116-.1213.21639-.226.30674-.31887.12995-.03207.26268-.05117.39318-.08045.2281-.00516.43445-.00739.61794-.004a22.42947,22.42947,0,0,1,3.53082.975c.087.03346.12493.04754.19855.0757.372.16634.749.32222,1.11262.50682,2.72828,1.63533,2.49014,1.17146,6.97687,6.07214l.02008.02663c2.74056,3.95566,5.11192,8.15949,7.45539,12.35914,2.8811,5.33026,5.48334,10.80858,7.901,16.3629.3363.834.68263,1.66391.99885,2.5059,6.02766,16.13535,11.41731,40.03158,13.26332,53.02942-2.658-3.66146-5.42368-7.24011-8.423-10.6382C844.91831,471.08534,838.077,464.90194,833.20875,456.96623Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M824.32788,344.44582c-12.04418.29851-12.013,17.94357,0,18.27484C836.37261,362.42215,836.34138,344.777,824.32788,344.44582Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M936.2613,333.024c-12.04417.29851-12.01294,17.94357,0,18.27484C948.306,351.00037,948.2748,333.35518,936.2613,333.024Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M961.38921,463.23231c-12.04417.29851-12.01294,17.94357,0,18.27485C973.434,481.20865,973.40272,463.56345,961.38921,463.23231Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M796.02884,538.91715l10.66063,87.59271c38.27513,2.31474,76.55027,4.62948,113.2251,13.31994,13.35271-33.569,26.70542-67.138,43.92629-97.9138-26.22364,25.58062-52.44728,51.16124-81.48385,72.98064-20.22213-2.77816-40.44426-5.55633-59.30238-8.34242C814.49449,585.40666,805.93435,564.25909,796.02884,538.91715Z"
                  transform="translate(-191.44475 -237.75821)"
                  fill="#a0fff0"
                />
                <path
                  d="M323.70862,381.11438c-1.27774-9.29965-3.38681-18.69-8.26314-26.71106s-12.918-14.55231-22.23787-15.6721c-12.07965-1.45129-23.97872,6.75538-29.22106,17.73415-5.24278,10.97877-4.68651,24.01629-1.07474,35.63415,3.61221,11.61764,10.0387,22.12385,16.40191,32.49319l31.077,50.64123A175.23832,175.23832,0,0,0,323.70862,381.11438Z"
                  transform="translate(-191.44475 -237.75821)"
                  fill="#a0fff0"
                />
                <path
                  d="M306.32686,483.78421l12.132,4.5971q-4.03425-6.57367-8.06805-13.14737Q308.47679,479.56312,306.32686,483.78421Z"
                  transform="translate(-191.44475 -237.75821)"
                  fill="#a0fff0"
                />
                <path
                  d="M307.02819,568.997c-.00487-.05576-.00946-.11452-.0149-.16426-.02036-.1459-.04386-.29138-.0645-.43729C306.92729,568.31013,306.93933,568.48012,307.02819,568.997Z"
                  transform="translate(-191.44475 -237.75821)"
                />
                <path
                  d="M421.54728,468.877c-1.84749-12.61065-4.81093-26.17586-13.79583-35.73636-3.89965-4.21426-10.20519-6.40272-15.73762-4.40359-5.5998,2.27532-8.95452,7.63218-10.88514,13.12161-7.69381,20.07786-12.89687,41.03962-21.588,60.74913a368.08931,368.08931,0,0,1-19.039,41.16575c-5.392,9.87382-11.5582,19.29042-17.5381,28.81137a19.55013,19.55013,0,0,0-2.14418,1.65256,559.85593,559.85593,0,0,0-1.06349-72.55184,5.9962,5.9962,0,0,0,2.49247-1.786c3.72393-4.11808,6.12666-9.24088,8.40729-14.25289,2.70659-6.45274,5.16895-13.00624,7.55363-19.584a257.50769,257.50769,0,0,0,14.60477-63.093c1.41722-12.20934,1.08011-24.65473-2.143-36.56351-2.69-11.06257-8.11835-21.81255-17.58511-28.54377-5.25123-3.87715-11.70583-5.48743-17.995-6.7996-6.08167-1.27991-12.17222-2.54291-18.319-3.46966-5.13571-.72495-10.37833-1.17557-15.52091-.26888a35.36915,35.36915,0,0,0-14.98717,6.65,53.77233,53.77233,0,0,0-16.1246,23.38729A69.6001,69.6001,0,0,0,246.34514,373.61a78.75925,78.75925,0,0,0-.63179,17.61249c1.12225,11.65767,5.83944,22.6053,10.6151,33.17769a166.57629,166.57629,0,0,0,22.27679,35.25221c10.80316,12.5936,23.02983,23.87245,35.045,35.29807a9.25645,9.25645,0,0,0,.64727,4.85421,4.06051,4.06051,0,0,0,3.90137,2.211c-1.646,18.03745-3.21168,36.08867-4.43541,54.1608a120.81825,120.81825,0,0,0-11.09181-29.76334c-7.4751-14.63945-18.60847-27.10233-31.30813-37.42735-5.96844-4.6696-11.76144-9.71873-18.495-13.27167a71.05071,71.05071,0,0,0-24.43644-6.836c-7.01243-.92847-14.454-.17472-20.56747,3.60368-9.61239,5.25882-17.83393,14.4848-16.21519,26.13845.78544,9.37963,5.53473,17.64388,11.37589,24.80322,6.75674,8.95782,15.03905,16.61135,23.694,23.70075,13.87293,11.414,28.98049,21.23781,44.34288,30.51123a85.50343,85.50343,0,0,0,16.65607,7.37763c7.934,2.211,16.11515,3.36045,24.23149,4.70973-.83532,18.62882-.3073,37.29634-1.20567,55.91542a53.53009,53.53009,0,0,0-7.08123-.16339,30.0362,30.0362,0,0,0-7.31858,1.52787,22.87492,22.87492,0,0,1-5.97159.74716,19.449,19.449,0,0,0-9.29277,2.687,11.63626,11.63626,0,0,1-4.92128.75017c-4.45376-1.23319-11.2274-3.2283-16.31667-.79059-4.84848,2.82082-9.1139,6.59119-13.67428,9.85318,4.90036-2.35344,9.59318-5.20422,14.61164-7.28375,4.6782-1.09717,8.84645.96989,11.79842,2.35071a14.3333,14.3333,0,0,0,10.29663.88806c3.27646-1.21657,3.75575-1.47972,5.70987-1.52372,2.903-.05518,5.8168.225,8.69624-.31231.71406-.08227,3.88045-.73527,4.6332-.92475a38.41272,38.41272,0,0,1,8.32961.40189c-.02637.3566-.041.71349-.0688,1.06994.08858-.34556.16053-.69413.24681-1.03984,1.17615.20123,2.53833.448,5.126.696,3.355.50709,6.68737-.26931,10.04122-.34671,4.59364.0096,5.81336.56313,11.78638,1.66561,9.33176,1.68983,18.53136,4.1069,27.92532,5.4364,7.68435,1.05733,15.45355.9517,23.1915.86025.52-.00731,1.04-.01834,1.56026-.02637-.14562-.0311-.29066-.06278-.43657-.09431-8.33305-1.81452-16.74808-3.32691-24.89137-5.90623-8.58788-2.77568-17.07916-5.86266-25.84707-8.04754-4.2723-1.15006-8.59878-2.34957-13.04651-2.47727-2.9749-.09144-5.9177.53977-8.89088.43056-1.56141-.0645-3.1231-.18977-4.68479-.313,2.87629-14.0058,4.39068-28.26013,6.01114-42.46415q.77655-6.29322,1.3576-12.6012c3.60783,3.75389,10.03348,5.33622,15.89614,5.15305,6.89978.18274,13.39824-2.18345,19.48764-5.22285A117.51736,117.51736,0,0,0,378.63394,574.829a116.82946,116.82946,0,0,0,28.06119-32.99954,149.9252,149.9252,0,0,0,8.83469-18.026,114.0874,114.0874,0,0,0,4.60568-17.50055A112.6378,112.6378,0,0,0,421.54728,468.877ZM312.01856,587.96131c-.0235.4714-.03354.94324-.055,1.41464-7.674-2.77252-16.55316-5.68436-22.43675-8.2998a95.26044,95.26044,0,0,1-15.32885-9.26912c-17.7508-13.7974-33.79371-24.38886-49.0294-37.8536A119.44571,119.44571,0,0,1,209.9787,517.9217c-2.553-3.43627-5.2518-6.81306-7.0626-10.71586a35.27427,35.27427,0,0,1-2.69856-9.41345c-.03153-.6272-.14648-2.50737-.084-3.69154.02522-.11982.07739-.407.15336-.84922.91959-7.09928,9.25952-12.82621,15.5619-15.43248,4.66445-1.64941,9.4-1.09043,16.38891-.26816a73.56847,73.56847,0,0,1,15.49052,4.74428c7.84746,4.12453,10.83612,7.15805,16.79309,11.79927,11.7451,9.69839,20.01164,18.424,26.9398,29.82985,7.66256,12.9952,11.056,22.25171,14.3075,37.36314.47642,2.35429.84678,4.72908,1.18016,7.10788a4.11572,4.11572,0,0,1,.0645.43729c.02236.16354.04987.32636.072.48975-.02408-.13128-.03956-.22359-.05705-.32549.01491.1664.0281.349.03354.5551-.07281,2.59394.18489,1.41608-.34656,3.10849-.21012-.00574-.41881-.03326-.62864-.05217-.141-.03254-.31159-.073-.53289-.12757-8.43653-2.85794-22.7985-20.23265-34.447-30.84059-15.43578-14.26938-32.50549-26.69442-47.36452-41.598,9.90765,15.88969,27.69829,33.31858,41.85014,48.32781,8.64378,8.29249,33.60051,41.4342,46.77257,31.99438C312.24387,582.89641,312.12061,585.42829,312.01856,587.96131ZM304.389,373.49953a62.06523,62.06523,0,0,0-6.47208-10.95537c.48846.97549.9752,1.95441,1.4046,2.958,3.59007,8.6197,5.80132,18.3006,7.68751,27.6206,4.74786,22.46154,7.56711,40.01541,8.15016,62.21236.20181,9.80674-.17314,19.61979-.7281,29.41048q-.29239,4.51137-.69772,9.01414c-.00573.07955-.01147.16024-.01749.24022-9.80444-12.982-19.195-24.36765-28.2134-36.8893a253.03775,253.03775,0,0,1-24.5319-43.35679c-1.32033-3.25095-5.304-12.8384-6.52741-19.81729-.08657-.475-.24137-1.45807-.32364-1.96832a67.9659,67.9659,0,0,1-.04041-14.96064,66.424,66.424,0,0,1,3.56971-17.35923c3.918-11.30279,12.51362-22.5858,24.40347-24.77828,6.76075-1.29726,15.85458.36419,25.45723,2.3444a105.64686,105.64686,0,0,1,15.37472,3.87271,20.75793,20.75793,0,0,1,3.38682,1.65715,19.46086,19.46086,0,0,1,3.28592,2.27317c7.98591,7.30668,10.16191,12.57869,13.21678,23.45694,2.36433,9.46233,2.91643,14.94861,2.52658,25.6404-1.31259,24.00445-6.89061,47.92434-15.99791,72.67066-2.26944,6.16738-4.606,12.45572-6.98778,17.74865,1.20309-17.02714,1.5508-34.16407-.4552-51.13875A223.45714,223.45714,0,0,0,304.389,373.49953ZM410.79744,505.60286c-2.12611,9.28589-3.40345,14.19084-6.86509,20.96735-2.31875,4.8995-7.9045,14.3485-8.55692,15.27282-1.38885,2.14919-2.85566,4.24263-4.38009,6.29708-12.41959,15.96595-30.88846,30.13629-44.6109,35.86293a29.74449,29.74449,0,0,1-17.08433,2.05116c-2.24766-.72237-1.12627-.07109-3.51639-1.64067-.11839-.10391-.22187-.19837-.30844-.28236a14.8103,14.8103,0,0,1,.03153-1.48386,7.69436,7.69436,0,0,1,.18948-.88806l.00286-.00774c.06565-.12011.14591-.231.22044-.346,1.85953-2.06879,1.37938-1.449,4.85966-3.353,15.79982-7.93,28.40374-20.72914,39.52364-34.24175,9.42893-11.10156,17.4653-23.50023,22.43159-37.2512A206.72379,206.72379,0,0,0,398.846,481.863a152.72639,152.72639,0,0,0,2.30614-24.21328c-.08428.41063-.17113.82083-.25713,1.23147a209.02492,209.02492,0,0,1-6.51824,24.395c-2.59824,7.451-5.80275,16.55416-8.03378,21.427A152.567,152.567,0,0,1,369.7786,530.549c-5.28591,6.82267-19.01781,22.92477-29.24908,30.92774A76.626,76.626,0,0,1,328.668,569.364c-1.76121.92761-3.63364,1.87228-5.35758,2.99138,9.88872-11.03921,19.52-22.36579,27.42769-34.93689,9.72418-15.13822,17.17892-31.59435,23.34429-48.467,4.44744-12.166,7.6875-24.72124,11.80071-36.99779,2.13127-5.95525,2.62575-8.80116,5.11879-12.9383l.08-.09861a18.78083,18.78083,0,0,1,2.29123-2.14317c4.401-2.9514,8.99866.29009,13.852,10.49657,1.091,2.03238,3.90883,11.25564,4.84905,17.05552.06307.59624.4403,2.917.60972,3.8942A107.41218,107.41218,0,0,1,410.79744,505.60286Z"
                  transform="translate(-191.44475 -237.75821)"
                />
              </svg>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ my: 1 }}>
                Our Story
              </Typography>
              <Typography variant="body2" style={{ letterSpacing: 1 }}>
                From tales of tradition, from dusty workshops and the smell of
                the earth, Handicraft was born. It was shaped by the potter, on
                his wheel and by the carpenter’s steady hand. By the prick of
                the needle and the chisel on stone. This is the world where our
                stories are told. In places and practices from time immemorial,
                in folklore and fables that have somehow been forgotten.
                Handcrafted to glorious imperfection, each piece in the
                Handicraft collection recalls the story of it’s own identity.
                Handicraft brings you premium lifestyle products inspired by
                folklore and traditional crafts. Our products are handcrafted by
                artisans who have honed their skills over generations of
                practice. Each product in the Handicraft collection is designed
                with intricate care and concern. Concern for tradition, concern
                for the material and concern for the artisans. Through each
                product, Handicraft strives to revive what has been lost – the
                exquisite splendour of traditional arts, the cultural heritage
                of generations of craftspeople and the memory of age-old
                stories, embedded in traditional wisdom and folklore.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
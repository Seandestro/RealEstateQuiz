import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { US_COUNTIES } from '../../data/us-counties';
import { US_STATES } from '../../data/us-states';

const STEPS = ['State', 'County', 'City / Zip'];

// Major cities by state
const US_CITIES: Record<string, string[]> = {
  Alabama: ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile', 'Tuscaloosa', 'Hoover', 'Auburn', 'Dothan'],
  Alaska: ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Ketchikan', 'Wasilla', 'Kenai', 'Kodiak'],
  Arizona: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise'],
  Arkansas: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro', 'Conway', 'Rogers', 'Bentonville'],
  California: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Irvine', 'Santa Ana', 'Riverside', 'Stockton', 'Chula Vista'],
  Colorado: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Arvada', 'Westminster', 'Pueblo', 'Boulder'],
  Connecticut: ['Bridgeport', 'New Haven', 'Stamford', 'Hartford', 'Waterbury', 'Norwalk', 'Danbury', 'New Britain'],
  Delaware: ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna', 'Milford', 'Seaford', 'Georgetown'],
  Florida: ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Hialeah', 'Port St. Lucie', 'Tallahassee', 'Cape Coral', 'Fort Lauderdale', 'Pembroke Pines', 'Hollywood', 'Gainesville', 'Miramar', 'Coral Springs'],
  Georgia: ['Atlanta', 'Columbus', 'Augusta', 'Macon', 'Savannah', 'Athens', 'Sandy Springs', 'Roswell', 'Albany', 'Johns Creek'],
  Hawaii: ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu', 'Kaneohe', 'Mililani', 'Kahului'],
  Idaho: ['Boise', 'Nampa', 'Meridian', 'Idaho Falls', 'Pocatello', 'Caldwell', 'Coeur d\'Alene', 'Twin Falls'],
  Illinois: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield', 'Elgin', 'Peoria', 'Champaign', 'Waukegan'],
  Indiana: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Fishers', 'Bloomington', 'Hammond', 'Gary', 'Lafayette'],
  Iowa: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City', 'Waterloo', 'Ames', 'West Des Moines'],
  Kansas: ['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka', 'Lawrence', 'Shawnee', 'Manhattan'],
  Kentucky: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Richmond', 'Georgetown', 'Florence'],
  Louisiana: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles', 'Kenner', 'Bossier City', 'Monroe'],
  Maine: ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn', 'Biddeford', 'Sanford', 'Brunswick'],
  Maryland: ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie', 'Hagerstown', 'Annapolis', 'College Park'],
  Massachusetts: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'New Bedford', 'Quincy', 'Lynn', 'Fall River'],
  Michigan: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing', 'Flint', 'Dearborn', 'Livonia', 'Troy'],
  Minnesota: ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park', 'Plymouth', 'Maple Grove'],
  Mississippi: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi', 'Meridian', 'Tupelo', 'Olive Branch'],
  Missouri: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence', 'Lee\'s Summit', 'O\'Fallon', 'St. Joseph'],
  Montana: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Helena', 'Kalispell', 'Havre'],
  Nebraska: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont', 'Hastings', 'Norfolk'],
  Nevada: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City', 'Fernley', 'Elko'],
  'New Hampshire': ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover', 'Rochester', 'Salem', 'Merrimack'],
  'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Woodbridge', 'Toms River', 'Hamilton', 'Trenton', 'Clifton'],
  'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell', 'Farmington', 'Clovis', 'Hobbs'],
  'New York': ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'New Rochelle', 'White Plains', 'Utica', 'Troy'],
  'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington', 'High Point', 'Asheville'],
  'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Williston', 'Dickinson', 'Mandan'],
  Ohio: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain'],
  Oklahoma: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmond', 'Moore', 'Midwest City'],
  Oregon: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Beaverton', 'Bend', 'Medford', 'Springfield', 'Corvallis'],
  Pennsylvania: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster', 'Harrisburg', 'York'],
  'Rhode Island': ['Providence', 'Cranston', 'Warwick', 'Pawtucket', 'East Providence', 'Woonsocket', 'Coventry', 'Cumberland'],
  'South Carolina': ['Columbia', 'Charleston', 'North Charleston', 'Mount Pleasant', 'Rock Hill', 'Greenville', 'Summerville', 'Goose Creek'],
  'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell', 'Yankton', 'Pierre'],
  Tennessee: ['Memphis', 'Nashville', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro', 'Franklin', 'Jackson', 'Johnson City', 'Bartlett'],
  Texas: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Lubbock', 'Laredo', 'Irving', 'Garland', 'Frisco', 'McKinney'],
  Utah: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Sandy', 'Ogden', 'St. George', 'Layton', 'Taylorsville'],
  Vermont: ['Burlington', 'South Burlington', 'Rutland', 'Barre', 'Montpelier', 'Winooski', 'St. Albans', 'Newport'],
  Virginia: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Hampton', 'Roanoke', 'Portsmouth', 'Suffolk'],
  Washington: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Spokane Valley', 'Federal Way'],
  'West Virginia': ['Charleston', 'Huntington', 'Parkersburg', 'Morgantown', 'Wheeling', 'Weirton', 'Fairmont', 'Martinsburg'],
  Wisconsin: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton', 'Waukesha', 'Oshkosh', 'Eau Claire', 'Janesville'],
  Wyoming: ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs', 'Sheridan', 'Green River', 'Evanston'],
};

export default function LocationScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [zip, setZip] = useState('');
  const [stateSearch, setStateSearch] = useState('');
  const [countySearch, setCountySearch] = useState('');
  const [citySearch, setCitySearch] = useState('');

  const filteredStates = US_STATES.filter((s) =>
    s.toLowerCase().startsWith(stateSearch.toLowerCase())
  );

  const counties = selectedState ? (US_COUNTIES[selectedState] ?? []) : [];
  const filteredCounties = counties.filter((c) =>
    c.toLowerCase().includes(countySearch.toLowerCase())
  );

  const cities = selectedState ? (US_CITIES[selectedState] ?? []) : [];
  const filteredCities = cities.filter((c) =>
    c.toLowerCase().includes(citySearch.toLowerCase())
  );

  function canAdvance() {
    if (step === 0) return selectedState !== '';
    if (step === 1) return selectedCounty !== '';
    if (step === 2) return selectedCity !== '' || zip.trim().length === 5;
    return false;
  }

  function handleNext() {
    if (step < 2) {
      setStep(step + 1);
    } else {
      router.push({
        pathname: '/menu',
        params: { state: selectedState, county: selectedCounty, city: selectedCity || zip },
      });
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
    else router.back();
  }

  const renderPickerStep = (
    items: string[],
    selected: string,
    onSelect: (val: string) => void,
    search: string,
    onSearch: (val: string) => void,
    placeholder: string,
    emptyText: string,
  ) => (
    <View style={styles.stepContent}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#555577"
        value={search}
        onChangeText={onSearch}
        autoCapitalize="words"
      />
      {items.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>{emptyText}</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.listItem, selected === item && styles.listItemSelected]}
              onPress={() => { onSelect(item); onSearch(''); }}
            >
              <Text style={[styles.listItemText, selected === item && styles.listItemTextSelected]}>
                {item}
              </Text>
              {selected === item && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Step indicator */}
      <View style={styles.stepRow}>
        {['State', 'County', 'City / Zip'].map((label, i) => (
          <View key={i} style={styles.stepItem}>
            <View style={[styles.stepDot, i <= step && styles.stepDotActive, i < step && styles.stepDotDone]}>
              {i < step
                ? <Text style={styles.stepCheck}>✓</Text>
                : <Text style={[styles.stepNumber, i === step && styles.stepNumberActive]}>{i + 1}</Text>
              }
            </View>
            <Text style={[styles.stepLabel, i === step && styles.stepLabelActive]}>{label}</Text>
            {i < 2 && <View style={[styles.stepLine, i < step && styles.stepLineDone]} />}
          </View>
        ))}
      </View>

      <Text style={styles.title}>
        {step === 0 && 'Select your state'}
        {step === 1 && 'Select your county'}
        {step === 2 && 'Select your city'}
      </Text>
      <Text style={styles.subtitle}>
        {step === 0 && "We\u2019ll personalize your quiz for your market"}
        {step === 1 && `${selectedState} \u2014 which county are you in?`}
        {step === 2 && `${selectedState}, ${selectedCounty}`}
      </Text>

      {step === 0 && renderPickerStep(
        filteredStates, selectedState, setSelectedState,
        stateSearch, setStateSearch, 'Search states...', ''
      )}

      {step === 1 && renderPickerStep(
        filteredCounties, selectedCounty, setSelectedCounty,
        countySearch, setCountySearch, 'Search counties...', 'No counties found for this state.'
      )}

      {step === 2 && (
        <View style={styles.stepContent}>
          {renderPickerStep(
            filteredCities, selectedCity,
            (val) => { setSelectedCity(val); setZip(''); },
            citySearch, setCitySearch, 'Search cities...', ''
          )}
          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or enter zip code</Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Zip Code (e.g. 78701)"
              placeholderTextColor="#555577"
              value={zip}
              onChangeText={(t) => { setZip(t); setSelectedCity(''); }}
              keyboardType="number-pad"
              maxLength={5}
            />
          </View>
        </View>
      )}

      <TouchableOpacity
        style={[styles.nextButton, !canAdvance() && styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={!canAdvance()}
      >
        <Text style={styles.nextButtonText}>
          {step < 2 ? 'Continue \u2192' : 'Find My Market \u2192'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f1e', paddingHorizontal: 24, paddingTop: 60, paddingBottom: 32 },
  backButton: { marginBottom: 24 },
  backText: { color: '#4f8ef7', fontSize: 16, fontWeight: '600' },
  stepRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 36 },
  stepItem: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  stepDot: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#1a1a2e', borderWidth: 2, borderColor: '#2a2a4a', alignItems: 'center', justifyContent: 'center' },
  stepDotActive: { borderColor: '#4f8ef7' },
  stepDotDone: { backgroundColor: '#4f8ef7', borderColor: '#4f8ef7' },
  stepNumber: { color: '#555577', fontSize: 13, fontWeight: 'bold' },
  stepNumberActive: { color: '#4f8ef7' },
  stepCheck: { color: '#ffffff', fontSize: 14, fontWeight: 'bold' },
  stepLabel: { color: '#555577', fontSize: 11, marginLeft: 6, fontWeight: '600' },
  stepLabelActive: { color: '#a0a0c0' },
  stepLine: { flex: 1, height: 2, backgroundColor: '#2a2a4a', marginHorizontal: 6 },
  stepLineDone: { backgroundColor: '#4f8ef7' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  subtitle: { fontSize: 15, color: '#7070a0', marginBottom: 20 },
  stepContent: { flex: 1 },
  searchInput: { backgroundColor: '#1a1a2e', color: '#ffffff', padding: 14, borderRadius: 12, fontSize: 16, borderWidth: 1.5, borderColor: '#2a2a4a', marginBottom: 12 },
  list: { flex: 1, borderRadius: 12, backgroundColor: '#1a1a2e', borderWidth: 1.5, borderColor: '#2a2a4a' },
  listItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, paddingHorizontal: 16 },
  listItemSelected: { backgroundColor: '#1e2a4a' },
  listItemText: { color: '#c0c0d8', fontSize: 16 },
  listItemTextSelected: { color: '#4f8ef7', fontWeight: '600' },
  checkmark: { color: '#4f8ef7', fontSize: 16, fontWeight: 'bold' },
  separator: { height: 1, backgroundColor: '#1e1e30' },
  emptyBox: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { color: '#555577', fontSize: 14 },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12, gap: 12 },
  divider: { flex: 1, height: 1, backgroundColor: '#2a2a4a' },
  dividerText: { color: '#555577', fontSize: 12 },
  inputWrapper: { marginBottom: 8 },
  input: { backgroundColor: '#1a1a2e', color: '#ffffff', padding: 16, borderRadius: 12, fontSize: 16, borderWidth: 1.5, borderColor: '#2a2a4a' },
  nextButton: { backgroundColor: '#4f8ef7', paddingVertical: 16, borderRadius: 14, alignItems: 'center', marginTop: 12 },
  nextButtonDisabled: { backgroundColor: '#2a2a4a' },
  nextButtonText: { color: '#ffffff', fontSize: 17, fontWeight: 'bold' },
});

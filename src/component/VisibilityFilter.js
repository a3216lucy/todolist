// import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { VISIBILITY_FILTER } from '../constants';
import { setFilter } from '../redux/actions';

function VisibilityFilter () {
  const dispatch = useDispatch();

  return (
<div class="inset-0 mb-4 border-b border-gray-200 bg-blue">
    <ul class="flex flex-wrap justify-center items-start" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
    {Object.keys(VISIBILITY_FILTER).map(filterkey => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
            return (
        <li class="mr-2" role="presentation" key={`visibility-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}>
            <button class="inline-block py-4 px-4 font-normal text-base  cursor-pointer text-center text-blue-dark rounded-t-lg border-b-2 border-transparent focus:text-white focus:font-medium focus:border-b-2 focus:border-blue-dark" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
              {currentFilter}  
            </button>
        </li>
        )
          })}
    </ul>
</div>

  )
}
export default VisibilityFilter;


{/* <div id="myTabContent">
    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div> */}


    // <Container centerContent bgColor='#4A90E2'>
    //   <Tabs>
    //     <TabList>
    //       {Object.keys(VISIBILITY_FILTER).map(filterkey => {
    //         const currentFilter = VISIBILITY_FILTER[filterkey];
    //         return (
    //           <Tab  key={`visibility-filter-${currentFilter}`}
    //             onClick={() => dispatch(setFilter(currentFilter))}
    //           >
    //             {currentFilter}
    //           </Tab>
    //         )
    //       })}
    //     </TabList>
    //   </Tabs>
    // </Container>
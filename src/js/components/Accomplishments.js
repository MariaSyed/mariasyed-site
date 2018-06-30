import React, { Component } from 'react'
import AppSection from './AppSection'
import { Heading, Tabs, Map, Tab } from 'grommet'
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter'

export default class Accomplishments extends Component {
  render() {
    return (
      <AppSection colorIndex='brand'>
        <Heading size='medium'>
          cool stuff here soon
        </Heading>
      </AppSection>
    )
    // return (
    //   <CustomSection colorIndex="neutral-2-a">
    //     <div>
    //       <Heading size="large" strong={true}>
    //         Accomplishments
    //       </Heading>
    //     </div>
    //     <Tabs style={{ width: '100%' }}>
    //       <Tab title="First Title">
    //         <AnnotatedMeter
    //           legend
    //           size="large"
    //           type="bar"
    //           max={70}
    //           series={[
    //             { label: 'First', value: 20, colorIndex: 'graph-1' },
    //             { label: 'Second', value: 50, colorIndex: 'graph-2' },
    //           ]}
    //         />
    //       </Tab>
    //       <Tab title="Second Title">
    //         <Map
    //           vertical
    //           data={{
    //             categories: [
    //               {
    //                 id: 'category-1',
    //                 label: '1996',
    //                 items: [{ id: 'item-1-1', label: 'Born' }],
    //               },
    //               {
    //                 id: 'category-2',
    //                 label: '2000',
    //                 items: [{ id: 'item-2-1', label: 'Started kindergarten' }],
    //               },
    //               {
    //                 id: 'category-3',
    //                 label: '2012',
    //                 items: [
    //                   { id: 'item-3-1', label: 'IGCSE Exams' },
    //                   {
    //                     id: 'item-3-2',
    //                     label: 'Best Across 8 A*s (2nd Place), Jeddah',
    //                   },
    //                 ],
    //               },
    //               {
    //                 id: 'category-4',
    //                 label: '2014',
    //                 items: [
    //                   { id: 'item-4-1', label: 'A Level Exams' },
    //                   { id: 'item-4-2', label: 'Career at HOPE' },
    //                 ],
    //               },
    //               {
    //                 id: 'category-5',
    //                 label: '2015',
    //                 items: [
    //                   {
    //                     id: 'item-5-1',
    //                     label:
    //                       'B.Eng at Helsinki Metropolia University of Applied Sciences',
    //                   },
    //                 ],
    //               },
    //               {
    //                 id: 'category-6',
    //                 label: '2016',
    //                 items: [
    //                   {
    //                     id: 'item-6-1',
    //                     label: 'Developer Intern at Luxus Worldwide Oy',
    //                   },
    //                 ],
    //               },
    //               {
    //                 id: 'category-7',
    //                 label: '2015',
    //                 items: [
    //                   {
    //                     id: 'item-7-1',
    //                     label: 'Software Developer at Solinor Oy',
    //                   },
    //                 ],
    //               },
    //             ],
    //             links: [
    //               { parentId: 'item-1-1', childId: 'item-2-1' },
    //               { parentId: 'item-2-1', childId: 'item-3-1' },
    //               { parentId: 'item-3-1', childId: 'item-3-2' },
    //               { parentId: 'item-3-2', childId: 'item-4-1' },
    //               { parentId: 'item-4-1', childId: 'item-4-2' },
    //               { parentId: 'item-4-2', childId: 'item-5-1' },
    //               { parentId: 'item-5-1', childId: 'item-6-1' },
    //               { parentId: 'item-6-1', childId: 'item-7-1' },
    //             ],
    //           }}
    //         />
    //       </Tab>
    //     </Tabs>
    //   </CustomSection>
    // )
  }
}

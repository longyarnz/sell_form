export default [
  {
    top: 'Please select the phone\'s carrier',
    bottom: 'Does your phone have a bad ESN/IMEI?',
    options: ['AT&T', 'Verizon', 'Sprint', 'T-Mobile', 'Unlocked']
  },
  {
    top: 'Is your device unlocked?',
    bottom: 'How do I check?',
    options: ['Yes', 'No']
  },
  {
    top: 'What is the phone\'s storage capacity?',
    bottom: 'Help me choose',
    options: ['64GB', '128GB', '256GB']
  },
  {
    top: 'What is the condition of the phone?',
    bottom: 'Tips to assess the condition of your device',
    options: [
      {
        top: 'Brand New',
        bottom: 'Phone still in factory original packaging. Must come with the box and all accessories sealed/untouched.',
        footer: [
          'Plastic film still on the device and has not been reapplied.',
          'Must come with the original box with matching serial number.',
          'Contains original accessories sealed and untouched.'
        ]
      },
      {
        top: 'Flawless',
        bottom: 'Has absolutely no scratches, scuffs or other marks. Looks brand new.',
        footer: [
          'Zero scratches, scuffs or other marks. Looks like new.',
          'Display is free of defects such as dead pixels, white spots, or burn-in.',
          'Shows no signs of liquid intrusion or damage.'
        ]
      },
      {
        top: 'Good',
        bottom: 'Shows light to moderate signs of wear. Contains few light scratches and/or dents.',
        footer: [
          'Normal signs of use. No major scratches or dents.',
          'Glass is free of any cracks or chips.',
          'Display is free of defects such as dead pixels, white spots, or burn-in.',
          'Shows no signs of liquid intrusion or damage.'
        ]
      },
      {
        top: 'Fair',
        bottom: 'Shows moderate to excessive signs of wear. Contains excessive scratching, major dents, and/or mild housing damage such as a slightly bent frame.',
        footer: [
          'Glass is free of any cracks or chips.',
          'Display may contain minor defects.',
          'Shows no signs of liquid intrusion or damage.'
        ]
      },
      {
        top: 'Broken',
        bottom: 'Cracks (regardless of size) or broken parts on either screen or body of the item.',
        footer: [
          'Cracked display or damaged housing.',
          'Display defects such as dead pixels, white spots, or burn-in.',
          'Shows signs of liquid intrusion or damage but is still functional.'
        ]
      },
    ]
  },
  {
    top: 'Is the phone fully functional?',
    bottom: 'Help me choose',
    options: [
      {
        top: 'Yes',
        bottom: 'Switches on and functions 100% as intended.'
      },
      {
        top: 'No',
        bottom: 'Does not switch on and/or is not fully functional.'
      }
    ]
  },
  {
    top: 'What accessories will be included?',
    options: ['Original Box', 'New Original Headsets', 'Powercable + Adapter']
  }
]
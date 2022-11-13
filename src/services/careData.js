const careData = {
    careTemp: {
        intermediate: {
            label: 'Intermediate',
            description: 'Plants grow well at a wide range of temperatures and do not require a significant temp drop at night.',
            tempRange: '58-70F at night, 70-85F during the day',
        },
        highland: {
            label: 'Highland',
            description: 'Plants require a significant temp drop at night and will need active cooling to thrive.',
            tempRange: '50F-62F lows at night, 70-78F during the day.'
        },
        lowland: {
            label: 'Lowland',
            description: 'Plants need warm conditions to thrive, may require heating.',
            tempRange: '70F-80F lows at night, 80-90F highs during the day.'

        },
        roomTemp: {
            label: 'Room temp',
            description: 'Plants do well at typical room tempatures.',
            tempRange: '67-80F day or night.'
        },
    }

}

export default careData
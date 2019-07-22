import Tag from '@/classes/Tag';
import moment from 'moment';

export default class RandomTagFactory {

    createRandomTag(num) {

        let colors = [
            '#CF202E',
            '#A41E36',
            '#67C8C7',
            '#00A88D',
            '#006F63',
            '#C1D42F',
            '#3DBCE7',
            '#FC9543',
            '#FFE105',
            '#000000',
        ];

        let tagNames = [
            'REVIEW',
            'ASSIGNED',
            'SOMETHING',
            'LEGAL',
            'CUSTOM TAG',
        ];

        let names = [
            '',
            'Marko M',
            'Alexander S',
        ];

        let optiosList = [
            'Notifies',
            '',
            '2 Rules',
        ];

        let id = num;

        let color = colors[Math.floor(Math.random() * colors.length)];

        let tagName = tagNames[Math.floor(Math.random() * tagNames.length)];

        let taggedItems = Math.floor(Math.random() * 100);
        if (taggedItems > 50) taggedItems = 0;

        let assignedTo = names[Math.floor(Math.random() * names.length)];

        let expungeDate = moment(new Date(+(new Date()) + Math.floor(Math.random()*10000000000)))
            .format('MMM DD, YYYY');

        let options = optiosList[Math.floor(Math.random() * optiosList.length)];

        let dateCreated = moment(new Date(+(new Date()) - Math.floor(Math.random()*10000000000)))
            .format('MMM DD, YYYY');

        let createdBy =   'Marko A';

        return new Tag(
            id,
            color,
            tagName,
            taggedItems,
            assignedTo,
            expungeDate,
            options,
            dateCreated,
            createdBy
        );

    }

}

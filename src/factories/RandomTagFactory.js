import moment from 'moment';
import Tag from '@/classes/Tag';

export default class RandomTagFactory {
  createRandomTag(num) {
    const colors = [
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

    const tagNames = [
      'REVIEW',
      'ASSIGNED',
      'SOMETHING',
      'LEGAL',
      'CUSTOM TAG',
    ];

    const names = [
      '',
      'Marko M',
      'Alexander S',
    ];

    const optiosList = [
      'Notifies',
      '',
      '2 Rules',
    ];

    const id = num;

    const color = colors[Math.floor(Math.random() * colors.length)];

    const tagName = tagNames[Math.floor(Math.random() * tagNames.length)];

    let taggedItems = Math.floor(Math.random() * 100);
    if (taggedItems > 50) taggedItems = 0;

    const assignedTo = names[Math.floor(Math.random() * names.length)];

    const expungeDate = moment(new Date(+(new Date()) + Math.floor(Math.random() * 10000000000)))
      .format('MMM DD, YYYY');

    const options = optiosList[Math.floor(Math.random() * optiosList.length)];

    const dateCreated = moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
      .format('MMM DD, YYYY');

    const createdBy = 'Marko A';

    return new Tag(
      id,
      color,
      tagName,
      taggedItems,
      assignedTo,
      expungeDate,
      options,
      dateCreated,
      createdBy,
    );
  }
}

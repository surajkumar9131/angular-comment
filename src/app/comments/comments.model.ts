export class Comments {
  static data = [
    {
      id: 1,
      text: 'default first user comment for text',
      user: {
        like: false,
        name: 'user name 1',
        profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRX1wg1zq4jaRMajgQHIoZko1fX1bHY_HF-0f_LFz5uiAEM8JFSw'
      },
      sub_comment: [
        {
          id: 1,
          text: 'default first user sub-comment for text',
          user: {
            like: false,
            name: 'user name 2',
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dTFGVCvkL7doydXFL4SiFyblSgejJJij8MZpttWI-oX6zh81'
          },
          reply: [
            {
              id: 1,
              text: 'default first user reply on sub-comment for text',
              user: {
                like: false,
                name: 'user name 3',
                profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmK2JrzaMkZJsK4SuRTgrWEiSFZBFd66UCrUrLJ53bh20Ag47nQw'
              }
            }
          ]
        }
      ]
    }
  ];
}

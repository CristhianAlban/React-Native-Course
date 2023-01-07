import { MenuItem } from '../interfaces/interfaces';

export const menuItems: MenuItem[] = [
    {
        name:'Animation 101',
        icon: 'cube-outline',
        components: 'Animation101Screen',
    },
    {
        name:'Animation 102',
        icon: 'albums-outline',
        components: 'Animation102Screen',
    },
    {
        name:'Switches',
        icon: 'toggle-outline',
        components: 'SwitchScreen',
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        components: 'AlertScreen',
    },
    {
        name: 'TextInputs',
        icon: 'document-text-outline',
        components: 'TextInputScreen',
    },
    {
        name: 'Pull to refresh',
        icon: 'refresh-outline',
        components: 'PullToRefreshScreen',
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        components: 'CustomSectionListScreen',
    },
    {
        name: 'Modal',
        icon: 'copy-outline',
        components: 'ModalScreen',
    },
    {
        name: 'InfiniteScroll',
        icon: 'download-outline',
        components: 'InfiniteScrollScreen',
    },
    {
        name: 'Slides',
        icon: 'flower-outline',
        components: 'SlidesScreen',
    },
    {
        name: 'Themes',
        icon: 'flask-outline',
        components: 'ChangeThemeScreen',
    },
];

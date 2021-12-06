/* eslint-disable import/prefer-default-export */
import { getFullPath } from './location'

export const isDiscussion = path =>
/(p=manager_discussion_detail.php)/.test(path || getFullPath())


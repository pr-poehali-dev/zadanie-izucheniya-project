import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Activity {
  id: number;
  type: string;
  task?: string;
  name?: string;
  difficulty?: string;
  date: string;
  points: number;
}

interface ActivityTabProps {
  recentActivity: Activity[];
}

const ActivityTab: React.FC<ActivityTabProps> = ({ recentActivity }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'solved': return 'CheckCircle';
      case 'achievement': return 'Trophy';
      default: return 'Activity';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return difficulty;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Activity" size={20} />
            Последняя активность
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div 
                key={activity.id} 
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                  <Icon 
                    name={getActivityIcon(activity.type) as any} 
                    size={20} 
                    className="text-purple-600" 
                  />
                </div>
                <div className="flex-1">
                  {activity.type === 'solved' ? (
                    <div>
                      <h4 className="font-semibold">Решена задача: {activity.task}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={`text-xs ${getDifficultyColor(activity.difficulty || '')}`}>
                          {getDifficultyText(activity.difficulty || '')}
                        </Badge>
                        <span className="text-sm text-gray-600">+{activity.points} очков</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold">Получено достижение: {activity.name}</h4>
                      <span className="text-sm text-gray-600">+{activity.points} очков</span>
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-500">{activity.date}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityTab;